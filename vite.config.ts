import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

interface RouteMetadata {
  path: string;
  title: string;
  description: string;
  jsonLd?: object[];
}

function seoPrerender(routesMeta: RouteMetadata[]): Plugin {
  return {
    name: "seo-prerender",
    apply: "build",
    enforce: "post",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const indexHtml = fs.readFileSync(
        path.join(distDir, "index.html"),
        "utf-8"
      );

      for (const route of routesMeta) {
        if (route.path === "/") continue; // homepage already has index.html

        const routeDir = path.join(distDir, route.path.slice(1));
        fs.mkdirSync(routeDir, { recursive: true });

        let html = indexHtml;

        // Replace title
        html = html.replace(
          /<title>[^<]*<\/title>/,
          `<title>${route.title}</title>`
        );

        // Replace meta description
        html = html.replace(
          /<meta name="description" content="[^"]*"\s*\/?>/,
          `<meta name="description" content="${route.description}" />`
        );

        // Replace OG title and description
        html = html.replace(
          /<meta property="og:title" content="[^"]*"\s*\/?>/,
          `<meta property="og:title" content="${route.title}" />`
        );
        html = html.replace(
          /<meta property="og:description" content="[^"]*"\s*\/?>/,
          `<meta property="og:description" content="${route.description}" />`
        );

        // Add canonical URL
        const canonical = `https://www.inspectngo.ca${route.path}`;
        html = html.replace(
          "</head>",
          `  <link rel="canonical" href="${canonical}" />\n  </head>`
        );

        // Replace og:url
        html = html.replace(
          /<meta property="og:url" content="[^"]*"\s*\/?>/,
          `<meta property="og:url" content="${canonical}" />`
        );

        // Add JSON-LD if provided
        if (route.jsonLd?.length) {
          const scripts = route.jsonLd
            .map(
              (data) =>
                `<script type="application/ld+json">${JSON.stringify(data)}</script>`
            )
            .join("\n  ");
          html = html.replace("</head>", `  ${scripts}\n  </head>`);
        }

        fs.writeFileSync(path.join(routeDir, "index.html"), html);
      }
    },
  };
}

// --- Route metadata ---

const locationCities = [
  "Vancouver",
  "Burnaby",
  "Surrey",
  "Richmond",
  "North Vancouver",
  "West Vancouver",
  "Coquitlam",
  "Port Coquitlam",
  "Port Moody",
  "New Westminster",
  "Langley",
  "Delta",
  "Maple Ridge",
  "Pitt Meadows",
  "White Rock",
];

function cityToSlug(city: string) {
  return `pre-purchase-car-inspection-${city.toLowerCase().replace(/\s+/g, "-")}`;
}

const locationRoutes: RouteMetadata[] = locationCities.map((city) => {
  const slug = cityToSlug(city);
  return {
    path: `/${slug}`,
    title: `Pre-Purchase Car Inspection in ${city} | InspectnGO`,
    description: `Book a certified mobile mechanic for a pre-purchase vehicle inspection in ${city}, BC. On-site inspection with a detailed report. From $220.`,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "InspectnGO Automotive Services Inc.",
        description: `Mobile pre-purchase vehicle inspection service in ${city}, BC.`,
        url: `https://www.inspectngo.ca/${slug}`,
        priceRange: "$220-$250",
        areaServed: {
          "@type": "City",
          name: city,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "BC",
          },
        },
        serviceType: "Pre-Purchase Vehicle Inspection",
      },
    ],
  };
});

const blogRoutes: RouteMetadata[] = [
  {
    path: "/blog/best-pre-purchase-inspection-metro-vancouver",
    title:
      "Best Mobile Pre-Purchase Car Inspection in Metro Vancouver | InspectnGO",
    description:
      "Looking for the best pre-purchase car inspection in Metro Vancouver? See why used car buyers choose InspectnGO — certified Red Seal mechanics, on-site service, same-day reports from $220.",
  },
  {
    path: "/blog/pre-purchase-inspection-cost-bc",
    title:
      "How Much Does a Pre-Purchase Inspection Cost in BC? | InspectnGO Blog",
    description:
      "Find out how much a pre-purchase vehicle inspection costs in British Columbia and what affects pricing.",
  },
  {
    path: "/blog/what-does-pre-purchase-inspection-include",
    title: "What Does a Pre-Purchase Inspection Include? | InspectnGO Blog",
    description:
      "Learn exactly what a certified mechanic checks during a pre-purchase vehicle inspection.",
  },
  {
    path: "/blog/how-to-buy-a-used-car-in-bc",
    title: "How to Buy a Used Car in BC: Complete Guide | InspectnGO Blog",
    description:
      "Step-by-step guide to buying a used car in British Columbia, from research to registration.",
  },
  {
    path: "/blog/buying-used-car-private-seller-bc",
    title:
      "Buying a Used Car from a Private Seller in BC | InspectnGO Blog",
    description:
      "Everything you need to know about buying a used car from a private seller in British Columbia.",
  },
  {
    path: "/blog/red-seal-mechanic-vs-regular-mechanic",
    title: "Red Seal Mechanic vs Regular Mechanic | InspectnGO Blog",
    description:
      "Understand the difference between a Red Seal certified mechanic and a regular mechanic in Canada.",
  },
  {
    path: "/blog/negotiate-used-car-price-after-inspection",
    title:
      "How to Negotiate Used Car Price After Inspection | InspectnGO Blog",
    description:
      "Learn how to use your inspection report to negotiate a fair price on a used car.",
  },
  {
    path: "/blog/become-mobile-mechanic-inspectngo",
    title: "Become a Mobile Mechanic with InspectnGO | InspectnGO Blog",
    description:
      "Join the InspectnGO network as a certified mobile mechanic and grow your business.",
  },
];

const staticRoutes: RouteMetadata[] = [
  {
    path: "/about",
    title: "About Us | InspectnGO",
    description:
      "Learn about InspectnGO — our mission to bring transparency and confidence to every used vehicle purchase in Greater Vancouver.",
  },
  {
    path: "/network",
    title: "Mechanic Network | InspectnGO",
    description:
      "Join the InspectnGO network of certified mobile mechanics performing pre-purchase vehicle inspections across Greater Vancouver.",
  },
  {
    path: "/blog",
    title: "Blog | InspectnGO",
    description:
      "Tips, guides, and insights about pre-purchase vehicle inspections, buying used cars, and automotive knowledge.",
  },
  {
    path: "/terms",
    title: "Terms of Use | InspectnGO",
    description: "Terms of use for InspectnGO services.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | InspectnGO",
    description: "Privacy policy for InspectnGO services.",
  },
  {
    path: "/disclaimer",
    title: "Disclaimer | InspectnGO",
    description: "Inspection disclaimer and limitation of liability for InspectnGO services.",
  },
];

const allRoutes = [...staticRoutes, ...locationRoutes, ...blogRoutes];

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && seoPrerender(allRoutes),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

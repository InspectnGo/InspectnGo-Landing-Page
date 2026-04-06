import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";

const routes = [
  "/",
  "/about",
  "/network",
  "/blog",
  "/terms",
  "/privacy",
  "/pre-purchase-car-inspection-vancouver",
  "/pre-purchase-car-inspection-burnaby",
  "/pre-purchase-car-inspection-surrey",
  "/pre-purchase-car-inspection-richmond",
  "/pre-purchase-car-inspection-north-vancouver",
  "/pre-purchase-car-inspection-west-vancouver",
  "/pre-purchase-car-inspection-coquitlam",
  "/pre-purchase-car-inspection-port-coquitlam",
  "/pre-purchase-car-inspection-port-moody",
  "/pre-purchase-car-inspection-new-westminster",
  "/pre-purchase-car-inspection-langley",
  "/pre-purchase-car-inspection-delta",
  "/pre-purchase-car-inspection-maple-ridge",
  "/pre-purchase-car-inspection-pitt-meadows",
  "/pre-purchase-car-inspection-white-rock",
  "/blog/pre-purchase-inspection-cost-bc",
  "/blog/what-does-pre-purchase-inspection-include",
  "/blog/how-to-buy-a-used-car-in-bc",
  "/blog/buying-used-car-private-seller-bc",
  "/blog/red-seal-mechanic-vs-regular-mechanic",
  "/blog/negotiate-used-car-price-after-inspection",
  "/blog/become-mobile-mechanic-inspectngo",
];

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
    mode === "production" &&
      prerender({
        routes,
        renderer: new PuppeteerRenderer({
          renderAfterTime: 3000,
        }),
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/seo/PageMeta";
import JsonLd from "@/components/seo/JsonLd";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import type { FaqItem } from "@/data/faqItems";
import { locations } from "@/data/locationSlugs";

interface LocationPageData {
  city: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubtext: string;
  whyHeading: string;
  whyContent: string[];
  faqItems: FaqItem[];
}

const inspectionIncludes = [
  "Engine & transmission",
  "Brakes & suspension",
  "Tires & wheels",
  "Fluids & visible leaks",
  "ECU scan for diagnostic trouble codes",
  "Exterior & interior visual check",
];

const LocationPageTemplate = ({ data }: { data: LocationPageData }) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "InspectnGO Automotive Services Inc.",
    description: `Mobile pre-purchase vehicle inspection service in ${data.city}, BC.`,
    url: `https://www.inspectngo.ca/${data.slug}`,
    priceRange: "$220-$250",
    areaServed: {
      "@type": "City",
      name: data.city,
      containedInPlace: { "@type": "AdministrativeArea", name: "BC" },
    },
    serviceType: "Pre-Purchase Vehicle Inspection",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col bg-ing-neutral">
      <PageMeta
        title={data.metaTitle}
        description={data.metaDescription}
        canonical={`https://www.inspectngo.ca/${data.slug}`}
      />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-ing-neutral py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <div className="max-w-[736px] space-y-6">
              <nav className="font-manrope text-sm text-ing-body">
                <Link to="/" className="hover:underline">Home</Link>
                <span className="mx-2">/</span>
                <span>{data.city}</span>
              </nav>
              <h1 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading">
                {data.heroHeading}
              </h1>
              <p className="text-body">
                {data.heroSubtext}
              </p>
              <a
                href="/#signup"
                className="inline-flex items-center justify-center rounded-full bg-ing-accent px-6 py-4 font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px] text-ing-brand hover:brightness-90 transition"
              >
                Book an inspection
              </a>
            </div>
          </div>
        </section>

        {/* Why section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <h2 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
              {data.whyHeading}
            </h2>
            <div className="mt-8 max-w-3xl space-y-4">
              {data.whyContent.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-body"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* What's included + Pricing */}
        <section className="bg-ing-neutral py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
                  Pricing
                </h2>
                <div className="mt-8 space-y-6">
                  <div className="rounded-2xl border border-[#e6ebf2] bg-white p-6 shadow-form">
                    <p className="font-manrope text-lg font-bold text-ing-heading">
                      Inspection + CARFAX Report
                    </p>
                    <p className="mt-2 font-heading text-[40px] font-bold text-ing-heading">
                      $250
                    </p>
                    <p className="mt-1 font-manrope text-sm text-ing-body">
                      Full inspection with a CARFAX vehicle history report included
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#e6ebf2] bg-white p-6 shadow-form">
                    <p className="font-manrope text-lg font-bold text-ing-heading">
                      Inspection Only
                    </p>
                    <p className="mt-2 font-heading text-[40px] font-bold text-ing-heading">
                      $220
                    </p>
                    <p className="mt-1 font-manrope text-sm text-ing-body">
                      Full on-site inspection without CARFAX report
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
                  What's included
                </h2>
                <ul className="mt-8 space-y-4">
                  {inspectionIncludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-ing-accent" />
                      <span className="text-body">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
              <div className="flex flex-col gap-4 lg:flex-1">
                <p className="font-manrope text-lg font-bold uppercase tracking-[-0.1px] text-ing-body">
                  Frequently Asked Questions
                </p>
                <h2 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
                  Questions about inspections in {data.city}
                </h2>
              </div>
              <div className="lg:flex-1">
                <Accordion type="single" collapsible className="w-full">
                  {data.faqItems.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-b border-ing-border"
                    >
                      <AccordionTrigger className="py-4 font-manrope text-2xl font-medium leading-[1.25] tracking-[-0.64px] text-ing-heading hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-body">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-ing-neutral py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <h2 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
              Also serving nearby areas
            </h2>
            <p className="mt-4 text-body">
              InspectnGO provides mobile pre-purchase vehicle inspections across the Greater Vancouver area.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {locations
                .filter((loc) => loc.name !== data.city)
                .map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/${loc.slug}`}
                    className="rounded-full border border-[#e6ebf2] bg-white px-4 py-2 font-manrope text-sm text-ing-body hover:border-ing-accent hover:text-ing-heading transition"
                  >
                    {loc.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <div className="space-y-8">
              <h2 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
                Ready to book your inspection?
              </h2>
              <p className="max-w-2xl text-body">
                Don't risk buying a vehicle with hidden problems. Book a professional
                pre-purchase inspection in {data.city} today and buy with confidence.
              </p>
              <a
                href="/#signup"
                className="inline-flex items-center justify-center rounded-full bg-ing-accent px-6 py-4 font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px] text-ing-brand hover:brightness-90 transition"
              >
                Get an inspection
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LocationPageTemplate;

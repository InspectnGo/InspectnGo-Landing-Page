import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import InspectionSection from "@/components/InspectionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PageMeta from "@/components/seo/PageMeta";
import JsonLd from "@/components/seo/JsonLd";
import faqItems from "@/data/faqItems";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "InspectnGO Automotive Services Inc.",
  description:
    "Mobile pre-purchase vehicle inspection service serving Greater Vancouver. Certified mechanics perform on-site inspections with detailed reports.",
  url: "https://www.inspectngo.ca",
  priceRange: "$220-$250",
  areaServed: [
    { "@type": "City", name: "Vancouver", containedInPlace: { "@type": "AdministrativeArea", name: "BC" } },
    { "@type": "City", name: "Burnaby", containedInPlace: { "@type": "AdministrativeArea", name: "BC" } },
    { "@type": "City", name: "Surrey", containedInPlace: { "@type": "AdministrativeArea", name: "BC" } },
    { "@type": "City", name: "North Vancouver", containedInPlace: { "@type": "AdministrativeArea", name: "BC" } },
    { "@type": "City", name: "Richmond", containedInPlace: { "@type": "AdministrativeArea", name: "BC" } },
    { "@type": "City", name: "Coquitlam", containedInPlace: { "@type": "AdministrativeArea", name: "BC" } },
  ],
  serviceType: "Pre-Purchase Vehicle Inspection",
};

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-ing-neutral">
      <PageMeta
        title="Mobile Pre-Purchase Vehicle Inspections | InspectnGO"
        description="Book a certified mobile mechanic for an on-site pre-purchase vehicle inspection in Greater Vancouver. Detailed report before you buy. From $220."
        canonical="https://www.inspectngo.ca"
      />
      <JsonLd data={faqSchema} />
      <JsonLd data={localBusinessSchema} />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <InspectionSection />
        <HowItWorksSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import LocationPageTemplate from "@/components/seo/LocationPageTemplate";
import type { FaqItem } from "@/data/faqItems";

const vancouverFaqItems: FaqItem[] = [
  {
    question: "How does a mobile pre-purchase inspection work in Vancouver?",
    answer:
      "Once you book through InspectnGO, we dispatch a certified mechanic directly to the vehicle's location anywhere in Vancouver — whether it's at a private seller's home, a dealership lot, or a parking area. The mechanic performs a comprehensive inspection on-site and you receive a detailed report by email.",
  },
  {
    question: "What areas in Vancouver do you cover?",
    answer:
      "We cover all of Vancouver including Downtown, East Vancouver, Kitsilano, Mount Pleasant, Commercial Drive, Dunbar, Kerrisdale, Marpole, and the surrounding Greater Vancouver area including Burnaby, Surrey, Richmond, and North Vancouver.",
  },
  {
    question: "How much does a pre-purchase inspection cost in Vancouver?",
    answer:
      "Our pre-purchase vehicle inspections in Vancouver are $250 with a CARFAX vehicle history report included, or $220 for the inspection only. This is competitive with shop-based inspections, with the added convenience of on-site service.",
  },
  {
    question: "How quickly can I get an inspection in Vancouver?",
    answer:
      "InspectnGO aims to get a mechanic to your location as quickly as possible. Booking is fast — schedule through our platform in minutes and we'll dispatch a certified mechanic to the vehicle's location.",
  },
  {
    question: "What does the inspection include?",
    answer:
      "Our inspection covers the vehicle's major components: engine, transmission, brakes, suspension, tires, fluids, visible leaks, ECU scan for diagnostic trouble codes, and a visual check of the exterior and interior. You receive a clear, detailed report outlining the vehicle's condition.",
  },
  {
    question: "Can I use this for a vehicle from a private seller in Vancouver?",
    answer:
      "Absolutely. Many of our inspections in Vancouver are for vehicles being sold privately. Our mechanic comes directly to the seller's location — a driveway, parking lot, or anywhere the vehicle is — so you don't need to coordinate bringing it to a shop.",
  },
];

const Vancouver = () => (
  <LocationPageTemplate
    data={{
      city: "Vancouver",
      slug: "pre-purchase-car-inspection-vancouver",
      metaTitle:
        "Pre-Purchase Car Inspection Vancouver | Mobile Mechanic | InspectnGO",
      metaDescription:
        "Book a mobile pre-purchase car inspection in Vancouver. Certified mechanic comes to the vehicle. Detailed report + optional CARFAX. From $220.",
      heroHeading: "Pre-Purchase Car Inspection in Vancouver",
      heroSubtext:
        "Buying a used car in Vancouver? Get a certified mobile mechanic to inspect the vehicle on-site before you commit. We come to the car — at a dealership, private seller's home, or anywhere in Vancouver — and deliver a detailed inspection report so you know exactly what you're buying.",
      whyHeading: "Why get an inspection in Vancouver?",
      whyContent: [
        "Vancouver's used car market is one of the busiest in British Columbia. With thousands of vehicles changing hands every month — from private sales on Craigslist and Facebook Marketplace to dealership lots across the city — the chances of encountering a vehicle with undisclosed mechanical issues are real.",
        "A pre-purchase inspection gives you an objective, professional assessment of the vehicle's condition before you hand over your money. Our certified mechanics check everything from the engine and transmission to the brakes, suspension, and electronics.",
        "Unlike shop-based inspections that require you to bring the vehicle in (and convince the seller to cooperate), InspectnGO comes to the car. This makes the process faster, easier, and more likely to actually happen — which is exactly why mobile inspections are becoming the standard for smart used car buyers in Vancouver.",
      ],
      faqItems: vancouverFaqItems,
    }}
  />
);

export default Vancouver;

import LocationPageTemplate from "@/components/seo/LocationPageTemplate";
import type { FaqItem } from "@/data/faqItems";

const northVancouverFaqItems: FaqItem[] = [
  {
    question:
      "How does a mobile pre-purchase inspection work in North Vancouver?",
    answer:
      "After you book through InspectnGO, we send a certified mechanic directly to the vehicle's location anywhere in North Vancouver — whether it's in Lower Lonsdale, Lynn Valley, Deep Cove, or anywhere else on the North Shore. The mechanic performs a full inspection on-site and you receive a detailed report by email.",
  },
  {
    question: "What areas in North Vancouver do you cover?",
    answer:
      "We cover all of the City and District of North Vancouver including Lower Lonsdale, Lynn Valley, Deep Cove, Capilano, Edgemont, Seymour, Norgate, Pemberton Heights, and the wider North Shore. We also serve neighbouring communities like West Vancouver, Squamish, and across the bridges into Vancouver and Burnaby.",
  },
  {
    question:
      "How much does a pre-purchase inspection cost in North Vancouver?",
    answer:
      "Our pre-purchase vehicle inspections in North Vancouver are $250 with a CARFAX vehicle history report included, or $220 for the inspection only. This is competitive with shop-based inspections, with the added convenience of on-site mobile service.",
  },
  {
    question:
      "How quickly can I get an inspection scheduled in North Vancouver?",
    answer:
      "InspectnGO aims to get a mechanic to your location as quickly as possible. Booking is fast — schedule through our platform in minutes and we'll dispatch a certified mechanic to the vehicle's location anywhere on the North Shore.",
  },
  {
    question: "What does the inspection include?",
    answer:
      "Our inspection covers the vehicle's major components: engine, transmission, brakes, suspension, tires, fluids, visible leaks, ECU scan for diagnostic trouble codes, and a visual check of the exterior and interior. You receive a clear, detailed report outlining the vehicle's condition.",
  },
  {
    question:
      "Can I use this for a private sale in areas like Lynn Valley or Deep Cove?",
    answer:
      "Absolutely. Many of our North Vancouver inspections are for vehicles being sold privately in residential neighbourhoods like Lynn Valley, Deep Cove, Edgemont, and Lower Lonsdale. Our mechanic comes directly to the seller's driveway or street — no need to arrange a trip to a shop.",
  },
];

const NorthVancouver = () => (
  <LocationPageTemplate
    data={{
      city: "North Vancouver",
      slug: "pre-purchase-car-inspection-north-vancouver",
      metaTitle:
        "Pre-Purchase Car Inspection North Vancouver | Mobile Mechanic | InspectnGO",
      metaDescription:
        "Book a mobile pre-purchase car inspection in North Vancouver. Certified mechanic comes to the vehicle. Detailed report + optional CARFAX. From $220.",
      heroHeading: "Pre-Purchase Car Inspection in North Vancouver",
      heroSubtext:
        "Buying a used car in North Vancouver? Get a certified mobile mechanic to inspect the vehicle on-site before you commit. Whether the car is parked in Lower Lonsdale, tucked away in Lynn Valley, or listed at a dealership on Marine Drive, we come to the vehicle and deliver a detailed inspection report so you know exactly what you're buying.",
      whyHeading: "Why get an inspection in North Vancouver?",
      whyContent: [
        "North Vancouver has an active used car market shaped by its tight-knit North Shore community. Listings frequently appear on Craigslist, Facebook Marketplace, and local buy-and-sell groups, with vehicles ranging from family SUVs suited to mountain roads to commuter cars used for the daily bridge crossing into Vancouver. With that volume comes the risk of undisclosed mechanical problems.",
        "The North Shore is split between the City and District of North Vancouver, each with its own mix of residential streets, commercial areas, and dealership lots. Sellers are spread across neighbourhoods from Capilano and Edgemont to Seymour and Deep Cove — making it impractical to haul every prospective purchase to a shop for evaluation. A mobile inspection eliminates that hassle entirely.",
        "InspectnGO sends a certified mechanic directly to the vehicle, wherever it is on the North Shore. You get a professional, objective assessment of the engine, transmission, brakes, suspension, and electronics without coordinating shop visits or relying on the seller's word. It's the fastest and most practical way to buy a used car with confidence in North Vancouver.",
      ],
      faqItems: northVancouverFaqItems,
    }}
  />
);

export default NorthVancouver;

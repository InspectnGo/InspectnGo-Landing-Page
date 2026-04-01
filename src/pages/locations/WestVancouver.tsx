import LocationPageTemplate from "@/components/seo/LocationPageTemplate";
import type { FaqItem } from "@/data/faqItems";

const westVancouverFaqItems: FaqItem[] = [
  {
    question:
      "How does a mobile pre-purchase inspection work in West Vancouver?",
    answer:
      "After you book through InspectnGO, we send a certified mechanic directly to the vehicle's location anywhere in West Vancouver — whether it's at a private residence in the British Properties, a dealership near Park Royal, or a meeting spot in Ambleside. The mechanic performs the full inspection on-site and emails you a detailed report.",
  },
  {
    question: "What areas in West Vancouver do you cover?",
    answer:
      "We cover all of West Vancouver including Ambleside, Dundarave, Horseshoe Bay, Caulfeild, Eagle Harbour, British Properties, Panorama Village, Cypress Park, and Park Royal. We also serve nearby communities like Lions Bay and North Vancouver.",
  },
  {
    question:
      "How much does a pre-purchase inspection cost in West Vancouver?",
    answer:
      "Our pre-purchase vehicle inspections in West Vancouver are $250 with a CARFAX vehicle history report included, or $220 for the inspection only. This is competitive with shop-based inspections, with the added convenience of on-site service anywhere in West Vancouver.",
  },
  {
    question: "How quickly can I get an inspection in West Vancouver?",
    answer:
      "InspectnGO aims to get a mechanic to your location as quickly as possible. Book through our platform in minutes and we'll dispatch a certified mechanic to the vehicle — whether it's in Dundarave, Caulfeild, or anywhere else in the district.",
  },
  {
    question: "What does the inspection include?",
    answer:
      "Our inspection covers the vehicle's major components: engine, transmission, brakes, suspension, tires, fluids, visible leaks, ECU scan for diagnostic trouble codes, and a visual check of the exterior and interior. You receive a clear, detailed report outlining the vehicle's condition.",
  },
  {
    question:
      "Can I use this for a private sale vehicle in West Vancouver?",
    answer:
      "Yes. Many of our West Vancouver inspections are for private sales — sellers in areas like Ambleside, British Properties, and Horseshoe Bay. Our mechanic comes directly to the seller's driveway, street, or any agreed-upon location so you don't need to arrange a trip to a shop.",
  },
];

const WestVancouver = () => (
  <LocationPageTemplate
    data={{
      city: "West Vancouver",
      slug: "pre-purchase-car-inspection-west-vancouver",
      metaTitle:
        "Pre-Purchase Car Inspection West Vancouver | Mobile Mechanic | InspectnGO",
      metaDescription:
        "Book a mobile pre-purchase car inspection in West Vancouver. Certified mechanic comes to the vehicle. Detailed report + optional CARFAX. From $220.",
      heroHeading: "Pre-Purchase Car Inspection in West Vancouver",
      heroSubtext:
        "Buying a used car in West Vancouver? Get a certified mobile mechanic to inspect the vehicle on-site before you buy. We come to the car — whether it's parked in Ambleside, Dundarave, the British Properties, or anywhere in the district — and deliver a detailed inspection report so you can buy with confidence.",
      whyHeading: "Why get an inspection in West Vancouver?",
      whyContent: [
        "West Vancouver's used car market tends toward higher-end and luxury vehicles. From well-maintained European SUVs in the British Properties to weekend cars stored near Horseshoe Bay, the vehicles here often carry higher price tags — which means more money at stake if something is missed. A pre-purchase inspection ensures you're not inheriting hidden mechanical problems on a vehicle worth tens of thousands of dollars.",
        "As a smaller community compared to Vancouver or Burnaby, West Vancouver has fewer auto repair shops and independent mechanics available for one-off inspections. Coordinating a shop visit means driving across the Lions Gate Bridge or up the Sea-to-Sky corridor, which adds time and hassle for both buyer and seller. A mobile inspection eliminates that entirely — our mechanic comes to wherever the car is.",
        "Whether you're buying from a private seller in Caulfeild, picking up a vehicle from a Park Royal-area dealership, or looking at a listing in Dundarave, InspectnGO makes the inspection process simple. No shop appointments, no back-and-forth with the seller about logistics — just a certified mechanic, a thorough inspection, and a clear report delivered to your inbox.",
      ],
      faqItems: westVancouverFaqItems,
    }}
  />
);

export default WestVancouver;

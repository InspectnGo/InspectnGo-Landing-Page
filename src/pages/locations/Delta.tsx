import LocationPageTemplate from "@/components/seo/LocationPageTemplate";
import type { FaqItem } from "@/data/faqItems";

const deltaFaqItems: FaqItem[] = [
  {
    question: "How does a mobile pre-purchase inspection work in Delta?",
    answer:
      "After you book through InspectnGO, we send a certified mechanic directly to the vehicle's location anywhere in Delta — whether it's a private driveway in Ladner, a dealership in North Delta, or a parking area near the Tsawwassen ferry terminal. The mechanic performs a full inspection on-site and you receive a detailed report by email.",
  },
  {
    question: "What areas of Delta do you cover?",
    answer:
      "We cover all of Delta including Ladner, Tsawwassen, North Delta, Sunbury, Annieville, and Scottsdale. We also serve nearby cities like Surrey, Richmond, New Westminster, Burnaby, White Rock, and Langley.",
  },
  {
    question: "How much does a pre-purchase inspection cost in Delta?",
    answer:
      "Our pre-purchase vehicle inspections in Delta are $250 with a CARFAX vehicle history report included, or $220 for the inspection only. This is competitive with shop-based inspections, with the added convenience of on-site mobile service.",
  },
  {
    question:
      "Can I get an inspection at a private seller's location in Ladner or Tsawwassen?",
    answer:
      "Yes — private sales make up a large share of our inspections in Delta. Whether the vehicle is at a home in Ladner Village, a residential street in Tsawwassen, or a lot along Highway 17, our mechanic travels directly to the car so you don't need to arrange a trip to a shop.",
  },
  {
    question: "What does the inspection include?",
    answer:
      "Our inspection covers the vehicle's major components: engine, transmission, brakes, suspension, tires, fluids, visible leaks, ECU scan for diagnostic trouble codes, and a visual check of the exterior and interior. You receive a clear, detailed report outlining the vehicle's condition.",
  },
  {
    question: "How quickly can I book an inspection in Delta?",
    answer:
      "Booking is fast — schedule through our platform in minutes and we'll dispatch a certified mechanic to the vehicle's location in Delta. Whether you're meeting a seller in North Delta after work or viewing a car in Tsawwassen on the weekend, InspectnGO aims to get a mechanic to you as quickly as possible so you don't lose out on a vehicle you're interested in.",
  },
];

const Delta = () => (
  <LocationPageTemplate
    data={{
      city: "Delta",
      slug: "pre-purchase-car-inspection-delta",
      metaTitle:
        "Pre-Purchase Car Inspection Delta | Mobile Mechanic | InspectnGO",
      metaDescription:
        "Book a mobile pre-purchase car inspection in Delta. Certified mechanic comes to the vehicle. Detailed report + optional CARFAX. From $220.",
      heroHeading: "Pre-Purchase Car Inspection in Delta",
      heroSubtext:
        "Buying a used car in Delta? Get a certified mobile mechanic to inspect the vehicle on-site before you commit. We come to the car — at a dealership on Scott Road, a private seller's home in Ladner, a driveway in Tsawwassen, or anywhere in Delta — and deliver a detailed inspection report so you know exactly what you're buying.",
      whyHeading: "Why get an inspection in Delta?",
      whyContent: [
        "Delta is made up of three distinct communities — Ladner, Tsawwassen, and North Delta — each with its own character and a steady flow of private vehicle sales. Ladner's village core, the residential streets around Tsawwassen Town Centre, and North Delta's neighborhoods along Scott Road all see regular listings on Craigslist, Facebook Marketplace, and local dealership lots. With vehicles spread across these communities, having a mechanic come to the car saves time and eliminates the hassle of coordinating a shop visit.",
        "Delta's location at the southwestern edge of Metro Vancouver makes it a natural crossroads for used car transactions. The Tsawwassen ferry terminal brings buyers and sellers together from Vancouver Island, while Highway 99 and the Alex Fraser Bridge connect Delta to Richmond, Surrey, and points beyond. Vehicles listed in Delta often attract interest from across the region, making a mobile inspection the most practical way to get an objective assessment without delays.",
        "Much of Delta is agricultural land and spread-out suburban development, which means vehicles for sale are often parked in locations far from the nearest mechanic shop. A seller in rural Ladner or a residential cul-de-sac in Sunbury may be a 20-minute drive from the closest garage. InspectnGO removes that barrier entirely — our mechanic comes directly to the vehicle, performs a thorough inspection covering the engine, transmission, brakes, suspension, and more, and sends you a detailed report so you can buy with confidence.",
      ],
      faqItems: deltaFaqItems,
    }}
  />
);

export default Delta;

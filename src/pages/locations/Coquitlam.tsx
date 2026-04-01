import LocationPageTemplate from "@/components/seo/LocationPageTemplate";
import type { FaqItem } from "@/data/faqItems";

const coquitlamFaqItems: FaqItem[] = [
  {
    question: "How does a mobile pre-purchase inspection work in Coquitlam?",
    answer:
      "After you book through InspectnGO, we send a certified mechanic directly to wherever the vehicle is located in Coquitlam — a seller's home on Burke Mountain, a dealership near Coquitlam Centre, a parking lot in Austin Heights, or anywhere else. The mechanic inspects the vehicle on the spot and emails you a detailed condition report.",
  },
  {
    question: "What Coquitlam neighborhoods do you cover?",
    answer:
      "We cover all of Coquitlam including Coquitlam Centre, Burke Mountain, Westwood Plateau, Austin Heights, Maillardville, Ranch Park, Eagle Ridge, River Springs, and Town Centre. We also serve the wider Tri-Cities area including Port Coquitlam, Port Moody, and nearby cities like Burnaby and New Westminster.",
  },
  {
    question: "How much does a pre-purchase inspection cost in Coquitlam?",
    answer:
      "Our pre-purchase inspections in Coquitlam are $250 with a CARFAX vehicle history report included, or $220 for the inspection alone. There are no hidden fees — the price covers the full on-site inspection and your detailed report.",
  },
  {
    question: "How quickly can I get an inspection scheduled in Coquitlam?",
    answer:
      "Booking takes just a few minutes through our platform. Once scheduled, we dispatch a certified mechanic to the vehicle's location as quickly as possible so you don't lose out on a deal while waiting.",
  },
  {
    question: "What does the inspection cover?",
    answer:
      "The inspection covers all major vehicle systems: engine, transmission, brakes, suspension, tires, fluids, visible leaks, an ECU scan for diagnostic trouble codes, and a thorough visual check of the exterior and interior. Everything is documented in a clear report sent to your email.",
  },
  {
    question:
      "Can I use this service for a private sale in Coquitlam?",
    answer:
      "Yes — private sales are one of the most common reasons people book with us in Coquitlam. Our mechanic goes directly to the seller's location, whether that's a home up on Westwood Plateau, a driveway in Maillardville, or a meetup spot near Coquitlam Centre mall. No need to ask the seller to drive the car to a shop.",
  },
];

const Coquitlam = () => (
  <LocationPageTemplate
    data={{
      city: "Coquitlam",
      slug: "pre-purchase-car-inspection-coquitlam",
      metaTitle:
        "Pre-Purchase Car Inspection Coquitlam | Mobile Mechanic | InspectnGO",
      metaDescription:
        "Book a mobile pre-purchase car inspection in Coquitlam. Certified mechanic comes to the vehicle. Detailed report + optional CARFAX. From $220.",
      heroHeading: "Pre-Purchase Car Inspection in Coquitlam",
      heroSubtext:
        "Buying a used car in Coquitlam? Have a certified mobile mechanic inspect it on-site before you commit. We come to the vehicle — whether it's at a dealership near Lougheed Highway, a private seller's home on Burke Mountain, or a parking lot in Austin Heights — and send you a detailed inspection report so you can buy with confidence.",
      whyHeading: "Why get an inspection in Coquitlam?",
      whyContent: [
        "Coquitlam is the largest city in the Tri-Cities and a major hub for used car sales in the eastern Metro Vancouver area. With a rapidly growing population and new developments across Burke Mountain, Westwood Plateau, and the Town Centre, more vehicles change hands here every year. Dealerships along Lougheed Highway and private listings from across the Tri-Cities make Coquitlam one of the busiest markets for secondhand vehicles in the region.",
        "A pre-purchase inspection from a certified mechanic gives you a clear picture of what you're actually buying. We check the engine, transmission, brakes, suspension, electronics, and more — catching problems that aren't visible in listing photos or during a quick test drive. Whether the car is parked at a lot near Coquitlam Centre or in a driveway in Ranch Park, our mechanic comes directly to it.",
        "Because Coquitlam sits alongside Port Coquitlam and Port Moody and is well connected to Burnaby and New Westminster via the Evergreen Extension, buyers here often browse vehicles across multiple cities. InspectnGO's mobile service means you don't need to coordinate shop visits in different areas — just book online, and we handle the inspection wherever the car happens to be.",
      ],
      faqItems: coquitlamFaqItems,
    }}
  />
);

export default Coquitlam;

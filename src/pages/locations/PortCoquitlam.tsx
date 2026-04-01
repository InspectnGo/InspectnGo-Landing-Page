import LocationPageTemplate from "@/components/seo/LocationPageTemplate";
import type { FaqItem } from "@/data/faqItems";

const portCoquitlamFaqItems: FaqItem[] = [
  {
    question:
      "How does a mobile pre-purchase inspection work in Port Coquitlam?",
    answer:
      "After you book through InspectnGO, we send a certified mechanic directly to wherever the vehicle is located in Port Coquitlam — a seller's driveway in Citadel Heights, a dealership along Lougheed Highway, a parking lot near PoCo Town Centre, or anywhere else. The mechanic inspects the vehicle on the spot and emails you a detailed condition report.",
  },
  {
    question: "What Port Coquitlam neighborhoods do you cover?",
    answer:
      "We cover all of Port Coquitlam including Citadel Heights, Oxford Heights, Mary Hill, Shaughnessy, Birchland Manor, Riverwood, Lincoln Park, and the Kingsway Avenue commercial area. We also serve nearby cities like Coquitlam, Pitt Meadows, and Maple Ridge.",
  },
  {
    question:
      "How much does a pre-purchase inspection cost in Port Coquitlam?",
    answer:
      "Our pre-purchase inspections in Port Coquitlam are $250 with a CARFAX vehicle history report included, or $220 for the inspection alone. There are no hidden fees — the price covers the full on-site inspection and your detailed report.",
  },
  {
    question:
      "How quickly can I get an inspection scheduled in Port Coquitlam?",
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
      "Can I use this service for a private sale in Port Coquitlam?",
    answer:
      "Yes — private sales are one of the most common reasons people book with us in Port Coquitlam. Our mechanic goes directly to the seller's location, whether that's a home in Oxford Heights or a meetup spot near Mary Hill. No need to ask the seller to drive the car to a shop.",
  },
];

const PortCoquitlam = () => (
  <LocationPageTemplate
    data={{
      city: "Port Coquitlam",
      slug: "pre-purchase-car-inspection-port-coquitlam",
      metaTitle:
        "Pre-Purchase Car Inspection Port Coquitlam | Mobile Mechanic | InspectnGO",
      metaDescription:
        "Book a mobile pre-purchase car inspection in Port Coquitlam. Certified mechanic comes to the vehicle. Detailed report + optional CARFAX. From $220.",
      heroHeading: "Pre-Purchase Car Inspection in Port Coquitlam",
      heroSubtext:
        "Buying a used car in Port Coquitlam? Have a certified mobile mechanic inspect it on-site before you buy. We come to the vehicle — whether it's listed by a private seller in Citadel Heights, parked at a lot along Lougheed Highway, or sitting in a driveway in Oxford Heights — and send you a detailed inspection report so you can buy with confidence.",
      whyHeading: "Why get an inspection in Port Coquitlam?",
      whyContent: [
        "Port Coquitlam is a smaller, tight-knit community within the Tri-Cities, and its residential character means a large share of used car sales here happen between private parties. Listings from neighborhoods like Shaughnessy, Birchland Manor, and Mary Hill regularly appear on Facebook Marketplace and Craigslist, and without a proper inspection it's easy to end up with a vehicle that has expensive hidden problems.",
        "A pre-purchase inspection from a certified mechanic gives you a clear picture of what you're actually buying. We check the engine, transmission, brakes, suspension, electronics, and more — catching issues that photos and a test drive can't reveal. Whether the car is parked outside a townhouse in Lincoln Park or at a small lot near Kingsway Avenue, our mechanic comes directly to it.",
        "Because Port Coquitlam sits between Coquitlam and Maple Ridge, buyers here often browse vehicles across multiple nearby cities. InspectnGO's mobile service means you don't have to arrange separate shop visits in Pitt Meadows, Coquitlam, or further out — just book online, and we handle the rest wherever the car happens to be.",
      ],
      faqItems: portCoquitlamFaqItems,
    }}
  />
);

export default PortCoquitlam;

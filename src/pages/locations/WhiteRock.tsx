import LocationPageTemplate from "@/components/seo/LocationPageTemplate";
import type { FaqItem } from "@/data/faqItems";

const whiteRockFaqItems: FaqItem[] = [
  {
    question: "How does a mobile pre-purchase inspection work in White Rock?",
    answer:
      "After you book through InspectnGO, we send a certified mechanic directly to wherever the vehicle is located in White Rock — a seller's home near the waterfront, a dealership along Johnston Road, a parking lot by East Beach, or anywhere else in the city. The mechanic inspects the vehicle on the spot and emails you a detailed condition report.",
  },
  {
    question: "What White Rock areas do you cover?",
    answer:
      "We cover all of White Rock including the waterfront strip, Five Corners, East Beach, West Beach, Hillcrest, and the Johnston Heights area along the South Surrey border. We also serve nearby communities like Ocean Park, Crescent Beach, Semiahmoo, and the rest of South Surrey.",
  },
  {
    question: "How much does a pre-purchase inspection cost in White Rock?",
    answer:
      "Our pre-purchase inspections in White Rock are $250 with a CARFAX vehicle history report included, or $220 for the inspection alone. There are no hidden fees — the price covers the full on-site inspection and your detailed report.",
  },
  {
    question: "How quickly can I get an inspection scheduled in White Rock?",
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
      "Can I use this service for a private sale in White Rock?",
    answer:
      "Absolutely — private sales are one of the most common reasons people book with us in White Rock. Facebook Marketplace and Craigslist listings frequently feature vehicles from White Rock and South Surrey. Our mechanic goes directly to the seller's location, whether that's a home near the promenade, a driveway up in Hillcrest, or a meetup spot by Five Corners. No need to ask the seller to drive the car to a shop.",
  },
];

const WhiteRock = () => (
  <LocationPageTemplate
    data={{
      city: "White Rock",
      slug: "pre-purchase-car-inspection-white-rock",
      metaTitle:
        "Pre-Purchase Car Inspection White Rock | Mobile Mechanic | InspectnGO",
      metaDescription:
        "Book a mobile pre-purchase car inspection in White Rock. Certified mechanic comes to the vehicle. Detailed report + optional CARFAX. From $220.",
      heroHeading: "Pre-Purchase Car Inspection in White Rock",
      heroSubtext:
        "Buying a used car in White Rock? Have a certified mobile mechanic inspect it on-site before you commit. We come to the vehicle — whether it's listed by a private seller near the waterfront, parked at a home in Hillcrest, or sitting at a lot along Johnston Road — and send you a detailed inspection report so you can buy with confidence.",
      whyHeading: "Why get an inspection in White Rock?",
      whyContent: [
        "White Rock is a charming oceanside community perched right at the US border, known for its scenic promenade, mild climate, and relaxed pace of life. Popular with retirees, families, and anyone drawn to beachside living, the city has a steady supply of well-maintained used vehicles — many of them low-mileage cars owned by long-time residents who take pride in their upkeep. Private sale listings from White Rock and neighbouring South Surrey regularly appear on Facebook Marketplace and Craigslist, alongside inventory from dealerships along Johnston Road and King George Boulevard.",
        "As a smaller city, White Rock has limited local mechanic shop options, and coordinating a pre-purchase inspection at a busy shop can mean delays that cost you a deal. InspectnGO eliminates that problem entirely — our certified mechanic comes directly to wherever the vehicle is located, whether that's a driveway near East Beach, a parking lot by Five Corners, or a seller's home up in the Hillcrest neighbourhood. You get a thorough, professional inspection without the hassle of arranging a shop visit.",
        "White Rock's location at the southern tip of Metro Vancouver makes it a natural meeting point for buyers browsing vehicles across Surrey, Delta, Langley, and beyond. InspectnGO's mobile service means you don't need to coordinate shop appointments in different cities — just book online, and we handle the inspection wherever the car happens to be.",
      ],
      faqItems: whiteRockFaqItems,
    }}
  />
);

export default WhiteRock;

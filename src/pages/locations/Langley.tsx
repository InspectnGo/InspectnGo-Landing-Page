import LocationPageTemplate from "@/components/seo/LocationPageTemplate";
import type { FaqItem } from "@/data/faqItems";

const langleyFaqItems: FaqItem[] = [
  {
    question: "How does a mobile pre-purchase inspection work in Langley?",
    answer:
      "After you book through InspectnGO, we send a certified mechanic directly to wherever the vehicle is located in Langley — a seller's driveway in Willoughby, a dealership along the Langley Bypass, a parking lot in Walnut Grove, or anywhere else in the Township or City. The mechanic inspects the vehicle on the spot and emails you a detailed condition report.",
  },
  {
    question: "What Langley neighborhoods do you cover?",
    answer:
      "We cover all of the Township of Langley and the City of Langley including Willoughby, Walnut Grove, Murrayville, Fort Langley, Brookswood, Aldergrove, Langley City centre, Willowbrook, and Fernridge. We also serve nearby cities like Surrey, Abbotsford, Maple Ridge, and White Rock.",
  },
  {
    question: "How much does a pre-purchase inspection cost in Langley?",
    answer:
      "Our pre-purchase inspections in Langley are $250 with a CARFAX vehicle history report included, or $220 for the inspection alone. There are no hidden fees — the price covers the full on-site inspection and your detailed report.",
  },
  {
    question: "How quickly can I get an inspection scheduled in Langley?",
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
      "Can I use this service for a private sale in Langley?",
    answer:
      "Absolutely — private sales are one of the most common reasons people book with us in Langley. Facebook Marketplace and Craigslist listings from across the Fraser Valley often have vehicles located in Langley. Our mechanic goes directly to the seller's location, whether that's a home in Brookswood, a driveway in Walnut Grove, or a meetup spot near Willowbrook mall. No need to ask the seller to drive the car to a shop.",
  },
];

const Langley = () => (
  <LocationPageTemplate
    data={{
      city: "Langley",
      slug: "pre-purchase-car-inspection-langley",
      metaTitle:
        "Pre-Purchase Car Inspection Langley | Mobile Mechanic | InspectnGO",
      metaDescription:
        "Book a mobile pre-purchase car inspection in Langley. Certified mechanic comes to the vehicle. Detailed report + optional CARFAX. From $220.",
      heroHeading: "Pre-Purchase Car Inspection in Langley",
      heroSubtext:
        "Buying a used car in Langley? Have a certified mobile mechanic inspect it on-site before you commit. We come to the vehicle — whether it's listed by a private seller in Willoughby, sitting at a dealership along the Langley Bypass, or parked at a home in Walnut Grove — and send you a detailed inspection report so you can buy with confidence.",
      whyHeading: "Why get an inspection in Langley?",
      whyContent: [
        "Langley is one of the fastest-growing communities in the Fraser Valley and a major market for used vehicle sales. Split between the Township of Langley and the City of Langley, the area spans everything from the historic village of Fort Langley to the rapidly expanding neighborhoods of Willoughby and Brookswood. Dealerships line the Langley Bypass and Fraser Highway, and thousands of private listings pop up each month on Facebook Marketplace and Craigslist — many featuring the trucks and SUVs that are popular with Langley's suburban and semi-rural lifestyle.",
        "A pre-purchase inspection from a certified mechanic gives you a clear picture of what you're actually buying. We check the engine, transmission, brakes, suspension, electronics, and more — catching problems that aren't visible in listing photos or during a quick test drive. Whether the vehicle is parked at a lot near Willowbrook Shopping Centre or in a driveway out in Aldergrove, our mechanic comes directly to it.",
        "Langley sits at the gateway to the Fraser Valley, making it a natural crossroads for buyers browsing vehicles in Surrey, Abbotsford, Maple Ridge, and beyond. InspectnGO's mobile service means you don't need to coordinate shop visits across different cities — just book online, and we handle the inspection wherever the car happens to be.",
      ],
      faqItems: langleyFaqItems,
    }}
  />
);

export default Langley;

import LocationPageTemplate from "@/components/seo/LocationPageTemplate";
import type { FaqItem } from "@/data/faqItems";

const burnabyFaqItems: FaqItem[] = [
  {
    question: "How does a mobile pre-purchase inspection work in Burnaby?",
    answer:
      "After you book through InspectnGO, we send a certified mechanic directly to wherever the vehicle is located in Burnaby — a seller's driveway, a dealership on Kingsway, a parking lot near Metrotown, or anywhere else. The mechanic inspects the vehicle on the spot and emails you a detailed condition report.",
  },
  {
    question: "What Burnaby neighborhoods do you cover?",
    answer:
      "We cover all of Burnaby including Metrotown, Brentwood, Edmonds, Lougheed, Burnaby Heights, Deer Lake, Capitol Hill, Willingdon Heights, South Slope, and the Big Bend industrial area. We also serve nearby cities like New Westminster, Coquitlam, and Vancouver.",
  },
  {
    question: "How much does a pre-purchase inspection cost in Burnaby?",
    answer:
      "Our pre-purchase inspections in Burnaby are $250 with a CARFAX vehicle history report included, or $220 for the inspection alone. There are no hidden fees — the price covers the full on-site inspection and your detailed report.",
  },
  {
    question: "How quickly can I get an inspection scheduled in Burnaby?",
    answer:
      "Booking takes just a few minutes through our platform. Once scheduled, we dispatch a certified mechanic to the vehicle's location as quickly as possible so you don't lose out on a deal while waiting.",
  },
  {
    question: "What does the inspection cover?",
    answer:
      "The inspection covers all major vehicle systems: engine, transmission, brakes, suspension, tires, fluids, visible leaks, an ECU scan for diagnostic trouble codes, and a thorough visual check of the exterior and interior. Everything is documented in a clear report sent to your email.",
  },
  {
    question: "Can I use this service for a private sale in Burnaby?",
    answer:
      "Yes — private sales are one of the most common reasons people book with us in Burnaby. Our mechanic goes directly to the seller's location, whether that's a home in Edmonds or a meetup spot near Brentwood. No need to ask the seller to drive the car to a shop.",
  },
];

const Burnaby = () => (
  <LocationPageTemplate
    data={{
      city: "Burnaby",
      slug: "pre-purchase-car-inspection-burnaby",
      metaTitle:
        "Pre-Purchase Car Inspection Burnaby | Mobile Mechanic | InspectnGO",
      metaDescription:
        "Book a mobile pre-purchase car inspection in Burnaby. Certified mechanic comes to the vehicle. Detailed report + optional CARFAX. From $220.",
      heroHeading: "Pre-Purchase Car Inspection in Burnaby",
      heroSubtext:
        "Buying a used car in Burnaby? Have a certified mobile mechanic inspect it on-site before you buy. We come to the vehicle — whether it's parked at a dealership on Kingsway, a private seller's home near Metrotown, or anywhere else in Burnaby — and send you a detailed inspection report so you can buy with confidence.",
      whyHeading: "Why get an inspection in Burnaby?",
      whyContent: [
        "Burnaby sits at the center of Metro Vancouver and sees a high volume of used car sales. The Kingsway corridor alone is lined with dealerships and private sellers, and neighborhoods like Metrotown and Brentwood are common meeting points for marketplace transactions. With that much activity, the risk of buying a vehicle with hidden problems is something every buyer should take seriously.",
        "A pre-purchase inspection from a certified mechanic gives you a clear picture of what you're actually buying. We check the engine, transmission, brakes, suspension, electronics, and more — catching issues that aren't visible in photos or a test drive. Whether the car is at a lot on Canada Way or parked in a driveway in Burnaby Heights, our mechanic comes to it.",
        "Because Burnaby borders Vancouver, New Westminster, and Coquitlam, buyers here often look at vehicles across multiple cities. InspectnGO's mobile service means you don't have to coordinate shop visits in different areas — just book, and we handle the rest wherever the car happens to be.",
      ],
      faqItems: burnabyFaqItems,
    }}
  />
);

export default Burnaby;

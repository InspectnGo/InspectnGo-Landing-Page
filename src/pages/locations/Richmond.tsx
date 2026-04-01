import LocationPageTemplate from "@/components/seo/LocationPageTemplate";
import type { FaqItem } from "@/data/faqItems";

const richmondFaqItems: FaqItem[] = [
  {
    question: "How does a mobile pre-purchase inspection work in Richmond?",
    answer:
      "After you book through InspectnGO, we send a certified mechanic directly to wherever the vehicle is located in Richmond — whether that's a dealership on No. 3 Road, a private seller's driveway in Steveston, or a parking lot in Brighouse. The mechanic performs a full inspection on-site and emails you a detailed report.",
  },
  {
    question: "What areas in Richmond do you cover?",
    answer:
      "We cover all of Richmond including Steveston, Ironwood, Brighouse, Hamilton, East Richmond, Thompson, Broadmoor, and the entire city. We also serve surrounding areas like Vancouver, Delta, Surrey, Ladner, and Tsawwassen.",
  },
  {
    question: "How much does a pre-purchase inspection cost in Richmond?",
    answer:
      "Our pre-purchase vehicle inspections in Richmond are $250 with a CARFAX vehicle history report included, or $220 for the inspection only. This is competitive with shop-based inspections, with the added convenience of our mechanic coming directly to the vehicle.",
  },
  {
    question: "Can you inspect a car at a dealership on No. 3 Road?",
    answer:
      "Yes. Many of our Richmond inspections take place at dealerships along No. 3 Road and the Richmond Auto Mall area. Our mechanic will meet you at the dealership, perform the inspection on-site, and provide you with an unbiased report before you finalize the purchase.",
  },
  {
    question: "What does the inspection include?",
    answer:
      "Our inspection covers the vehicle's major components: engine, transmission, brakes, suspension, tires, fluids, visible leaks, ECU scan for diagnostic trouble codes, and a visual check of the exterior and interior. You receive a clear, detailed report outlining the vehicle's condition.",
  },
  {
    question: "Can I book an inspection for a private sale in Steveston or Hamilton?",
    answer:
      "Absolutely. A large number of our Richmond inspections are for private sales. Our mechanic comes directly to the seller's location — whether it's a home in Steveston, Hamilton, Ironwood, or anywhere else in Richmond — so there's no need to arrange a trip to a shop.",
  },
];

const Richmond = () => (
  <LocationPageTemplate
    data={{
      city: "Richmond",
      slug: "pre-purchase-car-inspection-richmond",
      metaTitle:
        "Pre-Purchase Car Inspection Richmond | Mobile Mechanic | InspectnGO",
      metaDescription:
        "Book a mobile pre-purchase car inspection in Richmond. Certified mechanic comes to the vehicle. Detailed report + optional CARFAX. From $220.",
      heroHeading: "Pre-Purchase Car Inspection in Richmond",
      heroSubtext:
        "Buying a used car in Richmond? Get a certified mobile mechanic to inspect it before you buy. Whether you're looking at a vehicle on the No. 3 Road auto strip, a private listing in Steveston, or a dealership in Brighouse, we come directly to the car and deliver a detailed inspection report so you can buy with confidence.",
      whyHeading: "Why get an inspection in Richmond?",
      whyContent: [
        "Richmond is home to one of the highest concentrations of car dealerships in the Lower Mainland. The No. 3 Road corridor and Richmond Auto Mall draw buyers from across the region, and the volume of vehicles available — from economy cars to luxury imports — means the condition and history of each vehicle can vary widely. A professional pre-purchase inspection helps you cut through the uncertainty.",
        "Beyond the dealership lots, Richmond has an active private resale market across neighborhoods like Steveston, Ironwood, Hamilton, and East Richmond. Private sales carry extra risk because there's no dealership reputation on the line. Our certified mechanics give you an objective assessment of the engine, transmission, brakes, suspension, and electronics before you commit.",
        "Richmond's central location between Vancouver, Delta, and Surrey makes it a natural meeting point for used car transactions. Instead of coordinating a trip to a mechanic shop — and convincing the seller to go along with it — InspectnGO comes to the vehicle wherever it is. It's faster, easier, and far more likely to actually happen, which is why mobile inspections are the smart choice for Richmond car buyers.",
      ],
      faqItems: richmondFaqItems,
    }}
  />
);

export default Richmond;

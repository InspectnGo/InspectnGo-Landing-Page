import LocationPageTemplate from "@/components/seo/LocationPageTemplate";
import type { FaqItem } from "@/data/faqItems";

const mapleRidgeFaqItems: FaqItem[] = [
  {
    question:
      "How does a mobile pre-purchase inspection work in Maple Ridge?",
    answer:
      "After you book through InspectnGO, we send a certified mechanic directly to wherever the vehicle is located in Maple Ridge — a seller's driveway in Haney, a dealership along Lougheed Highway, a parking lot near Albion, or anywhere else in the district. The mechanic inspects the vehicle on the spot and emails you a detailed condition report.",
  },
  {
    question: "What Maple Ridge neighborhoods do you cover?",
    answer:
      "We cover all of Maple Ridge including Haney, Albion, Whonnock, Webster's Corners, Silver Valley, Kanaka Creek, Hammond, Thornhill, Cottonwood, and Maple Ridge Town Centre. We also serve neighbouring Pitt Meadows and can travel to Mission, Port Coquitlam, and other nearby communities.",
  },
  {
    question:
      "How much does a pre-purchase inspection cost in Maple Ridge?",
    answer:
      "Our pre-purchase inspections in Maple Ridge are $250 with a CARFAX vehicle history report included, or $220 for the inspection alone. There are no hidden fees — the price covers the full on-site inspection and your detailed report.",
  },
  {
    question:
      "How quickly can I get an inspection scheduled in Maple Ridge?",
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
      "Can I use this service for a private sale in Maple Ridge?",
    answer:
      "Yes — private sales are one of the most common reasons people book with us in Maple Ridge. Our mechanic goes directly to the seller's location, whether that's a home in Silver Valley, a rural property in Whonnock, or a meetup spot near Haney Place Mall. There's no need to ask the seller to drive the car across town to a shop.",
  },
];

const MapleRidge = () => (
  <LocationPageTemplate
    data={{
      city: "Maple Ridge",
      slug: "pre-purchase-car-inspection-maple-ridge",
      metaTitle:
        "Pre-Purchase Car Inspection Maple Ridge | Mobile Mechanic | InspectnGO",
      metaDescription:
        "Book a mobile pre-purchase car inspection in Maple Ridge. Certified mechanic comes to the vehicle. Detailed report + optional CARFAX. From $220.",
      heroHeading: "Pre-Purchase Car Inspection in Maple Ridge",
      heroSubtext:
        "Buying a used car in Maple Ridge? Have a certified mobile mechanic inspect it on-site before you commit. We come to the vehicle — whether it's parked at a home in Haney, a dealership along Lougheed Highway, or a private driveway out in Whonnock — and send you a detailed inspection report so you can buy with confidence.",
      whyHeading: "Why get an inspection in Maple Ridge?",
      whyContent: [
        "Maple Ridge sits on the eastern edge of Metro Vancouver and has grown rapidly over the past decade. More affordable housing prices compared to Vancouver and Burnaby have drawn families and commuters to the area, and with that growth comes a thriving used vehicle market. Trucks, SUVs, and all-wheel-drive vehicles are especially common here — suited to the district's rural roads, farms, and proximity to outdoor recreation along the Fraser River and Golden Ears Provincial Park.",
        "With fewer automotive shop options than the larger cities closer to Vancouver, getting a pre-purchase inspection in Maple Ridge used to mean a long drive into Coquitlam or Port Coquitlam just to have a mechanic look at a car. InspectnGO's mobile service eliminates that hassle entirely. Our certified mechanic comes directly to the vehicle's location anywhere in Maple Ridge and inspects the engine, transmission, brakes, suspension, electronics, and more — catching hidden problems before you hand over your money.",
        "Because Maple Ridge borders Pitt Meadows, Mission, and is connected to the Tri-Cities via Lougheed Highway and the Golden Ears Bridge, buyers here often browse listings across a wide area. InspectnGO makes it easy to get every vehicle inspected on the spot, no matter which city it's in. Just book online, and we handle the rest — so you never have to choose between convenience and peace of mind.",
      ],
      faqItems: mapleRidgeFaqItems,
    }}
  />
);

export default MapleRidge;

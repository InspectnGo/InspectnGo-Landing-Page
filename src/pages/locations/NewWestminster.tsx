import LocationPageTemplate from "@/components/seo/LocationPageTemplate";
import type { FaqItem } from "@/data/faqItems";

const newWestminsterFaqItems: FaqItem[] = [
  {
    question:
      "How does a mobile pre-purchase inspection work in New Westminster?",
    answer:
      "Once you book through InspectnGO, we send a certified mechanic directly to wherever the vehicle is located in New Westminster — a seller's home in Uptown, a dealership on Twelfth Street, a parking lot near the Quay, or anywhere else in the city. The mechanic inspects the vehicle on the spot and emails you a detailed condition report.",
  },
  {
    question: "What New Westminster neighborhoods do you cover?",
    answer:
      "We cover all of New Westminster including Downtown, Uptown, Sapperton, Queensborough, the Quay, Brow of the Hill, Connaught Heights, Queen's Park, Glenbrooke North, and Victory Heights. We also serve nearby cities like Burnaby, Surrey, and Coquitlam.",
  },
  {
    question:
      "How much does a pre-purchase inspection cost in New Westminster?",
    answer:
      "Our pre-purchase inspections in New Westminster are $250 with a CARFAX vehicle history report included, or $220 for the inspection alone. There are no hidden fees — the price covers the full on-site inspection and your detailed report.",
  },
  {
    question:
      "How quickly can I get an inspection scheduled in New Westminster?",
    answer:
      "Booking takes just a few minutes through our platform. Once scheduled, we dispatch a certified mechanic to the vehicle's location as quickly as possible — whether it's in Queensborough, Sapperton, or anywhere else in the Royal City — so you don't lose out on a deal while waiting.",
  },
  {
    question: "What does the inspection cover?",
    answer:
      "The inspection covers all major vehicle systems: engine, transmission, brakes, suspension, tires, fluids, visible leaks, an ECU scan for diagnostic trouble codes, and a thorough visual check of the exterior and interior. Everything is documented in a clear report sent to your email.",
  },
  {
    question:
      "Can I use this service for a private sale in New Westminster?",
    answer:
      "Yes — private sales are one of the most common reasons people book with us in New Westminster. Our mechanic goes directly to the seller's location, whether that's a townhouse in Brow of the Hill, a condo near the Quay, or a house in Queen's Park. No need to ask the seller to drive the car to a shop.",
  },
];

const NewWestminster = () => (
  <LocationPageTemplate
    data={{
      city: "New Westminster",
      slug: "pre-purchase-car-inspection-new-westminster",
      metaTitle:
        "Pre-Purchase Car Inspection New Westminster | Mobile Mechanic | InspectnGO",
      metaDescription:
        "Book a mobile pre-purchase car inspection in New Westminster. Certified mechanic comes to the vehicle. Detailed report + optional CARFAX. From $220.",
      heroHeading: "Pre-Purchase Car Inspection in New Westminster",
      heroSubtext:
        "Buying a used car in New Westminster? Have a certified mobile mechanic inspect it on-site before you commit. We come to the vehicle — whether it's at a dealership on Twelfth Street, a private seller's driveway in Sapperton, or a parking spot near the Quay — and send you a detailed inspection report so you can buy with confidence.",
      whyHeading: "Why get an inspection in New Westminster?",
      whyContent: [
        "New Westminster is the historic Royal City and one of the oldest cities in British Columbia. Its mix of heritage homes, newer condo developments, and established neighborhoods means you'll find everything from well-maintained older vehicles to late-model cars on the resale market. With private sales happening across Uptown, Downtown, Queensborough, and the surrounding areas, a pre-purchase inspection helps you avoid costly surprises no matter where the deal takes place.",
        "Sitting at the geographic center of Metro Vancouver, New Westminster is a natural hub between Burnaby, Surrey, and the Tri-Cities. Buyers here often look at vehicles listed across multiple neighboring cities, and sellers from across the region regularly meet in New Westminster thanks to its central SkyTrain access and easy highway connections. InspectnGO's mobile service means you don't have to coordinate shop visits in different areas — just book, and we come to wherever the car is.",
        "A pre-purchase inspection from a certified mechanic gives you a clear picture of what you're actually buying. We check the engine, transmission, brakes, suspension, electronics, and more — catching problems that photos and a test drive won't reveal. Whether the car is parked at a lot on Sixth Street or in a driveway in Connaught Heights, our mechanic comes directly to it so you can make an informed decision before money changes hands.",
      ],
      faqItems: newWestminsterFaqItems,
    }}
  />
);

export default NewWestminster;

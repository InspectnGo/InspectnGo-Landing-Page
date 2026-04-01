import LocationPageTemplate from "@/components/seo/LocationPageTemplate";
import type { FaqItem } from "@/data/faqItems";

const pittMeadowsFaqItems: FaqItem[] = [
  {
    question:
      "How does a mobile pre-purchase inspection work in Pitt Meadows?",
    answer:
      "After you book through InspectnGO, we send a certified mechanic directly to the vehicle's location anywhere in Pitt Meadows — whether it's in Central Pitt Meadows, along Harris Road, near Osprey Village, or at a private residence in South Bonson. The mechanic performs a thorough on-site inspection and you receive a detailed report by email.",
  },
  {
    question: "What areas in Pitt Meadows do you cover?",
    answer:
      "We cover all of Pitt Meadows including Central Pitt Meadows, North Pitt Meadows, South Bonson, Osprey Village, the Harris Road corridor, Mid-Meadows, and the airport-adjacent industrial area. We also serve surrounding communities like Maple Ridge, Port Coquitlam, and the wider Tri-Cities.",
  },
  {
    question:
      "How much does a pre-purchase inspection cost in Pitt Meadows?",
    answer:
      "Our pre-purchase vehicle inspections in Pitt Meadows are $250 with a CARFAX vehicle history report included, or $220 for the inspection only. This is competitive with shop-based inspections, with the added convenience of mobile service — no need to drive the vehicle into Coquitlam or Maple Ridge.",
  },
  {
    question:
      "How quickly can I get an inspection scheduled in Pitt Meadows?",
    answer:
      "InspectnGO aims to get a mechanic to your location as quickly as possible. Booking is fast — schedule through our platform in minutes and we'll dispatch a certified mechanic to the vehicle's location anywhere in Pitt Meadows or the surrounding area.",
  },
  {
    question: "What does the inspection include?",
    answer:
      "Our inspection covers the vehicle's major components: engine, transmission, brakes, suspension, tires, fluids, visible leaks, ECU scan for diagnostic trouble codes, and a visual check of the exterior and interior. You receive a clear, detailed report outlining the vehicle's condition.",
  },
  {
    question:
      "Can I use this for a private sale in areas like South Bonson or Osprey Village?",
    answer:
      "Absolutely. Many of our Pitt Meadows inspections are for vehicles being sold privately in residential areas like South Bonson, Osprey Village, Mid-Meadows, and along Harris Road. Our mechanic comes directly to the seller's driveway or street — no need to coordinate a trip to a shop in another city.",
  },
];

const PittMeadows = () => (
  <LocationPageTemplate
    data={{
      city: "Pitt Meadows",
      slug: "pre-purchase-car-inspection-pitt-meadows",
      metaTitle:
        "Pre-Purchase Car Inspection Pitt Meadows | Mobile Mechanic | InspectnGO",
      metaDescription:
        "Book a mobile pre-purchase car inspection in Pitt Meadows. Certified mechanic comes to the vehicle. Detailed report + optional CARFAX. From $220.",
      heroHeading: "Pre-Purchase Car Inspection in Pitt Meadows",
      heroSubtext:
        "Buying a used car in Pitt Meadows? Get a certified mobile mechanic to inspect the vehicle on-site before you commit. Whether the car is parked in a driveway near Osprey Village, listed by a seller along Harris Road, or sitting in a lot off Lougheed Highway, we come directly to the vehicle and deliver a detailed inspection report so you know exactly what you're buying.",
      whyHeading: "Why get an inspection in Pitt Meadows?",
      whyContent: [
        "Pitt Meadows is a small, tight-knit community situated between Maple Ridge to the east and Port Coquitlam and Coquitlam to the west. With a mix of agricultural land, newer residential developments in South Bonson, and established neighbourhoods around Harris Road and Central Pitt Meadows, it's common to see used vehicles listed by local sellers on Craigslist, Facebook Marketplace, and community buy-and-sell groups. But as a smaller city, Pitt Meadows has limited local mechanic options — getting a pre-purchase inspection often means coordinating a trip into Maple Ridge or across the Pitt River Bridge into Port Coquitlam.",
        "That extra drive is inconvenient for both buyers and sellers. Asking a seller to let you take their vehicle to a shop in another city is awkward, and not everyone is willing to agree to it. A mobile pre-purchase inspection eliminates that friction entirely. Our certified mechanic comes to wherever the vehicle is parked in Pitt Meadows — whether that's a quiet street in North Pitt Meadows, a townhouse complex in Mid-Meadows, or a residential area near the Pitt Meadows Regional Airport.",
        "InspectnGO sends a certified mechanic directly to the vehicle anywhere in Pitt Meadows or the surrounding communities. You get a professional, objective assessment of the engine, transmission, brakes, suspension, and electronics without having to drive into the city or rely on the seller's word. It's the most practical way to buy a used car with confidence in Pitt Meadows.",
      ],
      faqItems: pittMeadowsFaqItems,
    }}
  />
);

export default PittMeadows;

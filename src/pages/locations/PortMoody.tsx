import LocationPageTemplate from "@/components/seo/LocationPageTemplate";
import type { FaqItem } from "@/data/faqItems";

const portMoodyFaqItems: FaqItem[] = [
  {
    question:
      "How does a mobile pre-purchase inspection work in Port Moody?",
    answer:
      "After you book through InspectnGO, we dispatch a certified mechanic directly to the vehicle's location anywhere in Port Moody — whether it's in Inlet Centre, Heritage Mountain, Glenayre, or a dealership along St. Johns Street. The mechanic performs a full inspection on-site and you receive a detailed report by email.",
  },
  {
    question: "What areas in Port Moody do you cover?",
    answer:
      "We cover all of Port Moody including Inlet Centre, Glenayre, Heritage Mountain, Moody Centre, College Park, Ioco, Heritage Woods, and April Road. We also serve the wider Tri-Cities area including Coquitlam, Port Coquitlam, Anmore, and Belcarra.",
  },
  {
    question:
      "How much does a pre-purchase inspection cost in Port Moody?",
    answer:
      "Our pre-purchase vehicle inspections in Port Moody are $250 with a CARFAX vehicle history report included, or $220 for the inspection only. This is competitive with shop-based inspections, with the added convenience of on-site mobile service.",
  },
  {
    question:
      "How quickly can I get an inspection scheduled in Port Moody?",
    answer:
      "InspectnGO aims to get a mechanic to your location as quickly as possible. Booking is fast — schedule through our platform in minutes and we'll dispatch a certified mechanic to the vehicle's location anywhere in Port Moody or the surrounding Tri-Cities.",
  },
  {
    question: "What does the inspection include?",
    answer:
      "Our inspection covers the vehicle's major components: engine, transmission, brakes, suspension, tires, fluids, visible leaks, ECU scan for diagnostic trouble codes, and a visual check of the exterior and interior. You receive a clear, detailed report outlining the vehicle's condition.",
  },
  {
    question:
      "Can I use this for a private sale in areas like Heritage Mountain or Glenayre?",
    answer:
      "Absolutely. Many of our Port Moody inspections are for vehicles being sold privately in residential neighbourhoods like Heritage Mountain, Glenayre, College Park, and Moody Centre. Our mechanic comes directly to the seller's driveway or street — no need to coordinate a trip to a shop across town.",
  },
];

const PortMoody = () => (
  <LocationPageTemplate
    data={{
      city: "Port Moody",
      slug: "pre-purchase-car-inspection-port-moody",
      metaTitle:
        "Pre-Purchase Car Inspection Port Moody | Mobile Mechanic | InspectnGO",
      metaDescription:
        "Book a mobile pre-purchase car inspection in Port Moody. Certified mechanic comes to the vehicle. Detailed report + optional CARFAX. From $220.",
      heroHeading: "Pre-Purchase Car Inspection in Port Moody",
      heroSubtext:
        "Buying a used car in Port Moody? Get a certified mobile mechanic to inspect the vehicle on-site before you commit. Whether the car is listed in Moody Centre, parked on a hillside street in Heritage Mountain, or sitting at a lot along St. Johns Street, we come to the vehicle and deliver a detailed inspection report so you know exactly what you're buying.",
      whyHeading: "Why get an inspection in Port Moody?",
      whyContent: [
        "Known as the City of the Arts, Port Moody is a smaller community nestled at the head of Burrard Inlet with a growing population and an active local used car market. Listings pop up regularly on Craigslist, Facebook Marketplace, and Tri-Cities buy-and-sell groups — everything from compact commuters to SUVs built for weekend trips up to Buntzen Lake or the local trails. With fewer automotive shops in Port Moody compared to larger neighbouring cities, getting a vehicle checked out before purchase can mean a long drive and a wait for an appointment.",
        "Port Moody's geography adds another wrinkle. The city stretches from the waterfront at Rocky Point up through steep hillside neighbourhoods like Heritage Mountain and Heritage Woods, with pockets like Ioco and Glenayre spread across varied terrain. Arranging to bring a seller's car to a shop — often outside the city — is time-consuming and awkward. A mobile inspection removes that obstacle entirely, bringing the mechanic to wherever the vehicle is parked.",
        "InspectnGO sends a certified mechanic directly to the vehicle anywhere in Port Moody or the surrounding Tri-Cities. You get a professional, objective assessment of the engine, transmission, brakes, suspension, and electronics without coordinating shop visits or relying on the seller's word. It's the fastest and most practical way to buy a used car with confidence in Port Moody.",
      ],
      faqItems: portMoodyFaqItems,
    }}
  />
);

export default PortMoody;

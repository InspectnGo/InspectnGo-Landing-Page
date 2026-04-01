import LocationPageTemplate from "@/components/seo/LocationPageTemplate";
import type { FaqItem } from "@/data/faqItems";

const surreyFaqItems: FaqItem[] = [
  {
    question: "How does a mobile pre-purchase inspection work in Surrey?",
    answer:
      "After you book through InspectnGO, we send a certified mechanic directly to the vehicle's location anywhere in Surrey — whether it's a private driveway in Newton, a dealership lot on King George Boulevard, or a parking area in Guildford. The mechanic performs a full inspection on-site and you receive a detailed report by email.",
  },
  {
    question: "What areas of Surrey do you cover?",
    answer:
      "We cover all of Surrey including Newton, Fleetwood, Guildford, Cloverdale, South Surrey, Whalley, City Centre, Bear Creek, and Panorama Ridge. We also serve nearby cities like Delta, Langley, White Rock, and New Westminster.",
  },
  {
    question: "How much does a pre-purchase inspection cost in Surrey?",
    answer:
      "Our pre-purchase vehicle inspections in Surrey are $250 with a CARFAX vehicle history report included, or $220 for the inspection only. This is competitive with shop-based inspections, with the added convenience of on-site mobile service.",
  },
  {
    question: "Can I get an inspection for a private sale vehicle in Surrey?",
    answer:
      "Yes — private sales make up a large portion of our inspections in Surrey. Whether the vehicle is parked at a seller's home in Fleetwood, a lot in Cloverdale, or a meeting spot in South Surrey, our mechanic travels directly to the car so you don't need to arrange a trip to a shop.",
  },
  {
    question: "What does the inspection include?",
    answer:
      "Our inspection covers the vehicle's major components: engine, transmission, brakes, suspension, tires, fluids, visible leaks, ECU scan for diagnostic trouble codes, and a visual check of the exterior and interior. You receive a clear, detailed report outlining the vehicle's condition.",
  },
  {
    question: "How quickly can I book an inspection in Surrey?",
    answer:
      "Booking is fast — schedule through our platform in minutes and we'll dispatch a certified mechanic to the vehicle's location in Surrey. InspectnGO aims to get a mechanic to you as quickly as possible so you don't lose out on a vehicle you're interested in.",
  },
];

const Surrey = () => (
  <LocationPageTemplate
    data={{
      city: "Surrey",
      slug: "pre-purchase-car-inspection-surrey",
      metaTitle:
        "Pre-Purchase Car Inspection Surrey | Mobile Mechanic | InspectnGO",
      metaDescription:
        "Book a mobile pre-purchase car inspection in Surrey. Certified mechanic comes to the vehicle. Detailed report + optional CARFAX. From $220.",
      heroHeading: "Pre-Purchase Car Inspection in Surrey",
      heroSubtext:
        "Buying a used car in Surrey? Get a certified mobile mechanic to inspect the vehicle on-site before you commit. We come to the car — at a dealership, a private seller's home in Newton, Fleetwood, or anywhere in Surrey — and deliver a detailed inspection report so you know exactly what you're buying.",
      whyHeading: "Why get an inspection in Surrey?",
      whyContent: [
        "Surrey is the largest city in British Columbia by land area and one of the fastest-growing municipalities in Metro Vancouver. With a population spread across distinct neighborhoods like Newton, Guildford, Cloverdale, and South Surrey, there is a high volume of private vehicle sales happening across the city every week — on Craigslist, Facebook Marketplace, and dealership lots along King George Boulevard and Fraser Highway.",
        "The sheer size of Surrey's used car market means more opportunities for buyers, but also more risk. Vehicles with undisclosed accident history, hidden mechanical problems, or deferred maintenance are common in any high-volume market. A pre-purchase inspection gives you a certified mechanic's objective assessment of the vehicle's condition — covering the engine, transmission, brakes, suspension, electronics, and more — before you hand over your money.",
        "Surrey's central location in the Lower Mainland also means many sellers list vehicles that attract buyers from Langley, Delta, White Rock, and beyond. Rather than coordinating a trip to a shop that both buyer and seller agree on, InspectnGO comes directly to the vehicle. This removes friction from the process and makes it far more likely the inspection actually happens — giving you the information you need to buy with confidence.",
      ],
      faqItems: surreyFaqItems,
    }}
  />
);

export default Surrey;

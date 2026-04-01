export interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What does the inspection include?",
    answer:
      "An InspectnGO inspection includes a comprehensive check of the vehicle's major components. Our mechanics review the engine, transmission, brakes, suspension, tires, fluids, and visible leaks, Scanning of the ECU (if there's a DTC), along with a visual check of the exterior and interior.",
  },
  {
    question: "Do I need to bring the vehicle to a shop?",
    answer:
      "No — you don't need to bring the vehicle to a shop. InspectnGO mechanics travel directly to the vehicle's location, whether it's at a private seller's home, a dealership lot, or a parking area, and complete the inspection on-site.",
  },
  {
    question: "How long does an inspection take?",
    answer:
      "According to standard dealership book time, the inspection typically takes about 0.8 hours. However, InspectnGO allocates a full hour for our mechanics to complete the inspection, ensuring they have adequate time to perform a thorough and accurate assessment of the vehicle.",
  },
  {
    question: "When will I receive the inspection report?",
    answer:
      "You should receive the inspection report shortly after the mechanic completes the inspection. Once the report is finalized, it will be scanned and emailed directly to you. If you purchased a package that includes it, the CARFAX report will be included in the same email.",
  },
  {
    question: "Are your mechanics certified?",
    answer:
      "InspectnGO works with certified and experienced automotive technicians. Our inspectors typically have formal training, industry certifications, or years of professional shop experience performing mechanical diagnostics and inspections. Many technicians in Canada complete a four-year apprenticeship and may hold a Certificate of Qualification or Red Seal endorsement, which demonstrates a nation-wide recognized level of skill in the trade.",
  },
  {
    question: "Can I use this service for a vehicle from a private seller?",
    answer:
      "InspectnGO can inspect vehicles from private sellers. Our certified mechanics come directly to the vehicle's location (a driveway, parking lot, or seller's home) and perform a full pre-purchase inspection before you buy.",
  },
  {
    question: "How much does an inspection cost?",
    answer:
      "Our inspections are $250 (with CARFAX) $220 (without CARFAX), which is in line with the market rate for professional pre-purchase inspections. With InspectnGO, you also get the added convenience of on-site service, no long shop appointment wait times, a faster turnaround, and a detailed report sent directly to you.",
  },
];

export default faqItems;

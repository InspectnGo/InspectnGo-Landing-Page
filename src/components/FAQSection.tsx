import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What does the inspection include?",
    answer:
      "An InspectnGO inspection includes a comprehensive check of the vehicle’s major components. Our mechanics review the engine, transmission, brakes, suspension, tires, fluids, and visible leaks, Scanning of the ECU (if there’s a DTC), along with a visual check of the exterior and interior."
  },
  {
    question: "Do I need to bring the vehicle to a shop?",
    answer:
      "No — you don’t need to bring the vehicle to a shop. InspectnGO mechanics travel directly to the vehicle’s location, whether it’s at a private seller’s home, a dealership lot, or a parking area, and complete the inspection on-site."
  },
  {
    question: "How long does an inspection take?",
    answer:
      "According to standard dealership book time, the inspection typically takes about 0.8 hours. However, InspectnGO allocates a full hour for our mechanics to complete the inspection, ensuring they have adequate time to perform a thorough and accurate assessment of the vehicle."
  },
  {
    question: "When will I receive the inspection report?",
    answer:
      "You should receive the inspection report shortly after the mechanic completes the inspection. Once the report is finalized, it will be scanned and emailed directly to you. If you purchased a package that includes it, the CARFAX report will be included in the same email."
  },
  {
    question: "Are your mechanics certified?",
    answer:
      "InspectnGO works with certified and experienced automotive technicians. Our inspectors typically have formal training, industry certifications, or years of professional shop experience performing mechanical diagnostics and inspections. Many technicians in Canada complete a four-year apprenticeship and may hold a Certificate of Qualification or Red Seal endorsement, which demonstrates a nation-wide recognized level of skill in the trade."
  },
  {
    question: "Can I use this service for a vehicle from a private seller?",
    answer:
      "InspectnGO can inspect vehicles from private sellers. Our certified mechanics come directly to the vehicle’s location (a driveway, parking lot, or seller’s home) and perform a full pre-purchase inspection before you buy."
  },
  {
    question: "How much does an inspection cost?",
    answer:
      "Our inspections are $250 (with CARFAX) $220 (without CARFAX), which is in line with the market rate for professional pre-purchase inspections. With InspectnGO, you also get the added convenience of on-site service, no long shop appointment wait times, a faster turnaround, and a detailed report sent directly to you."
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-[1184px] flex-col gap-8 px-6 md:px-8 lg:flex-row lg:gap-8">
        {/* Left — headline */}
        <div className="flex flex-col gap-4 lg:flex-1">
          <p className="font-manrope text-lg font-bold uppercase tracking-[-0.1px] text-ing-body">
            Frequently Asked Questions
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-[-0.64px] text-ing-heading sm:text-4xl lg:text-[64px] lg:leading-none">
            Built with the best in the industry
          </h2>
          <p className="font-manrope text-lg leading-[24px] tracking-[-0.24px] text-ing-body">
            We collaborate with leading organizations in automotive technology,
            education, and trades to deliver inspections you can trust.
          </p>
        </div>

        {/* Right — accordion */}
        <div className="lg:flex-1">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-ing-border"
              >
                <AccordionTrigger className="py-4 font-manrope text-base font-medium tracking-[-0.64px] text-ing-heading hover:no-underline sm:text-xl lg:text-2xl lg:leading-[1.25]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

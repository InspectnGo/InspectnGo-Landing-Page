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
      "Our inspection covers key mechanical systems, the vehicle's exterior and interior condition, safety components, fluids, tires, brakes, suspension, and more. You'll receive a structured report detailing each area.",
  },
  {
    question: "Do I need to bring the vehicle to a shop?",
    answer:
      "No. Our certified mechanics come directly to the vehicle's location—whether it's at a home, workplace, or parking lot—so you don't have to arrange transport.",
  },
  {
    question: "How long does an inspection take?",
    answer:
      "A typical inspection takes approximately 45–60 minutes, depending on the vehicle's condition and accessibility.",
  },
  {
    question: "When will I receive the inspection report?",
    answer:
      "You'll receive your detailed inspection report within 24 hours of the completed inspection, delivered directly to your email.",
  },
  {
    question: "Are your mechanics certified?",
    answer:
      "Yes. All mechanics on our platform are certified professionals with experience in pre-purchase vehicle inspections.",
  },
  {
    question: "Can I use this service for a vehicle from a private seller?",
    answer:
      "Absolutely. Our service is designed for both private and dealer vehicle purchases. Simply provide the vehicle's location and we'll handle the rest.",
  },
  {
    question: "How much does an inspection cost?",
    answer:
      "Pricing depends on the type of vehicle and location. Visit our booking page or contact us for a detailed quote tailored to your needs.",
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
          <h2 className="font-space text-3xl tracking-[-0.64px] text-ing-heading sm:text-4xl lg:text-[64px] lg:leading-none">
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
                <AccordionTrigger className="py-4 font-manrope text-base font-normal tracking-[-0.64px] text-ing-heading hover:no-underline sm:text-xl lg:text-2xl lg:leading-[1.25]">
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

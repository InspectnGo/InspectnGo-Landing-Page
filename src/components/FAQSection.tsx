import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import faqItems from "@/data/faqItems";

const FAQSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-[1184px] flex-col gap-8 px-6 md:px-8 lg:flex-row lg:gap-8">
        {/* Left — headline */}
        <div className="flex flex-col gap-4 lg:flex-1">
          <p className="font-manrope text-lg font-bold uppercase tracking-[-0.1px] text-ing-body">
            Frequently Asked Questions
          </p>
          <h2 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
            Built with the best in the industry
          </h2>
          <p className="text-body">
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
                <AccordionTrigger className="py-4 font-manrope text-2xl font-medium leading-[1.25] tracking-[-0.64px] text-ing-heading hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-body">
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

const CTASection = () => {
  return (
    <section className="bg-ing-accent py-16">
      <div className="mx-auto flex max-w-[1184px] items-center justify-center px-6 md:px-8">
        <div className="flex max-w-[544px] flex-col items-center gap-4 text-center">
          <h2 className="font-space text-3xl tracking-[-0.64px] text-ing-heading sm:text-4xl lg:text-[64px] lg:leading-none">
            Still got a question?
          </h2>
          <p className="font-manrope text-lg leading-[24px] tracking-[-0.24px] text-ing-body">
            We collaborate with leading organizations in automotive technology,
            education, and trades to deliver inspections you can trust.
          </p>
          <a
            href="#signup"
            className="inline-flex min-w-[120px] items-center justify-center rounded-full bg-ing-brand px-6 py-3 font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px] text-ing-accent hover:brightness-90 transition"
          >
            Sign up today
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

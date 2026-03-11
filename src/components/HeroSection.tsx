import { useState } from "react";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"customer" | "mechanic">(
    "customer"
  );

  return (
    <section className="bg-ing-neutral py-8 pb-16">
      <div className="mx-auto flex max-w-[1184px] flex-col gap-8 px-6 md:px-8 lg:flex-row lg:items-center">
        {/* Left — headline */}
        <div className="flex flex-col gap-4 lg:w-[55%] lg:pr-16">
          <p className="font-manrope text-lg font-bold uppercase tracking-[-0.1px] text-ing-body">
            Recognized by SkillTrades BC and CARFAX
          </p>
          <h1 className="font-space text-4xl tracking-[-0.64px] text-ing-heading sm:text-5xl lg:text-[64px] lg:leading-none">
            Affordable and fast vehicle inspections done{" "}
            <span className="text-ing-accent">right</span>.
          </h1>
          <p className="font-manrope text-lg leading-[24px] tracking-[-0.24px] text-ing-body">
            Book a trusted mechanic to inspect the vehicle on-site and receive a
            clear, detailed report, so you know exactly what you're buying
            before making the deal.
          </p>
        </div>

        {/* Right — sign-up form */}
        <div
          id="signup"
          className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-card sm:p-8 lg:flex-1"
        >
          {/* Segmented control */}
          <div className="flex self-center rounded-full bg-ing-neutral p-2">
            <button
              onClick={() => setActiveTab("customer")}
              className={`rounded-full px-4 py-3 font-manrope text-base font-bold tracking-[-0.24px] transition ${
                activeTab === "customer"
                  ? "bg-white text-ing-btn-active shadow-card"
                  : "text-ing-body"
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => setActiveTab("mechanic")}
              className={`rounded-full px-4 py-3 font-manrope text-base font-bold tracking-[-0.24px] transition ${
                activeTab === "mechanic"
                  ? "bg-white text-ing-btn-active shadow-card"
                  : "text-ing-body"
              }`}
            >
              Mechanic
            </button>
          </div>

          {/* Form fields */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-manrope text-base tracking-[-0.24px] text-ing-heading">
                E-mail
              </label>
              <input
                type="email"
                placeholder="inspect@hello.com"
                className="h-14 rounded-lg border border-ing-border px-4 font-manrope text-base tracking-[-0.24px] text-ing-heading placeholder:text-ing-placeholder focus:outline-none focus:ring-2 focus:ring-ing-accent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-manrope text-base tracking-[-0.24px] text-ing-heading">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="Mobile number"
                className="h-14 rounded-lg border border-ing-border px-4 font-manrope text-base tracking-[-0.24px] text-ing-heading placeholder:text-ing-placeholder focus:outline-none focus:ring-2 focus:ring-ing-accent"
              />
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-0.5 h-6 w-6 shrink-0 rounded-lg border-ing-border accent-ing-accent"
              />
              <span className="font-manrope text-sm leading-[18px] tracking-[-0.24px] text-ing-body">
                By signing up with your email address and phone number, you
                consent to receive email and messages from InspectnGO. Read
                Terms and Use.
              </span>
            </label>

            <button className="w-full rounded-full bg-ing-brand px-6 py-3 font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px] text-ing-accent hover:brightness-90 transition">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

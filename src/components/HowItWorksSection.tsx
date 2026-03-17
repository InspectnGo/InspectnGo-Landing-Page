import { MapPin, Truck, FileCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const mechanicImg =
  "https://www.figma.com/api/mcp/asset/cb10f12b-c3b2-45c0-9823-0c339ef9f828";

interface StepCardProps {
  icon: LucideIcon;
  heading: string;
  body: string;
}

const StepCard = ({ icon: Icon, heading, body }: StepCardProps) => (
  <div className="flex flex-col items-start gap-4">
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ing-brand">
      <Icon size={24} className="text-ing-accent" />
    </div>
    <h3 className="font-heading text-2xl font-bold leading-none tracking-[-0.64px] text-ing-heading sm:text-[32px]">
      {heading}
    </h3>
    <p className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
      {body}
    </p>
  </div>
);

const HowItWorksSection = () => {
  return (
    <section className="bg-ing-neutral py-16">
      <div className="mx-auto flex max-w-[1184px] flex-col-reverse gap-8 px-6 md:px-8 lg:flex-row lg:items-start">
        {/* Image */}
        <div className="flex-1 overflow-hidden rounded-2xl lg:self-stretch">
          <img
            src={mechanicImg}
            alt="Mechanic performing vehicle inspection"
            className="h-full w-full object-cover aspect-[2/3] lg:aspect-auto"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-8">
          {/* Headline */}
          <div className="flex flex-col gap-4">
            <p className="font-manrope text-lg font-bold uppercase tracking-[-0.1px] text-ing-body">
              How to use InspectnGO
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-[-0.64px] text-ing-heading sm:text-4xl lg:text-[48px] lg:leading-none">
              Book a professional vehicle inspection in a minute
            </h2>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-8 py-4">
            <StepCard
              icon={MapPin}
              heading="1. Enter vehicle location"
              body="Provide the address or location where the vehicle is parked so we can match you with the closest available mechanic in your area."
            />
            <StepCard
              icon={Truck}
              heading="2. We dispatch a mechanic"
              body="Once you've submitted the details, we'll assign a certified mechanic to visit the vehicle at the location you provided."
            />
            <StepCard
              icon={FileCheck}
              heading="3. Receive a detailed report"
              body="After the inspection is complete, you'll receive a comprehensive report covering all inspected areas, helping you make an informed decision."
            />
          </div>

          <a
            href="#signup"
            className="inline-flex w-fit min-w-[120px] items-center justify-center rounded-full bg-ing-brand px-6 py-3 font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px] text-ing-accent hover:brightness-90 transition"
          >
            Sign up
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

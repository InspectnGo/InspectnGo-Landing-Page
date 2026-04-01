import { MapPin, FileText, Wrench, CalendarCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  heading: string;
  body: string;
}

const FeatureCard = ({ icon: Icon, heading, body }: FeatureCardProps) => (
  <div className="flex flex-col items-start gap-4">
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ing-brand">
      <Icon size={24} className="text-ing-accent" />
    </div>
    <h3 className="font-heading text-2xl font-bold leading-none tracking-[-0.64px] text-ing-heading sm:text-[32px]">
      {heading}
    </h3>
    <p className="text-body">
      {body}
    </p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="bg-ing-neutral py-16">
      <div className="mx-auto flex max-w-[1184px] flex-col gap-16 px-6 md:px-8 lg:flex-row">
        {/* Left — headline */}
        <div className="flex flex-col gap-4 lg:flex-1">
          <p className="font-manrope text-lg font-bold uppercase tracking-[-0.1px] text-ing-body">
            What we offer
          </p>
          <h2 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
            Fast, reliable vehicle inspections
          </h2>
          <p className="text-body">
            Buying a used vehicle can be uncertain. InspectnGO helps you make
            confident decisions by connecting you with trusted mechanics who
            provide fast, reliable inspections before you commit to a purchase.
          </p>
        </div>

        {/* Right — 2×2 card grid */}
        <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2">
          <FeatureCard
            icon={MapPin}
            heading="On-site Vehicle Inspections"
            body="Skip the hassle of taking the vehicle to a repair shop. Our certified mechanics come directly to the vehicle and perform the inspection on-site—whether it's at a private residence, workplace, or parking lot."
          />
          <FeatureCard
            icon={FileText}
            heading="Detailed Inspection Reports"
            body="Receive a clear, structured report that outlines the vehicle's condition, including key mechanical components, visible issues, and important notes to help you understand what you're buying."
          />
          <FeatureCard
            icon={Wrench}
            heading="Trusted Local Mechanics"
            body="We connect you with experienced mechanics in your area who perform professional inspections designed specifically for pre-purchase vehicle checks."
          />
          <FeatureCard
            icon={CalendarCheck}
            heading="Fast and Convenient Booking"
            body="Schedule an inspection in minutes through our platform. Our streamlined booking process makes it easy to arrange an inspection when you need it most."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

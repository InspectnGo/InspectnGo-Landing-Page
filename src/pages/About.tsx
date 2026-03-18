import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Wrench, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  heading: string;
  body: string;
}

const ValueCard = ({ icon: Icon, heading, body }: ValueCardProps) => (
  <div className="rounded-2xl border border-[#e6ebf2] bg-white p-6 shadow-form">
    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ing-brand">
      <Icon size={24} className="text-ing-accent" />
    </div>
    <h3 className="font-heading text-2xl font-bold leading-none tracking-[-0.64px] text-ing-heading">
      {heading}
    </h3>
    <p className="mt-3 font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
      {body}
    </p>
  </div>
);

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "TBD",
    role: "Chief Executive Officer",
    bio: "A team of automotive and technology professionals who believe every buyer deserves to know exactly what they're paying for — no surprises, no guesswork.",
  },
  {
    name: "TBD",
    role: "Chief Executive Officer",
    bio: "A team of automotive and technology professionals who believe every buyer deserves to know exactly what they're paying for — no surprises, no guesswork.",
  },
  {
    name: "TBD",
    role: "Chief Executive Officer",
    bio: "A team of automotive and technology professionals who believe every buyer deserves to know exactly what they're paying for — no surprises, no guesswork.",
  },
];

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-ing-neutral">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-ing-neutral py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <p className="font-manrope text-lg font-bold uppercase tracking-[-0.1px] text-ing-body">
              Born from a real problem
            </p>
            <h1 className="mt-4 font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading">
              About us
            </h1>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <h2 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
              Our story
            </h2>
            <div className="mt-8 max-w-3xl space-y-4">
              <p className="font-manrope text-base leading-relaxed text-ing-body">
                It started the way most good ideas do — with frustration. One of
                our founders bought a used car that looked perfect on the outside
                but hid thousands of dollars in mechanical issues underneath. The
                experience was stressful, expensive, and entirely avoidable.
              </p>
              <p className="font-manrope text-base leading-relaxed text-ing-body">
                That moment sparked a question: why is it so hard to get a
                professional inspection before you buy? The answer was clear —
                the industry hadn't caught up. Booking an inspection meant
                calling around, waiting days, and hoping the seller would
                cooperate.
              </p>
              <p className="font-manrope text-base leading-relaxed text-ing-body">
                So we built InspectnGo — a platform that puts a certified
                mechanic at the car's location within hours, delivers a
                transparent report, and gives buyers the confidence to negotiate
                fairly or walk away.
              </p>
            </div>

            {/* Value Cards */}
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ValueCard
                icon={Target}
                heading="Our mission"
                body="We connect vehicle buyers with certified mobile mechanics who perform comprehensive pre-purchase inspections — wherever the car is, whenever you need it."
              />
              <ValueCard
                icon={Wrench}
                heading="What we do"
                body="Skip the hassle of taking the vehicle to a repair shop. Our certified mechanics come directly to the vehicle and perform the inspection on-site—whether it's at a private residence, workplace, or parking lot."
              />
              <ValueCard
                icon={Users}
                heading="Who we are"
                body="A team of automotive and technology professionals who believe every buyer deserves to know exactly what they're paying for — no surprises, no guesswork."
              />
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="bg-ing-neutral py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <h2 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
              Meet the people behind it
            </h2>
            <p className="mt-4 max-w-2xl font-manrope text-lg leading-[24px] tracking-[-0.24px] text-ing-body">
              A small, focused team committed to transforming the used-car
              inspection experience.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-heading text-[40px] font-bold leading-none tracking-[-0.64px] text-ing-heading">
                    {member.name}
                  </h3>
                  <p className="mt-2 font-manrope text-sm font-bold uppercase tracking-wide text-ing-body">
                    {member.role}
                  </p>
                  <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

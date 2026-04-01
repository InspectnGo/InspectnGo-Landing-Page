import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/seo/PageMeta";
import {
  FileSearch,
  GraduationCap,
  Wrench,
  Network as NetworkIcon,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  heading: string;
  body: string;
}

const BenefitCard = ({ icon: Icon, heading, body }: BenefitCardProps) => (
  <div className="rounded-2xl border border-[#e6ebf2] bg-white px-6 py-8 shadow-form">
    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ing-brand">
      <Icon size={24} className="text-ing-accent" />
    </div>
    <h3 className="mb-3 font-heading text-2xl font-bold leading-none tracking-[-0.64px] text-ing-heading">
      {heading}
    </h3>
    <p className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
      {body}
    </p>
  </div>
);

const Network = () => {
  return (
    <div className="flex min-h-screen flex-col bg-ing-neutral">
      <PageMeta
        title="Our Network & Partners | InspectnGO"
        description="InspectnGO partners with CARFAX, BCIT, VCC, and KMS Tools to deliver trusted pre-purchase vehicle inspections."
        canonical="https://www.inspectngo.ca/network"
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-ing-neutral py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <div className="max-w-[736px] space-y-8">
              <div className="space-y-4">
                <p className="font-manrope text-base font-bold uppercase text-ing-body">
                  Our Network & Benefits
                </p>
                <h1 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading">
                  Our Network
                </h1>
              </div>
              <p className="font-manrope text-lg leading-[24px] tracking-[-0.24px] text-ing-body">
                InspectnGo is committed to delivering a reliable and high-quality
                experience by working closely with established tools, resources,
                and industry organizations. These relationships allow us to enhance both 
                the customer experience and the opportunities available to our mechanics.
              </p>
              <a
                href="/#signup"
                className="inline-flex items-center justify-center rounded-full bg-ing-brand px-6 py-4 font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px] text-ing-accent"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* For Customers Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <h2 className="mb-8 font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
              For Customers
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <BenefitCard
                icon={FileSearch}
                heading="Comprehensive Vehicle Insights"
                body="Inspections are supported with CARFAX vehicle history reports, providing additional transparency and helping customers make more informed decisions."
              />
              <BenefitCard
                icon={GraduationCap}
                heading="Alignment with Industry Standards"
                body="Our ongoing connection with respected institutions such as BCIT and VCC helps ensure our processes reflect current automotive practices and expectations."
              />
            </div>
          </div>
        </section>

        {/* For Mechanics Section */}
        <section className="bg-ing-neutral py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <h2 className="mb-8 font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
              For Mechanics
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <BenefitCard
                icon={Wrench}
                heading="Preferred Pricing on Professional Tools"
                body="Mechanics on the InspectnGo platform are eligible for discounted GEARWRENCH tools through our local KMS Tools location, supporting access to high-quality equipment at a reduced cost."
              />
              <BenefitCard
                icon={NetworkIcon}
                heading="Industry-Connected Network"
                body="Through our association with BCIT and VCC, mechanics benefit from alignment with recognized training standards and a broader professional network."
              />
              <BenefitCard
                icon={TrendingUp}
                heading="Ongoing Platform Support"
                body="InspectnGo continues to expand its network and resources to provide mechanics with additional value, efficiency, and earning potential over time."
              />
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <div className="max-w-[736px] space-y-4">
              <h2 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
                Our Commitment
              </h2>
              <p className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
                InspectnGo is focused on building a strong, connected ecosystem
                that supports transparency for customers and meaningful
                opportunities for both mechanics and consumers. As we grow, we
                remain committed to strengthening these relationships to deliver
                continued value across our platform.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-ing-neutral py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
                  Want to join our network?
                </h2>
                <p className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
                  We're always looking to work with organizations that share our
                  commitment to transparency and quality in the automotive
                  space.
                </p>
              </div>
              <a
                href="/#signup"
                className="inline-flex items-center justify-center rounded-full bg-ing-accent px-6 py-4 font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px] text-ing-brand"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Network;

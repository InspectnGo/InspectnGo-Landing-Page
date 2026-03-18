import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

interface Partner {
  name: string;
  logo: string;
  description: string;
  website: string;
}

const partners: Partner[] = [
  {
    name: "KMS Tools",
    logo: "/kms-logo.png",
    description:
      "KMS Tools is a leading Canadian retailer of professional-grade automotive tools and equipment, supplying mechanics and shops with the gear they need to perform quality inspections and repairs.",
    website: "https://www.kmstools.com",
  },
];

const PartnerCard = ({ partner }: { partner: Partner }) => (
  <div className="flex flex-col gap-[18px] rounded-2xl border border-[#e6ebf2] bg-white px-6 py-8 shadow-form">
    <div className="flex h-16 w-16 items-center justify-center overflow-hidden">
      <img
        src={partner.logo}
        alt={`${partner.name} logo`}
        className="h-full w-full object-contain"
      />
    </div>
    <h3 className="font-manrope text-2xl font-medium leading-[1.25] tracking-[-0.64px] text-ing-heading">
      {partner.name}
    </h3>
    <p className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
      {partner.description}
    </p>
    <a
      href={partner.website}
      target="_blank"
      rel="noopener noreferrer"
      className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-heading underline decoration-ing-accent decoration-[15%]"
    >
      Visit website
    </a>
  </div>
);

const Partners = () => {
  return (
    <div className="flex min-h-screen flex-col bg-ing-neutral">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-ing-neutral py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <div className="max-w-[736px] space-y-8">
              <div className="space-y-4">
                <p className="font-manrope text-base font-bold uppercase text-ing-body">
                  Built with the best in the industry
                </p>
                <h1 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading">
                  Our Partners
                </h1>
              </div>
              <p className="font-manrope text-lg leading-[24px] tracking-[-0.24px] text-ing-body">
                We collaborate with leading organizations in automotive
                technology, education, and trades to deliver inspections you can
                trust.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-ing-brand px-6 py-4 font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px] text-ing-accent"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner) => (
                <PartnerCard key={partner.name} partner={partner} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
                  Interested in partnering?
                </h2>
                <p className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
                  We're always looking to work with organizations that share our
                  commitment to transparency and quality in the automotive
                  space.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-ing-accent px-6 py-4 font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px] text-ing-brand"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;

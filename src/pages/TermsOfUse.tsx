import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/seo/PageMeta";

const TermsOfUse = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PageMeta
        title="Terms of Use | InspectnGO"
        description="InspectnGO's terms of use governing access to our vehicle inspection platform."
        canonical="https://www.inspectngo.ca/terms"
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-ing-neutral py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <h1 className="font-heading text-[40px] font-bold leading-none tracking-[-0.64px] text-ing-heading">
              Terms of Use
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-[1184px] space-y-6 px-6 py-16 md:px-8">
            <p className="font-manrope text-base font-bold uppercase text-ing-body">
              Effective Date as of: March 10th, 2026
            </p>
            <p className="text-body">
              Welcome to InspectnGO. By accessing or using our website, services,
              or booking platform, you agree to the following Terms of Use.
            </p>

            {/* 1 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                1. Service Description
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  InspectnGO provides mobile pre-purchase vehicle inspections
                  performed by independent automotive inspectors. Our service
                  allows customers to request an inspection at the vehicle's
                  current location, such as a private residence, dealership, or
                  parking lot.
                </p>
                <p>
                  InspectnGO facilitates the booking, coordination, and delivery
                  of inspection reports.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                2. Inspection Disclaimer
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  Vehicle inspections are visual and non-invasive assessments
                  performed at the time of inspection. InspectnGO and its
                  inspectors cannot guarantee the future condition, reliability,
                  or safety of any vehicle.
                </p>
                <p>
                  The inspection report reflects the mechanic's professional
                  opinion based on observable conditions at the time of
                  inspection.
                </p>
                <p>InspectnGO does not:</p>
                <ul className="list-disc pl-6">
                  <li>
                    Guarantee that all mechanical issues will be identified
                  </li>
                  <li>
                    Guarantee the accuracy of information provided by sellers
                  </li>
                  <li>Provide warranties on inspected vehicles</li>
                </ul>
              </div>
            </div>

            {/* 3 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                3. Independent Contractors
              </h2>
              <div className="text-body">
                <p>
                  InspectnGO works with independent automotive technicians. These
                  inspectors are not employees of InspectnGO but are vetted
                  professionals performing services through the platform.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                4. Customer Responsibilities
              </h2>
              <div className="space-y-1 text-body">
                <p>By using InspectnGO, you agree that:</p>
                <ul className="list-disc pl-6">
                  <li>You have permission to have the vehicle inspected</li>
                  <li>The vehicle is accessible at the scheduled location</li>
                  <li>The seller or owner allows the inspection to occur</li>
                  <li>You provide accurate booking information</li>
                </ul>
                <p>
                  Failure to provide access to the vehicle may result in
                  cancellation fees.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                5. Payment and Fees
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  Inspection fees must be paid at the time of booking unless
                  otherwise specified. Pricing may vary depending on location,
                  vehicle type, or service package.
                </p>
                <p>
                  All payments are non-refundable once the inspection has been
                  completed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;

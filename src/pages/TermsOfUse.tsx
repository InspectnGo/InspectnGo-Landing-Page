import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="flex min-h-screen flex-col bg-ing-neutral">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-16 md:px-8">
          <h1 className="font-manrope text-3xl font-bold tracking-tight text-ing-accent md:text-4xl">
            InspectnGO – Terms of Use
          </h1>
          <p className="mt-2 font-manrope text-sm text-ing-body">
            Effective Date as of: March 10th, 2026
          </p>

          <p className="mt-8 font-manrope text-base leading-relaxed text-ing-body">
            Welcome to InspectnGO. By accessing or using our website, services,
            or booking platform, you agree to the following Terms of Use.
          </p>

          {/* 1 */}
          <h2 className="mt-10 font-manrope text-xl font-bold text-ing-accent">
            1. Service Description
          </h2>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            InspectnGO provides mobile pre-purchase vehicle inspections performed
            by independent automotive inspectors. Our service allows customers to
            request an inspection at the vehicle's current location, such as a
            private residence, dealership, or parking lot.
          </p>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            InspectnGO facilitates the booking, coordination, and delivery of
            inspection reports.
          </p>

          {/* 2 */}
          <h2 className="mt-10 font-manrope text-xl font-bold text-ing-accent">
            2. Inspection Disclaimer
          </h2>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            Vehicle inspections are visual and non-invasive assessments performed
            at the time of inspection. InspectnGO and its inspectors cannot
            guarantee the future condition, reliability, or safety of any
            vehicle.
          </p>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            The inspection report reflects the mechanic's professional opinion
            based on observable conditions at the time of inspection.
          </p>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            InspectnGO does not:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 font-manrope text-base leading-relaxed text-ing-body">
            <li>Guarantee that all mechanical issues will be identified</li>
            <li>
              Guarantee the accuracy of information provided by sellers
            </li>
            <li>Provide warranties on inspected vehicles</li>
          </ul>

          {/* 3 */}
          <h2 className="mt-10 font-manrope text-xl font-bold text-ing-accent">
            3. Independent Contractors
          </h2>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            InspectnGO works with independent automotive technicians. These
            inspectors are not employees of InspectnGO but are vetted
            professionals performing services through the platform.
          </p>

          {/* 4 */}
          <h2 className="mt-10 font-manrope text-xl font-bold text-ing-accent">
            4. Customer Responsibilities
          </h2>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            By using InspectnGO, you agree that:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 font-manrope text-base leading-relaxed text-ing-body">
            <li>You have permission to have the vehicle inspected</li>
            <li>The vehicle is accessible at the scheduled location</li>
            <li>The seller or owner allows the inspection to occur</li>
            <li>You provide accurate booking information</li>
          </ul>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            Failure to provide access to the vehicle may result in cancellation
            fees.
          </p>

          {/* 5 */}
          <h2 className="mt-10 font-manrope text-xl font-bold text-ing-accent">
            5. Payment and Fees
          </h2>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            Inspection fees must be paid at the time of booking unless otherwise
            specified. Pricing may vary depending on location, vehicle type, or
            service package.
          </p>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            All payments are non-refundable once the inspection has been
            completed.
          </p>

          {/* 6 */}
          <h2 className="mt-10 font-manrope text-xl font-bold text-ing-accent">
            6. Limitation of Liability
          </h2>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            To the fullest extent permitted by law, InspectnGO is not liable for:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 font-manrope text-base leading-relaxed text-ing-body">
            <li>Undetected vehicle issues</li>
            <li>Mechanical failures occurring after the inspection</li>
            <li>
              Decisions made by the customer based on the inspection report
            </li>
            <li>Disputes between vehicle buyers and sellers</li>
          </ul>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            InspectnGO's liability is limited to the amount paid for the
            inspection service.
          </p>

          {/* 7 */}
          <h2 className="mt-10 font-manrope text-xl font-bold text-ing-accent">
            7. Changes to Services
          </h2>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            InspectnGO may modify or discontinue services, pricing, or website
            functionality at any time without prior notice.
          </p>

          {/* 8 */}
          <h2 className="mt-10 font-manrope text-xl font-bold text-ing-accent">
            8. Governing Law
          </h2>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            These Terms are governed by the laws of the Province of British
            Columbia, Canada.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;

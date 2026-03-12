import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-screen flex-col bg-ing-neutral">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-16 md:px-8">
          <h1 className="font-manrope text-3xl font-bold tracking-tight text-ing-accent md:text-4xl">
            InspectnGO – Privacy Policy
          </h1>
          <p className="mt-2 font-manrope text-sm text-ing-body">
            Effective Date as of: March 10th, 2026
          </p>

          <p className="mt-8 font-manrope text-base leading-relaxed text-ing-body">
            InspectnGO respects your privacy and is committed to protecting your
            personal information.
          </p>

          {/* 1 */}
          <h2 className="mt-10 font-manrope text-xl font-bold text-ing-accent">
            1. Information We Collect
          </h2>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            When you use our website or book an inspection, we may collect the
            following information:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 font-manrope text-base leading-relaxed text-ing-body">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
          </ul>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            This information is collected only for the purpose of providing our
            services.
          </p>

          {/* 2 */}
          <h2 className="mt-10 font-manrope text-xl font-bold text-ing-accent">
            2. How We Use Your Information
          </h2>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            Your information may be used to:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 font-manrope text-base leading-relaxed text-ing-body">
            <li>Schedule and coordinate vehicle inspections</li>
            <li>Communicate booking confirmations and updates</li>
            <li>Deliver inspection reports</li>
            <li>Provide customer support</li>
          </ul>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            We do not sell or rent personal information to third parties.
          </p>

          {/* 3 */}
          <h2 className="mt-10 font-manrope text-xl font-bold text-ing-accent">
            3. Sharing of Information
          </h2>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            Your information may be shared with:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 font-manrope text-base leading-relaxed text-ing-body">
            <li>
              The assigned automotive inspector performing the inspection
            </li>
            <li>
              Service providers required to process bookings or communications
            </li>
          </ul>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            Information is shared only when necessary to deliver the requested
            service.
          </p>

          {/* 4 */}
          <h2 className="mt-10 font-manrope text-xl font-bold text-ing-accent">
            4. Data Security
          </h2>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            InspectnGO takes reasonable steps to protect your information from
            unauthorized access, loss, or misuse.
          </p>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            However, no internet transmission can be guaranteed to be 100%
            secure.
          </p>

          {/* 5 */}
          <h2 className="mt-10 font-manrope text-xl font-bold text-ing-accent">
            5. Consent
          </h2>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            By submitting your information through the InspectnGO website, you
            consent to:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 font-manrope text-base leading-relaxed text-ing-body">
            <li>
              The collection and use of your information as described in this
              policy
            </li>
            <li>
              Being contacted by InspectnGO regarding your booking or service
              request
            </li>
          </ul>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            You may withdraw consent at any time by contacting us.
          </p>

          {/* 6 */}
          <h2 className="mt-10 font-manrope text-xl font-bold text-ing-accent">
            6. Access to Your Information
          </h2>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            You may request to access, update, or delete your personal
            information by contacting us.
          </p>

          {/* 7 */}
          <h2 className="mt-10 font-manrope text-xl font-bold text-ing-accent">
            7. Contact Information
          </h2>
          <p className="mt-3 font-manrope text-base leading-relaxed text-ing-body">
            If you have questions regarding this Privacy Policy, please contact:
          </p>
          <address className="mt-3 font-manrope text-base not-italic leading-relaxed text-ing-body">
            InspectnGO
            <br />
            <a
              href="mailto:inspectngo@gmail.com"
              className="underline text-ing-accent hover:brightness-90"
            >
              inspectngo@gmail.com
            </a>
            <br />
            <a
              href="tel:+17787063355"
              className="underline text-ing-accent hover:brightness-90"
            >
              (778) 706-3355
            </a>
          </address>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

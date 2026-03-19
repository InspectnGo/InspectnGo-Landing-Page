import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-ing-neutral py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <h1 className="font-heading text-[40px] font-bold leading-none tracking-[-0.64px] text-ing-heading">
              Privacy Policy
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-[1184px] space-y-6 px-6 py-16 md:px-8">
            <p className="font-manrope text-base font-bold uppercase text-ing-body">
              Effective Date as of: March 10th, 2026
            </p>
            <p className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
              InspectnGO respects your privacy and is committed to protecting
              your personal information.
            </p>

            {/* 1 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                1. Information We Collect
              </h2>
              <div className="space-y-1 font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
                <p>
                  When you use our website or book an inspection, we may collect
                  the following information:
                </p>
                <ul className="list-disc pl-6">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                </ul>
                <p>
                  This information is collected{" "}
                  <strong>
                    only for the purpose of providing our services
                  </strong>
                  .
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                2. How We Use Your Information
              </h2>
              <div className="space-y-1 font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
                <p>Your information may be used to:</p>
                <ul className="list-disc pl-6">
                  <li>Schedule and coordinate vehicle inspections</li>
                  <li>Communicate booking confirmations and updates</li>
                  <li>Deliver inspection reports</li>
                  <li>Provide customer support</li>
                </ul>
                <p>
                  We do{" "}
                  <strong>
                    not sell or rent personal information to third parties
                  </strong>
                  .
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                3. Sharing of Information
              </h2>
              <div className="space-y-1 font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
                <p>Your information may be shared with:</p>
                <ul className="list-disc pl-6">
                  <li>
                    The assigned automotive inspector performing the inspection
                  </li>
                  <li>
                    Service providers required to process bookings or
                    communications
                  </li>
                </ul>
                <p>
                  Information is shared only when necessary to deliver the
                  requested service.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                4. Data Security
              </h2>
              <div className="space-y-1 font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
                <p>
                  InspectnGO takes reasonable steps to protect your information
                  from unauthorized access, loss, or misuse.
                </p>
                <p>
                  However, no internet transmission can be guaranteed to be 100%
                  secure.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                5. Consent
              </h2>
              <div className="space-y-1 font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
                <p>
                  By submitting your information through the InspectnGO website,
                  you consent to:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    The collection and use of your information as described in
                    this policy
                  </li>
                  <li>
                    Being contacted by InspectnGO regarding your booking or
                    service request
                  </li>
                </ul>
                <p>
                  You may withdraw consent at any time by contacting us.
                </p>
              </div>
            </div>

            {/* 6 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                6. Access to Your Information
              </h2>
              <div className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
                <p>
                  You may request to access, update, or delete your personal
                  information by contacting us.
                </p>
              </div>
            </div>

            {/* 7 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                7. Contact Information
              </h2>
              <div className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
                <p className="mb-1">
                  If you have questions regarding this Privacy Policy, please
                  contact:
                </p>
                <p>
                  <strong className="font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px]">
                    InspectnGO
                  </strong>
                  <br />
                  <a
                    href="mailto:InspectnGO@gmail.com"
                    className="text-ing-heading underline decoration-ing-accent decoration-[15%]"
                  >
                    InspectnGO@gmail.com
                  </a>
                  <br />
                  <a
                    href="tel:+17787063355"
                    className="text-ing-heading underline decoration-ing-accent decoration-[15%]"
                  >
                    +1-778-706-3355
                  </a>
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

export default PrivacyPolicy;

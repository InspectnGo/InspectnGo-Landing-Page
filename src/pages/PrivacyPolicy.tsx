import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/seo/PageMeta";

const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PageMeta
        title="Privacy Policy | InspectnGO"
        description="InspectnGO's privacy policy on how we collect, use, and protect your personal information."
        canonical="https://www.inspectngo.ca/privacy"
      />
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
            <div className="space-y-1">
              <p className="font-manrope text-base font-bold uppercase text-ing-body">
                Effective Date: March 10th, 2026
              </p>
              <p className="font-manrope text-base font-bold uppercase text-ing-body">
                Last Updated: May 6th, 2026
              </p>
            </div>
            <p className="text-body">
              This Privacy Policy describes how{" "}
              <strong>InspectnGO Inc.</strong> (“InspectnGO”, “we”, “us”, or
              “our”) collects, uses, discloses, and protects personal
              information when you use our website, platform, and services
              (collectively, the “Services”).
            </p>
            <p className="text-body">
              By using InspectnGO, you consent to the practices described in
              this Privacy Policy.
            </p>

            {/* 1 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                1. Scope
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  This Privacy Policy applies to all individuals who interact
                  with InspectnGO, including:
                </p>
                <ul className="list-disc pl-6">
                  <li>Customers booking inspections</li>
                  <li>Website visitors</li>
                  <li>Independent inspectors (“Inspectors”)</li>
                  <li>Business partners</li>
                </ul>
              </div>
            </div>

            {/* 2 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                2. Information We Collect
              </h2>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  2.1 Information You Provide
                </h3>
                <div className="space-y-1 text-body">
                  <p>We may collect:</p>
                  <ul className="list-disc pl-6">
                    <li>Name, email address, and phone number</li>
                    <li>
                      Billing and payment information (processed securely via
                      third-party providers)
                    </li>
                    <li>Vehicle details (VIN, make, model, listing links)</li>
                    <li>Inspection requests and communication records</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  2.2 Automatically Collected Information
                </h3>
                <div className="space-y-1 text-body">
                  <p>When you use our Services, we may automatically collect:</p>
                  <ul className="list-disc pl-6">
                    <li>IP address</li>
                    <li>Device and browser type</li>
                    <li>Pages visited and usage activity</li>
                    <li>Cookies and similar tracking data</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  2.3 Information from Third Parties
                </h3>
                <div className="space-y-1 text-body">
                  <p>We may receive information from:</p>
                  <ul className="list-disc pl-6">
                    <li>Payment processors</li>
                    <li>Analytics providers</li>
                    <li>Business partners or referral sources</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                3. How We Use Your Information
              </h2>
              <div className="space-y-1 text-body">
                <p>We use personal information to:</p>
                <ul className="list-disc pl-6">
                  <li>Provide and manage inspection services</li>
                  <li>Connect Users with Inspectors</li>
                  <li>Process payments and send confirmations</li>
                  <li>Communicate regarding bookings and support</li>
                  <li>Improve platform functionality and user experience</li>
                  <li>Detect, prevent, and investigate fraud or misuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* 4 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                4. Legal Basis for Processing (Canada)
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  We collect, use, and disclose personal information based on:
                </p>
                <ul className="list-disc pl-6">
                  <li>Your consent</li>
                  <li>
                    The necessity to perform a contract (e.g., booking an
                    inspection)
                  </li>
                  <li>
                    Legitimate business interests (e.g., fraud prevention,
                    service improvement)
                  </li>
                  <li>Legal requirements</li>
                </ul>
                <p>
                  You may withdraw consent at any time, subject to legal or
                  contractual restrictions.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                5. How We Share Information
              </h2>
              <div className="text-body">
                <p>We may share your personal information with:</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  5.1 Inspectors
                </h3>
                <div className="space-y-1 text-body">
                  <p>To enable them to perform inspections, including:</p>
                  <ul className="list-disc pl-6">
                    <li>Contact details</li>
                    <li>Vehicle location and information</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  5.2 Service Providers
                </h3>
                <div className="space-y-1 text-body">
                  <p>Including:</p>
                  <ul className="list-disc pl-6">
                    <li>Payment processors</li>
                    <li>Cloud hosting providers</li>
                    <li>Customer support tools</li>
                    <li>Analytics providers</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  5.3 Legal and Regulatory Authorities
                </h3>
                <div className="space-y-1 text-body">
                  <p>Where required by law or to:</p>
                  <ul className="list-disc pl-6">
                    <li>Comply with legal obligations</li>
                    <li>Protect rights and safety</li>
                    <li>Prevent fraud or abuse</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  5.4 Business Transfers
                </h3>
                <div className="text-body">
                  <p>
                    In the event of a merger, acquisition, or sale of assets,
                    your information may be transferred.
                  </p>
                </div>
              </div>

              <p className="text-body">
                <strong>We do not sell your personal information.</strong>
              </p>
            </div>

            {/* 6 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                6. International Data Transfers
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  Your information may be stored or processed in{" "}
                  <strong>
                    Canada, the United States, or other jurisdictions
                  </strong>
                  .
                </p>
                <p>
                  By using our Services, you consent to such transfers.
                  Information may be subject to foreign laws and accessible to
                  government authorities under those laws.
                </p>
              </div>
            </div>

            {/* 7 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                7. Data Retention
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  We retain personal information only as long as necessary to:
                </p>
                <ul className="list-disc pl-6">
                  <li>Fulfill the purposes outlined in this Policy</li>
                  <li>Comply with legal, tax, and regulatory obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                </ul>
              </div>
            </div>

            {/* 8 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                8. Data Security
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  We implement reasonable administrative, technical, and
                  physical safeguards to protect your information.
                </p>
                <p>
                  However, no method of transmission or storage is completely
                  secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* 9 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                9. Your Rights (Canada)
              </h2>
              <div className="space-y-1 text-body">
                <p>Subject to applicable law, you have the right to:</p>
                <ul className="list-disc pl-6">
                  <li>Request access to your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Withdraw consent (where applicable)</li>
                </ul>
                <p>
                  Requests can be made by contacting us (see Section 13).
                </p>
              </div>
            </div>

            {/* 10 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                10. Cookies and Tracking
              </h2>
              <div className="space-y-1 text-body">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6">
                  <li>Enable core platform functionality</li>
                  <li>Analyze usage and performance</li>
                  <li>Improve user experience</li>
                </ul>
                <p>
                  You can manage cookie preferences through your browser
                  settings.
                </p>
              </div>
            </div>

            {/* 11 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                11. Third-Party Links
              </h2>
              <div className="text-body">
                <p>
                  Our platform may contain links to third-party websites. We are
                  not responsible for their privacy practices.
                </p>
              </div>
            </div>

            {/* 12 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                12. Children’s Privacy
              </h2>
              <div className="text-body">
                <p>
                  Our Services are not intended for individuals under the age of
                  majority in their jurisdiction. We do not knowingly collect
                  personal information from minors.
                </p>
              </div>
            </div>

            {/* 13 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                13. Contact Information
              </h2>
              <div className="text-body">
                <p className="mb-1">
                  For questions, requests, or complaints regarding this Privacy
                  Policy or your personal information:
                </p>
                <p>
                  <strong className="font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px]">
                    InspectnGO Inc.
                  </strong>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:InspectnGO@gmail.com"
                    className="text-ing-heading underline decoration-ing-accent decoration-[15%]"
                  >
                    InspectnGO@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* 14 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                14. Changes to This Policy
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  We may update this Privacy Policy from time to time. Updates
                  will be posted on this page with a revised “Last Updated”
                  date.
                </p>
                <p>
                  Your continued use of the Services constitutes acceptance of
                  the updated Policy.
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

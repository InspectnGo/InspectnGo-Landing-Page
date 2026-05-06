import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/seo/PageMeta";

const TermsOfUse = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PageMeta
        title="Terms of Use | InspectnGO"
        description="InspectnGO's terms and conditions of sale and use — platform access, bookings, refunds, inspections, and inspector engagement."
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
            <div className="space-y-1">
              <p className="font-manrope text-base font-bold uppercase text-ing-body">
                Effective Date: March 10th, 2026
              </p>
              <p className="font-manrope text-base font-bold uppercase text-ing-body">
                Last Updated: May 6th, 2026
              </p>
            </div>
            <p className="text-body">
              These Terms and Conditions of Sale and Use (“Terms”) govern access
              to and use of the website, platform, and services operated by{" "}
              <strong>InspectnGO Inc.</strong> (“InspectnGO”, “we”, “us”, or
              “our”).
            </p>

            {/* 1 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 1 – Overview and Acceptance
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  InspectnGO provides a technology platform that facilitates
                  connections between users seeking vehicle inspections
                  (“Users”) and independent third-party inspectors
                  (“Inspectors”).
                </p>
                <p>
                  By accessing the platform, submitting a request, or booking an
                  inspection, you acknowledge that you have read, understood,
                  and agree to be legally bound by these Terms.
                </p>
                <p>
                  We reserve the right to modify these Terms at any time.
                  Updated versions will be posted on this page with a revised
                  effective date. Continued use of the platform constitutes
                  acceptance of the revised Terms.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 2 – Nature of Services
              </h2>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  2.1 Platform Role
                </h3>
                <div className="space-y-1 text-body">
                  <p>InspectnGO is solely a technology intermediary that:</p>
                  <ul className="list-disc pl-6">
                    <li>Facilitates the booking of vehicle inspections</li>
                    <li>
                      Provides administrative coordination and standardized
                      reporting tools
                    </li>
                    <li>Processes payments on behalf of Inspectors</li>
                  </ul>
                  <p>
                    InspectnGO <strong>does not perform inspections</strong> and
                    does not act as a vehicle dealer, broker (in the legal sense
                    of negotiating sales), or agent for any User or Inspector.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  2.2 Independent Contractors
                </h3>
                <div className="space-y-1 text-body">
                  <p>All Inspectors:</p>
                  <ul className="list-disc pl-6">
                    <li>Are independent contractors</li>
                    <li>
                      Are not employees, partners, agents, or representatives of
                      InspectnGO
                    </li>
                    <li>
                      Retain sole responsibility for how inspections are
                      performed
                    </li>
                  </ul>
                  <p>
                    Nothing in these Terms shall be construed to create any
                    employment, joint venture, partnership, or agency
                    relationship.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  2.3 No Control Over Transactions
                </h3>
                <div className="space-y-1 text-body">
                  <p>InspectnGO does not:</p>
                  <ul className="list-disc pl-6">
                    <li>Own, possess, or control any vehicle</li>
                    <li>Participate in negotiations between buyers and sellers</li>
                    <li>Guarantee the completion of any vehicle transaction</li>
                  </ul>
                  <p>
                    All vehicle purchase decisions are made solely at the User’s
                    risk.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 3 – User Obligations
              </h2>
              <div className="space-y-1 text-body">
                <p>By using InspectnGO, you agree that:</p>
                <ul className="list-disc pl-6">
                  <li>
                    You will provide accurate, complete, and current information
                  </li>
                  <li>
                    You will ensure the vehicle is available and accessible at
                    the scheduled time
                  </li>
                  <li>
                    You will obtain all necessary permissions from the vehicle
                    owner for inspection and test driving
                  </li>
                </ul>
                <p>
                  You acknowledge that InspectnGO is not responsible if a
                  vehicle becomes unavailable prior to inspection.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 4 – Bookings, Fees, and Payment
              </h2>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  4.1 Payment Terms
                </h3>
                <div className="space-y-1 text-body">
                  <p>
                    All bookings require full payment at the time of
                    confirmation.
                  </p>
                  <p>Fees include:</p>
                  <ul className="list-disc pl-6">
                    <li>Inspection fees payable to the Inspector</li>
                    <li>Platform and administrative fees payable to InspectnGO</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  4.2 Scope of Services
                </h3>
                <div className="space-y-1 text-body">
                  <p>The scope of each inspection is limited to:</p>
                  <ul className="list-disc pl-6">
                    <li>What is described in the booking confirmation</li>
                    <li>What is included in the final inspection report</li>
                  </ul>
                  <p>No additional services are implied.</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  4.3 Non-Circumvention
                </h3>
                <div className="text-body">
                  <p>
                    For a period of twelve (12) months following any
                    introduction or booking through InspectnGO, you agree not to
                    directly or indirectly engage any Inspector outside the
                    platform for related services.
                  </p>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 5 – Refund and Cancellation Policy
              </h2>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  5.1 Customer-Initiated Cancellations
                </h3>
                <div className="text-body">
                  <ul className="list-disc pl-6">
                    <li>Before scheduling: no refund; credit issued</li>
                    <li>
                      More than 12 hours before inspection: no refund; credit
                      issued
                    </li>
                    <li>
                      Less than 12 hours before inspection: no refund or credit
                    </li>
                    <li>
                      After inspection has commenced or Inspector is en route:
                      no refund or credit
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  5.2 Vehicle or Seller Issues
                </h3>
                <div className="space-y-1 text-body">
                  <ul className="list-disc pl-6">
                    <li>Vehicle sold or unavailable: credit issued only</li>
                    <li>Seller no-show or delay: no refund or credit</li>
                  </ul>
                  <p>
                    The User is solely responsible for securing the vehicle’s
                    availability.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  5.3 InspectnGO-Initiated Cancellations
                </h3>
                <div className="space-y-1 text-body">
                  <p>
                    If InspectnGO cancels due to internal constraints, the User
                    is entitled to either:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>A full refund; or</li>
                    <li>A service credit</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  5.4 Credits
                </h3>
                <div className="text-body">
                  <ul className="list-disc pl-6">
                    <li>Valid for twelve (12) months</li>
                    <li>Non-refundable</li>
                    <li>Transferable</li>
                    <li>No cash value</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 6 – Service Limitations
              </h2>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  6.1 Nature of Inspection
                </h3>
                <div className="space-y-1 text-body">
                  <p>All inspections are:</p>
                  <ul className="list-disc pl-6">
                    <li>Visual and non-invasive</li>
                    <li>
                      Conducted without dismantling, disassembly, or specialized
                      diagnostic equipment unless explicitly stated
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  6.2 Inspection Constraints
                </h3>
                <div className="space-y-1 text-body">
                  <p>Inspection results may be affected by:</p>
                  <ul className="list-disc pl-6">
                    <li>Accessibility limitations</li>
                    <li>Environmental conditions</li>
                    <li>Time constraints</li>
                    <li>Owner restrictions</li>
                  </ul>
                  <p>
                    Any item not expressly included in the report shall be
                    deemed not inspected.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-manrope text-xl font-bold tracking-[-0.24px] text-ing-heading">
                  6.3 Point-in-Time Assessment
                </h3>
                <div className="space-y-1 text-body">
                  <p>
                    Inspection findings reflect the condition of the vehicle at
                    the time of inspection only.
                  </p>
                  <p>InspectnGO and Inspectors are not responsible for:</p>
                  <ul className="list-disc pl-6">
                    <li>Latent defects</li>
                    <li>Mechanical failures occurring after inspection</li>
                    <li>Undetectable issues at the time of inspection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 7 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 7 – No Warranties
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  All services are provided on an “as is” and “as available”
                  basis.
                </p>
                <p>
                  To the fullest extent permitted by law, InspectnGO disclaims
                  all warranties, express or implied, including:
                </p>
                <ul className="list-disc pl-6">
                  <li>Merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Accuracy or completeness of inspection findings</li>
                </ul>
                <p>An inspection does not constitute:</p>
                <ul className="list-disc pl-6">
                  <li>A guarantee of vehicle condition</li>
                  <li>A certification or compliance report</li>
                  <li>A substitute for regulatory inspections</li>
                </ul>
              </div>
            </div>

            {/* 8 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 8 – Limitation of Liability
              </h2>
              <div className="space-y-1 text-body">
                <p>To the maximum extent permitted by applicable law:</p>
                <p>InspectnGO shall not be liable for:</p>
                <ul className="list-disc pl-6">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, business, or opportunity</li>
                  <li>Vehicle defects not identified in the inspection</li>
                  <li>Any dispute between buyer, seller, or third parties</li>
                </ul>
                <p>
                  In all cases, InspectnGO’s total aggregate liability shall not
                  exceed the amount paid for the specific inspection giving
                  rise to the claim.
                </p>
              </div>
            </div>

            {/* 9 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 9 – Indemnification
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  You agree to indemnify and hold harmless InspectnGO, its
                  officers, directors, affiliates, contractors, and agents from
                  any claims, damages, liabilities, or expenses arising out of:
                </p>
                <ul className="list-disc pl-6">
                  <li>Your use of the platform</li>
                  <li>Your violation of these Terms</li>
                  <li>Any dispute with a third party</li>
                </ul>
              </div>
            </div>

            {/* 10 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 10 – Prohibited Use
              </h2>
              <div className="space-y-1 text-body">
                <p>You agree not to:</p>
                <ul className="list-disc pl-6">
                  <li>Use the platform for unlawful purposes</li>
                  <li>Interfere with platform security or functionality</li>
                  <li>Attempt unauthorized access</li>
                  <li>Transmit malicious code</li>
                </ul>
                <p>Violations may result in immediate termination and legal action.</p>
              </div>
            </div>

            {/* 11 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 11 – Force Majeure
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  InspectnGO shall not be liable for delays or failure to
                  perform due to events beyond reasonable control, including
                  but not limited to:
                </p>
                <ul className="list-disc pl-6">
                  <li>Weather conditions</li>
                  <li>System outages</li>
                  <li>Government actions</li>
                  <li>Third-party failures</li>
                </ul>
              </div>
            </div>

            {/* 12 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 12 – Termination
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  InspectnGO reserves the right to suspend or terminate access
                  at its sole discretion where:
                </p>
                <ul className="list-disc pl-6">
                  <li>These Terms are violated</li>
                  <li>Fraud or misuse is suspected</li>
                  <li>Platform integrity is at risk</li>
                </ul>
              </div>
            </div>

            {/* 13 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 13 – Governing Law
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of the Province of{" "}
                  <strong>British Columbia, Canada</strong>, and applicable
                  federal laws.
                </p>
                <p>
                  Any dispute shall be subject to the exclusive jurisdiction of
                  the courts of British Columbia.
                </p>
              </div>
            </div>

            {/* 14 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 14 – Severability
              </h2>
              <div className="text-body">
                <p>
                  If any provision of these Terms is found to be invalid or
                  unenforceable, the remaining provisions shall remain in full
                  force and effect.
                </p>
              </div>
            </div>

            {/* 15 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 15 – Entire Agreement
              </h2>
              <div className="text-body">
                <p>
                  These Terms constitute the entire agreement between you and
                  InspectnGO and supersede all prior communications.
                </p>
              </div>
            </div>

            {/* 16 */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Article 16 – Contact
              </h2>
              <div className="text-body">
                <p>
                  <strong className="font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px]">
                    InspectnGO Inc.
                  </strong>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:inspectngo@gmail.com"
                    className="text-ing-heading underline decoration-ing-accent decoration-[15%]"
                  >
                    inspectngo@gmail.com
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

export default TermsOfUse;

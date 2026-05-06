import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/seo/PageMeta";

const Disclaimer = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PageMeta
        title="Disclaimer | InspectnGO"
        description="InspectnGO's inspection disclaimer and limitation of liability."
        canonical="https://www.inspectngo.ca/disclaimer"
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-ing-neutral py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <h1 className="font-heading text-[40px] font-bold leading-none tracking-[-0.64px] text-ing-heading">
              Inspection Disclaimer
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-[1184px] space-y-6 px-6 py-16 md:px-8">
            <div className="space-y-1">
              <p className="font-manrope text-base font-bold uppercase text-ing-body">
                Effective Date: May 6th, 2026
              </p>
              <p className="font-manrope text-base font-bold uppercase text-ing-body">
                Last Updated: May 6th, 2026
              </p>
            </div>
            <p className="text-body">
              The inspection provided by <strong>InspectnGO Inc.</strong>{" "}
              (“InspectnGO”) is a{" "}
              <strong>
                limited, visual, and non-invasive assessment only
              </strong>
              , conducted without disassembly, dismantling, or the use of
              specialized diagnostic equipment unless expressly stated.
            </p>

            {/* Acknowledgment of Scope */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Acknowledgment of Scope
              </h2>
              <div className="space-y-1 text-body">
                <p>You expressly acknowledge and agree that:</p>
                <ul className="list-disc pl-6">
                  <li>
                    The inspection is <strong>not exhaustive</strong> and is
                    limited strictly to what is visible and accessible at the
                    time of inspection
                  </li>
                  <li>
                    Certain components, including internal mechanical,
                    electrical, or structural elements,{" "}
                    <strong>cannot and will not be assessed</strong>
                  </li>
                  <li>
                    Environmental conditions, time constraints, and third-party
                    cooperation may further limit the scope and accuracy of the
                    inspection
                  </li>
                </ul>
              </div>
            </div>

            {/* No Guarantee of Defects Found */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                No Guarantee of Defects Found
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  InspectnGO and its independent inspectors{" "}
                  <strong>do not guarantee</strong> that all defects, faults, or
                  issues—whether existing, developing, or latent—will be
                  identified.{" "}
                  <strong>
                    Hidden defects, future failures, and undiscoverable issues
                    are expressly excluded
                  </strong>{" "}
                  from the scope of the inspection.
                </p>
              </div>
            </div>

            {/* No Representations or Warranties */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                No Representations or Warranties
              </h2>
              <div className="space-y-1 text-body">
                <p>
                  The inspection report reflects the condition of the vehicle{" "}
                  <strong>at a single point in time only</strong>. InspectnGO
                  makes <strong>no representation or warranty</strong>—express
                  or implied—regarding:
                </p>
                <ul className="list-disc pl-6">
                  <li>The current or future condition of the vehicle</li>
                  <li>
                    Roadworthiness, safety, or compliance with any laws or
                    regulations
                  </li>
                  <li>
                    The accuracy, completeness, or reliability of the inspection
                    findings
                  </li>
                </ul>
              </div>
            </div>

            {/* Informational Use Only */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Informational Use Only
              </h2>
              <div className="text-body">
                <p>
                  The report is provided{" "}
                  <strong>for informational purposes only</strong> and{" "}
                  <strong>
                    must not be relied upon as the sole basis for any purchasing
                    decision
                  </strong>
                  .
                </p>
              </div>
            </div>

            {/* Your Responsibilities */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Your Responsibilities
              </h2>
              <div className="space-y-1 text-body">
                <p>You agree that:</p>
                <ul className="list-disc pl-6">
                  <li>
                    You are solely responsible for conducting your own due
                    diligence prior to purchase
                  </li>
                  <li>
                    You assume all risks associated with the purchase and
                    ownership of the vehicle
                  </li>
                  <li>
                    InspectnGO has{" "}
                    <strong>
                      no involvement in, and bears no responsibility for
                    </strong>
                    , any transaction between buyer and seller
                  </li>
                </ul>
              </div>
            </div>

            {/* What InspectnGO Does Not Do */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                What InspectnGO Does Not Do
              </h2>
              <div className="space-y-1 text-body">
                <p>InspectnGO does not:</p>
                <ul className="list-disc pl-6">
                  <li>Verify vehicle ownership, title, or lien status</li>
                  <li>Check for manufacturer recalls or service bulletins</li>
                  <li>Provide legal, mechanical, or financial advice</li>
                  <li>
                    Replace any official inspection, certification, or
                    regulatory requirement
                  </li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Limitation of Liability
              </h2>
              <div className="space-y-1 text-body">
                <p>To the fullest extent permitted by applicable law:</p>
                <ul className="list-disc pl-6">
                  <li>
                    InspectnGO shall have{" "}
                    <strong>no liability whatsoever</strong> for any loss,
                    damage, or expense arising out of or related to the
                    inspection or report
                  </li>
                  <li>
                    This includes, without limitation,{" "}
                    <strong>
                      any direct, indirect, incidental, consequential, or
                      special damages
                    </strong>
                    , including loss of profits, business, data, opportunity,
                    or expected savings
                  </li>
                  <li>
                    InspectnGO shall not be liable for any mechanical failure,
                    defect, or issue, whether known or unknown, discovered
                    before or after the inspection
                  </li>
                </ul>
                <p>
                  You further agree that{" "}
                  <strong>
                    any reliance on the inspection report is entirely at your
                    own risk
                  </strong>
                  .
                </p>
                <p>
                  If, notwithstanding the foregoing, InspectnGO is found liable
                  for any claim,{" "}
                  <strong>
                    its total aggregate liability shall be strictly limited to
                    the amount paid for the inspection service
                  </strong>
                  , and this shall be your sole and exclusive remedy.
                </p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="space-y-6">
              <h2 className="font-manrope text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-ing-heading">
                Acknowledgment
              </h2>
              <div className="text-body">
                <p>
                  By proceeding with the inspection, you acknowledge that you
                  have read, understood, and agreed to this disclaimer in full.
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

export default Disclaimer;

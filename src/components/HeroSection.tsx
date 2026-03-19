import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "@/lib/api";

type Tab = "customer" | "mechanic";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("customer");
  const [email, setEmailValue] = useState("");
  const [phoneNumber, setPhoneNumberValue] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [consentError, setConsentError] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [honeypot, setHoneypot] = useState("");

  /**
   * Mirrors the server-side Pydantic EmailStr validation.
   */
  const isValidEmail = (value: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  };

  /**
   * Mirrors the server-side phone_number sanitization & E.164 rules:
   *  1. Strip whitespace, dashes, dots, parentheses
   *  2. Must be optional '+' followed by digits only
   *  3. 7-15 digits (not counting the '+')
   */
  const sanitizePhone = (value: string): string => {
    return value.replace(/[\s\-.()\u00A0]+/g, "");
  };

  const isValidPhone = (value: string): boolean => {
    const cleaned = sanitizePhone(value);
    if (!cleaned) return false;
    if (!/^\+?\d+$/.test(cleaned)) return false;
    const digits = cleaned.replace(/^\+/, "");
    return digits.length >= 7 && digits.length <= 15;
  };

  const handleSubmit = async () => {
    // Honeypot: if a bot filled in the hidden field, silently bail out
    if (honeypot) {
      setSubmitStatus({
        type: "success",
        text: activeTab === "customer" ? "Inspection request sent!" : "Sign up successful!",
      });
      return;
    }

    // --- Client-side validation (collect all errors at once) ---
    let hasError = false;
    setEmailError(null);
    setPhoneError(null);
    setConsentError(null);
    setSubmitStatus(null);

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }
    if (!isValidPhone(phoneNumber)) {
      setPhoneError("Please enter a valid phone number (7-15 digits, optional leading '+')");
      hasError = true;
    }
    if (!consent) {
      setConsentError("Please agree to the terms before continuing");
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);

    const endpoint = activeTab === "customer" ? "/customers/" : "/mechanics/";

    try {
      await api.post(endpoint, {
        email: email.trim(),
        phone_number: sanitizePhone(phoneNumber),
      });
      setSubmitStatus({
        type: "success",
        text: activeTab === "customer" ? "Inspection request sent! We will contact you shortly." : "Thank you for signing up! We will contact you shortly.",
      });
      setEmailValue("");
      setPhoneNumberValue("");
      setConsent(false);
    } catch (err) {
      setSubmitStatus({
        type: "error",
        text: err instanceof Error ? err.message : "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-ing-neutral py-8 pb-16">
      <div className="mx-auto flex max-w-[1184px] flex-col gap-8 px-6 md:px-8 lg:flex-row lg:items-center">
        {/* Left — headline */}
        <div className="flex flex-col gap-4 lg:w-[55%] lg:pr-16">
          <p className="font-manrope text-lg font-bold uppercase tracking-[-0.1px] text-ing-heading">
            Recognized by SkillTrades BC and CARFAX
          </p>
          <h1 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-body lg:text-[64px]">
            Affordable and fast vehicle inspections done{" "}
            <span className="text-ing-heading underline decoration-ing-accent decoration-[15%] underline-offset-4 decoration-skip-ink-auto">right</span>.
          </h1>
          <p className="font-manrope text-lg leading-[24px] tracking-[-0.24px] text-ing-body">
            Book a trusted mechanic to inspect the vehicle on-site and receive a
            clear, detailed report, so you know exactly what you're buying
            before making the deal.
          </p>
        </div>

        {/* Right — sign-up form */}
        <div
          id="signup"
          className="scroll-mt-24 flex flex-col gap-4 rounded-lg bg-white p-6 shadow-form sm:p-8 lg:flex-1"
        >
          {/* Segmented control */}
          <div className="flex self-center rounded-full bg-ing-neutral p-2">
            <button
              onClick={() => setActiveTab("customer")}
              className={`rounded-full px-4 py-3 font-manrope text-base font-bold tracking-[-0.24px] transition ${
                activeTab === "customer"
                  ? "bg-white text-ing-btn-active shadow-form"
                  : "text-ing-body"
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => setActiveTab("mechanic")}
              className={`rounded-full px-4 py-3 font-manrope text-base font-bold tracking-[-0.24px] transition ${
                activeTab === "mechanic"
                  ? "bg-white text-ing-btn-active shadow-form"
                  : "text-ing-body"
              }`}
            >
              Mechanic
            </button>
          </div>

          {/* Honeypot – invisible to real users, traps bots */}
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="company_website">Company Website</label>
            <input
              id="company_website"
              type="text"
              name="company_website"
              autoComplete="nope"
              tabIndex={-1}
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          {/* Form fields */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-manrope text-base tracking-[-0.24px] text-ing-heading">
                Email
              </label>
              <input
                type="email"
                placeholder="inspectngo@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmailValue(e.target.value);
                  if (emailError) setEmailError(null);
                }}
                className={`h-14 rounded-lg border px-4 font-manrope text-base tracking-[-0.24px] text-ing-heading placeholder:text-ing-placeholder focus:outline-none focus:ring-2 focus:ring-ing-accent ${
                  emailError ? "border-red-500" : "border-ing-border"
                }`}
              />
              {emailError && (
                <p className="font-manrope text-sm tracking-[-0.24px] text-red-500">
                  {emailError}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-manrope text-base tracking-[-0.24px] text-ing-heading">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="Mobile number"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumberValue(e.target.value);
                  if (phoneError) setPhoneError(null);
                }}
                className={`h-14 rounded-lg border px-4 font-manrope text-base tracking-[-0.24px] text-ing-heading placeholder:text-ing-placeholder focus:outline-none focus:ring-2 focus:ring-ing-accent ${
                  phoneError ? "border-red-500" : "border-ing-border"
                }`}
              />
              {phoneError && (
                <p className="font-manrope text-sm tracking-[-0.24px] text-red-500">
                  {phoneError}
                </p>
              )}
            </div>

            {/* Checkbox */}
            <div className="flex flex-col gap-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <span
                  role="checkbox"
                  aria-checked={consent}
                  tabIndex={0}
                  onClick={() => {
                    setConsent(!consent);
                    if (consentError) setConsentError(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === " " || e.key === "Enter") {
                      e.preventDefault();
                      setConsent(!consent);
                      if (consentError) setConsentError(null);
                    }
                  }}
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 transition ${
                    consent
                      ? "border-ing-brand bg-ing-brand"
                      : consentError
                        ? "border-red-500 bg-white"
                        : "border-ing-border bg-white"
                  }`}
                >
                  {consent && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00e5ff"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
                <span className="font-manrope text-sm leading-[18px] tracking-[-0.24px] text-ing-body">
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-ing-heading underline decoration-ing-accent decoration-2 underline-offset-2 decoration-skip-ink-auto hover:brightness-90"
                >
                  Terms of Use
                </Link>
                {" "}and{" "} 
                <Link
                  to="/privacy"
                  className="text-ing-heading underline decoration-ing-accent decoration-2 underline-offset-2 decoration-skip-ink-auto hover:brightness-90"
                >
                  Privacy Policy
                </Link>
                {" "}and consent to receive emails and text messages from InspectnGO.
                </span>
              </label>
              {consentError && (
                <p className="font-manrope text-sm tracking-[-0.24px] text-red-500">
                  {consentError}
                </p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full rounded-full bg-ing-brand px-6 py-3 font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px] text-ing-accent hover:brightness-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading
                ? "Submitting…"
                : activeTab === "customer"
                  ? "Get inspection"
                  : "Sign up"}
            </button>

            {/* Submission status */}
            {submitStatus && (
              <p
                className={`font-manrope text-sm tracking-[-0.24px] text-center ${
                  submitStatus.type === "success" ? "text-green-600" : "text-red-500"
                }`}
              >
                {submitStatus.text}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { useState } from "react";
import { api } from "@/lib/api";

type Tab = "customer" | "mechanic";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("customer");
  const [email, setEmailValue] = useState("");
  const [phoneNumber, setPhoneNumberValue] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
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
      setMessage({
        type: "success",
        text: activeTab === "customer" ? "Inspection request sent!" : "Sign up successful!",
      });
      return;
    }

    // --- Client-side validation (matches server schemas) ---
    if (!isValidEmail(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address" });
      return;
    }
    if (!isValidPhone(phoneNumber)) {
      setMessage({ type: "error", text: "Please enter a valid phone number (7-15 digits, optional leading '+')" });
      return;
    }
    if (!consent) {
      setMessage({ type: "error", text: "Please agree to the terms before continuing" });
      return;
    }

    setMessage(null);
    setLoading(true);

    const endpoint = activeTab === "customer" ? "/customers/" : "/mechanics/";

    try {
      await api.post(endpoint, {
        email: email.trim(),
        phone_number: sanitizePhone(phoneNumber),
      });
      setMessage({
        type: "success",
        text: activeTab === "customer" ? "Inspection request sent!" : "Sign up successful!",
      });
      setEmailValue("");
      setPhoneNumberValue("");
      setConsent(false);
    } catch (err) {
      setMessage({
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
          <p className="font-manrope text-lg font-bold uppercase tracking-[-0.1px] text-ing-body">
            Recognized by SkillTrades BC and CARFAX
          </p>
          <h1 className="font-space text-4xl tracking-[-0.64px] text-ing-heading sm:text-5xl lg:text-[64px] lg:leading-none">
            Affordable and fast vehicle inspections done{" "}
            <span className="text-ing-accent">right</span>.
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
          className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-card sm:p-8 lg:flex-1"
        >
          {/* Segmented control */}
          <div className="flex self-center rounded-full bg-ing-neutral p-2">
            <button
              onClick={() => setActiveTab("customer")}
              className={`rounded-full px-4 py-3 font-manrope text-base font-bold tracking-[-0.24px] transition ${
                activeTab === "customer"
                  ? "bg-white text-ing-btn-active shadow-card"
                  : "text-ing-body"
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => setActiveTab("mechanic")}
              className={`rounded-full px-4 py-3 font-manrope text-base font-bold tracking-[-0.24px] transition ${
                activeTab === "mechanic"
                  ? "bg-white text-ing-btn-active shadow-card"
                  : "text-ing-body"
              }`}
            >
              Mechanic
            </button>
          </div>

          {/* Honeypot – invisible to real users, traps bots */}
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="hero-name">Name</label>
            <input
              id="hero-name"
              type="text"
              name="name"
              autoComplete="off"
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
                onChange={(e) => setEmailValue(e.target.value)}
                className="h-14 rounded-lg border border-ing-border px-4 font-manrope text-base tracking-[-0.24px] text-ing-heading placeholder:text-ing-placeholder focus:outline-none focus:ring-2 focus:ring-ing-accent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-manrope text-base tracking-[-0.24px] text-ing-heading">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="Mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumberValue(e.target.value)}
                className="h-14 rounded-lg border border-ing-border px-4 font-manrope text-base tracking-[-0.24px] text-ing-heading placeholder:text-ing-placeholder focus:outline-none focus:ring-2 focus:ring-ing-accent"
              />
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-6 w-6 shrink-0 rounded-lg border-ing-border accent-ing-accent"
              />
              <span className="font-manrope text-sm leading-[18px] tracking-[-0.24px] text-ing-body">
                By signing up with your email address and phone number, you
                consent to receive email and messages from InspectnGO. Read
                Terms and Use.
              </span>
            </label>

            {/* Status message */}
            {message && (
              <p
                className={`font-manrope text-sm tracking-[-0.24px] ${
                  message.type === "success" ? "text-green-600" : "text-red-500"
                }`}
              >
                {message.text}
              </p>
            )}

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

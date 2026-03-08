import { useState } from "react";
import { api } from "@/lib/api";

type Tab = "customer" | "mechanic";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("customer");
  const [email, setEmailValue] = useState("");
  const [phoneNumber, setPhoneNumberValue] = useState("");
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
      setMessage({ type: "success", text: activeTab === "customer" ? "Inspection request sent!" : "Sign up successful!" });
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

    setMessage(null);
    setLoading(true);

    const endpoint = activeTab === "customer" ? "customers/" : "mechanics/";

    try {
      await api.post(`/landing-page/${endpoint}`, { email: email.trim(), phone_number: sanitizePhone(phoneNumber) });
      setMessage({ type: "success", text: activeTab === "customer" ? "Inspection request sent!" : "Sign up successful!" });
      setEmailValue("");
      setPhoneNumberValue("");
    } catch (err) {
      setMessage({ type: "error", text: err instanceof Error ? err.message : "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Image Banner */}
      <div className="hero-image-wrap">
        <img src="hero-section-car.png" alt="Red flatbed truck carrying a white sedan" className="hero-image" />
        {/* Badge overlay */}
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          75,000+ cars inspected!
        </div>
      </div>

      {/* Form Section */}
      <div className="hero-form">
        {/* Segmented control */}
        <div className="segmented-control">
          <button
            className={`segmented-btn${activeTab === "customer" ? " segmented-btn--active" : ""}`}
            onClick={() => setActiveTab("customer")}
          >
            Customer
          </button>
          <button
            className={`segmented-btn${activeTab === "mechanic" ? " segmented-btn--active" : ""}`}
            onClick={() => setActiveTab("mechanic")}
          >
            Mechanic
          </button>
        </div>

        {/* Honeypot – invisible to real users, traps bots */}
        <div className="hero-hp" aria-hidden="true">
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

        {/* Email address */}
        <input
          type="text"
          placeholder={"Email address"}
          value={email}
          onChange={(e) => setEmailValue(e.target.value)}
          className="hero-input hero-input--grow"
        />

        {/* Phone number */}
        <input
          type="text"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumberValue(e.target.value)}
          className="hero-input hero-input--grow"
        />

        {/* Status message */}
        {message && (
          <p className={message.type === "success" ? "hero-msg hero-msg--success" : "hero-msg hero-msg--error"}>
            {message.text}
          </p>
        )}

        {/* CTA Button */}
        <button className="hero-cta" onClick={handleSubmit} disabled={loading}>
          {loading ? "Submitting…" : activeTab === "customer" ? "Get inspection" : "Sign up"}
        </button>
      </div>
    </>
  );
};

export default HeroSection;

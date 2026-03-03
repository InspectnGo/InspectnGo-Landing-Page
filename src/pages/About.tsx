import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Wrench, Users, Linkedin } from "lucide-react";

/* ─── Team Data ─── */
const TEAM = [
  {
    name: "TBD",
    role: "Chief Executive Officer",
    bio: "Drives the vision and strategy behind InspectnGo, ensuring every decision puts vehicle buyers first.",
    initials: "CEO",
  },
  {
    name: "TBD",
    role: "Chief Technology Officer",
    bio: "Architects the platform that connects buyers with trusted mechanics — fast, transparent, and reliable.",
    initials: "CTO",
  },
  {
    name: "TBD",
    role: "Founding Mechanic",
    bio: "Brings deep automotive expertise to the platform, ensuring every inspection is thorough and accurate.",
    initials: "FM",
  },
];

/* ─── Values Data ─── */
const VALUES = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To eliminate uncertainty from the used-car buying experience by making professional vehicle inspections accessible, affordable, and instant.",
  },
  {
    icon: Wrench,
    title: "What We Do",
    text: "We connect vehicle buyers with certified mobile mechanics who perform comprehensive pre-purchase inspections — wherever the car is, whenever you need it.",
  },
  {
    icon: Users,
    title: "Who We Are",
    text: "A team of automotive and technology professionals who believe every buyer deserves to know exactly what they're paying for — no surprises, no guesswork.",
  },
];

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="about-hero">
          <div className="about-hero-inner">
            <span className="about-eyebrow">About Us</span>
            <h1 className="about-hero-title">
              Confidence before you <span className="about-accent">buy.</span>
            </h1>
            <p className="about-hero-subtitle">
              We're building the most trusted vehicle inspection marketplace in
              North America — so every used-car buyer can make an informed
              decision.
            </p>
          </div>
        </section>

        {/* ── Our Story ── */}
        <section className="about-story">
          <div className="about-story-inner">
            <span className="about-eyebrow">Our Story</span>
            <h2 className="about-section-title">
              Born from a <span className="about-accent">real problem</span>
            </h2>
            <div className="about-story-body">
              <p>
                It started the way most good ideas do — with frustration. One of
                our founders bought a used car that looked perfect on the
                outside but hid thousands of dollars in mechanical issues
                underneath. The experience was stressful, expensive, and
                entirely avoidable.
              </p>
              <p>
                That moment sparked a question: <em>why is it so hard to get a
                professional inspection before you buy?</em> The answer was
                clear — the industry hadn't caught up. Booking an inspection
                meant calling around, waiting days, and hoping the seller would
                cooperate.
              </p>
              <p>
                So we built InspectnGo — a platform that puts a certified
                mechanic at the car's location within hours, delivers a
                transparent report, and gives buyers the confidence to
                negotiate fairly or walk away.
              </p>
            </div>
          </div>
        </section>

        {/* ── Mission / What We Do / Who We Are ── */}
        <section className="about-values">
          <div className="about-values-inner">
            {VALUES.map((v) => (
              <div className="about-value-card" key={v.title}>
                <div className="about-value-icon-wrap">
                  <v.icon className="about-value-icon" />
                </div>
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-text">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Team ── */}
        <section className="about-team">
          <div className="about-team-header">
            <span className="about-eyebrow">The Team</span>
            <h2 className="about-section-title">
              Meet the people <span className="about-accent">behind it</span>
            </h2>
            <p className="about-team-subtitle">
              A small, focused team committed to transforming the used-car
              inspection experience.
            </p>
          </div>

          <div className="about-team-grid">
            {TEAM.map((member) => (
              <div className="about-team-card" key={member.role}>
                {/* Avatar placeholder */}
                <div className="about-team-avatar">
                  <span>{member.initials}</span>
                </div>
                <h3 className="about-team-name">{member.name}</h3>
                <span className="about-team-role">{member.role}</span>
                <p className="about-team-bio">{member.bio}</p>
                <a href="#" className="about-team-social" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

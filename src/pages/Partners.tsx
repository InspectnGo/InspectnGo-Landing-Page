import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

/* ─── Partner Data ─── */
const PARTNERS = [
  {
    name: "CARFAX",
    logo: "/carfax-logo.png",
    url: "https://www.carfax.com",
    description:
      "CARFAX provides comprehensive vehicle history reports that reveal accidents, service records, and ownership details. Their data helps buyers and sellers make transparent, confident decisions in the used-car market.",
  },
  {
    name: "BCIT",
    logo: "/bcit-logo.png",
    url: "https://www.bcit.ca",
    description:
      "The British Columbia Institute of Technology trains the next generation of automotive technicians through hands-on, industry-aligned programs. BCIT graduates form the backbone of skilled mechanics across Western Canada.",
  },
  {
    name: "VCC",
    logo: "/vcc-logo.png",
    url: "https://www.vcc.ca",
    description:
      "Vancouver Community College offers accredited automotive service technician programs that blend classroom theory with real-world shop experience, producing job-ready professionals for the local automotive industry.",
  },
  {
    name: "Apex Tools",
    logo: "/apex-logo.png",
    url: "https://www.apextoolgroup.com/",
    description:
      "Apex Tools manufactures precision hand tools and power tool accessories trusted by professional mechanics worldwide. Their products are built for durability and accuracy in demanding shop environments.",
  },
  {
    name: "KMS Tools",
    logo: "/kms-logo.png",
    url: "https://www.kmstools.com",
    description:
      "KMS Tools is Western Canada's leading supplier of professional-grade automotive tools and equipment. They support independent shops and mobile mechanics with everything from lifts to diagnostic scanners.",
  },
  {
    name: "Levi's",
    logo: "/levis-logo.png",
    url: "https://www.levi.com",
    description:
      "Levi's outfits the automotive workforce with durable workwear built to handle the demands of the shop floor. Their heritage of quality craftsmanship aligns with the trades community we serve.",
  },
];

const Partners = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="partners-hero">
          <div className="partners-hero-inner">
            <span className="about-eyebrow">Our Partners</span>
            <h1 className="partners-hero-title">
              Built with the <span className="about-accent">best</span> in the
              industry
            </h1>
            <p className="partners-hero-subtitle">
              We collaborate with leading organizations in automotive technology,
              education, and trades to deliver inspections you can trust.
            </p>
          </div>
        </section>

        {/* ── Partner Grid ── */}
        <section className="partners-grid-section">
          <div className="partners-grid">
            {PARTNERS.map((partner) => (
              <div className="partners-card" key={partner.name}>
                <div className="partners-card-logo-wrap">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partners-card-logo"
                    loading="lazy"
                  />
                </div>
                <div className="partners-card-body">
                  <h3 className="partners-card-name">{partner.name}</h3>
                  <p className="partners-card-desc">{partner.description}</p>
                  {partner.url !== "#" && (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="partners-card-link"
                    >
                      Visit website
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="partners-cta">
          <div className="partners-cta-inner">
            <h2 className="partners-cta-title">Interested in partnering?</h2>
            <p className="partners-cta-text">
              We're always looking to work with organizations that share our
              commitment to transparency and quality in the automotive space.
            </p>
            <a href="mailto:inspectngo@gmail.com" className="partners-cta-btn">
              Get in touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;

const partners = [
  {
    name: "Apex Tools",
    logo: "/apex-logo.png",
  },
  {
    name: "CARFAX",
    logo: "/carfax-logo.png",
  },
  {
    name: "BCIT",
    logo: "/bcit-logo.png",
  },
  {
    name: "VCC",
    logo: "/vcc-logo.png",
  },
  {
    name: "KMS Tools",
    logo: "/kms-logo.png",
  },
  {
    name: "Levi's",
    logo: "/levis-logo.png",
  }
];

const PartnerSection = () => {
  /* Render two identical sets so the strip can loop seamlessly */
  const logoSet = partners.map((p, i) => (
    <div key={`${p.name}-${i}`} className="partner-logo-wrap">
      <img src={p.logo} alt={p.name} className="partner-logo" loading="lazy" />
    </div>
  ));

  return (
    <section className="partner-section">
      <div className="partner-inner">
        <p className="partner-label">Trusted by industry leaders</p>
        <div className="partner-marquee">
          <div className="partner-track">
            {logoSet}
            {logoSet}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;

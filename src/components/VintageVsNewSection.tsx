import { useEffect, useRef, useState } from "react";

const VintageVsNewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="vvn-section" ref={sectionRef}>
      {/* ── Header ── */}
      <div className="vvn-header">
        <p className="info-eyebrow">Vintage vs. Modern</p>
        <h2 className="info-title">
          Different eras, <span className="info-title-accent">different risks</span>
        </h2>
        <p className="info-subtitle">
          Whether it's a lovingly restored classic or a late-model daily driver, every used car hides its own set of surprises. Here's what to watch for.
        </p>
      </div>

      {/* ── Two feature cards ── */}
      <div className={`info-features${inView ? " info-features--visible" : ""}`}>
        {/* Vintage card */}
        <div className="info-feature-card">
          <div className="info-feature-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1514316703755-dca7d7d9d882?auto=format&fit=crop&w=800&q=80"
              alt="Classic vintage car with chrome bumper"
              className="info-feature-img"
              loading="lazy"
            />
            <span className="info-feature-badge info-feature-badge--vintage">Vintage</span>
          </div>
          <div className="info-feature-body">
            <h3 className="info-feature-title">Classics need extra TLC</h3>
            <p className="info-feature-text">
              Vintage cars carry decades of character — and decades of wear. Rust eating through
              frames, corroded brake lines, degraded rubber seals, and carburetors begging for a
              rebuild are all par for the course. Without a hands-on inspection, that dream cruiser
              could be months away from being road-safe.
            </p>
            <ul className="info-feature-list">
              <li>Hidden frame &amp; floor-pan rust</li>
              <li>Worn suspension &amp; steering components</li>
              <li>Outdated safety — no airbags, ABS, or crumple zones</li>
            </ul>
          </div>
        </div>

        {/* Modern card */}
        <div className="info-feature-card">
          <div className="info-feature-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=800&q=80"
              alt="Modern sedan on the road"
              className="info-feature-img"
              loading="lazy"
            />
            <span className="info-feature-badge info-feature-badge--modern">Modern</span>
          </div>
          <div className="info-feature-body">
            <h3 className="info-feature-title">Newer doesn't mean safer</h3>
            <p className="info-feature-text">
              Late-model vehicles are packed with tech, but they're also prone to manufacturer
              recalls — over 30 million cars are recalled in the U.S. every year. Pair that with
              a CARFAX report to uncover the full story: accident history, number of owners,
              odometer verification, open recalls, and more.
            </p>
            <ul className="info-feature-list">
              <li>Accident history &amp; structural damage reports</li>
              <li>Number of previous owners</li>
              <li>Open manufacturer recalls</li>
              <li>Odometer rollback detection</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VintageVsNewSection;

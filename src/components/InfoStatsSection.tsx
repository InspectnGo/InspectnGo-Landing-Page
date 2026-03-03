import { useEffect, useRef, useState } from "react";

/* ─── Stat data ─── */
interface Stat {
  value: string;
  label: string;
  description: string;
}

const STATS: Stat[] = [
  {
    value: "40M+",
    label: "Used Cars Sold Yearly",
    description:
      "Over 40 million used vehicles change hands each year in North America — more than double the number of new cars sold.",
  },
  {
    value: "1 in 6",
    label: "Have Hidden Damage",
    description:
      "Roughly 1 in 6 used vehicles carry undisclosed mechanical or structural issues that only a professional inspection can catch.",
  },
  {
    value: "$600",
    label: "Avg. Repair Surprise",
    description:
      "Buyers who skip an inspection spend an average of $600 on unexpected repairs within the first 90 days of ownership.",
  },
  {
    value: "73%",
    label: "Buyers Feel Safer",
    description:
      "73% of used-car buyers say a pre-purchase inspection gave them the confidence to negotiate a fair price — or walk away.",
  },
];

/* ─── Animated counter hook ─── */
function useCountUp(target: string, inView: boolean) {
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!inView) return;

    // Extract number portion (allowing a non-digit prefix like "$")
    const match = target.match(/^(\D*)([\d.]+)(.*)/);
    if (!match) {
      setDisplay(target);
      return;
    }

    const prefix = match[1];
    const end = parseFloat(match[2]);
    const suffix = match[3];
    const duration = 1200; // ms
    const steps = 40;
    const increment = end / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, end);
      const formatted = end >= 10 ? Math.round(current).toString() : current.toFixed(end % 1 !== 0 ? 1 : 0);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target]);

  return display;
}

/* ─── Single stat card ─── */
function StatCard({ stat, inView }: { stat: Stat; inView: boolean }) {
  const animatedValue = useCountUp(stat.value, inView);

  return (
    <div className="info-stat-card">
      <span className="info-stat-value">{animatedValue}</span>
      <span className="info-stat-label">{stat.label}</span>
      <p className="info-stat-desc">{stat.description}</p>
    </div>
  );
}

/* ─── Main section ─── */
const InfoStatsSection = () => {
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
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="info-section" ref={sectionRef}>
      {/* ── Header ── */}
      <div className="info-header">
        <p className="info-eyebrow">Why Pre-Purchase Inspection Matter</p>
        <h2 className="info-title">
          The used-car market is <span className="info-title-accent">massive and risky</span>
        </h2>
        <p className="info-subtitle">
          Millions of vehicles are sold every year without a professional check. A quick inspection protects your wallet, your safety, and your peace of mind.
        </p>
      </div>

      {/* ── Stats grid ── */}
      <div className={`info-stats-grid${inView ? " info-stats-grid--visible" : ""}`}>
        {STATS.map((s) => (
          <StatCard key={s.label} stat={s} inView={inView} />
        ))}
      </div>

      {/* ── Visual feature row ── */}
      <div className={`info-features${inView ? " info-features--visible" : ""}`}>
        {/* Card 1 */}
        <div className="info-feature-card">
          <div className="info-feature-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=800&q=80"
              alt="Mechanic inspecting under car hood"
              className="info-feature-img"
              loading="lazy"
            />
          </div>
          <div className="info-feature-body">
            <h3 className="info-feature-title">Catch problems before you buy</h3>
            <p className="info-feature-text">
              Our certified mechanics run a 150-point check covering the engine, transmission, brakes, and body — so you know exactly what you're paying for.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="info-feature-card">
          <div className="info-feature-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80"
              alt="Clean used car on road"
              className="info-feature-img"
              loading="lazy"
            />
          </div>
          <div className="info-feature-body">
            <h3 className="info-feature-title">Drive with confidence</h3>
            <p className="info-feature-text">
              A clear inspection report means no surprises down the road. Negotiate smarter, insure easier, and enjoy every mile worry-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoStatsSection;

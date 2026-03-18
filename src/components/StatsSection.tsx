import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";

interface StatCardProps {
  stat: string;
  subHeading: string;
  description: string;
  inView: boolean;
}

const StatCard = ({ stat, subHeading, description, inView }: StatCardProps) => {
  const animatedValue = useCountUp(stat, inView);

  return (
    <div className="flex flex-1 flex-col items-center gap-[18px] rounded-2xl border border-ing-border bg-white px-6 py-8 text-center shadow-form min-w-[200px]">
      <p className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-body">
        {animatedValue}
      </p>
      <p className="font-manrope text-lg font-bold uppercase tracking-[-0.1px] text-ing-heading">
        {subHeading}
      </p>
      <p className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
        {description}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
    <section className="bg-white py-16" ref={sectionRef}>
      <div className="mx-auto flex max-w-[1184px] flex-col items-center gap-8 px-6 md:px-8">
        {/* Headline */}
        <div className="flex max-w-[736px] flex-col items-center gap-4 text-center">
          <p className="font-manrope text-lg font-bold uppercase tracking-[-0.1px] text-ing-body">
            Why Pre-Purchase Inspection Matters
          </p>
          <h2 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
            The used-car market is massive and risky
          </h2>
          <p className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
            Millions of vehicles are sold every year without a professional
            check.
            <br />A quick inspection protects your wallet, your safety, and
            your peace of mind.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            stat="40M+"
            subHeading="Used Cars Sold Yearly"
            description="Over 40 million used vehicles change hands each year in North America"
            inView={inView}
          />
          <StatCard
            stat="1 in 6"
            subHeading="Have Hidden Damage"
            description="Roughly 1 in 6 used vehicles carry undisclosed mechanical or structural issues"
            inView={inView}
          />
          <StatCard
            stat="$600"
            subHeading="Average Repair Surprise"
            description="Buyers who skip an inspection spend an average of $600 on unexpected"
            inView={inView}
          />
        </div>

        {/* CTA */}
        <a
          href="#signup"
          className="inline-flex w-full min-w-[120px] items-center justify-center rounded-full bg-ing-brand px-6 py-3 font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px] text-ing-accent hover:brightness-90 transition md:w-auto"
        >
          Book inspection
        </a>
      </div>
    </section>
  );
};

export default StatsSection;

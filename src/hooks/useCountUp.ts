import { useEffect, useState } from "react";

/**
 * Animated counter hook.
 * Accepts a target string like "40M+", "$600", or "1 in 6" and an `inView` flag.
 * When `inView` becomes true, animates the numeric portion from 0 → target.
 * Non-numeric strings (e.g. "1 in 6") are returned as-is.
 */
export function useCountUp(target: string, inView: boolean) {
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
      const formatted =
        end >= 10
          ? Math.round(current).toString()
          : current.toFixed(end % 1 !== 0 ? 1 : 0);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target]);

  return display;
}

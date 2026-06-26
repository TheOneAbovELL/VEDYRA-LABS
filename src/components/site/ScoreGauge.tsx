import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function ScoreGauge({ target = 742 }: { target?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const value = useMotionValue(300);
  const [display, setDisplay] = useState(300);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, target, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, value]);

  // Arc from 300 to 850 mapped to angles -210 -> 30 (240 sweep)
  const angle = useTransform(value, [300, 850], [-210, 30]);
  const dashOffset = useTransform(value, [300, 850], [1, 0]);

  const r = 130;
  const c = 2 * Math.PI * r;

  const band =
    display >= 751 ? { label: "Shreshtha", color: "oklch(0.74 0.18 155)" } :
    display >= 651 ? { label: "Uttam", color: "oklch(0.78 0.18 130)" } :
    display >= 501 ? { label: "Sadhaaran", color: "oklch(0.82 0.16 80)" } :
    display >= 401 ? { label: "Aadha", color: "oklch(0.72 0.18 50)" } :
                     { label: "Kharab", color: "oklch(0.65 0.24 25)" };

  return (
    <div ref={ref} className="relative mx-auto flex h-[340px] w-[340px] items-center justify-center">
      <div className="absolute inset-0 animate-pulse-glow rounded-full bg-primary/20 blur-3xl" />
      <svg viewBox="-160 -160 320 320" className="absolute inset-0 -rotate-[30deg]">
        <defs>
          <linearGradient id="arc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.65 0.24 25)" />
            <stop offset="35%" stopColor="oklch(0.82 0.16 80)" />
            <stop offset="65%" stopColor="oklch(0.62 0.22 280)" />
            <stop offset="100%" stopColor="oklch(0.74 0.18 155)" />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle
          r={r}
          fill="none"
          stroke="oklch(1 0 0 / 0.06)"
          strokeWidth="14"
          strokeDasharray={`${c * (240 / 360)} ${c}`}
          strokeLinecap="round"
        />
        {/* Progress */}
        <motion.circle
          r={r}
          fill="none"
          stroke="url(#arc)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={`${c * (240 / 360)} ${c}`}
          style={{
            pathLength: useTransform(value, [300, 850], [0, 1]),
            strokeDashoffset: 0,
          }}
        />
        {/* Tick marks */}
        {Array.from({ length: 11 }).map((_, i) => {
          const a = (-210 + (i * 240) / 10) * (Math.PI / 180);
          const x1 = Math.cos(a) * (r + 18);
          const y1 = Math.sin(a) * (r + 18);
          const x2 = Math.cos(a) * (r + 28);
          const y2 = Math.sin(a) * (r + 28);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="oklch(1 0 0 / 0.25)" strokeWidth="1.5" />;
        })}
      </svg>
      {/* Needle */}
      <motion.div
        style={{ rotate: angle }}
        className="absolute left-1/2 top-1/2 h-[120px] w-[2px] -translate-x-1/2 origin-bottom"
      >
        <div className="h-full w-full rounded-full bg-gradient-to-t from-transparent via-primary to-white shadow-[0_0_15px_oklch(0.62_0.22_280/0.8)]" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">VHS Score</span>
        <span className="font-display text-7xl font-bold tabular-nums text-gradient">{display}</span>
        <span
          className="mt-1 rounded-full border border-border-strong px-3 py-1 text-xs font-medium"
          style={{ color: band.color }}
        >
          {band.label}
        </span>
      </div>
    </div>
  );
}

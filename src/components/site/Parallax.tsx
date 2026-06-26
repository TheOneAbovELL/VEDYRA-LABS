import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Parallax: translate children on the Y axis as the element scrolls through the viewport.
 * `speed` > 0 → moves slower than scroll (drifts down). `speed` < 0 → moves opposite (drifts up).
 */
export function Parallax({
  children,
  speed = 40,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const y = useSpring(yRaw, { stiffness: 80, damping: 20, mass: 0.4 });

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      <motion.div style={reduce ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}

/**
 * ScrollScene: a fixed-position aurora background that breathes & drifts with page scroll.
 * Mount once at the root. Behind everything (pointer-events: none, -z-10).
 */
export function ScrollScene() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const ySmooth = useSpring(scrollYProgress, { stiffness: 60, damping: 22, mass: 0.5 });

  const y1 = useTransform(ySmooth, [0, 1], ["0%", "-30%"]);
  const y2 = useTransform(ySmooth, [0, 1], ["0%", "40%"]);
  const rotate = useTransform(ySmooth, [0, 1], [0, 120]);
  const hue = useTransform(ySmooth, [0, 0.5, 1], [0, 30, -20]);
  const filter = useTransform(hue, (h) => `hue-rotate(${h}deg)`);

  if (reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <motion.div
        style={{ y: y1, filter }}
        className="absolute -left-40 top-[-10%] h-[60vmax] w-[60vmax] rounded-full opacity-40 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.62 0.22 280 / 0.55), transparent 60%)" }}
        />
      </motion.div>
      <motion.div
        style={{ y: y2, rotate, filter }}
        className="absolute right-[-20%] top-[30%] h-[55vmax] w-[55vmax] rounded-full opacity-35 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "conic-gradient(from 0deg, oklch(0.58 0.24 305 / 0.5), oklch(0.78 0.14 80 / 0.3), oklch(0.62 0.22 280 / 0.5))" }}
        />
      </motion.div>
      <motion.div
        style={{ y: y1, filter }}
        className="absolute left-[20%] bottom-[-15%] h-[50vmax] w-[50vmax] rounded-full opacity-30 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.78 0.14 80 / 0.4), transparent 60%)" }}
        />
      </motion.div>
    </div>
  );
}

/**
 * ScrollReveal: scroll-linked reveal that scrubs opacity, y, and blur as the element enters view.
 * Smoother than whileInView because it's tied to scroll progress, not a one-shot trigger.
 */
export function ScrollReveal({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 35%"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 110, damping: 24, mass: 0.4 });

  const opacity = useTransform(p, [0, 1], [0, 1]);
  const blur = useTransform(p, [0, 1], [10, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  const y = useTransform(p, [0, 1], [direction === "up" ? 60 : direction === "down" ? -60 : 0, 0]);
  const x = useTransform(p, [0, 1], [direction === "left" ? 60 : direction === "right" ? -60 : 0, 0]);
  const scale = useTransform(p, [0, 1], [direction === "scale" ? 0.92 : 1, 1]);

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ opacity, filter, y, x, scale, willChange: "transform, opacity, filter" }}>
        {children}
      </motion.div>
    </div>
  );
}

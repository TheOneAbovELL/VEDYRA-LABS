import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";

const links = [
  { href: "/#technology", label: "Technology" },
  { href: "/#score", label: "VHS Score" },
  { href: "/#ecosystem", label: "Ecosystem" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#team", label: "Team" },
];

export function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const blur = useTransform(scrollY, [0, 100], [0, 20]);
  const bg = useTransform(scrollY, [0, 100], ["oklch(0.14 0.025 280 / 0)", "oklch(0.14 0.025 280 / 0.7)"]);
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.3 });

  return (
    <motion.header
      style={{ backdropFilter: useTransform(blur, (b) => `blur(${b}px) saturate(160%)`), backgroundColor: bg }}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent"
    >
      <motion.div
        style={{ scaleX: progress, transformOrigin: "0% 50%" }}
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-gold"
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2.5">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-secondary opacity-90 transition group-hover:opacity-100" />
            <div className="absolute inset-[2px] rounded-[7px] bg-background" />
            <span className="relative font-display text-lg font-bold text-gradient-primary">V</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-sm font-semibold tracking-wide">VEDYRA</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Labs</span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/about"
            className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
          >
            About
          </Link>
          <Link
            to="/credits"
            className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
          >
            Credits
          </Link>
        </nav>


        <a
          href="#contact"
          className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-5px_oklch(0.62_0.22_280/0.6)] transition hover:shadow-[0_0_50px_-5px_oklch(0.62_0.22_280/0.8)]"
        >
          <span className="relative">Request Access</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition group-hover:translate-x-0.5">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.header>
  );
}

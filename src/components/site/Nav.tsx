import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";

const links = [
  { href: "/#research", label: "Research" },
  { href: "/#mission", label: "Mission" },
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
      </div>
    </motion.header>
  );
}

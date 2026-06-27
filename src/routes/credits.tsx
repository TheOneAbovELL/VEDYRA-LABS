import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { team, categoryMeta, type TeamCategory, type TeamMember } from "@/lib/team";

export const Route = createFileRoute("/credits")({
  head: () => ({
    meta: [
      { title: "Credits & Team — VEDYRA Labs" },
      { name: "description", content: "The people building the Vehicle Health Score Bureau: Omjee R Giri (Founder & CEO), Dr. Gyanendra Tiwary (Mentor) and Dr. D. K. Mallick (Senior Advisor)." },
      { property: "og:title", content: "Credits & Team — VEDYRA Labs" },
      { property: "og:description", content: "Founder, mentor and senior advisor behind VEDYRA Labs and the VHS Bureau." },
    ],
  }),
  component: CreditsPage,
});

type FilterKey = "all" | TeamCategory;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Everyone" },
  { key: "members", label: categoryMeta.members.label },
  { key: "mentors", label: categoryMeta.mentors.label },
  { key: "advisors", label: categoryMeta.advisors.label },
];

function CreditsPage() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const filtered = useMemo(
    () => (filter === "all" ? team : team.filter((m) => m.category === filter)),
    [filter],
  );

  const toggle = (slug: string) =>
    setExpanded((p) => ({ ...p, [slug]: !p[slug] }));

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-12">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div
          className="absolute left-1/2 top-0 -z-10 h-[700px] w-[1200px] -translate-x-1/2"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6">
          <Reveal>
            <Link to="/" className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground transition hover:text-foreground">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Back to VEDYRA
            </Link>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
              The minds behind <span className="text-gradient">VEDYRA Labs</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A student-founded, mentor-guided research initiative building the Vehicle Health Score Bureau for India.
            </p>
          </Reveal>

          {/* Filter */}
          <Reveal delay={0.15}>
            <LayoutGroup id="credits-filter">
              <div role="tablist" className="mt-10 inline-flex flex-wrap gap-1 rounded-full border border-border bg-surface/60 p-1 backdrop-blur">
                {FILTERS.map((f) => {
                  const active = filter === f.key;
                  return (
                    <button
                      key={f.key}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setFilter(f.key)}
                      className={`relative rounded-full px-4 py-2 text-xs font-medium transition ${active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {active && (
                        <motion.span
                          layoutId="filter-pill"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_8px_24px_-6px_oklch(0.62_0.22_280/0.6)]"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative">{f.label}</span>
                    </button>
                  );
                })}
              </div>
            </LayoutGroup>
            <AnimatePresence mode="wait">
              <motion.p
                key={filter}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
              >
                {filter === "all"
                  ? `${team.length} people across mentors, advisors & project members`
                  : `${filtered.length} · ${categoryMeta[filter].blurb}`}
              </motion.p>
            </AnimatePresence>
          </Reveal>
        </div>
      </section>

      {/* Members */}
      <section className="relative pb-32">
        <div className="mx-auto max-w-5xl px-6">
          <LayoutGroup id="credits-list">
            <motion.div layout className="space-y-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((m) => (
                  <MemberCard
                    key={m.slug}
                    m={m}
                    open={!!expanded[m.slug]}
                    onToggle={() => toggle(m.slug)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>

        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-6 text-center font-mono text-xs text-muted-foreground">
          © 2026 VEDYRA Labs · ITS-VHS-2026-IN
        </div>
      </footer>
    </div>
  );
}

function MemberCard({ m, open, onToggle }: { m: TeamMember; open: boolean; onToggle: () => void }) {
  const [first, ...rest] = m.long;
  return (
    <motion.article
      layout
      id={m.slug}
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="group relative scroll-mt-32 overflow-hidden rounded-3xl border border-border bg-surface/40 p-7 transition hover:border-border-strong md:p-10"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-primary/20 to-gold/10 blur-3xl transition group-hover:from-primary/35" />

      <motion.div layout="position" className="relative grid gap-8 md:grid-cols-[200px_1fr]">
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl ring-1 ring-border-strong">
            <img
              src={m.photo}
              alt={m.name}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <span className="absolute left-2 top-2 rounded-full bg-background/70 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-foreground/90 backdrop-blur">
              {categoryMeta[m.category].label}
            </span>
          </div>

          <a
            href={m.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border-strong bg-white/5 px-4 py-2 text-xs font-medium transition hover:border-primary/60 hover:bg-primary/10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.77V21H17.6v-5.3c0-1.27-.03-2.9-1.78-2.9-1.78 0-2.05 1.37-2.05 2.8V21H10z" /></svg>
            Connect on LinkedIn
          </a>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            {m.role}
          </div>
          <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">{m.name}</h2>
          <div className="mt-1 text-sm text-gradient-primary">{m.tag}</div>

          <p className="mt-6 text-[15px] leading-relaxed text-foreground/85">{first}</p>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="more"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-foreground/85">
                  {rest.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={onToggle}
              aria-expanded={open}
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-4 py-2 text-xs font-medium transition hover:border-primary/60 hover:bg-primary/10"
            >
              {open ? "Collapse bio" : "Read full bio"}
              <motion.svg
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <path d="M6 9l6 6 6-6" />
              </motion.svg>
            </button>
          </div>

          <dl className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {m.highlights.map((h) => (
              <div key={h.label} className="rounded-xl border border-border bg-surface/60 p-3">
                <dt className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{h.label}</dt>
                <dd className="mt-1 text-sm font-medium text-foreground/95">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </motion.article>
  );
}

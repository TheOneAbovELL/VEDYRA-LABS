import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Reveal, Stagger, StaggerItem, staggerItemVariants } from "@/components/site/Reveal";
import { ScoreGauge } from "@/components/site/ScoreGauge";
import { SystemDiagram } from "@/components/site/SystemDiagram";
import { Parallax, ScrollReveal } from "@/components/site/Parallax";
import { team } from "@/lib/team";
import { Mail, MapPin, Clock, Building, Award, ShieldCheck, Cpu, FlaskConical, GraduationCap, ArrowRight } from "lucide-react";

const subScores = [
  { code: "DBS", name: "Driving Behaviour Study", weight: 35, max: 100, color: "oklch(0.62 0.22 280)", desc: "Kinematic telemetry, IMU acceleration metrics, and GNSS spatial trips." },
  { code: "MHS", name: "Mechanical Health Study", weight: 25, max: 100, color: "oklch(0.58 0.24 305)", desc: "Diagnostic trouble codes (DTCs), powertrain logs, and thermal stress indicators." },
  { code: "EES", name: "Environmental Exposure Study", weight: 20, max: 100, color: "oklch(0.74 0.18 155)", desc: "Micro-climate indices, altitude stress, and localized ambient corrosion factors." },
  { code: "ESS", name: "Electrical & Safety Study", weight: 20, max: 100, color: "oklch(0.78 0.14 80)", desc: "BMS state-of-health, passive safety modules, and grid-integration diagnostics." },
];

const phases = [
  { id: "Phase 01", time: "Now", title: "Protocol Design", body: "Establish baseline schema definitions, set up multi-dimensional research models, and deploy simulation frameworks.", status: "current" },
  { id: "Phase 02", time: "M 6–16", title: "Telemetry Normalization", body: "Integrate stream-alignment nodes, perform initial parsing benchmarks, and submit for peer review." },
  { id: "Phase 03", time: "M 12–22", title: "Secure Routing Core", body: "Finalize zero-trust consent protocols, build end-to-end encrypted packet flows, and deploy secure developer APIs." },
  { id: "Phase 04", time: "M 18–28", title: "Consensus Standards", body: "Publish open-source telemetry parsers, represent protocol committees, and coordinate schema alignments." },
  { id: "Phase 05", time: "M 24–36", title: "Decentralized Scaling", body: "Scale multi-region processing, publish anonymized test parameters, and establish neutral verification layers." },
];

const pillars = [
  { title: "Pipeline Ingestion", body: "Developing unified normalization schemas to ingest multi-format streaming telemetry securely.", icon: "⬢", logos: ["Data Fusion", "Stream Parsing", "Zero-Trust TLS", "High-Hz Sync"] },
  { title: "Consensus Research", body: "Collaborating on neutral, open protocols to evaluate performance telemetry and hardware longevity.", icon: "◈", logos: ["Secure Ledger", "Pattern AI", "Privacy Standards", "Verification Engine"] },
  { title: "Ecosystem Integration", body: "Fostering research, academic, and developer cooperatives to design scalable data indices.", icon: "◇", logos: ["Research Labs", "API Registries", "Schema Alignments", "Developer Tools"] },
];

export default function Landing() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-clip">
      <Nav />

      {/* ============== HERO ============== */}
      <section className="relative pt-36 pb-32">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="absolute left-1/2 top-0 -z-10 h-[900px] w-[1400px] -translate-x-1/2" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <div
          className="absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 animate-aurora opacity-30 blur-3xl"
          style={{ background: "var(--gradient-aurora)" }}
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border-strong glass px-3 py-1.5 text-xs">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                </span>
                <span className="text-muted-foreground">National Deep-Tech Research · 2026</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-[clamp(2.6rem,6.5vw,5.4rem)] font-bold leading-[1.02] tracking-tight">
                Standardizing <span className="text-gradient">telemetry</span>
                <br />
                intelligence for
                <br />
                <span className="text-gradient-primary">Indian mobility.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                VEDYRA Labs is building a neutral telemetry intelligence platform that standardizes siloed OEM data into explainable mobility research models.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.62_0.22_280/0.8)] transition hover:shadow-[0_15px_60px_-10px_oklch(0.62_0.22_280/1)]"
                >
                  Explore our research
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="transition group-hover:translate-x-1">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#technology" className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm text-foreground/90 transition hover:bg-white/5">
                  Explore the architecture
                </a>
              </div>
            </Reveal>


          </div>

          {/* Right: Gauge card */}
          <Parallax speed={50}>
            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-secondary/20 to-gold/10 blur-2xl animate-pulse-glow" />
                <div className="glass relative rounded-[2rem] p-8 shadow-[var(--shadow-elegant)]">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Simulation</div>
                      <div className="font-display text-sm font-medium">Telemetry Evaluation Model</div>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[10px] font-medium text-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" /> Active Model · 84 ms
                    </div>
                  </div>

                  <ScoreGauge target={742} />

                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl border border-border bg-surface/50 p-3">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Variance</div>
                      <div className="mt-1 font-display text-xl font-semibold text-success">Nominal</div>
                    </div>
                    <div className="rounded-xl border border-border bg-surface/50 p-3">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Target Hash</div>
                      <div className="mt-1 truncate font-mono text-sm">SHA-256 (0x7F2A...)</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </Parallax>
        </div>

        {/* Logo strip */}
        <Reveal delay={0.5}>
          <div className="mx-auto mt-24 max-w-6xl px-6">
            <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Engineered for Zero-Trust Telemetry Architectures
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
              {["Secure Multi-Party Ingest", "Distributed Ledgers", "Zero-Trust Encryption", "Real-Time Packet Validation", "Dynamic Consensus"].map((b) => (
                <span key={b} className="font-display text-sm font-medium tracking-wide text-muted-foreground">{b}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============== PROBLEM / SOLUTION ============== */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>The challenge</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">
              Mobility intelligence is constrained by{" "}
              <span className="text-gradient-primary">siloed data structures.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { k: "Today", t: "Siloed, proprietary formats", b: "Telemetry is locked in proprietary formats, making standardization and objective research nearly impossible." },
              { k: "Locked away", t: "Trapped mobility insights", b: "Millions of cars stream telematics into closed ecosystems — invisible to researchers and ecosystem builders." },
              { k: "The gap", t: "No standardized layer", b: "There is no neutral layer to normalize, score, and distribute vehicle intelligence accurately." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-surface/40 p-7 transition hover:border-border-strong hover:bg-surface/60">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{c.k}</div>
                  <h3 className="mt-3 font-display text-xl font-semibold">{c.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>



      {/* ============== ECOSYSTEM PILLARS ============== */}
      <section id="ecosystem" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>Research Cooperatives</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl">
              Three pillars.
              <br />
              <span className="text-gradient-primary">One neutral standard.</span>
            </h2>
          </Reveal>

          <div className="relative mt-16 grid gap-6 md:grid-cols-3">
            {/* connecting line */}
            <div className="pointer-events-none absolute inset-x-12 top-[110px] hidden h-px md:block">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="h-full origin-left bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.15}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/40 p-8 transition hover:border-border-strong hover:bg-surface/60">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-border-strong bg-gradient-to-br from-primary/20 to-secondary/10 font-display text-3xl text-gradient">
                    {p.icon}
                  </div>
                  <h3 className="relative mt-6 font-display text-xl font-semibold">{p.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  <div className="relative mt-6 flex flex-wrap gap-1.5">
                    {p.logos.map((l) => (
                      <span key={l} className="rounded-full border border-border bg-white/5 px-2.5 py-1 text-[11px] text-foreground/80">{l}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== INFRASTRUCTURE ============== */}
      <section id="technology" className="relative py-32">
        <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
        <div className="mx-auto max-w-7xl px-6">
          {/* System & data-flow diagram */}
          <Reveal>
            <div className="mt-6">
              <div className="mb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <SectionLabel>Infrastructure</SectionLabel>
                  <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                    Distributed <span className="text-gradient">Data Topology</span>
                  </h3>
                </div>
                <p className="max-w-sm text-sm text-muted-foreground">
                  A high-level view of our real-time telemetry processing network. Fully encrypted, secure, and decentralized.
                </p>
              </div>
              <SystemDiagram />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== ROADMAP ============== */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>Roadmap</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl">
              From pilot to <span className="text-gradient">national infrastructure.</span>
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-primary via-secondary/50 to-transparent md:left-1/2" />
            <Stagger gap={0.12} className="space-y-10">
              {phases.map((p, i) => (
                <StaggerItem
                  key={p.id}
                  variants={staggerItemVariants}
                  className={`relative grid items-start gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  {/* dot */}
                  <div className="absolute left-3 top-2 -translate-x-1/2 md:left-1/2">
                    <div className="relative h-3 w-3">
                      {p.status === "current" && <span className="absolute inset-0 animate-ping rounded-full bg-success/60" />}
                      <span className={`relative block h-3 w-3 rounded-full ring-4 ring-background ${p.status === "current" ? "bg-success" : "bg-primary"}`} />
                    </div>
                  </div>

                  <div className={`pl-10 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.id} · {p.time}</div>
                    <h3 className="mt-2 font-display text-2xl font-semibold">{p.title}</h3>
                  </div>
                  <div className={`pl-10 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="inline-block rounded-2xl border border-border bg-surface/40 p-5 text-sm text-muted-foreground">
                      {p.body}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ============== TEAM ============== */}
      <section id="team" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>The team</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl">
              Builders, researchers, <span className="text-gradient">institutional bridges.</span>
            </h2>
          </Reveal>

          <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
            {team.map((m) => (
              <StaggerItem
                key={m.slug}
                variants={staggerItemVariants}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-gold/10 blur-2xl transition group-hover:from-primary/40" />
                <div className="relative flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-1 ring-border-strong">
                    <img src={m.photo} alt={m.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold leading-tight">{m.name}</h3>
                    <div className="text-sm text-gradient-primary">{m.role}</div>
                    <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{m.tag}</div>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                <div className="relative mt-5 flex items-center justify-between">
                  <Link
                    to="/credits"
                    hash={m.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/90 transition hover:text-foreground"
                  >
                    Full bio
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </Link>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white/5 text-foreground/80 transition hover:border-primary/60 hover:bg-primary/10 hover:text-foreground"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.77V21H17.6v-5.3c0-1.27-.03-2.9-1.78-2.9-1.78 0-2.05 1.37-2.05 2.8V21H10z" /></svg>
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

        </div>
      </section>

      {/* ============== CONTACT US & INCUBATION SECTION ============== */}
      <section id="contact" className="relative py-32 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="text-center mx-auto mb-16">
              <SectionLabel>Contact Us</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Get in touch with <span className="text-gradient">VEDYRA Labs</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto italic border-l-2 border-primary/50 pl-4 py-2 bg-white/5 rounded-r-lg shadow-sm">
                "We believe that mobility data should not be siloed; it should be securely and neutrally translated to build trust between vehicles, drivers, and the digital transport ecosystem."
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass relative mx-auto overflow-hidden rounded-3xl border border-border-strong p-8 md:p-12 shadow-card max-w-2xl">
              <div className="absolute -right-10 -bottom-10 -z-10 h-40 w-40 animate-aurora rounded-full opacity-20 blur-2xl" style={{ background: "var(--gradient-aurora)" }} />
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-8 flex items-center justify-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                Incubated Office
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full border border-border bg-white/5 flex items-center justify-center text-primary mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Office Address</h4>
                    <p className="mt-2 text-sm text-foreground/90 leading-relaxed font-sans">
                      1st Floor, Incubation Centre, Birla Institute of Technology,<br />
                      Patna Campus, Samanpura, Near Patna Veterinary College,<br />
                      Patna, Bihar 800014
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full border border-border bg-white/5 flex items-center justify-center text-primary mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Working Hours</h4>
                    <p className="mt-2 text-sm text-foreground/90 font-sans">
                      Monday to Saturday: 8:00 AM – 5:00 PM<br />
                      <span className="text-muted-foreground">(Sundays closed)</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full border border-border bg-white/5 flex items-center justify-center text-primary mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Contact Email</h4>
                    <a 
                      href="mailto:vedyralabs@gmail.com" 
                      className="mt-2 inline-block text-sm text-foreground hover:text-primary transition font-sans font-medium underline underline-offset-4 decoration-primary/40"
                    >
                      vedyralabs@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-display text-sm font-semibold text-foreground">VEDYRA Labs</span>
            <span>·</span>
            <span>Ancient Wisdom. Future Intelligence.</span>
          </div>
          <nav className="flex flex-wrap items-center gap-4">
            <Link to="/credits" className="transition hover:text-foreground">Credits & Team</Link>
            <Link to="/about" className="transition hover:text-foreground">About</Link>
            <a href="#technology" className="transition hover:text-foreground">Architecture</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </nav>
          <div className="font-mono">© 2026 VEDYRA Labs · Built for India</div>
        </div>
      </footer>

    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
      <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
      {children}
    </div>
  );
}

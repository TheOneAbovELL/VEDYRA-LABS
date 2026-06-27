import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { 
  Activity, 
  Cpu, 
  Database, 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp, 
  UserCheck, 
  Code,
  Zap, 
  LineChart, 
  Share2, 
  Workflow,
  Sparkles,
  Compass
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About VEDYRA Labs — What We Do & Our Vision" },
      { name: "description", content: "Learn about VEDYRA Labs' mission: what we do, what we want to do, and our future scope to standardise neutral mobility intelligence." },
      { property: "og:title", content: "About VEDYRA Labs" },
      { property: "og:description", content: "Deep dive into our telemetry evaluation models, current operations, near-term goals, and future scope." },
    ],
  }),
  component: AboutPage,
});

type TabType = "all" | "do" | "want" | "future";

function AboutPage() {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const whatWeDoItems = [
    {
      icon: Cpu,
      title: "Telematics Standardization",
      desc: "We stream and normalize raw vehicle telemetry (IMU, GNSS, OBD-II, and BMS data) from multiple OEM platforms at 10 Hz into unified data schemas."
    },
    {
      icon: Activity,
      title: "Telemetry Evaluation Models",
      desc: "Our engine computes a neutral evaluation standard (300-850) built on multiple analytical factors to assess objective profiles."
    },
    {
      icon: Database,
      title: "Explainable Data Modeling",
      desc: "We run gradient-boosted ensembles with SHAP values to explain every factor, guaranteeing full transparency for ecosystem partners."
    },
    {
      icon: ShieldCheck,
      title: "Privacy & Compliance",
      desc: "Our architectural framework is strictly aligned with the DPDPA (Digital Personal Data Protection Act) 2023 for secure data processing."
    }
  ];

  const whatWeWantToDoItems = [
    {
      icon: TrendingUp,
      title: "Metropolitan Pilot Scale",
      desc: "Deploy an initial pilot tracking 500+ connected entities across Tier 1 Indian cities to calibrate algorithms with real-world road and weather conditions."
    },
    {
      icon: UserCheck,
      title: "Owner Consent Interfaces",
      desc: "Build an intuitive owner-facing interface, allowing drivers to view their evaluation metrics and explicitly consent to secure data transmission."
    },
    {
      icon: Code,
      title: "Unified Ecosystem APIs",
      desc: "Publish developer portals and REST APIs for research groups and mobility networks, supporting millisecond response times for telemetry insights."
    },
    {
      icon: LineChart,
      title: "Predictive Health Correlation",
      desc: "Demonstrate a verified lift in predictive accuracy for vehicle component longevity compared to traditional static metric baselines."
    }
  ];

  const futureScopeItems = [
    {
      icon: Zap,
      title: "EV State-of-Health Diagnostics",
      desc: "Construct predictive degradation models for EV lithium-ion batteries to standardize secondhand EV valuation indices."
    },
    {
      icon: Workflow,
      title: "Registry Deep Fusion",
      desc: "Fuse real-time vehicle telematics indices directly with central vehicle registries to automate compliance audits and safety research."
    },
    {
      icon: Share2,
      title: "Open Telematics Protocol",
      desc: "Publish and license open-source telematics middleware libraries, helping the broader research community extract vehicle telemetry securely."
    },
    {
      icon: Compass,
      title: "National Standardizing Layer",
      desc: "Establish VEDYRA Labs as the foundational utility layer for vehicle safety and health validation, trusted by the mobility ecosystem."
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div
          className="absolute left-1/2 top-0 -z-10 h-[700px] w-[1200px] -translate-x-1/2"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div
          className="absolute left-1/2 top-20 -z-10 h-[400px] w-[400px] -translate-x-1/2 animate-aurora opacity-25 blur-3xl"
          style={{ background: "var(--gradient-aurora)" }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <Reveal>
            <Link to="/" className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground transition hover:text-foreground">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Back to VEDYRA
            </Link>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
              Our Vision, Roadmap & <br />
              <span className="text-gradient">Future Scope</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Deep dive into what we do today, what we want to achieve tomorrow, and our ultimate aspirations to build India's neutral telemetry evaluation network.
            </p>
          </Reveal>

          {/* Section Filter Tabs */}
          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap gap-2 max-w-xl">
              {(
                [
                  { id: "all", label: "Show All" },
                  { id: "do", label: "What We Do" },
                  { id: "want", label: "What We Want to Do" },
                  { id: "future", label: "Future Scope" }
                ] as const
              ).map((tab) => {
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative rounded-lg px-4 py-2 text-xs font-medium transition duration-300 ${
                      active ? "text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="active-about-tab"
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-secondary shadow-[0_4px_12px_rgba(79,70,229,0.3)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grid Content Sections */}
      <section className="relative pb-32">
        <div className="mx-auto max-w-5xl px-6 space-y-20">
          
          {/* Section: What We Do */}
          <AnimatePresence mode="wait">
            {(activeTab === "all" || activeTab === "do") && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">1</div>
                  <h2 className="font-display text-2xl font-bold text-foreground">What We Do</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {whatWeDoItems.map((item, index) => (
                    <div key={index} className="glass group relative overflow-hidden rounded-3xl border border-border p-6 hover:border-primary/40 transition-all duration-300">
                      <div className="absolute -right-6 -bottom-6 -z-10 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-xl group-hover:scale-125 transition-transform" />
                      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Section: What We Want to Do */}
          <AnimatePresence mode="wait">
            {(activeTab === "all" || activeTab === "want") && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 pt-6 border-t border-border/40">
                  <div className="h-8 w-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold">2</div>
                  <h2 className="font-display text-2xl font-bold text-foreground">What We Want to Do</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {whatWeWantToDoItems.map((item, index) => (
                    <div key={index} className="glass group relative overflow-hidden rounded-3xl border border-border p-6 hover:border-secondary/40 transition-all duration-300">
                      <div className="absolute -right-6 -bottom-6 -z-10 h-24 w-24 rounded-full bg-gradient-to-br from-secondary/10 to-transparent blur-xl group-hover:scale-125 transition-transform" />
                      <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Section: Future Scope & Aspirations */}
          <AnimatePresence mode="wait">
            {(activeTab === "all" || activeTab === "future") && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 pt-6 border-t border-border/40">
                  <div className="h-8 w-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center font-bold">3</div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Future Scope & Aspirations</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {futureScopeItems.map((item, index) => (
                    <div key={index} className="glass group relative overflow-hidden rounded-3xl border border-border p-6 hover:border-gold/40 transition-all duration-300">
                      <div className="absolute -right-6 -bottom-6 -z-10 h-24 w-24 rounded-full bg-gradient-to-br from-gold/10 to-transparent blur-xl group-hover:scale-125 transition-transform" />
                      <div className="h-10 w-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-4">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>


        </div>
      </section>

      {/* Footer */}
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
            <a href="/#technology" className="transition hover:text-foreground">Architecture</a>
            <a href="/#contact" className="transition hover:text-foreground">Contact</a>
          </nav>
          <div className="font-mono">© 2026 · ITS-VHS-2026-IN · Built for India</div>
        </div>
      </footer>
    </div>
  );
}

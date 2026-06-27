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
  { code: "DBS", name: "Driving Behaviour", weight: 30, max: 165, color: "oklch(0.62 0.22 280)", desc: "IMU events, speed profile, ABS/ESC, GNSS trips" },
  { code: "MHS", name: "Mechanical Health", weight: 25, max: 137, color: "oklch(0.58 0.24 305)", desc: "OBD-II DTCs, engine, tyre pressure, brake wear" },
  { code: "MCS", name: "Maintenance Compliance", weight: 20, max: 110, color: "oklch(0.74 0.18 155)", desc: "Service history, oil intervals, recall compliance" },
  { code: "EES", name: "Environmental Exposure", weight: 15, max: 83, color: "oklch(0.78 0.14 80)", desc: "Monsoon, altitude, coastal corrosion zones" },
  { code: "ESH", name: "Electrical & Safety", weight: 10, max: 55, color: "oklch(0.65 0.24 25)", desc: "Battery SoH, ADAS, airbag / ABS module health" },
];

const pipeline = [
  { n: "01", title: "Vehicle Sensors", body: "IMU · OBD-II · TPMS · GNSS · BMS streaming at 10 Hz from the edge." },
  { n: "02", title: "OEM Platform", body: "BlueLink, ZConnect, BlueSense, SmartPlay normalise and compress." },
  { n: "03", title: "Ingestion API", body: "Schema mapping across 12+ OEM formats. Compression up to 40×." },
  { n: "04", title: "Scoring Engine", body: "Gradient-boosted ensemble fuses 5 sub-scores. SHAP explainability." },
  { n: "05", title: "Bureau API", body: "IRDAI-compliant REST. ₹20–₹200 per query across 4 tiers." },
  { n: "06", title: "Premium Calc", body: "Insurer applies VHS under UBI Guidelines for a fair, dynamic premium." },
];

const tiers = [
  { name: "Score Only", price: "₹20", unit: "per query", features: ["VHS composite (300–850)", "Band label", "Last updated date"], for: "PSU insurers · renewals" },
  { name: "Score + Sub-Scores", price: "₹35", unit: "per query", features: ["All 5 sub-scores", "Top 3 SHAP factors", "Active DTC count"], for: "Private insurers · fleet", popular: true },
  { name: "Full Analytics", price: "₹50", unit: "per query", features: ["12-month trend", "Maintenance log", "Terrain & monsoon index"], for: "Commercial · fraud detection" },
  { name: "Real-Time Stream", price: "₹200", unit: "per vehicle / month", features: ["Score-change webhooks", "Crash & DTC alerts", "Vahan stolen-vehicle flag"], for: "PAYD · Acko · fleets" },
];




const phases = [
  { id: "Phase 01", time: "Now", title: "Hyundai Innovation Challenge", body: "OEM MoUs, IRDAI Sandbox registration, 500-vehicle pilot in 4 metros.", status: "current" },
  { id: "Phase 02", time: "M 6–16", title: "Scoring Engine", body: "Multi-OEM training, MIDR calibration, ≥18% AUC over CC/IDV baseline." },
  { id: "Phase 03", time: "M 12–22", title: "Bureau & Insurer API", body: "Aadhaar consent, Owner App in 9 languages, 2 insurer integrations live." },
  { id: "Phase 04", time: "M 18–28", title: "Scale", body: "6+ OEMs, IRDAI full designation, Governance Board, Vahan integration." },
  { id: "Phase 05", time: "M 24–36", title: "National Launch", body: "2 lakh validation fleet · 5 peer-reviewed papers · open-source middleware." },
];

const pillars = [
  { title: "OEM Data Partners", body: "13+ connected-car platforms contribute normalised telematics via the VHS Contribution API.", icon: "⬢", logos: ["Hyundai", "Tata", "Mahindra", "Maruti", "MG", "Toyota", "Kia", "Honda"] },
  { title: "VEDYRA Bureau", body: "The neutral, IRDAI-registered scoring entity. Aadhaar-KYC consent, SHAP explainability, ₹25–50 per query.", icon: "◈", logos: ["IRDAI Registered", "DPDPA 2023", "CERT-In Audited", "AWS Mumbai"] },
  { title: "Insurance Partners", body: "PSU and private insurers subscribe to the VHS API for premium computation under UBI Guidelines.", icon: "◇", logos: ["Bajaj Allianz", "HDFC ERGO", "ICICI Lombard", "Acko", "Go Digit", "New India"] },
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
                <span className="text-muted-foreground">Hyundai Innovation Challenge · 2026</span>
                <span className="h-3 w-px bg-border-strong" />
                <span className="text-foreground/90">ITS-VHS-2026-IN</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-[clamp(2.6rem,6.5vw,5.4rem)] font-bold leading-[1.02] tracking-tight">
                A <span className="text-gradient">credit bureau</span>
                <br />
                for every vehicle
                <br />
                <span className="text-gradient-primary">on Indian roads.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                VEDYRA Labs is building the Vehicle Health Score Bureau — a neutral, IRDAI-compliant intelligence platform
                that turns siloed OEM telematics into a fair, dynamic 300–850 score. Like CIBIL, but for the ₹80,000 Cr
                motor-insurance market.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.62_0.22_280/0.8)] transition hover:shadow-[0_15px_60px_-10px_oklch(0.62_0.22_280/1)]"
                >
                  Request early access
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="transition group-hover:translate-x-1">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#technology" className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm text-foreground/90 transition hover:bg-white/5">
                  Explore the architecture
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.45}>
              <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8 text-left">
                {[
                  { v: "₹80,000 Cr", l: "Motor insurance TAM" },
                  { v: "5 Cr+", l: "Connected vehicles by 2030" },
                  { v: "300–850", l: "VHS score range" },
                ].map((s) => (
                  <div key={s.l}>
                    <dt className="font-display text-2xl font-semibold text-gradient">{s.v}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</dd>
                  </div>
                ))}
              </dl>
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
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Live response</div>
                      <div className="font-display text-sm font-medium">POST /v1/vhs/query</div>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[10px] font-medium text-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" /> 200 OK · 84 ms
                    </div>
                  </div>

                  <ScoreGauge target={742} />

                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl border border-border bg-surface/50 p-3">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Premium effect</div>
                      <div className="mt-1 font-display text-xl font-semibold text-success">−28.4%</div>
                    </div>
                    <div className="rounded-xl border border-border bg-surface/50 p-3">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Vehicle</div>
                      <div className="mt-1 truncate font-mono text-sm">MA3EWDE1S00123456</div>
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
              Built for India's connected mobility stack
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
              {["Hyundai BlueLink", "Tata ZConnect", "Mahindra BlueSense", "Maruti SmartPlay", "MG iSMART", "IRDAI · UBI 2021", "DPDPA 2023", "DigiLocker"].map((b) => (
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
            <SectionLabel>The problem</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">
              Indian motor insurance is priced with{" "}
              <span className="text-gradient-primary">1970s-era proxies.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { k: "Today", t: "Static, opaque pricing", b: "Premiums computed from cubic capacity, age and IDV. Safe drivers subsidise reckless ones." },
              { k: "Locked away", t: "OEM data sits siloed", b: "Millions of cars stream telematics into Bluelink, ZConnect & SmartPlay — invisible to insurers." },
              { k: "The gap", t: "No neutral middle layer", b: "There is no IRDAI-registered bureau to normalise, score and distribute vehicle intelligence." },
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

      {/* ============== CIBIL COMPARISON ============== */}
      <section id="score" className="relative py-32">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>The analogy</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl">
              <span className="text-gradient">CIBIL</span> for credit.
              <br />
              <span className="text-gradient-primary">VEDYRA</span> for vehicles.
            </h2>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              Same structural shift, applied to mobility. A standardised score every Indian already understands.
            </p>
          </Reveal>

          <Stagger className="mt-14 overflow-hidden rounded-2xl border border-border glass">
            {[
              ["Dimension", "CIBIL · Banking", "VEDYRA · Insurance"],
              ["Score range", "300 – 900", "300 – 850"],
              ["Data sources", "Banks, NBFCs, credit cards", "OEM telematics (BlueLink, ZConnect, BlueSense)"],
              ["Score consumers", "SBI, HDFC, ICICI, NBFCs", "Bajaj Allianz, HDFC ERGO, ICICI Lombard, Acko"],
              ["Owner", "Individual borrower", "Vehicle owner (RC Book · VIN · Aadhaar)"],
              ["Commercial", "Lenders pay per query", "Insurers pay ₹25–50 / query · OEMs get 15–20% royalty"],
              ["Regulator", "Reserve Bank of India", "IRDAI · UBI Guidelines 2021"],
            ].map((row, i) => (
              <StaggerItem
                key={i}
                variants={staggerItemVariants}
                className={`grid grid-cols-[1.1fr_1.4fr_1.4fr] gap-4 px-6 py-4 text-sm ${i === 0 ? "bg-white/[0.04] font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground" : "border-t border-border"}`}
              >
                <div className={i === 0 ? "" : "text-muted-foreground"}>{row[0]}</div>
                <div>{row[1]}</div>
                <div className={i === 0 ? "" : "text-foreground"}>{row[2]}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============== VHS SCORE ARCHITECTURE ============== */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>Score architecture</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl">
              Five signals.
              <br />
              <span className="text-gradient">One explainable score.</span>
            </h2>
          </Reveal>

          <Stagger className="mt-14 grid gap-4 md:grid-cols-5">
            {subScores.map((s) => (
              <StaggerItem
                key={s.code}
                variants={staggerItemVariants}
                whileHover={{ y: -6 }}
                className="relative h-full overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition hover:border-border-strong"
              >
                <div className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.code}</span>
                  <span className="font-display text-2xl font-bold" style={{ color: s.color }}>{s.weight}%</span>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold leading-tight">{s.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                  <span>max</span>
                  <span className="font-semibold text-foreground">{s.max} pts</span>
                </div>
                <div className="mt-1.5 h-1 rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(s.max / 165) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full"
                    style={{ background: s.color }}
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Bands */}
          <Reveal delay={0.2}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-border glass p-8">
              <div className="flex items-end justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <span>300</span><span>500</span><span>650</span><span>750</span><span>850</span>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full" style={{ background: "linear-gradient(90deg, oklch(0.65 0.24 25), oklch(0.78 0.14 80) 35%, oklch(0.62 0.22 280) 65%, oklch(0.74 0.18 155))" }} />
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm md:grid-cols-5">
                {[
                  { b: "Kharab", r: "300–400", p: "+40 → +80%" },
                  { b: "Aadha", r: "401–500", p: "+20 → +40%" },
                  { b: "Sadhaaran", r: "501–650", p: "±5%" },
                  { b: "Uttam", r: "651–750", p: "−15 → −40%" },
                  { b: "Shreshtha", r: "751–850", p: "up to −40%" },
                ].map((x) => (
                  <div key={x.b} className="rounded-xl border border-border bg-surface/40 p-3">
                    <div className="font-display text-sm font-semibold">{x.b}</div>
                    <div className="mt-0.5 font-mono text-[11px] text-muted-foreground">{x.r}</div>
                    <div className="mt-2 text-xs text-foreground/90">{x.p}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== ECOSYSTEM PILLARS ============== */}
      <section id="ecosystem" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>Ecosystem</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl">
              Three pillars.
              <br />
              <span className="text-gradient-primary">One neutral bureau.</span>
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

      {/* ============== PIPELINE ============== */}
      <section id="technology" className="relative py-32">
        <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>Six-stage pipeline</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl">
              From sensor edge to <span className="text-gradient">premium quote.</span>
            </h2>
          </Reveal>

          <Stagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pipeline.map((p) => (
              <StaggerItem
                key={p.n}
                variants={staggerItemVariants}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-2 p-6 transition hover:border-border-strong"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
                  <div className="h-8 w-8 rounded-lg border border-border bg-white/5 transition group-hover:border-primary/40 group-hover:bg-primary/10" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </StaggerItem>
            ))}
          </Stagger>

          {/* API sample */}
          <Reveal delay={0.2}>
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-[oklch(0.12_0.02_280)] p-6 font-mono text-[13px] leading-relaxed">
                <div className="mb-3 flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
                  <span className="ml-3 text-[10px] uppercase tracking-wider text-muted-foreground">request</span>
                </div>
                <pre className="overflow-x-auto whitespace-pre-wrap text-foreground/90">
{`POST /v1/vhs/query
Authorization: Bearer {API_KEY}

{
  "vin": "MA3EWDE1S00123456",
  "insurer_id": "HDFC-ERGO-001",
  "consent_token": "aadhaar_consent_xyz"
}`}
                </pre>
              </div>
              <div className="rounded-2xl border border-border bg-[oklch(0.12_0.02_280)] p-6 font-mono text-[13px] leading-relaxed">
                <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
                  <span>response · 84 ms</span>
                  <span className="text-success">200 OK</span>
                </div>
                <pre className="overflow-x-auto whitespace-pre-wrap text-foreground/90">
{`{
  "vhs_score": 742,
  "band": "Uttam (Good)",
  "band_code": "A",
  "last_updated": "2026-06-20T14:32:00Z",
  "premium_effect": "-28.4%",
  "shap_top_3": [
    "smooth_braking_profile",
    "service_on_schedule",
    "low_monsoon_exposure"
  ]
}`}
                </pre>
              </div>
            </div>
          </Reveal>

          {/* System & data-flow diagram */}
          <Reveal delay={0.15}>
            <div className="mt-14">
              <div className="mb-5 flex items-end justify-between">
                <div>
                  <SectionLabel>System diagram</SectionLabel>
                  <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                    Edge → Bureau → <span className="text-gradient">Consumers</span>
                  </h3>
                </div>
                <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
                  A live trace of telematics flowing from the vehicle edge through the VEDYRA core to insurers and owners — all consented, all explainable.
                </p>
              </div>
              <SystemDiagram />
            </div>
          </Reveal>
        </div>
      </section>


      {/* ============== PRICING ============== */}
      <section id="pricing" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>API tiers</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl">
              Pricing that scales with <span className="text-gradient-primary">your underwriting depth.</span>
            </h2>
          </Reveal>

          <Stagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t) => (
              <StaggerItem
                key={t.name}
                variants={staggerItemVariants}
                whileHover={{ y: -6 }}
                className={`relative flex h-full flex-col rounded-2xl border p-6 transition ${t.popular ? "border-primary/60 bg-gradient-to-b from-primary/[0.12] to-surface/40 shadow-[var(--shadow-glow)]" : "border-border bg-surface/40 hover:border-border-strong"}`}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    Most popular
                  </span>
                )}
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{t.name}</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-semibold text-gradient">{t.price}</span>
                  <span className="text-xs text-muted-foreground">{t.unit}</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 shrink-0 text-primary">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <div className="border-t border-border pt-4 text-[11px] uppercase tracking-wider text-muted-foreground">{t.for}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
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
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionLabel>Contact & Incubation</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Get in touch with <span className="text-gradient">VEDYRA Labs</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-base md:text-lg">
                VEDYRA Labs is a student-founded research startup incubated under the BIT Patna Incubation Centre and supported under the Bihar Startup Policy.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Left Column: Contact details & Incubation highlight */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal delay={0.1}>
                <div className="glass relative overflow-hidden rounded-3xl border border-border-strong p-8 shadow-card">
                  <div className="absolute -right-10 -bottom-10 -z-10 h-40 w-40 animate-aurora rounded-full opacity-20 blur-2xl" style={{ background: "var(--gradient-aurora)" }} />
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Incubated Office
                  </h3>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full border border-border bg-white/5 flex items-center justify-center text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Office Address</h4>
                        <p className="mt-1 text-sm text-foreground/90 leading-relaxed font-sans">
                          Birla Institute of Technology, Patna Campus,<br />
                          Samanpura, Near Patna Veterinary College,<br />
                          Patna, Bihar 800014
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full border border-border bg-white/5 flex items-center justify-center text-primary">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Working Hours</h4>
                        <p className="mt-1 text-sm text-foreground/90 font-sans">
                          Monday to Saturday: 8:00 AM – 5:00 PM<br />
                          <span className="text-muted-foreground">(Sundays closed)</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full border border-border bg-white/5 flex items-center justify-center text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Contact Email</h4>
                        <a 
                          href="mailto:vedyralabs@gmail.com" 
                          className="mt-1 inline-block text-sm text-foreground hover:text-primary transition font-sans font-medium underline underline-offset-4 decoration-primary/40"
                        >
                          vedyralabs@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="glass rounded-3xl border border-border-strong p-8">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-gold" />
                    Government Recognized
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fostered under the Bihar Start-up Policy (2022-2027) in partnership with the Government of Bihar's Department of Industries to build deep-tech telemetry standards for motor insurance.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: About the Incubation Centre */}
            <div className="lg:col-span-7">
              <Reveal delay={0.25}>
                <div className="glass relative overflow-hidden rounded-3xl border border-border-strong p-8 md:p-10 shadow-card">
                  <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
                  <div className="absolute -left-20 -top-20 -z-10 h-64 w-64 animate-aurora rounded-full opacity-35 blur-3xl" style={{ background: "var(--gradient-aurora)" }} />

                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    BIT Patna Incubation Centre
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    The BIT Patna Incubation Centre supports tech and business startups under the Bihar Startup Policy. Operating in partnership with the Government of Bihar’s Department of Industries, the centre helps student and regional entrepreneurs transition their ideas from prototypes to commercially viable products through seed funding, workspace access, and expert mentorship.
                  </p>

                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                    Key Support & Infrastructure
                  </h4>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: "Dedicated Workspace",
                        desc: "Air-conditioned co-working zones, meeting rooms, and high-speed internet infrastructure.",
                        icon: Cpu
                      },
                      {
                        title: "Specialized Lab Access",
                        desc: "Access to engineering, technology, and computing labs to build and test prototypes.",
                        icon: FlaskConical
                      },
                      {
                        title: "Seed Support",
                        desc: "Initial seed funds and financial grants provided under the Bihar Start-up Policy.",
                        icon: ShieldCheck
                      },
                      {
                        title: "Faculty Network",
                        desc: "Direct connection with subject-matter experts from the BIT faculty for technical validation.",
                        icon: GraduationCap
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="border border-border/40 bg-white/5 rounded-2xl p-4 hover:border-primary/30 transition-all duration-300">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <h5 className="font-display text-sm font-semibold text-foreground mb-1">{item.title}</h5>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs text-muted-foreground font-sans">
                      Are you a student or innovator seeking to join?
                    </span>
                    <a 
                      href="mailto:vedyralabs@gmail.com?subject=Inquiry%20regarding%20BIT%20Patna%20Incubation"
                      className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-[0_10px_30px_-5px_oklch(0.62_0.22_280/0.6)] hover:shadow-[0_15px_40px_-5px_oklch(0.62_0.22_280/0.8)] transition-all duration-300"
                    >
                      Connect with Incubation Team
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
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
            <a href="#pricing" className="transition hover:text-foreground">Pricing</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </nav>
          <div className="font-mono">© 2026 · ITS-VHS-2026-IN · Built for India</div>
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

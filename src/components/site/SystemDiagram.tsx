import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type NodeDef = {
  id: string;
  x: number;
  y: number;
  label: string;
  sub: string;
  color: string;
  detail: string;
  flow: string;
};

const nodes: NodeDef[] = [
  {
    id: "veh",
    x: 80, y: 220,
    label: "Vehicle",
    sub: "IMU · OBD-II · GNSS · BMS",
    color: "oklch(0.78 0.14 80)",
    detail: "On-board sensors capture inertial, powertrain, location and battery telemetry at 1–10 Hz. Edge-signed packets ensure tamper-evidence before any upload.",
    flow: "Vehicle → OEM Cloud · MQTT/TLS · ~2 KB/min",
  },
  {
    id: "oem",
    x: 290, y: 220,
    label: "OEM Cloud",
    sub: "BlueLink · ZConnect · BlueSense",
    color: "oklch(0.62 0.22 280)",
    detail: "OEM telematics backends normalise vendor-specific schemas, apply DPDPA consent gates and forward only consented streams to the bureau.",
    flow: "OEM → VEDYRA · REST + Webhook · OAuth2 consent",
  },
  {
    id: "ing",
    x: 500, y: 120,
    label: "Ingestion API",
    sub: "Schema map · 40× compress",
    color: "oklch(0.58 0.24 305)",
    detail: "Maps 14 OEM schemas to one canonical event. Columnar compression (~40×) and idempotent writes to the time-series lake.",
    flow: "Ingest → Lake · Parquet · partitioned by VIN-hash & day",
  },
  {
    id: "eng",
    x: 500, y: 320,
    label: "Scoring Engine",
    sub: "GBM ensemble · SHAP XAI",
    color: "oklch(0.72 0.20 295)",
    detail: "Five-dimensional gradient-boosted ensemble (DBS · MHS · MCS · EES · ESH) emits a 300–850 score. Every score ships with SHAP factor attribution.",
    flow: "Engine → Bureau · score + top-k factors · <120 ms p95",
  },
  {
    id: "bur",
    x: 720, y: 220,
    label: "VEDYRA Bureau",
    sub: "IRDAI · DPDPA · Aadhaar consent",
    color: "oklch(0.62 0.22 280)",
    detail: "The neutral bureau layer. Holds the score graph, audit log, consent ledger and IRDAI-aligned governance hooks. The only writer of canonical VHS values.",
    flow: "Bureau → Consumers · signed JWT · rate-limited tiers",
  },
  {
    id: "ins",
    x: 940, y: 120,
    label: "Insurer API",
    sub: "Premium · UBI 2021",
    color: "oklch(0.74 0.18 155)",
    detail: "Insurers query VHS at quote, renewal and claim. Drives usage-based pricing under IRDAI UBI 2021 and fraud triage at FNOL.",
    flow: "Bureau → Insurer · /score/:vin · per-call billing",
  },
  {
    id: "own",
    x: 940, y: 320,
    label: "Owner App",
    sub: "Score · factors · 9 languages",
    color: "oklch(0.78 0.14 80)",
    detail: "Owners see their VHS, the top contributing factors, and actions to improve it. Available in 9 Indian languages with explainable, plain-language reasons.",
    flow: "Bureau → Owner · push + pull · DPDPA Section 11",
  },
];

const edges: [string, string][] = [
  ["veh", "oem"],
  ["oem", "ing"],
  ["oem", "eng"],
  ["ing", "bur"],
  ["eng", "bur"],
  ["bur", "ins"],
  ["bur", "own"],
];

export function SystemDiagram() {
  const [activeId, setActiveId] = useState<string>("bur");
  const active = nodes.find((n) => n.id === activeId)!;
  const find = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border glass p-6">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden />

      <svg viewBox="0 0 1040 460" className="relative w-full">
        <defs>
          <linearGradient id="flow" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.22 280)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.72 0.20 295)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.78 0.14 80)" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {edges.map(([a, b], i) => {
          const A = find(a);
          const B = find(b);
          const mx = (A.x + B.x) / 2;
          const d = `M ${A.x + 70} ${A.y} C ${mx} ${A.y}, ${mx} ${B.y}, ${B.x - 70} ${B.y}`;
          const highlight = activeId === a || activeId === b;
          const pathId = `edge-${a}-${b}`;
          return (
            <g key={`${a}-${b}`}>
              <path
                id={pathId}
                d={d}
                stroke={highlight ? "oklch(0.72 0.20 295 / 0.55)" : "oklch(1 0 0 / 0.12)"}
                strokeWidth={highlight ? 2 : 1.5}
                fill="none"
                style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
              />
              <motion.path
                d={d}
                stroke="url(#flow)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="6 200"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -206 }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "linear", delay: i * 0.25 }}
              />
              {/* Traveling signal pulses */}
              {[0, 1].map((k) => (
                <circle key={k} r={highlight ? 3.5 : 2.6} fill={highlight ? "oklch(0.92 0.14 295)" : "oklch(0.78 0.14 80)"} filter="url(#glow)">
                  <animateMotion
                    dur={`${2.6 + i * 0.15}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.3 + k * 1.3}s`}
                    rotate="auto"
                  >
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur={`${2.6 + i * 0.15}s`} repeatCount="indefinite" begin={`${i * 0.3 + k * 1.3}s`} />
                </circle>
              ))}
            </g>
          );
        })}


        {nodes.map((n, i) => {
          const isActive = n.id === activeId;
          return (
            <motion.g
              key={n.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onClick={() => setActiveId(n.id)}
              onMouseEnter={() => setActiveId(n.id)}
              style={{ cursor: "pointer" }}
              tabIndex={0}
              role="button"
              aria-label={`${n.label}: ${n.sub}`}
            >
              {isActive && (
                <motion.rect
                  layoutId="node-ring"
                  x={n.x - 76}
                  y={n.y - 34}
                  width="152"
                  height="68"
                  rx="16"
                  fill="none"
                  stroke={n.color}
                  strokeWidth="2"
                  strokeOpacity="0.9"
                  style={{ filter: "drop-shadow(0 0 12px " + n.color + ")" }}
                />
              )}
              <rect
                x={n.x - 72}
                y={n.y - 30}
                width="144"
                height="60"
                rx="14"
                fill={isActive ? "oklch(0.22 0.05 282 / 0.95)" : "oklch(0.18 0.03 282 / 0.85)"}
                stroke={n.color}
                strokeOpacity={isActive ? 0.9 : 0.5}
                strokeWidth="1.2"
                filter="url(#glow)"
                style={{ transition: "fill 0.3s, stroke-opacity 0.3s" }}
              />
              <circle cx={n.x - 56} cy={n.y - 10} r="3" fill={n.color}>
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <text x={n.x - 46} y={n.y - 6} fill="oklch(0.98 0.005 250)" fontSize="13" fontWeight="600" fontFamily="Space Grotesk">
                {n.label}
              </text>
              <text x={n.x - 46} y={n.y + 14} fill="oklch(0.72 0.02 270)" fontSize="9.5" fontFamily="JetBrains Mono">
                {n.sub}
              </text>
            </motion.g>
          );
        })}

        <text x="80" y="50" fill="oklch(0.72 0.02 270)" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2">
          EDGE
        </text>
        <text x="500" y="50" fill="oklch(0.72 0.02 270)" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2" textAnchor="middle">
          VEDYRA CORE
        </text>
        <text x="940" y="50" fill="oklch(0.72 0.02 270)" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2" textAnchor="middle">
          CONSUMERS
        </text>
        <line x1="200" y1="60" x2="200" y2="420" stroke="oklch(1 0 0 / 0.06)" strokeDasharray="3 6" />
        <line x1="840" y1="60" x2="840" y2="420" stroke="oklch(1 0 0 / 0.06)" strokeDasharray="3 6" />
      </svg>

      {/* Detail panel */}
      <div className="relative mt-4 grid gap-3 md:grid-cols-[1fr_auto] md:items-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-border bg-surface/60 p-5"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: active.color, boxShadow: `0 0 12px ${active.color}` }} />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Node detail</span>
            </div>
            <h4 className="mt-2 font-display text-xl font-semibold">{active.label}</h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">{active.detail}</p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 font-mono text-[10px] text-muted-foreground">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              {active.flow}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-wrap gap-1.5 md:max-w-[260px] md:justify-end">
          {nodes.map((n) => (
            <button
              key={n.id}
              onClick={() => setActiveId(n.id)}
              className={`rounded-full border px-2.5 py-1 text-[10px] font-medium transition ${
                n.id === activeId
                  ? "border-transparent bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                  : "border-border bg-white/5 text-muted-foreground hover:border-border-strong hover:text-foreground"
              }`}
            >
              {n.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Hover · click · or use the chips to explore the data-flow
      </p>
    </div>
  );
}

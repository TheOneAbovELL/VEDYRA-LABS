import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useTransform, c as motion, n as animate, o as useMotionValue, t as useInView, u as AnimatePresence } from "../_libs/framer-motion.mjs";
import { a as staggerItemVariants, i as StaggerItem, n as Reveal, r as Stagger, t as Nav } from "./Reveal-CAd1fkur.mjs";
import { b as ArrowRight, c as MapPin, d as FlaskConical, g as Clock, l as Mail, o as ShieldCheck, p as Cpu, u as GraduationCap, v as Building, y as Award } from "../_libs/lucide-react.mjs";
import { n as team } from "./team-BiOD2sUZ.mjs";
import { t as Parallax } from "./Parallax-C-KDYKX1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CiFssOGd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScoreGauge({ target = 742 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		amount: .4
	});
	const value = useMotionValue(300);
	const [display, setDisplay] = (0, import_react.useState)(300);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const controls = animate(value, target, {
			duration: 2.2,
			ease: [
				.22,
				1,
				.36,
				1
			],
			onUpdate: (v) => setDisplay(Math.round(v))
		});
		return () => controls.stop();
	}, [
		inView,
		target,
		value
	]);
	const angle = useTransform(value, [300, 850], [-210, 30]);
	useTransform(value, [300, 850], [1, 0]);
	const r = 130;
	const c = 2 * Math.PI * r;
	const band = display >= 751 ? {
		label: "Shreshtha",
		color: "oklch(0.74 0.18 155)"
	} : display >= 651 ? {
		label: "Uttam",
		color: "oklch(0.78 0.18 130)"
	} : display >= 501 ? {
		label: "Sadhaaran",
		color: "oklch(0.82 0.16 80)"
	} : display >= 401 ? {
		label: "Aadha",
		color: "oklch(0.72 0.18 50)"
	} : {
		label: "Kharab",
		color: "oklch(0.65 0.24 25)"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative mx-auto flex h-[340px] w-[340px] items-center justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 animate-pulse-glow rounded-full bg-primary/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "-160 -160 320 320",
				className: "absolute inset-0 -rotate-[30deg]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "arc",
						x1: "0",
						y1: "0",
						x2: "1",
						y2: "1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "oklch(0.65 0.24 25)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "35%",
								stopColor: "oklch(0.82 0.16 80)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "65%",
								stopColor: "oklch(0.62 0.22 280)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "oklch(0.74 0.18 155)"
							})
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r,
						fill: "none",
						stroke: "oklch(1 0 0 / 0.06)",
						strokeWidth: "14",
						strokeDasharray: `${c * (240 / 360)} ${c}`,
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
						r,
						fill: "none",
						stroke: "url(#arc)",
						strokeWidth: "14",
						strokeLinecap: "round",
						strokeDasharray: `${c * (240 / 360)} ${c}`,
						style: {
							pathLength: useTransform(value, [300, 850], [0, 1]),
							strokeDashoffset: 0
						}
					}),
					Array.from({ length: 11 }).map((_, i) => {
						const a = (-210 + i * 240 / 10) * (Math.PI / 180);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: Math.cos(a) * 148,
							y1: Math.sin(a) * 148,
							x2: Math.cos(a) * 158,
							y2: Math.sin(a) * 158,
							stroke: "oklch(1 0 0 / 0.25)",
							strokeWidth: "1.5"
						}, i);
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { rotate: angle },
				className: "absolute left-1/2 top-1/2 h-[120px] w-[2px] -translate-x-1/2 origin-bottom",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full rounded-full bg-gradient-to-t from-transparent via-primary to-white shadow-[0_0_15px_oklch(0.62_0.22_280/0.8)]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground",
						children: "VHS Score"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-7xl font-bold tabular-nums text-gradient",
						children: display
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 rounded-full border border-border-strong px-3 py-1 text-xs font-medium",
						style: { color: band.color },
						children: band.label
					})
				]
			})
		]
	});
}
var nodes = [
	{
		id: "veh",
		x: 80,
		y: 220,
		label: "Vehicle",
		sub: "IMU · OBD-II · GNSS · BMS",
		color: "oklch(0.78 0.14 80)",
		detail: "On-board sensors capture inertial, powertrain, location and battery telemetry at 1–10 Hz. Edge-signed packets ensure tamper-evidence before any upload.",
		flow: "Vehicle → OEM Cloud · MQTT/TLS · ~2 KB/min"
	},
	{
		id: "oem",
		x: 290,
		y: 220,
		label: "OEM Cloud",
		sub: "BlueLink · ZConnect · BlueSense",
		color: "oklch(0.62 0.22 280)",
		detail: "OEM telematics backends normalise vendor-specific schemas, apply DPDPA consent gates and forward only consented streams to the bureau.",
		flow: "OEM → VEDYRA · REST + Webhook · OAuth2 consent"
	},
	{
		id: "ing",
		x: 500,
		y: 120,
		label: "Ingestion API",
		sub: "Schema map · 40× compress",
		color: "oklch(0.58 0.24 305)",
		detail: "Maps 14 OEM schemas to one canonical event. Columnar compression (~40×) and idempotent writes to the time-series lake.",
		flow: "Ingest → Lake · Parquet · partitioned by VIN-hash & day"
	},
	{
		id: "eng",
		x: 500,
		y: 320,
		label: "Scoring Engine",
		sub: "GBM ensemble · SHAP XAI",
		color: "oklch(0.72 0.20 295)",
		detail: "Five-dimensional gradient-boosted ensemble (DBS · MHS · MCS · EES · ESH) emits a 300–850 score. Every score ships with SHAP factor attribution.",
		flow: "Engine → Bureau · score + top-k factors · <120 ms p95"
	},
	{
		id: "bur",
		x: 720,
		y: 220,
		label: "VEDYRA Bureau",
		sub: "IRDAI · DPDPA · Aadhaar consent",
		color: "oklch(0.62 0.22 280)",
		detail: "The neutral bureau layer. Holds the score graph, audit log, consent ledger and IRDAI-aligned governance hooks. The only writer of canonical VHS values.",
		flow: "Bureau → Consumers · signed JWT · rate-limited tiers"
	},
	{
		id: "ins",
		x: 940,
		y: 120,
		label: "Insurer API",
		sub: "Premium · UBI 2021",
		color: "oklch(0.74 0.18 155)",
		detail: "Insurers query VHS at quote, renewal and claim. Drives usage-based pricing under IRDAI UBI 2021 and fraud triage at FNOL.",
		flow: "Bureau → Insurer · /score/:vin · per-call billing"
	},
	{
		id: "own",
		x: 940,
		y: 320,
		label: "Owner App",
		sub: "Score · factors · 9 languages",
		color: "oklch(0.78 0.14 80)",
		detail: "Owners see their VHS, the top contributing factors, and actions to improve it. Available in 9 Indian languages with explainable, plain-language reasons.",
		flow: "Bureau → Owner · push + pull · DPDPA Section 11"
	}
];
var edges = [
	["veh", "oem"],
	["oem", "ing"],
	["oem", "eng"],
	["ing", "bur"],
	["eng", "bur"],
	["bur", "ins"],
	["bur", "own"]
];
function SystemDiagram() {
	const [activeId, setActiveId] = (0, import_react.useState)("bur");
	const active = nodes.find((n) => n.id === activeId);
	const find = (id) => nodes.find((n) => n.id === id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-3xl border border-border glass p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 grid-bg opacity-40",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 1040 460",
				className: "relative w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "flow",
						x1: "0",
						x2: "1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "oklch(0.62 0.22 280)",
								stopOpacity: "0"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "50%",
								stopColor: "oklch(0.72 0.20 295)",
								stopOpacity: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "oklch(0.78 0.14 80)",
								stopOpacity: "0"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
						id: "glow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
							stdDeviation: "3",
							result: "b"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "b" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "SourceGraphic" })] })]
					})] }),
					edges.map(([a, b], i) => {
						const A = find(a);
						const B = find(b);
						const mx = (A.x + B.x) / 2;
						const d = `M ${A.x + 70} ${A.y} C ${mx} ${A.y}, ${mx} ${B.y}, ${B.x - 70} ${B.y}`;
						const highlight = activeId === a || activeId === b;
						const pathId = `edge-${a}-${b}`;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								id: pathId,
								d,
								stroke: highlight ? "oklch(0.72 0.20 295 / 0.55)" : "oklch(1 0 0 / 0.12)",
								strokeWidth: highlight ? 2 : 1.5,
								fill: "none",
								style: { transition: "stroke 0.3s, stroke-width 0.3s" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
								d,
								stroke: "url(#flow)",
								strokeWidth: "2.5",
								fill: "none",
								strokeLinecap: "round",
								strokeDasharray: "6 200",
								initial: { strokeDashoffset: 0 },
								animate: { strokeDashoffset: -206 },
								transition: {
									duration: 3.2,
									repeat: Infinity,
									ease: "linear",
									delay: i * .25
								}
							}),
							[0, 1].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("circle", {
								r: highlight ? 3.5 : 2.6,
								fill: highlight ? "oklch(0.92 0.14 295)" : "oklch(0.78 0.14 80)",
								filter: "url(#glow)",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
									dur: `${2.6 + i * .15}s`,
									repeatCount: "indefinite",
									begin: `${i * .3 + k * 1.3}s`,
									rotate: "auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mpath", { href: `#${pathId}` })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
									attributeName: "opacity",
									values: "0;1;1;0",
									keyTimes: "0;0.15;0.85;1",
									dur: `${2.6 + i * .15}s`,
									repeatCount: "indefinite",
									begin: `${i * .3 + k * 1.3}s`
								})]
							}, k))
						] }, `${a}-${b}`);
					}),
					nodes.map((n, i) => {
						const isActive = n.id === activeId;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, {
							initial: {
								opacity: 0,
								y: 8
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								delay: i * .08,
								duration: .5
							},
							onClick: () => setActiveId(n.id),
							onMouseEnter: () => setActiveId(n.id),
							style: { cursor: "pointer" },
							tabIndex: 0,
							role: "button",
							"aria-label": `${n.label}: ${n.sub}`,
							children: [
								isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.rect, {
									layoutId: "node-ring",
									x: n.x - 76,
									y: n.y - 34,
									width: "152",
									height: "68",
									rx: "16",
									fill: "none",
									stroke: n.color,
									strokeWidth: "2",
									strokeOpacity: "0.9",
									style: { filter: "drop-shadow(0 0 12px " + n.color + ")" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: n.x - 72,
									y: n.y - 30,
									width: "144",
									height: "60",
									rx: "14",
									fill: isActive ? "oklch(0.22 0.05 282 / 0.95)" : "oklch(0.18 0.03 282 / 0.85)",
									stroke: n.color,
									strokeOpacity: isActive ? .9 : .5,
									strokeWidth: "1.2",
									filter: "url(#glow)",
									style: { transition: "fill 0.3s, stroke-opacity 0.3s" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: n.x - 56,
									cy: n.y - 10,
									r: "3",
									fill: n.color,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
										attributeName: "opacity",
										values: "0.4;1;0.4",
										dur: "2.5s",
										repeatCount: "indefinite"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: n.x - 46,
									y: n.y - 6,
									fill: "oklch(0.98 0.005 250)",
									fontSize: "13",
									fontWeight: "600",
									fontFamily: "Space Grotesk",
									children: n.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: n.x - 46,
									y: n.y + 14,
									fill: "oklch(0.72 0.02 270)",
									fontSize: "9.5",
									fontFamily: "JetBrains Mono",
									children: n.sub
								})
							]
						}, n.id);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "80",
						y: "50",
						fill: "oklch(0.72 0.02 270)",
						fontSize: "10",
						fontFamily: "JetBrains Mono",
						letterSpacing: "2",
						children: "EDGE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "500",
						y: "50",
						fill: "oklch(0.72 0.02 270)",
						fontSize: "10",
						fontFamily: "JetBrains Mono",
						letterSpacing: "2",
						textAnchor: "middle",
						children: "VEDYRA CORE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "940",
						y: "50",
						fill: "oklch(0.72 0.02 270)",
						fontSize: "10",
						fontFamily: "JetBrains Mono",
						letterSpacing: "2",
						textAnchor: "middle",
						children: "CONSUMERS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "200",
						y1: "60",
						x2: "200",
						y2: "420",
						stroke: "oklch(1 0 0 / 0.06)",
						strokeDasharray: "3 6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "840",
						y1: "60",
						x2: "840",
						y2: "420",
						stroke: "oklch(1 0 0 / 0.06)",
						strokeDasharray: "3 6"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-4 grid gap-3 md:grid-cols-[1fr_auto] md:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -6
						},
						transition: { duration: .3 },
						className: "rounded-2xl border border-border bg-surface/60 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-2 w-2 rounded-full",
									style: {
										background: active.color,
										boxShadow: `0 0 12px ${active.color}`
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
									children: "Node detail"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-2 font-display text-xl font-semibold",
								children: active.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-foreground/85",
								children: active.detail
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 font-mono text-[10px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "10",
									height: "10",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M13 5l7 7-7 7" })
								}), active.flow]
							})
						]
					}, active.id)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5 md:max-w-[260px] md:justify-end",
					children: nodes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveId(n.id),
						className: `rounded-full border px-2.5 py-1 text-[10px] font-medium transition ${n.id === activeId ? "border-transparent bg-gradient-to-r from-primary to-secondary text-primary-foreground" : "border-border bg-white/5 text-muted-foreground hover:border-border-strong hover:text-foreground"}`,
						children: n.label
					}, n.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
				children: "Hover · click · or use the chips to explore the data-flow"
			})
		]
	});
}
var subScores = [
	{
		code: "DBS",
		name: "Driving Behaviour",
		weight: 30,
		max: 165,
		color: "oklch(0.62 0.22 280)",
		desc: "IMU events, speed profile, ABS/ESC, GNSS trips"
	},
	{
		code: "MHS",
		name: "Mechanical Health",
		weight: 25,
		max: 137,
		color: "oklch(0.58 0.24 305)",
		desc: "OBD-II DTCs, engine, tyre pressure, brake wear"
	},
	{
		code: "MCS",
		name: "Maintenance Compliance",
		weight: 20,
		max: 110,
		color: "oklch(0.74 0.18 155)",
		desc: "Service history, oil intervals, recall compliance"
	},
	{
		code: "EES",
		name: "Environmental Exposure",
		weight: 15,
		max: 83,
		color: "oklch(0.78 0.14 80)",
		desc: "Monsoon, altitude, coastal corrosion zones"
	},
	{
		code: "ESH",
		name: "Electrical & Safety",
		weight: 10,
		max: 55,
		color: "oklch(0.65 0.24 25)",
		desc: "Battery SoH, ADAS, airbag / ABS module health"
	}
];
var pipeline = [
	{
		n: "01",
		title: "Vehicle Sensors",
		body: "IMU · OBD-II · TPMS · GNSS · BMS streaming at 10 Hz from the edge."
	},
	{
		n: "02",
		title: "OEM Platform",
		body: "BlueLink, ZConnect, BlueSense, SmartPlay normalise and compress."
	},
	{
		n: "03",
		title: "Ingestion API",
		body: "Schema mapping across 12+ OEM formats. Compression up to 40×."
	},
	{
		n: "04",
		title: "Scoring Engine",
		body: "Gradient-boosted ensemble fuses 5 sub-scores. SHAP explainability."
	},
	{
		n: "05",
		title: "Bureau API",
		body: "IRDAI-compliant REST. ₹20–₹200 per query across 4 tiers."
	},
	{
		n: "06",
		title: "Premium Calc",
		body: "Insurer applies VHS under UBI Guidelines for a fair, dynamic premium."
	}
];
var tiers = [
	{
		name: "Score Only",
		price: "₹20",
		unit: "per query",
		features: [
			"VHS composite (300–850)",
			"Band label",
			"Last updated date"
		],
		for: "PSU insurers · renewals"
	},
	{
		name: "Score + Sub-Scores",
		price: "₹35",
		unit: "per query",
		features: [
			"All 5 sub-scores",
			"Top 3 SHAP factors",
			"Active DTC count"
		],
		for: "Private insurers · fleet",
		popular: true
	},
	{
		name: "Full Analytics",
		price: "₹50",
		unit: "per query",
		features: [
			"12-month trend",
			"Maintenance log",
			"Terrain & monsoon index"
		],
		for: "Commercial · fraud detection"
	},
	{
		name: "Real-Time Stream",
		price: "₹200",
		unit: "per vehicle / month",
		features: [
			"Score-change webhooks",
			"Crash & DTC alerts",
			"Vahan stolen-vehicle flag"
		],
		for: "PAYD · Acko · fleets"
	}
];
var phases = [
	{
		id: "Phase 01",
		time: "Now",
		title: "Hyundai Innovation Challenge",
		body: "OEM MoUs, IRDAI Sandbox registration, 500-vehicle pilot in 4 metros.",
		status: "current"
	},
	{
		id: "Phase 02",
		time: "M 6–16",
		title: "Scoring Engine",
		body: "Multi-OEM training, MIDR calibration, ≥18% AUC over CC/IDV baseline."
	},
	{
		id: "Phase 03",
		time: "M 12–22",
		title: "Bureau & Insurer API",
		body: "Aadhaar consent, Owner App in 9 languages, 2 insurer integrations live."
	},
	{
		id: "Phase 04",
		time: "M 18–28",
		title: "Scale",
		body: "6+ OEMs, IRDAI full designation, Governance Board, Vahan integration."
	},
	{
		id: "Phase 05",
		time: "M 24–36",
		title: "National Launch",
		body: "2 lakh validation fleet · 5 peer-reviewed papers · open-source middleware."
	}
];
var pillars = [
	{
		title: "OEM Data Partners",
		body: "13+ connected-car platforms contribute normalised telematics via the VHS Contribution API.",
		icon: "⬢",
		logos: [
			"Hyundai",
			"Tata",
			"Mahindra",
			"Maruti",
			"MG",
			"Toyota",
			"Kia",
			"Honda"
		]
	},
	{
		title: "VEDYRA Bureau",
		body: "The neutral, IRDAI-registered scoring entity. Aadhaar-KYC consent, SHAP explainability, ₹25–50 per query.",
		icon: "◈",
		logos: [
			"IRDAI Registered",
			"DPDPA 2023",
			"CERT-In Audited",
			"AWS Mumbai"
		]
	},
	{
		title: "Insurance Partners",
		body: "PSU and private insurers subscribe to the VHS API for premium computation under UBI Guidelines.",
		icon: "◇",
		logos: [
			"Bajaj Allianz",
			"HDFC ERGO",
			"ICICI Lombard",
			"Acko",
			"Go Digit",
			"New India"
		]
	}
];
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "relative min-h-screen overflow-x-clip",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative pt-36 pb-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 grid-bg",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-1/2 top-0 -z-10 h-[900px] w-[1400px] -translate-x-1/2",
						style: { background: "var(--gradient-hero)" },
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 animate-aurora opacity-30 blur-3xl",
						style: { background: "var(--gradient-aurora)" },
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-border-strong glass px-3 py-1.5 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative flex h-1.5 w-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-success" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Hyundai Innovation Challenge · 2026"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-px bg-border-strong" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground/90",
										children: "ITS-VHS-2026-IN"
									})
								]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-6 font-display text-[clamp(2.6rem,6.5vw,5.4rem)] font-bold leading-[1.02] tracking-tight",
									children: [
										"A ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient",
											children: "credit bureau"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"for every vehicle",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient-primary",
											children: "on Indian roads."
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground",
									children: "VEDYRA Labs is building the Vehicle Health Score Bureau — a neutral, IRDAI-compliant intelligence platform that turns siloed OEM telematics into a fair, dynamic 300–850 score. Like CIBIL, but for the ₹80,000 Cr motor-insurance market."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .3,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-9 flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contact",
										className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.62_0.22_280/0.8)] transition hover:shadow-[0_15px_60px_-10px_oklch(0.62_0.22_280/1)]",
										children: ["Request early access", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.2",
											className: "transition group-hover:translate-x-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M13 5l7 7-7 7" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#technology",
										className: "inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm text-foreground/90 transition hover:bg-white/5",
										children: "Explore the architecture"
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .45,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8 text-left",
									children: [
										{
											v: "₹80,000 Cr",
											l: "Motor insurance TAM"
										},
										{
											v: "5 Cr+",
											l: "Connected vehicles by 2030"
										},
										{
											v: "300–850",
											l: "VHS score range"
										}
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-display text-2xl font-semibold text-gradient",
										children: s.v
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground",
										children: s.l
									})] }, s.l))
								})
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
							speed: 50,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-secondary/20 to-gold/10 blur-2xl animate-pulse-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass relative rounded-[2rem] p-8 shadow-[var(--shadow-elegant)]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-6 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
													children: "Live response"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-display text-sm font-medium",
													children: "POST /v1/vhs/query"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[10px] font-medium text-success",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }), " 200 OK · 84 ms"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreGauge, { target: 742 }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-6 grid grid-cols-2 gap-3 text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-xl border border-border bg-surface/50 p-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
														children: "Premium effect"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-1 font-display text-xl font-semibold text-success",
														children: "−28.4%"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-xl border border-border bg-surface/50 p-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
														children: "Vehicle"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-1 truncate font-mono text-sm",
														children: "MA3EWDE1S00123456"
													})]
												})]
											})
										]
									})]
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .5,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-24 max-w-6xl px-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
								children: "Built for India's connected mobility stack"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70",
								children: [
									"Hyundai BlueLink",
									"Tata ZConnect",
									"Mahindra BlueSense",
									"Maruti SmartPlay",
									"MG iSMART",
									"IRDAI · UBI 2021",
									"DPDPA 2023",
									"DigiLocker"
								].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm font-medium tracking-wide text-muted-foreground",
									children: b
								}, b))
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "The problem" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl",
						children: [
							"Indian motor insurance is priced with",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-primary",
								children: "1970s-era proxies."
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-6 md:grid-cols-3",
						children: [
							{
								k: "Today",
								t: "Static, opaque pricing",
								b: "Premiums computed from cubic capacity, age and IDV. Safe drivers subsidise reckless ones."
							},
							{
								k: "Locked away",
								t: "OEM data sits siloed",
								b: "Millions of cars stream telematics into Bluelink, ZConnect & SmartPlay — invisible to insurers."
							},
							{
								k: "The gap",
								t: "No neutral middle layer",
								b: "There is no IRDAI-registered bureau to normalise, score and distribute vehicle intelligence."
							}
						].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group h-full rounded-2xl border border-border bg-surface/40 p-7 transition hover:border-border-strong hover:bg-surface/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
										children: c.k
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-xl font-semibold",
										children: c.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: c.b
									})
								]
							})
						}, c.t))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "score",
				className: "relative py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 grid-bg opacity-40",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "The analogy" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "CIBIL"
								}),
								" for credit.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-primary",
									children: "VEDYRA"
								}),
								" for vehicles."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-muted-foreground",
							children: "Same structural shift, applied to mobility. A standardised score every Indian already understands."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						className: "mt-14 overflow-hidden rounded-2xl border border-border glass",
						children: [
							[
								"Dimension",
								"CIBIL · Banking",
								"VEDYRA · Insurance"
							],
							[
								"Score range",
								"300 – 900",
								"300 – 850"
							],
							[
								"Data sources",
								"Banks, NBFCs, credit cards",
								"OEM telematics (BlueLink, ZConnect, BlueSense)"
							],
							[
								"Score consumers",
								"SBI, HDFC, ICICI, NBFCs",
								"Bajaj Allianz, HDFC ERGO, ICICI Lombard, Acko"
							],
							[
								"Owner",
								"Individual borrower",
								"Vehicle owner (RC Book · VIN · Aadhaar)"
							],
							[
								"Commercial",
								"Lenders pay per query",
								"Insurers pay ₹25–50 / query · OEMs get 15–20% royalty"
							],
							[
								"Regulator",
								"Reserve Bank of India",
								"IRDAI · UBI Guidelines 2021"
							]
						].map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
							variants: staggerItemVariants,
							className: `grid grid-cols-[1.1fr_1.4fr_1.4fr] gap-4 px-6 py-4 text-sm ${i === 0 ? "bg-white/[0.04] font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground" : "border-t border-border"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: i === 0 ? "" : "text-muted-foreground",
									children: row[0]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row[1] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: i === 0 ? "" : "text-foreground",
									children: row[2]
								})
							]
						}, i))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Score architecture" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl",
							children: [
								"Five signals.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "One explainable score."
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
							className: "mt-14 grid gap-4 md:grid-cols-5",
							children: subScores.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
								variants: staggerItemVariants,
								whileHover: { y: -6 },
								className: "relative h-full overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition hover:border-border-strong",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-x-0 top-0 h-1",
										style: { background: `linear-gradient(90deg, ${s.color}, transparent)` }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
											children: s.code
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display text-2xl font-bold",
											style: { color: s.color },
											children: [s.weight, "%"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-base font-semibold leading-tight",
										children: s.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs leading-relaxed text-muted-foreground",
										children: s.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-center justify-between text-[10px] font-mono text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "max" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-semibold text-foreground",
											children: [s.max, " pts"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1.5 h-1 rounded-full bg-white/5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											initial: { width: 0 },
											whileInView: { width: `${s.max / 165 * 100}%` },
											viewport: { once: true },
											transition: {
												duration: 1.2,
												ease: [
													.22,
													1,
													.36,
													1
												]
											},
											className: "h-full rounded-full",
											style: { background: s.color }
										})
									})
								]
							}, s.code))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 overflow-hidden rounded-2xl border border-border glass p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-end justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "300" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "500" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "650" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "750" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "850" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 h-3 overflow-hidden rounded-full",
										style: { background: "linear-gradient(90deg, oklch(0.65 0.24 25), oklch(0.78 0.14 80) 35%, oklch(0.62 0.22 280) 65%, oklch(0.74 0.18 155))" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 grid grid-cols-2 gap-3 text-sm md:grid-cols-5",
										children: [
											{
												b: "Kharab",
												r: "300–400",
												p: "+40 → +80%"
											},
											{
												b: "Aadha",
												r: "401–500",
												p: "+20 → +40%"
											},
											{
												b: "Sadhaaran",
												r: "501–650",
												p: "±5%"
											},
											{
												b: "Uttam",
												r: "651–750",
												p: "−15 → −40%"
											},
											{
												b: "Shreshtha",
												r: "751–850",
												p: "up to −40%"
											}
										].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border bg-surface/40 p-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-display text-sm font-semibold",
													children: x.b
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-0.5 font-mono text-[11px] text-muted-foreground",
													children: x.r
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 text-xs text-foreground/90",
													children: x.p
												})
											]
										}, x.b))
									})
								]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "ecosystem",
				className: "relative py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Ecosystem" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl",
						children: [
							"Three pillars.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-primary",
								children: "One neutral bureau."
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-16 grid gap-6 md:grid-cols-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-x-12 top-[110px] hidden h-px md:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { scaleX: 0 },
								whileInView: { scaleX: 1 },
								viewport: { once: true },
								transition: {
									duration: 1.4,
									ease: "easeOut"
								},
								className: "h-full origin-left bg-gradient-to-r from-transparent via-primary to-transparent"
							})
						}), pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .15,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/40 p-8 transition hover:border-border-strong hover:bg-surface/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative flex h-16 w-16 items-center justify-center rounded-2xl border border-border-strong bg-gradient-to-br from-primary/20 to-secondary/10 font-display text-3xl text-gradient",
										children: p.icon
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "relative mt-6 font-display text-xl font-semibold",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "relative mt-3 text-sm leading-relaxed text-muted-foreground",
										children: p.body
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative mt-6 flex flex-wrap gap-1.5",
										children: p.logos.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-border bg-white/5 px-2.5 py-1 text-[11px] text-foreground/80",
											children: l
										}, l))
									})
								]
							})
						}, p.title))]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "technology",
				className: "relative py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 grid-bg opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Six-stage pipeline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl",
							children: ["From sensor edge to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "premium quote."
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
							className: "mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
							children: pipeline.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
								variants: staggerItemVariants,
								whileHover: { y: -4 },
								className: "group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-2 p-6 transition hover:border-border-strong",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs text-muted-foreground",
											children: p.n
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 rounded-lg border border-border bg-white/5 transition group-hover:border-primary/40 group-hover:bg-primary/10" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-6 font-display text-lg font-semibold",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: p.body
									})
								]
							}, p.n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-14 grid gap-6 lg:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-[oklch(0.12_0.02_280)] p-6 font-mono text-[13px] leading-relaxed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3 flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-danger/70" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-warning/70" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-success/70" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-3 text-[10px] uppercase tracking-wider text-muted-foreground",
												children: "request"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
										className: "overflow-x-auto whitespace-pre-wrap text-foreground/90",
										children: `POST /v1/vhs/query
Authorization: Bearer {API_KEY}

{
  "vin": "MA3EWDE1S00123456",
  "insurer_id": "HDFC-ERGO-001",
  "consent_token": "aadhaar_consent_xyz"
}`
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-[oklch(0.12_0.02_280)] p-6 font-mono text-[13px] leading-relaxed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "response · 84 ms" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-success",
											children: "200 OK"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
										className: "overflow-x-auto whitespace-pre-wrap text-foreground/90",
										children: `{
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
}`
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .15,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-14",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-5 flex items-end justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "System diagram" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "mt-3 font-display text-2xl font-semibold md:text-3xl",
										children: ["Edge → Bureau → ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient",
											children: "Consumers"
										})]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "hidden max-w-sm text-sm text-muted-foreground md:block",
										children: "A live trace of telematics flowing from the vehicle edge through the VEDYRA core to insurers and owners — all consented, all explainable."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemDiagram, {})]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "pricing",
				className: "relative py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "API tiers" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl",
						children: ["Pricing that scales with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-primary",
							children: "your underwriting depth."
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						className: "mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4",
						children: tiers.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
							variants: staggerItemVariants,
							whileHover: { y: -6 },
							className: `relative flex h-full flex-col rounded-2xl border p-6 transition ${t.popular ? "border-primary/60 bg-gradient-to-b from-primary/[0.12] to-surface/40 shadow-[var(--shadow-glow)]" : "border-border bg-surface/40 hover:border-border-strong"}`,
							children: [
								t.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-3 left-6 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground",
									children: "Most popular"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
									children: t.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-baseline gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-4xl font-semibold text-gradient",
										children: t.price
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: t.unit
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-2.5 text-sm",
									children: t.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "14",
											height: "14",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.5",
											className: "mt-0.5 shrink-0 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12l5 5L20 7" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground/85",
											children: f
										})]
									}, f))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-auto pt-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "border-t border-border pt-4 text-[11px] uppercase tracking-wider text-muted-foreground",
										children: t.for
									})
								})
							]
						}, t.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Roadmap" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl",
						children: ["From pilot to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "national infrastructure."
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-3 top-2 h-full w-px bg-gradient-to-b from-primary via-secondary/50 to-transparent md:left-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
							gap: .12,
							className: "space-y-10",
							children: phases.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
								variants: staggerItemVariants,
								className: `relative grid items-start gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute left-3 top-2 -translate-x-1/2 md:left-1/2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative h-3 w-3",
											children: [p.status === "current" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full bg-success/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `relative block h-3 w-3 rounded-full ring-4 ring-background ${p.status === "current" ? "bg-success" : "bg-primary"}` })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `pl-10 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
											children: [
												p.id,
												" · ",
												p.time
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-2xl font-semibold",
											children: p.title
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `pl-10 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "inline-block rounded-2xl border border-border bg-surface/40 p-5 text-sm text-muted-foreground",
											children: p.body
										})
									})
								]
							}, p.id))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "team",
				className: "relative py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "The team" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl",
						children: ["Builders, researchers, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "institutional bridges."
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						className: "mt-14 grid gap-5 md:grid-cols-3",
						children: team.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
							variants: staggerItemVariants,
							whileHover: { y: -6 },
							className: "group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-gold/10 blur-2xl transition group-hover:from-primary/40" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-1 ring-border-strong",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: m.photo,
											alt: m.name,
											className: "h-full w-full object-cover transition duration-500 group-hover:scale-110",
											loading: "lazy"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-lg font-semibold leading-tight",
												children: m.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm text-gradient-primary",
												children: m.role
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
												children: m.tag
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "relative mt-4 text-sm leading-relaxed text-muted-foreground",
									children: m.bio
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative mt-5 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/credits",
										hash: m.slug,
										className: "inline-flex items-center gap-1.5 text-xs font-medium text-foreground/90 transition hover:text-foreground",
										children: ["Full bio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "12",
											height: "12",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M13 5l7 7-7 7" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: m.linkedin,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": `${m.name} on LinkedIn`,
										className: "inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white/5 text-foreground/80 transition hover:border-primary/60 hover:bg-primary/10 hover:text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "14",
											height: "14",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.77V21H17.6v-5.3c0-1.27-.03-2.9-1.78-2.9-1.78 0-2.05 1.37-2.05 2.8V21H10z" })
										})
									})]
								})
							]
						}, m.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "relative py-32 border-t border-border/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-3xl mx-auto mb-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Contact & Incubation" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl",
								children: ["Get in touch with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "VEDYRA Labs"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground text-base md:text-lg",
								children: "VEDYRA Labs is a student-founded research startup incubated under the BIT Patna Incubation Centre and supported under the Bihar Startup Policy."
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-12 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass relative overflow-hidden rounded-3xl border border-border-strong p-8 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute -right-10 -bottom-10 -z-10 h-40 w-40 animate-aurora rounded-full opacity-20 blur-2xl",
											style: { background: "var(--gradient-aurora)" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "h-5 w-5 text-primary" }), "Incubated Office"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex-shrink-0 h-10 w-10 rounded-full border border-border bg-white/5 flex items-center justify-center text-primary",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "font-mono text-xs uppercase tracking-wider text-muted-foreground",
														children: "Office Address"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "mt-1 text-sm text-foreground/90 leading-relaxed font-sans",
														children: [
															"Birla Institute of Technology, Patna Campus,",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
															"Samanpura, Near Patna Veterinary College,",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
															"Patna, Bihar 800014"
														]
													})] })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex-shrink-0 h-10 w-10 rounded-full border border-border bg-white/5 flex items-center justify-center text-primary",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "font-mono text-xs uppercase tracking-wider text-muted-foreground",
														children: "Working Hours"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "mt-1 text-sm text-foreground/90 font-sans",
														children: [
															"Monday to Saturday: 8:00 AM – 5:00 PM",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-muted-foreground",
																children: "(Sundays closed)"
															})
														]
													})] })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex-shrink-0 h-10 w-10 rounded-full border border-border bg-white/5 flex items-center justify-center text-primary",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "font-mono text-xs uppercase tracking-wider text-muted-foreground",
														children: "Contact Email"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
														href: "mailto:vedyralabs@gmail.com",
														className: "mt-1 inline-block text-sm text-foreground hover:text-primary transition font-sans font-medium underline underline-offset-4 decoration-primary/40",
														children: "vedyralabs@gmail.com"
													})] })]
												})
											]
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass rounded-3xl border border-border-strong p-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5 text-gold" }), "Government Recognized"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground leading-relaxed",
										children: "Fostered under the Bihar Start-up Policy (2022-2027) in partnership with the Government of Bihar's Department of Industries to build deep-tech telemetry standards for motor insurance."
									})]
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .25,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass relative overflow-hidden rounded-3xl border border-border-strong p-8 md:p-10 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0 -z-10",
											style: { background: "var(--gradient-hero)" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute -left-20 -top-20 -z-10 h-64 w-64 animate-aurora rounded-full opacity-35 blur-3xl",
											style: { background: "var(--gradient-aurora)" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl font-bold text-foreground mb-4",
											children: "BIT Patna Incubation Centre"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-sm leading-relaxed mb-8",
											children: "The BIT Patna Incubation Centre supports tech and business startups under the Bihar Startup Policy. Operating in partnership with the Government of Bihar’s Department of Industries, the centre helps student and regional entrepreneurs transition their ideas from prototypes to commercially viable products through seed funding, workspace access, and expert mentorship."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4",
											children: "Key Support & Infrastructure"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid gap-4 sm:grid-cols-2",
											children: [
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
											].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "border border-border/40 bg-white/5 rounded-2xl p-4 hover:border-primary/30 transition-all duration-300",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
														className: "font-display text-sm font-semibold text-foreground mb-1",
														children: item.title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-muted-foreground leading-relaxed",
														children: item.desc
													})
												]
											}, idx))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-muted-foreground font-sans",
												children: "Are you a student or innovator seeking to join?"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "mailto:vedyralabs@gmail.com?subject=Inquiry%20regarding%20BIT%20Patna%20Incubation",
												className: "group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-[0_10px_30px_-5px_oklch(0.62_0.22_280/0.6)] hover:shadow-[0_15px_40px_-5px_oklch(0.62_0.22_280/0.8)] transition-all duration-300",
												children: ["Connect with Incubation Team", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition group-hover:translate-x-0.5" })]
											})]
										})
									]
								})
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground md:flex-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm font-semibold text-foreground",
									children: "VEDYRA Labs"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ancient Wisdom. Future Intelligence." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex flex-wrap items-center gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/credits",
									className: "transition hover:text-foreground",
									children: "Credits & Team"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "transition hover:text-foreground",
									children: "About"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#technology",
									className: "transition hover:text-foreground",
									children: "Architecture"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#pricing",
									className: "transition hover:text-foreground",
									children: "Pricing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "transition hover:text-foreground",
									children: "Contact"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono",
							children: "© 2026 · ITS-VHS-2026-IN · Built for India"
						})
					]
				})
			})
		]
	});
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gradient-to-r from-primary to-transparent" }), children]
	});
}
var SplitComponent = Landing;
//#endregion
export { SplitComponent as component };

import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as motion, u as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as Reveal, t as Nav } from "./Reveal-CAd1fkur.mjs";
import { _ as ChartLine, a as Sparkles, b as ArrowRight, f as Database, h as Code, i as TrendingUp, m as Compass, n as Workflow, o as ShieldCheck, p as Cpu, r as UserCheck, s as Share2, t as Zap, x as Activity } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BhDsRkK1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("all");
	const whatWeDoItems = [
		{
			icon: Cpu,
			title: "Telematics Standardization",
			desc: "We stream and normalize raw vehicle telemetry (IMU, GNSS, OBD-II, and BMS data) from multiple OEM platforms at 10 Hz into unified data schemas."
		},
		{
			icon: Activity,
			title: "Vehicle Health Scoring",
			desc: "Our engine computes a neutral, CIBIL-like Vehicle Health Score (300-850) built on 5 weighted sub-scores to assess vehicle risk profile."
		},
		{
			icon: Database,
			title: "Explainable Risk Profiling",
			desc: "We run gradient-boosted ensembles with SHAP values to explain every risk factor, guaranteeing insurers explainability and full transparency."
		},
		{
			icon: ShieldCheck,
			title: "Regulatory Alignment",
			desc: "Our bureau architecture complies with IRDAI sandbox requirements and the DPDPA (Digital Personal Data Protection Act) 2023 consent frameworks."
		}
	];
	const whatWeWantToDoItems = [
		{
			icon: TrendingUp,
			title: "Metropolitan Pilot Scale",
			desc: "Deploy a sandbox pilot tracking 500+ connected vehicles across Tier 1 Indian cities to calibrate algorithms with real-world road and weather conditions."
		},
		{
			icon: UserCheck,
			title: "Owner Consent Application",
			desc: "Build an intuitive owner-facing application available in 9 languages, allowing drivers to view their score and explicitly consent to sharing data with insurers."
		},
		{
			icon: Code,
			title: "Unified Insurer API Integration",
			desc: "Publish developer portals and REST APIs for motor insurers, supporting millisecond response times to compute policy premiums during checkout."
		},
		{
			icon: ChartLine,
			title: "Predictive Claims Correlation",
			desc: "Demonstrate a verified lift of at least 18% in claims risk prediction compared to traditional IDV (Insured Declared Value) baseline pricing model."
		}
	];
	const futureScopeItems = [
		{
			icon: Zap,
			title: "EV State-of-Health Diagnostics",
			desc: "Construct predictive degradation models for EV lithium-ion batteries to standardize secondhand EV valuation and battery financing indices."
		},
		{
			icon: Workflow,
			title: "Vahan & Sarathi Deep Fusion",
			desc: "Fuse real-time vehicle telematics indices directly with India's central Vahan registry to automate compliance audits and micro-insurance claims."
		},
		{
			icon: Share2,
			title: "Open Telematics Protocol",
			desc: "Publish and license open-source telematics middleware libraries, helping the broader research community extract vehicle telemetry securely."
		},
		{
			icon: Compass,
			title: "National Score Bureau",
			desc: "Establish VEDYRA Labs as the national utility bureau for vehicle safety and health validation, trusted by insurers, manufacturers, and buyers."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-clip bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative pt-36 pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 grid-bg",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-1/2 top-0 -z-10 h-[700px] w-[1200px] -translate-x-1/2",
						style: { background: "var(--gradient-hero)" },
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-1/2 top-20 -z-10 h-[400px] w-[400px] -translate-x-1/2 animate-aurora opacity-25 blur-3xl",
						style: { background: "var(--gradient-aurora)" },
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-5xl px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground transition hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "12",
									height: "12",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 12H5M12 19l-7-7 7-7" })
								}), "Back to VEDYRA"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight",
								children: [
									"Our Vision, Roadmap & ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Future Scope"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground",
								children: "Deep dive into what we do today, what we want to achieve tomorrow, and our ultimate aspirations to build India's neutral Vehicle Health Score Bureau."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .15,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 flex flex-wrap gap-2 max-w-xl",
								children: [
									{
										id: "all",
										label: "Show All"
									},
									{
										id: "do",
										label: "What We Do"
									},
									{
										id: "want",
										label: "What We Want to Do"
									},
									{
										id: "future",
										label: "Future Scope"
									}
								].map((tab) => {
									const active = activeTab === tab.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setActiveTab(tab.id),
										className: `relative rounded-lg px-4 py-2 text-xs font-medium transition duration-300 ${active ? "text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`,
										children: [active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
											layoutId: "active-about-tab",
											className: "absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-secondary shadow-[0_4px_12px_rgba(79,70,229,0.3)]",
											transition: {
												type: "spring",
												stiffness: 350,
												damping: 30
											}
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative z-10",
											children: tab.label
										})]
									}, tab.id);
								})
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative pb-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-6 space-y-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: (activeTab === "all" || activeTab === "do") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -20
								},
								transition: { duration: .3 },
								className: "space-y-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold",
										children: "1"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-2xl font-bold text-foreground",
										children: "What We Do"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-6 sm:grid-cols-2",
									children: whatWeDoItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass group relative overflow-hidden rounded-3xl border border-border p-6 hover:border-primary/40 transition-all duration-300",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-6 -bottom-6 -z-10 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-xl group-hover:scale-125 transition-transform" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-5 w-5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-lg font-bold text-foreground mb-2",
												children: item.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground leading-relaxed",
												children: item.desc
											})
										]
									}, index))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: (activeTab === "all" || activeTab === "want") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -20
								},
								transition: {
									duration: .3,
									delay: .05
								},
								className: "space-y-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 pt-6 border-t border-border/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-8 w-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold",
										children: "2"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-2xl font-bold text-foreground",
										children: "What We Want to Do"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-6 sm:grid-cols-2",
									children: whatWeWantToDoItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass group relative overflow-hidden rounded-3xl border border-border p-6 hover:border-secondary/40 transition-all duration-300",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-6 -bottom-6 -z-10 h-24 w-24 rounded-full bg-gradient-to-br from-secondary/10 to-transparent blur-xl group-hover:scale-125 transition-transform" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-5 w-5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-lg font-bold text-foreground mb-2",
												children: item.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground leading-relaxed",
												children: item.desc
											})
										]
									}, index))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: (activeTab === "all" || activeTab === "future") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -20
								},
								transition: {
									duration: .3,
									delay: .1
								},
								className: "space-y-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 pt-6 border-t border-border/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-8 w-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center font-bold",
										children: "3"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-2xl font-bold text-foreground",
										children: "Future Scope & Aspirations"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-6 sm:grid-cols-2",
									children: futureScopeItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass group relative overflow-hidden rounded-3xl border border-border p-6 hover:border-gold/40 transition-all duration-300",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-6 -bottom-6 -z-10 h-24 w-24 rounded-full bg-gradient-to-br from-gold/10 to-transparent blur-xl group-hover:scale-125 transition-transform" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-10 w-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-5 w-5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-lg font-bold text-foreground mb-2",
												children: item.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground leading-relaxed",
												children: item.desc
											})
										]
									}, index))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[2.5rem] border border-border-strong p-10 md:p-14 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 -z-10",
									style: { background: "var(--gradient-hero)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -right-20 -bottom-20 -z-10 h-64 w-64 animate-aurora rounded-full opacity-30 blur-3xl",
									style: { background: "var(--gradient-aurora)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-3 py-1 mb-4 font-mono text-[9px] uppercase tracking-wider text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-gold" }), " Supported under Bihar Startup Policy"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-display text-2xl font-semibold md:text-3xl",
									children: ["Incubated at ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "BIT Patna Incubation Centre"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground",
									children: "Our operations and deep-tech telematics research are fostered within the BIT Patna incubation ecosystem, helping us scale from a research concept to a commercially viable utility bureau."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 flex flex-wrap justify-center gap-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "/#contact",
										className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_15px_60px_-10px_oklch(0.62_0.22_280/0.8)]",
										children: ["Contact VEDYRA Labs", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})
								})
							]
						}) })
					]
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
									href: "/#technology",
									className: "transition hover:text-foreground",
									children: "Architecture"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/#pricing",
									className: "transition hover:text-foreground",
									children: "Pricing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/#contact",
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
//#endregion
export { AboutPage as component };

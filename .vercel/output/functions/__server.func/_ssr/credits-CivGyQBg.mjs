import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as motion, l as LayoutGroup, u as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as Reveal, t as Nav } from "./Reveal-CAd1fkur.mjs";
import { n as team, t as categoryMeta } from "./team-BiOD2sUZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/credits-CivGyQBg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	{
		key: "all",
		label: "Everyone"
	},
	{
		key: "members",
		label: categoryMeta.members.label
	},
	{
		key: "mentors",
		label: categoryMeta.mentors.label
	},
	{
		key: "advisors",
		label: categoryMeta.advisors.label
	}
];
function CreditsPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [expanded, setExpanded] = (0, import_react.useState)({});
	const filtered = (0, import_react.useMemo)(() => filter === "all" ? team : team.filter((m) => m.category === filter), [filter]);
	const toggle = (slug) => setExpanded((p) => ({
		...p,
		[slug]: !p[slug]
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-clip",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative pt-36 pb-12",
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
								children: ["The minds behind ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "VEDYRA Labs"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground",
								children: "A student-founded, mentor-guided research initiative building the Vehicle Health Score Bureau for India."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: .15,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGroup, {
								id: "credits-filter",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									role: "tablist",
									className: "mt-10 inline-flex flex-wrap gap-1 rounded-full border border-border bg-surface/60 p-1 backdrop-blur",
									children: FILTERS.map((f) => {
										const active = filter === f.key;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											role: "tab",
											"aria-selected": active,
											onClick: () => setFilter(f.key),
											className: `relative rounded-full px-4 py-2 text-xs font-medium transition ${active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
											children: [active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
												layoutId: "filter-pill",
												className: "absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_8px_24px_-6px_oklch(0.62_0.22_280/0.6)]",
												transition: {
													type: "spring",
													stiffness: 380,
													damping: 32
												}
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "relative",
												children: f.label
											})]
										}, f.key);
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									initial: {
										opacity: 0,
										y: 4
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: {
										opacity: 0,
										y: -4
									},
									transition: { duration: .25 },
									className: "mt-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground",
									children: filter === "all" ? `${team.length} people across mentors, advisors & project members` : `${filtered.length} · ${categoryMeta[filter].blurb}`
								}, filter)
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative pb-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGroup, {
						id: "credits-list",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							layout: true,
							className: "space-y-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "popLayout",
								children: filtered.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberCard, {
									m,
									open: !!expanded[m.slug],
									onToggle: () => toggle(m.slug)
								}, m.slug))
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-14 overflow-hidden rounded-3xl border border-border-strong p-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 -z-10",
								style: { background: "var(--gradient-hero)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground",
								children: "Acknowledgement"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mt-3 font-display text-2xl font-semibold md:text-3xl",
								children: ["Built at ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Birla Institute of Technology, Mesra."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground",
								children: "With deep gratitude to BIT Mesra's AIML faculty, the Hyundai Innovation Challenge committee, and every OEM, insurer and regulator engaging with the VHS Bureau vision."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-7 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/",
									className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_15px_60px_-10px_oklch(0.62_0.22_280/0.8)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "14",
										height: "14",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2.4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 12H5M12 19l-7-7 7-7" })
									}), "Back to the bureau"]
								})
							})
						]
					}) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-6 text-center font-mono text-xs text-muted-foreground",
					children: "© 2026 VEDYRA Labs · ITS-VHS-2026-IN"
				})
			})
		]
	});
}
function MemberCard({ m, open, onToggle }) {
	const [first, ...rest] = m.long;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		layout: true,
		id: m.slug,
		initial: {
			opacity: 0,
			y: 18,
			scale: .98
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: -10,
			scale: .98
		},
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 28
		},
		className: "group relative scroll-mt-32 overflow-hidden rounded-3xl border border-border bg-surface/40 p-7 transition hover:border-border-strong md:p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-primary/20 to-gold/10 blur-3xl transition group-hover:from-primary/35" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			layout: "position",
			className: "relative grid gap-8 md:grid-cols-[200px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-square w-full overflow-hidden rounded-2xl ring-1 ring-border-strong",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: m.photo,
						alt: m.name,
						className: "h-full w-full object-cover transition duration-700 group-hover:scale-105",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-2 top-2 rounded-full bg-background/70 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-foreground/90 backdrop-blur",
						children: categoryMeta[m.category].label
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: m.linkedin,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border-strong bg-white/5 px-4 py-2 text-xs font-medium transition hover:border-primary/60 hover:bg-primary/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					width: "14",
					height: "14",
					viewBox: "0 0 24 24",
					fill: "currentColor",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.77V21H17.6v-5.3c0-1.27-.03-2.9-1.78-2.9-1.78 0-2.05 1.37-2.05 2.8V21H10z" })
				}), "Connect on LinkedIn"]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground",
					children: m.role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-semibold md:text-4xl",
					children: m.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-sm text-gradient-primary",
					children: m.tag
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-[15px] leading-relaxed text-foreground/85",
					children: first
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					initial: false,
					children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							height: 0,
							opacity: 0
						},
						animate: {
							height: "auto",
							opacity: 1
						},
						exit: {
							height: 0,
							opacity: 0
						},
						transition: {
							duration: .45,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 space-y-4 text-[15px] leading-relaxed text-foreground/85",
							children: rest.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, i))
						})
					}, "more")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-wrap items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onToggle,
						"aria-expanded": open,
						className: "inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-4 py-2 text-xs font-medium transition hover:border-primary/60 hover:bg-primary/10",
						children: [open ? "Collapse bio" : "Read full bio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.svg, {
							animate: { rotate: open ? 180 : 0 },
							transition: { duration: .3 },
							width: "12",
							height: "12",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2.4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 9l6 6 6-6" })
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4",
					children: m.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface/60 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-mono text-[9px] uppercase tracking-wider text-muted-foreground",
							children: h.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm font-medium text-foreground/95",
							children: h.value
						})]
					}, h.label))
				})
			] })]
		})]
	});
}
//#endregion
export { CreditsPage as component };

import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useTransform, c as motion, i as useSpring, s as useScroll } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-CAd1fkur.js
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		href: "/#technology",
		label: "Technology"
	},
	{
		href: "/#score",
		label: "VHS Score"
	},
	{
		href: "/#ecosystem",
		label: "Ecosystem"
	},
	{
		href: "/#pricing",
		label: "Pricing"
	},
	{
		href: "/#team",
		label: "Team"
	}
];
function Nav() {
	const { scrollY, scrollYProgress } = useScroll();
	const blur = useTransform(scrollY, [0, 100], [0, 20]);
	const bg = useTransform(scrollY, [0, 100], ["oklch(0.14 0.025 280 / 0)", "oklch(0.14 0.025 280 / 0.7)"]);
	const progress = useSpring(scrollYProgress, {
		stiffness: 140,
		damping: 24,
		mass: .3
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		style: {
			backdropFilter: useTransform(blur, (b) => `blur(${b}px) saturate(160%)`),
			backgroundColor: bg
		},
		className: "fixed inset-x-0 top-0 z-50 border-b border-transparent",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: {
				scaleX: progress,
				transformOrigin: "0% 50%"
			},
			className: "absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-gold"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "group flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-8 w-8 items-center justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-secondary opacity-90 transition group-hover:opacity-100" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[2px] rounded-[7px] bg-background" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative font-display text-lg font-bold text-gradient-primary",
								children: "V"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-semibold tracking-wide",
							children: "VEDYRA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
							children: "Labs"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: [
						links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground",
							children: l.label
						}, l.href)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/credits",
							className: "rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground",
							children: "Credits"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-5px_oklch(0.62_0.22_280/0.6)] transition hover:shadow-[0_0_50px_-5px_oklch(0.62_0.22_280/0.8)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative",
						children: "Request Access"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "14",
						height: "14",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2.5",
						className: "transition group-hover:translate-x-0.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M13 5l7 7-7 7" })
					})]
				})
			]
		})]
	});
}
var variants = {
	hidden: {
		opacity: 0,
		y: 28
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		variants,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			amount: .2
		},
		transition: { delay },
		children
	});
}
function Stagger({ children, className, gap = .08 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			amount: .15
		},
		variants: { show: { transition: { staggerChildren: gap } } },
		children
	});
}
var StaggerItem = motion.div;
var staggerItemVariants = variants;
//#endregion
export { staggerItemVariants as a, StaggerItem as i, Reveal as n, Stagger as r, Nav as t };

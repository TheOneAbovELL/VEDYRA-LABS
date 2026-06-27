import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useTransform, c as motion, i as useSpring, r as useReducedMotion, s as useScroll } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Parallax-C-KDYKX1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Parallax: translate children on the Y axis as the element scrolls through the viewport.
* `speed` > 0 → moves slower than scroll (drifts down). `speed` < 0 → moves opposite (drifts up).
*/
function Parallax({ children, speed = 40, className }) {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useSpring(useTransform(scrollYProgress, [0, 1], [speed, -speed]), {
		stiffness: 80,
		damping: 20,
		mass: .4
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		style: { willChange: "transform" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: reduce ? void 0 : { y },
			children
		})
	});
}
/**
* ScrollScene: a fixed-position aurora background that breathes & drifts with page scroll.
* Mount once at the root. Behind everything (pointer-events: none, -z-10).
*/
function ScrollScene() {
	const reduce = useReducedMotion();
	const { scrollYProgress } = useScroll();
	const ySmooth = useSpring(scrollYProgress, {
		stiffness: 60,
		damping: 22,
		mass: .5
	});
	const y1 = useTransform(ySmooth, [0, 1], ["0%", "-30%"]);
	const y2 = useTransform(ySmooth, [0, 1], ["0%", "40%"]);
	const rotate = useTransform(ySmooth, [0, 1], [0, 120]);
	const filter = useTransform(useTransform(ySmooth, [
		0,
		.5,
		1
	], [
		0,
		30,
		-20
	]), (h) => `hue-rotate(${h}deg)`);
	if (reduce) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					y: y1,
					filter
				},
				className: "absolute -left-40 top-[-10%] h-[60vmax] w-[60vmax] rounded-full opacity-40 blur-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full w-full rounded-full",
					style: { background: "radial-gradient(circle, oklch(0.62 0.22 280 / 0.55), transparent 60%)" }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					y: y2,
					rotate,
					filter
				},
				className: "absolute right-[-20%] top-[30%] h-[55vmax] w-[55vmax] rounded-full opacity-35 blur-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full w-full rounded-full",
					style: { background: "conic-gradient(from 0deg, oklch(0.58 0.24 305 / 0.5), oklch(0.78 0.14 80 / 0.3), oklch(0.62 0.22 280 / 0.5))" }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					y: y1,
					filter
				},
				className: "absolute left-[20%] bottom-[-15%] h-[50vmax] w-[50vmax] rounded-full opacity-30 blur-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full w-full rounded-full",
					style: { background: "radial-gradient(circle, oklch(0.78 0.14 80 / 0.4), transparent 60%)" }
				})
			})
		]
	});
}
//#endregion
export { ScrollScene as n, Parallax as t };

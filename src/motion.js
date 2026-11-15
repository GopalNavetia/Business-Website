import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export let prefersReducedMotion = typeof window !== "undefined"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (typeof window !== "undefined") {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = (event) => {
        prefersReducedMotion = event.matches;
    };
    motionQuery.addEventListener?.("change", updateMotionPreference);
}

export { gsap, ScrollTrigger };

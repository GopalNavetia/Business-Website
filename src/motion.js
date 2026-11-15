import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(500, 33);

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

export function pauseWhenHidden(tween, element) {
    if (!tween || !element || typeof window === "undefined") return () => {};

    let visible = true;
    const update = () => tween.paused(document.hidden || !visible);
    const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        update();
    }, { threshold: 0.01 });

    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    update();

    return () => {
        observer.disconnect();
        document.removeEventListener("visibilitychange", update);
        tween.kill();
    };
}

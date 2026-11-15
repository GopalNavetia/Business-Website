import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

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

export function setupSmoothScroll() {
    if (typeof window === "undefined") return () => {};

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const touchQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    let lenis = null;
    let raf = null;

    const stop = () => {
        if (!lenis) return;
        lenis.off("scroll", ScrollTrigger.update);
        gsap.ticker.remove(raf);
        lenis.destroy();
        lenis = null;
        raf = null;
        gsap.ticker.lagSmoothing(500, 33);
    };

    const start = () => {
        if (lenis || motionQuery.matches || touchQuery.matches) return;

        lenis = new Lenis({ autoRaf: false });
        lenis.on("scroll", ScrollTrigger.update);
        raf = (time) => lenis?.raf(time * 1000);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);
    };

    const update = () => {
        stop();
        start();
    };

    start();
    motionQuery.addEventListener?.("change", update);
    touchQuery.addEventListener?.("change", update);

    return () => {
        stop();
        motionQuery.removeEventListener?.("change", update);
        touchQuery.removeEventListener?.("change", update);
    };
}

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

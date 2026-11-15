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

export const reveal = (selector, scope) => {
    const items = gsap.utils.toArray(selector, scope);
    if (!items.length) return;
    if (prefersReducedMotion) {
        gsap.set(items, { autoAlpha: 1, clearProps: "transform" });
        return;
    }

    gsap.set(items, { autoAlpha: 0, y: 14 });
    ScrollTrigger.batch(items, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: window.matchMedia("(max-width: 767px)").matches ? 0.4 : 0.5,
            ease: "power2.out",
            stagger: window.matchMedia("(max-width: 767px)").matches ? 0.04 : 0.06,
            overwrite: true,
            clearProps: "transform",
        }),
    });
};

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

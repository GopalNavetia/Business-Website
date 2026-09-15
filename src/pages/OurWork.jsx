import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { TriangleAlert, SquareTerminal, BadgeCheck, Check } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../motion";

gsap.registerPlugin(ScrollTrigger);

const MY_NUMBER = import.meta.env.VITE_MY_NUMBER;

function OurWork() {
    const location = useLocation();
    const navigate = useNavigate();
    const startProjectRef = useRef(null);

    useEffect(() => {
        const targetId = location.hash.slice(1);

        // Open Our Work at the top first
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

        if (!targetId) return;

        const timer = setTimeout(() => {
            document.getElementById(targetId)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 300);

        return () => clearTimeout(timer);
    }, [location.hash]);

    const buildStandards = [
        {
            number: "01",
            title: "Performance-First",
            description:
                "Pages optimized to load fast on mobile screens so visitors don't bounce before seeing your services.",
        },
        {
            number: "02",
            title: "Tailored Structure",
            description:
                "Modular layouts built around how your customers actually find and read your content.",
        },
        {
            number: "03",
            title: "Cost-Effective Setup",
            description:
                "Built using highly efficient, low-overhead hosting setups to keep your monthly running costs to a bare minimum.",
        },
        {
            number: "04",
            title: "Search-Ready Coding",
            description:
                "Clean structural layouts designed to let search engines find and index your business naturally.",
        },
    ];

    const projectCategories = [
        {
            number: "01/06",
            slug: "business-websites",
            title: "Business Websites",
            bottleneck: "THE BOTTLENECK",
            bottleneckText:
                "Drag-and-drop page builders rely on heavy, bloated templates that drag mobile load speeds past 4 seconds, destroying ad conversion rates.",
            build: "THE BUILD",
            buildText:
                "Lightweight static builds optimized with semantic HTML and deployed on global edge servers to load instantly.",
            value: "BUSINESS VALUE",
            valueText:
                "Achieving a verified sub-1.5s load time that lowers bounce rates and ranks organically in search engines.",
        },
        {
            number: "02/06",
            slug: "portfolios",
            title: "Professional Portfolios",
            bottleneck: "THE BOTTLENECK",
            bottleneckText:
                "Independent professionals and consultants often present static, resume-style sites that fail to demonstrate authority or capture direct business leads.",
            build: "THE BUILD",
            buildText:
                "A highly structured visual showcase engineered around decision-maker scanning habits, clear typography, and integrated inquiry forms.",
            value: "BUSINESS VALUE",
            valueText:
                "Eliminates the generalist dilemma by positioning your experience as a strategic asset, turning casual visitors into qualified inquiries.",
        },
        {
            number: "03/06",
            slug: "management-systems",
            title: "Custom Management Systems",
            bottleneck: "THE BOTTLENECK",
            bottleneckText:
                "Businesses relying on complex, unorganized spreadsheets or rigid third-party software that forces them to adapt their real-world workflows.",
            build: "THE BUILD",
            buildText:
                "Secure admin dashboards built with relational database schemas (SQL) tailored to your exact operational steps.",
            value: "BUSINESS VALUE",
            valueText:
                "A single, centralized internal tool that automates reporting and cuts manual tracking times by up to 70%.",
        },
        {
            number: "04/06",
            slug: "cafes-menus",
            title: "Cafés & Food Menus",
            bottleneck: "THE BOTTLENECK",
            bottleneckText:
                "Relying on heavy, slow-loading PDF menus that block local search engine indexing and frustrate on-the-go customers trying to load menus on weak mobile connections.",
            build: "THE BUILD",
            buildText:
                "Ultra-lightweight progressive digital menu pages designed for high readability and optimized for outdoor, high-contrast mobile screens.",
            value: "BUSINESS VALUE",
            valueText:
                "Eliminates download friction, allowing tables to scan, browse, and choose their meals in seconds.",
        },
        {
            number: "05/06",
            slug: "ngos-community",
            title: "NGOs & Community Platforms",
            bottleneck: "THE BOTTLENECK",
            bottleneckText:
                "Operating with outdated layouts or disjointed third-party forms that fail to establish institutional trust, while forcing donors onto jarring, unfamiliar external payment screens.",
            build: "THE BUILD",
            buildText:
                "Secure, custom-designed non-profit platforms with unified payment gateway integrations that keep donors on your trusted domain throughout the contribution flow.",
            value: "BUSINESS VALUE",
            valueText:
                "Establishes immediate credibility to drive higher average donation sizes, while eliminating expensive monthly platform subscription overhead.",
        },
        {
            number: "06/06",
            slug: "gym-fitness",
            title: "Gyms & Fitness Booking",
            bottleneck: "THE BOTTLENECK",
            bottleneckText:
                "Gym owners trapped paying expensive, recurring monthly subscription fees to third-party scheduling portals just to manage simple member schedules and class rosters.",
            build: "THE BUILD",
            buildText:
                "A private, self-hosted scheduling system built around automated member lists and real-time class booking.",
            value: "BUSINESS VALUE",
            valueText:
                "Completely eliminates recurring software overhead, giving you a custom booking platform that your business owns forever.",
        },
    ];

    const [activeCard, setActiveCard] = useState(null);
    const pageRef = useRef(null);

    useLayoutEffect(() => {
        const hero = pageRef.current.querySelector(".ourwork-hero");
        let removePointerListener = () => { };
        const context = gsap.context(() => {
            const spotlight = pageRef.current.querySelector(".ourwork-hero-spotlight");
            const grid = pageRef.current.querySelector(".ourwork-hero-grid");
            const heroBadge = pageRef.current.querySelector(".ourwork-hero-badge");
            const heroHeading = pageRef.current.querySelector(".ourwork-hero-heading");
            const heroWords = gsap.utils.toArray(".ourwork-hero-word");
            const heroItalic = pageRef.current.querySelector(".ourwork-hero-italic");
            const heroCopy = pageRef.current.querySelector(".ourwork-hero-copy");
            const heroCta = pageRef.current.querySelector(".ourwork-hero-cta");
            const standards = pageRef.current.querySelector(".ourwork-standards");
            const standardItems = gsap.utils.toArray(".ourwork-standard-item");
            const standardBadges = gsap.utils.toArray(".ourwork-standard-badge");
            const capabilitySection = pageRef.current.querySelector(".capabilities-section");
            const capabilityEyebrow = pageRef.current.querySelector(".capability-eyebrow");
            const capabilityHeading = pageRef.current.querySelector(".capability-heading");
            const capabilityWords = gsap.utils.toArray(".capability-word");
            const capabilityCopy = pageRef.current.querySelector(".capability-copy");
            const capabilityRows = gsap.utils.toArray(".capability-row");
            const capabilityCards = gsap.utils.toArray(".capability-card");
            const capabilityBlocks = gsap.utils.toArray(".capability-subblock");
            const capabilityIcons = gsap.utils.toArray(".capability-subblock-icon");
            const guaranteeSection = pageRef.current.querySelector(".guarantee-section");
            const guaranteeHeading = pageRef.current.querySelector(".guarantee-heading");
            const guaranteeDescription = pageRef.current.querySelector(".guarantee-description");
            const guaranteeCards = gsap.utils.toArray(".guarantee-card");
            const guaranteeTags = gsap.utils.toArray(".guarantee-tag");
            const guaranteePills = gsap.utils.toArray(".guarantee-pill");
            const guaranteeChecks = gsap.utils.toArray(".guarantee-check");
            const ctaSection = pageRef.current.querySelector(".ourwork-cta-section");
            const ctaHeading = pageRef.current.querySelector(".ourwork-cta-heading");
            const ctaWords = gsap.utils.toArray(".ourwork-cta-word");
            const ctaCopy = pageRef.current.querySelector(".ourwork-cta-copy");
            const ctaButtons = gsap.utils.toArray(".ourwork-cta-button");
            const ctaBadges = gsap.utils.toArray(".ourwork-cta-badge");
            const ctaChecks = gsap.utils.toArray(".ourwork-cta-check");
            const ctaLabels = gsap.utils.toArray(".ourwork-cta-label");

            if (prefersReducedMotion) {
                gsap.set([
                    hero,
                    heroBadge,
                    heroHeading,
                    ...heroWords,
                    heroItalic,
                    heroCopy,
                    heroCta,
                    standards,
                    ...standardItems,
                    ...standardBadges,
                    capabilitySection,
                    capabilityEyebrow,
                    capabilityHeading,
                    ...capabilityWords,
                    capabilityCopy,
                    ...capabilityCards,
                    ...capabilityBlocks,
                    ...capabilityIcons,
                    guaranteeSection,
                    guaranteeHeading,
                    guaranteeDescription,
                    ...guaranteeCards,
                    ...guaranteeTags,
                    ...guaranteePills,
                    ...guaranteeChecks,
                    ctaSection,
                    ctaHeading,
                    ...ctaWords,
                    ctaCopy,
                    ...ctaButtons,
                    ...ctaBadges,
                    ...ctaChecks,
                    ...ctaLabels,
                ], { autoAlpha: 1, clearProps: "transform,textShadow" });
                gsap.set(guaranteeChecks, { strokeDashoffset: 0 });
                gsap.set(ctaChecks, { strokeDashoffset: 0 });
                return;
            }

            gsap.timeline({ defaults: { ease: "power3.out" } })
                .fromTo(heroBadge, { scale: 0.95, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.45 })
                .fromTo(heroWords, { yPercent: 110, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.52, stagger: 0.05, ease: "power3.out" }, "-=0.08")
                .fromTo(heroItalic, { autoAlpha: 0, textShadow: "0 0 0 rgba(217, 155, 75, 0)" }, { autoAlpha: 1, duration: 0.45 }, "-=0.1")
                .fromTo(heroCopy, { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45 }, "-=0.12")
                .fromTo(heroCta, { scale: 0.9, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.55, ease: "back.out(1.7)" }, "-=0.14")
                .fromTo(standards, { x: 30, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.55 }, "-=0.2")
                .fromTo(standardItems, { scale: 0.94, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.45, stagger: 0.08 }, "-=0.25")
                .fromTo(standardBadges, { scale: 0.72, rotation: -8, autoAlpha: 0 }, { scale: 1, rotation: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.8)" }, "-=0.38");

            gsap.to(grid, { x: 32, y: 32, duration: 22, repeat: -1, ease: "none" });

            const onPointerMove = (event) => {
                const bounds = hero.getBoundingClientRect();
                gsap.to(spotlight, {
                    x: event.clientX - bounds.left,
                    y: event.clientY - bounds.top,
                    duration: 0.6,
                    ease: "power2.out",
                });
            };

            if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                hero.addEventListener("pointermove", onPointerMove);
                removePointerListener = () => hero.removeEventListener("pointermove", onPointerMove);
            }

            const capabilityIntro = gsap.timeline({
                scrollTrigger: {
                    trigger: capabilitySection,
                    start: "top 78%",
                    toggleActions: "play none none none",
                },
            });
            capabilityIntro
                .fromTo(capabilityEyebrow, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, ease: "power3.out" })
                .fromTo(capabilityCopy, { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, ease: "power3.out" }, "-=0.2")
                .fromTo(capabilityWords, { yPercent: 110, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.52, stagger: 0.05, ease: "power3.out" }, "-=0.18");

            capabilityRows.forEach((row) => {
                const cards = gsap.utils.toArray(".capability-card", row);
                gsap.fromTo(cards,
                    { y: 24, autoAlpha: 0 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.55,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: row,
                            start: "top 82%",
                            toggleActions: "play none none none",
                        },
                    },
                );
            });

            capabilityCards.forEach((card) => {
                const blocks = gsap.utils.toArray(".capability-subblock", card);
                const icons = gsap.utils.toArray(".capability-subblock-icon", card);
                const cardTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
                cardTimeline
                    .fromTo(blocks, { x: -10, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.45, stagger: 0.1, ease: "power3.out" })
                    .fromTo(icons, { scale: 0.7, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.6)" }, "-=0.35");
            });

            const guaranteeTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: guaranteeSection,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
            guaranteeTimeline
                .fromTo([guaranteeHeading, guaranteeDescription], { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.42, stagger: 0.04, ease: "power3.out" })
                .fromTo(guaranteeCards, { y: 20, scale: 0.95, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, duration: 0.45, stagger: 0.11, ease: "power3.out" }, "-=0.12")
                .fromTo(guaranteeTags, { scale: 0.72, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.4, stagger: 0.11, ease: "back.out(1.7)" }, "-=0.3")
                .fromTo(guaranteePills, { y: 6, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.38, stagger: 0.11, ease: "power3.out" }, "-=0.2")
                .fromTo(guaranteeChecks, { strokeDashoffset: 20, autoAlpha: 0 }, { strokeDashoffset: 0, autoAlpha: 1, duration: 0.38, stagger: 0.11, ease: "power3.out" }, "-=0.28");

            gsap.to(ctaSection, {
                backgroundPosition: "100% 50%",
                duration: 18,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: ctaHeading,
                    start: "top 82%",
                    toggleActions: "play none none none",
                },
            })
                .fromTo(ctaWords, { yPercent: 110, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.52, stagger: 0.05, ease: "power3.out" })
                .fromTo(ctaCopy, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, ease: "power3.out" }, "-=0.18")
                .fromTo(ctaButtons, { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.1, ease: "power3.out" }, "-=0.15");

            gsap.timeline({
                scrollTrigger: {
                    trigger: ctaSection,
                    start: "top 78%",
                    toggleActions: "play none none none",
                },
            })
                .fromTo(ctaChecks, { strokeDashoffset: 20, autoAlpha: 0 }, { strokeDashoffset: 0, autoAlpha: 1, duration: 0.38, stagger: 0.15, ease: "power3.out" }, "-=0.05")
                .fromTo(ctaLabels, { x: -6, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.35, stagger: 0.15, ease: "power3.out" }, "-=0.2");

            const magneticButton = startProjectRef.current;
            const onMagneticMove = (event) => {
                const bounds = magneticButton.getBoundingClientRect();
                const offsetX = Math.max(-18, Math.min(18, (event.clientX - (bounds.left + bounds.width / 2)) * 0.22));
                const offsetY = Math.max(-18, Math.min(18, (event.clientY - (bounds.top + bounds.height / 2)) * 0.22));
                gsap.to(magneticButton, { x: offsetX, y: offsetY, duration: 0.35, ease: "power3.out" });
            };
            const onMagneticLeave = () => gsap.to(magneticButton, { x: 0, y: 0, duration: 0.6, ease: "power3.out" });
            if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                magneticButton.addEventListener("pointermove", onMagneticMove);
                magneticButton.addEventListener("pointerleave", onMagneticLeave);
                removePointerListener = () => {
                    magneticButton.removeEventListener("pointermove", onMagneticMove);
                    magneticButton.removeEventListener("pointerleave", onMagneticLeave);
                };
            }
        }, pageRef);

        return () => {
            removePointerListener();
            context.revert();
        };
    }, []);

    return (
        <div ref={pageRef}>
            <section className="ourwork-hero relative overflow-hidden bg-[#131210] text-[#F6F1E8]">
                <div className="ourwork-hero-spotlight hero-spotlight pointer-events-none absolute left-0 top-0 z-0" />
                <div className="ourwork-hero-grid hero-grid-drift pointer-events-none absolute inset-0 z-0" />
                <div className="pointer-events-none absolute left-1/2 top-1/4 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#D99B4B]/10 blur-[130px]" />
                {/* Hero Section */}
                <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 pb-16 sm:px-8 sm:py-20 md:pb-24">
                    <div className="grid grid-cols-1 items-center gap-9 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
                        {/* Copy Column */}
                        <div>
                            <span className="ourwork-hero-badge mb-5 inline-flex items-center gap-2 rounded-full border border-[#D99B4B]/40 bg-[#D99B4B]/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#D99B4B]">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#D99B4B]" />
                                Proven architectural archetypes
                            </span>
                            <h1 className="ourwork-hero-heading font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]">
                                <span className="ourwork-hero-word-clip"><span className="ourwork-hero-word">Custom</span></span>{" "}
                                <span className="ourwork-hero-word-clip"><span className="ourwork-hero-word">Scope.</span></span>
                                <br />
                                <span className="ourwork-hero-italic text-[#D99B4B] italic">
                                    <span className="inline-block sm:whitespace-nowrap">
                                        <span className="ourwork-hero-word-clip"><span className="ourwork-hero-word">Engineered</span></span>{" "}
                                        <span className="ourwork-hero-word-clip"><span className="ourwork-hero-word">for</span></span>{" "}
                                        <span className="ourwork-hero-word-clip"><span className="ourwork-hero-word">Your</span></span>
                                    </span>
                                    <br />
                                    <span className="ourwork-hero-word-clip"><span className="ourwork-hero-word">Exact</span></span>{" "}
                                    <span className="ourwork-hero-word-clip"><span className="ourwork-hero-word">Workflow.</span></span>
                                </span>
                            </h1>

                            <p className="ourwork-hero-copy mt-5 max-w-[58ch] text-base leading-relaxed text-[#8A857B] sm:text-lg">
                                We don't force your business into rigid templates or bloated page builders. Whether you need a sub-second marketing site or a custom operational portal, we build only what your business requires.
                            </p>

                            <button
                                type="button"
                                onClick={() => navigate("/contact#enquiry-form")}
                                className="ourwork-hero-cta mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-[#D99B4B] px-9 py-4 text-base font-semibold text-[#131210] transition-colors hover:bg-[#ECC187]"
                            >
                                Start a project <span aria-hidden="true">→</span>
                            </button>
                        </div>

                        {/* Build Standards Box */}
                        <div className="ourwork-standards rounded-2xl border border-[#D99B4B]/30 bg-[#1A1916]/90 p-4 shadow-2xl backdrop-blur-md sm:p-5 md:min-h-[430px] md:flex md:flex-col md:justify-center">
                            <div className="flex items-center justify-between px-1">
                                <h2 className="text-xs font-semibold uppercase tracking-wide text-[#D99B4B]">
                                    Build standards
                                </h2>

                                <span className="text-[9px] uppercase tracking-wide text-[#F6F1E8]/40">
                                    Built for growth
                                </span>
                            </div>

                            <div className="mt-5 space-y-3 sm:grid sm:grid-cols-2 sm:gap-3 sm:space-y-0">
                                {buildStandards.map((standard) => (
                                    <div
                                        key={standard.number}
                                        className="ourwork-standard-item flex gap-3 rounded-xl border border-[#F6F1E8]/10 bg-[#F6F1E8]/[0.04] p-3"
                                    >
                                        <span className="ourwork-standard-badge flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#D99B4B]/40 bg-[#D99B4B]/10 font-serif text-xs font-semibold text-[#D99B4B]">
                                            {standard.number}
                                        </span>

                                        <div>
                                            <h3 className="font-serif text-sm font-semibold text-[#F6F1E8]">
                                                {standard.title}
                                            </h3>

                                            <p className="mt-1 text-xs leading-relaxed text-[#F6F1E8]/55">
                                                {standard.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category Bento Box Section */}
                <div className="capabilities-section bg-[#F6F1E8] px-6 py-14 pb-11 text-[#181614] sm:px-8 sm:py-16 sm:pb-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="capability-eyebrow mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#B87C2B]">
                            <span className="h-px w-4 bg-[#B87C2B]" />
                            Flexible capability playbooks
                        </span>
                        <h2 className="capability-heading font-serif text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
                            Six Core Capabilities.
                            <br />
                            <span className="text-[#B87C2B] italic">
                                <span className="capability-word-clip"><span className="capability-word">Modular</span></span>{" "}
                                <span className="capability-word-clip"><span className="capability-word">Scope</span></span>{" "}
                                <span className="capability-word-clip"><span className="capability-word">Built</span></span>{" "}
                                <span className="capability-word-clip"><span className="capability-word">for</span></span>{" "}
                                <span className="capability-word-clip"><span className="capability-word">Your</span></span>{" "}
                                <span className="capability-word-clip"><span className="capability-word">Needs.</span></span>
                            </span>
                        </h2>

                        <p className="capability-copy mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#181614]/70 sm:text-lg">
                            Every business faces distinct operational and marketing friction. Here is how we engineer solutions across our 6 core capabilities, adding technical complexity only when your workflow demands it.
                        </p>
                    </div>

                    <div className="mx-auto mt-8 max-w-5xl space-y-4 sm:space-y-5">
                        {[0, 2, 4].map((rowStart) => (
                            <div key={rowStart} className="capability-row grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                                {projectCategories.slice(rowStart, rowStart + 2).map((category) => (
                                    <div
                                        key={category.number}
                                        onTouchStart={() => setActiveCard(category.number)}
                                        onTouchEnd={() => setActiveCard(null)}
                                        onTouchCancel={() => setActiveCard(null)}
                                        className={`capability-card group flex min-h-[235px] flex-col rounded-lg border bg-white p-7 transition-colors duration-200 sm:min-h-[250px] sm:p-8 ${activeCard === category.number
                                            ? "border-[#B8862E]"
                                            : "border-[#B8862E]/25 hover:border-[#B8862E]"
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="capability-meta text-[11px] font-semibold uppercase tracking-widest text-[#B8862E]">
                                                Capability {category.number.split("/")[0]}
                                            </span>
                                            <span className="capability-meta text-[10px] font-medium tracking-wide text-[#9B8B7E]">
                                                {category.number}
                                            </span>
                                        </div>

                                        <h3
                                            id={category.slug}
                                            className="scroll-mt-24 mt-6 font-serif text-lg font-bold text-[#1B1712]"
                                        >
                                            {category.title}
                                        </h3>

                                        <div className="mt-5 space-y-4">
                                            {/* Bottleneck */}
                                            <div className="capability-subblock flex gap-3 rounded-lg border border-[#E8D9C3] bg-[#FBF7F1] p-4">
                                                <TriangleAlert className="capability-subblock-icon h-5 w-5 shrink-0 text-[#B8862E] mt-0.5" strokeWidth={1.5} />
                                                <div className="flex-1">
                                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#B8862E]">
                                                        {category.bottleneck}
                                                    </p>
                                                    <p className="mt-1.5 text-xs leading-relaxed text-[#6B6157]">
                                                        {category.bottleneckText}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Build */}
                                            <div className="capability-subblock flex gap-3 rounded-lg border border-[#E8D9C3] bg-[#FBF7F1] p-4">
                                                <SquareTerminal className="capability-subblock-icon h-5 w-5 shrink-0 text-[#B8862E] mt-0.5" strokeWidth={1.5} />
                                                <div className="flex-1">
                                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#B8862E]">
                                                        {category.build}
                                                    </p>
                                                    <p className="mt-1.5 text-xs leading-relaxed text-[#6B6157]">
                                                        {category.buildText}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Value */}
                                            <div className="capability-subblock flex gap-3 rounded-lg border border-[#E8D9C3] bg-[#FBF7F1] p-4">
                                                <BadgeCheck className="capability-subblock-icon h-5 w-5 shrink-0 text-yellow-600 mt-0.5" strokeWidth={1.5} />
                                                <div className="flex-1">
                                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#B8862E]">
                                                        {category.value}
                                                    </p>
                                                    <p className="mt-1.5 text-xs leading-relaxed text-[#6B6157]">
                                                        {category.valueText}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Delivery Guarantee */}
                <section className="guarantee-section border-t border-[#E8DECB] bg-[#F0EBD9] px-6 py-14 text-[#181614] sm:px-8 sm:py-16">
                    <div className="mx-auto max-w-6xl">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="guarantee-heading font-serif text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
                                The Anchorworks Delivery Guarantee
                            </h2>
                            <p className="guarantee-description mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#181614]/70 sm:text-base">
                                Practical engineering and marketing standards applied to every single
                                build - no exceptions.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                ["01", "100% Source Code Ownership", "You own all source code and assets. Zero proprietary page-builder locks or vendor traps.", "Complete Code Handover"],
                                ["02", "Zero Monthly SaaS Overhead", "Custom self-hosted tools built without forcing you into recurring monthly software subscription fees.", "₹0/mo Platform Cost"],
                                ["03", "Built for Marketing Synergy", "Clean semantic HTML structure ready for GA4 event loops, Meta pixels, UTM tracking, and organic SEO ranking.", "Pixel & Event Native"],
                                ["04", "Sub-Second Mobile Speed", "Optimized for lightning-fast performance on mobile connections so leads never bounce before seeing your offer.", "100/100 Core Vitals"],
                            ].map(([number, title, description, proof]) => (
                                <article
                                    key={number}
                                    className="guarantee-card flex min-h-[272px] flex-col rounded-2xl border border-[#E8DECB] bg-[#FBF8F3] p-6 shadow-sm transition-all hover:border-[#B87C2B] hover:shadow-lg"
                                >
                                    <span className="guarantee-tag flex h-9 w-9 items-center justify-center rounded-lg border border-[#D99B4B]/40 bg-[#D99B4B]/10 font-mono text-xs font-semibold text-[#B87C2B]">
                                        {number}
                                    </span>
                                    <h3 className="mt-5 font-serif text-lg font-bold leading-tight">
                                        {title}
                                    </h3>
                                    <p className="mt-3 text-xs leading-relaxed text-[#181614]/70">
                                        {description}
                                    </p>
                                    <div className="mt-auto border-t border-[#E8DECB]/70 pt-3">
                                        <span className="guarantee-pill inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-mono text-[10px] font-semibold text-emerald-700">
                                            <Check className="guarantee-check h-3 w-3" />
                                            {proof}
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <div className="ourwork-cta-section cta-section px-5 py-14 text-[#181614] sm:px-8 md:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="ourwork-cta-heading font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                            <span className="cta-word-clip"><span className="ourwork-cta-word cta-word">Need</span></span>{" "}
                            <span className="cta-word-clip"><span className="ourwork-cta-word cta-word">a</span></span>{" "}
                            <span className="cta-word-clip"><span className="ourwork-cta-word cta-word">clean</span></span>{" "}
                            <span className="cta-word-clip"><span className="ourwork-cta-word cta-word">website</span></span>{" "}
                            <span className="cta-word-clip"><span className="ourwork-cta-word cta-word">or</span></span>{" "}
                            <span className="cta-word-clip"><span className="ourwork-cta-word cta-word">a</span></span>{" "}
                            <span className="cta-word-clip"><span className="ourwork-cta-word cta-word">custom</span></span>{" "}
                            <span className="cta-word-clip"><span className="ourwork-cta-word cta-word">system?</span></span>
                            <br />
                            <span className="cta-word-clip"><span className="ourwork-cta-word cta-word">Let's</span></span>{" "}
                            <span className="cta-word-clip"><span className="ourwork-cta-word cta-word">talk.</span></span>
                        </h2>
                        <p className="ourwork-cta-copy mx-auto mb-7 mt-4 max-w-2xl text-base leading-relaxed text-[#181614]/90 sm:text-lg md:text-xl">
                            Bring us your business bottleneck. We'll tell you honestly whether you need a website, a custom system, or just a smarter setup.
                        </p>
                        <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <button
                                type="button"
                                ref={startProjectRef}
                                onClick={() => navigate("/contact#enquiry-form")}
                                className="ourwork-cta-button ourwork-cta-primary relative isolate flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#181614] px-9 py-4 font-bold text-[#F6F1E8] transition-colors hover:bg-black sm:w-auto"
                            >
                                Start a project <span className="text-[#D99B4B]">→</span>
                            </button>

                            <a
                                href={`https://wa.me/${MY_NUMBER}?text=Hello%20Anchorworks,%20I'd%20like%20to%20discuss%20a%20project`}
                                target="_blank"
                                rel="noreferrer"
                                className="ourwork-cta-button cta-consult w-full rounded-xl border border-[#181614]/30 bg-[#181614]/10 px-7 py-4 text-sm font-bold transition-colors hover:bg-[#181614]/20 sm:w-auto"
                            >
                                Direct WhatsApp / Consult
                            </a>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-[#181614]/80 sm:gap-8">
                            {["Direct Founder Access", "24h Response Guarantee", "Zero Vendor Lock-In"].map((item) => (
                                <span key={item} className="ourwork-cta-badge flex items-center gap-1.5">
                                    <Check className="ourwork-cta-check h-3.5 w-3.5" />
                                    <span className="ourwork-cta-label">{item}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default OurWork;
import { useLayoutEffect, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../motion";
import {
    ArrowRight,
    BarChart3,
    BriefcaseBusiness,
    Check,
    Coffee,
    Dumbbell,
    Heart,
    LayoutDashboard,
    Search,
    SquareUser,
    Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MY_NUMBER = import.meta.env.VITE_MY_NUMBER;

const projects = [
    {
        icon: BriefcaseBusiness,
        title: "Business Websites",
        slug: "business-websites",
        category: "websites",
        label: "Client lead engine",
        description:
            "A straightforward, professional site for founders and small businesses who need to be found and trusted online.",
    },
    {
        icon: SquareUser,
        title: "Portfolios",
        slug: "portfolios",
        category: "websites",
        label: "Authority profile",
        description:
            "For doctors, consultants, and professionals who need a page that builds credibility before the first call.",
    },
    {
        icon: LayoutDashboard,
        title: "Management Systems",
        slug: "management-systems",
        category: "systems",
        label: "Operational core",
        description:
            "Booking, scheduling, and admin tools built around how you actually run your day, not a generic dashboard.",
    },
    {
        icon: Coffee,
        title: "Cafes & Menus",
        slug: "cafes-menus",
        category: "systems",
        label: "Fast commerce",
        description:
            "Fast, mobile-first menus and ordering pages that actually work for someone standing at your counter.",
    },
    {
        icon: Heart,
        title: "NGOs & Community",
        slug: "ngos-community",
        category: "websites",
        label: "Mission & trust",
        description:
            "Trust-building, donation-ready sites for organisations that need people to believe them at first glance.",
    },
    {
        icon: Dumbbell,
        title: "Gyms & Fitness",
        slug: "gym-fitness",
        category: "systems",
        label: "Member engine",
        description:
            "Class schedules, memberships, and bookings handled properly, without paying a monthly fee for someone else’s software.",
    },
];

const processSteps = [
    {
        title: "Research & Audit",
        phase: "Phase 1",
        description:
            "We study how your specific business operates and where your current leads come from, designing a tailored website flow built around your daily workflow.",
        deliverable: "Workflow Blueprint & Wireframe Conversion Flow",
    },
    {
        title: "Design & Coding",
        phase: "Phase 2",
        description:
            "We transform the strategic roadmap into polished, custom layouts and clean code. Every screen is built to give your business a professional, seamless online presence.",
        deliverable: "High-Fidelity Code Prototype & Mobile Responsive Staging",
    },
    {
        title: "Speed & SEO Optimization",
        phase: "Phase 3",
        description:
            "We write clean, lightweight code and implement structured search engine logic so your platform loads instantly on mobile and ranks higher in local search.",
        deliverable: "100/100 Lighthouse Audit & Local Schema Integration",
    },
    {
        title: "Global Edge Deployment",
        phase: "Phase 4",
        description:
            "We handle the technical setup, from secure domain routing and hosting configurations to launching your local marketing campaign on autopilot.",
        deliverable: "Live Edge Launch, Zero Vendor Lock-in Handover & Support SLA",
    },
];

function HeroMockup({ mockupRef, badgeRef, progressRef }) {
    return (
        <div ref={mockupRef} className="hero-mockup-float pointer-events-none relative mx-auto max-w-2xl select-none pt-8">
            <div className="absolute -left-3 top-0 z-10 flex items-center gap-3 rounded-xl border border-[#D99B4B]/50 bg-[#1E1C18]/95 px-4 py-2.5 shadow-xl sm:-left-8">
                <div ref={badgeRef} className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[#D99B4B]/20 text-[#D99B4B]">
                    <span ref={progressRef} className="hero-badge-progress absolute inset-0 rounded-lg" />
                    <BarChart3 className="h-4 w-4" />
                </div>
                <div>
                    <div className="font-mono text-sm font-bold leading-tight text-[#D99B4B]">
                        +<span data-lead-count>0</span>% Avg Lead Surge
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-[#8A857B]">
                        Verified performance
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[#D99B4B]/40 bg-[#1A1916]/95 p-4 text-left shadow-2xl sm:p-6">
                <div className="mb-4 flex items-center justify-between border-b border-[#D99B4B]/20 pb-3.5">
                    <div className="flex gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#E06C75]/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#E5C07B]/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#98C379]/80" />
                    </div>
                    <span className="hidden font-mono text-[11px] uppercase tracking-widest text-[#D99B4B]/80 sm:block">
                        anchorworks.live / preview
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-[#D99B4B]/80">
                        <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
                        100% SEO Score
                    </span>
                </div>
                <div className="grid grid-cols-12 items-center gap-4">
                    <div className="col-span-12 space-y-3 sm:col-span-7">
                        <div className="h-3 w-1/3 rounded-full bg-[#D99B4B]/40" />
                        <div className="h-7 w-5/6 rounded-lg bg-[#D99B4B]/80" />
                        <div className="h-2 w-full rounded-full bg-[#8A857B]/30" />
                        <div className="h-2 w-4/5 rounded-full bg-[#8A857B]/30" />
                        <div className="flex gap-2.5 pt-2">
                            <div className="flex h-7 w-24 items-center justify-center rounded-md bg-[#D99B4B] text-[10px] font-bold text-[#131210]">
                                GET STARTED
                            </div>
                            <div className="flex h-7 w-20 items-center justify-center rounded-md border border-[#D99B4B]/40 font-mono text-[10px] text-[#D99B4B]/80">
                                AUDIT →
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 grid grid-cols-2 gap-2.5 sm:col-span-5">
                        {["+184%", "0.4s"].map((value, index) => (
                            <div
                                key={value}
                                className="flex h-24 flex-col justify-between rounded-xl border border-[#D99B4B]/25 bg-[#22201C]/90 p-2.5"
                            >
                                <span className="font-mono text-[9px] uppercase tracking-wider text-[#8A857B]">
                                    {index ? "Speed" : "Conversion"}
                                </span>
                                <span className="font-mono text-xl font-bold text-[#D99B4B]">
                                    {value}
                                </span>
                                <span className="font-mono text-[8px] text-emerald-400">
                                    ● Verified
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-8 -right-2 w-36 rounded-2xl border-2 border-[#D99B4B]/70 bg-[#131210] p-3 shadow-2xl sm:-right-6 sm:w-48">
                <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-[#D99B4B]/40" />
                <div className="space-y-2.5">
                    <div className="h-2 w-1/2 rounded-full bg-[#D99B4B]/40" />
                    <div className="h-4 w-3/4 rounded bg-[#D99B4B]/70" />
                    <div className="flex h-11 items-center justify-center gap-1.5 rounded-lg border border-[#D99B4B]/30 bg-[#22201C]">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#D99B4B]">
                            Instant Booking
                        </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-[#8A857B]/30" />
                </div>
            </div>
        </div>
    );
}

function HomePage() {
    const location = useLocation();
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const spotlightRef = useRef(null);
    const headlineRef = useRef(null);
    const italicHeadlineRef = useRef(null);
    const subheadingRef = useRef(null);
    const ctasRef = useRef(null);
    const quoteRef = useRef(null);
    const mockupRef = useRef(null);
    const badgeRef = useRef(null);
    const progressRef = useRef(null);
    const featureSectionRef = useRef(null);
    const projectsSectionRef = useRef(null);
    const teamSectionRef = useRef(null);
    const partnerSectionRef = useRef(null);
    const processSectionRef = useRef(null);
    const ctaSectionRef = useRef(null);
    const startProjectRef = useRef(null);

    useEffect(() => {
        if (location.hash === "#process") {
            setTimeout(() => {
                const section = document.getElementById("process");

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 100);
        }
    }, [location]);

    useLayoutEffect(() => {
        const hero = heroRef.current;
        let removePointerListener = () => { };
        const context = gsap.context(() => {
            const words = gsap.utils.toArray(".hero-word");
            const ctas = gsap.utils.toArray(".hero-cta");
            const leadCount = { value: 0 };

            if (prefersReducedMotion) {
                gsap.fromTo(
                    [headlineRef.current, subheadingRef.current, ctasRef.current, quoteRef.current, mockupRef.current],
                    { autoAlpha: 0 },
                    { autoAlpha: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" },
                );
                return;
            }

            const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
            timeline
                .fromTo(words, { yPercent: 110 }, { yPercent: 0, duration: 0.7, stagger: 0.05, ease: "power3.out" })
                .fromTo(italicHeadlineRef.current, { autoAlpha: 0.65 }, { autoAlpha: 1, duration: 0.55 }, "-=0.15")
                .fromTo(subheadingRef.current, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, "+=0.15")
                .fromTo(ctas, { scale: 0.9, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.2")
                .fromTo(quoteRef.current, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6 }, "-=0.2")
                .fromTo(mockupRef.current, { y: 40, rotateX: 8, autoAlpha: 0, transformPerspective: 900 }, { y: 0, rotateX: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out" }, "-=0.1")
                .to(leadCount, {
                    value: 184, duration: 0.7, ease: "power3.out", onUpdate: () => {
                        const value = Math.round(leadCount.value);
                        const count = mockupRef.current?.querySelector("[data-lead-count]");
                        if (count) count.textContent = value;
                        if (progressRef.current) progressRef.current.style.setProperty("--progress", `${(value / 184) * 100}%`);
                    }
                }, "-=0.35");

            gsap.to(mockupRef.current, { y: -5, rotationZ: 0.5, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: timeline.duration() });
            gsap.to(".hero-grid-drift", { x: 32, y: 32, duration: 22, repeat: -1, ease: "none" });

            const onPointerMove = (event) => {
                const bounds = hero.getBoundingClientRect();
                gsap.to(spotlightRef.current, { x: event.clientX - bounds.left, y: event.clientY - bounds.top, duration: 0.6, ease: "power2.out" });
            };
            if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                hero.addEventListener("pointermove", onPointerMove);
                removePointerListener = () => hero.removeEventListener("pointermove", onPointerMove);
            }
        }, heroRef);

        return () => {
            removePointerListener();
            context.revert();
        };
    }, []);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const cards = gsap.utils.toArray(".feature-card");
            const icons = gsap.utils.toArray(".feature-icon");

            if (prefersReducedMotion) {
                gsap.fromTo(cards, { autoAlpha: 0 }, {
                    autoAlpha: 1, duration: 0.55, stagger: 0.15, ease: "power3.out", scrollTrigger: {
                        trigger: featureSectionRef.current,
                        start: "top 82%",
                        toggleActions: "play none none none",
                    }
                });
                return;
            }

            gsap.fromTo(
                cards,
                { y: 34, rotateX: 9, scale: 0.97, autoAlpha: 0, transformPerspective: 900 },
                {
                    y: 0,
                    rotateX: 0,
                    scale: 1,
                    autoAlpha: 1,
                    duration: 0.7,
                    stagger: 0.14,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: featureSectionRef.current,
                        start: "top 82%",
                        toggleActions: "play none none none",
                    },
                },
            );
            gsap.fromTo(
                icons,
                { rotation: -8, scale: 0.78, autoAlpha: 0 },
                {
                    rotation: 0, scale: 1, autoAlpha: 1, duration: 0.65, stagger: 0.14, ease: "power3.out", scrollTrigger: {
                        trigger: featureSectionRef.current,
                        start: "top 82%",
                        toggleActions: "play none none none",
                    }
                },
            );
        }, featureSectionRef);

        return () => context.revert();
    }, []);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const badge = teamSectionRef.current.querySelector(".team-badge");
            const words = gsap.utils.toArray(".team-word");
            const italic = teamSectionRef.current.querySelector(".team-italic");
            const subheading = teamSectionRef.current.querySelector(".team-subheading");
            const cards = gsap.utils.toArray(".team-card");
            const photos = gsap.utils.toArray(".team-photo");
            const directBadges = gsap.utils.toArray(".team-direct-badge");
            const roles = gsap.utils.toArray(".team-role");
            const bios = gsap.utils.toArray(".team-bio");

            if (prefersReducedMotion) {
                gsap.set(italic, { autoAlpha: 1, clearProps: "textShadow" });
                gsap.set([photos, directBadges, roles, bios], { clearProps: "clipPath,filter,transform" });
                gsap.set(photos, { autoAlpha: 1 });
                gsap.set(directBadges, { autoAlpha: 1 });
                gsap.fromTo(
                    [badge, teamSectionRef.current.querySelector(".team-heading"), subheading, ...cards],
                    { autoAlpha: 0 },
                    {
                        autoAlpha: 1,
                        duration: 0.55,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: teamSectionRef.current,
                            start: "top 78%",
                            toggleActions: "play none none none",
                        },
                    },
                );
                return;
            }

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: teamSectionRef.current,
                    start: "top 78%",
                    toggleActions: "play none none none",
                },
            });

            timeline
                .fromTo(badge, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.3, ease: "power3.out" })
                .fromTo(words, { yPercent: 110 }, { yPercent: 0, duration: 0.42, stagger: 0.035, ease: "power3.out" }, "+=0.04")
                .fromTo(italic, { autoAlpha: 0, textShadow: "0 0 0 rgba(217, 155, 75, 0)" }, { autoAlpha: 1, textShadow: "0 0 20px rgba(217, 155, 75, 0.28)", duration: 0.32, ease: "power3.out" }, "-=0.06")
                .fromTo(subheading, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.32, ease: "power3.out" }, "+=0.06")
                .fromTo(cards, { y: 14, scale: 0.94, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, duration: 0.48, stagger: 0.1, ease: "power3.out" }, "+=0.06")
                .fromTo(photos, { clipPath: "inset(100% 0 0 0)", filter: "grayscale(1)" }, { clipPath: "inset(0% 0 0 0)", filter: "grayscale(0)", duration: 0.42, stagger: 0.1, ease: "power3.out" }, "-=0.38")
                .fromTo(directBadges, { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.34, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.08")
                .fromTo(roles, { y: 6, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.28, stagger: 0.1, ease: "power3.out" }, "-=0.12")
                .fromTo(bios, { y: 6, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.28, stagger: 0.1, ease: "power3.out" }, "-=0.1");
        }, teamSectionRef);

        return () => context.revert();
    }, []);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const panel = partnerSectionRef.current.querySelector(".partner-panel");
            const badge = partnerSectionRef.current.querySelector(".partner-badge");
            const heading = partnerSectionRef.current.querySelector(".partner-heading");
            const copy = partnerSectionRef.current.querySelector(".partner-copy");
            const checks = gsap.utils.toArray(".partner-check");
            const checkIcons = gsap.utils.toArray(".partner-check-icon");
            const checkLabels = gsap.utils.toArray(".partner-check-label");
            const partnerCard = partnerSectionRef.current.querySelector(".partner-card");
            const logo = partnerSectionRef.current.querySelector(".partner-logo");
            const nestedCard = partnerSectionRef.current.querySelector(".partner-nested-card");
            const partnerPhoto = partnerSectionRef.current.querySelector(".partner-photo");
            const partnerRole = partnerSectionRef.current.querySelector(".partner-role");
            const verified = partnerSectionRef.current.querySelector(".partner-verified");
            const verifiedIcon = partnerSectionRef.current.querySelector(".partner-verified-icon");

            if (prefersReducedMotion) {
                gsap.set([...checkIcons, verifiedIcon], { strokeDashoffset: 0 });
                gsap.set(partnerPhoto, { autoAlpha: 1, clearProps: "clipPath,filter,transform" });
                gsap.fromTo(
                    [badge, heading, copy, ...checks, partnerCard],
                    { autoAlpha: 0 },
                    {
                        autoAlpha: 1,
                        duration: 0.55,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: partnerSectionRef.current,
                            start: "top 78%",
                            toggleActions: "play none none none",
                        },
                    },
                );
                return;
            }

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: partnerSectionRef.current,
                    start: "top 78%",
                    toggleActions: "play none none none",
                },
            });
            timeline
                .fromTo(badge, { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.3, ease: "power3.out" })
                .fromTo(heading, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.36, ease: "power3.out" }, "+=0.04")
                .fromTo(copy, { y: 8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.32, ease: "power3.out" }, "-=0.16")
                .fromTo(partnerCard, { y: 22, rotationY: 6, autoAlpha: 0, transformPerspective: 900 }, { y: 0, rotationY: 0, autoAlpha: 1, duration: 0.48, ease: "power3.out" }, "-=0.3")
                .fromTo(logo, { y: 8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.3, ease: "power3.out" }, "-=0.32")
                .fromTo(nestedCard, { scale: 0.95, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.36, ease: "power3.out" }, "-=0.12")
                .fromTo(
                    partnerPhoto,
                    { clipPath: "inset(100% 0 0 0)", filter: "grayscale(1)" },
                    {
                        clipPath: "inset(0% 0 0 0)",
                        filter: "grayscale(0)",
                        duration: 0.42,
                        ease: "power3.out",
                        onComplete: () => {
                            gsap.set(partnerPhoto, { clearProps: "clipPath,filter,transform" });
                        }
                    },
                    "-=0.2"
                )
                .fromTo(partnerRole, { y: 6, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.28, ease: "power3.out" }, "-=0.1");

            checks.forEach((check, index) => {
                timeline
                    .fromTo(checkIcons[index], { strokeDashoffset: 20, autoAlpha: 0 }, { strokeDashoffset: 0, autoAlpha: 1, duration: 0.28, ease: "power3.out" }, `-=${index ? 0.12 : 0.04}`)
                    .fromTo(checkLabels[index], { y: 4, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.24, ease: "power3.out" }, "-=0.12");
            });

            timeline
                .fromTo(verified, { scale: 1.15, rotation: -4, autoAlpha: 0 }, { scale: 1, rotation: 0, autoAlpha: 1, duration: 0.34, ease: "back.out(1.8)" }, "+=0.02")
                .fromTo(verifiedIcon, { strokeDashoffset: 20, autoAlpha: 0 }, { strokeDashoffset: 0, autoAlpha: 1, duration: 0.24, ease: "power3.out" }, "-=0.2");
        }, partnerSectionRef);

        return () => context.revert();
    }, []);

    useLayoutEffect(() => {
        const cta = ctaSectionRef.current;
        let removeMagneticListeners = () => { };
        const context = gsap.context(() => {
            const words = gsap.utils.toArray(".cta-word");
            const buttons = gsap.utils.toArray(".cta-button");
            const checks = gsap.utils.toArray(".cta-check");
            const labels = gsap.utils.toArray(".cta-badge-label");
            const badges = gsap.utils.toArray(".cta-trust-badge");

            if (prefersReducedMotion) {
                gsap.set(checks, { strokeDashoffset: 0 });
                gsap.fromTo(
                    [cta.querySelector(".cta-heading"), cta.querySelector(".cta-copy"), ...buttons, ...badges],
                    { autoAlpha: 0 },
                    {
                        autoAlpha: 1, duration: 0.65, stagger: 0.1, ease: "power3.out", scrollTrigger: {
                            trigger: cta,
                            start: "top 78%",
                            toggleActions: "play none none none",
                        }
                    },
                );
                return;
            }

            gsap.to(cta, {
                backgroundPosition: "100% 50%",
                duration: 18,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            const entrance = gsap.timeline({
                scrollTrigger: {
                    trigger: cta,
                    start: "top 78%",
                    toggleActions: "play none none none",
                },
            });
            entrance
                .fromTo(words, { yPercent: 110 }, { yPercent: 0, duration: 0.7, stagger: 0.05, ease: "power3.out" })
                .fromTo(cta.querySelector(".cta-copy"), { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out" }, "-=0.15")
                .fromTo(buttons, { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.1, ease: "power3.out" }, "-=0.2");
            badges.forEach((badge, index) => {
                entrance
                    .fromTo(checks[index], { strokeDashoffset: 20, autoAlpha: 0 }, { strokeDashoffset: 0, autoAlpha: 1, duration: 0.4, ease: "power3.out" }, `+=${index ? 0.15 : 0.1}`)
                    .fromTo(labels[index], { x: -6, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.3, ease: "power3.out" }, "-=0.12");
            });

            const button = startProjectRef.current;
            const onPointerMove = (event) => {
                const bounds = button.getBoundingClientRect();
                const offsetX = Math.max(-18, Math.min(18, (event.clientX - (bounds.left + bounds.width / 2)) * 0.22));
                const offsetY = Math.max(-18, Math.min(18, (event.clientY - (bounds.top + bounds.height / 2)) * 0.22));
                gsap.to(button, { x: offsetX, y: offsetY, duration: 0.35, ease: "power3.out" });
            };
            const onPointerLeave = () => gsap.to(button, { x: 0, y: 0, duration: 0.6, ease: "power3.out" });
            if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                button.addEventListener("pointermove", onPointerMove);
                button.addEventListener("pointerleave", onPointerLeave);
                removeMagneticListeners = () => {
                    button.removeEventListener("pointermove", onPointerMove);
                    button.removeEventListener("pointerleave", onPointerLeave);
                };
            }
        }, ctaSectionRef);

        return () => {
            removeMagneticListeners();
            context.revert();
        };
    }, []);

    const handleStartProjectClick = (event) => {
        if (prefersReducedMotion) return;

        event.preventDefault();
        const button = event.currentTarget;
        const bounds = button.getBoundingClientRect();
        const ripple = document.createElement("span");
        ripple.className = "cta-ripple";
        ripple.style.left = `${event.clientX - bounds.left}px`;
        ripple.style.top = `${event.clientY - bounds.top}px`;
        button.appendChild(ripple);
        gsap.fromTo(ripple, { scale: 0, autoAlpha: 0.45 }, {
            scale: 16, autoAlpha: 0, duration: 0.42, ease: "power2.out", onComplete: () => {
                ripple.remove();
                navigate('/contact#enquiry-form');
            }
        });
    };

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const words = gsap.utils.toArray(".projects-word");
            const cards = gsap.utils.toArray(".project-card");

            if (prefersReducedMotion) {
                gsap.fromTo(
                    [...words, ...cards],
                    { autoAlpha: 0 },
                    {
                        autoAlpha: 1,
                        duration: 0.55,
                        stagger: 0.08,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: projectsSectionRef.current,
                            start: "top 78%",
                            toggleActions: "play none none none",
                        },
                    },
                );
                return;
            }

            gsap.fromTo(words, { yPercent: 110 }, {
                yPercent: 0,
                duration: 0.65,
                stagger: 0.05,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: projectsSectionRef.current,
                    start: "top 78%",
                    toggleActions: "play none none none",
                },
            });
            gsap.fromTo(cards, {
                y: (index) => (index % 2 === 0 ? 10 : 2),
                scale: 0.92,
                autoAlpha: 0,
                rotateX: 6,
                transformPerspective: 900,
            }, {
                y: 0,
                scale: 1,
                autoAlpha: 1,
                rotateX: 0,
                duration: 0.75,
                stagger: { each: 0.18, grid: "auto", from: "start" },
                ease: "power3.out",
                scrollTrigger: {
                    trigger: projectsSectionRef.current.querySelector(".project-grid"),
                    start: "top 82%",
                    toggleActions: "play none none none",
                },
            });
        }, projectsSectionRef);

        return () => context.revert();
    }, []);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const markers = gsap.utils.toArray(".process-marker");
            const dormantOverlays = gsap.utils.toArray(".process-marker-dormant");
            const pings = gsap.utils.toArray(".process-ping");
            const cards = gsap.utils.toArray(".process-card");
            const badges = gsap.utils.toArray(".process-badge");
            const deliverables = gsap.utils.toArray(".process-deliverable");

            if (prefersReducedMotion) {
                gsap.set(markers, { autoAlpha: 1 });
                gsap.set(dormantOverlays, { autoAlpha: 0 });
                gsap.fromTo(
                    cards,
                    { y: 12, autoAlpha: 0 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.55,
                        stagger: 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: processSectionRef.current,
                            start: "top 78%",
                            toggleActions: "play none none none",
                        },
                    },
                );
                return;
            }

            gsap.fromTo(cards, {
                yPercent: (index) => (index % 2 === 0 ? -1.5 : 1.5),
            }, {
                yPercent: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: processSectionRef.current,
                    start: "top 72%",
                    toggleActions: "play none none none",
                },
            });

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: processSectionRef.current,
                    start: "top 72%",
                    end: "bottom 78%",
                    scrub: true,
                },
            });

            markers.forEach((marker, index) => {
                const point = index / markers.length;
                timeline.to(marker, { autoAlpha: 1, scale: 1.08, duration: 0.08, ease: "power2.out" }, point);
                timeline.to(dormantOverlays[index], { autoAlpha: 0, duration: 0.08, ease: "power2.out" }, point);
                timeline.to(marker, { scale: 1, duration: 0.12, ease: "power2.out" }, point + 0.08);
                timeline.fromTo(pings[index], { scale: 0.65, autoAlpha: 0.75 }, { scale: 2.2, autoAlpha: 0, duration: 0.28, ease: "power2.out" }, point);
                timeline.fromTo(cards[index], { x: -30, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.18, ease: "power3.out" }, point + 0.06);
                timeline.fromTo(badges[index], { rotationX: -75, scale: 0.8, autoAlpha: 0 }, { rotationX: 0, scale: 1, autoAlpha: 1, duration: 0.45, ease: "power3.out" }, point + 0.12);
                timeline.fromTo(deliverables[index], { y: 8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.14, ease: "power3.out" }, point + 0.3);
            });
        }, processSectionRef);

        return () => context.revert();
    }, []);

    const handleStartProject = (e) => {
        e.preventDefault();
        navigate('/contact#enquiry-form');
    };

    return (
        <div className="bg-[#131210] text-[#F6F1E8]">
            {/* Hero Section */}
            <section ref={heroRef} className="wireframe-grid hero-section relative overflow-hidden bg-[#131210] px-5 pb-14 pt-14 sm:px-8 md:pb-20 md:pt-20">
                <div ref={spotlightRef} className="hero-spotlight pointer-events-none absolute left-0 top-0 z-0" />
                <div className="hero-grid-drift pointer-events-none absolute inset-0 z-0" />
                <div className="pointer-events-none absolute left-1/2 top-1/4 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#D99B4B]/10 blur-[130px]" />
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <h1 ref={headlineRef} className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                        <span className="hero-word-clip"><span className="hero-word">Custom</span></span>{" "}
                        <span className="hero-word-clip"><span className="hero-word">Websites</span></span>{" "}
                        <span className="hero-word-clip"><span className="hero-word">That</span></span>
                        <br />
                        <span ref={italicHeadlineRef} className="text-[#D99B4B] italic">
                            <span className="hero-word-clip"><span className="hero-word">Actually</span></span>{" "}
                            <span className="hero-word-clip"><span className="hero-word">Bring</span></span>{" "}
                            <span className="hero-word-clip"><span className="hero-word">You</span></span>{" "}
                            <span className="hero-word-clip"><span className="hero-word">Leads.</span></span>
                        </span>
                    </h1>
                    <p ref={subheadingRef} className="mx-auto mb-7 mt-5 max-w-2xl text-base leading-relaxed text-[#8A857B] sm:text-lg md:text-xl">
                        We handle your design, custom code, and Google search rankings under
                        one roof so you can focus on running your business.
                    </p>
                    <div ref={ctasRef} className="mb-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={handleStartProject}
                            className="hero-cta flex w-full items-center justify-center gap-2 rounded-lg bg-[#D99B4B] px-9 py-4 text-base font-semibold text-[#131210] transition-colors hover:bg-[#ECC187] sm:w-auto"
                        >
                            Start a project <ArrowRight className="h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/our-work")}
                            className="hero-cta w-full rounded-lg border border-[#E8DECB]/30 bg-[#22201C]/30 px-8 py-4 text-base font-semibold transition-colors hover:border-[#D99B4B]/60 hover:bg-[#22201C] sm:w-auto"
                        >
                            See our work
                        </button>
                    </div>
                    <p ref={quoteRef} className="mx-auto mb-9 max-w-lg text-sm italic tracking-wide text-[#8A857B]">
                        “We learn how your business actually makes money first, then build a
                        custom online engine to help you scale it.”
                    </p>
                    <HeroMockup mockupRef={mockupRef} badgeRef={badgeRef} progressRef={progressRef} />
                </div>
            </section >

            {/* Value Pillars Section */}
            < section ref={featureSectionRef} className="feature-section border-t border-[#D99B4B]/20 bg-[#1A1916] px-5 py-14 sm:px-8 md:py-16" >
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
                    {[
                        [
                            BarChart3,
                            "01 / Conversion",
                            "Conversion-first design",
                            "Pages built to turn visitors into leads, supported by SEO and content that brings them there.",
                        ],
                        [
                            Search,
                            "02 / Discovery",
                            "Built around how people find you",
                            "Your digital presence works across Google, social, and referrals seamlessly.",
                        ],
                        [
                            Zap,
                            "03 / Architecture",
                            "Strategy behind every decision",
                            "Design, marketing, and UX work as one system, not three separate services.",
                        ],
                    ].map(([Icon, label, title, description]) => (
                        <div
                            key={label}
                            className="feature-card group rounded-2xl border border-[#D99B4B]/20 bg-[#1C1B18] p-6"
                        >
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <div className="feature-icon flex h-10 w-10 items-center justify-center rounded-lg border border-[#D99B4B]/30 bg-[#D99B4B]/15 text-[#D99B4B]">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <span className="rounded border border-[#D99B4B]/20 bg-[#D99B4B]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[#D99B4B]">
                                    {label}
                                </span>
                            </div>
                            <h3 className="mb-3 font-serif text-xl font-semibold text-[#D99B4B] sm:text-2xl">
                                {title}
                            </h3>
                            <p className="text-sm leading-relaxed text-[#8A857B]">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </section >

            {/* Projects Catalog Section */}
            < section
                ref={projectsSectionRef}
                id="projects"
                className="bg-[#F6F1E8] px-5 py-14 text-[#181614] sm:px-8 md:py-20"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="projects-heading mx-auto mb-10 max-w-2xl text-center">
                        <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                            Six kinds of projects.
                            <br />
                            <span className="projects-word-clip text-[#B87C2B] italic">
                                <span className="projects-word">One</span>{" "}
                                <span className="projects-word">team</span>{" "}
                                <span className="projects-word">building</span>{" "}
                                <span className="projects-word">all</span>{" "}
                                <span className="projects-word">of</span>{" "}
                                <span className="projects-word">them.</span>
                            </span>
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-[#181614]/70 sm:text-base">
                            Pick the one closest to what you need, or tell us what you&apos;re
                            picturing and we&apos;ll help you figure out the rest.
                        </p>
                    </div>
                    <div className="project-grid grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map(
                            ({ icon: Icon, title, slug, label, description }) => (
                                <article
                                    key={title}
                                    className="project-card group flex min-h-[280px] flex-col justify-between rounded-2xl border border-[#E8DECB] bg-white p-6 sm:p-7"
                                >
                                    <div>
                                        <div className="mb-5 flex items-center justify-between gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F6F1E8] text-[#B87C2B]">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <span className="rounded border border-[#E8DECB] bg-[#F5EFE6] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[#181614]/70">
                                                {label}
                                            </span>
                                        </div>
                                        <h3 className="mb-3 font-serif text-xl font-semibold text-[#181614] transition-colors group-hover:text-[#B87C2B] sm:text-2xl">
                                            {title}
                                        </h3>
                                        <p className="mb-6 text-sm leading-relaxed text-[#181614]/70">
                                            {description}
                                        </p>
                                    </div>
                                    <a
                                        href={`/our-work#${slug}`}
                                        className="flex items-center border-t border-[#E8DECB]/70 pt-4 text-sm font-bold text-[#B87C2B]"
                                    >
                                        Read more{" "}
                                        <ArrowRight className="project-arrow ml-1.5 h-4 w-4" />
                                    </a>
                                </article>
                            ),
                        )}
                    </div>
                </div>
            </section >

            {/* Team Section */}
            < section
                ref={teamSectionRef}
                id="team"
                className="border-t border-[#E8DECB] bg-[#F0EBD9] px-5 py-14 text-[#181614] sm:px-8 md:py-20"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
                        <span className="team-badge mb-4 inline-flex items-center gap-2 rounded-full border border-[#D99B4B]/30 bg-[#D99B4B]/15 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#B87C2B]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#B87C2B]" />
                            Direct technical access
                        </span>
                        <h2 className="team-heading font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                            <span className="team-word-clip"><span className="team-word">The</span></span>{" "}
                            <span className="team-word-clip"><span className="team-word">team</span></span>{" "}
                            <span className="team-word-clip"><span className="team-word">building</span></span>{" "}
                            <span className="team-italic text-[#B87C2B] italic">your platform</span>
                        </h2>
                        <p className="team-subheading mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#181614]/70 sm:text-lg">
                            Direct access to the engineers designing, coding, and scaling your platform.
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                        {[
                            {
                                name: "Gopal Navetia",
                                role: "Lead Full-Stack Architect",
                                badge: "Direct lead",
                                image: "/gopal.png",
                                bio: "Builds dependable digital systems from the first wireframe to the final deployment, with a focus on speed, clarity, and measurable growth.",
                            },
                            {
                                name: "Vatsal Gupta",
                                role: "Product & Experience Engineer",
                                badge: "Direct lead",
                                image: "/vatsal.png",
                                bio: "Shapes the product experience around real customer journeys, turning complex requirements into interfaces people can use immediately.",
                            },
                        ].map((member) => (
                            <article
                                key={member.name}
                                className="team-card group rounded-2xl border border-[#E8DECB] bg-white p-5 sm:p-7"
                            >
                                <div className="team-photo-frame mb-6 aspect-square overflow-hidden rounded-xl border border-[#E8DECB] bg-[#F6F1E8]">
                                    <img
                                        src={member.image}
                                        alt={`${member.name} - ${member.role}`}
                                        className={`team-photo h-full w-full object-cover ${member.name === "Vatsal" ? "scale-[1.06]" : ""}`}
                                    />
                                </div>
                                <div className="mb-3 flex items-start justify-between gap-3">
                                    <h3 className="font-serif text-2xl font-bold text-[#181614]">
                                        {member.name}
                                    </h3>
                                    <span className="team-direct-badge shrink-0 rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-xs font-semibold text-emerald-700">
                                        {member.badge}
                                    </span>
                                </div>
                                <p className="team-role mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#B87C2B]">
                                    {member.role}
                                </p>
                                <p className="team-bio text-sm leading-relaxed text-[#181614]/70">
                                    {member.bio}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section >

            {/* Partner Section */}
            < section
                ref={partnerSectionRef}
                id="partner"
                className="bg-[#F0EBD9] px-5 pb-14 text-[#181614] sm:px-8 md:pb-20"
            >
                <div className="partner-panel mx-auto max-w-5xl rounded-3xl border border-[#E8DECB] bg-[#F6F1E8] p-6 transition-shadow duration-500 hover:shadow-xl sm:p-8 lg:p-10">
                    <div className="grid items-center gap-8 lg:grid-cols-7 lg:gap-12">
                        <div className="partner-copy-column lg:col-span-4">
                            <span className="partner-badge mb-4 inline-flex items-center gap-2 rounded-full border border-[#D99B4B]/30 bg-[#D99B4B]/15 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#B87C2B]">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#B87C2B]" />
                                Strategic alliance · Partnership with Growthonixs
                            </span>
                            <h3 className="partner-heading font-serif text-2xl font-bold leading-tight sm:text-3xl">
                                Development meets digital marketing
                            </h3>
                            <p className="partner-copy mt-3 text-sm leading-relaxed text-[#181614]/70 sm:text-base">
                                For projects that need more than a website, AnchorWorks partners
                                directly with Growthonixs. Together, we pair custom engineering
                                with complete digital marketing under one roof.
                            </p>
                            <div className="mt-5 grid grid-cols-1 gap-3 border-t border-[#E8DECB] pt-4 sm:grid-cols-3">
                                {["SEO & Google Rankings", "AEO Optimization", "Video Production"].map((item) => (
                                    <div key={item} className="partner-check flex items-center gap-2 font-mono text-xs font-medium text-[#181614]/80 transition-transform duration-300 hover:translate-x-1">
                                        <Check className="partner-check-icon h-4 w-4 shrink-0 text-emerald-600" />
                                        <span className="partner-check-label">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Partner Section JSX Snippet */}
                        <div className="partner-card-column lg:col-span-3">
                            <div className="partner-card group rounded-2xl border border-[#E8DECB] bg-[#FBF8F3] p-6 text-center shadow-sm transition-all duration-300 hover:border-[#B87C2B]/40 hover:shadow-xl">
                                <div className="partner-logo mb-4 flex items-center justify-center gap-2">
                                    <img
                                        src="/partnerLogo.png"
                                        alt="Partner Logo - Growthonixs"
                                        className="partner-logo-img h-9 w-9 object-cover rounded-lg shadow-sm"
                                    />
                                    <div className="text-left">
                                        <div className="font-serif text-lg font-bold leading-tight">GROWTHONICX</div>
                                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#8A857B]">
                                            Digital marketing &amp; growth agency
                                        </div>
                                    </div>
                                </div>
                                <div className="partner-nested-card mb-4 flex aspect-[16/10] w-full flex-col items-center justify-center rounded-xl border border-[#E8DECB] bg-white p-4 shadow-sm">
                                    <div className="partner-photo-frame aspect-square overflow-hidden rounded-xl border border-[#E8DECB] bg-[#F6F1E8]">
                                        <img
                                            src="/kunal.png"
                                            alt="Kunal - Founder & CEO of Growthonixs"
                                            className="partner-photo h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 flex items-start justify-between gap-3">
                                    <h3 className="font-serif text-2xl font-bold text-[#181614] transition-colors group-hover:text-[#B87C2B]">
                                        Kunal Sahni
                                    </h3>
                                    <span className="partner-verified inline-flex items-center gap-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-600">
                                        <Check className="partner-verified-icon h-3.5 w-3.5" />
                                        Verified partner
                                    </span>
                                </div>
                                <p className="partner-role mb-3 font-mono text-xs font-semibold uppercase justify-self-start tracking-wider text-[#B87C2B]">
                                    Growth & Performance Marketing Lead
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Process Section */}
            < section
                ref={processSectionRef}
                id="process"
                className="border-t border-[#E8DECB] bg-[#F0EBD9] px-5 py-14 text-[#181614] sm:px-8 md:py-20"
            >
                <div className="mx-auto max-w-4xl">
                    <div className="mb-10">
                        <span className="mb-3 inline-block rounded bg-[#E8DECB]/60 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider">
                            Production Architecture
                        </span>
                        <h2 className="mb-4 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
                            How a project actually happens
                        </h2>
                        <p className="max-w-2xl text-base text-[#181614]/70 sm:text-lg">
                            The same four phases, whether it&apos;s a gym system or a two-page
                            site — nothing skipped, nothing assumed.
                        </p>
                    </div>
                    <div className="process-timeline relative space-y-5 sm:pl-10">
                        {processSteps.map((step, index) => (
                            <div
                                key={step.phase}
                                className="process-card relative rounded-2xl border border-[#E8DECB] bg-[#FBF8F3] p-6 shadow-sm transition-all hover:border-[#B87C2B] hover:shadow-lg sm:p-7"
                            >
                                <div className="process-marker mb-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#F0EBD9] font-mono text-xs font-bold text-white sm:absolute sm:-left-10 sm:top-8 sm:mb-0">
                                    <span className="process-marker-dormant absolute inset-0 rounded-full bg-[#8A857B]" />
                                    <span className="process-ping absolute inset-0 rounded-full border-2 border-[#D4923A]" />
                                    <span className="relative z-10">0{index + 1}</span>
                                </div>
                                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                                    <h3 className="font-serif text-xl font-semibold sm:text-2xl">
                                        {step.title}
                                    </h3>
                                    <span className="process-badge rounded-full bg-[#D99B4B]/15 px-3 py-1 font-mono text-xs font-semibold text-[#B87C2B]">
                                        {step.phase}
                                    </span>
                                </div>
                                <p className="mb-4 text-sm leading-relaxed text-[#181614]/80 sm:text-base">
                                    {step.description}
                                </p>
                                <div className="process-deliverable flex flex-wrap items-center gap-2 border-t border-[#E8DECB]/70 pt-3 font-mono text-xs text-[#181614]/70">
                                    <span className="font-bold text-[#B87C2B]">
                                        ● Deliverable:
                                    </span>
                                    {step.deliverable}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Call To Action Section */}
            < section
                ref={ctaSectionRef}
                id="contact"
                className="cta-section px-5 py-14 text-[#181614] sm:px-8 md:py-20"
            >
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="cta-heading font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                        <span className="cta-word-clip"><span className="cta-word">Got</span></span>{" "}
                        <span className="cta-word-clip"><span className="cta-word">a</span></span>{" "}
                        <span className="cta-word-clip"><span className="cta-word">project</span></span>{" "}
                        <span className="cta-word-clip"><span className="cta-word">worth</span></span>{" "}
                        <span className="cta-word-clip"><span className="cta-word">building</span></span>{" "}
                        <span className="cta-word-clip"><span className="cta-word">properly?</span></span>
                    </h2>
                    <p className="cta-copy mx-auto mb-7 mt-4 max-w-2xl text-base leading-relaxed text-[#181614]/90 sm:text-lg md:text-xl">
                        Tell us what you&apos;re trying to fix or build — we&apos;ll tell
                        you honestly whether it needs a website, a system, or just a better
                        one.
                    </p>
                    <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href="/contact#enquiry-form"
                            ref={startProjectRef}
                            onClick={handleStartProjectClick}
                            className="cta-button cta-magnetic relative isolate flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#181614] px-9 py-4 font-bold text-[#F6F1E8] transition-colors hover:bg-black sm:w-auto"
                        >
                            Start a project <ArrowRight className="h-5 w-5 text-[#D99B4B]" />
                        </a>
                        <a
                            href={`https://wa.me/${MY_NUMBER}?text=Hello%20Anchorworks,%20I'd%20like%20to%20discuss%20a%20project`}
                            target="_blank"
                            rel="noreferrer"
                            className="cta-button cta-consult w-full rounded-xl border border-[#181614]/30 bg-[#181614]/10 px-7 py-4 text-sm font-bold transition-colors hover:bg-[#181614]/20 sm:w-auto"
                        >
                            Direct WhatsApp / Consult
                        </a>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-[#181614]/80 sm:gap-8">
                        {[
                            "Direct Founder Access",
                            "24h Response Guarantee",
                            "Zero Vendor Lock-In",
                        ].map((item) => (
                            <span key={item} className="cta-trust-badge flex items-center gap-1.5">
                                <Check className="cta-check h-3.5 w-3.5" />
                                <span className="cta-badge-label">{item}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </section >
        </div >
    );
}

export default HomePage;
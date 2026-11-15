import { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { gsap, reveal, prefersReducedMotion } from "../motion";
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

function HeroMockup({ mockupRef }) {
    return (
        <div ref={mockupRef} className="pointer-events-none relative mx-auto max-w-2xl select-none pt-8">
            <div className="absolute -left-3 top-0 z-10 flex items-center gap-3 rounded-xl border border-[#D99B4B]/50 bg-[#1E1C18]/95 px-4 py-2.5 shadow-xl sm:-left-8">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[#D99B4B]/20 text-[#D99B4B]">
                    <span className="hero-badge-progress absolute inset-0 rounded-lg" />
                    <BarChart3 className="h-4 w-4" />
                </div>
                <div>
                    <div className="font-mono text-sm font-bold leading-tight text-[#D99B4B]">
                        +<span data-lead-count>0</span>% Avg Lead Surge
                    </div>
                    <div className="font-mono text-xs uppercase tracking-wider text-[#B8B1A5]">
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
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
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
                            <div className="flex h-7 w-24 items-center justify-center rounded-md bg-[#D99B4B] text-xs font-bold text-[#131210]">
                                GET STARTED
                            </div>
                            <div className="flex h-7 w-20 items-center justify-center rounded-md border border-[#D99B4B]/40 font-mono text-xs text-[#D99B4B]/80">
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
                                <span className="font-mono text-xs uppercase tracking-wider text-[#B8B1A5]">
                                    {index ? "Speed" : "Conversion"}
                                </span>
                                <span className="font-mono text-xl font-bold text-[#D99B4B]">
                                    {value}
                                </span>
                                <span className="font-mono text-xs text-emerald-400">
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
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D99B4B]">
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
    const heroRef = useRef(null);
        const headlineRef = useRef(null);
    const italicHeadlineRef = useRef(null);
    const subheadingRef = useRef(null);
    const ctasRef = useRef(null);
    const quoteRef = useRef(null);
    const mockupRef = useRef(null);
            const featureSectionRef = useRef(null);
    const projectsSectionRef = useRef(null);
    const teamSectionRef = useRef(null);
    const partnerSectionRef = useRef(null);
    const processSectionRef = useRef(null);
    const ctaSectionRef = useRef(null);
    
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

    useEffect(() => {
        const context = gsap.context(() => {
            const count = heroRef.current?.querySelector("[data-lead-count]");
            if (prefersReducedMotion) {
                if (count) count.textContent = "184";
                return;
            }
            gsap.fromTo(".hero-content", { opacity: 1, y: 10 }, {
                opacity: 1, y: 0, duration: 0.4, ease: "power2.out",
            });
            const leadCount = { value: 0 };
            gsap.to(leadCount, { value: 184, duration: 0.6, ease: "power2.out", onUpdate: () => {
                const currentCount = heroRef.current?.querySelector("[data-lead-count]");
                if (currentCount) currentCount.textContent = Math.round(leadCount.value);
            }});
        }, heroRef);
        return () => context.revert();
    }, []);

    useEffect(() => {
        const context = gsap.context(() => {
            [".feature-card", ".project-card", ".team-card", ".partner-card", ".process-card",
            ".projects-heading", ".team-heading"].forEach((selector) => reveal(selector, document));
        }, heroRef);
        return () => context.revert();
    }, []);

    return (
        <div className="bg-[#131210] text-[#F6F1E8]">
            {/* Hero Section */}
            <section ref={heroRef} className="wireframe-grid hero-section relative overflow-hidden bg-[#131210] px-5 pb-14 pt-14 sm:px-8 md:pb-20 md:pt-20">
                                                                <div className="hero-content relative z-10 mx-auto max-w-4xl text-center">
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
                        <Link
                            to="/contact#enquiry-form"
                            className="hero-cta flex w-full items-center justify-center gap-2 rounded-lg bg-[#D99B4B] px-9 py-4 text-base font-semibold text-[#131210] transition-colors hover:bg-[#ECC187] sm:w-auto"
                        >
                            Start a project <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            to="/our-work"
                            className="hero-cta w-full rounded-lg border border-[#E8DECB]/30 bg-[#22201C]/30 px-8 py-4 text-center text-base font-semibold transition-colors hover:border-[#D99B4B]/60 hover:bg-[#22201C] sm:w-auto"
                        >
                            See our work
                        </Link>
                    </div>
                    <p ref={quoteRef} className="mx-auto mb-9 max-w-lg text-sm italic tracking-wide text-[#8A857B]">
                        “We learn how your business actually makes money first, then build a
                        custom online engine to help you scale it.”
                    </p>
                    <HeroMockup mockupRef={mockupRef} />
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
                            "/services/web-design-development",
                        ],
                        [
                            Search,
                            "02 / Discovery",
                            "Built around how people find you",
                            "Your digital presence works across Google, social, and referrals seamlessly.",
                            "/services/search-digital-marketing",
                        ],
                        [
                            Zap,
                            "03 / Architecture",
                            "Strategy behind every decision",
                            "Design, marketing, and UX work as one system, not three separate services.",
                            "/services/video-production-editing",
                        ],
                    ].map(([Icon, label, title, description, path]) => (
                        <div
                            key={label}
                            className="feature-card group rounded-2xl border border-[#D99B4B]/20 bg-[#1C1B18] p-6"
                        >
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <div className="feature-icon flex h-10 w-10 items-center justify-center rounded-lg border border-[#D99B4B]/30 bg-[#D99B4B]/15 text-[#D99B4B]">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <span className="rounded border border-[#D99B4B]/20 bg-[#D99B4B]/10 px-2 py-0.5 font-mono text-xs uppercase tracking-widest text-[#D99B4B]">
                                    {label}
                                </span>
                            </div>
                            <h3 className="mb-3 font-serif text-xl font-semibold text-[#D99B4B] sm:text-2xl">
                                {title}
                            </h3>
                            <p className="text-sm leading-relaxed text-[#8A857B]">
                                {description}
                            </p>
                            <Link
                                to={path}
                                className="mt-4 inline-flex text-sm font-semibold text-[#D99B4B] underline underline-offset-4"
                            >
                                Explore this service
                            </Link>
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
                            picturing and we&apos;ll help you figure out the rest.{" "}
                            <Link to="/services" className="font-semibold text-[#B87C2B] underline">
                                See all our services
                            </Link>.
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
                                            <span className="rounded border border-[#E8DECB] bg-[#F5EFE6] px-2.5 py-1 font-mono text-xs uppercase tracking-widest text-[#181614]/70">
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
                                    <Link
                                        to={`/our-work#${slug}`}
                                        className="flex items-center border-t border-[#E8DECB]/70 pt-4 text-sm font-bold text-[#B87C2B]"
                                    >
                                        Read more <ArrowRight className="project-arrow ml-1.5 h-4 w-4" />
                                    </Link>
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
                                image: "/gopal.webp",
                                bio: "Builds dependable digital systems from the first wireframe to the final deployment, with a focus on speed, clarity, and measurable growth.",
                            },
                            {
                                name: "Vatsal Gupta",
                                role: "Product & Experience Engineer",
                                badge: "Direct lead",
                                image: "/vatsal.webp",
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
                                        alt={member.name}
                                        width="800"
                                        height="800"
                                        loading="lazy"
                                        decoding="async"
                                        className={`team-photo h-full w-full object-cover ${member.name === "Vatsal Gupta" ? "scale-[1.06]" : ""}`}
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
                                        src="/partnerLogo.webp"
                                        alt=""
                                        width="72"
                                        height="65"
                                        loading="lazy"
                                        decoding="async"
                                        className="partner-logo-img h-9 w-9 object-cover rounded-lg shadow-sm"
                                    />
                                    <div className="text-left">
                                        <div className="font-serif text-lg font-bold leading-tight">GROWTHONICX</div>
                                        <div className="font-mono text-xs uppercase tracking-wider text-[#6F685F]">
                                            Digital marketing &amp; growth agency
                                        </div>
                                    </div>
                                </div>
                                <div className="partner-nested-card mb-4 flex aspect-[16/10] w-full flex-col items-center justify-center rounded-xl border border-[#E8DECB] bg-white p-4 shadow-sm">
                                    <div className="partner-photo-frame aspect-square overflow-hidden rounded-xl border border-[#E8DECB] bg-[#F6F1E8]">
                                        <img
                                            src="/kunal.webp"
                                            alt="Kunal"
                                            width="800"
                                            height="800"
                                            loading="lazy"
                                            decoding="async"
                                            className="partner-photo h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 flex items-start justify-between gap-3">
                                    <h3 className="font-serif text-2xl font-bold text-[#181614] transition-colors group-hover:text-[#B87C2B]">
                                        Kunal Sahni
                                    </h3>
                                    <span className="partner-verified inline-flex items-center gap-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-600">
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
                        <Link
                            to="/contact#enquiry-form"
                            className="cta-button cta-magnetic relative isolate flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#181614] px-9 py-4 font-bold text-[#F6F1E8] transition-colors hover:bg-black sm:w-auto"
                        >
                            Start a project <ArrowRight className="h-5 w-5 text-[#D99B4B]" />
                        </Link>
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
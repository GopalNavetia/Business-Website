import { useNavigate } from "react-router-dom";
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

function HeroMockup() {
    return (
        <div className="hero-mockup-float pointer-events-none relative mx-auto max-w-2xl select-none pt-8">
            <div className="absolute -left-3 top-0 z-10 flex items-center gap-3 rounded-xl border border-[#D99B4B]/50 bg-[#1E1C18]/95 px-4 py-2.5 shadow-xl sm:-left-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D99B4B]/20 text-[#D99B4B]">
                    <BarChart3 className="h-4 w-4" />
                </div>
                <div>
                    <div className="font-mono text-sm font-bold leading-tight text-[#D99B4B]">
                        +184% Avg Lead Surge
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
    const navigate = useNavigate();

    return (
        <div className="bg-[#131210] text-[#F6F1E8]">
            {/* Hero Section */}
            <section className="wireframe-grid relative overflow-hidden bg-[#131210] px-5 pb-14 pt-14 sm:px-8 md:pb-20 md:pt-20">
                <div className="pointer-events-none absolute left-1/2 top-1/4 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#D99B4B]/10 blur-[130px]" />
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                        Custom Websites That
                        <br />
                        <span className="text-[#D99B4B] italic">
                            Actually Bring You Leads.
                        </span>
                    </h1>
                    <p className="mx-auto mb-7 mt-5 max-w-2xl text-base leading-relaxed text-[#8A857B] sm:text-lg md:text-xl">
                        We handle your design, custom code, and Google search rankings under
                        one roof so you can focus on running your business.
                    </p>
                    <div className="mb-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href="https://wa.me/917011042987?text=Hi%20Anchorworks%2C%20I%20would%20like%20to%20enquire%20about%20a%20project."
                            target="_blank"
                            rel="noreferrer"
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#D99B4B] px-9 py-4 text-base font-semibold text-[#131210] transition-colors hover:bg-[#ECC187] sm:w-auto"
                        >
                            Start a project <ArrowRight className="h-4 w-4" />
                        </a>
                        <button
                            type="button"
                            onClick={() => navigate("/our-work")}
                            className="w-full rounded-lg border border-[#E8DECB]/30 bg-[#22201C]/30 px-8 py-4 text-base font-semibold transition-colors hover:border-[#D99B4B]/60 hover:bg-[#22201C] sm:w-auto"
                        >
                            See our work
                        </button>
                    </div>
                    <p className="mx-auto mb-9 max-w-lg text-sm italic tracking-wide text-[#8A857B]">
                        “We learn how your business actually makes money first, then build a
                        custom online engine to help you scale it.”
                    </p>
                    <HeroMockup />
                </div>
            </section>

            {/* Value Pillars Section */}
            <section className="border-t border-[#D99B4B]/20 bg-[#1A1916] px-5 py-14 sm:px-8 md:py-16">
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
                            className="group rounded-2xl border border-[#D99B4B]/20 bg-[#1C1B18] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D99B4B]/60 hover:bg-[#23211D]"
                        >
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D99B4B]/30 bg-[#D99B4B]/15 text-[#D99B4B]">
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
            </section>

            {/* Projects Catalog Section */}
            <section
                id="projects"
                className="bg-[#F6F1E8] px-5 py-14 text-[#181614] sm:px-8 md:py-20"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto mb-10 max-w-2xl text-center">
                        <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                            Six kinds of projects.
                            <br />
                            <span className="text-[#B87C2B] italic">
                                One team building all of them.
                            </span>
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-[#181614]/70 sm:text-base">
                            Pick the one closest to what you need, or tell us what you&apos;re
                            picturing and we&apos;ll help you figure out the rest.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map(
                            ({ icon: Icon, title, slug, label, description }) => (
                                <article
                                    key={title}
                                    className="group flex min-h-[280px] flex-col justify-between rounded-2xl border border-[#E8DECB] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D99B4B]/60 hover:shadow-xl sm:p-7"
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
                                        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                                    </a>
                                </article>
                            ),
                        )}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section
                id="process"
                className="bg-[#F0EBD9] px-5 py-14 text-[#181614] sm:px-8 md:py-20"
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
                    <div className="relative space-y-5 sm:pl-10">
                        <div className="absolute bottom-6 left-4 top-6 hidden w-0.5 bg-[#B87C2B] sm:block" />
                        {processSteps.map((step, index) => (
                            <div
                                key={step.phase}
                                className="relative rounded-2xl border border-[#E8DECB] bg-[#FBF8F3] p-6 shadow-sm transition-all hover:border-[#B87C2B] hover:shadow-lg sm:p-7"
                            >
                                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#F0EBD9] bg-[#B87C2B] font-mono text-xs font-bold text-white sm:absolute sm:-left-10 sm:top-8 sm:mb-0">
                                    0{index + 1}
                                </div>
                                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                                    <h3 className="font-serif text-xl font-semibold sm:text-2xl">
                                        {step.title}
                                    </h3>
                                    <span className="rounded-full bg-[#D99B4B]/15 px-3 py-1 font-mono text-xs font-semibold text-[#B87C2B]">
                                        {step.phase}
                                    </span>
                                </div>
                                <p className="mb-4 text-sm leading-relaxed text-[#181614]/80 sm:text-base">
                                    {step.description}
                                </p>
                                <div className="flex flex-wrap items-center gap-2 border-t border-[#E8DECB]/70 pt-3 font-mono text-xs text-[#181614]/70">
                                    <span className="font-bold text-[#B87C2B]">
                                        ● Deliverable:
                                    </span>
                                    {step.deliverable}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call To Action Section */}
            <section
                id="contact"
                className="bg-[#D99B4B] px-5 py-14 text-[#181614] sm:px-8 md:py-20"
            >
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                        Got a project worth building properly?
                    </h2>
                    <p className="mx-auto mb-7 mt-4 max-w-2xl text-base leading-relaxed text-[#181614]/90 sm:text-lg md:text-xl">
                        Tell us what you&apos;re trying to fix or build — we&apos;ll tell
                        you honestly whether it needs a website, a system, or just a better
                        one.
                    </p>
                    <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href="mailto:hello@anchorworks.studio?subject=New%20project%20enquiry"
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#181614] px-9 py-4 font-bold text-[#F6F1E8] transition-colors hover:bg-black sm:w-auto"
                        >
                            Start a project <ArrowRight className="h-5 w-5 text-[#D99B4B]" />
                        </a>
                        <a
                            href="https://wa.me/917011042987"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full rounded-xl border border-[#181614]/30 bg-[#181614]/10 px-7 py-4 text-sm font-bold transition-colors hover:bg-[#181614]/20 sm:w-auto"
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
                            <span key={item} className="flex items-center gap-1.5">
                                <Check className="h-3.5 w-3.5" />
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;

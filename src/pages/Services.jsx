import React, { useRef } from "react";
import {
    AppWindow,
    BookOpen,
    Check,
    Filter,
    Palette,
    LayoutDashboard,
    Share2,
    Search,
    ArrowRight,
    Video,
    Camera,
    NotebookPen,
    Wand2,
    Target,
    Send,
    Film,
    Sparkles
} from "lucide-react";

function Services() {
    const ctaSectionRef = useRef(null);
    const startProjectRef = useRef(null);

    const handleStartProjectClick = (e) => {
        // Handle custom animation or tracking logic here
    };

    const disciplineOneItems = [
        {
            icon: AppWindow,
            tag: "SPECIALIZATION 01",
            title: "UI/UX Design",
            description: "Interactive interfaces mapped around user behavior, touch targets, and clear navigation paths.",
            badge: "Engineered Prototype"
        },
        {
            icon: Palette,
            tag: "SPECIALIZATION 02",
            title: "Logo & Brand Identity",
            description: "Custom-tailored typography systems, brand marks, and color tokens built to establish immediate credibility.",
            badge: "Identity Assets"
        },
        {
            icon: LayoutDashboard,
            tag: "SPECIALIZATION 03",
            title: "Design Systems & UI Libraries",
            description: "Scalable component architecture and design tokens that keep your digital platform cohesive as you scale.",
            badge: "Reusable Tokens"
        },
        {
            icon: BookOpen,
            tag: "SPECIALIZATION 04",
            title: "Marketing Collateral",
            description: "High-end layout design for marketing assets, booklets, and business print collateral.",
            badge: "Print & Digital Decks"
        },
        {
            icon: Filter,
            tag: "SPECIALIZATION 05",
            title: "Conversion Landing Pages",
            description: "Single-offer page architectures engineered with clear visual hierarchy to turn traffic into enquiries.",
            badge: "Conversion Optimized",
            colSpan: "md:col-span-2 lg:col-span-2"
        },
    ];

    const disciplineTwoTopItems = [
        {
            icon: Search,
            tag: "SPECIALIZATION 01",
            title: "Search Engine Optimization (SEO) & Local Business SEO",
            description: "Technical sitemaps, structured schemas, and local search strategies to index and rank on high-intent terms.",
            badge: "Local & Technical Search"
        },
        {
            icon: Target,
            tag: "SPECIALIZATION 02",
            title: "Pay-Per-Click Advertising (Google & Meta Ads)",
            description: "Performance ad campaigns backed by server-side tracking and analytics.",
            badge: "Server-Side Tracking"
        }
    ];

    const disciplineTwoBottomItems = [
        {
            icon: Share2,
            tag: "SPECIALIZATION 03",
            title: "Social Media Marketing (SMM)",
            description: "Multi-channel content curation, community building, and strategic campaign scheduling.",
            badge: "Community Growth"
        },
        {
            icon: NotebookPen,
            tag: "SPECIALIZATION 04",
            title: "Content Marketing & Copywriting",
            description: "Value-driven, persuasive copy styled to capture attention and nurture prospects.",
            badge: "Persuasive Editorial"
        },
        {
            icon: Send,
            tag: "SPECIALIZATION 05",
            title: "Email & WhatsApp Marketing",
            description: "Behavior-based, automated email flows and mobile chat campaigns running on autopilot.",
            badge: "Automated Flows"
        }
    ];

    const disciplineThreeItems = [
        {
            icon: Video,
            tag: "SPECIALIZATION 01",
            title: "Commercial & Ad Film Production",
            description: "Engaging pacing and dynamic video cuts edited specifically to tell brand stories on social feeds.",
            badge: "Brand Campaigns"
        },
        {
            icon: Camera,
            tag: "SPECIALIZATION 02",
            title: "Product Shoot & Video Showcase",
            description: "High-definition video capturing physical craftsmanship, material details, and functionality.",
            badge: "Macro & Studio Lighting"
        },
        {
            icon: Film,
            tag: "SPECIALIZATION 03",
            title: "Corporate & Event Video Shoot",
            description: "Multi-camera coverage, executive interviews, and professional event highlights.",
            badge: "Multi-Camera Coverage"
        },
        {
            icon: Wand2,
            tag: "SPECIALIZATION 04",
            title: "Reels & YouTube Shorts Editing",
            description: "Mobile-optimized edits equipped with high-retention transitions, captions, and staccato pacing.",
            badge: "9:16 Vertical Retention"
        },
        {
            icon: Sparkles,
            tag: "SPECIALIZATION 05",
            title: "Color Grading & Post-Production",
            description: "Professional color grading, audio leveling, and visual polish to elevate raw footage into broadcast-quality assets.",
            badge: "Broadcast Finish",
            colSpan: "md:col-span-2 lg:col-span-2"
        }
    ];

    return (
        <div className="min-h-screen bg-[#1B1712] font-sans text-[#F2EEE4] selection:bg-[#B8862E] selection:text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-[#F2EEE4]/10 bg-[#1B1712] pb-16 pt-16 text-[#F2EEE4]">
                <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center sm:px-8">
                    {/* Eyebrow Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F2EEE4]/15 bg-[#F2EEE4]/[0.04] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F2EEE4]/75">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F2B15B]" />
                        <span>Services &amp; Specializations</span>
                    </div>

                    {/* Editorial Headline */}
                    <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[64px]">
                        Engineering Digital <span className="font-serif font-normal italic text-[#F2B15B]">Advantage.</span><br />
                        <span className="font-serif font-normal italic text-[#F2B15B]">Built Without Compromise.</span>
                    </h1>

                    {/* Sub-copy */}
                    <div className="mt-6 max-w-2xl">
                        <p className="text-sm font-light leading-relaxed text-[#F2EEE4]/75 sm:text-base">
                            We design and engineer bespoke web platforms, data pipelines, and media assets designed for speed, clarity,
                            and compounding business return.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="https://wa.me/917011042987?text=Hi%20Anchorworks%2C%20I%20would%20like%20to%20enquire%20about%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-[6px] bg-[#B8862E] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#1B1712] shadow-md transition-all hover:bg-[#F2B15B]"
                        >
                            Start a project
                            <ArrowRight className="h-4 w-4 text-[#1B1712]" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Core Disciplines Section */}
            <main className="bg-[#FAF7F2] px-6 py-12 text-[#1B1712] sm:px-8">
                <div className="mx-auto flex max-w-7xl flex-col gap-10">

                    {/* Section Intro Header */}
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="font-serif text-3xl font-semibold leading-tight text-[#1B1712] sm:text-4xl lg:text-5xl">
                            Three Core Disciplines. <br className="hidden sm:inline" />
                            <span className="font-serif font-normal italic text-[#B8862E]">Built for compounding return.</span>
                        </h2>
                        <p className="mt-4 text-sm font-normal leading-relaxed text-[#1B1712]/70 sm:text-base">
                            Each vertical is engineered to remove operational drag and convert attention into measurable equity.
                        </p>
                    </div>

                    {/* DISCIPLINE 01: Web Design & Development */}
                    <article className="rounded-3xl border border-[#1B1712]/10 bg-[#F5F1E8] p-6 shadow-sm sm:p-8">
                        {/* Header Strip */}
                        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#1B1712]/10 pb-6">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-[#1B1712]/40">01/03</span>
                                <h3 className="ml-2 font-serif text-2xl font-semibold text-[#1B1712] sm:text-3xl">
                                    Web Design &amp; Development
                                </h3>
                            </div>
                            <span className="inline-flex items-center rounded-full border border-[#1B1712]/5 bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#B8862E] shadow-sm">
                                Brand systems &amp; interface design
                            </span>
                        </div>

                        {/* Bento Layout: Full Hero Showcase + 3-Column Capability Grid */}
                        <div className="space-y-6">
                            {/* Full Hero Showcase */}
                            <div className="group relative overflow-hidden rounded-2xl border border-[#1B1712]/10 bg-[#120F0C] shadow-lg">
                                <img
                                    src="/webDev.png"
                                    alt="Web Design & Development Showcase"
                                    className="h-[320px] w-full object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.015] sm:h-[440px] lg:h-[480px]"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#120F0C]/80 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5 flex flex-wrap items-center gap-3 sm:bottom-6 sm:left-6">
                                    <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-[#1B1712]/80 px-4 py-2.5 text-white shadow-xl backdrop-blur-md">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                        <span className="text-xs font-semibold tracking-wide">Multi-Device Responsive Architecture</span>
                                    </div>
                                </div>
                            </div>

                            {/* 3-Column Grid of Deliverable Cards */}
                            <div className="grid grid-cols-1 gap-5 pt-2 md:grid-cols-2 lg:grid-cols-3">
                                {disciplineOneItems.map(({ icon: Icon, tag, title, description, badge, colSpan }) => (
                                    <div
                                        key={title}
                                        className={`group rounded-2xl border border-[#1B1712]/10 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B8862E]/40 hover:shadow-md flex flex-col justify-between ${colSpan || ""}`}
                                    >
                                        <div>
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B8862E]/25 bg-[#FAF5EC] text-[#B8862E]">
                                                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                                                </span>
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B1712]/40">
                                                    {tag}
                                                </span>
                                            </div>
                                            <h4 className="font-sans text-base font-bold tracking-tight text-[#1B1712]">
                                                {title}
                                            </h4>
                                            <p className="mt-2 text-xs font-normal leading-relaxed text-[#1B1712]/70">
                                                {description}
                                            </p>
                                        </div>
                                        <div className="mt-5 border-t border-[#1B1712]/5 pt-4 flex items-center text-[11px] font-bold uppercase tracking-wider text-[#B8862E]">
                                            <span>{badge}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* DISCIPLINE 02: Search & Digital Marketing */}
                    <article className="rounded-3xl border border-[#1B1712]/10 bg-[#F5F1E8] p-6 shadow-sm sm:p-8">
                        {/* Header Strip */}
                        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#1B1712]/10 pb-6">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-[#1B1712]/40">02/03</span>
                                <h3 className="ml-2 font-serif text-2xl font-semibold text-[#1B1712] sm:text-3xl">
                                    Search &amp; Digital Marketing
                                </h3>
                            </div>
                            <span className="inline-flex items-center rounded-full border border-[#1B1712]/5 bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#B8862E] shadow-sm">
                                Traffic acquisition &amp; funnel engineering
                            </span>
                        </div>

                        <div className="space-y-6">
                            {/* Bento Row: Left Media Visual + Right Stacked Cards */}
                            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
                                {/* Left Media Showcase */}
                                <div className="group relative flex min-h-[380px] items-center justify-center overflow-hidden rounded-2xl border border-[#1B1712]/10 bg-[#120F0C] shadow-lg lg:col-span-6">
                                    <img
                                        src="/searchDigitalMarketing.png"
                                        alt="Search & Digital Marketing Showcase"
                                        className="h-full w-full object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#120F0C]/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                                        <div className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-[#1B1712]/85 px-4 py-2.5 text-white shadow-xl backdrop-blur-md">
                                            <span className="h-2 w-2 rounded-full bg-[#F2B15B]" />
                                            <span className="text-xs font-semibold">Direct Lead Pipeline &amp; CRM Sync</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Stacked Service Cards */}
                                <div className="flex flex-col justify-between gap-5 lg:col-span-6">
                                    {disciplineTwoTopItems.map(({ icon: Icon, tag, title, description, badge }) => (
                                        <div
                                            key={title}
                                            className="group flex h-full flex-col justify-between rounded-2xl border border-[#1B1712]/10 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B8862E]/40 hover:shadow-md"
                                        >
                                            <div>
                                                <div className="mb-3 flex items-center justify-between">
                                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B8862E]/25 bg-[#FAF5EC] text-[#B8862E]">
                                                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                                                    </span>
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B1712]/40">
                                                        {tag}
                                                    </span>
                                                </div>
                                                <h4 className="font-sans text-base font-bold tracking-tight text-[#1B1712]">
                                                    {title}
                                                </h4>
                                                <p className="mt-2 text-xs font-normal leading-relaxed text-[#1B1712]/70">
                                                    {description}
                                                </p>
                                            </div>
                                            <div className="mt-5 border-t border-[#1B1712]/5 pt-3.5 flex items-center text-[11px] font-bold uppercase tracking-wider text-[#B8862E]">
                                                <span>{badge}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom 3-Card Grid for Discipline 02 */}
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                                {disciplineTwoBottomItems.map(({ icon: Icon, tag, title, description, badge }) => (
                                    <div
                                        key={title}
                                        className="group flex flex-col justify-between rounded-2xl border border-[#1B1712]/10 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B8862E]/40 hover:shadow-md"
                                    >
                                        <div>
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B8862E]/25 bg-[#FAF5EC] text-[#B8862E]">
                                                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                                                </span>
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B1712]/40">
                                                    {tag}
                                                </span>
                                            </div>
                                            <h4 className="font-sans text-base font-bold tracking-tight text-[#1B1712]">
                                                {title}
                                            </h4>
                                            <p className="mt-2 text-xs font-normal leading-relaxed text-[#1B1712]/70">
                                                {description}
                                            </p>
                                        </div>
                                        <div className="mt-5 border-t border-[#1B1712]/5 pt-4 flex items-center text-[11px] font-bold uppercase tracking-wider text-[#B8862E]">
                                            <span>{badge}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* DISCIPLINE 03: Video Shoot & Editing */}
                    <article className="rounded-3xl border border-[#1B1712]/10 bg-[#F5F1E8] p-6 shadow-sm sm:p-8">
                        {/* Header Strip */}
                        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#1B1712]/10 pb-6">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-[#1B1712]/40">03/03</span>
                                <h3 className="ml-2 font-serif text-2xl font-semibold text-[#1B1712] sm:text-3xl">
                                    Video Shoot &amp; Editing
                                </h3>
                            </div>
                            <span className="inline-flex items-center rounded-full border border-[#1B1712]/5 bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#B8862E] shadow-sm">
                                Performance media &amp; video operations
                            </span>
                        </div>

                        <div className="space-y-6">
                            {/* Full-Width Hero Media Showcase */}
                            <div className="group relative overflow-hidden rounded-2xl border border-[#1B1712]/10 bg-[#120F0C] shadow-lg">
                                <img
                                    src="/videoEditing.png"
                                    alt="Video Shoot & Editing Showcase"
                                    className="h-[320px] w-full object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.015] sm:h-[440px] lg:h-[480px]"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#120F0C]/80 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5 flex flex-wrap items-center gap-3 sm:bottom-6 sm:left-6">
                                    <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-[#1B1712]/80 px-4 py-2.5 text-white shadow-xl backdrop-blur-md">
                                        <span className="h-2 w-2 rounded-full bg-[#F2B15B]" />
                                        <span className="text-xs font-semibold tracking-wide">Cinematic Grading &amp; Sound Design Studio</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bento Capability Cards Grid */}
                            <div className="grid grid-cols-1 gap-5 pt-2 md:grid-cols-2 lg:grid-cols-3">
                                {disciplineThreeItems.map(({ icon: Icon, tag, title, description, badge, colSpan }) => (
                                    <div
                                        key={title}
                                        className={`group rounded-2xl border border-[#1B1712]/10 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B8862E]/40 hover:shadow-md flex flex-col justify-between ${colSpan || ""}`}
                                    >
                                        <div>
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B8862E]/25 bg-[#FAF5EC] text-[#B8862E]">
                                                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                                                </span>
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B1712]/40">
                                                    {tag}
                                                </span>
                                            </div>
                                            <h4 className="font-sans text-base font-bold tracking-tight text-[#1B1712]">
                                                {title}
                                            </h4>
                                            <p className="mt-2 text-xs font-normal leading-relaxed text-[#1B1712]/70">
                                                {description}
                                            </p>
                                        </div>
                                        <div className="mt-5 border-t border-[#1B1712]/5 pt-4 flex items-center text-[11px] font-bold uppercase tracking-wider text-[#B8862E]">
                                            <span>{badge}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>

                </div>
            </main>

            {/* Interactive Call to Action Section */}
            <section
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
                            href="mailto:hello@anchorworks.studio?subject=New%20project%20enquiry"
                            ref={startProjectRef}
                            onClick={handleStartProjectClick}
                            className="cta-button cta-magnetic relative isolate flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#181614] px-9 py-4 font-bold text-[#F6F1E8] transition-colors hover:bg-black sm:w-auto"
                        >
                            Start a project <ArrowRight className="h-5 w-5 text-[#D99B4B]" />
                        </a>
                        <a
                            href="https://wa.me/917011042987"
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
            </section>
        </div>
    );
}

export default Services;
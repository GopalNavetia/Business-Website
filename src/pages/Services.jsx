import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap, reveal } from "../motion";
import {
    AppWindow,
    BookOpen,
    Filter,
    Palette,
    LayoutDashboard,
    Share2,
    Search,
    ArrowRight,
    Video,
    Camera,
    Check,
    NotebookPen,
    Wand2,
    Target,
    Send,
    Film,
    Sparkles
} from "lucide-react";
import { serviceGroups, services } from "../data/services";
import ServiceInformationSection from "../components/ServiceInformationSection";

const MY_NUMBER = import.meta.env.VITE_MY_NUMBER;

function Services({ groupSlug }) {
    const navigate = useNavigate();
    const serviceGroupsByTitle = Object.fromEntries(services.map((service) => [service.title, service.groupSlug]));
    const isOverview = !groupSlug;
    const activeGroup = serviceGroups.find((group) => group.slug === groupSlug);
    const ServiceCard = isOverview ? Link : "div";
    const heroRef = useRef(null);
    const serviceInfoRef = useRef(null);
    useEffect(() => {
        const context = gsap.context(() => {
            reveal("article, .cta-section", document);
        });
        return () => context.revert();
    }, [groupSlug]);

    const handleStartProject = () => navigate("/contact#enquiry-form");

    const disciplineOneItems = [
        { icon: AppWindow, tag: "SPECIALIZATION 01", title: "UI/UX Design", description: "Website experiences mapped around user behavior, touch targets, and clear navigation paths for Delhi businesses.", badge: "Engineered Prototype" },
        { icon: Palette, tag: "SPECIALIZATION 02", title: "Logo & Brand Identity", description: "As a branding agency in Delhi, we provide logo design services with custom typography, brand marks, and color systems.", badge: "Identity Assets" },
        { icon: LayoutDashboard, tag: "SPECIALIZATION 03", title: "Design Systems & UI Libraries", description: "Scalable component architecture and design tokens that keep your digital platform cohesive as you scale.", badge: "Reusable Tokens" },
        { icon: BookOpen, tag: "SPECIALIZATION 04", title: "Graphic Design & Marketing Collateral", description: "Our graphic design company in Delhi creates campaign assets, booklets, and print and digital collateral for local businesses.", badge: "Print & Digital Decks" },
        { icon: Filter, tag: "SPECIALIZATION 05", title: "Conversion Landing Pages", description: "Single-offer page architectures engineered with clear visual hierarchy to turn traffic into enquiries.", badge: "Conversion Optimized" },
        { icon: AppWindow, tag: "SPECIALIZATION 06", title: "Shopify & E-commerce Development", description: "From Shopify website development in Delhi to e-commerce website development in Delhi, our stores make product discovery and checkout straightforward.", badge: "Online Store Builds" },
    ];
    const disciplineTwoTopItems = [
        { icon: Search, tag: "SPECIALIZATION 01", title: "Search Engine Optimization (SEO) & Local Business SEO", description: "Our SEO company in Delhi helps businesses improve technical foundations, useful content, and local visibility with SEO services in Delhi.", badge: "LOCAL & TECHNICAL SEARCH" },
        { icon: Target, tag: "SPECIALIZATION 02", title: "Pay-Per-Click Advertising (Google & Meta Ads)", description: "As a Google Ads agency in Delhi, we plan measurable campaigns. Our PPC agency in Delhi also manages tracking and reporting as a digital advertising agency in Delhi.", badge: "SERVER-SIDE TRACKING" },
    ];
    const disciplineTwoBottomItems = [
        { icon: Share2, tag: "SPECIALIZATION 03", title: "Social Media Marketing (SMM)", description: "As a social media marketing agency in Delhi, we plan content, build communities, and provide social media management services in Delhi.", badge: "COMMUNITY GROWTH" },
        { icon: NotebookPen, tag: "SPECIALIZATION 04", title: "Content Marketing & Copywriting", description: "Value-driven, persuasive copy styled to capture attention and nurture prospects.", badge: "PERSUASIVE EDITORIAL" },
        { icon: Send, tag: "SPECIALIZATION 05", title: "Email & WhatsApp Marketing", description: "Behavior-based, automated email flows and mobile chat campaigns running on autopilot.", badge: "AUTOMATED FLOWS" },
        { icon: Target, tag: "SPECIALIZATION 06", title: "Lead Generation", description: "As a lead generation company in Delhi, we build campaigns and landing pages. Our lead generation services in Delhi focus on clear enquiry paths.", badge: "ENQUIRY-FOCUSED CAMPAIGNS" },
    ];
    const disciplineThreeItems = [
        { icon: Video, tag: "SPECIALIZATION 01", title: "Video Editing & Commercial Production", description: "As a video editing company in Delhi, we help brands shape commercial footage. Work with a video editor in Delhi to prepare it for digital channels.", badge: "BRAND CAMPAIGNS" },
        { icon: Camera, tag: "SPECIALIZATION 02", title: "Product Shoot & Video Showcase", description: "High-definition video capturing physical craftsmanship, material details, and functionality.", badge: "MACRO & STUDIO LIGHTING" },
        { icon: Film, tag: "SPECIALIZATION 03", title: "Corporate & Event Video Shoot", description: "Multi-camera coverage, executive interviews, and professional event highlights.", badge: "MULTI-CAMERA COVERAGE" },
        { icon: Wand2, tag: "SPECIALIZATION 04", title: "Reels & YouTube Shorts Editing", description: "Mobile-optimized edits equipped with high-retention transitions, captions, and staccato pacing.", badge: "9:16 VERTICAL RETENTION" },
        { icon: Sparkles, tag: "SPECIALIZATION 05", title: "Color Grading & Post-Production", description: "Professional color grading, audio leveling, and visual polish to elevate raw footage into broadcast-quality assets.", badge: "BROADCAST FINISH", colSpan: "md:col-span-2 lg:col-span-2" },
    ];
    const renderMaskedWords = (text) => text.split(" ").map((word, index) => (
        <span key={index} className="inline-block py-1 align-bottom leading-[1.08]">{word}&nbsp;</span>
    ));
    const subheadingWords = ["Built", "for", "compounding", "return."];

    return (
        <div className="min-h-screen bg-[#131210] font-sans text-[#F6F1E8] selection:bg-[#D99B4B] selection:text-[#131210]">
            {isOverview && (
            <>
            {/* Hero Section */}
            <section ref={heroRef} className="wireframe-grid hero-section relative overflow-hidden bg-[#131210] px-5 pb-14 pt-14 text-[#F6F1E8] sm:px-8 md:pb-20 md:pt-20">
                                                <div className="pointer-events-none absolute left-1/2 top-1/4 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#D99B4B]/10 blur-[130px]" />

                {/* Hero Content Container */}
                <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center sm:px-8">
                    {/* Pill Tag */}
                    <div className="hero-pill mb-6 inline-flex items-center gap-2 rounded-full border border-[#D99B4B]/30 bg-[#D99B4B]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D99B4B] backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D99B4B]" />
                        <span>Services &amp; Specializations</span>
                    </div>

                    {/* Masked Headline */}
                    <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#F6F1E8] sm:text-6xl lg:text-[64px]">
                        <span className="block">
                            {renderMaskedWords("Digital Marketing & Web Design")}
                        </span>
                        <span className="block font-serif font-normal italic text-[#D99B4B]">
                            {renderMaskedWords("Services in Delhi.")}
                            <span className="block font-serif font-normal italic text-[#D99B4B]">
                                {renderMaskedWords("Built Without Compromise.")}
                            </span>
                        </span>
                    </h1>

                    {/* Sub-copy Description */}
                    <div className="mt-6 max-w-2xl">
                        <p className="text-base font-light leading-relaxed text-[#8A857B] sm:text-lg md:text-xl">
                            Anchor Works helps Delhi businesses with web design and development, digital marketing, SEO, graphic design,
                            video editing, paid advertising, and e-commerce solutions.
                        </p>
                    </div>

                    {/* Hero CTA Button */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <button
                            type="button"
                            onClick={handleStartProject}
                            className="hero-cta flex w-full items-center justify-center gap-2 rounded-lg bg-[#D99B4B] px-9 py-4 text-base font-semibold text-[#131210] transition-colors hover:bg-[#ECC187] sm:w-auto"
                        >
                            Start a project <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </section>
            </>
            )}

            {!isOverview && activeGroup && (
                <section
                   
                    className="wireframe-grid relative overflow-hidden bg-[#131210] px-6 py-12 text-[#F6F1E8] sm:px-8 sm:py-16"
                >
                                                            <div className="pointer-events-none absolute right-0 top-0 h-[380px] w-[520px] rounded-full bg-[#D99B4B]/10 blur-[120px]" />
                    <div className="relative mx-auto max-w-7xl">
                        <div className="max-w-3xl">
                            <p className="service-group-intro inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D99B4B]">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#D99B4B]" />
                                {activeGroup.introduction.eyebrow}
                            </p>
                            <h1 className="service-group-intro mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                                {activeGroup.introduction.headline}
                            </h1>
                            <p className="service-group-intro mt-5 max-w-2xl text-sm font-light leading-relaxed text-[#F2EEE4]/65 sm:text-base">
                                {activeGroup.introduction.body}
                            </p>
                            <Link
                                to="/contact#enquiry-form"
                                className="service-group-intro mt-7 inline-flex items-center gap-2 rounded-lg bg-[#D99B4B] px-6 py-3 text-sm font-semibold text-[#131210] transition-colors hover:bg-[#ECC187]"
                            >
                                Talk about your project
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="mt-10 grid gap-4 md:grid-cols-3">
                            {activeGroup.introduction.details.map((detail, index) => (
                                <article
                                    key={detail.title}
                                    className="service-group-intro-card rounded-2xl border border-[#F2EEE4]/10 bg-[#F2EEE4]/[0.035] p-5 backdrop-blur-sm sm:p-6"
                                >
                                    <span className="font-mono text-xs font-semibold tracking-wider text-[#D99B4B]">
                                        0{index + 1}
                                    </span>
                                    <h2 className="mt-3 font-serif text-lg font-semibold text-[#F2EEE4]">
                                        {detail.title}
                                    </h2>
                                    <p className="mt-2 text-sm leading-relaxed text-[#F2EEE4]/60">
                                        {detail.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Core Disciplines Section */}
            <main className={`bg-[#FAF7F2] px-6 text-[#1B1712] sm:px-8 ${isOverview ? "py-12" : "py-8 sm:py-12"}`}>
                <div className="mx-auto flex max-w-7xl flex-col gap-10">

                    {/* Section Intro Header with Scroll-Triggered Animation */}
                    {isOverview && (
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="font-serif text-3xl font-semibold leading-tight text-[#1B1712] sm:text-4xl lg:text-5xl">
                            Three Core Disciplines.
                        </h2>
                        <div className="mt-2 font-serif font-normal italic text-[#B8862E] text-3xl sm:text-4xl lg:text-5xl">
                            {subheadingWords.map((word, index) => (
                                <span key={index} className="inline-block overflow-hidden py-1 align-bottom leading-[1.08]">
                                    <span className="disciplines-subheading-word inline-block pr-[0.25em]">
                                        {word}
                                    </span>
                                </span>
                            ))}
                        </div>
                        <p className="mt-4 text-sm font-normal leading-relaxed text-[#1B1712]/70 sm:text-base">
                            Each vertical is engineered to remove operational drag and convert attention into measurable equity.
                        </p>
                    </div>
                    )}

                    {/* DISCIPLINE 01: Web Design & Development */}
                    {(!groupSlug || groupSlug === "web-design-development") && (
                    <article className="rounded-3xl border border-[#1B1712]/10 bg-[#F5F1E8] p-6 shadow-sm sm:p-8">
                        {/* Header Strip */}
                        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#1B1712]/10 pb-6">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-[#1B1712]/40">01/03</span>
                                <h3 className="ml-2 font-serif text-2xl font-semibold text-[#1B1712] sm:text-3xl">
                                    Web Design &amp; Development in Delhi
                                </h3>
                            </div>

                        </div>

                        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[#1B1712]/70 sm:text-base">
                            As a website development company in Delhi and website design company in Delhi, we build responsive sites for businesses across Delhi, around your customers,
                            services, and business goals.
                        </p>

                        {/* Bento Layout: Full Hero Showcase + 3-Column Capability Grid */}
                        <div className="space-y-6">
                            {/* Full Hero Showcase */}
                            <div className="group relative overflow-hidden rounded-2xl border border-[#1B1712]/10 bg-[#120F0C] shadow-lg">
                                <img
                                   
                                    src="/webDev.png"
                                    alt="Web Design & Development Showcase"
                                    width="2048"
                                    height="1536"
                                    loading="lazy"
                                    decoding="async"
                                    className="h-[320px] w-full rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015] sm:h-[440px] lg:h-[480px]"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#120F0C]/80 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5 flex flex-wrap items-center gap-3 sm:bottom-6 sm:left-6">
                                    <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-[#1B1712]/80 px-4 py-2.5 text-white shadow-xl backdrop-blur-md">
                                        <span className="h-2 w-2 rounded-full bg-[#D99B4B]" />
                                        <span className="text-xs font-semibold tracking-wide">Multi-Device Responsive Architecture</span>
                                    </div>
                                </div>
                            </div>

                            {/* 3-Column Grid of Deliverable Cards */}
                            <div className="grid grid-cols-1 gap-5 pt-2 md:grid-cols-2 lg:grid-cols-3">
                                {disciplineOneItems.map(({ icon: Icon, tag, title, description, badge, colSpan }, idx) => (
                                    <ServiceCard
                                        {...(isOverview ? { to: `/services/${serviceGroupsByTitle[title]}` } : {})}
                                        key={title}
                                        className={`group flex flex-col justify-between rounded-2xl border border-[#1B1712]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8862E]/50 hover:shadow-lg ${idx < 3 ? "d1-row-1" : "d1-row-2"} ${colSpan || ""}`}
                                    >
                                        <div>
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="d1-card-icon flex h-10 w-10 items-center justify-center rounded-xl border border-[#B8862E]/25 bg-[#FAF5EC] text-[#B8862E] transition-colors duration-300 group-hover:border-[#B8862E]/50 group-hover:bg-[#B8862E]/20">
                                                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                                                </span>
                                                <span className="text-xs font-bold uppercase tracking-wider text-[#1B1712]/55">
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
                                        <div className="mt-5 flex items-center border-t border-[#1B1712]/5 pt-4 text-[11px] font-bold uppercase tracking-wider text-[#B8862E]">
                                            <span>{badge}</span>
                                        </div>
                                    </ServiceCard>
                                ))}
                            </div>
                        </div>
                    </article>
                    )}

                    {/* DISCIPLINE 02: Search & Digital Marketing */}
                    {(!groupSlug || groupSlug === "search-digital-marketing") && (
                    <article className="rounded-3xl border border-[#1B1712]/10 bg-[#F5F1E8] p-6 shadow-sm sm:p-8">
                        {/* Header Strip */}
                        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#1B1712]/10 pb-6">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-[#1B1712]/40">02/03</span>
                                <h3 className="ml-2 font-serif text-2xl font-semibold text-[#1B1712] sm:text-3xl">
                                    Search &amp; Digital Marketing
                                </h3>
                            </div>
                        </div>

                        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[#1B1712]/70 sm:text-base">
                            We are a digital marketing company in Delhi, helping businesses improve search visibility, attract relevant
                            enquiries, and reach customers through measurable campaigns.
                        </p>

                        <div className="space-y-6">
                            {/* Bento Row: Left Media Visual + Right Stacked Cards */}
                            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
                                {/* Left Media Showcase */}
                                <div className="group relative flex min-h-[380px] items-center justify-center overflow-hidden rounded-2xl border border-[#1B1712]/10 bg-[#120F0C] shadow-lg lg:col-span-6">
                                    <img
                                       
                                        src="/searchDigitalMarketing.png"
                                        alt="Search & Digital Marketing Showcase"
                                        width="2048"
                                        height="1536"
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#120F0C]/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                                        <div className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-[#1B1712]/85 px-4 py-2.5 text-white shadow-xl backdrop-blur-md">
                                            <span className="h-2 w-2 rounded-full bg-[#D99B4B]" />
                                            <span className="text-xs font-semibold">Direct Lead Pipeline &amp; CRM Sync</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Stacked Service Cards */}
                                <div className="flex flex-col justify-between gap-5 lg:col-span-6">
                                    {disciplineTwoTopItems.map(({ icon: Icon, tag, title, description, badge }) => (
                                        <ServiceCard
                                            {...(isOverview ? { to: `/services/${serviceGroupsByTitle[title]}` } : {})}
                                            key={title}
                                            className="d2-stacked-card group flex h-full flex-col justify-between rounded-2xl border border-[#1B1712]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8862E]/50 hover:shadow-lg"
                                        >
                                            <div>
                                                <div className="mb-3 flex items-center justify-between">
                                                    <span className="d2-card-icon flex h-10 w-10 items-center justify-center rounded-xl border border-[#B8862E]/25 bg-[#FAF5EC] text-[#B8862E] transition-colors duration-300 group-hover:border-[#B8862E]/50 group-hover:bg-[#B8862E]/20">
                                                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                                                    </span>
                                                    <span className="text-xs font-bold uppercase tracking-wider text-[#1B1712]/55">
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
                                            <div className="mt-5 flex items-center border-t border-[#1B1712]/5 pt-3.5 text-[11px] font-bold uppercase tracking-wider text-[#B8862E]">
                                                <span>{badge}</span>
                                            </div>
                                        </ServiceCard>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom 3-Card Grid for Discipline 02 */}
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                                {disciplineTwoBottomItems.map(({ icon: Icon, tag, title, description, badge }) => (
                                    <ServiceCard
                                        {...(isOverview ? { to: `/services/${serviceGroupsByTitle[title]}` } : {})}
                                        key={title}
                                        className="d2-bottom-card group flex flex-col justify-between rounded-2xl border border-[#1B1712]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8862E]/50 hover:shadow-lg"
                                    >
                                        <div>
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="d2-card-icon flex h-10 w-10 items-center justify-center rounded-xl border border-[#B8862E]/25 bg-[#FAF5EC] text-[#B8862E] transition-colors duration-300 group-hover:border-[#B8862E]/50 group-hover:bg-[#B8862E]/20">
                                                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                                                </span>
                                                <span className="text-xs font-bold uppercase tracking-wider text-[#1B1712]/55">
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
                                        <div className="mt-5 flex items-center border-t border-[#1B1712]/5 pt-4 text-[11px] font-bold uppercase tracking-wider text-[#B8862E]">
                                            <span>{badge}</span>
                                        </div>
                                    </ServiceCard>
                                ))}
                            </div>
                        </div>
                    </article>
                    )}

                    {/* DISCIPLINE 03: Video Shoot & Editing */}
                    {(!groupSlug || groupSlug === "video-production-editing") && (
                    <article className="rounded-3xl border border-[#1B1712]/10 bg-[#F5F1E8] p-6 shadow-sm sm:p-8">
                        {/* Header Strip */}
                        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#1B1712]/10 pb-6">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-[#1B1712]/40">03/03</span>
                                <h3 className="ml-2 font-serif text-2xl font-semibold text-[#1B1712] sm:text-3xl">
                                    Video Editing &amp; Production in Delhi
                                </h3>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Full-Width Hero Media Showcase */}
                            <div className="group relative overflow-hidden rounded-2xl border border-[#1B1712]/10 bg-[#120F0C] shadow-lg">
                                <img
                                   
                                    src="/videoEditing.png"
                                    alt="Video Shoot & Editing Showcase"
                                    width="935"
                                    height="695"
                                    loading="lazy"
                                    decoding="async"
                                    className="h-[320px] w-full rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015] sm:h-[440px] lg:h-[480px]"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#120F0C]/80 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5 flex flex-wrap items-center gap-3 sm:bottom-6 sm:left-6">
                                    <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-[#1B1712]/80 px-4 py-2.5 text-white shadow-xl backdrop-blur-md">
                                        <span className="h-2 w-2 rounded-full bg-[#D99B4B]" />
                                        <span className="text-xs font-semibold tracking-wide">Cinematic Grading &amp; Sound Design Studio</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bento Capability Cards Grid */}
                            <div className="grid grid-cols-1 gap-5 pt-2 md:grid-cols-2 lg:grid-cols-3">
                                {disciplineThreeItems.map(({ icon: Icon, tag, title, description, badge, colSpan }, idx) => (
                                    <ServiceCard
                                        {...(isOverview ? { to: `/services/${serviceGroupsByTitle[title]}` } : {})}
                                        key={title}
                                        className={`group flex flex-col justify-between rounded-2xl border border-[#1B1712]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8862E]/50 hover:shadow-lg ${idx < 3 ? "d3-row-1" : "d3-row-2"} ${colSpan || ""}`}
                                    >
                                        <div>
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="d3-card-icon flex h-10 w-10 items-center justify-center rounded-xl border border-[#B8862E]/25 bg-[#FAF5EC] text-[#B8862E] transition-colors duration-300 group-hover:border-[#B8862E]/50 group-hover:bg-[#B8862E]/20">
                                                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                                                </span>
                                                <span className="text-xs font-bold uppercase tracking-wider text-[#1B1712]/55">
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
                                        <div className="mt-5 flex items-center border-t border-[#1B1712]/5 pt-4 text-[11px] font-bold uppercase tracking-wider text-[#B8862E]">
                                            <span>{badge}</span>
                                        </div>
                                    </ServiceCard>
                                ))}
                            </div>
                        </div>
                    </article>
                    )}

                </div>
            </main>

            {!isOverview && activeGroup && (
                <ServiceInformationSection sectionRef={serviceInfoRef} information={activeGroup.information} />
            )}

            {/* Call To Action Section */}
            <section
               
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
                           
                            onClick={handleStartProject}
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
            </section>
        </div>
    );
}

export default Services;
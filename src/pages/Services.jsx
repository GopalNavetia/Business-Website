import {
    AppWindow,
    BookOpen,
    Calendar,
    Camera,
    Filter,
    Gem,
    LayoutDashboard,
    Lock,
    Monitor,
    NotebookPen,
    Palette,
    PenLine,
    Paperclip,
    ScanSearch,
    Send,
    Share2,
    Sparkles,
    SwitchCamera,
    Target,
    Video,
    Wand2,
    Mic,
} from "lucide-react";
import { useState } from "react";

function Services() {
    const [activeService, setActiveService] = useState(null);

    return (
        <div>
            <section className="overflow-hidden bg-[#1B1712] text-[#F2EEE4]">
                {/* Hero Section */}
                <div className="mx-auto max-w px-6 py-6 pb-8 sm:px-8 sm:py-8 sm:pb-9">
                    <div className="flex w-fit items-center gap-2 rounded-full border border-[#F2EEE4]/10 bg-[#F2EEE4]/3 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#F2EEE4]/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F2B15B]" />
                        Services &amp; Specializations
                    </div>

                    <div className="mt-5 grid grid-cols-1 items-end gap-7 md:grid-cols-[1.9fr_0.8fr] md:gap-10">
                        <h1 className="font-serif text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl md:text-4xl">
                            Engineering Digital
                            <br />
                            Advantage.
                            <br />
                            <span className="text-[#F2B15B]">Built Without Compromise.</span>
                        </h1>

                        <p className="max-w-[32ch] border-l border-[#F2EEE4]/10 pl-5 text-sm leading-relaxed text-[#F2EEE4]/65 sm:text-base">
                            We design and engineer bespoke web platforms, data pipelines, and media assets designed for speed, clarity, and compounding business return.
                        </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 border-t border-[#B8862E]/30 pt-5 text-[10px] font-medium tracking-widest text-[#F2EEE4]/55 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap items-center gap-3 uppercase">
                            <span className="flex items-center gap-2 text-[#F2B15B]">
                                <span className="h-2 w-2 rounded-full border border-[#F2B15B]" />
                                Direct Partner Delivery
                            </span>
                            <span className="text-[#F2EEE4]/20">/</span>
                            <span>Independent Studio Practice</span>
                        </div>

                        <span className="flex items-center gap-2 uppercase">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                            Three Core Disciplines
                        </span>
                    </div>
                </div>

                {/* Core disciplines */}
                <div className="bg-[#F2EEE4] px-6 py-7 text-[#1B1712] sm:px-8 sm:py-9">
                    <div className="mx-auto max-w">
                        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                            <div>
                                <h2 className="font-serif text-xl font-semibold leading-tight sm:text-2xl lg:text-3xl">
                                    Three Core Disciplines. <span className="font-normal italic text-[#B8862E]">Built for compounding return.</span>
                                </h2>
                                <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-[#1B1712]/60 sm:text-base">
                                    Each vertical is engineered to remove operational drag and convert attention into measurable equity.
                                </p>
                            </div>

                            <span className="w-fit rounded-lg border border-[#D8D4CE] bg-white px-4 py-2 text-[10px] font-medium uppercase leading-tight tracking-widest text-[#C58A2B]">
                                19 Specializations
                                Total
                            </span>
                        </div>

                        {/* Web Design & Development */}
                        <article className="mt-8 rounded-lg border border-[#1B1712]/10 bg-[#FBF7F1] p-4 shadow-sm sm:p-5">
                            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1B1712]/10 pb-4">
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex h-5 w-8 items-center justify-center rounded-full border border-[#B8862E]/35 bg-[#F2E9DB] px-3 text-xs font-medium text-[#B8862E]">01</span>
                                    <h3 className="font-serif text-lg font-semibold sm:text-xl lg:text-2xl">Web Design &amp; Development</h3>
                                </div>
                                <span className="text-[9px] font-medium uppercase tracking-widest text-[#B8862E] sm:text-[10px]">Brand systems &amp; interface design</span>
                            </div>

                            {/* Web Wireframe */}
                            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                                <div className="rounded-xl border border-[#1B1712]/10 bg-white p-4 shadow-sm">
                                    <div className="flex items-center gap-2 border-b border-[#1B1712]/10 pb-3">
                                        <span className="h-2 w-2 rounded-full bg-[#E87878]" />
                                        <span className="h-2 w-2 rounded-full bg-[#EAC15D]" />
                                        <span className="h-2 w-2 rounded-full bg-[#7AC98D]" />
                                        <span className="mx-auto flex h-6 w-48 items-center justify-center rounded-md border border-[#1B1712]/10 bg-[#F8F2E9] text-[9px] tracking-wide text-[#6B6157]">
                                            <Lock className="mr-1 h-2.5 w-2.5 text-[#6B6157]" strokeWidth={1.5} /> anchorworks.studio
                                        </span>
                                        <Monitor className="h-3.5 w-3.5 text-stone-400" strokeWidth={1.5} />
                                    </div>

                                    <div className="mt-4 rounded-lg border border-[#1B1712]/10 bg-[#F8F2E9] p-3">
                                        <div className="flex items-center justify-between rounded-md bg-[#E9DECD] px-3 py-2">
                                            <div className="flex items-center gap-2">
                                                <span className="h-5 w-5 rounded bg-[#D4A256]" />
                                                <span className="h-2 w-20 rounded-full bg-[#B8AD9D]" />
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="h-2 w-10 rounded-full bg-[#D5CCBE]" />
                                                <span className="h-5 w-16 rounded bg-[#D4A256]" />
                                            </div>
                                        </div>

                                        <div className="mt-4 rounded-lg border border-[#B8862E]/20 bg-[#F2E9DB] p-4">
                                            <div className="h-2 w-1/4 rounded-full bg-[#D4A256]" />
                                            <div className="mt-3 h-5 w-4/5 rounded bg-[#4D4A47]" />
                                            <div className="mt-3 h-2 w-2/3 rounded-full bg-[#B8AD9D]" />
                                            <div className="mt-5 flex gap-2">
                                                <span className="h-5 w-20 rounded bg-[#151515]" />
                                                <span className="h-5 w-20 rounded border border-[#1B1712]/10 bg-white" />
                                            </div>
                                        </div>

                                        <div className="mt-5 grid grid-cols-3 gap-3">
                                            {[Gem, Sparkles, PenLine].map((Icon) => (
                                                <div className="h-22 rounded-lg border border-[#1B1712]/10 bg-white p-3" key={Icon.displayName || Icon.name}>
                                                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#F2E9DB]">
                                                        <Icon className="h-4 w-4 text-[#B8862E]" strokeWidth={1.5} />
                                                    </span>
                                                    <div className="mt-4 h-2 w-3/4 rounded-full bg-[#D8CDBD]" />
                                                    <div className="mt-2 h-2 w-1/2 rounded-full bg-[#E9E1D5]" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-4 grid grid-cols-3 gap-2">
                                        {[["#D4A256", "Gold Accent"], ["#1B1712", "Editorial Serif"], ["#D8D1C5", "Cream Paper"]].map(([color, label]) => (
                                            <div className="flex items-center gap-2 rounded border border-[#1B1712]/10 bg-[#FBF7F1] px-2 py-2 text-[9px] tracking-wide text-[#6B6157]" key={label}>
                                                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
                                                {label}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {[
                                        ["UI/UX Design", "Interactive interfaces mapped around user behavior, touch targets, and clear navigation paths."],
                                        ["Logo & Brand Identity", "Custom-tailored typography systems, brand marks, and color tokens built to establish immediate credibility."],
                                        ["Design Systems & UI Libraries", "Scalable component architecture and design tokens that keep your digital platform cohesive as you scale."],
                                        ["Marketing Collateral", "High-end layout design for marketing assets, booklets, and business print collateral."],
                                        ["Conversion Landing Pages", "Single-offer page architectures engineered with clear visual hierarchy to turn traffic into enquiries."],
                                    ].map(([title, description], index) => {
                                        const Icon = [AppWindow, Palette, LayoutDashboard, BookOpen, Filter][index];

                                        return (
                                            <div
                                                key={title}
                                                onTouchStart={() => setActiveService(title)}
                                                onTouchEnd={() => setActiveService(null)}
                                                onTouchCancel={() => setActiveService(null)}
                                                className={`flex gap-3 rounded border bg-white px-3 py-2 transition-colors duration-200 ${activeService === title ? "border-[#B8862E]" : "border-[#1B1712]/10 hover:border-[#B8862E]"}`}
                                            >
                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#B8862E]/25 bg-[#FAF5EC]">
                                                    <Icon className="h-4 w-4 font-bold text-[#B8862E]" strokeWidth={1.5} />
                                                </span>
                                                <div>
                                                    <h4 className="text-xs font-semibold sm:text-sm">{title}</h4>
                                                    <p className="mt-0.5 text-[10px] leading-relaxed text-[#1B1712]/60 sm:text-xs">{description}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </article>

                        {/* Search & Digital Marketing */}
                        <article className="mt-8 rounded-lg border border-[#1B1712]/10 bg-[#FBF7F1] p-4 shadow-sm sm:p-5">
                            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1B1712]/10 pb-4">
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex h-5 w-8 items-center justify-center rounded-full border border-[#B8862E]/35 bg-[#F2E9DB] px-3 text-xs font-medium text-[#B8862E]">02</span>
                                    <h3 className="font-serif text-lg font-semibold sm:text-xl lg:text-2xl">Search &amp; Digital Marketing</h3>
                                </div>
                                <span className="text-[9px] font-medium uppercase tracking-widest text-[#B8862E] sm:text-[10px]">Traffic acquisition &amp; funnel engineering</span>
                            </div>

                            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                                <div className="space-y-2">
                                    {[
                                        [ScanSearch, "Search Engine Optimization (SEO) & Local Business SEO:", "Technical sitemaps, structured schemas, and local search strategies to index and rank on high-intent terms."],
                                        [Target, "Pay-Per-Click Advertising (Google & Meta Ads):", "Performance ad campaigns backed by server-side tracking and analytics."],
                                        [Share2, "Social Media Marketing (SMM):", "Multi-channel content curation, community building, and strategic campaign scheduling."],
                                        [NotebookPen, "Content Marketing & Copywriting:", "Value-driven, persuasive copy styled to capture attention and nurture prospects."],
                                        [Send, "Email & WhatsApp Marketing:", "Behavior-based, automated email flows and mobile chat campaigns running on autopilot."],
                                    ].map(([Icon, title, description]) => (
                                        <div
                                            key={title}
                                            onTouchStart={() => setActiveService(title)}
                                            onTouchEnd={() => setActiveService(null)}
                                            onTouchCancel={() => setActiveService(null)}
                                            className={`flex gap-3 rounded border bg-white px-3 py-3 transition-colors duration-200 ${activeService === title ? "border-[#B8862E]" : "border-[#1B1712]/10 hover:border-[#B8862E]"}`}
                                        >
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#B8862E]/25 bg-[#FAF5EC]">
                                                <Icon className="h-4 w-4 text-[#B8862E]" strokeWidth={1.5} />
                                            </span>
                                            <div>
                                                <h4 className="text-xs font-semibold leading-relaxed sm:text-sm">{title}</h4>
                                                <p className="mt-0.5 text-[10px] leading-relaxed text-[#1B1712]/60 sm:text-xs">{description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="rounded-xl border border-[#1B1712]/10 bg-white p-4 shadow-sm">
                                    <div className="flex items-center justify-between border-b border-[#1B1712]/10 pb-3">
                                        <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#1B1712]">
                                            <span className="h-2 w-2 rounded-full bg-[#D4A256]" /> Customer Conversion Journey
                                        </span>
                                        <span className="rounded border border-[#B8862E]/20 bg-[#FBF7F1] px-2 py-1 text-[8px] uppercase tracking-wide text-[#B8862E]">How we turn visitors into inquiries</span>
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        {[
                                            ["01", "Targeted Discovery", "Reaching high-intent customers on Google & Social", "Qualified Reach"],
                                            ["02", "Fast-Loading Landing Page", "Instant mobile load so visitors never bounce", "Frictionless"],
                                            ["03", "Engaging Offer & Trust", "Clear value proposition and seamless enquiry forms", "High Intent"],
                                            ["04", "Direct Lead Delivery", "Inquiries routed straight to your WhatsApp or email", "Instant Alert"],
                                        ].map(([number, title, description, status]) => (
                                            <div key={number} className="flex items-center gap-3 rounded-lg border border-[#1B1712]/10 bg-[#FBF7F1] p-2">
                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-[#B8862E]/25 text-[10px] font-semibold text-[#B8862E]">{number}</span>
                                                <div className="min-w-0 flex-1">
                                                    <h4 className="text-[10px] font-semibold sm:text-xs">{title}</h4>
                                                    <p className="text-[9px] leading-relaxed text-[#1B1712]/55 sm:text-[10px]">{description}</p>
                                                </div>
                                                <span className="hidden rounded border border-[#1B1712]/10 bg-white px-2 py-1 text-[8px] text-[#B8862E] sm:block">{status}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                                        {[
                                            ["Average Page Load", "Under 1.5s", "Optimized for mobile"],
                                            ["Inquiry Capture", "Zero Dropped Leads", "Reliable form delivery"],
                                            ["Response Speed", "Instant Alerts", "Direct to your team"],
                                        ].map(([label, value, note]) => (
                                            <div key={label} className="rounded border border-[#1B1712]/10 bg-[#FBF7F1] p-2">
                                                <p className="text-[8px] uppercase tracking-wide text-[#6B6157]">{label}</p>
                                                <p className="mt-2 font-serif text-sm font-semibold">{value}</p>
                                                <p className="mt-1 text-[9px] text-emerald-500">{note}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 border-t border-[#1B1712]/10 pt-3 text-[9px] text-[#6B6157]">
                                        <span><strong className="text-[#1B1712]">Platforms &amp; Integrations:</strong></span>
                                        <span>Google Search · Meta · WhatsApp · Direct Email &amp; CRM</span>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Video Shoot & Editing */}
                        <article className="mt-8 rounded-lg border border-[#1B1712]/10 bg-[#FBF7F1] p-4 shadow-sm sm:p-5">
                            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1B1712]/10 pb-4">
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex h-5 w-8 items-center justify-center rounded-full border border-[#B8862E]/35 bg-[#F2E9DB] px-3 text-xs font-medium text-[#B8862E]">03</span>
                                    <h3 className="font-serif text-lg font-semibold sm:text-xl lg:text-2xl">Video Shoot &amp; Editing</h3>
                                </div>
                                <span className="text-[9px] font-medium uppercase tracking-widest text-[#B8862E] sm:text-[10px]">Performance media &amp; video operations</span>
                            </div>

                            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                                <div className="rounded-xl border border-[#1B1712]/10 bg-white p-4 shadow-sm">
                                    <div className="flex items-center justify-between border-b border-[#1B1712]/10 pb-3">
                                        <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#1B1712]">
                                            <span className="h-2 w-2 rounded-full bg-[#D4A256]" /> Master Video &amp; Sound Console
                                        </span>
                                        <span className="rounded border border-emerald-400/30 bg-emerald-50 px-2 py-1 text-[8px] uppercase tracking-wide text-emerald-600"><span className="animate-pulse">●</span> Calibrated: Rec.709 / DCI-P3</span>
                                    </div>

                                    <div className="mt-3 rounded-lg border border-[#1B1712]/10 bg-[#11100F] p-4">
                                        <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[8px] text-[#D4A256]">
                                            <span className="rounded border border-[#B8862E]/50 px-2 py-1">4K MASTER 24.00 FPS</span>
                                            <span className="text-[#A9A092]">ProRes 4444 XQ</span>
                                            <span className="rounded border border-[#B8862E]/50 px-2 py-1">00:04:18:12</span>
                                        </div>

                                        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                            <div className="rounded border border-white/10 bg-[#171514] p-3">
                                                <div className="flex justify-between font-mono text-[8px] text-[#D4A256]"><span>☷ S-CURVE<br />GRADE</span><span className="text-[#B8AD9D]">Highlights: +12 · Blacks: -4</span></div>
                                                <div className="relative mt-3 h-20 overflow-hidden rounded bg-[#0B0B0A]">
                                                    <div className="absolute bottom-3 left-3 h-1 w-4/5 rotate-[-15deg] rounded-full bg-[#D4A256] shadow-[0_0_8px_#D4A256]" />
                                                    <div className="absolute inset-x-1/2 top-0 h-full border-l border-dashed border-white/10" />
                                                </div>
                                                <div className="mt-2 flex justify-between font-mono text-[8px] text-[#A9A092]"><span>Shadows Lifted</span><span className="text-[#D4A256]">Film Print Emulation</span></div>
                                            </div>

                                            <div className="rounded border border-white/10 bg-[#171514] p-3">
                                                <div className="flex justify-between font-mono text-[8px] text-[#D4A256]"><span>▥ AUDIO MASTERING</span><span className="text-emerald-400">-14.0 LUFS Integrated</span></div>
                                                <div className="relative mt-3 h-20 overflow-hidden rounded bg-[#0B0B0A]">
                                                    <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-emerald-400/60" />
                                                    <div className="absolute left-2 top-1/2 h-8 w-4/5 -translate-y-1/2 animate-pulse rounded-full border-2 border-[#D4A256] [clip-path:polygon(0_50%,8%_0,16%_100%,24%_50%,32%_0,40%_100%,48%_50%,56%_0,64%_100%,72%_50%,80%_0,88%_100%,100%_50%,100%_60%,88%_110%,80%_60%,72%_110%,64%_60%,56%_110%,48%_60%,40%_110%,32%_60%,24%_110%,16%_60%,8%_110%,0_60%)]" />
                                                </div>
                                                <div className="mt-2 flex justify-between font-mono text-[8px] text-[#A9A092]"><span>Dialogue Clarity</span><span className="text-emerald-400">0.0 dB True Peak</span></div>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[8px] text-[#E9E1D5]"><span><span className="text-[#D4A256]">●</span> Color Science: DaVinci Wide Gamut Intermediate</span><span className="text-[#D4A256]">ACEScc Compliant</span></div>
                                    </div>

                                    <div className="mt-3 rounded-lg border border-[#1B1712]/10 bg-[#F8F2E9] p-3">
                                        <div className="flex justify-between font-mono text-[8px] text-[#A9A092]">
                                            <span>00:00:00</span><span>00:02:00</span><span className="text-[#B8862E]">00:04:18 (Current Edit)</span><span>00:06:00</span><span>00:08:00</span>
                                        </div>
                                        {[
                                            ["V1 - Video Footage", "#D4A256"],
                                            ["V2 - Titles & Captions", "#B8AD9D"],
                                            ["A1 - Voiceover & Dialog", "#D4A256"],
                                            ["A2 - Sound Design", "#B8AD9D"],
                                        ].map(([label, color], index) => (
                                            <div className="mt-2 flex items-center gap-3" key={label}>
                                                <span className="w-28 shrink-0 font-mono text-[8px] text-[#A9A092]">{label}</span>
                                                <div className={`flex flex-1 items-center gap-1 rounded-sm bg-[#E9DECD] px-2 ${index === 0 ? "h-5" : index === 1 ? "h-3" : index === 2 ? "h-4" : "h-3.5"}`}>
                                                    <span className={`${index === 0 ? "h-2" : index === 1 ? "h-1" : "h-1.5"} rounded-full`} style={{ backgroundColor: color, width: `${index === 0 ? 42 : index === 1 ? 68 : index === 2 ? 30 : 52}%` }} />
                                                    <span className={`${index === 2 ? "h-2" : "h-1.5"} rounded-full bg-[#B8AD9D]`} style={{ width: `${index === 0 ? 25 : index === 1 ? 34 : index === 2 ? 22 : 18}%` }} />
                                                    <span className="h-1.5 rounded-full bg-[#D4A256]" style={{ width: `${index === 0 ? 20 : index === 1 ? 14 : index === 2 ? 35 : 24}%` }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 flex flex-wrap justify-between gap-2 text-[9px] text-[#6B6157]">
                                        <span><strong className="text-[#B8862E]"><span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />Workflow:</strong> Script to Final Master Delivery</span>
                                        <span><strong className="text-[#B8862E]">Format:</strong> 16:9 Landscape · 9:16 Vertical</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {[
                                        [Calendar, "Commercial & Ad Film Production:", "Engaging pacing and dynamic video cuts edited specifically to tell brand stories on social feeds."],
                                        [Camera, "Product Shoot & Video Showcase:", "High-definition video capturing physical craftsmanship, material details, and functionality."],
                                        [Video, "Corporate & Event Video Shoot:", "Multi-camera coverage, executive interviews, and professional event highlights."],
                                        [SwitchCamera, "Reels & YouTube Shorts Editing:", "Mobile-optimized edits equipped with high-retention transitions, captions, and staccato pacing."],
                                        [Wand2, "Video Post-Production & Color Grading:", "Color matching, cinematic grading, and advanced audio mastering."],
                                        [Paperclip, "Motion Graphics & VFX:", "Stylized transitions, kinetic typography overlays, and custom logo animations."],
                                        [Mic, "Podcast Shoot & Audio Editing:", "Clean multi-mic audio mixing, sound grading, and title graphic integration."],
                                    ].map(([Icon, title, description]) => (
                                        <div
                                            key={title}
                                            onTouchStart={() => setActiveService(title)}
                                            onTouchEnd={() => setActiveService(null)}
                                            onTouchCancel={() => setActiveService(null)}
                                            className={`flex gap-3 rounded border bg-white px-3 py-2.5 transition-colors duration-200 ${activeService === title ? "border-[#B8862E]" : "border-[#1B1712]/10 hover:border-[#B8862E]"}`}
                                        >
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#B8862E]/25 bg-[#FAF5EC]">
                                                <Icon className="h-4 w-4 text-[#B8862E]" strokeWidth={1.5} />
                                            </span>
                                            <div>
                                                <h4 className="text-xs font-semibold leading-relaxed sm:text-sm">{title}</h4>
                                                <p className="mt-0.5 text-[10px] leading-relaxed text-[#1B1712]/60 sm:text-xs">{description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-[#B8862E] px-6 py-8 pb-11 text-[#1B1712] sm:px-8 sm:py-10 sm:pb-14">
                    <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                        <div className="max-w-xl">
                            <h2 className="max-w-lg font-serif text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                                Need a clean website or a custom system? <br />Let’s talk.
                            </h2>

                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1B1712]/80 sm:text-base">
                                Bring us your business bottleneck. We’ll tell you honestly whether you need a website, a custom system, or just a smarter setup.
                            </p>
                        </div>

                        <a
                            href="https://wa.me/917011042987?text=Hi%20Anchorworks%2C%20I%20would%20like%20to%20enquire%20about%20a%20project."
                            target="_blank"
                            className="inline-flex w-fit items-center justify-center rounded-[7px] bg-[#1B1712] px-7 py-3.5 text-sm font-semibold text-[#F2EEE4] transition-colors hover:bg-[#241F17] sm:px-8 sm:text-base"
                        >
                            Start a project
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
import React, { useState } from "react";
import { TriangleAlert, SquareTerminal, BadgeCheck } from "lucide-react";

function OurWork() {
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
            title: "Professional Portfolios",
            bottleneck: "THE BOTTLENECK",
            bottleneckText:
                "Medical and consultancy sites often feature cluttered layouts that overwhelm patients, causing them to abandon the page before booking.",
            build: "THE BUILD",
            buildText:
                "A structured user interface engineered strictly around visual hierarchy, comfortable touch-targets, and direct booking pathways.",
            value: "BUSINESS VALUE",
            valueText:
                "Minimizes user friction to guide prospective patients smoothly from landing to confirmed appointment.",
        },
        {
            number: "03/06",
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
            title: "Cafés & Food Menus",
            bottleneck: "THE BOTTLENECK",
            bottleneckText:
                "Clunky, slow-loading PDF menus that require constant zooming and pinch-gestures, destroying the customer experience on mobile.",
            build: "THE BUILD",
            buildText:
                "Ultra-lightweight digital menu pages styled with high readability and optimized for outdoor, high-contrast mobile screens.",
            value: "BUSINESS VALUE",
            valueText:
                "Bypasses heavy app downloads, allowing tables to scan, browse, and choose their meals in seconds.",
        },
        {
            number: "05/06",
            title: "NGOs & Community Platforms",
            bottleneck: "THE BOTTLENECK",
            bottleneckText:
                "Relying on third-party donation forms that charge high monthly subscription fees and redirect donors to unfamiliar, untrustworthy payment pages.",
            build: "THE BUILD",
            buildText:
                "Direct integration of secure, serverless API payment gateways built natively into your custom web architecture.",
            value: "BUSINESS VALUE",
            valueText:
                "Ensures 100% of donor funding goes directly to your cause while completely bypassing platform transaction fees.",
        },
        {
            number: "06/06",
            title: "Gyms & Fitness Booking",
            bottleneck: "THE BOTTLENECK",
            bottleneckText:
                "Gym owners trapped paying high monthly SaaS subscription fees to third-party portals just to manage simple member schedules and class rosters.",
            build: "THE BUILD",
            buildText:
                "A private, self-hosted scheduling system built around automated member lists and real-time class booking.",
            value: "BUSINESS VALUE",
            valueText:
                "Completely eliminates recurring software overhead, giving you a custom booking platform that your business owns forever.",
        },
    ];

    const [activeCard, setActiveCard] = useState(null);

    return (
        <div>
            <section className="overflow-hidden bg-[#1B1712] text-[#F2EEE4]">
                {/* Hero Section */}
                <div className="mx-auto max-w px-6 py-6 pb-10 sm:px-8 sm:py-10">
                    <div className="grid grid-cols-1 items-center gap-9 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
                        {/* Copy Column */}
                        <div>
                            <h1 className="text-2xl font-serif font-semibold leading-[1.15] tracking-tight sm:text-3xl md:text-4xl">
                                Custom Web Assets,
                                <br />
                                <span className="text-[#B8862E]">Engineered for Trust.</span>
                            </h1>

                            <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-[#F2EEE4]/60 sm:text-lg">
                                We design and build fast, custom websites and digital tools that streamline your business operations and convert traffic into growth.
                            </p>

                            <button
                                type="button"
                                className="mt-6 rounded-full bg-[#B8862E] px-6 py-3 text-sm font-semibold text-[#1B1712] transition hover:bg-[#D2A64F]"
                            >
                                Start a project
                            </button>
                        </div>

                        {/* Build Standards Box */}
                        <div className="rounded-2xl border border-[#B8862E]/30 bg-[#F2EEE4]/[0.04] p-4 shadow-2xl backdrop-blur-md sm:p-5">
                            <div className="flex items-center justify-between px-1">
                                <h2 className="text-xs font-semibold uppercase tracking-wide text-[#B8862E]">
                                    Build standards
                                </h2>

                                <span className="text-[9px] uppercase tracking-wide text-[#F2EEE4]/40">
                                    Built for growth
                                </span>
                            </div>

                            <div className="mt-5 space-y-3 sm:grid sm:grid-cols-2 sm:gap-3 sm:space-y-0">
                                {buildStandards.map((standard) => (
                                    <div
                                        key={standard.number}
                                        className="flex gap-3 rounded-xl border border-[#F2EEE4]/10 bg-[#F2EEE4]/[0.04] p-3"
                                    >
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#B8862E]/40 bg-[#B8862E]/10 font-serif text-xs font-semibold text-[#B8862E]">
                                            {standard.number}
                                        </span>

                                        <div>
                                            <h3 className="font-serif text-sm font-semibold text-[#F2EEE4]">
                                                {standard.title}
                                            </h3>

                                            <p className="mt-1 text-xs leading-relaxed text-[#F2EEE4]/55">
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
                <div className="bg-[#F2EEE4] text-[#1B1712] mx-0 px-6 py-8 pb-11 sm:px-8 sm:py-9 sm:pb-14">
                    <div className="mx-auto max-w">
                        <h2 className="max-w-4xl font-serif text-xl font-semibold leading-tight sm:text-2xl lg:text-3xl">
                            Six kinds of projects.{" "}
                            <span className="text-[#B8862E]">Built for performance.</span>
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1B1712]/70 sm:text-base">
                            Every build targets specific real-world bottlenecks, replaced with lightweight custom code and clean operational pathways.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                        {projectCategories.map((category) => {
                            return (
                                <div
                                    key={category.number}
                                    onTouchStart={() => setActiveCard(category.number)}
                                    onTouchEnd={() => setActiveCard(null)}
                                    onTouchCancel={() => setActiveCard(null)}
                                    className={`group flex min-h-[235px] flex-col rounded-lg border bg-white p-7 transition-colors duration-200 sm:min-h-[250px] sm:p-8 ${activeCard === category.number
                                        ? "border-[#B8862E]"
                                        : "border-[#B8862E]/25 hover:border-[#B8862E]"
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B8862E]">
                                            Archetype {category.number.split("/")[0]}
                                        </span>
                                        <span className="text-[10px] font-medium tracking-wide text-[#9B8B7E]">
                                            {category.number}
                                        </span>
                                    </div>

                                    <h3 className="mt-6 font-serif text-lg font-bold text-[#1B1712]">
                                        {category.title}
                                    </h3>

                                    <div className="mt-5 space-y-4">
                                        {/* Bottleneck */}
                                        <div className="flex gap-3 rounded-lg border border-[#E8D9C3] bg-[#FBF7F1] p-4">
                                            <TriangleAlert className="h-5 w-5 shrink-0 text-[#B8862E] mt-0.5" strokeWidth={1.5} />
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
                                        <div className="flex gap-3 rounded-lg border border-[#E8D9C3] bg-[#FBF7F1] p-4">
                                            <SquareTerminal className="h-5 w-5 shrink-0 text-amber-700 mt-0.5" strokeWidth={1.5} />
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
                                        <div className="flex gap-3 rounded-lg border border-[#E8D9C3] bg-[#FBF7F1] p-4">
                                            <BadgeCheck className="h-5 w-5 shrink-0 text-yellow-600 mt-0.5" strokeWidth={1.5} />
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
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OurWork;
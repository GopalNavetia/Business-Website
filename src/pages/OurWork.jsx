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

    return (
        <div>
            <section className="overflow-hidden bg-[#1B1712] px-6 pb-10 pt-5 text-[#F2EEE4] sm:px-8 sm:pb-12 sm:pt-12">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-9 sm:grid-cols-[5fr_5fr] sm:gap-0">
                    <div>
                        <h1 className="max-w-xl font-serif text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl md:text-4xl">
                            Custom Web Assets,
                            <br />
                            <span className="text-[#B8862E]">
                                Engineered for Trust.
                            </span>
                        </h1>

                        <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-[#F2EEE4]/60 sm:text-lg">
                            We design and build fast, custom websites and digital
                            tools that streamline your business operations and
                            convert traffic into growth.
                        </p>

                        <button
                            type="button"
                            className="mt-6 rounded-full bg-[#B8862E] px-6 py-3 text-sm font-semibold text-[#1B1712] transition hover:bg-[#D2A64F]"
                        >
                            Start a project
                        </button>
                    </div>

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
            </section>
        </div>
    );
}

export default OurWork;
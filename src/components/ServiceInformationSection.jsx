function ServiceInformationSection({ information, sectionRef }) {
    if (!information) return null;

    return (
        <section ref={sectionRef} className="bg-[#FAF7F2] px-5 py-14 text-[#1B1712] sm:px-8 md:py-20">
            <div className="mx-auto max-w-7xl">
                <header className="mx-auto max-w-3xl text-center">
                    <p className="service-info-heading font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B8862E]">
                        A little more about the work
                    </p>
                    <h2 className="service-info-heading mt-3 font-serif text-2xl font-semibold uppercase tracking-wide sm:text-3xl">
                        {information.whyTitle}
                    </h2>
                </header>

                <div className="service-info-copy mx-auto mt-7 max-w-5xl rounded-2xl border border-[#1B1712]/10 border-l-4 border-l-[#B8862E] bg-white px-5 py-6 shadow-sm sm:px-7 sm:py-8">
                    <p className="text-sm leading-7 text-[#1B1712]/75 sm:text-base">
                        {information.why}
                    </p>
                </div>

                <div className="mt-12 sm:mt-16">
                    <h3 className="service-info-heading text-center font-serif text-xl font-semibold uppercase tracking-wide sm:text-2xl">
                        {information.buildTitle}
                    </h3>
                    <div className="mx-auto mt-7 grid max-w-5xl gap-4 md:grid-cols-3">
                        {information.offerings.map(({ title, description }, index) => (
                            <article
                                key={title}
                                className="service-info-card rounded-2xl border border-[#1B1712]/10 border-l-4 border-l-[#B8862E] bg-[#F5F1E8] p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:p-6"
                            >
                                <span className="font-mono text-xs font-semibold tracking-wider text-[#B8862E]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h4 className="mt-4 font-sans text-base font-bold uppercase tracking-wide">
                                    {title}
                                </h4>
                                <p className="mt-3 text-sm leading-relaxed text-[#1B1712]/70">
                                    {description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceInformationSection;

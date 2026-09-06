function Footer() {
    return (
        <footer className="bg-[#1B1712] px-6 py-8 pb-11 text-[#F2EEE4] sm:px-8 sm:py-10 sm:pb-14">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-16 lg:gap-24">
                <div>
                    <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-[#F2EEE4]">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className="shrink-0">
                            <rect x="1" y="1" width="24" height="24" rx="5" stroke="#B8862E" strokeWidth="1.6" />
                            <path d="M8 17V9M13 17V6M18 17V12" stroke="#B8862E" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                        Anchorworks
                    </h2>

                    <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#F2EEE4]/65 sm:text-base">
                        A small studio building websites and business systems for people who'd
                        rather not think about the software.
                    </p>
                </div>

                <div className="sm:pl-22">
                    <h3 className="font-serif text-base font-semibold text-[#F2EEE4]">
                        Quick Links
                    </h3>

                    <nav className="mt-5 flex flex-col gap-4 text-sm text-[#F2EEE4]/65 sm:text-base">
                        <a href="#" className="transition-colors hover:text-[#B8862E]">
                            Home
                        </a>
                        <a href="#" className="transition-colors hover:text-[#B8862E]">
                            Our work
                        </a>
                        <a href="#" className="transition-colors hover:text-[#B8862E]">
                            Services
                        </a>
                        <a href="#" className="transition-colors hover:text-[#B8862E]">
                            Contact
                        </a>
                    </nav>
                </div>

                <div>
                    <h3 className="font-serif text-base font-semibold text-[#F2EEE4]">
                        Studio
                    </h3>

                    <div className="mt-5 flex flex-col gap-4 text-sm text-[#F2EEE4]/65 sm:text-base">
                        <a href="#" className="transition-colors hover:text-[#B8862E]">
                            How we work
                        </a>
                        <a href="#" className="transition-colors hover:text-[#B8862E]">
                            hello@anchorworks.studio
                        </a>
                        <span>Delhi NCR, India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
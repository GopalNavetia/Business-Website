import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    const navItems = [
        { label: "Home", path: "/" },
        { label: "Our work", path: "/our-work" },
        { label: "Services", path: "/services" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <footer className="bg-[#1B1712] px-6 py-8 pb-11 text-[#F2EEE4] sm:px-8 sm:py-10 sm:pb-14">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-16 lg:gap-24">
                <div>
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="flex cursor-pointer items-center gap-2 font-serif text-2xl font-semibold text-[#F2EEE4]"
                    >
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <rect x="1" y="1" width="24" height="24" rx="5" stroke="#B8862E" strokeWidth="1.6" />
                            <path d="M8 17V9M13 17V6M18 17V12" stroke="#B8862E" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                        Anchorworks
                    </button>

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
                        {navItems.map((item) => (
                            <button
                                key={item.path}
                                type="button"
                                onClick={() => navigate(item.path)}
                                className="w-fit cursor-pointer transition-colors hover:text-[#B8862E]"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>

                <div>
                    <h3 className="font-serif text-base font-semibold text-[#F2EEE4]">
                        Studio
                    </h3>

                    <div className="mt-5 flex flex-col gap-4 text-sm text-[#F2EEE4]/65 sm:text-base">
                        <button
                            type="button"
                            onClick={() => navigate("/services")}
                            className="w-fit cursor-pointer transition-colors hover:text-[#B8862E]"
                        >
                            How we work
                        </button>

                        <a
                            href="mailto:hello@anchorworks.studio"
                            className="transition-colors hover:text-[#B8862E]"
                        >
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
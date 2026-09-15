import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MY_EMAIL = import.meta.env.VITE_MY_EMAIL;

function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [location.pathname]);

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
                        onClick={() => handleNavigate('/')}
                        className="flex cursor-pointer items-center gap-2.5 font-serif text-xl font-bold tracking-wide"
                    >
                        <img src="/android-chrome-512x512.png" alt="Anchorworks" className="h-8 w-8 rounded-md" />
                        <span className="text-[#F2EEE4]">Anchor<span className="text-[#B88A3D]">Works</span></span>
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
                            onClick={() => navigate("/#process")}
                            className="w-fit cursor-pointer transition-colors hover:text-[#B8862E]"
                        >
                            How we work
                        </button>

                        <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${MY_EMAIL}&su=Project%20Enquiry`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open in Gmail"
                            className="transition-colors hover:text-[#B8862E]"
                        >
                            {MY_EMAIL}
                        </a>

                        <span>Delhi NCR, India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { serviceGroups } from "../data/services";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Our Work", path: "/our-work" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#F2EEE4]/10 bg-[#1B1712]">
      <div className="flex h-[68px] w-full items-center justify-between px-6 sm:h-[76px] sm:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex cursor-pointer items-center gap-2.5 font-serif text-xl font-bold tracking-wide"
        >
          <img src="/logo.png" alt="Anchorworks" className="h-8 w-8 rounded-md" />
          <span className="text-[#F2EEE4]">Anchor<span className="text-[#B88A3D]">Works</span></span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-9 sm:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative cursor-pointer text-sm font-medium transition-colors ${
                  isActive ? 'text-[#B8862E]' : 'text-[#F2EEE4]/60 hover:text-[#F2EEE4]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1.5px] w-full origin-left bg-[#B8862E] transition-transform duration-300 ease-out ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            );
          })}
          <div
            className="group relative"
            onPointerEnter={() => setDesktopServicesOpen(true)}
            onPointerLeave={() => setDesktopServicesOpen(false)}
            onFocus={() => setDesktopServicesOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setDesktopServicesOpen(false);
              }
            }}
          >
            <Link
              to="/services"
              aria-haspopup="true"
              aria-expanded={desktopServicesOpen}
              aria-controls="desktop-services-menu"
              className={`group/link relative inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors ${
                location.pathname.startsWith("/services")
                  ? "text-[#B8862E]"
                  : "text-[#F2EEE4]/60 hover:text-[#F2EEE4]"
              }`}
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${desktopServicesOpen ? "rotate-180" : ""}`} />
              <span
                className={`absolute -bottom-1 left-0 h-[1.5px] w-full origin-left bg-[#B8862E] transition-transform duration-300 ease-out ${
                  location.pathname.startsWith("/services")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover/link:scale-x-100"
                }`}
              />
            </Link>
            <div
              id="desktop-services-menu"
              className={`absolute left-1/2 top-full z-50 w-[min(340px,calc(100vw-2rem))] -translate-x-1/2 pt-4 transition-opacity duration-200 ${
                desktopServicesOpen
                  ? "visible pointer-events-auto opacity-100"
                  : "invisible pointer-events-none opacity-0"
              }`}
            >
              <div className="rounded-2xl border border-[#F2EEE4]/10 bg-[#211C16] p-2 shadow-2xl shadow-black/30">
                <p className="px-4 pb-2 pt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F2EEE4]/40">
                  Explore our services
                </p>
                <div className="flex flex-col">
                  {serviceGroups.map((group, index) => (
                    <Link
                      key={group.slug}
                      to={`/services/${group.slug}`}
                      onClick={() => setDesktopServicesOpen(false)}
                      className="group/item flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-[#F2EEE4]/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D99B4B]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#D99B4B]/20 bg-[#D99B4B]/10 font-mono text-[10px] font-bold text-[#D99B4B]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-serif text-sm font-semibold leading-snug text-[#F2EEE4] transition-colors group-hover/item:text-[#D99B4B]">
                          {group.title}
                        </span>
                        <span className="mt-1 block text-xs text-[#F2EEE4]/45">
                          {group.services.length} services
                        </span>
                      </span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-[#F2EEE4]/35 transition-all group-hover/item:translate-x-0.5 group-hover/item:text-[#D99B4B]" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/contact"
            className={`group relative cursor-pointer text-sm font-medium transition-colors ${
              location.pathname === "/contact" ? "text-[#B8862E]" : "text-[#F2EEE4]/60 hover:text-[#F2EEE4]"
            }`}
          >
            Contact
            <span className={`absolute -bottom-1 left-0 h-[1.5px] w-full origin-left bg-[#B8862E] transition-transform duration-300 ease-out ${location.pathname === "/contact" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact#enquiry-form"
            onClick={closeMenu}
            className="hidden cursor-pointer rounded-[7px] bg-[#B8862E] px-5 py-2.5 text-sm font-semibold text-[#1B1712] transition-colors hover:bg-[#c99636] sm:inline-flex"
          >
            Start a project
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="cursor-pointer p-2 text-[#F2EEE4] hover:text-[#B8862E] sm:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav aria-label="Mobile navigation" className="absolute left-0 top-full flex max-h-[calc(100vh-68px)] w-full flex-col items-center gap-4 overflow-y-auto border-t border-[#F2EEE4]/10 bg-[#1B1712] px-6 py-4 sm:hidden">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`py-1 text-base font-medium transition-colors ${
                  isActive ? 'text-[#B8862E]' : 'text-[#F2EEE4]/80 hover:text-[#F2EEE4]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="w-full">
            <div className="flex items-center justify-center gap-2">
              <Link
                to="/services"
                onClick={closeMenu}
                className={`py-1 text-base font-medium transition-colors ${
                  location.pathname.startsWith("/services")
                    ? "text-[#B8862E]"
                    : "text-[#F2EEE4]/80 hover:text-[#F2EEE4]"
                }`}
              >
                Services
              </Link>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((open) => !open)}
                aria-label="Show service pages"
                aria-expanded={mobileServicesOpen}
                className="rounded p-1 text-[#F2EEE4]/70 hover:text-[#B8862E]"
              >
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            {mobileServicesOpen && (
              <div className="mt-2 w-full rounded-xl border border-[#F2EEE4]/10 bg-[#211C16] p-2">
                <p className="px-3 pb-2 pt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F2EEE4]/40">
                  Explore our services
                </p>
                <div className="flex flex-col">
                  {serviceGroups.map((group, index) => (
                    <Link
                      key={group.slug}
                      to={`/services/${group.slug}`}
                      onClick={closeMenu}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors hover:bg-[#F2EEE4]/[0.06]"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#D99B4B]/20 bg-[#D99B4B]/10 font-mono text-[10px] font-bold text-[#D99B4B]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-serif text-sm font-semibold text-[#F2EEE4]">
                          {group.title}
                        </span>
                        <span className="mt-1 block text-xs text-[#F2EEE4]/45">
                          {group.services.length} services
                        </span>
                      </span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-[#F2EEE4]/40" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`py-1 text-base font-medium transition-colors ${
              location.pathname === "/contact" ? "text-[#B8862E]" : "text-[#F2EEE4]/80 hover:text-[#F2EEE4]"
            }`}
          >
            Contact
          </Link>

          <Link
            to="/contact#enquiry-form"
            onClick={closeMenu}
            className="mt-2 w-full cursor-pointer rounded-[7px] bg-[#B8862E] px-5 py-3 text-center text-sm font-semibold text-[#1B1712]"
          >
            Start a project
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#F2EEE4]/10 bg-[#1B1712]">
      <div className="flex h-[68px] w-full items-center justify-between px-6 sm:h-[76px] sm:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex cursor-pointer items-center gap-2.5 font-serif text-xl font-bold tracking-wide"
        >
          <img src="/android-chrome-512x512.png" alt="Anchorworks" className="h-8 w-8 rounded-md" />
          <span className="text-[#F2EEE4]">Anchor<span className="text-[#B88A3D]">Works</span></span>
        </Link>

        <nav className="hidden items-center gap-9 sm:flex">
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
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer p-2 text-[#F2EEE4] hover:text-[#B8862E] sm:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col items-center gap-4 border-t border-[#F2EEE4]/10 bg-[#1B1712] px-6 py-4 sm:hidden">
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

          <Link
            to="/contact#enquiry-form"
            onClick={closeMenu}
            className="mt-2 w-full cursor-pointer rounded-[7px] bg-[#B8862E] px-5 py-3 text-center text-sm font-semibold text-[#1B1712]"
          >
            Start a project
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
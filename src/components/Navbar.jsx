import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#F2EEE4]/10 bg-[#1B1712]">
        <div className="flex h-[68px] w-full items-center justify-between px-6 sm:h-[76px] sm:px-8">
          {/* Brand */}
          <div className="flex items-center gap-2.5 font-serif font-bold text-xl text-[#F2EEE4] cursor-pointer">
            {/* Logo */}
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className="shrink-0">
              <rect x="1" y="1" width="24" height="24" rx="5" stroke="#B8862E" strokeWidth="1.6" />
              <path d="M8 17V9M13 17V6M18 17V12" stroke="#B8862E" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            Anchorworks
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden sm:flex items-center gap-9">
            <button className="cursor-pointer text-sm font-medium text-[#F2EEE4]/60 hover:text-[#F2EEE4] transition-colors">
              Home
            </button>
            <button className="cursor-pointer text-sm font-medium text-[#F2EEE4]/60 hover:text-[#F2EEE4] transition-colors">
              Our Work
            </button>
            <button className="cursor-pointer text-sm font-medium text-[#F2EEE4]/60 hover:text-[#F2EEE4] transition-colors">
              Services
            </button>
            <button className="cursor-pointer text-sm font-medium text-[#F2EEE4]/60 hover:text-[#F2EEE4] transition-colors">
              Contact
            </button>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA Button */}
            <div className="hidden sm:flex items-center">
              <a
                href="mailto:hello@anchorworks.studio?subject=New%20project%20enquiry"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[7px] font-semibold text-sm bg-[#B8862E] text-[#1B1712] transition-colors hover:bg-[#c99636]"
              >
                Start a project
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden p-2 text-[#F2EEE4] hover:text-[#B8862E] focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                {isOpen ? (
                  /* Close Icon (X) */
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  /* Hamburger Icon */
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full sm:hidden bg-[#1B1712] border-t border-[#F2EEE4]/10 px-6 py-4 flex flex-col items-center gap-4 z-40">
            <button
              onClick={() => setIsOpen(false)}
              className="text-left text-base font-medium text-[#F2EEE4]/80 hover:text-[#F2EEE4] py-1 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-left text-base font-medium text-[#F2EEE4]/80 hover:text-[#F2EEE4] py-1 cursor-pointer"
            >
              Our Work
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-left text-base font-medium text-[#F2EEE4]/80 hover:text-[#F2EEE4] py-1 cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-left text-base font-medium text-[#F2EEE4]/80 hover:text-[#F2EEE4] py-1 cursor-pointer"
            >
              Contact
            </button>

            <a
              href="mailto:hello@anchorworks.studio?subject=New%20project%20enquiry"
              className="inline-flex items-center justify-center w-full mt-2 px-5 py-3 rounded-[7px] font-semibold text-sm bg-[#B8862E] text-[#1B1712] text-center"
            >
              Start a project
            </a>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
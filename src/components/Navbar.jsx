import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false)
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#F2EEE4]/10 bg-[#1B1712]">
      <div className="flex h-[68px] w-full items-center justify-between px-6 sm:h-[76px] sm:px-8">
        <button
          onClick={() => handleNavigate('/')}
          className="flex cursor-pointer items-center gap-2.5 font-serif text-xl font-bold text-[#F2EEE4]"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect x="1" y="1" width="24" height="24" rx="5" stroke="#B8862E" strokeWidth="1.6" />
            <path d="M8 17V9M13 17V6M18 17V12" stroke="#B8862E" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          Anchorworks
        </button>

        <nav className="hidden items-center gap-9 sm:flex">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              className="cursor-pointer text-sm font-medium text-[#F2EEE4]/60 transition-colors hover:text-[#F2EEE4]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@anchorworks.studio?subject=New%20project%20enquiry"
            className="hidden rounded-[7px] bg-[#B8862E] px-5 py-2.5 text-sm font-semibold text-[#1B1712] transition-colors hover:bg-[#c99636] sm:inline-flex"
          >
            Start a project
          </a>

          <button
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
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              className="py-1 text-base font-medium text-[#F2EEE4]/80 hover:text-[#F2EEE4]"
            >
              {item.label}
            </button>
          ))}

          <a
            href="mailto:hello@anchorworks.studio?subject=New%20project%20enquiry"
            className="mt-2 w-full rounded-[7px] bg-[#B8862E] px-5 py-3 text-center text-sm font-semibold text-[#1B1712]"
          >
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
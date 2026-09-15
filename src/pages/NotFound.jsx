import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] w-full flex-col items-center justify-center bg-[#F6F1E8] px-6 text-center text-[#181614]">
      {/* Soft warm glow effect */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B87C2B]/10 blur-[100px]" />

      <div className="relative z-10 flex max-w-2xl flex-col items-center">
        {/* Eyebrow Badge (Matching Our Work light section) */}
        <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#B87C2B]">
          <span className="h-px w-4 bg-[#B87C2B]" />
          Error 404
          <span className="h-px w-4 bg-[#B87C2B]" />
        </span>

        {/* Heading */}
        <h1 className="mb-5 font-serif text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
          This page doesn't exist.
        </h1>

        {/* Description */}
        <p className="mb-8 max-w-[50ch] text-base leading-relaxed text-[#181614]/70 sm:text-lg">
          The page you're looking for may have been moved or removed.
          Let's get you back on track.
        </p>

        {/* Primary Action Button */}
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B87C2B] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#9E6A23]"
        >
          Back to Home <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
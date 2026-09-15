import "./App.css";
import { useLayoutEffect, useRef } from "react";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom"; // added useLocation
import { Helmet } from "react-helmet-async"; // NEW
import { gsap } from "gsap";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurWork from "./pages/OurWork";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import { prefersReducedMotion } from "./motion";

const SITE_URL = import.meta.env.VITE_SITE_URL || "http://localhost:5173";
const OG_IMAGE = "/og-image.png";

// NEW: metadata for each route
const pageMeta = {
  "/": {
    title: "Anchor Works",
    description: "Anchorworks builds custom websites with search-optimized code to help your business rank and convert. Design, development, and marketing under one roof."
  },
  "/our-work": {
    title: "Our Work | Anchor Works",
    description: "See how Anchorworks builds business websites, portfolios, management systems, and booking platforms — fast, search-ready, and fully owned by you, with zero monthly software fees."
  },
  "/services": {
    title: "Services | Anchor Works",
    description: "Custom website design, development, and digital marketing services — SEO, social media, and more, all under one roof."
  },
  "/contact": {
    title: "Contact | Anchor Works",
    description: "Ready to start your project? Get in touch with Anchorworks today."
  }
};

function PageMeta() {
  const location = useLocation();
  const meta = pageMeta[location.pathname];
  const url = `${SITE_URL}${location.pathname}`;
  const image = `${SITE_URL}${OG_IMAGE}`;

  if (!meta) {
    return (
      <Helmet>
        <title>Page Not Found | Anchorworks</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    );
  }

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Anchorworks" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

function SiteMotion() {
  const progressRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const overlayRef = useRef(null);

  useLayoutEffect(() => {
    const progress = progressRef.current;
    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;
    const overlay = overlayRef.current;
    let removeCursorListeners = () => { };

    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      gsap.set(progress, { scaleX: maxScroll > 0 ? window.scrollY / maxScroll : 0 });
    };

    const context = gsap.context(() => {
      gsap.to(overlay, { autoAlpha: 0, duration: 0.5, ease: "power3.out" });
      updateProgress();
      window.addEventListener("scroll", updateProgress, { passive: true });

      if (!prefersReducedMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        gsap.set([cursorDot, cursorRing], { xPercent: -50, yPercent: -50 });
        let hoveringClickable = false;
        const onPointerMove = (event) => {
          gsap.to(cursorDot, { x: event.clientX, y: event.clientY, duration: 0.12, ease: "power3.out" });
          gsap.to(cursorRing, { x: event.clientX, y: event.clientY, duration: 0.28, ease: "power3.out" });
          const isClickable = Boolean(event.target.closest("a, button, [role=button], .project-card, .feature-card"));
          if (isClickable !== hoveringClickable) {
            hoveringClickable = isClickable;
            gsap.to(cursorDot, { scale: isClickable ? 0.45 : 1, autoAlpha: isClickable ? 0.55 : 1, duration: 0.35, ease: "power3.out" });
            gsap.to(cursorRing, { scale: isClickable ? 1.7 : 1, autoAlpha: isClickable ? 0.7 : 0.45, duration: 0.4, ease: "power3.out" });
          }
        };
        const onPointerLeave = () => gsap.to([cursorDot, cursorRing], { autoAlpha: 0, duration: 0.2, ease: "power3.out" });
        const onPointerEnter = () => gsap.to([cursorDot, cursorRing], { autoAlpha: 1, duration: 0.2, ease: "power3.out" });
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        document.documentElement.addEventListener("mouseleave", onPointerLeave);
        document.documentElement.addEventListener("mouseenter", onPointerEnter);
        removeCursorListeners = () => {
          window.removeEventListener("pointermove", onPointerMove);
          document.documentElement.removeEventListener("mouseleave", onPointerLeave);
          document.documentElement.removeEventListener("mouseenter", onPointerEnter);
        };
      }
    });

    return () => {
      window.removeEventListener("scroll", updateProgress);
      removeCursorListeners();
      context.revert();
    };
  }, []);

  return (
    <>
      <div ref={overlayRef} className="page-load-overlay" aria-hidden="true" />
      <div ref={progressRef} className="site-scroll-progress" aria-hidden="true" />
      <div ref={cursorDotRef} className="site-cursor site-cursor-dot" aria-hidden="true" />
      <div ref={cursorRingRef} className="site-cursor site-cursor-ring" aria-hidden="true" />
    </>
  );
}

function Layout() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <PageMeta />
      <SiteMotion />
      <Navbar />

      <main className="w-full overflow-x-hidden pt-[68px] sm:pt-[76px]">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/our-work", element: <OurWork /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
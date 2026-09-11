import "./App.css";
import { useLayoutEffect, useRef } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { gsap } from "gsap";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurWork from "./pages/OurWork";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { prefersReducedMotion } from "./motion";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
import "./App.css";
import { lazy, Suspense, useEffect, useRef } from "react";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // NEW
import { gsap, ScrollTrigger, prefersReducedMotion } from "./motion";

import Navbar from "./components/Navbar";
const Home = lazy(() => import("./pages/Home"));
const OurWork = lazy(() => import("./pages/OurWork"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const ServiceGroup = lazy(() => import("./pages/ServiceGroup"));
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import { serviceGroups } from "./data/services";

const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://anchorworks.in").replace(/\/+$/, "");
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
    title: "Digital Marketing Company in Delhi | Anchor Works",
    description: "Anchor Works serves Delhi with website design and development, SEO, graphic design, branding, video editing, paid advertising, and e-commerce."
  },
  "/contact": {
    title: "Contact | Anchor Works",
    description: "Ready to start your project? Get in touch with Anchorworks today."
  }
};

function PageMeta() {
  const location = useLocation();
  const path = location.pathname.replace(/\/+$/, "") || "/";
  const serviceGroup = path.startsWith("/services/")
    ? serviceGroups.find((item) => `/services/${item.slug}` === path)
    : null;
  const meta = pageMeta[path] || (serviceGroup
    ? {
        title: `${serviceGroup.title} | Anchor Works`,
        description: serviceGroup.description,
      }
    : null);
  const url = `${SITE_URL}${path}`;
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
      <link rel="canonical" href={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={image} />
      {path === "/" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Anchor Works",
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            email: "info@anchorworks.in",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Delhi",
              addressCountry: "IN",
            },
            areaServed: ["Delhi, India", "Worldwide"],
          })}
        </script>
      )}
    </Helmet>
  );
}

function SiteMotion() {
  const progressRef = useRef(null);
  const progressTriggerRef = useRef(null);

  useEffect(() => {
    const progress = progressRef.current;

    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      gsap.set(progress, { scaleX: maxScroll > 0 ? window.scrollY / maxScroll : 0 });
    };

    const context = gsap.context(() => {
      updateProgress();
      progressTriggerRef.current = ScrollTrigger.create({ onUpdate: updateProgress });
      window.addEventListener("load", ScrollTrigger.refresh, { once: true });
    });

    return () => {
      progressTriggerRef.current?.kill();
      window.removeEventListener("load", ScrollTrigger.refresh);
      context.revert();
    };
  }, []);

  return (
    <>
      <div ref={progressRef} className="site-scroll-progress" aria-hidden="true" />
    </>
  );
}

function Layout() {
  const location = useLocation();
  const mainRef = useRef(null);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    if (hasMounted.current && !prefersReducedMotion && mainRef.current) {
      gsap.fromTo(mainRef.current, { autoAlpha: 0.001 }, {
        autoAlpha: 1, duration: 0.2, ease: "power1.out", clearProps: "opacity",
      });
    }
    hasMounted.current = true;
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (mainRef.current?.querySelector("h1")) {
        window.clearInterval(timer);
        document.dispatchEvent(new Event("app-rendered"));
      }
    }, 50);
    return () => window.clearInterval(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <PageMeta />
      <SiteMotion />
      <Navbar />

      <main ref={mainRef} className="w-full overflow-x-hidden pt-[68px] sm:pt-[76px]">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
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
      { path: "/services/:groupSlug", element: <ServiceGroup /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
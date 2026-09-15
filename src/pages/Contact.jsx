import ContactForm from '../components/ContactForm';
import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { Mail, MessageCircle, Check, ChevronDown, Copy, ArrowUpRight, Send } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../motion';
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const EMAIL_ADDRESS = import.meta.env.VITE_MY_EMAIL;
const PHONE_NUMBER = import.meta.env.VITE_MY_NUMBER;

const FAQS = [
  { id: 1, title: 'What services do you offer?', text: 'We help businesses build and grow their digital presence through website design and development, e-commerce, SEO, digital marketing, and creative content including photography and video.' },
  { id: 2, title: 'What types of businesses do you work with?', text: "We work with businesses, startups, professionals, and local brands looking to build a stronger online presence. Whether you're starting from scratch or improving something that already exists, we can tailor the work around your goals." },
  { id: 3, title: 'How much does a website or project cost?', text: "Every project is different, so we don't use a one-size-fits-all price. Cost depends on the scope, features, content, and level of customization required. Share your requirements with us and we'll provide a clear proposal before we begin." },
  { id: 4, title: 'How long does it take to build a website?', text: "Timelines depend on the size and complexity of the project. A straightforward business website can typically be completed within a few weeks, while larger e-commerce or custom projects may take longer. We'll agree on the timeline before starting." },
  { id: 5, title: 'Can you help if I already have a website?', text: 'Absolutely. We can improve an existing website rather than rebuilding it from scratch. This can include redesign, performance improvements, SEO, content updates, conversion optimization, or adding new functionality.' },
  { id: 6, title: 'Do you provide SEO and digital marketing after the website is launched?', text: 'Yes. Website development can be combined with ongoing SEO and digital marketing to help your business attract and convert more customers. We can also work with you on these services independently if you already have a website.' },
  { id: 7, title: 'Do you also create photos and videos for businesses?', text: 'Yes. We offer photography and video production for businesses that need content for their website, social media, advertising, or other marketing campaigns.' },
  { id: 8, title: 'What happens after I submit an enquiry?', text: "We'll review your requirements and get back to you to understand the project, goals, and scope. From there, we'll recommend the right approach, timeline, and pricing before any work begins." },
];

function Contact() {
  const location = useLocation();

  // Unified Scroll-to-Hash Effect
  useEffect(() => {
    const targetId = location.hash.slice(1);
    if (!targetId) return;

    let attempts = 0;
    const maxAttempts = 10;

    const scrollToElement = () => {
      const element = document.getElementById(targetId);

      if (element) {
        gsap.killTweensOf(window);

        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 80;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        setTimeout(() => {
          if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
          }
        }, 600);
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(scrollToElement, 100);
      }
    };

    const timer = setTimeout(scrollToElement, 300);

    return () => clearTimeout(timer);
  }, [location.hash, location.pathname]);

  const [copied, setCopied] = useState(false);
  const [openFaqId, setOpenFaqId] = useState(null);
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const spotlightRef = useRef(null);

  useLayoutEffect(() => {
    let cancelled = false;
    let context;
    let removePointerListener = () => { };

    const run = () => {
      if (cancelled) return;
      const hero = heroRef.current;
      context = gsap.context(() => {
        const heroGlow = pageRef.current.querySelector(".contact-hero-glow");
        const heroBadge = pageRef.current.querySelector(".ourwork-hero-badge");
        const heroWords = gsap.utils.toArray(".contact-hero-word");
        const heroItalic = pageRef.current.querySelector(".contact-hero-italic");
        const heroCopy = pageRef.current.querySelector(".contact-hero-copy");

        const infoCard = pageRef.current.querySelector(".contact-info-card");
        const infoBlocks = gsap.utils.toArray(".contact-info-block");
        const compactItems = gsap.utils.toArray(".compact-item");
        const compactChecks = gsap.utils.toArray(".compact-check-badge");
        const compactTrigger = pageRef.current.querySelector(".contact-info-block:last-child");

        const formCard = pageRef.current.querySelector(".contact-form-card");
        const formEyebrow = pageRef.current.querySelector(".contact-form-eyebrow");
        const formHeading = pageRef.current.querySelector(".contact-form-heading");

        const consultCard = pageRef.current.querySelector(".contact-consult-card");
        const consultImage = pageRef.current.querySelector(".contact-consult-image");
        const consultEyebrow = pageRef.current.querySelector(".contact-consult-eyebrow");
        const consultHeading = pageRef.current.querySelector(".contact-consult-heading");
        const consultCopy = pageRef.current.querySelector(".contact-consult-copy");
        const consultCtas = gsap.utils.toArray(".contact-consult-cta");

        const faqSection = pageRef.current.querySelector(".contact-faq-section");
        const faqEyebrow = pageRef.current.querySelector(".contact-faq-eyebrow");
        const faqWords = gsap.utils.toArray(".faq-word");
        const faqDescription = pageRef.current.querySelector(".contact-faq-description");
        const faqList = pageRef.current.querySelector(".contact-faq-list");
        const faqItems = gsap.utils.toArray(".faq-item");

        if (prefersReducedMotion) {
          gsap.set([
            heroBadge,
            ...heroWords,
            heroItalic,
            heroCopy,
            infoCard,
            ...infoBlocks,
            ...compactItems,
            ...compactChecks,
            formCard,
            formEyebrow,
            formHeading,
            consultCard,
            consultImage,
            consultEyebrow,
            consultHeading,
            consultCopy,
            ...consultCtas,
            faqEyebrow,
            ...faqWords,
            faqDescription,
            ...faqItems,
          ], { autoAlpha: 1, clearProps: "transform" });
          return;
        }

        gsap.to(".hero-grid-drift", { x: 32, y: 32, duration: 22, repeat: -1, ease: "none" });

        if (hero && spotlightRef.current) {
          const onPointerMove = (event) => {
            const bounds = hero.getBoundingClientRect();
            gsap.to(spotlightRef.current, {
              x: event.clientX - bounds.left,
              y: event.clientY - bounds.top,
              duration: 0.6,
              ease: "power2.out",
            });
          };
          if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            hero.addEventListener("pointermove", onPointerMove);
            removePointerListener = () => hero.removeEventListener("pointermove", onPointerMove);
          }
        }

        gsap.timeline({ defaults: { ease: "power3.out" } })
          .fromTo(heroBadge, { scale: 0.95, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.45 })
          .fromTo(heroWords, { yPercent: 110, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.52, stagger: 0.05, ease: "power3.out" }, "-=0.08")
          .fromTo(heroItalic, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45 }, "-=0.1")
          .fromTo(heroCopy, { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45 }, "-=0.12");

        if (heroGlow) {
          gsap.to(heroGlow, { scale: 1.15, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
        }

        gsap.timeline({
          scrollTrigger: { trigger: infoCard, start: "top 80%", toggleActions: "play none none none" },
        })
          .fromTo(infoCard, { x: -24, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.55 })
          .fromTo(infoBlocks, { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.12, ease: "power3.out" }, "-=0.3");

        gsap.timeline({
          scrollTrigger: { trigger: compactTrigger, start: "top 82%", toggleActions: "play none none none" },
        })
          .fromTo(compactItems, { x: -10, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.4, stagger: 0.1, ease: "power3.out" })
          .fromTo(compactChecks, { scale: 0.7, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.3");

        gsap.timeline({
          scrollTrigger: { trigger: formCard, start: "top 80%", toggleActions: "play none none none" },
        })
          .fromTo(formCard, { x: 24, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.55 })
          .fromTo(formEyebrow, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4, ease: "power3.out" }, "-=0.3")
          .fromTo(formHeading, { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, ease: "power3.out" }, "-=0.25");

        gsap.timeline({
          scrollTrigger: { trigger: consultCard, start: "top 80%", toggleActions: "play none none none" },
        })
          .fromTo(consultCard, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55 })
          .fromTo(consultImage, { scale: 1.06, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.6, ease: "power3.out" }, "-=0.5")
          .fromTo([consultEyebrow, consultHeading, consultCopy], { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.42, stagger: 0.06, ease: "power3.out" }, "-=0.3")
          .fromTo(consultCtas, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.42, stagger: 0.1, ease: "power3.out" }, "-=0.2");

        gsap.timeline({
          scrollTrigger: { trigger: faqSection, start: "top 78%", toggleActions: "play none none none" },
        })
          .fromTo(faqEyebrow, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.42, ease: "power3.out" })
          .fromTo(faqWords, { yPercent: 110, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.04, ease: "power3.out" }, "-=0.2")
          .fromTo(faqDescription, { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4, ease: "power3.out" }, "-=0.25");

        gsap.fromTo(faqItems, { y: 16, autoAlpha: 0 }, {
          y: 0,
          autoAlpha: 1,
          duration: 0.45,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: faqList, start: "top 82%", toggleActions: "play none none none" },
        });
      }, pageRef);
    };

    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(run);
    } else {
      run();
    }

    return () => {
      cancelled = true;
      removePointerListener();
      if (context) context.revert();
    };
  }, []);

  const copyEmail = () => {
    const email = EMAIL_ADDRESS;
    const fallback = () => {
      const el = document.createElement('textarea');
      el.value = email;
      el.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); })
        .catch(fallback);
    } else {
      fallback();
    }
  };

  return (
    <div ref={pageRef}>

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="wireframe-grid hero-section contact-hero relative overflow-hidden border-b border-[#23211e] bg-[#131210] px-5 py-14 pb-16 text-white sm:px-8 sm:py-20 md:pb-24">
        <div ref={spotlightRef} className="hero-spotlight pointer-events-none absolute left-0 top-0 z-0" />
        <div className="hero-grid-drift pointer-events-none absolute inset-0 z-0" />
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#D99B4B]/10 blur-[130px]" />
        <div className="contact-hero-glow pointer-events-none absolute right-1/4 top-0 h-96 w-96 rounded-full bg-[#d99b4b]/5 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <span className="ourwork-hero-badge mb-5 inline-flex items-center gap-2 rounded-full border border-[#D99B4B]/40 bg-[#D99B4B]/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#D99B4B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D99B4B]" />
            DIRECT FOUNDER AVAILABILITY · 24H RESPONSE SLA · DELHI NCR &amp; WORLDWIDE
          </span>
          <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="hero-word-clip"><span className="contact-hero-word">Let's</span></span>{" "}
            <span className="hero-word-clip"><span className="contact-hero-word">build</span></span>{" "}
            <span className="hero-word-clip"><span className="contact-hero-word">something</span></span>{" "}
            <span className="hero-word-clip"><span className="contact-hero-word">worth</span></span>{" "}
            <span className="hero-word-clip"><span className="contact-hero-word">building</span></span>{" "}
            <span className="hero-word-clip"><span className="contact-hero-word">properly.</span></span>
            <br />
            <span className="contact-hero-italic font-normal italic text-[#d99b4b]">Start a direct conversation.</span>
          </h1>
          <p className="contact-hero-copy mt-6 max-w-2xl text-base font-light leading-relaxed text-neutral-400 md:text-lg">
            Whether you need a new website, want to grow your online presence, need help with digital
            marketing, or want content that gets your brand noticed — tell us what you're looking to
            achieve. Let's figure out the right way forward, together.
          </p>
        </div>
      </section>

      {/* ===== REGISTRY + FORM ===== */}
      <section className="border-b border-[#e8e2d7] bg-[#f6f1e8] px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">

            {/* LEFT — single unified folio card */}
            <div className="contact-info-card rounded-2xl border border-[#e8e2d7] bg-white/70 p-7 shadow-sm backdrop-blur-sm lg:col-span-5">
              <div className="divide-y divide-[#e8e2d7]/80">

                {/* Studio Coordinates */}
                <div className="contact-info-block pb-6">
                  <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#a87438]">
                    STUDIO COORDINATES
                  </p>
                  <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#141311]">
                    Delhi NCR, India
                  </h2>
                  <p className="mt-1 text-xs font-light text-neutral-500">
                    Web, Marketing &amp; Creative — Serving Clients Worldwide
                  </p>
                </div>

                {/* Direct Studio Inbox */}
                <div className="contact-info-block py-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#e8e2d7] bg-[#f6f1e8] text-[#d99b4b]">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
                          DIRECT STUDIO INBOX
                        </p>
                        <p className="mt-0.5 font-mono text-sm font-medium text-[#141311]">
                          {EMAIL_ADDRESS}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="relative">
                        <button
                          onClick={copyEmail}
                          title="Copy email address"
                          className={`flex h-8 w-8 items-center justify-center rounded-lg border transition ${copied
                            ? 'border-emerald-300 bg-emerald-50 text-emerald-600'
                            : 'border-[#e8e2d7] bg-[#f6f1e8] text-neutral-500 hover:border-[#d99b4b]/40 hover:bg-white hover:text-[#141311]'
                            }`}
                        >
                          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                        </button>
                        {copied && (
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#141311] px-2 py-1 text-[10px] font-medium text-white shadow-sm">
                            Copied!
                            <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#141311]" />
                          </span>
                        )}
                      </div>
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}&su=Project%20Enquiry`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open in Gmail"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e8e2d7] bg-[#f6f1e8] text-neutral-500 transition hover:border-[#d99b4b]/40 hover:bg-white hover:text-[#141311]"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                  <p className="mt-3 text-xs font-light leading-relaxed text-neutral-500">
                    Direct founder desk. Every enquiry is reviewed personally within 24 hours.
                  </p>
                </div>

                {/* Real-time Messaging */}
                <div className="contact-info-block py-6">
                  <div className="mb-2 flex items-center space-x-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-200/80 bg-emerald-50 text-emerald-600">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
                        REAL-TIME MESSAGING
                      </p>
                      <h3 className="text-sm font-semibold text-[#141311]">Instant WhatsApp Consult</h3>
                    </div>
                  </div>
                  <p className="text-xs font-light leading-relaxed text-neutral-500">
                    Ideal for quick questions, project ideas, and discussing your requirements before getting started.
                  </p>
                  <div className="mt-3">
                    <a
                    href={`https://wa.me/${PHONE_NUMBER}?text=Hello%20Anchorworks,%20I'd%20like%20to%20discuss%20a%20project`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md bg-[#141311] px-4 py-2 text-xs font-medium text-white transition hover:bg-neutral-800"
                    >
                      Start Chat →
                    </a>
                  </div>
                </div>

                {/* The Studio Compact */}
                <div className="contact-info-block pt-6">
                  <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#a87438]">
                    OPERATING COMMITMENTS
                  </p>
                  <h2 className="mb-4 font-serif text-xl font-semibold tracking-tight text-[#141311]">
                    The Studio Compact
                  </h2>
                  <div className="space-y-3.5">
                    {[
                      ['Direct Partner Access', 'You deal exclusively with senior builders shaping your codebase. No account managers or tiered support.'],
                      ['100% Code & Asset Ownership', 'Full repository transfer at launch. Clean documentation, zero proprietary vendor traps or lease fees.'],
                      ['Strict Scope & Fixed Milestones', 'No unbounded hourly retainers. Every milestone is agreed upon with uncompromising delivery deadlines.'],
                    ].map(([title, body]) => (
                      <div key={title} className="compact-item flex items-start space-x-3">
                        <div className="compact-check-badge mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[#d99b4b]/30 bg-amber-50 text-[#d99b4b]">
                          <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-[#141311]">{title}</h4>
                          <p className="mt-0.5 text-xs font-light leading-relaxed text-neutral-500">{body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT — enquiry form */}
            <div id="enquiry-form" className="scroll-mt-40 sm:scroll-mt-20 lg:col-span-7">
              <div className="contact-form-card rounded-2xl border border-[#e8e2d7] bg-white p-7 shadow-sm sm:p-8">
                <div className="mb-6 border-b border-[#e8e2d7] pb-5">
                  <p className="contact-form-eyebrow mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#a87438]">
                    PROJECT ENQUIRY
                  </p>
                  <h2 className="contact-form-heading font-serif text-3xl font-semibold tracking-tight text-[#141311] sm:text-4xl">
                    Tell us what you're looking to build
                  </h2>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== DIRECT CONSULTATION ===== */}
      <section className="border-b border-[#e8e2d7] bg-[#f6f1e8] px-6 py-12 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="contact-consult-card grid grid-cols-1 items-stretch overflow-hidden rounded-2xl border border-[#e8e2d7] bg-white shadow-sm lg:grid-cols-12">
            <div className="contact-consult-image relative min-h-[220px] lg:col-span-5 lg:min-h-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyrwihDFblPolE5kobw_gLHG9htyEJG-tXMwSgJqVd-PVgIXY-Pm2bDW-NaaJyvrXrx-x0WVzrxCLSO7FpQ5UbbsADBHr7MpAFjEM_n5YgNdtDKwWgLHaJxZRUqiSW1JnTjz50oX2L9XkAaKJWytxt62XIYC_k4_ZGi_DYyNaWFjlGRHFuCvcV4UtSsPdc6WmGdozp8CEfkqiP2QTzvNAlJoVospT5ur75mgpdnswDBzAB8krcLKHD"
                alt="Consultation"
                className="h-full w-full object-cover brightness-[0.75] contrast-[1.05]"
              />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#d99b4b]">
                  BUILT WITH INTENTION
                </p>
                <p className="mt-0.5 font-serif text-sm italic text-neutral-200">
                  Strategy, design, technology &amp; content
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-7">
              <div className="contact-consult-eyebrow mb-2 flex items-center space-x-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#c58838]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d99b4b]" />
                <span>DIRECT PROJECT CONSULTATION</span>
              </div>
              <h3 className="contact-consult-heading font-serif text-2xl font-semibold tracking-tight text-[#141311] sm:text-3xl">
                Have 15 minutes? Let's talk.
              </h3>
              <p className="contact-consult-copy mt-3 text-sm font-light leading-relaxed text-neutral-500">
                Skip the form and talk to us directly. Tell us what you're looking to build, improve, or
                grow, and we'll help you figure out the right next step.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://calendly.com/work-gopalnavetia/15-minutes-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-consult-cta inline-flex items-center rounded-md bg-[#141311] px-5 py-2.5 text-xs font-medium text-white shadow-sm transition hover:bg-neutral-900 sm:text-sm"
                >
                  Book a 15-Min Call →
                </a>
                <a
                  href={`https://wa.me/${PHONE_NUMBER}?text=Hello%20Anchorworks,%20I'd%20like%20to%20discuss%20a%20project`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-consult-cta inline-flex items-center space-x-2 rounded-md border border-[#e8e2d7] bg-neutral-100 px-5 py-2.5 text-xs font-medium text-[#141311] transition hover:bg-neutral-200 sm:text-sm"
                >
                  <Send className="h-4 w-4 text-neutral-700" />
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="contact-faq-section bg-[#f6f1e8] px-6 py-14 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <div className="contact-faq-eyebrow mb-3 inline-block rounded-full bg-[#e8e2d7]/60 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-neutral-600">
              QUESTIONS &amp; ANSWERS
            </div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#141311] sm:text-4xl lg:text-5xl">
              <span className="capability-word-clip"><span className="faq-word">Frequently</span></span>{" "}
              <span className="capability-word-clip"><span className="faq-word">asked</span></span>{" "}
              <span className="capability-word-clip"><span className="faq-word">questions</span></span>
            </h2>
            <p className="contact-faq-description mt-2 text-sm font-light text-neutral-500">
              Everything you need to know before getting started.
            </p>
          </div>

          <div className="contact-faq-list divide-y divide-[#e8e2d7] border-b border-t border-[#e8e2d7]">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="faq-item group cursor-pointer py-5 transition"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base font-medium text-[#141311] transition group-hover:text-[#c58838] sm:text-lg">
                      {faq.title}
                    </h3>
                    <div className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#e8e2d7] bg-white transition group-hover:border-[#d99b4b]/50">
                      <ChevronDown
                        className={`h-3.5 w-3.5 transform text-[#d99b4b] transition duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? 'max-h-[280px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="pt-3 text-xs font-light leading-relaxed text-neutral-600 sm:text-sm">
                      {faq.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  SquareUser,
  PanelLeft,
  Coffee,
  Heart,
  Dumbbell,
} from "lucide-react";

function HomePage() {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();

  return (
    <div>
      <section className="bg-[#1B1712] text-[#F2EEE4] pt-5 overflow-hidden">

        {/* Hero Section */}
        <div className="max-w mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">

          {/* Copy Column */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold leading-[1.15] tracking-tight">
              Custom Websites <br />That <span className="text-[#B8862E]">Actually Bring You <br /> Leads.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#F2EEE4]/60 max-w-[52ch] leading-relaxed">
              We handle your design, custom code, and Google search rankings under one roof so you can focus on running your business.
            </p>

            {/* CTA Buttons */}
            <div className="mt-5 sm:mt-5 flex flex-row gap-4 sm:gap-4">
              <a
                href="https://wa.me/917011042987?text=Hi%20Anchorworks%2C%20I%20would%20like%20to%20enquire%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-3 sm:px-6 sm:py-3.5 rounded-[7px] font-semibold text-sm sm:text-base bg-[#B8862E] text-[#1B1712] transition-colors hover:bg-[#c99636]"
              >
                Start a project
              </a>
              <button
                type="button"
                onClick={() => navigate("/our-work")}
                className="inline-flex items-center justify-center px-10 py-3 sm:px-6 sm:py-3.5 rounded-[7px] font-semibold text-sm sm:text-base border border-[#F2EEE4]/35 text-[#F2EEE4] transition-colors hover:border-[#B8862E] hover:text-[#B8862E] cursor-pointer"
              >
                See our work
              </button>
            </div>

            {/* Trust Line */}
            <p className="mt-7 pt-5 text-sm sm:pb-5 text-[#F2EEE4]/45 border-t border-[#F2EEE4]/12 max-w-[46ch]">
              We learn how your business actually makes money first, then build a custom online engine to help you scale it.
            </p>
          </div>

          {/* Graphic Column */}
          <div className="w-full sm:max-w-3xl mx-auto -mt-9 sm:mt-0 aspect-[4/3.1] relative pb-3">
            <svg viewBox="0 0 480 360" fill="none" className="w-full h-full">
              {/* Browser Window */}
              <rect x="20" y="26" width="330" height="240" rx="10" fill="#241F17" stroke="#B8862E" strokeWidth="1.4" />
              <rect x="20" y="26" width="330" height="34" rx="10" fill="#241F17" stroke="#B8862E" strokeWidth="1.4" />
              <circle cx="40" cy="43" r="4" fill="#B8862E" />
              <circle cx="55" cy="43" r="4" fill="#8B5F1E" />
              <circle cx="70" cy="43" r="4" fill="#5B4021" />
              <rect x="110" y="38" width="120" height="10" rx="5" stroke="#B8862E" strokeOpacity=".5" />
              <rect x="42" y="82" width="150" height="80" rx="6" stroke="#B8862E" strokeWidth="1.2" />
              <rect x="204" y="82" width="126" height="36" rx="6" stroke="#B8862E" strokeOpacity=".7" />
              <rect x="204" y="126" width="126" height="36" rx="6" stroke="#B8862E" strokeOpacity=".7" />
              <rect x="42" y="178" width="94" height="66" rx="6" stroke="#B8862E" strokeOpacity=".55" />
              <rect x="150" y="178" width="94" height="66" rx="6" stroke="#B8862E" strokeOpacity=".55" />
              <rect x="258" y="178" width="72" height="66" rx="6" stroke="#B8862E" strokeOpacity=".55" />

              {/* Mobile Overlay */}
              <rect x="300" y="150" width="140" height="196" rx="18" fill="#241F17" stroke="#B8862E" strokeWidth="1.4" />
              <rect x="316" y="172" width="108" height="52" rx="6" stroke="#B8862E" strokeOpacity=".6" />
              <rect x="316" y="232" width="108" height="18" rx="4" stroke="#B8862E" strokeOpacity=".45" />
              <rect x="316" y="256" width="108" height="18" rx="4" stroke="#B8862E" strokeOpacity=".45" />
              <rect x="316" y="280" width="108" height="18" rx="4" stroke="#B8862E" strokeOpacity=".45" />
              <line x1="350" y1="330" x2="390" y2="330" stroke="#B8862E" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

        </div>

        {/* Credibility */}
        <div className="border-y border-[#1B1712]/10 bg-[#F2EEE4] text-[#1B1712] mx-auto grid max-w grid-cols-1 gap-6 px-6 py-7 sm:px-8 md:grid-cols-3 md:gap-12 md:py-10">
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#B8862E] sm:text-xl">
              Conversion-first design
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[#1B1712]/80 sm:text-lg">
              Pages built to turn visitors into leads, supported by SEO and content
              that brings them there.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-[#B8862E] sm:text-xl">
              Built around how people find you
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[#1B1712]/80 sm:text-lg">
              Your digital presence works across Google, social, and referrals.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-[#B8862E] sm:text-xl">
              Strategy behind every decision
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[#1B1712]/80 sm:text-lg">
              Design, marketing, and UX work as one system—not three separate
              services.
            </p>
          </div>
        </div>

        {/* Niche Bento Box */}
        <div className="bg-[#F2EEE4] text-[#1B1712] mx-0 px-6 py-8 pb-11 sm:px-8 sm:py-9 sm:pb-14">
          <div className=" max-w-4xl text-left">
            <h2 className="font-serif text-xl font-semibold leading-tight sm:text-2xl lg:text-3xl">
              Six kinds of projects.{" "}
              <span className="text-[#B8862E]">
                One team building all of them.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#1B1712]/70 sm:text-base sm:mx-0">
              Pick the one closest to what you need, or tell us what you’re picturing
              and we’ll help you figure out the rest.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {[
              {
                icon: Briefcase,
                title: "Business Websites",
                description:
                  "A straightforward, professional site for founders and small businesses who need to be found and trusted online.",
              },
              {
                icon: SquareUser,
                title: "Portfolios",
                description:
                  "For doctors, consultants, and professionals who need a page that builds credibility before the first call.",
              },
              {
                icon: PanelLeft,
                title: "Management Systems",
                description:
                  "Booking, scheduling, and admin tools built around how you actually run your day, not a generic dashboard.",
              },
              {
                icon: Coffee,
                title: "Cafés & Menus",
                description:
                  "Fast, mobile-first menus and ordering pages that actually work for someone standing at your counter.",
              },
              {
                icon: Heart,
                title: "NGOs & Community",
                description:
                  "Trust-building, donation-ready sites for organisations that need people to believe them at first glance.",
              },
              {
                icon: Dumbbell,
                title: "Gyms & Fitness",
                description:
                  "Class schedules, memberships, and bookings handled properly, without paying a monthly fee for someone else’s software.",
              },
            ].map((project) => {
              const Icon = project.icon;

              return (
                <div
                  key={project.title}
                  onTouchStart={() => setActiveCard(project.title)}
                  onTouchEnd={() => setActiveCard(null)}
                  onTouchCancel={() => setActiveCard(null)}
                  className={`group flex min-h-[235px] flex-col rounded-lg border bg-white p-7 transition-colors duration-200 sm:min-h-[250px] sm:p-8 ${activeCard === project.title
                    ? "border-[#B8862E]"
                    : "border-[#B8862E]/25 hover:border-[#B8862E]"
                    }`}
                >
                  <Icon
                    className="h-7 w-7 text-[#B8862E]"
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-6 text-base font-semibold sm:text-lg">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#1B1712]/75">
                    {project.description}
                  </p>

                  <a
                    href="#work"
                    className="mt-auto pt-7 text-sm font-medium text-[#B8862E] transition-colors hover:text-[#8B5F1E]"
                  >
                    View work →
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-[#EFE2BC] px-6 py-8 text-[#1B1712] pb-11 sm:px-8 sm:py-10 sm:pb-14">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-3xl font-serif text-xl font-semibold leading-tight sm:text-2xl lg:text-3xl">
              How a project actually happens
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1B1712]/70 sm:text-base">
              The same four phases, whether it&apos;s a gym system or a two-page site
              — nothing skipped, nothing assumed.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {([
                {
                  number: "01",
                  title: "Research & Audit",
                  description:
                    "We study how your specific business operates and where your current leads come from, designing a tailored website flow built around your daily workflow.",
                },
                {
                  number: "02",
                  title: "Design & Coding",
                  description:
                    "We transform the strategic roadmap into polished, custom layouts and clean code. Every screen is built to give your business a professional, seamless online presence.",
                },
                {
                  number: "03",
                  title: "Speed & SEO Optimization",
                  description:
                    "We write clean, lightweight code and implement structured search engine logic so your platform loads instantly on mobile and ranks higher in local search.",
                },
                {
                  number: "04",
                  title: "Global Edge Deployment",
                  description:
                    "We handle the technical setup—from secure domain routing and hosting configurations to launching your local marketing campaign on autopilot.",
                },
              ]).map((step) => (
                <div
                  key={step.number}
                  className="flex min-h-[310px] flex-col rounded-lg border border-[#B8862E]/25 bg-[#F8F2E3] p-7 sm:min-h-[330px] sm:p-8"
                >
                  <span className="font-serif text-2xl font-semibold text-[#9A671C]">
                    {step.number}
                  </span>

                  <h3 className="mt-7 font-serif text-xl font-semibold leading-tight">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#1B1712]/75">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[#B8862E] px-6 py-8 pb-11 text-[#1B1712] sm:px-8 sm:py-10 sm:pb-14">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 className="max-w-lg font-serif text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                Got a project worth building properly?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1B1712]/80 sm:text-base">
                Tell us what you&apos;re trying to fix or build — we&apos;ll tell you
                honestly whether it needs a website, a system, or just a better one.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex w-fit items-center justify-center rounded-[7px] bg-[#1B1712] px-7 py-3.5 text-sm font-semibold text-[#F2EEE4] transition-colors hover:bg-[#241F17] sm:px-8 sm:text-base"
            >
              Start a project
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}

export default HomePage;
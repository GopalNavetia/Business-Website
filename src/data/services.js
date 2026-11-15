import {
    AppWindow,
    BookOpen,
    Camera,
    Film,
    Filter,
    LayoutDashboard,
    NotebookPen,
    Palette,
    Search,
    Send,
    Share2,
    Sparkles,
    Target,
    Video,
    Wand2,
} from "lucide-react";

export const serviceGroups = [
    {
        slug: "web-design-development",
        title: "Web Design & Development",
        description:
            "As a website development company in Delhi and website design company in Delhi, we build responsive sites for businesses in Delhi, around your customers, services, and business goals.",
        introduction: {
            eyebrow: "Web design & development",
            headline: "A website should do more than look polished.",
            body: "It should help the right people understand what you offer, feel confident in your business, and take the next step. We bring strategy, thoughtful design, and custom development together to create a clear, responsive experience.",
            details: [
                {
                    title: "Start with your customers",
                    description: "We shape the page structure and user journeys around what visitors need to know and do.",
                },
                {
                    title: "Make the value easy to see",
                    description: "Clear messaging, considered visual design, and intuitive navigation help your business make a strong first impression.",
                },
                {
                    title: "Build for real devices",
                    description: "Responsive layouts and a solid technical foundation make the experience work across screen sizes.",
                },
            ],
        },
        information: {
            whyTitle: "Why your website matters",
            why: "Your website is often where people go to check what you offer and decide whether to take the next step. If the message, navigation, or mobile experience is unclear, useful information can be easy to miss. A thoughtful website brings those pieces together so visitors can understand your business at their own pace.",
            buildTitle: "What we build",
            offerings: [
                {
                    title: "Business websites",
                    description: "Showcase your services, explain what makes your business a fit, and make it easy for visitors to enquire.",
                },
                {
                    title: "E-commerce stores",
                    description: "Organise products, useful details, and shopping steps into a storefront that is clear across devices.",
                },
                {
                    title: "Custom web solutions",
                    description: "Bring together tailored interfaces and practical functionality when a standard template is not enough.",
                },
            ],
        },
        image: "/webDev.png",
        imageAlt: "Web design and development showcase",
        highlight: "Multi-Device Responsive Architecture",
        services: [
            {
                slug: "ui-ux-design",
                icon: AppWindow,
                tag: "SPECIALIZATION 01",
                title: "UI/UX Design",
                description:
                    "Website experiences mapped around user behavior, touch targets, and clear navigation paths for Delhi businesses.",
                badge: "Engineered Prototype",
                details: {
                    hook: {
                        headline: "Visitors should not have to guess what to do next.",
                        intro: "When a website feels confusing, people can miss the information they came for. UI/UX design makes each step easier to understand, from the first screen to the next action.",
                    },
                    whyItMatters: [
                        "Clear navigation helps people find the right information without retracing their steps.",
                        "Readable layouts and accessible controls make the experience easier across devices and abilities.",
                        "A consistent journey helps visitors understand your offer before they decide whether to contact you.",
                    ],
                    commonMistakes: [
                        {
                            mistake: "Organising pages around internal teams instead of visitor questions.",
                            consequence: "People may not know where to look for services, answers, or contact details.",
                        },
                        {
                            mistake: "Using small text, crowded screens, or unclear buttons.",
                            consequence: "Important information and actions become harder to notice and use.",
                        },
                        {
                            mistake: "Designing for a desktop screen alone.",
                            consequence: "Mobile visitors can face awkward layouts, missed content, and difficult controls.",
                        },
                    ],
                    advantages: [
                        {
                            title: "Clearer journeys",
                            text: "Visitors can move from their question to the information that answers it.",
                        },
                        {
                            title: "Easier decisions",
                            text: "A useful hierarchy makes key services, details, and next steps easier to compare.",
                        },
                        {
                            title: "More inclusive use",
                            text: "Thoughtful contrast, readable type, and keyboard-friendly controls support more people.",
                        },
                        {
                            title: "Fewer design assumptions",
                            text: "Early wireframes let you review structure before visual polish and development.",
                        },
                    ],
                    included: [
                        "Page structure and user-flow planning",
                        "Wireframes for key screens",
                        "Responsive interface design",
                        "Reusable interface components",
                        "Clickable prototype for review",
                    ],
                    process: [
                        {
                            step: 1,
                            title: "Understand",
                            text: "We discuss your audience, goals, existing content, and the tasks visitors need to complete.",
                        },
                        {
                            step: 2,
                            title: "Map",
                            text: "We organise the pages and sketch the paths that make important information easy to find.",
                        },
                        {
                            step: 3,
                            title: "Design",
                            text: "We turn the approved structure into responsive screens and a consistent component set.",
                        },
                        {
                            step: 4,
                            title: "Review",
                            text: "We walk through the prototype, gather feedback, and refine the details before handoff.",
                        },
                    ],
                    isItForYou: [
                        "You hear that visitors cannot find the information they need.",
                        "People use your site on phones, but key pages or actions feel awkward.",
                        "You are planning a new website and want to settle the user journey before development.",
                        "Your interface has grown inconsistent as new pages and features were added.",
                    ],
                    faqs: [
                        {
                            q: "What is the difference between UI and UX?",
                            a: "UX is the structure and flow of an experience: what people need and how they move through it. UI is the visual interface they interact with. Good work considers both together.",
                        },
                        {
                            q: "Do you design mobile screens too?",
                            a: "Yes. We plan responsive layouts so content and controls remain clear on smaller screens as well as desktop.",
                        },
                        {
                            q: "Can you redesign an existing website?",
                            a: "Yes. We can review the current experience, identify points of friction, and plan improvements around your audience and goals.",
                        },
                    ],
                    bridge: "If visitors are getting stuck or you are planning a new site, tell us what you want the experience to make easier.",
                },
            },
            {
                slug: "logo-brand-identity",
                icon: Palette,
                tag: "SPECIALIZATION 02",
                title: "Logo & Brand Identity",
                description:
                    "As a branding agency in Delhi, we provide logo design services with custom typography, brand marks, and color systems.",
                badge: "Identity Assets",
                details: {
                    hook: {
                        headline: "A brand should feel like the same business everywhere.",
                        intro: "If your logo, colours, and visual tone change from one place to another, it can be harder for people to recognise you. A considered identity gives your business a clear and usable visual foundation.",
                    },
                    whyItMatters: [
                        "Consistent brand cues help people recognise your business across different channels.",
                        "A clear identity gives your team practical guidance when creating new materials.",
                        "A distinctive, relevant mark helps communicate the character of your business without relying on a long explanation.",
                    ],
                    commonMistakes: [
                        {
                            mistake: "Choosing a logo only because it follows a passing visual trend.",
                            consequence: "The identity may feel disconnected from your business and become dated quickly.",
                        },
                        {
                            mistake: "Using different logo files, colours, and fonts without shared rules.",
                            consequence: "Marketing materials can look unrelated, making recognition less consistent.",
                        },
                        {
                            mistake: "Designing only for a large screen or a white background.",
                            consequence: "The mark may lose legibility on small screens, print, or dark surfaces.",
                        },
                    ],
                    advantages: [
                        {
                            title: "A recognisable presence",
                            text: "A consistent visual system helps connect your website, social profiles, and business materials.",
                        },
                        {
                            title: "A clearer first impression",
                            text: "Thoughtful choices in type, colour, and imagery help express what your business stands for.",
                        },
                        {
                            title: "Flexible logo use",
                            text: "Useful variations help the identity work across compact spaces and different backgrounds.",
                        },
                        {
                            title: "Confident day-to-day use",
                            text: "Simple brand guidance helps your team keep new materials consistent.",
                        },
                    ],
                    included: [
                        "Brand and audience discovery",
                        "Logo concepts and refinement",
                        "Primary and alternate logo formats",
                        "Colour and typography selection",
                        "Practical identity usage guidelines",
                    ],
                    process: [
                        {
                            step: 1,
                            title: "Discover",
                            text: "We learn about your business, audience, context, and what your current identity needs to communicate.",
                        },
                        {
                            step: 2,
                            title: "Explore",
                            text: "We develop visual directions and explain the thinking behind the strongest options.",
                        },
                        {
                            step: 3,
                            title: "Refine",
                            text: "We develop the chosen direction into a flexible identity and review it in real use cases.",
                        },
                        {
                            step: 4,
                            title: "Hand over",
                            text: "You receive the final identity files and guidance for using them consistently.",
                        },
                    ],
                    isItForYou: [
                        "Your business is new and needs a visual identity to launch with.",
                        "Your current logo or brand materials feel inconsistent or hard to use.",
                        "You are repositioning your business or speaking to a different audience.",
                        "Your team needs clear visual rules for upcoming marketing materials.",
                    ],
                    faqs: [
                        {
                            q: "Will I receive logo files for different uses?",
                            a: "The handoff includes practical logo variations and formats suited to common digital and print uses.",
                        },
                        {
                            q: "Can you work with an existing logo?",
                            a: "Yes. We can build supporting colours, typography, and usage guidance around an existing mark, or discuss whether a refinement would help.",
                        },
                        {
                            q: "Do you create a brand guide?",
                            a: "Yes. The identity handoff includes concise guidance for applying the visual elements consistently.",
                        },
                    ],
                    bridge: "If your identity no longer fits your business or you need a clear place to start, tell us what you want people to recognise.",
                },
            },
            {
                slug: "design-systems-ui-libraries",
                icon: LayoutDashboard,
                tag: "SPECIALIZATION 03",
                title: "Design Systems & UI Libraries",
                description:
                    "Scalable component architecture and design tokens that keep your digital platform cohesive as you scale.",
                badge: "Reusable Tokens",
                details: {
                    hook: {
                        headline: "A growing product needs a design language that can keep up.",
                        intro: "When every page solves the same interface problem differently, updates take more effort and the experience becomes inconsistent. A design system gives your team shared patterns to build and improve from.",
                    },
                    whyItMatters: [
                        "Reusable components reduce repeated design and implementation decisions.",
                        "Shared rules for spacing, type, and colour make related screens feel connected.",
                        "Documented patterns help designers and developers understand how an interface should behave.",
                    ],
                    commonMistakes: [
                        {
                            mistake: "Building a large component library before understanding real product needs.",
                            consequence: "The system becomes difficult to maintain and fills with patterns no one uses.",
                        },
                        {
                            mistake: "Duplicating components with small, undocumented differences.",
                            consequence: "The interface drifts over time and changes have to be repeated in many places.",
                        },
                        {
                            mistake: "Documenting only how a component looks.",
                            consequence: "Teams may use it inconsistently because states, behavior, and accessibility are unclear.",
                        },
                    ],
                    advantages: [
                        {
                            title: "More consistent screens",
                            text: "Shared components make familiar interactions behave and look alike across the product.",
                        },
                        {
                            title: "Simpler iteration",
                            text: "A considered change to a shared pattern can inform the screens that use it.",
                        },
                        {
                            title: "Clearer collaboration",
                            text: "Designers and developers can refer to the same component rules and decisions.",
                        },
                        {
                            title: "Room to grow",
                            text: "A system based on real use can expand without making every new page a one-off.",
                        },
                    ],
                    included: [
                        "Review of existing screens and repeated patterns",
                        "Foundational colour, type, and spacing tokens",
                        "Prioritised reusable component library",
                        "Component states and usage guidance",
                        "Handoff notes for design and development",
                    ],
                    process: [
                        {
                            step: 1,
                            title: "Audit",
                            text: "We review existing screens and identify the patterns that are repeated or causing inconsistency.",
                        },
                        {
                            step: 2,
                            title: "Prioritise",
                            text: "We agree on the foundations and components that will be most useful to the current product.",
                        },
                        {
                            step: 3,
                            title: "Build",
                            text: "We define tokens, create components, and document their states and intended use.",
                        },
                        {
                            step: 4,
                            title: "Apply",
                            text: "We validate the system against real screens and refine it based on how the team will use it.",
                        },
                    ],
                    isItForYou: [
                        "Your product has repeated patterns that look or behave differently across pages.",
                        "Small interface changes require updates in many separate places.",
                        "Your design and development teams need a shared reference.",
                        "You are adding screens and want new work to stay consistent with existing patterns.",
                    ],
                    faqs: [
                        {
                            q: "Is a design system the same as a UI kit?",
                            a: "A UI kit is usually a collection of interface components. A design system also explains the rules, decisions, and usage that make those components work together.",
                        },
                        {
                            q: "Can you organise the screens and components we already have?",
                            a: "Yes. We can audit existing work and build a system around useful patterns instead of replacing everything by default.",
                        },
                        {
                            q: "How do you keep a design system maintainable?",
                            a: "We start with real, repeated needs, keep guidance clear, and make ownership and component usage understandable for the team.",
                        },
                    ],
                    bridge: "If your interface is becoming harder to keep consistent, tell us where the repeated work is slowing your team down.",
                },
            },
            {
                slug: "graphic-design-marketing-collateral",
                icon: BookOpen,
                tag: "SPECIALIZATION 04",
                title: "Graphic Design & Marketing Collateral",
                description:
                    "Our graphic design company in Delhi creates campaign assets, booklets, and print and digital collateral for local businesses.",
                badge: "Print & Digital Decks",
                details: {
                    hook: {
                        headline: "Every piece of communication should look like it came from you.",
                        intro: "A social post, brochure, or campaign graphic may be someone’s first introduction to your business. A clear visual system helps each piece communicate its message while still feeling recognisably connected.",
                    },
                    whyItMatters: [
                        "Consistent design helps people connect separate campaign materials to the same business.",
                        "Clear hierarchy makes the key message easier to scan in a busy feed or printed page.",
                        "Design prepared for its actual format is more legible and usable across print and digital channels.",
                    ],
                    commonMistakes: [
                        {
                            mistake: "Trying to fit every message and detail into one graphic.",
                            consequence: "The main point gets lost and the material becomes harder to scan.",
                        },
                        {
                            mistake: "Using inconsistent styles across a campaign.",
                            consequence: "Related materials can feel disconnected and harder to recognise.",
                        },
                        {
                            mistake: "Resizing one design without adapting it to each format.",
                            consequence: "Text, images, or important details can become cramped or difficult to read.",
                        },
                    ],
                    advantages: [
                        {
                            title: "A connected campaign",
                            text: "Visual consistency helps each asset support the same message and identity.",
                        },
                        {
                            title: "Clearer communication",
                            text: "A deliberate hierarchy directs attention to the message that matters first.",
                        },
                        {
                            title: "Format-ready files",
                            text: "Assets are prepared with their intended print or digital use in mind.",
                        },
                        {
                            title: "Easier future updates",
                            text: "Reusable layouts make it simpler to create related materials without starting over.",
                        },
                    ],
                    included: [
                        "Campaign or communication brief",
                        "Visual direction aligned to your brand",
                        "Print or digital collateral layouts",
                        "Format-specific asset preparation",
                        "Final files ready for the agreed use",
                    ],
                    process: [
                        {
                            step: 1,
                            title: "Brief",
                            text: "We clarify the audience, message, format, brand material, and intended use.",
                        },
                        {
                            step: 2,
                            title: "Direct",
                            text: "We establish a visual direction and layout hierarchy around the main message.",
                        },
                        {
                            step: 3,
                            title: "Design",
                            text: "We develop the approved direction into the required campaign or collateral assets.",
                        },
                        {
                            step: 4,
                            title: "Prepare",
                            text: "We review the work and prepare final files for the intended print or digital channel.",
                        },
                    ],
                    isItForYou: [
                        "Your business needs campaign graphics, brochures, or other marketing materials.",
                        "Your current assets look different from one channel or campaign to another.",
                        "You need a message made clearer through layout and visual hierarchy.",
                        "You want print and digital materials to feel like part of the same brand.",
                    ],
                    faqs: [
                        {
                            q: "Can you create materials for both print and digital use?",
                            a: "Yes. We prepare layouts and files according to the agreed formats and where each asset will be used.",
                        },
                        {
                            q: "Can you use our existing brand identity?",
                            a: "Yes. We can work with your current logo, colours, and typography, and flag any gaps that affect consistency.",
                        },
                        {
                            q: "What do you need before starting?",
                            a: "A clear goal, the intended audience and formats, any existing brand files, and the copy or key information for the material.",
                        },
                    ],
                    bridge: "If you have a campaign or communication piece in mind, tell us who it needs to reach and what they should understand.",
                },
            },
            {
                slug: "conversion-landing-pages",
                icon: Filter,
                tag: "SPECIALIZATION 05",
                title: "Conversion Landing Pages",
                description:
                    "Single-offer page architectures engineered with clear visual hierarchy to turn traffic into enquiries.",
                badge: "Conversion Optimized",
                details: {
                    hook: {
                        headline: "A campaign page should make one next step feel clear.",
                        intro: "When a visitor lands from an advert or a specific campaign, a general page can make it difficult to find the relevant offer. A focused landing page connects the promise that brought them there to the information they need next.",
                    },
                    whyItMatters: [
                        "A clear match between campaign message and page content helps visitors understand they are in the right place.",
                        "Focused structure reduces competing choices and keeps attention on the intended action.",
                        "Useful details and answers help people judge whether the offer fits their needs.",
                    ],
                    commonMistakes: [
                        {
                            mistake: "Sending campaign visitors to a general homepage.",
                            consequence: "People may have to search for the specific offer mentioned in the campaign.",
                        },
                        {
                            mistake: "Giving a page several competing calls to action.",
                            consequence: "Visitors can be unsure which action is the intended next step.",
                        },
                        {
                            mistake: "Leaving out practical details or common questions.",
                            consequence: "Visitors may not have enough context to decide whether to enquire.",
                        },
                    ],
                    advantages: [
                        {
                            title: "A more relevant arrival",
                            text: "The page continues the campaign conversation instead of making visitors start over.",
                        },
                        {
                            title: "One clear path",
                            text: "A focused layout guides attention toward the action that matters for that offer.",
                        },
                        {
                            title: "Better-informed enquiries",
                            text: "Helpful details make it easier for visitors to understand what they are asking about.",
                        },
                        {
                            title: "A page you can learn from",
                            text: "A defined page goal gives you a clearer basis for reviewing campaign feedback and behaviour.",
                        },
                    ],
                    included: [
                        "Campaign and audience alignment",
                        "Landing-page content structure",
                        "Offer, proof, and FAQ sections as relevant",
                        "Responsive page design and development",
                        "Clear enquiry or action path",
                    ],
                    process: [
                        {
                            step: 1,
                            title: "Align",
                            text: "We clarify the campaign promise, intended audience, and action the page should support.",
                        },
                        {
                            step: 2,
                            title: "Structure",
                            text: "We organise the offer, useful details, objections, and next step into a focused page flow.",
                        },
                        {
                            step: 3,
                            title: "Create",
                            text: "We design and build the responsive page, keeping the campaign message consistent.",
                        },
                        {
                            step: 4,
                            title: "Review",
                            text: "We check the page on different screens and confirm that the content and action path are clear.",
                        },
                    ],
                    isItForYou: [
                        "You are running a campaign with a specific offer or audience.",
                        "Visitors reach your website but have to search for the relevant information.",
                        "You want one page to explain a service, event, or promotion clearly.",
                        "Your campaign needs a consistent destination for its calls to action.",
                    ],
                    faqs: [
                        {
                            q: "How is a landing page different from a homepage?",
                            a: "A homepage introduces the broader business. A landing page is organised around a specific campaign, audience, or action.",
                        },
                        {
                            q: "Can an existing campaign use a new landing page?",
                            a: "Yes. We can align a page with an existing campaign by reviewing its message, audience, and destination action.",
                        },
                        {
                            q: "What should I prepare before we start?",
                            a: "Share the campaign goal, audience, offer details, relevant brand assets, and the action visitors should take.",
                        },
                    ],
                    bridge: "If a campaign needs a clearer destination, tell us what visitors are arriving for and what you want them to do next.",
                },
            },
            {
                slug: "shopify-ecommerce-development",
                icon: AppWindow,
                tag: "SPECIALIZATION 06",
                title: "Shopify & E-commerce Development",
                description:
                    "From Shopify website development in Delhi to e-commerce website development in Delhi, our stores make product discovery and checkout straightforward.",
                badge: "Online Store Builds",
                details: {
                    hook: {
                        headline: "Buying online should feel straightforward from first browse to checkout.",
                        intro: "A useful store helps shoppers understand products, compare relevant details, and see what happens next. We build Shopify and e-commerce experiences around the way your customers browse and buy.",
                    },
                    whyItMatters: [
                        "Clear categories and product details help shoppers find and assess the right item.",
                        "A predictable cart and checkout flow makes the purchase steps easier to understand.",
                        "Store information about delivery, returns, and support helps set clear expectations before purchase.",
                    ],
                    commonMistakes: [
                        {
                            mistake: "Using unclear categories or inconsistent product information.",
                            consequence: "Shoppers may struggle to compare items or find what they came to buy.",
                        },
                        {
                            mistake: "Adding friction or surprises late in the checkout journey.",
                            consequence: "Customers can lose confidence when important steps or terms are unclear.",
                        },
                        {
                            mistake: "Treating mobile as a smaller desktop layout.",
                            consequence: "Product discovery and checkout controls may be difficult to use on a phone.",
                        },
                    ],
                    advantages: [
                        {
                            title: "Easier product discovery",
                            text: "Logical navigation and useful product information support a more confident browse.",
                        },
                        {
                            title: "A clearer purchase journey",
                            text: "Visible cart and checkout steps help shoppers understand what to do next.",
                        },
                        {
                            title: "Consistent brand experience",
                            text: "Storefront design connects product presentation with the rest of your brand.",
                        },
                        {
                            title: "A store your team can manage",
                            text: "A considered setup helps your team maintain products and store content as needs change.",
                        },
                    ],
                    included: [
                        "Store and product-structure planning",
                        "Responsive storefront design",
                        "Product, category, and navigation setup",
                        "Cart and checkout configuration",
                        "Essential store information and handoff guidance",
                    ],
                    process: [
                        {
                            step: 1,
                            title: "Plan",
                            text: "We understand your products, shoppers, fulfilment needs, and how the store should be organised.",
                        },
                        {
                            step: 2,
                            title: "Structure",
                            text: "We map categories, product details, and the route from browsing to checkout.",
                        },
                        {
                            step: 3,
                            title: "Build",
                            text: "We configure and design the store, then check its key screens across devices.",
                        },
                        {
                            step: 4,
                            title: "Handover",
                            text: "We review the store with you and explain the practical steps for managing its content.",
                        },
                    ],
                    isItForYou: [
                        "You want to start selling products online or improve an existing store.",
                        "Customers have trouble finding products or understanding product details.",
                        "Your current storefront feels difficult to use on a phone.",
                        "You need a store structure your team can update as products change.",
                    ],
                    faqs: [
                        {
                            q: "Can you build on Shopify?",
                            a: "Yes. We can plan and build a Shopify storefront around your catalogue, brand, and customer journey.",
                        },
                        {
                            q: "Can you improve an existing store instead of rebuilding it?",
                            a: "Yes. We can review the current store and focus on the areas that need clearer structure, presentation, or usability.",
                        },
                        {
                            q: "Will our team be able to update products?",
                            a: "We plan the handoff so your team can manage routine product and content updates in the store platform.",
                        },
                    ],
                    bridge: "If you are planning an online store or want to make an existing one easier to use, tell us what you sell and where shoppers get stuck.",
                },
            },
        ],
    },
    {
        slug: "search-digital-marketing",
        title: "Search & Digital Marketing",
        description:
            "We are a digital marketing company in Delhi, helping businesses improve search visibility, attract relevant enquiries, and reach customers through measurable campaigns.",
        introduction: {
            eyebrow: "Search & digital marketing",
            headline: "Be easier to find. Make every campaign count.",
            body: "A strong digital marketing plan connects useful content, search visibility, and paid campaigns to the people your business wants to reach. Our digital marketing services in Delhi bring those pieces together with clear goals and practical tracking.",
            details: [
                {
                    title: "Build search visibility",
                    description: "Technical SEO, useful content, and local search foundations help customers find relevant information about your business. Our SEO services in Delhi give this work a clear local focus.",
                },
                {
                    title: "Reach the right audience",
                    description: "Paid search, social campaigns, and consistent messaging are planned around your offer and intended audience.",
                },
                {
                    title: "Learn from performance",
                    description: "Campaign tracking and reporting make it easier to understand what is working and where to focus next.",
                },
            ],
        },
        information: {
            whyTitle: "Why search and marketing matter",
            why: "People discover businesses in different ways: through search, useful content, social channels, or paid campaigns. Connecting those touchpoints to a clear message helps the right audience understand what you offer. Good measurement also gives you a more grounded way to learn what is reaching people and where to focus next.",
            buildTitle: "How we help you reach people",
            offerings: [
                {
                    title: "Organic & local discovery",
                    description: "Improve the foundations that help search engines and nearby customers understand your business and its services.",
                },
                {
                    title: "Paid campaigns",
                    description: "As a digital advertising agency in Delhi, we plan search and social campaigns around a clear audience, relevant message, and useful tracking.",
                },
                {
                    title: "Content & customer follow-up",
                    description: "Create helpful content and considered email, social, or messaging touchpoints that support ongoing conversations.",
                },
            ],
        },
        image: "/searchDigitalMarketing.png",
        imageAlt: "Search and digital marketing showcase",
        highlight: "Direct Lead Pipeline & CRM Sync",
        services: [
            {
                slug: "seo-local-business-seo",
                icon: Search,
                tag: "SPECIALIZATION 01",
                title: "Search Engine Optimization (SEO) & Local Business SEO",
                description:
                    "Our SEO company in Delhi provides SEO services that help businesses improve technical foundations, useful content, and local search visibility.",
                badge: "LOCAL & TECHNICAL SEARCH",
            },
            {
                slug: "pay-per-click-advertising",
                icon: Target,
                tag: "SPECIALIZATION 02",
                title: "Pay-Per-Click Advertising (Google & Meta Ads)",
                description:
                    "As a Google Ads agency in Delhi, we plan measurable campaigns. Our PPC agency in Delhi also manages tracking and reporting.",
                badge: "SERVER-SIDE TRACKING",
            },
            {
                slug: "social-media-marketing",
                icon: Share2,
                tag: "SPECIALIZATION 03",
                title: "Social Media Marketing (SMM)",
                description:
                    "As a social media marketing agency in Delhi, we plan content, build communities, and schedule campaigns for Delhi businesses.",
                badge: "COMMUNITY GROWTH",
            },
            {
                slug: "content-marketing-copywriting",
                icon: NotebookPen,
                tag: "SPECIALIZATION 04",
                title: "Content Marketing & Copywriting",
                description:
                    "Value-driven, persuasive copy styled to capture attention and nurture prospects.",
                badge: "PERSUASIVE EDITORIAL",
            },
            {
                slug: "email-whatsapp-marketing",
                icon: Send,
                tag: "SPECIALIZATION 05",
                title: "Email & WhatsApp Marketing",
                description:
                    "Behavior-based, automated email flows and mobile chat campaigns running on autopilot.",
                badge: "AUTOMATED FLOWS",
            },
            {
                slug: "lead-generation",
                icon: Target,
                tag: "SPECIALIZATION 06",
                title: "Lead Generation",
                description:
                    "As a lead generation company in Delhi, we build campaigns and landing pages. Our lead generation services in Delhi focus on clear enquiry paths.",
                badge: "ENQUIRY-FOCUSED CAMPAIGNS",
            },
        ],
    },
    {
        slug: "video-production-editing",
        title: "Video Editing & Production",
        description:
            "Video editing services for Delhi brands: shape a sharper story, showcase your work, and prepare polished content for digital channels.",
        introduction: {
            eyebrow: "Video editing & production",
            headline: "Give your story a frame people remember.",
            body: "From planning a product shoot to polishing a finished edit, video production combines a clear message with purposeful visuals and sound. We create content shaped for your audience, brand, and the places you plan to share it.",
            details: [
                {
                    title: "Plan the right story",
                    description: "Set the audience, message, format, and deliverables before production or editing begins.",
                },
                {
                    title: "Capture what matters",
                    description: "Product, event, and brand footage is framed to show the details people need to see.",
                },
                {
                    title: "Finish for each channel",
                    description: "Editing, color, sound, captions, and aspect ratios help prepare your video for its intended platform.",
                },
            ],
        },
        information: {
            whyTitle: "Why video matters",
            why: "Video can show details, atmosphere, and process in a way that is difficult to convey with a short description alone. A clear story gives every shot a purpose, while thoughtful editing, sound, and formatting make the finished piece easier to use on the channels that matter to your audience.",
            buildTitle: "What we create",
            offerings: [
                {
                    title: "Brand & commercial films",
                    description: "Shape a clear story around your business, campaign, or service with purposeful footage and editing.",
                },
                {
                    title: "Product & event coverage",
                    description: "Capture product details, important moments, and real activity in a way viewers can follow.",
                },
                {
                    title: "Short-form & post-production",
                    description: "Edit footage for social formats with considered pacing, captions, color, and sound.",
                },
            ],
        },
        image: "/videoEditing.png",
        imageAlt: "Video shoot and editing showcase",
        highlight: "Cinematic Grading & Sound Design Studio",
        services: [
            {
                slug: "video-editing-commercial-production",
                icon: Video,
                tag: "SPECIALIZATION 01",
                title: "Video Editing & Commercial Production",
                description:
                    "Our video editing services support Delhi brands. Work with a video editor in Delhi to shape commercial footage for digital channels.",
                badge: "BRAND CAMPAIGNS",
            },
            {
                slug: "product-shoot-video-showcase",
                icon: Camera,
                tag: "SPECIALIZATION 02",
                title: "Product Shoot & Video Showcase",
                description:
                    "High-definition video capturing physical craftsmanship, material details, and functionality.",
                badge: "MACRO & STUDIO LIGHTING",
            },
            {
                slug: "corporate-event-video-shoot",
                icon: Film,
                tag: "SPECIALIZATION 03",
                title: "Corporate & Event Video Shoot",
                description:
                    "Multi-camera coverage, executive interviews, and professional event highlights.",
                badge: "MULTI-CAMERA COVERAGE",
            },
            {
                slug: "reels-youtube-shorts-editing",
                icon: Wand2,
                tag: "SPECIALIZATION 04",
                title: "Reels & YouTube Shorts Editing",
                description:
                    "Mobile-optimized edits equipped with high-retention transitions, captions, and staccato pacing.",
                badge: "9:16 VERTICAL RETENTION",
            },
            {
                slug: "color-grading-post-production",
                icon: Sparkles,
                tag: "SPECIALIZATION 05",
                title: "Color Grading & Post-Production",
                description:
                    "Professional color grading, audio leveling, and visual polish to elevate raw footage into broadcast-quality assets.",
                badge: "BROADCAST FINISH",
                colSpan: "md:col-span-2 lg:col-span-2",
            },
        ],
    },
];

export const services = serviceGroups.flatMap((group) =>
    group.services.map((service) => ({
        ...service,
        groupSlug: group.slug,
        groupTitle: group.title,
        groupDescription: group.description,
        image: group.image,
        imageAlt: group.imageAlt,
    })),
);

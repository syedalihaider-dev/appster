// Next
import Image from "next/image"

// Bannar Images
const BannerLogos = "/services/bannerLogo.webp";
const BannerBg = "/services/bgBanner.webp";

//========= CaseStudy Images
const slider1 = "/newmobileapp/slider-2.png";
const slider2 = "/newmobileapp/slider-3.png";
const slider3 = "/newmobileapp/slider-5.png";
const slider4 = "/newmobileapp/slider-4.png";
const slider5 = "/newmobileapp/slider-1.png";

//========= WhyChoose Images
import { WhyChooseIcon01, WhyChooseIcon02, WhyChooseIcon03, WhyChooseIcon04 } from "@/src/app/app-constants"

//========= Process Images
const IMG = "/services/process/tab01.webp"

//========= Technologies Images
const TechIcon01 = "/services/tech/1.webp"
const TechIcon02 = "/services/tech/2.webp"
const TechIcon03 = "/services/tech/3.webp"
const TechIcon04 = "/services/tech/4.webp"
const TechIcon05 = "/services/tech/5.webp"
const TechIcon06 = "/services/tech/6.webp"
const TechIcon07 = "/services/tech/7.webp"
const TechIcon08 = "/services/tech/8.webp"
const TechImg = "/services/techImg.webp"

//========= Testimonial Images
const TestiImg1 = "/services/reviwes/trustpilot.webp"
const TestiImg2 = "/services/reviwes/clutch.webp"
const TestiImg3 = "/services/reviwes/google.webp"
const KayleeSlone = "/services/reviwes/KayleeSlone.webp"
const RyanJaden = "/services/reviwes/RyanJaden.webp"
const Joseph = "/services/reviwes/Joseph.webp"
const MauryoJones = "/services/reviwes/MauryoJones.webp"
const KateBullock = "/services/reviwes/KateBullock.webp"

//========= Risks Images
const RisksIMG01 = "/services/customImg01.webp"
const RisksIMG02 = "/services/customImg02.webp"

//========= Fueling Images
const FuelingImg = "/services/cuttingEdge.webp"

//========= CtaEstimated Images
const CtaEstimatedImg = "/services/ctaImg.webp"


//========= TechStack Images
const TAB1_1 = "/services/tech/tab1/01.webp";
const TAB1_2 = "/industry/techstack/Flutter.svg";
const TAB1_3 = "/industry/techstack/Flutter.svg";
const TAB2_1 = "/services/tech/tab2/01.webp";
const TAB2_2 = "/services/tech/tab2/02.webp";
const TAB2_3 = "/services/tech/tab2/03.webp";
const TAB2_4 = "/services/tech/tab2/04.webp";
const TAB2_5 = "/services/tech/tab2/05.webp";
const TAB2_6 = "/services/tech/tab2/06.webp";
const TAB2_7 = "/services/tech/tab2/07.webp";
const TAB3_1 = "/industry/techstack/Firebase.svg";
const TAB3_2 = "/services/tech/tab3/02.webp";
const TAB3_3 = "/services/tech/tab3/03.webp";
const TAB3_4 = "/services/tech/tab3/04.webp";
const TAB4_1 = "/services/tech/tab4/01.webp";
const TAB4_2 = "/services/tech/tab4/02.webp";
const TAB4_3 = "/services/tech/tab4/03.webp";
const TAB4_4 = "/services/tech/tab4/04.webp";
const TAB5_1 = "/services/tech/tab5/01.webp";
const TAB5_2 = "/services/tech/tab5/02.webp";
const TAB5_3 = "/services/tech/tab5/03.webp";
const TAB5_4 = "/services/tech/tab5/04.webp";
const TAB6_1 = "/services/tech/tab6/01.webp";
const TAB6_2 = "/services/tech/tab6/02.webp";
const TAB6_3 = "/services/tech/tab6/03.webp";
const TAB6_4 = "/services/tech/tab6/04.webp";

//========= Industries Images

import { LogisticsSVG, MusicSVG, EcommerceSVG, EducationSVG, FintechSVG, HealthcareSVG, RealEstateSVG, RideHailingSVG, SocialSVG, TravelSVG } from "@/src/app/app-constants";
const Ecommerce = "/services/industry/Ecommerce.webp";
const Fintech = "/services/industry/Fintech.webp";
const Healthcare = "/services/industry/Healthcare.webp";
const Education = "/services/industry/Education.webp";
const SocialMarketing = "/services/industry/SocialMarketing.webp";
const RealEstate = "/services/industry/RealEstate.webp";
const Logistics = "/services/industry/Logistics.webp";
const Music = "/services/industry/music.webp";

//========= Blogs Images
const BlogsIMG01 = "/services/blogs/post-1.webp"
const BlogsIMG02 = "/services/blogs/post-2.webp"
const BlogsIMG03 = "/services/blogs/post-3.webp"
import Link from "next/link";


export const BannerData = {
    subtitle: "Top Flutter App Developers in the USA",
    title: "A Flutter App Development Company That Delivers Scale & Performance. ",
    content: "Launch high-performance products with Flutter app development services that halve release cycles and preserve native performance. Our Flutter app solutions prioritize maintainable architecture, reproducible tests, and measurable KPIs to boost adoption, simplify integrations, and deliver predictable scalability across iOS and Android platforms for both startups and enterprises.",
    BannerLogos: BannerLogos,
    BannerBg: BannerBg,
    fromtitle: "Let’s Discuss Your App Idea",
    fromtext: "Share your app business objectives with our experts and create your custom app."
}

export const CuttingedgeContent = {
    title: "End-To-End Flutter App Development Solutions Disrupt Boundaries.",
    text: "Our Flutter App Development solutions help businesses lead the digital ecosystem. We manage the entire lifecycle, from innovative design to deployment across mobile, web, and desktop, ensuring that your application's technical foundations are as ambitious as your market strategy.",
    subtext: "Estimate Your App Project’s Cost Now!"
}

export const CuttingedgeList = [
    {
        title: (<>Flutter App  <br />Consultation</>),
        txt: "Ship production-ready apps faster with targeted architecture reviews, performance profiling, and roadmap alignment. Our Flutter app developer guidance focuses on platform constraints, widget optimization, CI/CD pipelines, and security hardening. Expect prioritized backlog, measurable KPIs, technical decisions that reduce maintenance cost, and faster, predictable feature velocity across engineering teams.",
        links: "",
    },
    {
        title: (<>Cross-Platform <br />App Development</>),
        txt: (<>Deliver unified experiences across iOS and Android while preserving native performance and platform ergonomics. Our cross-platform app development approach enforces shared business logic, platform-specific components, and strict testing matrices. We reduce duplicate effort, enforce API contracts, and provide release tooling that shortens time to market, lowers operating cost, and improves predictability.</>),
        links: "",
    },
    {
        title: (<>Custom Flutter <br />App Development</>),
        txt: (<>Launch enterprise-grade apps with modular architecture, observability, and strict performance budgets. As a Flutter app development company, we prioritize scalable state management, secure backend integration, and automated testing to ensure release stability. Deliverables include release-ready code, handover documentation, operational runbooks, and governance frameworks that sustain feature velocity and compliance across teams.</>),
        links: "",
    },
    {
        title: (<>Flutter Apps <br />for IoT Devices</>),
        txt: "Control devices reliably with lightweight clients, battery-conscious UI, and deterministic sync schedules. Our Flutter app development for IoT integrates edge SDKs, secure pairing workflows, and OTA update strategies. We implement telemetry sampling, backpressure handling, and staged rollouts to ensure consistent performance across constrained networks, intermittent connectivity, and regulated environments globally.",
        links: "",
    },
    {
        title: (<>Flutter App <br />Migration</>),
        txt: "Consolidate platforms without feature loss, regression, or user churn. A migration playbook used by top Flutter app development companies maps feature parity, isolates platform modules, and rewrites critical paths into Flutter with staged release gates. We validate data migrations, run automated regressions, and hand over maintainable artifacts for reliable continuity.",
        links: "",
    }
    , {
        title: (<>Flutter Desktop <br />App Development</>),
        txt: "Co-create consistent desktop experiences with native windowing, keyboard shortcuts, and optimized rendering pipelines. Our team of Google-certified Flutter app developers builds responsive layouts, adaptive input handling, and efficient asset pipelines for macOS, Windows, and Linux. We add installable builds, update mechanisms, and telemetry to support enterprise deployment and observability.",
        links: "",
    }
]

export const caseStudiesContent = {
    title: "Our Adaptive Flutter App Development Portfolio.",
    text: (<>Each Flutter project is architected for measurable outcomes, faster release cycles, consistent cross-platform UX, and enterprise-grade stability. This portfolio showcases real-world implementations where Flutter app development has delivered quantifiable impact and long-term scalability across various industries.</>),
}

export const caseStudiesList = [
    {
        title: "TradeSchooler",
        description: "A secure, real-time cryptocurrency and stock trading platform. This solution utilizes Flutter app development to deliver pixel-perfect UI/UX and seamless performance across mobile and web platforms. TradeSchooler integrates a custom Dart module for high-frequency data charting and encryption, demonstrating why we are trusted Flutter experts for financial Flutter apps.",
        sliderImages: [slider1],
    },
    {
        title: "VitaX",
        description: "A HIPAA-compliant telemedicine platform connecting patients with remote specialists. Built using Flutter, the application features an adaptive video consultation module and integrated scheduling. VitaX utilizes a single codebase for fast iteration across iOS and Android, proving the efficiency of Flutter app development in sensitive healthcare environments.",
        sliderImages: [slider2],
    },
    {
        title: "GridPeak",
        description: "An enterprise logistics management dashboard for warehouse managers and field agents. Our Flutter experts engineered the Flutter app for robust offline data synchronization and real-time inventory tracking. GridPeak features custom maps and barcode scanning, optimizing complex workflows with rapid deployment speed.",
        sliderImages: [slider3],
    },
    {
        title: "SilverKit ",
        description: "A personalized virtual try-on and color-matching application for home goods. This advanced Flutter app uses ARCore/ARKit integration via Platform Channels to render 3D models seamlessly. SilverKit showcases our proficiency in Flutter app development, delivering high-fidelity graphics and dynamic product visualization.",
        sliderImages: [slider4],
    },
    {
        title: "StoryNest",
        description: "A subscription-based interactive learning and storytelling platform for children. Built as a collection of high-performance flutter apps, the solution features custom animations and parental monitoring controls. StoryNest ensures COPPA compliance and utilizes a single codebase for consistent delivery across mobile and tablet devices.",
        sliderImages: [slider5],
    }
];

export const AppIdeaContent = {
    title: "Performance-Driven Flutter App Development For Next-Generation Of Businesses.",
    text: "-Take the next step in digital evolution with Flutter! Ready to lead? Book a free session and see how we build brilliance!",
}

export const WhyChooseContent = {
    title: "Enterprise-Grade Flutter App Development Services That Help Brands Do A Lot More Than Just Disrupt.",
    text: "Our Flutter app development services are the preferred choice of many customers, CTOs, product managers, startups, and businesses, as they are engineered for uptime, efficiency, and scalability. We architect apps with scalable code, efficient workflows, and production-ready builds."
}

export const WhyChooseList1 = [
    {
        Icon: <WhyChooseIcon03 />,
        title: (<>Cross-Platform <br /> Efficiency</>),
        description: "Cross-platform Flutter builds reduce release cycles by up to 60% compared to parallel native development. Shared code, optimized rendering, and automated device testing enable faster updates with consistent performance across iOS and Android. This efficiency lowers engineering overhead while maintaining technical depth, making Appsters the preferred Flutter app development agency for complex product pipelines.",
    },
    {
        Icon: <WhyChooseIcon01 />,
        title: (<>Compliance <br /> Expertise</>),
        description: "Apps are architected for strict regulatory compliance across healthcare, finance, SaaS, and retail. We integrate encryption, data governance, and audit-ready processes into every build. As a Flutter app development service provider, our frameworks pass security reviews and compliance benchmarks, enabling enterprises to scale confidently while maintaining trust with regulators, investors, and end users.",
    }
];

export const WhyChooseList2 = [
    {
        Icon: <WhyChooseIcon04 />,
        title: (<>Continuous  <br /> Monitoring</>),
        description: "Production systems demand visibility. Every Flutter app includes 24/7 monitoring, automated crash reporting, and latency benchmarks. SLA-backed response ensures incidents are resolved rapidly. Performance dashboards provide engineering leaders with actionable insights, enabling proactive optimization. This approach keeps Flutter apps resilient under traffic spikes, delivering enterprise reliability without compromise on user experience or speed.",
    },
    {
        Icon: <WhyChooseIcon02 />,
        title: (<>Deep Engineering <br /> Bench</>),
        description: "250+ engineers and product experts operate across regions, bringing domain expertise in Flutter, backend integrations, and advanced UI systems. Projects are overseen by architects, while specialists enforce strict code quality standards. This depth ensures rapid delivery without sacrificing maintainability. As a Flutter app development firm, Appsters provides both scale and specialization in one model.",
    }
];

export const ProcessContent = {
    title: "Flutter App Development Process With Proven Stages For Market Disruptive End Products.",
    text: (<>A structured Flutter app development process is critical for reducing risk and maximizing ROI. Appsters follows a transparent framework that gives product leaders complete visibility into scope, timelines, and outcomes. By combining the expertise of top Flutter app developers with best-in-class engineering practices, our Flutter app development services in the USA ensure predictable, measurable results.</>)
}

export const ProcessTabs = [
    {
        title: "App Idea ",
        content: {
            heading: "App Idea & Research",
            description:
                <>We validate concepts through competitive benchmarking, user research, and feasibility analysis. Market insights guide architectural decisions such as database selection, API mapping, and scalability strategies. This early diligence prevents costly rework and anchors your vision in technical realities. Our Flutter app development services in the USA make sure each idea is engineered for adoption and market impact.</>,
            imgSrc: IMG,
        },
    },
    {
        title: "Strategic Planning",
        content: {
            heading: "Strategic Planning & Consultation",
            description:
                <>Planning transforms concepts into executable roadmaps; therefore, we create a blueprint with sprint cycles, release phases, risk mitigation plans, and compliance mapping. Data flows, integration points, and CI/CD pipelines are clearly defined. This ensures alignment between product goals and system design. As a trusted Flutter app development agency, Appsters establishes governance and milestones that keep delivery on track and measurable at every phase.</>,
            imgSrc: IMG,

        },
    },
    {
        title: " Prototyping",
        content: {
            heading: "Wireframing & Prototyping",
            description:
                <>We translate strategies into interactive prototypes with widget-level precision. Wireframes map user journeys, screen transitions, and state management flows, while high-fidelity designs simulate real interactions. Stakeholders validate UI and UX before code is written, eliminating uncertainty later. Prototypes accelerate consensus, improve collaboration, and enable us to develop a Flutter app that aligns with both user behavior and technical constraints.</>,
            imgSrc: IMG,

        },
    },
    {
        title: " Development",
        content: {
            heading: "App Development",
            description:
                "Engineering execution turns blueprints into production-grade systems. Codebases are modular, tested, and version-controlled for maintainability. Our top Flutter app developers implement business logic, API integrations, authentication workflows, and UI layers with strict coding standards. Continuous integration pipelines automate builds and regression checks, while stakeholders receive live demos for visibility. This ensures that every Flutter app meets enterprise-quality benchmarks before testing.",
            imgSrc: IMG,

        },
    },
    {
        title: " Testing",
        content: {
            heading: "Expert QA & Testing",
            description:
                "We conduct functional, regression, integration, and performance testing across fragmented device ecosystems. Load testing, crash simulations, and security audits validate resilience under real-world conditions. QA reports track coverage, defects, and fixes with full transparency. This rigor differentiates us as a Flutter mobile app development company committed to shipping defect-free, enterprise-ready applications at scale.",
            imgSrc: IMG,

        },
    },
    {
        title: "App",
        content: {
            heading: "App Launch",
            description:
                "We oversee App Store and Play Store submissions, optimize metadata, and manage staggered rollouts to mitigate risk. Analytics pipelines are set up from day one to capture KPIs like session length, crash-free rate, and retention. Our Flutter app development firm ensures launches are smooth, compliant, and optimized for immediate market impact.",
            imgSrc: IMG,

        },
    },
    {
        title: "Deployment",
        content: {
            heading: "Deployment",
            description:
                <>We configure infrastructure, integrate monitoring tools, and enforce rollback protocols to guarantee uptime. Build pipelines to promote artifacts from staging to production with minimal disruption. Deployment strategies are aligned with business needs, from phased releases to global rollouts. For enterprises looking to develop a Flutter app, this guarantees stability under complex operating environments.</>,
            imgSrc: IMG,

        },
    },
];

export const TechnologiesContent = {
    title: "Flutter App Development Agency Built on Modern Stacks & Leading Benchmarks.",
    text: (<><p>Performance and reliability start with the right stack. Appsters, as a custom Flutter app development company, builds using Dart, Firebase, GraphQL, AWS, Docker, and Kubernetes. Our Flutter app development solutions integrate CI/CD pipelines, automated testing, and security-driven design from day one. Unlike other Flutter app development companies, we architect applications for maintainability and measurable efficiency, ensuring every build is technically sound, scalable across platforms, and ready for long-term enterprise adoption and definitive results.</p>

    </>),

    TechImg: TechImg
}

export const TechnologiesIcons = [
    {
        title: "iOS",
        icons: TechIcon01,
    },
    {
        title: "Android",
        icons: TechIcon02,
    },
    {
        title: "Flutter",
        icons: TechIcon03,
    },
    {
        title: "Kotlin",
        icons: TechIcon04,
    },
    {
        title: "Objective C",
        icons: TechIcon05,
    },
    {
        title: "ionic",
        icons: TechIcon06,
    },
    {
        title: "React Native",
        icons: TechIcon07,
    },
    {
        title: "Swift",
        icons: TechIcon08,
    },
]

export const TestimonialContent = {
    title: "Client Testimonials",
    TestiImg1: TestiImg1,
    TestiImg2: TestiImg2,
    TestiImg3: TestiImg3
}

export const TestimonialSLIDES = [
    {
        txt: "Our collaboration with Appsters on Flutter development exceeded expectations. Their team delivered a high-performance cross-platform app with clean architecture and airtight security compliance. What impressed me most was their transparency and ability to align technical execution with our business goals. Appsters proved why they stand among the most reliable Flutter partners we’ve worked with. They were efficient, detail-oriented, and highly responsive throughout the entire development cycle.",
        name: "Martha Collins,",
        position: "CTO",
        img: Joseph,
    },
    {
        txt: "Appsters demonstrated real technical depth in Flutter engineering. From strategic planning to deployment, their process was rigorous and outcomes-focused. The app they delivered for us integrates seamlessly with IoT devices and enterprise systems while maintaining excellent speed and reliability. Their developers consistently pushed for measurable performance improvements, making Appsters a trusted partner in our digital growth initiatives. ",
        name: "Russell Reynolds,",
        position: "VP of Product",
        img: RyanJaden,
    },
    {
        txt: "Choosing Appsters as our Flutter app development agency was a turning point. Their ability to accelerate our release cycles without compromising stability sets them apart. The app’s performance metrics, load times, crash-free rates, and user retention spoke volumes about their engineering standards. Beyond coding, they advised on architecture, compliance, and long-term scalability. It’s rare to find a team so committed to results and accountability.",
        name: " Lauren Grey, ",
        position: "CEO",
        img: KayleeSlone,
    }
    ,
    {
        txt: "Appsters approached our Flutter project with enterprise-level rigor. Their engineers optimized every aspect of our application, from state management to backend integration, delivering an app that consistently performs under heavy traffic. They combined cross-platform efficiency with native-like responsiveness, saving us significant time and cost. The professionalism, communication, and precision they brought to the project set a benchmark for how Flutter development should be executed",
        name: "Jason Bennett,",
        position: " Head of Engineering",
        img: MauryoJones,
    },
    {
        txt: "Working with Appsters gave us confidence from day one. They ran thorough research, built robust prototypes, and executed development with discipline. Our Flutter app launched on schedule and immediately hit adoption targets across both iOS and Android. Their continuous monitoring and post-launch support ensured stability even as we scaled. Appsters truly operates as a partner invested in outcomes, not just a development agency. ",
        name: " Hailey Brown,",
        position: "CTO",
        img: KateBullock,
    }
]

export const RisksContent = {
    title: (<>Achieve Rapid <Image src={RisksIMG01} alt="Bitswits Services" width={228} height={85} /> Development with Flutter’s <Image src={RisksIMG02} alt="Bitswits Services" width={228} height={85} />  Cross-Platform Power!</>),
    text: "Let our expert team develop your Flutter app cost-effectively!"
}

export const OffersContent = {
    title: "Native Speed, Universal Reach. Built Right, Once. – Choose Flutter For Cross-Platform Dominance.",
    text: "Flutter’s 'hot reload' capability drastically cuts iteration time, enabling our developers to build and test features faster than with traditional cross-platform frameworks. Because Flutter controls every pixel on the screen (using its own high-performance rendering engine, Skia), it delivers a perfect UI that appears identical on iOS, Android, the Web, and desktop.",
}

export const OffersTabs = [

    {
        title: "Multi-Platform Support",
        content: {
            heading: "Multi-Platform Support",
            description:
                "Flutter enables unified builds that function seamlessly across iOS, Android, and desktop platforms. Our cross-platform Flutter apps are designed with shared logic and optimized components, reducing development costs while ensuring consistent performance and user experience across ecosystems. This unified approach cuts duplication and simplifies long-term maintenance.",
        },
    },

    {
        title: "Rapid Development Process",
        content: {
            heading: "Rapid Development Process",
            description:
                "With a single codebase and optimized workflows, Flutter shortens delivery timelines significantly. Our custom Flutter app development service integrates CI/CD pipelines and reusable components, enabling rapid iterations while maintaining stability, quality, and visibility for all stakeholders. Faster sprints mean earlier feedback and reduced time-to-market advantages.",
        },
    },

    {
        title: "Peak Performance",
        content: {
            heading: "Peak Performance",
            description:
                "Flutter’s rendering engine ensures apps respond smoothly with native-level speed. We optimize Flutter mobile apps through efficient state management, memory profiling, and strict performance testing, ensuring responsiveness and reliability even under high user loads. This guarantees enterprise-ready builds that perform consistently in production environments.",

        },
    },
    {
        title: "Comprehensive Widget Collection",
        content: {
            heading: "Comprehensive Widget Collection",
            description:
                "Flutter’s extensive widget library allows developers to create highly customized interfaces with consistent behavior across devices. Our team leverages this to build Flutter application development solutions that align with branding needs while maintaining robust technical quality. The result is visually engaging, functional applications that scale across markets.",

        },
    },
    {
        title: "Adaptive & Dynamic UI",
        content: {
            heading: "Adaptive & Dynamic UI",
            description:
                "User expectations demand adaptability, and Flutter’s framework supports fluid designs and platform-specific adaptations. Appsters delivers Flutter mobile apps with dynamic interfaces that remain consistent, responsive, and user-focused across screen sizes, devices, and operating systems. Adaptive UIs ensure stronger engagement and higher retention rates.",

        },
    },


];

export const FuelingContent = {
    title: "Technologies We Use In Combination with Flutter",
    text: "We pair backend technologies and databases with Flutter to enhance mobile apps, providing seamless integration and robust performance for superior user experiences.",
    subtitle: "Accelerate Your App Launch with Flutter’s Cross-Platform Efficiency!",
    subtext: "Develop high-performance apps with seamless user experience across multiple platforms.",
    FuelingImg: FuelingImg
}

export const FuelingList = [
    {
        title: "Flutter + Firebase",
        text: "We’re recognized as the best Flutter app development company for combining Flutter with Firebase, which allows us to build MVPs faster. This powerful technology enables the development of feature-rich and scalable applications, providing seamless integration for real-time data handling."
    },
    {
        title: "Flutter + Node.js",
        text: "Integrating Flutter with Node.js enhances backend functionality using RESTful APIs and JavaScript. This combination creates a robust architecture, allowing seamless data exchange and efficient app performance, supporting dynamic and scalable application development across various platforms."
    },
    {
        title: "Flutter + MongoDB",
        text: "Pairing Flutter with MongoDB enables the development of powerful, feature-rich apps with excellent UX across multiple platforms. This combination supports flexible data storage and retrieval, ensuring high performance and scalability for modern application needs."
    },
    {
        title: "Flutter + FastAPI",
        text: "Combining Flutter with FastAPI enables modern API design, creating responsive and secure apps capable of handling high traffic loads. This integration ensures efficient data processing and robust performance, enhancing user experiences across various platforms."
    },
    {
        title: "Flutter + Python",
        text: "Flutter and Python together enable the development of data-intensive apps that utilize data science and machine learning. This synergy facilitates automation and advanced analytics, enhancing app functionality and delivering intelligent solutions across multiple platforms."
    }
];

export const CtaEstimatedContent = {
    subtitle: "Go Beyond Cross-Platform With Flutter App Development ",
    title: "High-Value Flutter Development",
    text: (<>Leverage the experience of our seasoned Flutter mobile app developers to engineer applications built for enterprise reliability and startup speed. At Appsters, Flutter apps are architected for measurable ROI, reduced maintenance costs, faster release cycles, and long-term scalability that outperforms standard cross-platform builds.</>),
    CtaEstimatedImg: CtaEstimatedImg
}

export const TechStackContent = {
    title: "Our Tech Stack For Flutter App Development ",
    text: "We use the latest tools and technologies to deliver secure and resilient Flutter apps!",
}

export const TechStackTabs = [
    {
        title: "Languages",
        content: [
            {
                heading: "Dart",
                img: TAB1_1,
            },
            {
                heading: "Flutter SDK",
                img: TAB1_2,
            },
            {
                heading: "Flutter Framework",
                img: TAB1_3,
            },
        ],
    },
    {
        title: "UI Components and Design",
        content: [
            {
                heading: "Material",
                img: TAB2_1,
            },
            {
                heading: "Cupertino",
                img: TAB2_2,
            },
            {
                heading: "MediaQuery",
                img: TAB2_3,
            },
            {
                heading: "Theme",
                img: TAB2_4,
            },
            {
                heading: "Localization",
                img: TAB2_5,
            },
            {
                heading: "Flutter SVG",
                img: TAB2_6,
            },
            {
                heading: "Syncfusion Charts",
                img: TAB2_7,
            }
        ],
    },
    {
        title: "Backend and Database",
        content: [
            {
                heading: "Firebase",
                img: TAB3_1,
            },
            {
                heading: "Firestore",
                img: TAB3_2,
            },
            {
                heading: "Firebase Cloud Storage",
                img: TAB3_3,
            },
            {
                heading: "SQLite",
                img: TAB3_4,
            }
        ],
    },
    {
        title: "State Management",
        content: [
            {
                heading: "Get & Provider",
                img: TAB4_1,
            },
            {
                heading: "Riverpod",
                img: TAB4_2,
            },
            {
                heading: "Dio",
                img: TAB4_3,
            },
            {
                heading: "Http",
                img: TAB4_4,
            }
        ],
    },
    {
        title: "IDEs",
        content: [
            {
                heading: "Android Studio",
                img: TAB5_1,
            },
            {
                heading: "IntelliJ IDEA",
                img: TAB5_2,
            },
            {
                heading: "Dart Plugins",
                img: TAB5_3,
            },
            {
                heading: "Flutter Local Notifications",
                img: TAB5_4,
            }
        ],
    },
    {
        title: "Utilities ",
        content: [
            {
                heading: "Shared Preferences",
                img: TAB6_1,
            },
            {
                heading: "Image Picker",
                img: TAB6_2,
            },
            {
                heading: "Url Launcher",
                img: TAB6_3,
            },
            {
                heading: "Git ",
                img: TAB6_4,
            }
        ],
    }
];


export const IndustriesContent = {
    title: "One Codebase. Infinite Industries. Where Every Industry Finds Its Edge.",
    text: "Our web, app, gaming, and AI solutions are built to perform, scale, and adapt while setting industry standards and redefining what’s possible for businesses everywhere.",
}


export const IndustriesList = [
    {
        icon: <EcommerceSVG />,
        title: "Ecommerce",
        txt: "We build ecommerce apps that sell more with frictionless checkouts, AI product recommendations, and mobile-first design. Our solutions handle scale effortlessly, from flash sales to global launches. Businesses get powerful dashboards, while shoppers get a personalized, smooth, and secure experience that turns carts into conversions.",
        url: "/ecommerce-app-development",
        img: Ecommerce,
    },
    {
        icon: <FintechSVG />,
        title: "Fintech",
        txt: "We co-create secure, compliant fintech apps that simplify payments, investments, and trading. From blockchain-backed wallets to AI fraud detection, our solutions prioritize speed, trust, and transparency. We help financial institutions and startups scale confidently, turning complex transactions into seamless user journeys with powerful analytics and risk-free automation.",
        url: "/fintech-app-development",
        img: Fintech,
    },
    {
        icon: <HealthcareSVG />,
        title: "Healthcare",
        txt: "We develop HIPAA-compliant healthcare apps that bridge doctors, patients, and data. From telemedicine to AI-powered diagnostics, our solutions improve workflows, reduce wait times, and empower smarter, faster decision-making. Every feature is designed to keep patient privacy airtight while driving measurable results for hospitals, clinics, and health-tech startups.",
        url: "/healthcare-app-development-services",
        img: Healthcare,
    },
    {
        icon: <EducationSVG />,
        title: "Education",
        txt: "Our education apps gamify learning, power virtual classrooms, and track student progress. We integrate AR/VR modules, quizzes, and real-time assessments to boost engagement. Schools, universities, and ed-tech startups leverage our platforms to personalize teaching, improve retention, and make learning as interactive and rewarding as social media scrolling.",
        url: "/education-app-development",
        img: Education,
    },
    {
        icon: <SocialSVG />,
        title: "Social Media",
        txt: "We build social media platforms that are scalable, sticky, and secure. AI-driven feeds, privacy-first chat systems, and live content features drive engagement. Our architecture ensures your platform can handle viral moments without crashing, giving creators, communities, and brands a digital stage to connect and grow.",
        url: "/social-media-app-development-company",
        img: SocialMarketing,
    },
    {
        icon: <RealEstateSVG />,
        title: "Real Estate",
        txt: "We design real estate apps that help buyers, sellers, and agents close deals faster. AR-powered property tours, AI-driven recommendations, and secure document management streamline every step. Our platforms keep listings fresh, negotiations quick, and users delighted, turning real estate buying and selling into a guided, data-driven experience.",
        url: "/real-estate-app-development-company",
        img: RealEstate,
    },
    {
        icon: <LogisticsSVG />,
        title: "Logistics",
        txt: "We power logistics apps with route optimization, GPS tracking, and real-time inventory sync. Our solutions cut costs, eliminate bottlenecks, and ensure every delivery meets its deadline. Carriers, 3PLs, and warehouses rely on us to bring transparency, speed, and automation to complex supply chains across industries.",
        url: "/logistics-software-development",
        img: Logistics,
    },
    {
        icon: <MusicSVG />,
        title: "Music",
        txt: "We create streaming apps, artist marketplaces, and licensing solutions that let music businesses scale and monetize. AI-powered recommendations, offline playback, and fan engagement features keep listeners hooked. Our process covers rights management, secure distribution, and seamless playback to hit the perfect balance between creativity, tech, and revenue.",
        url: "/music-app-development-company",
        img: Music,
    },
];


export const IdeaCtaContent = {
    title: (<>The Market Never Waits.
        <br />  Are You Ready to Launch?</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s Create An Amazing<br /> Flutter App Together!</>)
}

export const FaqsContent = {
    title: "Frequently Asked Questions (FAQs)",
}

export const FaqsList = [
    {
        title: "How does your Flutter app development company ensure app performance?",
        txt: "Our Flutter app development company uses Dart profiling, rendering analysis, and state management best practices to maintain native speed, low memory use, and reliable performance under enterprise loads."
    },
    {
        title: "What backend systems do your Flutter app development services integrate with?",
        txt: `Our Flutter app development services integrate seamlessly with REST/GraphQL APIs, Firebase, AWS, and enterprise ERP/CRM systems, designing optimized middleware to secure data and minimize latency.`
    },
    {
        title: "How does your Flutter mobile app development company handle platform-specific features?",
        txt: "As a Flutter mobile app development company, we use Platform Channels to integrate native iOS and Android APIs (camera, GPS, payments), ensuring both speed and platform-specific functionality."
    },
    {
        title: "What testing practices set your top Flutter app development company apart?",
        txt: "As a top Flutter app development company, we prioritize unit, widget, and integration testing. Our CI/CD pipelines automate load simulations and regression checks for minimal risk and maximum uptime."
    },
    {
        title: "How do your Flutter app developers deliver app security?",
        txt: "Our Flutter app developers embed security via data encryption, secure storage, and API authentication. We integrate security audits into pipelines, ensuring compliance (GDPR/HIPAA)."
    },
    {
        title: "How does your Flutter application development company manage scalability?",
        txt: (<>
            <p>As a Flutter application development company, we use microservices, Kubernetes, and containerized deployments. This guarantees predictable evolution, high concurrency, and reliable feature expansion.</p>
        </>)
    }
]

export const BlogsContent = {
    title: "Our Related Blog Posts",
}

export const BlogsList = [
    {
        title: "How Much Does It Cost to Develop an App in 2024?",
        txt: "Ever noticed how there’s an app for almost everything? To be precise, there are over four million apps available across iOS and Android platforms, extending to a wide range of sub-genres and niches.",
        cat: "Mobile App Development",
        img: BlogsIMG01,
        links: "https://www.bitswits.co/blog/mobile-app-development-cost",
        date: "August 29,2024"
    }, {
        title: "Most Popular Mobile App Development Frameworks",
        txt: "You know how people are glued to their phones these days? Apps are like, everywhere. From booking a cab to buying movie tickets, chatting with friends, and nearly everything else in between, we just can’t do without apps.",
        cat: "Mobile App Development",
        img: BlogsIMG02,
        links: "https://www.bitswits.co/blog/mobile-app-development-frameworks",
        date: "August 13,2024"
    }
    , {
        title: "Everything You Need to Know About Application Development Life Cycle",
        txt: "Frustration with clunky interfaces is a thing of the past. The seamless apps that you are using today for food delivery, banking, or even socializing are created after a well-worked-up development process.",
        cat: "Mobile App Development",
        img: BlogsIMG03,
        links: "https://www.bitswits.co/blog/application-development-life-cycle",
        date: "July 10,2024"
    }
]





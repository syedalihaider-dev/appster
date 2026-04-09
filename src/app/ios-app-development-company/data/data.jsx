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
const TAB1_2 = "/services/tech/tab1/02.webp";
const TAB1_3 = "/services/tech/tab1/03.webp";
const TAB1_4 = "/services/tech/tab1/01.webp";
const TAB1_5 = "/services/tech/tab1/02.webp";
const TAB1_6 = "/services/tech/tab1/03.webp";
const TAB2_1 = "/services/tech/tab2/01.webp";
const TAB2_3 = "/services/tech/tab2/03.webp";
const TAB2_4 = "/services/tech/tab2/04.webp";
const TAB2_5 = "/services/tech/tab2/05.webp";
const TAB2_6 = "/services/tech/tab2/05.webp";
const TAB3_1 = "/services/tech/tab3/01.webp";
const TAB3_2 = "/services/tech/tab3/02.webp";
const TAB3_3 = "/services/tech/tab3/03.webp";
const TAB3_4 = "/services/tech/tab3/01.webp";
const TAB3_5 = "/services/tech/tab3/02.webp";
const TAB3_6 = "/services/tech/tab3/03.webp";
const TAB4_1 = "/services/tech/tab4/01.webp";
const TAB4_2 = "/services/tech/tab4/02.webp";
const TAB4_3 = "/services/tech/tab4/03.webp";
const TAB4_4 = "/services/tech/tab4/04.webp";
const TAB5_1 = "/services/tech/tab5/01.webp";
const TAB5_2 = "/services/tech/tab5/02.webp";
const TAB5_3 = "/services/tech/tab5/03.webp";
const TAB5_4 = "/services/tech/tab5/04.webp";
const TAB5_5 = "/services/tech/tab5/03.webp";
const TAB5_6 = "/services/tech/tab5/04.webp";
const TAB6_1 = "/services/tech/tab6/01.webp";
const TAB6_2 = "/services/tech/tab6/02.webp";
const TAB6_3 = "/services/tech/tab6/03.webp";
const TAB6_4 = "/services/tech/tab6/04.webp";
const TAB6_5 = "/services/tech/tab6/02.webp";
const TAB6_6 = "/services/tech/tab6/03.webp";

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
    subtitle: "Certified  – iOS – App Experts",
    title: "iOS App Development Company Recognized Globally For High-Performance Products.",
    content: "Appsters is a numbers-driven iOS app development company, delivering transformative digital products that reimagine user interaction. Our extensive iOS app development services splice the entire product lifecycle, moving from concept ideation straight through to time-tested App Store deployment. Our experts engineer every iOS app solution for security, infinite scalability, and market adaptability for the Apple ecosystem.",
    BannerLogos: BannerLogos,
    BannerBg: BannerBg,
    fromtitle: "Let’s Discuss Your App Idea",
    fromtext: "Share your app business objectives with our experts and create your custom app."
}

export const CuttingedgeContent = {
    title: "iOS App Development Services That Drive Intelligent Experiences For Users & Developers.",
    text: "From strategy to scalability, Appsters’ iOS app development services transpose your ideas into intelligent, user-focused applications. Our 8-step dynamic process integrates research, design, development, and QA with continuous improvement cycles. ",
    subtext: "Estimate Your App Project’s Cost Now!"
}

export const CuttingedgeList = [
    {
        title: (<>iOS App  <br />Consultation</>),
        txt: (<>Our iOS app developers work alongside your leadership, R&D, technology, and product teams to identify your iOS app’s core objectives, analyze market gaps, and define a clear development strategy backed by measurable milestones and ROI projections. Each consultation translates strategic intent into technical directions for stakeholders. </>),
        links: "",
    },
    {
        title: (<>UI/UX Design <br />For iOS Apps </>),
        txt: "Appsters’ iOS app designers create powerful user experiences through adaptive interfaces, minimalist layouts, and intuitive navigation. Every design decision combines brand ecosystems with functionality, delivering consistent engagement across iPhones, iPads, and other Apple devices. We leverage Apple’s Human Interface Guidelines and accessibility standards.",
        links: "",
    },
    {
        title: (<>Core iOS  <br />App Development </>),
        txt: (<>We develop apps for iOS using advanced Swift and Objective-C frameworks. Each build is optimized for performance, code stability, and modular scalability, ready to integrate AI, AR, and other next-gen capabilities. Every sprint emphasizes security, maintainability, and energy efficiency.</>),
        links: "",
    },
    {
        title: (<>iOS App <br />  QA & Testing </>),
        txt: "Appsters’ iOS mobile application development includes robust QA cycles with automated, manual, and regression testing. Our quality engineers validate performance, functionality, and usability across iOS ecosystems, ensuring error-free deployment. Testing environments replicate real-world network conditions, ensuring your app performs consistently.",
        links: "",
    },
    {
        title: (<>iOS App  <br />Updates & Migration</>),
        txt: "We provide cross-platform iOS apps designed to evolve with your business. From OS upgrades to full-scale migrations, our mobile app development company ensures seamless transitions without compromising data integrity or speed. Version control, CI/CD pipelines, and detailed rollback protocols ensure zero downtime.",
        links: "",
    },
    {
        title: (<>Cross-Device  <br />Rollout</>),
        txt: "Each Google-certified iOS app developer ensures optimized compatibility across all Apple devices, from iPhone to iPadOS and macOS. Our rollout strategy ensures adaptive performance and a unified user experience. Through cloud-based testing and performance audits, we guarantee consistency across screen sizes, chips, and device generations.",
        links: "",
    }
]

export const caseStudiesContent = {
    title: "A Boundary-Breaking iOS Portfolio Where Design Meets Performance.",
    text: "Every app in our iOS portfolio is engineered for impact. From real-time engagement models to adaptive performance frameworks, our iOS app solutions push beyond industry standards. Each project combines design, UX precision, code efficiency, and business logic, creating iOS ecosystems that scale intelligently and deliver measurable ROI from day one.",
}

export const caseStudiesList = [
    {
        title: "Melodia",
        description: "A high-fidelity streaming app designed for audiophiles. Built with adaptive bit-rate streaming, offline caching, and real-time audio optimization, Melodia ensures uninterrupted music with studio-grade sound. Integrated with AI-driven recommendations and iCloud sync, it personalizes playlists dynamically across Apple devices while maintaining ultra-low power consumption and delivering spatial audio experiences.",
        sliderImages: [slider1],
    },
    {
        title: "Voyageur",
        description: "An enterprise-level iOS mobility app with live GPS tracking, route optimization, and in-app payment systems. Voyageur integrates Apple Maps APIs and CoreLocation frameworks for sub-second navigation updates. The app’s architecture supports over 1M concurrent users while maintaining real-time trip data synchronization across iPhone and Apple Watch, providing unmatched reliability and passenger-driver safety protocols.",
        sliderImages: [slider2],
    },
    {
        title: "LedgerPro",
        description: "LedgerPro simplifies financial management through data-driven insights, secure encryption, and Swift-based visual analytics. Built with biometric authentication, live transaction tracking, and ML-powered budget prediction, the app redefines user control and clarity in personal finance across iOS ecosystems, making complex financial planning accessible and automated for everyone.",
        sliderImages: [slider3],
    },
    {
        title: "Breather",
        description: "Designed with Apple HealthKit integration, AuraWell offers meditation tracking, heart-rate correlation, SPO2 monitoring, and emotion-based journaling. Our iOS team leveraged SwiftUI and Core ML to analyze emotional trends and recommend wellness routines dynamically, transforming user feedback into daily adaptive wellness plans, ensuring highly secure and private therapeutic guidance on demand.",
        sliderImages: [slider4],
    },
    {
        title: "DumplingFlow",
        description: "DumplingFlow is a cloud-integrated productivity app built with iOS Metal APIs for seamless real-time collaboration. It supports document synchronization, task automation, and AI task prioritization for teams. Designed for performance, it reduces lag across shared workflows by 34%, making productivity feel frictionless, and is optimized for every screen size from iPad to Mac.",
        sliderImages: [slider5],
    }
];

export const AppIdeaContent = {
    title: "Hire iOS App Developers. The Next Apple Experience Awaits.",
    text: "Partner with Appsters’ leading iOS app developers who combine innovation, user-intuitiveness, Apple-centric designs, and scalability to deliver apps built for performance, growth, and long-term adaptability.",
}

export const WhyChooseContent = {
    title: "iOS Application Development in the USA: Engineering Apps That Breakthrough The Digital Frontier. ",
    text: "Appsters is the iOS app development agency trusted by startups and Fortune 500s for scalable builds, seamless integrations, enterprise-grade security, and performance across Apple devices."
}

export const WhyChooseList1 = [
    {
        Icon: <WhyChooseIcon03 />,
        title: (<>Powerful Security  <br />Architectures </>),
        description: "Every app is shielded through multi-layer encryption, biometric authentication, and real-time data monitoring. We embed privacy by design, ensuring strict compliance with GDPR, HIPAA, and App Store Review Guidelines. This commitment provides a robust defense and guarantees that your iOS app solutions are secure from day one.",
    },
    {
        Icon: <WhyChooseIcon01 />,
        title: (<>Dynamic <br />Scalability</>),
        description: "We engineer scalability into every layer from cloud microservices to on-device AI models so your app performs efficiently across diverse regions and massive traffic surges. Real-time diagnostics provide consistent uptime and low latency, creating a foundation for unbounded user growth and seamless global performance",
    }
];

export const WhyChooseList2 = [
    {
        Icon: <WhyChooseIcon04 />,
        title: (<>Native Performance  <br />Optimization </>),
        description: "Our core focus is delivering native-grade performance. We optimize rendering with Metal API and refine memory usage using ARC (Automatic Reference Counting) principles. This technical rigor eliminates jank and reduces crashes, guaranteeing your app leverages the full power of the latest iOS hardware and processors.",
    },
    {
        Icon: <WhyChooseIcon02 />,
        title: (<>Integrated DevOps  <br />for Swift </>),
        description: "We go for a resilient CI/CD pipeline explicitly built for Swift projects, utilizing tools like Fastlane and GitLab. This setup automates testing, code signing, and deployment, drastically accelerating iteration cycles. Our DevOps integration ensures reproducible, stable builds and immediate rollback capabilities for all new iOS app solutions.",
    }
];

export const ProcessContent = {
    title: "An iOS Development Process That Redefines Apps For The App Store & Beyond.",
    text: (<>Our process merges creative engineering with structured execution. Every iOS app development service moves through eight intelligent stages that transform ideas into enterprise-grade apps. As an iOS app development firm, we integrate performance, user psychology, and innovation at each step. From research to deployment, we build measurable value combining agile workflows, robust architecture, and on-device optimization.</>),
}

export const ProcessTabs = [
    {
        title: "App ",
        content: {
            heading: "App Idea & Research",
            description:
                <>Appsters combines market signals, user needs, and data feasibility to define a clear problem statement and success metrics. Teams conduct domain interviews, competitor analysis, and data audits to assess model viability. Early mapping of inputs, outputs, latency, and compliance constraints clarifies technical risk. Research yields a prioritized backlog, a minimum viable feature set, and measurable KPIs.</>,
            imgSrc: IMG,
        },
    },
    {
        title: "Strategic ",
        content: {
            heading: "Strategic Planning & Consultation",
            description:
                <>Our experts translate research into a scalable roadmap that connects user goals to system architecture. Each iOS app development service is supported by risk modeling, cost optimization, and technology alignment. Planning covers sprint velocity, compliance adherence, and dependency mapping, ensuring a balanced timeline between engineering depth and market agility.</>,
            imgSrc: IMG,

        },
    },
    {
        title: "Wireframing ",
        content: {
            heading: "Wireframing & Prototyping",
            description:
                "Appsters’ iOS app developers create interactive wireframes that visualize the logic, flow, and responsiveness of the product. Prototyping simulates real user interactions, backend dependencies, and compliance with Apple Human Interface Guidelines. This process eliminates design redundancies and confirms technical feasibility before development begins.",
            imgSrc: IMG,

        },
    },
    {
        title: "Development",
        content: {
            heading: "App Development",
            description:
                <>Our engineers specialize in Swift, SwiftUI, and Objective-C to build scalable, modular codebases. Continuous Integration pipelines enable iterative delivery and automated regression tracking. As a leading iOS app development company, Appsters uses GitOps and cloud-native architecture to maintain version control, scalability, and security.</>,
            imgSrc: IMG,

        },
    },
    {
        title: "Testing",
        content: {
            heading: "Expert QA & Testing",
            description:
                "Each build undergoes comprehensive validation for logic integrity, memory optimization, and UI consistency. Automated testing ensures that your iOS app meets Apple’s App Store standards while minimizing regression. Appsters performs load testing, edge case simulation, and multi-device calibration to ensure stable delivery across iPhones, iPads, and wearables.",
            imgSrc: IMG,

        },
    },
    {
        title: "App Launch",
        content: {
            heading: "App Launch",
            description:
                "Appsters prepares each iOS application for market entry through precise App Store configuration and compliance validation. Our iOS app development firm manages provisioning profiles, SDK configurations, and metadata optimization. We conduct A/B tests for iconography, listing performance, and user onboarding—ensuring your app launches at maximum visibility and adoption potential from day one.",
            imgSrc: IMG,

        },
    },
    {
        title: "Deployment",
        content: {
            heading: "Deployment",
            description:
                "Our deployment engineers handle staged rollouts, environment provisioning, and continuous monitoring setups. As an advanced iOS app-making company, we use automated release management, crash analytics, and version control pipelines to ensure zero downtime. Post-deployment, telemetry dashboards provide real-time user insights, enabling fast iterations and sustained performance at scale.",
            imgSrc: IMG,

        },
    },
];

export const TechnologiesContent = {
    title: "Augmenting Innovation Through Future-Ready & Powerful Tech Stacks & iOS Frameworks.",
    text: (<><p>As one of the top iOS app development companies, Appsters combines native expertise with multi-framework agility. Our iOS app development services leverage the complete Apple tech ecosystem, including Swift, SwiftUI, Objective-C, Metal, Core ML, ARKit, SceneKit, and Core Bluetooth, to build responsive and resource-efficient apps.  From Apple Watch and iPadOS to macOS and Apple TV, Appsters ensure unified experiences across screens. Our engineering culture prioritizes clean code, adaptive scaling, and a DevSecOps approach. </p>
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
        txt: "Our team would like to give our appreciation to Appsters for building a HIPAA-compliant patient tracking app that simplified data synchronization across multiple devices. The project’s modular Swift code reduced tech overhead, while the agile sprints helped us deploy updates twice as fast as before. ",
        name: "Amelia Vance, ",
        position: "Manager Operations",
        img: Joseph,
    },
    {
        txt: "My fintech startup in London partnered with Appsters to create a secure digital wallet using biometric verification and encryption APIs. The result was an intuitive user interface built on SwiftUI that enhanced transaction speed and reduced load time to milliseconds.",
        name: "Ethan Cole,",
        position: "Manager Operations",
        img: RyanJaden,
    },
    {
        txt: "Our e-commerce partner in Dubai wanted a retail app with dynamic personalization. Appsters developed an AI-driven recommendation engine that improved conversion rates by 30% and automated product tagging using CoreML. The app is now ranked among the top 50 in its category.",
        name: " Omar Hassan, ",
        position: "Manager Operations",
        img: KayleeSlone,
    }
    ,
    {
        txt: "We collaborated with Appsters for a cross-device iOS streaming platform. Their engineers integrated adaptive bitrate streaming and real-time analytics, helping us handle over 2 million active users without a single crash. That's why we have continued working with these guys.",
        name: "Sarah Chen,",
        position: "Manager Operations",
        img: MauryoJones,
    },
    {
        txt: "Our logistics firm based in Berlin reached out to Appsters to develop a driver management app with route optimization and real-time GPS syncing. Their team created a stable backend and a clean, native iOS experience that improved operational efficiency by 26%.",
        name: " Max Richter,",
        position: "Manager Operations",
        img: KateBullock,
    },
    {
        txt: "Our children's media studio needed a privacy-first, interactive learning app. Appsters built a custom content curation engine with safety classifiers and parental dashboards. Their team delivered a stable platform that handles high concurrency and ensures COPPA compliance, making the app a top performer in the education category",
        name: " Maria Reyes,",
        position: "Manager Operations",
        img: KateBullock,
    }
]

export const RisksContent = {
    title: (<>Validate Your App <Image src={RisksIMG01} alt="Appsters Services" width={228} height={85} />Idea with MVP Development & Save <Image src={RisksIMG02} alt="Appsters Services" width={228} height={85} /> Big on Time & Money!</>),
    text: "Launch an MVP to test your concept, reduce risks, and optimize resources."
}

export const OffersContent = {
    title: "iOS App Development For The Next-Generation Of Fluid Mobile Apps.",
    text: "We engineer iOS app solutions that fully utilize Apple's native frameworks, from SwiftUI aesthetics to Core ML performance. Our expert teams manage the entire product journey, guaranteeing secure integration with HealthKit, CoreLocation, and Apple APIs. Partner with us to build fluid, high-performance iOS applications that thrive across iPhone, iPad, and Watch, future-proofing your product against every major OS update",
}

export const OffersTabs = [

    {
        title: "iOS Apps for Mobile Phones",
        content: {
            heading: "iOS Apps for Mobile Phones",
            description:
                "Our Custom iOS Application Development process focuses on speed, precision, and seamless functionality. From concept to launch, our certified iOS app developers build secure, high-performance apps for iPhones using Swift and Objective-C. Every build is optimized for memory efficiency, battery performance, and a pixel-perfect UI.",
        },
    },

    {
        title: "iOS App for iPad",
        content: {
            heading: "iOS Apps for iPad",
            description:
                "We develop iOS apps tailored for iPad’s expanded display, enabling immersive interfaces and optimized multitasking. Our iOS app development services leverage Apple’s Metal API, Split View, and PencilKit for superior visuals and usability. The result is an app that is both enterprise-grade and visually immersive for end-users.",
        },
    },

    {
        title: "iOS App for Apple Watch",
        content: {
            heading: "iOS Apps for Apple Watch",
            description:
                "We build iOS apps that extend user experiences to the Apple Watch with precision. From health tracking to instant notifications, our iOS app development services integrate seamlessly with watchOS APIs. We design lightweight architectures that ensure smooth performance while staying battery-friendly and connected across devices.",

        },
    },
    {
        title: "iOS App for Apple TV",
        content: {
            heading: "iOS App for Apple TV",
            description:
                "Our certified iOS app developers engineer next-gen experiences for Apple TV. Using tvOS frameworks, we create interactive interfaces that merge entertainment with engagement. These apps enable real-time streaming, multi-device sync, and dynamic content management ideal for brands scaling into smart living ecosystems.",

        },
    },
    {
        title: "iOS App for macOS",
        content: {
            heading: "iOS App for macOS",
            description:
                "Our iOS app development services extend across the Apple ecosystem to macOS, offering cross-platform compatibility with Catalyst. We help businesses build an iOS app that operates natively on desktop while maintaining unified codebases, faster deployment cycles, and integrated iCloud data-sharing for enterprise-level continuity.",

        },
    },
];

export const FuelingContent = {
    title: "Integrating Cutting-Edge Technologies in iOS App Development",
    text: "We leverage emerging technologies to build impressive iOS apps, offering tailored solutions across various industries. Discover how these technologies enhance user experiences and boost app functionality.",
    subtitle: "Launch a High-Performance iOS App with Flawless User Experience!",
    subtext: "Our developers can build intuitive, engaging apps that are designed for maximum performance and scalability.",
    FuelingImg: FuelingImg
}

export const FuelingList = [
    {
        title: "AI & ML",
        text: (<>We specialize in <Link href='/ai-development-company'>AI app development</Link>, creating self-learning, adaptive apps that personalize user experiences. Whether in healthcare or finance, AI and ML technologies enable predictive analytics and automation, boosting engagement and streamlining operations.</>),
    },
    {
        title: "Augmented Reality (AR)",
        text: "AR revolutionizes user interactions by overlaying digital elements in real-world settings. In retail and real estate, users can visualize products or properties, increasing engagement and driving conversions through immersive features."
    },
    {
        title: "Blockchain",
        text: "Blockchain strengthens security and transparency, vital for finance and supply chains. It secures transactions and maintains data integrity, reducing fraud and building trust, making your app more reliable and robust."
    },
    {
        title: "Cloud",
        text: "Cloud technology offers scalable infrastructure, perfect for on-demand and fitness apps. It ensures seamless data storage and real-time updates, providing a responsive user experience that grows with your business."
    },
    {
        title: "Virtual Reality (VR)",
        text: "VR creates immersive, interactive experiences in education and entertainment. Users engage in virtual simulations, enhancing learning and interaction, and delivering captivating app experiences that keep users coming back."
    }
];

export const CtaEstimatedContent = {
    subtitle: "iOS Application Development For The Apple Ecosystem.",
    title: "AI-Powered iOS App Development",
    text: (<>Our iOS app developers work with founders, product teams, and enterprises to design applications that perform flawlessly across Apple’s ecosystem. From strategy and design to deployment, we deliver code that’s clean, fast, and user-centric. Every app we build reflects a measurable ROI and an innovation-first approach in a world moving at a volatile scale.</>),
    CtaEstimatedImg: CtaEstimatedImg
}

export const TechStackContent = {
    title: "Our Tech Stack For iOS App Development",
    text: "Appsters, as a leading iOS app development agency, has complete control over the perfect tech stack for iOS app development. ",
}

export const TechStackTabs = [
    {
        title: "Frontend",
        content: [
            {
                heading: "SwiftUI",
                img: TAB1_1,
            },
            {
                heading: "UIKit",
                img: TAB1_2,
            },
            {
                heading: "Swift",
                img: TAB1_3,
            },
            {
                heading: "Objective-C",
                img: TAB1_4,
            },
            {
                heading: "Combine",
                img: TAB1_5,
            },
            {
                heading: "React Native",
                img: TAB1_6,
            },
        ],
    },
    {
        title: "Backend",
        content: [
            {
                heading: "Node.js",
                img: TAB2_1,
            },
            {
                heading: "Python",
                img: TAB2_3,
            },
            {
                heading: "Ruby on Rails",
                img: TAB2_5,
            },
            {
                heading: "Firebase",
                img: TAB2_4,
            },
            {
                heading: ".NET Core",
                img: TAB2_6,
            },
            {
                heading: "GraphQL",
                img: TAB2_6,
            },
        ],
    },
    {
        title: "Mobile Development",
        content: [
            {
                heading: "Swift",
                img: TAB3_6,
            },
            {
                heading: "Kotlin Multiplatform",
                img: TAB3_1,
            },
            {
                heading: "Flutter",
                img: TAB3_2,
            },
            {
                heading: "React Native",
                img: TAB3_3,
            },
            {
                heading: "Xamarin",
                img: TAB3_4,
            },
            {
                heading: "Ionic",
                img: TAB3_5,
            },
        ],
    },
    {
        title: "Database Management",
        content: [
            {
                heading: "CoreData",
                img: TAB4_1,
            },
            {
                heading: "Realm",
                img: TAB4_1,
            },
            {
                heading: "SQLite",
                img: TAB4_2,
            },
            {
                heading: "Firebase Realtime Database",
                img: TAB4_3,
            },
            {
                heading: "PostgreSQL",
                img: TAB4_4,
            },
            {
                heading: "MySQL",
                img: TAB4_4,
            },
        ],
    },
    {
        title: "Cloud",
        content: [
            {
                heading: "AWS ",
                img: TAB5_1,
            },
            {
                heading: "Google Cloud Platform",
                img: TAB5_2,
            },
            {
                heading: "Microsoft Azure",
                img: TAB5_3,
            },
            {
                heading: "Firebase",
                img: TAB5_4,
            },
            {
                heading: "Heroku",
                img: TAB5_5,
            },
            {
                heading: "DigitalOcean",
                img: TAB5_6,
            },
        ],
    },
    {
        title: "Testing & QA",
        content: [
            {
                heading: "XCTest",
                img: TAB6_1,
            },
            {
                heading: "TestFlight",
                img: TAB6_2,
            },
            {
                heading: "Appium",
                img: TAB6_3,
            },
            {
                heading: "Firebase Test Lab",
                img: TAB6_4,
            },
            {
                heading: "JUnit",
                img: TAB6_5,
            },
            {
                heading: "Selenium",
                img: TAB6_6,
            },
        ],
    }
];

export const IndustriesContent = {
    title: "One Codebase. Infinite Industries. Where Every Industry Finds Its Edge. ",
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
    title: (<>Let’s Change<br /> The World With Your</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s Create An <br />Amazing App Together!</>)
}

export const FaqsContent = {
    title: "Frequently Asked Questions",
}

export const FaqsList = [
    {
        title: "What makes Appsters a leading iOS app development company?",
        txt: "Appsters delivers scalable, high-performance iOS solutions by mastering native Apple frameworks, from SwiftUI to Core ML. We guarantee products align with Apple’s best practices while maximizing your business ROI."
    },
    {
        title: "How do your iOS application development services ensure top performance?",
        txt: `We enforce rigorous code profiling and benchmark analytics across all devices. Our process includes Metal API optimization and ARC best practices, ensuring seamless rendering and sub-second response times. `
    },
    {
        title: "Can I hire iOS developers for a dedicated project team?",
        txt: "Yes. You can hire iOS developers to form a fully managed, agile team. We provide experts in Swift, SwiftUI, and CI/CD pipeline integration, ready to align with your comprehensive product roadmap immediately."
    },
    {
        title: " What’s your approach to enterprise-level iOS mobile app development?",
        txt: "As a full-scale iOS mobile app development company, we specialize in secure microservices, complex custom API integrations, and strict HIPAA/GDPR compliance to guarantee secure, reliable global scaling."
    },
    {
        title: "Do you offer post-launch support and iOS app maintenance?",
        txt: "We provide SLA-backed maintenance with continuous crash monitoring, security patching, and rapid adaptation to all new iOS/iPadOS releases, ensuring long-term stability and top-tier performance."
    },
    {
        title: " How long does it take to develop an iOS app from scratch?",
        txt: "Following discovery, our iOS application development solutions deliver a production-ready MVP in a streamlined 10–16 week cycle. This covers design, development, testing, and App Store deployment efficiently."
    },
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
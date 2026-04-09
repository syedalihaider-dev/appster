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
const TAB1_4 = "/services/tech/tab1/04.webp";
const TAB2_1 = "/services/tech/tab2/01.webp";
const TAB2_2 = "/services/tech/tab2/02.webp";
const TAB2_3 = "/services/tech/tab2/03.webp";
const TAB2_4 = "/services/tech/tab2/04.webp";
const TAB2_5 = "/services/tech/tab2/04.webp";
const TAB3_1 = "/services/tech/tab3/01.webp";
const TAB3_2 = "/services/tech/tab3/02.webp";
const TAB3_3 = "/services/tech/tab3/03.webp";
const TAB3_4 = "/services/tech/tab3/04.webp";
const TAB3_5 = "/services/tech/tab3/04.webp";
const TAB4_1 = "/services/tech/tab4/01.webp";
const TAB4_2 = "/services/tech/tab4/02.webp";
const TAB4_3 = "/services/tech/tab4/03.webp";
const TAB4_4 = "/services/tech/tab4/04.webp";
const TAB4_5 = "/services/tech/tab4/04.webp";
const TAB5_1 = "/services/tech/tab5/01.webp";
const TAB5_2 = "/services/tech/tab5/02.webp";
const TAB5_3 = "/services/tech/tab5/03.webp";
const TAB5_4 = "/services/tech/tab5/04.webp";
const TAB5_5 = "/services/tech/tab5/04.webp";
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
    subtitle: "Intelligent Cross-Platform Apps",
    title: "A Cross-Platform App Development Company For Every Industry.",
    content: "As a cross-platform app development company, we engineer shared codebases that behave natively, integrate seamlessly, and scale intelligently. Through our cross-platform application development services, Appsters reimagines fragmented user touchpoints into cohesive, high-performing ecosystems using Flutter, React Native, and Xamarin. We focus on clean builds, reduced time-to-market, and product stability, ensuring every app delivers a unified and consistent experience across iOS, Android, and the web. ",
    BannerLogos: BannerLogos,
    BannerBg: BannerBg,
    fromtitle: "Let’s Discuss Your App Idea",
    fromtext: "Share your app business objectives with our experts and create your custom app."
}

export const CuttingedgeContent = {
    title: "Redefining Digital Possibilities Through Cross-Platform App Development Services.",
    text: "We deliver full-cycle cross-platform development services that bring design, performance, and adaptability together, enabling forward-thinking brands to achieve enterprise-grade results without compromising user experience, speed, or consistency across devices.",
    subtext: "Estimate Your App Project’s Cost Now!"
}

export const CuttingedgeList = [
    {
        title: (<>Cross-Platform <br />App Consulting</>),
        txt: (<>From technical feasibility to framework selection, our cross-platform app developers collaborate closely with product owners to set clear architecture goals and performance benchmarks. Every consultation drives an actionable development strategy that aligns with budget and long-term maintenance priorities. We evaluate security protocols, backend integrations, and deployment workflows to ensure your cross-platform foundation is future-ready.</>),
        links: "",
    },
    {
        title: (<>Cross-Platform <br /> UI/UX Design</>),
        txt: "User perception defines adoption. Our experts in UI/UX design for cross-platform apps create visually cohesive interfaces that adapt intelligently to both iOS and Android environments. We test responsiveness, usability, and micro-interactions to ensure every tap feels native and seamless. From wireframes to interactive prototypes, our design team focuses on cognitive flow and device-specific design nuances.",
        links: "",
    },
    {
        title: (<>Cross-Platform <br /> App Development</>),
        txt: (<>Appsters’ developers create cross-platform apps that merge native-level fluidity with shared efficiency. Using Flutter and React Native, we create codebases that are easily maintainable, optimized for speed, and ready for integration with third-party tools, cloud services, or IoT ecosystems. We emphasize modular architecture, reusable components, and CI/CD automation to streamline deployment cycles.</>),
        links: "",
    },
    {
        title: (<>Cross-Platform <br /> App QA & Testing</>),
        txt: "Our cross-platform app testing process ensures pixel-perfect consistency and zero functional drift across devices. From regression cycles to real-device automation, QA engineers simulate network conditions, gesture variations, and device specs for flawless user performance. Each build undergoes multi-tiered validation, including performance benchmarking, accessibility audits, and device emulation.",
        links: "",
    },
    {
        title: (<>Cross Platform Maintenance<br />& Support</>),
        txt: "Building is only step one. Through continuous cross-platform app maintenance, we monitor system uptime, runtime efficiency, and user analytics. Our teams proactively fix compatibility issues, manage OS updates, and ensure your product stays optimized as technology evolves. We also implement predictive monitoring and data-driven optimization cycles to reduce downtime and extend your app’s lifecycle.",
        links: "",
    },
    {
        title: (<>Cross-Platform <br />App Optimization</>),
        txt: (<>We specialize in optimizing cross-platform apps to improve performance bottlenecks and reduce resource consumption. Our developers fine-tune rendering engines, API layers, and caching logic to guarantee faster loading times and smoother animation cycles without increasing build complexity. By leveraging analytics-driven insights and runtime diagnostics, we continuously refine the code performance to maximize responsiveness.
        </>),
        links: "",
    },
]

export const caseStudiesContent = {
    title: "Cross-Platform Apps That Push Boundaries, Not Just Buttons.",
    text: (<>Every app we’ve built shows our commitment to code intelligence, usability, and scalability that match enterprise-grade standards. Unlike typical hybrid builds, our apps leverage shared architecture with native performance standards, achieving seamless UI consistency and responsive design across devices. </>),
}

export const caseStudiesList = [
    {
        title: "TexHealth+",
        description: "A healthcare management platform connecting patients, doctors, and labs through real-time cross-platform sync. It includes appointment scheduling, AI-driven symptom tracking, and secure teleconsultation features optimized for HIPAA compliance and low-latency data flow. TextHealth+ supports high data activity and integrates smoothly with existing medical systems.",
        sliderImages: [slider1],
    },
    {
        title: "RideoGo",
        description: "An urban mobility app offering multi-modal ride booking, live route optimization, and payment integration across devices. Its smart algorithm ensures fast response times and accurate driver dispatch under heavy network load. RideoGo connects commuters with real-time data, traffic patterns, and route flexibility, creating smoother travel experiences in busy urban environments.",
        sliderImages: [slider2],
    },
    {
        title: "Finlytic",
        description: "A financial analytics platform designed for enterprises. It delivers cross-device access, interactive dashboards, and predictive insights powered by machine learning. The system is built with strong encryption and secure role-based access. Finlytic helps organizations monitor transactions, forecast trends, and make smarter decisions through visualized, real-time financial data.",
        sliderImages: [slider3],
    },
    {
        title: "ShopEase",
        description: "An e-commerce app that blends AR shopping previews with personalized recommendations. The cross-platform framework ensures fast catalog rendering and synchronized shopping carts across iOS, Android, and the web. ShopEase enhances every customer interaction by tailoring product suggestions, creating immersive shopping experiences, and maintaining consistent performance across all devices.",
        sliderImages: [slider4],
    },
    {
        title: "EduSphere",
        description: "A digital learning platform that combines live classes, interactive quizzes, and downloadable lessons. Its smart caching system ensures smooth access, even with poor connectivity. EduSphere empowers educators and students alike with reliable communication tools, progress tracking, and a streamlined learning journey across devices.",
        sliderImages: [slider5],
    }
];

export const AppIdeaContent = {
    title: "Hire Cross-Platform App Developers & Launch Without Boundaries",
    text: "Your users don’t live on one platform; neither should your product. Partner with Appsters’ cross-platform app developers to create apps that feel native everywhere, scale efficiently, and evolve faster with unified development and shared infrastructure. ",
}

export const WhyChooseContent = {
    title: "3% Of The Top U.S. Engineering Talent. 100% Business Impact in Cross-Platform Application Development ",
    text: "Partner with the minds behind future-ready mobile ecosystems. Appsters combines strategy, technology, and user insight to deliver high-performing cross-platform app solutions. "
}

export const WhyChooseList1 = [
    {
        Icon: <WhyChooseIcon03 />,
        title: (<>Proven Expertise <br /> Across Frameworks</>),
        description: "As a cross-platform development company, we work with diverse frameworks like Flutter, React Native, and Xamarin to ensure the best possible alignment with your business model and performance goals. Our developers refine architecture, streamline workflows, and eliminate redundancy to maximize efficiency.  ",
    },
    {
        Icon: <WhyChooseIcon01 />,
        title: (<>Performance-First <br />Architecture </>),
        description: "Speed, stability, and responsiveness drive user retention. When we develop a cross-platform app, every layer, UI rendering, backend logic, data caching, and synchronization is tested against enterprise-grade benchmarks. We refine application workflows to minimize resource drain, reduce latency, and enhance user experience across every screen size. ",
    }
];

export const WhyChooseList2 = [
    {
        Icon: <WhyChooseIcon04 />,
        title: (<>Security and  <br /> Compliance at Core</>),
        description: "Security is engineered into the DNA of every product we build. Recognized as one of the best cross-platform app makers, Appsters prioritizes end-to-end protection, from secure coding protocols and tokenized APIs to rigorous penetration testing. Whether your app handles financial data, patient records, or enterprise communication, we guarantee full compliance with industry standards like HIPAA, GDPR, and PCI-DSS. ",
    },
    {
        Icon: <WhyChooseIcon02 />,
        title: (<>Future-Ready <br />Scalability & Support </>),
        description: "Great apps don’t end at launch; they evolve. As a long-term cross-platform app development agency, we provide predictive monitoring, proactive upgrades, and continuous optimization. Our lifecycle support ensures seamless adaptability to new OS releases, device standards, and market shifts. We future-proof your investment by keeping your product performing optimally, ready to handle greater traffic and integrations.",
    }
];

export const ProcessContent = {
    title: "Proven Cross-Platform Development Process That Focuses On Digital Disruption. ",
    text: (<>Delivering a powerful digital product requires a structured cross-platform development process grounded in precision, validation, and iteration. As a cross-platform development company, Appsters integrates user research, agile cycles, and DevOps automation into every cross-platform app development service, ensuring faster releases and stable performance across all platforms.</>)
}

export const ProcessTabs = [
    {
        title: "App Idea",
        content: {
            heading: "App Idea & Research",
            description: (<>Our strategists combine market intelligence, user segmentation, and competitive mapping to shape a data-backed foundation. Early validation ensures your concept meets both technical and business feasibility benchmarks before moving into execution. We identify success KPIs, platform dependencies, and future scalability needs from day one. Every idea is refined through structured brainstorming and validated assumptions to minimize risk before design begins.</>),
            imgSrc: IMG,
        },
    },
    {
        title: "Strategic Planning",
        content: {
            heading: "Strategic Planning & Consultation",
            description: (<>In this phase, our consultants translate your validated idea into a measurable roadmap. Using insights from our analysts, we define milestones, tech stack selection, and resourcing strategies to align business timelines with delivery goals. As a cross-platform app development firm, we emphasize transparency, risk mitigation, and predictable iteration planning to ensure seamless alignment across all stakeholders. Each decision, from stack choice to resource bandwidth, is guided by measurable business impact and long-term maintainability.</>),
            imgSrc: IMG,
        },
    },
    {
        title: "Prototyping",
        content: {
            heading: "Wireframing & Prototyping",
            description: "Before writing a single line of code, our design teams create high-fidelity wireframes and interactive prototypes. These blueprints allow stakeholders to visualize flows, user journeys, and interface logic. By integrating usability feedback early, our cross-platform app makers ensure the app’s architecture supports smooth handoffs between platforms and consistent UX delivery. Every prototype is tested against real-world interaction models to ensure both efficiency and user delight.",
            imgSrc: IMG,
        },
    },
    {
        title: "App Development",
        content: {
            heading: "App Development",
            description: "Once prototypes are approved, engineers build your cross-platform app using modern frameworks like Flutter, React Native, and Ionic. We emphasize maintainable architecture, reusable components, and continuous integration pipelines for faster development cycles. Our modular coding structure ensures effortless future updates without affecting runtime performance or platform consistency. Developers collaborate closely with QA and DevOps teams for synchronized, incremental, and fail-safe deployment readiness.",
            imgSrc: IMG,
        },
    },
    {
        title: "QA & Testing",
        content: {
            heading: "Expert QA & Testing",
            description: "Quality is a parallel process. Through multi-environment testing and device labs, we evaluate performance, accessibility, and compatibility across hardware profiles. From functional and regression testing to automation scripting, our QA specialists guarantee every release meets strict performance benchmarks for a seamless experience across platforms. Every bug, lag, or performance bottleneck is resolved through a zero-defect release approach, ensuring flawless functionality post-launch.",
            imgSrc: IMG,
        },
    },
    {
        title: "App Launch",
        content: {
            heading: "App Launch",
            description: "Appsters coordinates every phase of go-live planning with precision. We prepare release builds, handle platform submissions, and validate app store compliance for smooth approvals. Each app launch is supported by real-time monitoring and rollback strategies that ensure uninterrupted transitions from staging to production with zero downtime or data disruption. Our team also manages metadata, app descriptions, and visual assets to boost discoverability and early adoption.",
            imgSrc: IMG,
        },
    },
    {
        title: "Deployment",
        content: {
            heading: "Deployment",
            description: (<>We ensure every deployment meets enterprise-level delivery standards. Continuous monitoring and load testing precede every production push to eliminate latency issues. As part of our cross-platform app development service, we manage containerization, cloud configurations, and performance metrics, ensuring your app remains robust, traceable, and ready for scale. Each deployment includes environment isolation, rollback contingencies, and version tracking for complete operational transparency.</>),
            imgSrc: IMG,
        },
    },
];

export const TechnologiesContent = {
    title: "The Cross-Platform App Development Agency Powering Apps That Perform Everywhere.",
    text: (<><p>At Appsters, we push beyond conventional frameworks to engineer cross-platform apps that perform, adapt, and evolve. Unlike most cross-platform app development companies, our engineering teams merge innovation with reliability, building unified codebases in Flutter, React Native, and Xamarin that function natively across devices. Through intelligent automation and robust architecture, we build adaptable cross-platform apps powered by clean architecture, strong security layers, and intelligent automation, making our cross-platform app development services faster, more reliable, and future-ready.</p>
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
        txt: "Partnering with Appsters transformed how we manage patient data. Their industry-relevant expertise in architecture and compliance created a seamless, HIPAA-aligned patient management platform. Among all cross-platform app development companies, Appsters delivered the rare combination of speed, technical expertise, and post-launch scalability that made a measurable impact on patient care.",
        name: "Ava Linton,",
        position: "VP of Digital Health",
        img: Joseph,
    },
    {
        txt: "Our collaboration with Appsters revolutionized our product ecosystem. They implemented banking-grade encryption and built adaptive UI frameworks that gave users a consistent experience across iOS and Android. If you want cross-platform app development services that are technically sound, strategically led, and future-ready, Appsters is the only partner that delivers precision at every level. ",
        name: "Connor Hayes,",
        position: " Head of Mobile Strategy",
        img: RyanJaden,
    },
    {
        txt: "The Appsters team brought our EdTech platform to life. They designed responsive cross-platform apps that deliver equal performance in classrooms and remote learning environments. Their UI precision, offline accessibility, and seamless user transitions have helped us improve student engagement by 40%.  The app experience for both teachers and students has been nothing short of exceptional.",
        name: "Nia Cortez,",
        position: " Co-Founder & COO",
        img: KayleeSlone,
    }
    ,
    {
        txt: "Appsters took our fragmented e-commerce experience and transformed it into a unified retail engine. As a cross-platform app development company, they built lightning-fast mobile storefronts and ensured consistent UX across devices. Their agile collaboration and constant optimization mindset made us rethink what’s possible in digital retail architecture. ",
        name: "Dylan Mercer,",
        position: "Director of Product Innovation",
        img: MauryoJones,
    },
    {
        txt: "The logistics world demands real-time accuracy and location guidelines. Appsters delivered exactly that. They helped us hire cross-platform app developers who engineered a multi-platform logistics dashboard integrating live GPS feeds, push analytics, and predictive tracking. Their proactive support and understanding of enterprise-scale infrastructure truly set them apart in the mobility sector. ",
        name: "Janet Monroe",
        position: "Chief Product Officer ",
        img: KateBullock,
    }
]

export const RisksContent = {
    title: (<>Launch Your <Image src={RisksIMG01} alt="Bitswits Services" width={228} height={85} /> Cross-Platform App with a  Strategic <Image src={RisksIMG02} alt="Bitswits Services" width={228} height={85} /> MVP Approach!</>),
    text: "Start Your MVP Journey Today!"
}

export const OffersContent = {
    title: "Businesses Choose Our Cross-Platform App Development for Scalable Mobile Growth.",
    text: "Choosing Custom Cross-Platform Application Development is more than a technical preference; it’s a strategic move toward faster deployment, broader reach, and consistent user experience. Modern enterprises trust this approach to develop cross-platform apps that adapt intelligently to evolving platforms, ensuring agility, performance, and sustained competitive advantage.",
}

export const OffersTabs = [
    {
        title: "Single Code Base",
        content: {
            heading: "Single Code Base",
            description: "With one unified code repository, businesses can build a cross-platform app that operates seamlessly across iOS and Android without duplicating effort. This approach eliminates repetitive development cycles, simplifies quality assurance, and accelerates go-to-market time, allowing enterprises to innovate faster while maintaining platform parity and consistent brand identity across all digital environments.",
        },
    },
    {
        title: "Save Time & Money",
        content: {
            heading: "Save Time & Money",
            description: "Leveraging shared frameworks dramatically reduces build costs and time-to-market. Through cross-platform app development services, Appsters enables clients to maximize ROI by using a single development workflow. This efficiency not only streamlines project management but also allows businesses to reallocate resources toward optimization, integrations, and long-term scalability rather than redundant native builds.",
        },
    },
    {
        title: "Boosted Market Exposure",
        content: {
            heading: "Boosted Market Exposure",
            description: "When you launch simultaneously on multiple operating systems, your product instantly reaches a wider audience. Our certified cross-platform app developers use advanced frameworks to ensure compatibility, responsiveness, and stable performance across diverse devices, helping brands capture user attention in competitive markets and establish omnipresence without compromising on functionality or aesthetics.",
        },
    },
    {
        title: "Consistent App Experience",
        content: {
            heading: "Consistent App Experience",
            description: "A unified experience is the foundation of user retention. Through cross-platform app development services, Appsters ensures your interface, features, and navigation remain visually and functionally consistent across all platforms. From design alignment to backend synchronization, every interaction is optimized for familiarity and fluidity, enhancing trust and engagement with every session.",
        },
    },
    {
        title: "Easy Maintenance & Updates",
        content: {
            heading: "Easy Maintenance & Updates",
            description: "Simplified code structures enable effortless maintenance and instant rollouts. With Custom Cross-Platform Application Development, Appsters ensures that you can deploy security patches, feature updates, or UI enhancements simultaneously across systems, minimizing downtime, reducing risk, and ensuring ongoing product relevance without rebuilding separate native environments for every version release.",
        },
    },
];

export const FuelingContent = {
    title: "Best Cross-Platform App Development Technologies",
    text: "Choosing the right technology stack for cross-platform app development is pivotal. Here’s a deeper dive into the standout options, each offering unique strengths to align with diverse project requirements.",
    subtitle: "Create Versatile Apps with Cross-Platform Development for Greater Flexibility!",
    subtext: "Our expert team builds apps that work seamlessly on iOS, Android, and more.",
    FuelingImg: FuelingImg
}

export const FuelingList = [
    {
        title: "Flutter",
        text: "Flutter’s single codebase and Dart language deliver native-like performance across all platforms. Its rich widget library ensures visually stunning and consistent applications, making it perfect for apps that require high performance and sophisticated UI."
    },
    {
        title: "React Native",
        text: "React Native uses JavaScript to build apps with a native look and feel. Its component-based architecture speeds up development and allows for code reuse across platforms, ideal for projects needing quick deployment and a polished user experience."
    },
    {
        title: "Xamarin",
        text: "Xamarin, built on C# and .NET, provides a robust solution for apps needing deep integration with Microsoft’s ecosystem. It offers native performance on iOS and Android from a shared codebase, suitable for enterprise-level applications with extensive functionality."
    },
    {
        title: "Ionic",
        text: "Ionic leverages web technologies like HTML, CSS, and JavaScript for fast app development. It’s great for creating hybrid apps quickly with pre-designed UI components, ideal for MVPs or apps that prioritize speed over advanced performance."
    },
    {
        title: "PhoneGap",
        text: "PhoneGap packages web apps as native apps, providing access to native device features through plugins. It’s best for simple applications or prototypes where rapid development and deployment are more critical than high performance."
    },
];

export const CtaEstimatedContent = {
    subtitle: "Launch Everywhere With Appsters.",
    title: "Cross-Platform Innovation Accelerated",
    text: (<>At Appsters, we combine technical rigor with creative intelligence to transform business challenges into scalable digital products. Our cross-platform app developers build performance-driven applications that deliver native-like fluidity, enterprise security, and adaptable architecture. </>),
    CtaEstimatedImg: CtaEstimatedImg
}

export const TechStackContent = {
    title: "Our Tech Stack for Cross-Platform App Development",
    text: "At BitsWits, we use a refined tech stack to deliver high-performing cross-platform apps. ",
}

export const TechStackTabs = [
    {
        title: "Frontend",
        content: [
            {
                heading: "Flutter",
                img: TAB1_1,
            },
            {
                heading: "React Native",
                img: TAB1_2,
            },
            {
                heading: "Xamarin",
                img: TAB1_3,
            },
            {
                heading: "Ionic",
                img: TAB1_4,
            }
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
                img: TAB2_2,
            },
            {
                heading: "Ruby on Rails",
                img: TAB2_3,
            },
            {
                heading: "Firebase",
                img: TAB2_4,
            },
            {
                heading: ".NET Core",
                img: TAB2_5,
            }
        ],
    },
    {
        title: "Frameworks",
        content: [
            {
                heading: "Flutter",
                img: TAB3_1,
            },
            {
                heading: "React Native",
                img: TAB3_2,
            },
            {
                heading: "Xamarin",
                img: TAB3_3,
            },
            {
                heading: "Ionic",
                img: TAB3_4,
            },
            {
                heading: "Kotlin Multiplatform",
                img: TAB3_5,
            }
        ],
    },
    {
        title: "Database",
        content: [
            {
                heading: "Firebase Realtime Database",
                img: TAB4_1,
            },
            {
                heading: "SQLite",
                img: TAB4_2,
            },
            {
                heading: "PostgreSQL",
                img: TAB4_3,
            },
            {
                heading: "MySQL",
                img: TAB4_4,
            },
            {
                heading: "Realm",
                img: TAB4_5,
            }
        ],
    },
    {
        title: "Cloud Services",
        content: [
            {
                heading: "AWS",
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
            }
        ],
    },
    {
        title: "Testing & QA",
        content: [
            {
                heading: "Appium",
                img: TAB6_1,
            },
            {
                heading: "Firebase Test Lab",
                img: TAB6_2,
            },
            {
                heading: "XCTest",
                img: TAB6_3,
            },
            {
                heading: "Selenium",
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
        <br /> Are You Ready to Launch?</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s Create An <br /> Amazing App Together!</>)
}

export const FaqsContent = {
    title: "Frequently Asked Questions",
}

export const FaqsList = [
    {
        title: " What makes cross-platform development a smart choice for enterprise-grade apps?",
        txt: "Enterprises choose cross-platform application development services because they accelerate deployment without sacrificing performance or UI integrity. Appsters builds shared codebases that ensure native-like responsiveness, minimal latency, and streamlined updates across Android, iOS, and web. This unified approach optimizes cost, scalability, and version management, making it ideal for long-term digital transformation initiatives."
    },
    {
        title: "How does Appsters ensure performance parity with native applications?",
        txt: "As a seasoned cross-platform app development company, Appsters uses advanced frameworks like Flutter and React Native combined with GPU-level rendering optimization and custom API orchestration. We test under real device conditions, ensuring consistent FPS, fast loading, and zero UI drift, so the app behaves as fluidly as a native build on all platforms."
    },
    {
        title: "Can I hire dedicated teams for ongoing cross-platform projects?",
        txt: "Absolutely. You can hire cross-platform developers from Appsters who specialize in full-cycle delivery, from initial architecture and framework selection to post-launch optimization. Our developers integrate directly into your team’s workflow, using agile sprints, code versioning, and CI/CD pipelines to maintain high code quality and accelerate continuous releases."
    },
    {
        title: "How secure are cross-platform applications built by Appsters?",
        txt: "Security is embedded into every layer of our cross-platform app development services. We follow OWASP standards, employ AES-256 encryption, SSL pinning, and secure authentication flows to safeguard user data. Each build undergoes threat modeling and penetration testing to ensure compliance with enterprise security policies and regulatory frameworks."
    },
    {
        title: "How does Appsters handle updates and maintenance post-deployment?",
        txt: "As a cross-platform mobile app development company, Appsters maintains an active lifecycle approach. We continuously monitor performance logs, third-party SDK updates, and OS-level changes. Our adaptive maintenance framework ensures seamless patch deployment, dependency upgrades, and performance optimization, keeping your app compliant, stable, and future-ready across evolving ecosystems."
    },
    {
        title: "What industries can benefit most from cross-platform applications?",
        txt: "Our cross-platform application development company delivers adaptable solutions across fintech, healthcare, logistics, retail, and education. These industries gain the most from shared architecture, real-time synchronization, and device-agnostic accessibility. Appsters tailors each deployment with industry-specific compliance, analytics integration, and scalability planning to meet both user and business demands efficiently."
    }
];

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





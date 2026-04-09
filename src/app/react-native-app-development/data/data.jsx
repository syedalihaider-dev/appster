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
const TAB2_1 = "/services/tech/tab2/01.webp";
const TAB2_2 = "/services/tech/tab2/02.webp";
const TAB2_3 = "/services/tech/tab2/03.webp";
const TAB2_4 = "/services/tech/tab2/04.webp";
const TAB3_1 = "/services/tech/tab3/01.webp";
const TAB3_2 = "/services/tech/tab3/02.webp";
const TAB3_3 = "/services/tech/tab3/03.webp";
const TAB3_4 = "/services/tech/tab3/02.webp";
const TAB3_5 = "/services/tech/tab3/03.webp";
const TAB4_1 = "/services/tech/tab4/01.webp";
const TAB5_1 = "/services/tech/tab5/01.webp";
const TAB5_2 = "/services/tech/tab5/02.webp";
const TAB5_3 = "/services/tech/tab5/03.webp";
const TAB6_1 = "/services/tech/tab6/01.webp";
const TAB6_2 = "/services/tech/tab6/02.webp";
const TAB6_3 = "/services/tech/tab6/03.webp";

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
    subtitle: "React Native App Development in the USA",
    title: "Future-Ready React Native App Development Company Driving Growth Ecosystems.",
    content: "React Native bridges speed and stability to deliver apps that run flawlessly across platforms. Appsters’ react native app development services focus on reducing complexity, boosting performance, and creating native app solutions that adapt to enterprise demands, user expectations, and tomorrow’s innovations without compromising security or reliability while constantly pushing the norm.",
    BannerLogos: BannerLogos,
    BannerBg: BannerBg,
    fromtitle: "Let’s Discuss Your App Idea",
    fromtext: "Share your app business objectives with our experts and create your custom app."
}

export const CuttingedgeContent = {
    title: "React Native Services Designed for Complex Business Demands & Disruptive Solutions.",
    text: "Our React Native Services are engineered for complex business demands and disruptive solutions. We specialize in engineering multi-platform applications that merge native-level performance with single-codebase efficiency, guaranteeing maximum market reach.",
    subtext: "Estimate Your App Project’s Cost Now!"
}

export const CuttingedgeList = [
    {
        title: (<>React Native App <br />Consultation  </>),
        txt: "Every successful app begins with clarity; that’s why our react native app developers provide in-depth consulting to evaluate architecture options, optimize for performance, and ensure your product is future-ready. From MVP validation to enterprise rollouts, every consultation focuses on reducing risk and increasing clarity in technical decision-making.",
        links: "",
    },
    {
        title: (<>React Native <br />App Development</>),
        txt: (<>As a native app development company, we create React Native apps that deliver native-quality performance without inflating timelines or costs. Our teams focus on modular architecture, optimized codebases, and integration strategies that support rapid deployment, robust functionality, and measurable ROI across multiple business environments.</>),
        links: "",
    },
    {
        title: (<>UI/UX Design For  <br />Native Apps </>),
        txt: (<>User adoption depends on more than just features; it’s about experiences too. Our react native app designers create experiences that combine intuitive navigation, responsive interactions, consistent cross-platform performance, and pixel-perfect interfaces tailored to your users’ behavior. From wireframes to interactive prototypes, every design decision is backed by user insights and tested to achieve frictionless engagement.</>),
        links: "",
    },
    {
        title: (<>React Native  <br />App Migration</>),
        txt: "Outdated technology drains time and resources. Through react native development services, we migrate existing applications into modern, stable React Native builds with minimal disruption. Our approach reduces downtime, improves maintainability, and aligns your product with current performance, security, and compliance standards, ensuring your app performs better than before while staying future-proof.",
        links: "",
    },
    {
        title: (<>React Native <br />Staff Augmentation</>),
        txt: "When timelines demand extra velocity, our network of experts supports enterprises with staff augmentation, ensuring access to senior engineers, flexible engagement models, and on-demand expertise. Unlike many React app development companies, we offer dedicated React Native engineers to scale your team. ",
        links: "",
    },
    {
        title: (<>React App  <br />Support & Maintenance</>),
        txt: "Reliability doesn’t end at launch. With Google-certified React app developers, our support teams deliver proactive monitoring, bug fixes, feature updates, and compliance checks. The focus is simple: keep your apps running at peak performance, safeguard user trust, and extend the lifecycle of your investment.",
        links: "",
    }
]

export const caseStudiesContent = {
    title: "A Portfolio That Benchmarks Industry Standards",
    text: (<>As a react native mobile app development company, our portfolio demonstrates more than cross-platform parity. It shows applications engineered to sustain millions of active users, enterprise tools that integrate with legacy systems, and consumer platforms designed for rapid adoption.</>),
}

export const caseStudiesList = [
    {
        title: "ThriveHR",
        description: "A next-generation talent management platform built for large enterprises. This solution uses React Native app development to provide a unified experience for onboarding, payroll, and benefits across mobile devices. ThriveHR features a custom native module for document signing and integrates securely with SAP and Oracle via GraphQL APIs, proving that complex enterprise tools can feel like simple native apps.",
        sliderImages: [slider1],
    },
    {
        title: "Streamline ",
        description: "An end-to-end fleet tracking and route optimization tool for logistics firms. Built with React Native, the app leverages native APIs (CoreLocation and Android Geolocation) for sub-meter accuracy in real-time tracking and delivery confirmation. Streamline maintains high performance with an offline-first architecture, ensuring drivers have uninterrupted access even in low-connectivity zones.",
        sliderImages: [slider2],
    },
    {
        title: "AuraHome",
        description: "A unified dashboard for managing smart home devices across multiple protocols (Zigbee, Matter). Our React Native app development team prioritized low latency, using native threading to ensure instant device response times. AuraHome securely integrates with major vendor APIs and utilizes local processing to ensure that security and automation logic remain fast and private.",
        sliderImages: [slider3],
    },
    {
        title: "Mr.CodeVerse",
        description: "A highly interactive coding bootcamp and mentorship platform. This React Native solution delivers live video streams, code playgrounds, and gamified progress tracking. Mr. CodeVerse uses a custom WebRTC integration layer to minimize video lag and provides a truly native app feel on both iOS and Android, making complex learning accessible and engaging on mobile.",
        sliderImages: [slider4],
    },
    {
        title: "HarvestPro",
        description: "A field-data collection and crop health monitoring tool for farmers and agronomists. We chose React Native for rapid deployment across rugged, low-bandwidth environments. HarvestPro captures high-resolution imagery and uses native device storage for offline work, syncing back to the cloud only when connectivity is available, supporting mission-critical field operations.",
        sliderImages: [slider5],
    }
];

export const AppIdeaContent = {
    title: "Build, Launch, & Win With React Native App Development.",
    text: "The era of choosing between platform reach and native quality is over. Build, launch, and win with React Native App Development by leveraging our expertise in the framework. We inject native-grade performance and security into a single codebase, drastically slashing development timelines and budget overruns. ",
}

export const WhyChooseContent = {
    title: "Why Appsters Is the React Native App Development Agency Enterprises Trust?",
    text: "At Appsters, our react native development firm combines technical expertise and domain knowledge to deliver measurable outcomes. With 1000+ successful projects, we redefine what it means to partner with a true innovation-driven native app development company."
}

export const WhyChooseList1 = [
    {
        Icon: <WhyChooseIcon03 />,
        title: (<>Certified Developers  <br />& Specialists </>),
        description: "Our team includes certified React native application developers skilled in building apps that solve complex problems while ensuring exceptional user experience, security, and compliance with modern architecture standards. Every project is led by professionals capable of solving technical challenges while keeping pace with business priorities, regulatory frameworks, and user expectations.",
    },
    {
        Icon: <WhyChooseIcon01 />,
        title: (<>Custom-Built  <br />React Apps </>),
        description: "We create custom React apps engineered for specific workflows, industry compliance, and future expansion. From security frameworks to unique feature integrations, every app is architected for operational longevity. Our builds emphasize adaptability, ensuring that as your business evolves, the app can grow without performance degradation.",
    }
];

export const WhyChooseList2 = [
    {
        Icon: <WhyChooseIcon04 />,
        title: (<>Faster  <br />Time-To-Market </>),
        description: "Our react native development firm leverages agile methodologies, reusable code components, and optimized workflows to accelerate delivery timelines. This approach enables enterprises to deploy apps faster, respond to market changes immediately, and achieve ROI earlier, while still delivering the robust quality needed for enterprise-grade systems.",
    },
    {
        Icon: <WhyChooseIcon02 />,
        title: (<>Future-Ready <br />Applications</>),
        description: "We design custom React apps that are not just functional today but adaptable for tomorrow’s technologies. With modular builds, cloud integrations, and long-term support strategies, enterprises receive apps that evolve alongside business operations, user demand, and market shifts, avoiding costly rebuilds while maintaining enterprise-grade reliability and consistent user experiences.",
    }
];

export const ProcessContent = {
    title: "React Native App Development Process Reimagined for Speed, Scale, & Powerful Reliability.",
    text: (<>Our react native app development process is designed to serve CTOs, CIOs, and digital leaders who demand results. From ideation to live deployment, Appsters delivers React Native mobile app development services that minimize risk, accelerate adoption, and create a measurable impact. We not only develop apps using React, but we also build resilient, high-performance ecosystems ready for enterprise-scale deployment.
    </>)
}

export const ProcessTabs = [
    {
        title: "App Idea",
        content: {
            heading: "App Idea & Research",
            description:
                <>Every project begins with business intelligence. We analyze your idea’s viability, audience demand, market potential, competitive landscape, and risk factors, ensuring your React Native mobile applications are positioned for market relevance and sustainable growth. Our experts ensure your concept is backed by solid research and aligned with user expectations, setting the foundation to develop apps on React that succeed.</>,
            imgSrc: IMG,
        },
    },
    {
        title: "Strategic Planning",
        content: {
            heading: "Strategic Planning & Consultation",
            description:
                <>Every app starts with a roadmap. Through our React Native mobile app development services, we define goals, establish milestones, and design strategies that reduce risks and accelerate development cycles for enterprise-ready applications. We align roadmaps with KPIs, budget efficiency, and market timing, creating a plan that leadership can rely on for delivery accuracy and risk reduction.</>,
            imgSrc: IMG,

        },
    },
    {
        title: "Wireframing",
        content: {
            heading: "Wireframing & Prototyping",
            description:
                "Before writing a single line of code, our designers create prototypes and wireframes that visualize user journeys, test flows, and lock usability. This phase ensures that React Native mobile applications are intuitive, user-focused, and strategically aligned with business objectives. We guarantee that design concepts are validated with users before a single development sprint begins.",
            imgSrc: IMG,

        },
    },
    {
        title: "Development",
        content: {
            heading: "App Development",
            description:
                "Our engineers code with performance in mind. They write clean, modular code optimized for performance. As a leading provider of React Native app development in the USA, we combine cross-platform compatibility with native-like speed, ensuring apps that users love and businesses rely on. We guarantee efficient code that maximizes long-term adaptability and minimizes future maintenance costs.",
            imgSrc: IMG,

        },
    },
    {
        title: "Testing",
        content: {
            heading: "Expert QA & Testing",
            description:
                <>Every release is solidified by multi-layer testing. Every build undergoes extensive QA cycles, including performance, security, and usability testing. With React Native mobile app development services, we deliver apps that meet enterprise-grade reliability standards, ensuring your application’s stability across every device and network condition.</>,
            imgSrc: IMG,

        },
    },
    {
        title: "Testing",
        content: {
            heading: "Testing",
            description:
                "The testing phase involves rigorous testing to make your React Native app robust and reliable. This includes quality assurance and infrastructure testing to identify and resolve potential issues. Each iteration is thoroughly documented, allowing us to refine the app and deliver a smooth user experience before the final release.",
            imgSrc: IMG,

        },
    },
    {
        title: "App Launch",
        content: {
            heading: "App Launch",
            description:
                <>From app store guidelines to seamless rollouts, we manage every aspect of launch. Our expertise in React Native mobile applications ensures smooth submissions and approval processes across Android and iOS platforms. We manage every technical detail to optimize your organic visibility and adoption rate.</>,
            imgSrc: IMG,

        },
    },
];

export const TechnologiesContent = {
    title: "Utilizing Smarter Frameworks & Adaptive Stacks to Accelerate Growth | React App Development Company",
    text: (<><p>Every serious product needs a backbone built on strong tech decisions. Our react native app development solutions are engineered with React Native, Redux, TypeScript, GraphQL, Firebase, and CI/CD pipelines to power products that last. Through a custom react native app development service, we align architecture with long-term growth, standing apart from conventional React app development companies with precision engineering and future-ready builds.</p>
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
        txt: "In healthcare, reliability and compliance are non-negotiable. Appsters approached our project with an unmatched level of diligence. From HIPAA-compliant integrations to data encryption, every detail was handled with precision. Their role as a React app development company gave us confidence that our patient-facing systems were secure, scalable, and fully aligned with regulatory demands.",
        name: "Nani’ Gomez,",
        position: " CTO",
        img: Joseph,
    },
    {
        txt: "E-commerce requires both agility and resilience. Appsters built a React Native platform that supported dynamic catalog updates, optimized checkout flow, and reduced page load times. The results were a noticeable boost in conversions and a seamless customer experience. Their command over react native app development solutions clearly distinguishes them from the crowd.",
        name: "Chris Palmer,",
        position: " VP of Technology",
        img: RyanJaden,
    },
    {
        txt: "When developing financial products, precision and trust are everything. Appsters designed and deployed a React-powered platform that supported real-time transactions, multi-region compliance, and user-friendly dashboards. Their custom react native app development service was built on secure foundations while staying flexible for future features, which is why our user engagement exceeded forecasts. ",
        name: "Jennifer Clark,",
        position: "Head of Product",
        img: KayleeSlone,
    }
    ,
    {
        txt: "Partnering with Appsters transformed how our logistics systems perform. Their team built intuitive features, streamlined workflows, integrated real-time tracking, and enhanced security protocols across our supply chain. As a COO in transportation, I appreciate results that directly impact margins, and their React app development services gave us both performance gains and measurable ROI.",
        name: "Daniel Whitmore,",
        position: "COO",
        img: MauryoJones,
    },
    {
        txt: "Our SaaS business needed a technology partner that could think strategically and execute flawlessly. Appsters provided architecture, development, and performance monitoring with remarkable consistency. Among React app development companies, they stand out for blending technical EXPERTISE with a partnership-first mindset. They delivered not only software but confidence to scale without compromise. ",
        name: "Mark Rivers, ",
        position: " CEO",
        img: KateBullock,
    }
]

export const RisksContent = {
    title: (<>Cut Development<Image src={RisksIMG01} alt="Bitswits Services" width={228} height={85} /> Costs by <Image src={RisksIMG02} alt="Bitswits Services" width={228} height={85} /> 50% with React Native!</>),
    text: "Achieve faster, more efficient app creation with our expert team."
}

export const OffersContent = {
    title: "Cross-Platform Without Compromise – Why React Native Wins The App Game?",
    text: (<>When performance, cost, and scalability intersect, React Native emerges as the smartest framework. Our custom React app development service combines enterprise-grade engineering with a consistent user experience, enabling companies to scale faster without sacrificing control, security, or platform precision.</>),
}

export const OffersTabs = [

    {
        title: "Cross Platform Excellence",
        content: {
            heading: "Cross Platform Excellence",
            description:
                "React Native eliminates duplication by letting you ship on both iOS and Android with a single codebase. Backed by leading React Native app developers, your cross-platform products maintain uniform design and usability while dramatically reducing engineering hours, QA bottlenecks, and fragmented user experiences across devices.",
        },
    },

    {
        title: "Rapid Market Launch",
        content: {
            heading: "Rapid Market Launch",
            description:
                "Time-to-market often determines market share. React Native accelerates release cycles by leveraging shared components, hot reloading, and pre-built libraries. With native application development as the foundation, businesses launch MVPs quickly, gather user feedback faster, and scale features with agility, ensuring they stay ahead of evolving customer needs.",
        },
    },

    {
        title: "Budget-Friendly Development",
        content: {
            heading: "Budget-Friendly Development",
            description:
                "Why maintain two codebases when one delivers twice the impact? React Native provides cost efficiency without compromising performance. Our custom React app development service streamlines development hours, minimizes maintenance costs, and helps organizations achieve enterprise-grade results within optimized budgets, making every dollar work harder for product growth.",

        },
    },
    {
        title: "Native-Like Performance",
        content: {
            heading: "Native-Like Performance",
            description:
                "Modern users expect apps to feel seamless. React Native bridges the gap by delivering smooth interactions, responsive animations, and device-level integrations for native mobile apps. Performance benchmarks rival pure native frameworks, proving that businesses can achieve scalability and cost savings without compromising app speed or end-user experience.",

        },
    },
    {
        title: "Best For Updates & Maintenance",
        content: {
            heading: "Best For Updates & Maintenance",
            description:
                "Maintaining two codebases means double the risk. With React Native, updates roll out simultaneously across platforms, reducing complexity. Our leading React Native app developers ensure every iteration, whether bug fixes or new features, is faster, secure, and easier to scale across growing user bases without platform-specific delays.",

        },
    },
];

export const FuelingContent = {
    title: "Technologies We Use In Combination with React Native",
    text: "We combine dynamic technologies with React Native to build high-impact, cross-platform mobile applications that operate seamlessly across all devices, enhancing performance and user experience.",
    subtitle: "Cut Costs, Not Corners, with React Native Development!",
    subtext: "Streamline your app development process and reduce costs with a single codebase approach.",
    FuelingImg: FuelingImg
}

export const FuelingList = [
    {
        title: "React Native + Redux",
        text: "Combining React Native with Redux, we create high-performing apps with centralized state management. Redux helps us track changes efficiently, ensuring consistency and reliability across your app’s user experience."
    },
    {
        title: "React Native + Firebase",
        text: "Integrating React Native with Firebase, we build high-quality, scalable apps with robust cloud infrastructure. Firebase provides secure backend services and data security, ensuring reliable performance and seamless user experiences."
    },
    {
        title: "React Native + TypeScript",
        text: "We use React Native with TypeScript to develop scalable, maintainable, and high-performance apps. TypeScript enhances code quality and robustness, making our applications more reliable and easier to manage."
    },
    {
        title: "React Native + Expo",
        text: "Combining React Native with Expo streamlines app development with pre-configured tools. This integration simplifies updates, supports in-app purchases, and offers built-in app analytics, improving both the development process and app functionality."
    },
    {
        title: "React Native + MongoDB",
        text: "React Native combined with MongoDB provides reliable data management for cross-platform apps. MongoDB’s NoSQL database offers a flexible framework, enhancing scalability and performance while adapting to diverse application requirements."
    }
];

export const CtaEstimatedContent = {
    subtitle: "Go Native With The #1 React Native App Development Agency.",
    title: "Enterprise-Ready React Native Apps",
    text: (<>At scale, apps succeed when engineering rigor meets business strategy. That’s the philosophy driving our React Native application development practice. From seamless front-end execution to cloud-native backends, Appsters aligns every build with enterprise-grade expectations.</>),
    CtaEstimatedImg: CtaEstimatedImg
}

export const TechStackContent = {
    title: "Our Tech Stack For React Native App Development",
    text: "We use cutting-edge tech to build resilient React Native apps for our clients!",
}

export const TechStackTabs = [
    {
        title: "Core Technologies",
        content: [
            {
                heading: "React",
                img: TAB1_1,
            },
            {
                heading: "JavaScript",
                img: TAB1_2,
            },
            {
                heading: "TypeScript",
                img: TAB1_3,
            }
        ],
    },
    {
        title: "State Management",
        content: [
            {
                heading: "Redux",
                img: TAB2_1,
            },
            {
                heading: "Redux Persist",
                img: TAB2_2,
            },
            {
                heading: "Reduxsauce",
                img: TAB2_3,
            },
            {
                heading: "Reactotron",
                img: TAB2_4,
            }
        ],
    },
    {
        title: "UI/UX Design",
        content: [
            {
                heading: "NativeBase",
                img: TAB3_1,
            },
            {
                heading: "React Native Elements",
                img: TAB3_2,
            },
            {
                heading: "UI Kitten",
                img: TAB3_3,
            },
            {
                heading: "Bootstrap",
                img: TAB3_4,
            },
            {
                heading: "Ignite UI",
                img: TAB3_5,
            }
        ],
    },
    {
        title: "Navigation",
        content: [
            {
                heading: "React Navigation",
                img: TAB4_1,
            }
        ],
    },
    {
        title: "Backend Integration",
        content: [
            {
                heading: "RestAPI",
                img: TAB5_1,
            },
            {
                heading: "GraphQL",
                img: TAB5_2,
            },
            {
                heading: "Apollo GraphQL",
                img: TAB5_3,
            }
        ],
    },
    {
        title: "Testing",
        content: [
            {
                heading: "Jest",
                img: TAB6_1,
            },
            {
                heading: "Enzyme",
                img: TAB6_2,
            },
            {
                heading: "Detox",
                img: TAB6_3,
            }
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
    title: (<>The Market Never Waits. <br /> Are You Ready to Launch?</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s Create An Amazing <br />  App Together!</>)
}

export const FaqsContent = {
    title: "Frequently Asked Questions (FAQs)",
}

export const FaqsList = [
    {
        title: " How do Appsters optimize performance in React Native app development services?",
        txt: "Our React Native app development services use the Hermes engine, background threading, and GPU-accelerated rendering to deliver low-latency, high-performance apps that handle complex animations and heavy real-time workloads."
    },
    {
        title: " Does your React Native app development company use modular architecture for scalability?",
        txt: `Yes. As a React Native app development company, we build modular, service-oriented architectures separating UI, logic, and APIs for faster rollouts, secure upgrades, and scalable enterprise-level performance.`
    },
    {
        title: " Why should enterprises trust Appsters as a React Native mobile app development company for security?",
        txt: "Our React Native mobile app development company ensures encryption, secure storage, and certificate pinning while adhering to HIPAA, SOC2, and GDPR compliance standards to protect user data and app integrity."
    },
    {
        title: " How do your React Native app developers in the USA accelerate delivery timelines?",
        txt: "Our React Native app developers in the USA use CI/CD pipelines, automated testing, and real-time monitoring tools to shorten release cycles and boost delivery efficiency."
    },
    {
        title: "Can Appsters deliver custom React Native app development services in the USA?",
        txt: "Yes. Our React Native app developers in the USA build region-compliant, high-performance apps through tailored React Native app development services aligned with local scalability and user experience goals."
    },
    {
        title: "What kind of projects do you handle under React Native application development services?",
        txt: "Our React Native application development services cover fintech, healthcare, SaaS, and e-commerce platforms, each optimized for real-world performance, third-party integration, and sustainable scaling."
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






















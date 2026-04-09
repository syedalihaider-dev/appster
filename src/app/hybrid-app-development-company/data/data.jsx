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
const TAB2_5 = "/services/tech/tab2/05.webp";
const TAB3_1 = "/services/tech/tab3/01.webp";
const TAB3_2 = "/services/tech/tab3/02.webp";
const TAB3_3 = "/services/tech/tab3/03.webp";
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
    subtitle: "Professional Hybrid App Developers",
    title: "Hybrid App Development Company Building Unified App Experiences.",
    content: "When a single product needs to perform across multiple platforms, it needs smart engineering. Our Hybrid application development services are designed to help brands scale faster with unified codebases, seamless performance, and consistent user journeys. With Appsters’ Hybrid app solutions, you can accelerate time to market, reduce maintenance costs, and maintain platform parity, all while ensuring your app behaves like it was built natively for every device. ",
    BannerLogos: BannerLogos,
    BannerBg: BannerBg,
    fromtitle: "Let’s Discuss Your App Idea",
    fromtext: "Share your app business objectives with our experts and create your custom app."
}

export const CuttingedgeContent = {
    title: "End-To-End Hybrid App Development Services That Drive Real Outcomes",
    text: (<>From ideation to post-launch optimization, we offer comprehensive hybrid development services tailored to address every modern business challenge. Our hybrid app development services are structured to achieve measurable results that are fast, stable, and scalable.
    </>),
    subtext: "Estimate Your App Project’s Cost Now!"
}

export const CuttingedgeList = [
    {
        title: (<>Hybrid App   <br />Consultation</>),
        txt: (<>Before a single line of code is written, our Hybrid app developers evaluate your business model, audience, and technical goals to shape a hybrid strategy that actually performs. From framework selection to architecture validation, our consultation process ensures each decision supports long-term adaptability, speed, and user satisfaction.</>),
        links: "",
    },
    {
        title: (<>UI/UX Design For  <br />Hybrid Apps </>),
        txt: "Our Hybrid app designers start with understanding user flow and intent. Every pixel, animation, and layout is guided by usability research and behavioral insights. The outcome? Designs that load fast, feel natural, and deliver a native-like experience so your users don’t think hybrid, but they just engage effortlessly.",
        links: "",
    },
    {
        title: (<>Hybrid App <br />Development </>),
        txt: "We develop apps for hybrid ecosystems using frameworks such as Ionic, Flutter, and React Native. The process is engineered for performance continuity, ensuring your app remains consistent across operating systems. Our hybrid builds emphasize scalable backends, secure integrations, and streamlined performance, all focused on stability and user satisfaction.",
        links: "",
    },
    {
        title: (<>Hybrid App <br />Testing </>),
        txt: "No app launches without frictionless performance. Through our structured Hybrid mobile application development testing framework, we validate speed, UI consistency, and functionality across browsers, networks, and devices. Every release goes through automated, manual, and regression testing cycles, ensuring zero disruption and an experience your users can trust.",
        links: "",
    },
    {
        title: (<>Hybrid App <br />Maintenance</>),
        txt: "Post-launch, our hybrid app experts stay proactive, tracking performance, managing OS updates, and optimizing runtime. We monitor analytics to spot emerging issues early, extend feature lifecycles, and keep your app running seamlessly as technologies evolve. Maintenance isn’t support, it’s sustained growth through continuous refinement.",
        links: "",
    },
    {
        title: (<>HTML5 <br />Development </>),
        txt: "A Google-certified Hybrid app developer team ensures HTML5 projects run efficiently across mobile, web, and desktop. We focus on code efficiency, adaptive layouts, and strong offline capabilities, allowing your hybrid application to remain responsive, secure, and consistent across environments without technical debt or performance lag.",
        links: "",
    }
]

export const caseStudiesContent = {
    title: "Real Hybrid Apps. Real Users. Real Performance.",
    text: (<>Our portfolio represents real-world use cases where hybrid apps outperform expectations. Each project solves a business challenge, be it user engagement, scalability, or speed, without sacrificing design or platform quality. These are fully deployed solutions driving measurable results across industries and user bases worldwide.</>),
}

export const caseStudiesList = [
    {
        title: "FitSync+",
        description: "FitSync+ brings personal fitness to every screen with one hybrid codebase. It syncs wearable data, provides adaptive workout plans, and delivers AI-based performance insights, all within a single app. Designed for cross-device accessibility, it ensures zero performance trade-offs and keeps data synced, secure, and user-focused in real time.",
        sliderImages: [slider1],
    },
    {
        title: "Block Edge",
        description: "Block Edge helps professionals manage budgets, assets, and spending seamlessly. Built as a hybrid app, it features secure payment integration, advanced encryption, and lightning-fast load times. Users experience identical responsiveness across platforms, ensuring financial management feels effortless whether on mobile, tablet, or desktop, which means no platform is left behind.",
        sliderImages: [slider2],
    },
    {
        title: "EduConnect Plus",
        description: "EduConnect Plus enables institutions to scale online learning experiences without building multiple native apps. It offers real-time classrooms, assessments, and content libraries accessible on any device. Built for hybrid scalability, it keeps bandwidth use low and engagement high, ideal for organizations transitioning to smarter digital education ecosystems.",
        sliderImages: [slider3],
    },
    {
        title: "MediQuick",
        description: "MediQuick simplifies healthcare scheduling and patient record sharing through one unified hybrid application. Its architecture supports real-time sync, secure authentication, and HIPAA-compliant data transmission. Patients and doctors access identical features across operating systems, ensuring healthcare interactions stay consistent, efficient, and always accessible at any time, anywhere.",
        sliderImages: [slider4],
    },
    {
        title: "ShopRow",
        description: "ShopRow is a hybrid eCommerce app combining web efficiency with mobile agility. With integrated AI recommendations, smart inventory management, and fast checkouts, it redefines hybrid shopping experiences. The app supports millions of users concurrently while maintaining smooth, responsive navigation and frictionless cross-platform functionality.",
        sliderImages: [slider5],
    }
];

export const AppIdeaContent = {
    title: "Hire Hybrid App Developers & Dominate Every Platform.",
    text: "When you hire hybrid app developers from Appsters, our engineers deliver unified, high-performance apps that minimize overhead, maximize reach, and keep your business agile in every digital ecosystem. ",
}

export const WhyChooseContent = {
    title: "Hybrid Application Development in USA | Scalable, Secure & Built For Disruptive Brands",
    text: "Choosing the right Hybrid application development in the USA means balancing scalability, security, and speed. Appsters stands among the few that merge strong engineering with measurable business impact. As a top-tier Hybrid app development agency, we deliver cross-platform apps that feel truly native, powering performance where your users are."
}

export const WhyChooseList1 = [
    {
        Icon: <WhyChooseIcon03 />,
        title: (<>Proven Expertise in  <br />Hybrid Ecosystems</>),
        description: "Every line of code reflects years of refinement. As a Hybrid app development company, we work across frameworks like Flutter, React Native, and Ionic, architecting applications that unify iOS and Android ecosystems without compromising on native performance or integration fidelity. Businesses trust Appsters for hybrid builds that scale intelligently across devices.",
    },
    {
        Icon: <WhyChooseIcon01 />,
        title: (<>Product-Minded  <br />Development Culture</>),
        description: "Beyond technical execution, our developers think like product managers. We define user value, KPIs, and market readiness at every sprint. Whether you want to develop a Hybrid app from scratch or evolve an existing build, Appsters bridges strategy and delivery, aligning innovation with your business model from day one.",
    }
];

export const WhyChooseList2 = [
    {
        Icon: <WhyChooseIcon04 />,
        title: (<>Efficiency Without  <br />Compromise</>),
        description: "As one of the best Hybrid app makers in the industry, we combine agile frameworks with automation pipelines to accelerate deployment cycles. You get shorter development times, optimized codebases, and cleaner releases, without sacrificing performance, security, or scalability. Every feature is engineered for speed and sustainability.",
    },
    {
        Icon: <WhyChooseIcon02 />,
        title: (<>Enterprise-Grade  <br />Hybrid App Solutions</>),
        description: "We build adaptable Hybrid app solutions that integrate into existing ecosystems, CRMs, and APIs. From startups to Fortune 500 companies, Appsters delivers hybrid frameworks designed to evolve with your tech stack, ensuring reliability under real-world load and enterprise-level governance. ",
    }
];

export const ProcessContent = {
    title: "Hybrid App Development Process | Data-Led, ROI-Focused, and Scalable from Day One",
    text: (<>The Hybrid app development process at Appsters is engineered for performance, reliability, and product-market alignment. By combining research, iterative testing, and architecture-level validation, every build is designed to deliver measurable impact across performance, scalability, and UX fidelity. Through continuous refinement, we align our Hybrid app development service with client goals, delivering technical consistency and business relevance at every phase.</>),
}

export const ProcessTabs = [
    {
        title: "App Idea & Research",
        content: {
            heading: "App Idea & Research",
            description:
                <>We start by defining the “why.” Our teams conduct market mapping, business goals, audience behavior, and data-backed discovery sessions to validate the business case. Our experts assess competitive frameworks to identify opportunities, defining success metrics and usability pathways before any line of code is written. As a Hybrid app development company, we turn unstructured ideas into executable strategies backed by real-world insights.</>,
            imgSrc: IMG,
        },
    },
    {
        title: "Strategic Planning",
        content: {
            heading: "Strategic Planning & Consultation",
            description:
                <>Our consultants translate product vision into execution blueprints, outlining architecture, APIs, and milestones. Our consultants design infrastructure and feature hierarchy based on scalability and security parameters. As a Hybrid app development firm, we design frameworks that minimize risk and maximize adoption, ensuring that timelines, budgets, and performance goals remain aligned with business KPIs. We ensure every plan aligns with both the tech stack and your strategic business objectives.
                </>,
            imgSrc: IMG,

        },
    },
    {
        title: "Prototyping",
        content: {
            heading: "Wireframing & Prototyping",
            description:
                "Early visualization reduces late-stage surprises; therefore, concepts are visualized early to align design with function. Our Hybrid designers create low to high-fidelity clickable prototypes and interactive wireframes, ensuring seamless UX logic and intuitive interface mapping before development begins, reducing risk and eliminating usability gaps later. This ensures that stakeholder input and UX intent are captured before development begins, minimizing rework and accelerating iteration cycles.",
            imgSrc: IMG,

        },
    },
    {
        title: "Development",
        content: {
            heading: "App Development",
            description:
                <>Once approved, we build your Hybrid app using robust frameworks like Ionic, React Native, and Flutter. We emphasize modular architecture, scalable APIs, reusable components, and clean codebases that promote easy maintenance and scalability, transforming complex specifications into fast, responsive, and high-performing applications. We focus on building intelligently structured systems, enabling optimized performance while ensuring clean, future-ready frameworks that deliver consistent, reliable functionality across both Android and iOS ecosystems.</>,
            imgSrc: IMG,

        },
    },
    {
        title: "Testing",
        content: {
            heading: "Expert QA & Testing",
            description:
                "Our QA engineers test for what truly matters: user satisfaction and system resilience. Using automation and manual testing pipelines, our Hybrid app makers validate every functionality by following a multi-tier testing strategy, ensuring apps perform seamlessly across browsers, devices, and operating systems under real-world conditions. From performance to usability and integration validation, we ensure a flawless experience, security compliance, and stability under high concurrency.",
            imgSrc: IMG,

        },
    },
    {
        title: "App Launch",
        content: {
            heading: "App Launch",
            description:
                <>We manage product rollout with discipline. From app store submissions, performance optimization, to deployment readiness, our teams handle compliance, versioning, and analytics integration to ensure your launch is not only successful but data-informed, visible, and scalable from day one. Each launch is backed by the rigor of a seasoned Hybrid app development company.</>,
            imgSrc: IMG,

        },
    },
    {
        title: "Deployment",
        content: {
            heading: "Support & Maintenance",
            description:
                "Deployment is managed with version control, automated CI/CD pipelines, and security protocols for uninterrupted transitions. Appsters ensures stable, traceable rollouts that uphold the integrity of every Hybrid app development service, aligning with enterprise SLAs and infrastructure standards. We oversee every deployment with precision, ensuring a smooth transition to production environments and zero downtime. Each app passes rigorous quality benchmarks for stability, performance, and long-term compatibility with evolving platform updates.",
            imgSrc: IMG,

        },
    },
];

export const TechnologiesContent = {
    title: "Build Market-Ready Apps With A Hybrid App Development Agency That Engineers for Scale.",
    text: (<><p>At Appsters, we reimagine cross-platform delivery through our Hybrid app development agency expertise, engineering high-performance Hybrid apps using React Native, Flutter, Ionic, and Xamarin. Unlike generic Hybrid app development companies, we optimize for scalability, API performance, and maintainability, ensuring your product performs seamlessly across devices while lowering operational overhead. True hybrid performance is strategic engineering with measurable business impact.</p>
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
        txt: "Appsters’ team delivered a compliant, data-secure solution that transformed how our clients interact with financial dashboards. Their Hybrid app development services helped us cut development time by half while improving transaction reliability. It’s clear they understand FinTech regulations inside out.",
        name: "Kristan Joshua,",
        position: "Product Head.",
        img: Joseph,
    },
    {
        txt: "We needed patient apps that met both HIPAA and device performance standards. Appsters exceeded expectations with their Hybrid apps, building a secure, synchronized solution that bridges real-time data and telehealth services. Their precision in managing medical integrations has truly raised our digital care quality.",
        name: " Donald Cole,",
        position: " Co-Founder",
        img: RyanJaden,
    },
    {
        txt: "Appsters is my most trusted Hybrid app development company; their team gave our retail app the power to handle heavy traffic without lag. From real-time inventory tracking to push campaigns, their architecture made everything faster and smarter. We saw a 35% jump in repeat customers within months.",
        name: "Catherine Bennett,",
        position: " Digital Experience Lead",
        img: KayleeSlone,
    }
    ,
    {
        txt: "Our connected vehicle platform needed precision engineering. Appsters’ Hybrid apps bridged sensor data, predictive maintenance, and AI-assisted diagnostics into one scalable interface. Their technical depth and iterative testing culture set a new benchmark for what we expect from a software partner.",
        name: "Jacob Alvarez,",
        position: "VP Safety, Health & Security",
        img: MauryoJones,
    },
    {
        txt: "Working with Appsters turned our fragmented logistics operations into one integrated digital hub. Their Hybrid app development services streamlined our route optimization, live tracking, and data analytics across devices. The result? Faster deliveries, reduced downtime, and total transparency from dispatch to delivery.",
        name: "Hank Hart,",
        position: "Operations Directo",
        img: KateBullock,
    }
]

export const RisksContent = {
    title: (<>Save Time & Money<Image src={RisksIMG01} alt="Bitswits Services" width={228} height={85} /> by Building Your MVP Faster<Image src={RisksIMG02} alt="Bitswits Services" width={228} height={85} />  with Hybrid App Development!</>),
    text: "Develop your app concept cost-effectively with Hybrid frameworks!"
}

export const OffersContent = {
    title: "Forward Businesses Choose Our Hybrid App Development Solutions.",
    text: "Choosing Hybrid app development means accessing the best of both ecosystems, including speed, flexibility, and platform-agnostic scalability. With unified codebases and advanced integrations, enterprises can deliver consistent user experiences faster while lowering maintenance costs and accelerating innovation cycles. That’s why future-ready teams develop Hybrid apps strategically, not experimentally.",
}

export const OffersTabs = [

    {
        title: "BLE Integration",
        content: {
            heading: "BLE Integration",
            description:
                "Our custom Hybrid application development process enables seamless Bluetooth Low Energy (BLE) integration for IoT, wearables, and connected systems. From fitness sensors to smart industrial devices, we ensure reliable data sync, low-latency pairing, and secure connectivity, delivering intelligent Hybrid solutions that move data, not just devices.",
        },
    },

    {
        title: "Beacon Integration",
        content: {
            heading: "Beacon Integration",
            description:
                "Appsters empowers brands to build proximity-driven digital experiences using Beacon technology. We help businesses to build a Hybrid app that recognizes real-world triggers, improving location-based personalization, user engagement, and data insights. From retail walkthroughs to museum tours, our beacon integrations make digital presence tangible and customer engagement measurable.",
        },
    },

    {
        title: "GPS Integration",
        content: {
            heading: "GPS Integration",
            description:
                "Location accuracy defines today’s mobile user experience. Our Hybrid app development services incorporate precise GPS mapping, real-time tracking, and advanced geofencing for industries like logistics, travel, and mobility. We don’t just enable location awareness, we architect systems that respond intelligently to user movement and contextual triggers.",

        },
    },
    {
        title: "Wearable Integration",
        content: {
            heading: "Wearable Integration",
            description:
                "With certified Hybrid app developers, Appsters builds smart, sensor-powered wearable apps that extend your digital ecosystem beyond the phone. From healthcare biometrics to fitness analytics, our Hybrid frameworks connect seamlessly with watchOS, Wear OS, and custom hardware, turning raw sensor data into actionable intelligence for users and enterprises.",

        },
    },
    {
        title: "Payment Gateway Integration",
        content: {
            heading: "Payment Gateway Integration",
            description:
                "Security and reliability define successful digital transactions. Appsters’ Hybrid app development services integrate global payment gateways such as Stripe, PayPal, Braintree, and more with multi-layer encryption, tokenization, and fraud detection. We empower businesses to process payments, transact safely, scale globally, and monetize confidently across every platform. ",

        },
    },
];

export const FuelingContent = {
    title: "Integrating Cutting-Edge Technologies in Hybrid App Development",
    text: "We make use of emerging technologies to enhance app functionality across various industries, ensuring top-tier performance and innovation in every project.",
    subtitle: "Cut Development Time with Hybrid Frameworks!",
    subtext: "Leverage hybrid technology to launch your app faster and more affordably.",
    FuelingImg: FuelingImg
}

export const FuelingList = [
    {
        title: "AI & ML",
        text: (<>We integrate <Link href='/ai-development-company'>AI app development</Link> and ML to create self-learning apps that personalize user experiences, utilize predictive analytics, and automate processes. These technologies streamline operations, making apps smarter and more efficient in real time.</>),
    },
    {
        title: "Augmented Reality (AR)",
        text: "AR adds digital elements to the real world, enhancing industries like retail, education, healthcare, and real estate. Users can visualize products, boosting engagement and conversion rates, and making interactions more dynamic and engaging."
    },
    {
        title: "Virtual Reality (VR)",
        text: "VR provides immersive experiences, enhancing industries like gaming, education, tourism, and real estate. It transforms user interaction, creating captivating environments that increase user engagement and retention through rich, interactive content."
    },
    {
        title: "Cloud",
        text: "Our cloud integration offers scalable infrastructure, secure data storage, and real-time updates. This guarantees your app can handle growth seamlessly, providing reliable performance and access to critical data anytime, anywhere."
    },
    {
        title: "Blockchain",
        text: (<>Blockchain integration provides security and transparency in supply chains and transactions, reducing fraud and enhancing data integrity. We also offer <Link href='/blockchain-game-development-company'>blockchain game development</Link>, ensuring secure in-game transactions with tamper-proof records.</>),
    }
];

export const CtaEstimatedContent = {
    subtitle: "Hire Hybrid Experts to Power Your Next Digital Leap.",
    title: "Perfected Hybrid App Development",
    text: (<>Your app deserves more than deployment; it deserves traction. Our Hybrid app developers specialize in designing scalable, cross-platform ecosystems that deliver native-like performance, streamlined updates, and measurable ROI. From prototype to product, every release is engineered for agility, uptime, and measurable digital growth.</>),
    CtaEstimatedImg: CtaEstimatedImg
}

export const TechStackContent = {
    title: "Our Tech Stack For Hybrid App Development",
    text: "We choose the best hybrid app development technologies to build UX-driven apps!",
}

export const TechStackTabs = [
    {
        title: "Languages",
        content: [
            {
                heading: "JavaScript",
                img: TAB1_1,
            },
            {
                heading: "TypeScript",
                img: TAB1_2,
            },
            {
                heading: "Dart",
                img: TAB1_3,
            }
        ],
    },
    {
        title: "Frameworks",
        content: [
            {
                heading: "React Native",
                img: TAB2_1,
            },
            {
                heading: "Flutter",
                img: TAB2_2,
            },
            {
                heading: "Ionic",
                img: TAB2_3,
            },
            {
                heading: "Xamarin",
                img: TAB2_4,
            },
            {
                heading: "PhoneGap",
                img: TAB2_5,
            }
        ],
    },
    {
        title: "UI Libraries",
        content: [
            {
                heading: "Material-UI",
                img: TAB3_1,
            },
            {
                heading: "Ant Design",
                img: TAB3_2,
            },
            {
                heading: "Bootstrap",
                img: TAB3_3,
            }
        ],
    },
    {
        title: "Backend",
        content: [
            {
                heading: "Firebase",
                img: TAB4_1,
            },
            {
                heading: "AWS Amplify",
                img: TAB4_2,
            },
            {
                heading: "Node.js",
                img: TAB4_3,
            },
            {
                heading: "Django",
                img: TAB4_4,
            }
        ],
    },
    {
        title: "Testing Tools",
        content: [
            {
                heading: "Jest",
                img: TAB5_1,
            },
            {
                heading: "Mocha",
                img: TAB5_2,
            },
            {
                heading: "Appium",
                img: TAB5_3,
            },
            {
                heading: "Detox",
                img: TAB5_4,
            }
        ],
    },
    {
        title: "Version Control",
        content: [
            {
                heading: "Git",
                img: TAB6_1,
            },
            {
                heading: "GitHub",
                img: TAB6_2,
            },
            {
                heading: "Bitbucket",
                img: TAB6_3,
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
    title: (<>The Market Never Waits.<br /> Are You Ready to Launch?</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s Create An Amazing<br />  App Together!</>)
}

export const FaqsContent = {
    title: "Frequently Asked Questions",
}

export const FaqsList = [
    {
        title: "What makes Appsters a reliable Hybrid app development company?",
        txt: "Appsters stands out as a Hybrid app development company for its engineering-first approach, using frameworks like React Native, Flutter, and Ionic. Our developers integrate APIs, automate CI/CD pipelines, and ensure security compliance while optimizing for speed, performance, and maintainability, giving enterprises a scalable foundation for long-term product growth."
    },
    {
        title: "How do Appsters’ Hybrid application development services handle platform consistency?",
        txt: `Our Hybrid application development services ensure UI and performance parity across Android and iOS using shared business logic and adaptive component rendering. Appsters implements responsive design systems and device-specific optimization layers, allowing a unified experience without compromising app responsiveness or brand feel on any platform.`
    },
    {
        title: " Why should startups hire Hybrid app developers from Appsters?",
        txt: "When you hire Hybrid app developers from Appsters, you access cross-functional teams skilled in multi-framework builds and modern deployment pipelines. Our developers architect apps using React Native, Flutter, and Kotlin Multiplatform, ensuring high efficiency, reduced time-to-market, and easier post-launch maintenance through modular and reusable code structures."
    },
    {
        title: " How does Appsters ensure app security and performance optimization in Hybrid development?",
        txt: "As a Hybrid mobile app development company, Appsters integrates end-to-end encryption, secure APIs, and automated testing within its CI/CD processes. We optimize runtime memory, API latency, and asset compression while continuously monitoring build performance to deliver apps that meet enterprise-grade security and speed standards."
    },
    {
        title: " Can Appsters integrate advanced features like IoT or AR in Hybrid apps?",
        txt: "Yes, our Hybrid application development solutions support deep technology integrations. Appsters connects apps with IoT devices, BLE beacons, and ARKit/ARCore frameworks through platform-agnostic APIs. These features are seamlessly embedded within the hybrid layer, ensuring consistent interaction models and low-latency data sync across connected environments."
    },
    {
        title: "How does Appsters’ Hybrid application development service reduce total ownership costs?",
        txt: "Our Hybrid application development service minimizes the total cost of ownership by reusing over 80% of shared code, implementing cloud-based testing, and automating builds. Appsters’ architecture-first methodology shortens development cycles, reduces maintenance overhead, and allows quick updates, maximizing long-term value without compromising functionality or performance across platforms."
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





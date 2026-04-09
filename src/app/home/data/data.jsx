

// Extended Services Images
import { ArtificialIntelligence, BigData, Blockchain, FinTech, InternetOfThings, Logistics, MixedReality } from "@/src/app/app-constants"

//========= Process Images
import { Process01, Process02, Process03, Process04, Process05, Process06, Process07, Process08 } from "@/src/app/app-constants"

//========= Testimonial Images
import { ClutchLogo, GoogleLogo, TrustpilotLogo } from "@/src/app/app-constants"

//========= Engagement Images
import { DedicatedTeamModel, FixedPriceModel, HourlyPriceModel, OnsiteTeamModel } from "@/src/app/app-constants"

//========= Engagement Images
import { Automotive, ECommerce, Education, Food, Healthcare, Insurance, Music, RealEstate, SocialMedia } from "@/src/app/app-constants"

// New Solution Image
import { NewSolutionIco1, NewSolutionIco2, NewSolutionIco3, NewSolutionIco4, NewSolutionIco5, NewSolutionIco6, NewSolutionIco7, NewSolutionIco8, } from "@/src/app/app-constants"

// New Service Image
import { MobileIcon, WebDevIcon, SoftwareIcon, GameDevIcon1, StaffIcon, CloudIcon } from "@/src/app/app-constants"

import Link from "next/link"




export const BannerData = {
    subTitle: "A Digital Transformation Company",
    title: "Create Apps That Scale With Your Growth.",
    content: `Trusted by CTOs, valued by users, and built for AI scalability. Appsters deliver mobile apps that your business needs today & tomorrow.`,
}

export const AboutData = {
    title: "Transforming Businesses with AI-Driven Technology That Transcends Geographies and Platforms",
    content: (<>
        <p>AI ecosystems are shaping the present and defining the future. We create AI App solutions that help businesses grow, simplify decision-making, and automate key operations. Our developers and data specialists design models built for real-world performance, reiterating complex processes into reliable, scalable systems.</p>
        <p>Every solution integrates with your current applications, reducing friction and accelerating adoption. As a leading IT service provider and mobile app development agency, we focus on outcomes that matter, from measurable growth, faster response to market shifts, AI integration into your current ecosystem, and long-term enterprise reliability.</p>
    </>),
}

export const NewServiceData = {
    title: "End-to-End Mobile App Development Services Redefining The Digital Divide. ",
    content: "Our service stack covers every major platform and framework, ensuring your business and disruptive ideas can move from concept to launch without friction and glitches. Our developers integrate modern frameworks, data layers, and security-first architecture.",
}

export const NewServiceDataList = [
    {
        icon: <MobileIcon />,
        title: "Android App Development",
        content: "Appsters delivers custom Android app development services that combine native performance with modular architecture. Our engineers use Kotlin, Jetpack, and scalable APIs to build Android apps that handle complex workloads while maintaining seamless UI performance across devices. Each release is built for stability, scalability, and security, ready for millions of active users."
    },
    {
        icon: <WebDevIcon />,
        title: "iOS App Development",
        content: "As a leading iOS app development company, we specialize in creating high-performance iPhone and iPad applications that reflect Apple’s design precision. Our teams leverage Swift, Xcode, and ARKit frameworks to deliver immersive, responsive iOS experiences. We focus on optimizing data flow, UX consistency, and App Store compliance for long-term success."
    },
    {
        icon: <SoftwareIcon />,
        title: "React Native App Development",
        content: "Our React Native app developers build cross-platform apps that combine native performance with rapid deployment cycles. Using JavaScript and TypeScript frameworks, we deliver products that reduce development costs by up to 40% while maintaining native-like responsiveness. Perfect for startups and fast-scaling enterprises that prioritize time-to-market."
    },
    {
        icon: <GameDevIcon1 />,
        title: "Flutter App Development",
        content: "Our Flutter app developers craft stunning, single-codebase apps optimized for Android and iOS. Using Dart, we deliver smooth UI animations, quick rendering, and reliable backend integrations. The result? Apps that launch faster, perform better, and require minimal maintenance over their lifecycle and product development."
    },
    {
        icon: <CloudIcon />,
        title: "Mobile Game App Development",
        content: "As a game app development company, Appsters designs high-performance, GPU-optimized games across genres from arcade, simulation, and multiplayer. Our developers use Unity and Unreal Engine to deliver smooth frame rates, dynamic environments, and high replayability. Every title we build is engineered to drive engagement and monetization."
    },
    {
        icon: <StaffIcon />,
        title: "Cross-Platform App Development",
        content: "We create cross-platform mobile apps that combine efficiency and reach. Built with hybrid frameworks such as Ionic, Xamarin, and React Native, our apps deliver a unified experience across devices. From backend API orchestration to cloud deployment, every layer is designed for speed, stability, and scalability."
    },
]

export const PortfolioData = {
    title: "A Power-Packed Portfolio.",
    content: `Appsters builds Austin apps that outpace industry norms by measuring product impact. We code for observability, fast rollouts, and secure integrations. Our engineers test real user flows on local device sets, tune backend contracts, and deliver predictable SLAs that beat typical vendor promises and shorten your feedback loops.`,
}
export const PortfolioDataList = [
    {
        title: "Switch Poker",
        content: `Switch Poker redefined competitive poker for mobile. Built with a scalable real-time engine, the app allows players to join private or global tables with seamless multiplayer connectivity. Advanced anti-cheat systems, dynamic tournaments, and live global rankings keep engagement high. Integrated wallet and analytics modules provide real-time insights for users and admins alike.`,
    },
    {
        title: "Hockey Now",
        content: `Hockey Now connects sports enthusiasts with instant match scheduling, venue booking, and team creation tools. Built natively for iOS and Android, it enables real-time updates, match stats, and integrated in-app purchases for booking and rewards. Optimized for scalability, the backend syncs player data securely, ensuring seamless performance even during high-traffic match days.`,
    },
    {
        title: "Song Match",
        content: `Song Match blends music and matchmaking through data-driven pairing. Using API integration with major streaming platforms, it syncs user preferences and generates compatibility scores based on playlists and listening habits. Built with Node.js and Swift, it ensures instant profile sync and smooth discovery, resulting in highly engaging, low-friction user experiences across mobile ecosystems.`,
    },
    {
        title: "Odonta",
        content: `Odonta empowers dental professionals with a secure network for buying, selling, and communicating within the dental community. The app integrates encrypted messaging, real-time inventory management, and verified business accounts. Built using React Native and Firebase, Odonta ensures cross-platform compatibility while maintaining data privacy for all professional transactions within the medical domain.`,
    },
    {
        title: "Communitter",
        content: `Communitter brings service providers and consumers together on one unified app. From electricians to architects, users can find, review, and book professionals instantly. Built with modular APIs and location-based algorithms, it supports garage sales, bidding, and user ratings. The system’s scalable microservice architecture keeps response times fast even as user volume grows.`,
    },
    {
        title: "Al-Hersh",
        content: `Al-Hersh simplifies grocery shopping with a fresh, digital-first marketplace. The app supports online payments, route optimization, and predictive delivery times. Built with Flutter and Laravel, it enables farmers and suppliers to manage inventories and customers to track orders in real time. A custom admin dashboard ensures full analytics visibility and seamless user management.`,
    },
    {
        title: "Blue Collar Capital",
        content: `Blue Collar Capital delivers a mobile-first lending and investment platform. Users can apply for loans, manage installments, and explore investment options with real-time status updates. Built with secure API integration and encrypted data handling, the app supports fast KYC verification and financial modeling. Its intuitive dashboard keeps financial management transparent and efficient.`,
    },
    {
        title: "Qatar Trip Generation",
        content: `Qatar Trip Generation was developed for the State of Qatar to calculate trip generation and parking rates using real-time datasets. The app integrates predictive analytics for traffic design and management. Built natively for Android and iOS, it connects to government databases, ensuring data accuracy, security, and high computational performance for infrastructure planning.`,
    },
    {
        title: "Real Rocky Estate",
        content: `Real Rocky Estate delivers an elegant property discovery platform with intelligent search and advanced filters. Users can explore homes for rent or sale with real-time availability, 3D view integration, and mortgage calculators. The app was re-engineered by Appsters with upgraded UI/UX, cloud hosting, and analytics for improved lead conversion and user retention.`,
    },
]

export const NewCtaData = {
    title: (<>Take Your Ideas Forward With A <span className="txtColor">Tech Partner</span> That's Ready to Build What’s Next.</>),
    content: `Your business deserves apps that create impact from day one. Let’s turn your idea base into a solution that’s fast, secure, and ready to scale. Get started with a free consultation today and take the first step toward building your next breakthrough with Appsters. `,
}

export const NewCtaData2 = {
    title: (<>Future-Proof, Intelligent, & Built To Grow With <span className="txtColor">Your Business.</span></>),
    content: `The fastest-growing companies are those that act now, not later. We help you move from idea to execution with production-ready solutions that drive measurable growth. Your next big app starts here, and our ‘appsters’ are ready to make it happen.`,
}

export const NewCtaData3 = {
    title: "Tech-Driven App Development Company in Austin.",
    content: (<>
        <p>Appsters turns ideas into working apps on a clear, short timeline. Our mobile application development in Austin begins with a focused review of your existing product and stack, followed by agreeing on a plan to produce production-grade builds in tight increments. Engineers deliver modular Android and iOS clients with instrumented telemetry, CI gates, and staged rollout strategies.  </p>
        <p>We design APIs for parallel work so backend and frontend teams iterate without blocking each other. We keep the scope tight, ship the essentials first, and prove value fast with live usage data. We set practical performance targets, track crash-free use, and keep a safe backout plan for every release. Local testing on Austin devices and app-traffic patterns means fewer surprises on launch day.</p>
    </>),
}

export const NewSolutionData = {
    title: (<><span className="txtColor">Mobile App Development Solutions</span> That Power Growth For Next-Generation Experiences.</>),
}

export const NewSolutionsList = [
    {
        icon: <NewSolutionIco5 />,
        title: "Virtual Reality",
        content: "We build immersive VR experiences for training, simulation, and entertainment. Our VR apps are designed with performance and accessibility in mind, ensuring smooth rendering and realistic environments. Optimized for multiple headsets and devices, these solutions help businesses engage users in entirely new and measurable ways."
    },
    {
        icon: <NewSolutionIco7 />,
        title: "Image Recognition",
        content: "Appsters create image recognition apps and solutions that turn raw visual data into insights. From retail inventory scanning to healthcare diagnostics, our models are trained for accuracy and speed. We deploy production-ready AI models that integrate with mobile and enterprise systems, enabling instant detection, classification, and automation at scale."
    },
    {
        icon: <NewSolutionIco1 />,
        title: "Big Data",
        content: "Our big data solutions collect, process, and analyze massive datasets in real time. Using distributed architectures and optimized pipelines, we help businesses uncover actionable patterns faster.  If your business needs analytics dashboards, predictive models, or scalable storage, we deliver systems that grow with your data without losing performance."
    },
    {
        icon: <NewSolutionIco2 />,
        title: "Voice Recognition & NLP",
        content: "We engineer voice-enabled apps that understand, process, and respond naturally. Our NLP models support multiple languages, custom vocabularies, and domain-specific commands. From virtual assistants to call center automation, we build speech solutions that improve user accessibility and deliver faster response times for customer-facing applications."
    },
    {
        icon: <NewSolutionIco3 />,
        title: "Quantum Computing",
        content: "Quantum computing is unlocking possibilities in optimization, cryptography, and simulation. Appsters help businesses experiment safely with quantum algorithms by building hybrid apps that pair classical and quantum workflows. Our solutions are designed for future scalability, so early adopters stay ahead as hardware capabilities rapidly change."
    },
    {
        icon: <NewSolutionIco4 />,
        title: "Progressive Web Apps ",
        content: "PWAs bridge the gap between web and mobile. We design lightweight, fast-loading progressive web apps that work offline, support push notifications, and deliver native-like performance. This approach minimizes development costs while expanding reach, making them ideal for businesses targeting diverse devices and global audiences."
    },

    {
        icon: <NewSolutionIco6 />,
        title: "5G Technology",
        content: "We build apps that take advantage of 5G’s ultra-low latency and high bandwidth. From AR streaming to IoT control systems, our solutions leverage next-gen networks to deliver richer experiences. With edge computing integration, we push for speed, reliability, and security at every node of your infrastructure."
    },

    {
        icon: <NewSolutionIco8 />,
        title: "Data Science",
        content: "Our data science solutions turn raw data into predictive intelligence. We design and deploy machine learning pipelines for forecasting, clustering, and anomaly detection. With clear reporting and visualization, stakeholders get actionable insights that support better decisions, faster iterations, and stronger performance across business units."
    },
]

export const NewTesti = {
    title: "See Why Stakeholders, Entrepreneurs, & Businesses Choose Our App Development & Technology Solutions in Austin.",
    content: (
        <>
           From founders to CTOs, businesses choose Appsters because every line of code serves a clear business purpose: growth, AI adaptability, and market edge. We measure success by the impact our solutions create, and our clients agree. From startups to global enterprises, clients trust our developers to engineer digital products that deliver progressive results. 
        </>
    ),
}


export const NewTestiList = [
    {
        content: `Our healthcare app went from prototype to production in twelve weeks. The Appsters team’s precision and velocity stood out. These folks are seriously the best mobile app developers in Austin; they understood HIPAA, analytics, and API scaling without a single hand-holding session.`,
        Author: (<><strong>– Jordan Matthews, </strong> , CTO</>),
    },
    {
        content: `I’ve worked with multiple vendors, but Appsters was the first to hit every sprint on time. Their mobile app development services Austin team doesn’t just code; they anticipate edge cases before QA does. Post-launch retention jumped by 18%. I’m glad that I chose Appster as my mobile app development company in Austin
`,
        Author: (<><strong>–  Charlotte Grey, </strong> Founder.</>),
    },
    {
        content: `FleetSync’s uptime hasn’t dipped below 99.9% since launch. Appsters brought operational reliability we didn’t think possible. Their approach to Austin mobile applications feels like having an in-house SRE team with startup agility. `,
        Author: (<><strong> – Samuel Ramirez,  </strong>  VP Product</>),
    },
    {
        content: `Our custom LMS scaled from 500 to 25,000 users with zero architectural refactor. The custom apps team at Appsters planned growth so meticulously that scaling became a non-event. I am so impressed with their knowledge, expertise, and professionalism. I would definitely choose them again for any of my app development projects.`,
        Author: (<><strong> –   Liz Grant,  </strong>   CEO</>),
    },
    {
        content: `We partnered with Appsters for a financial onboarding platform, and they exceeded every KPI. The clarity, sprint reviews, and QA discipline of their mobile app developers in Austin make them a benchmark in technical delivery. It’s rare to find an app development company in Austin with this much professionalism and knowledge.`,
        Author: (<><strong> – Daniel Price,   </strong> Head of Digital Strategy</>),
    },
]

export const CompanyInfoContent = {
    subtitle: "What Drives Us?",
    title: "A Relentless Obsession With Getting It Right.",
    content: "At Appsters, perfection is our baseline. We only partner with visionary clients — from startups developing MVPs to enterprises scaling complex solutions — to create apps that not only work but thrive in real-world scenarios. From brainstorming to deployment, we are committed to delivering excellence at every step, ensuring your app succeeds where it matters most.",
}

export const HomeServicesContent = {
    subtitle: "Our Services",
    title: "We Transform Innovative Concepts Into Powerful Digital Solutions.",
    content: "With a decade of expertise, we give entrepreneurs and SMBs the unfair advantage they need to outsmart the competition. Our timely delivery and faster time to market drive growth and expansion, providing the essential tools to stay competitive and succeed.",
}

export const HomeServicesList = [
    {
        title: "Mobile App Development",
        txt: (<>We provide end-to-end <Link href='/mobile-application-development-services'>mobile app development services</Link>, from ideation to deployment. Our team ensures optimal UI/UX design, robust backend architecture, and post-launch support, delivering secure and high-performing apps for various business needs.</>),
        url: "/mobile-application-development-services"
    },
    {
        title: "Android App Development",
        txt: (<>We specialize in <Link href='/android-app-development-company'>Android app development</Link> using Java and Kotlin, building high-performance apps optimized for the Google Play Store. Our custom solutions support diverse industries and deliver smooth user experiences across all Android devices.</>),
        url: "/android-app-development-company"
    },
    {
        title: "iOS App Development",
        txt: (<>Our <Link href='/ios-app-development-company'>iOS app development</Link> expertise includes Swift and Xcode, creating secure apps for the App Store. We build custom iOS apps that enhance user engagement and performance, providing exceptional UX across iPhones, iPads, and other Apple devices.</>),
        url: "/ios-app-development-company"
    },
    {
        title: "Cross Platform App Development",
        txt: (<>We deliver cross-platform apps using <Link href='/flutter-app-development'>Flutter</Link> and <Link href='/react-native-app-development'>React Native</Link>, providing businesses with scalable solutions. Our apps work seamlessly across iOS, Android, and other platforms, reducing development time and costs without compromising quality, positioning us as a leading <Link href='/cross-platform-app-development-services'>cross-platform app development company</Link>.</>),
        url: "/cross-platform-app-development-services"
    },
    {
        title: "Mobile Game Development",
        txt: "Our game app development services span 15+ genres, offering immersive 2D and 3D gameplay. Using advanced technologies like Unity, Unreal, and Godot, we create optimized, smooth-running games tailored for all screen sizes and devices.",
        url: "/mobile-game-development-company"
    },
    {
        title: "Blockchain App Development",
        txt: "We develop blockchain apps with secure, decentralized technologies, supporting industries like finance, healthcare, and supply chain. Using Ethereum, Hyperledger, and smart contracts, we bring transparency and automation to your blockchain app.",
        url: "/blockchain-game-development-company"
    }
]

export const CaseStudyContent = {
    subtitle: "Success In Action",
    title: "Beyond the Code: Real Stories, Real Results",
    content: "Every project is a journey, and we measure success by the results our clients achieve. From MVPs that disrupt industries to enterprise solutions that scale globally, these stories show how we transform ideas into market-leading solutions.",
}

export const ExtendedServicesContent = {
    subtitle: "Advanced Technologies & Solutions",
    title: "Next-Gen Technology, Apps, & Ecosystems That Put You Ahead In Real-Time.",
    content: "We create next-gen solutions, AI-native applications, digital ecosystems, and web-based products that give businesses the power to move faster, work smarter, and lead. Our approach focuses on practical innovation that integrates into your existing systems and delivers results you can measure in numbers and growth.",
}

export const ExtendedServicesList = [
    {
        title: "Artificial Intelligence",
        content: {
            icon: <ArtificialIntelligence />,
            heading: "Artificial Intelligence",
            description: "AI-powered apps are reshaping industries, and we make them practical for your business. From intelligent automation to decision-support systems, our AI apps are designed for production, not prototypes, helping you minimize errors, unlock insights, and scale faster across multiple workflows.",
            listItems: [
                "Predictive Analytics for Smarter Decisions",
                "Intelligent Process Automation",
                "Machine Learning Models Built for Production",
                "AI Apps That Scale with Your Business",
            ],
        },
    },
    {
        title: "IoT",
        content: {
            icon: <InternetOfThings />,
            heading: "IoT",
            description: "Internet of Things solutions turn everyday devices into data-generating assets. Our IoT apps enable you to monitor operations in real-time, reduce inefficiencies, and connect multiple systems into a singular smart ecosystem, all built for reliability, security, and easy scalability.",
            listItems: [
                "Real-Time Device and Sensor Monitoring",
                "Edge-to-Cloud Data Processing",
                "Secure IoT Network Integration",
                "Scalable IoT App Solutions for Enterprise"
            ],
        },
    },
    {
        title: "Blockchain",
        content: {
            icon: <Blockchain />,
            heading: "Blockchain",
            description: "Blockchain app development is about more than crypto, as it’s about secure, verifiable, and transparent transactions for your business. We create blockchain apps that support smart contracts, tamper-proof data sharing, and scalable Web3 integrations, preparing you for the decentralized future.",
            listItems: [
                "Smart Contract Development",
                "Decentralized App (dApp) Development",
                "Secure Transaction and Data Validation",
                "Enterprise-Ready Blockchain Integration"
            ],
        },
    },
    {
        title: "AR/VR",
        content: {
            icon: <MixedReality />,
            heading: "AR/VR",
            description: "AR/VR technology is driving new possibilities in training, retail, and entertainment. We build immersive experiences that merge the digital and physical worlds, helping your users engage deeper, learn faster, and interact in ways that are intuitive and functional.",
            listItems: [
                "Augmented Reality for Retail and Training",
                "Virtual Reality Simulations",
                "Interactive 3D Content Development",
                "Cross-Platform AR/VR App Deployment"
            ],
        },
    },
    {
        title: "MVP Apps",
        content: {
            icon: <BigData />,
            // icon: <BigData />,
            heading: "MVP Apps",
            description: "MVP app development helps you test ideas faster and reduce time-to-market. We build lean, functional MVPs that validate your business model, attract investors, and provide a clear roadmap for scaling into a full product with confidence.",
            listItems: [
                "Rapid Prototyping and Iteration",
                "Core Feature Development Only",
                "Early User Feedback and Analytics",
                "Scalable Foundation for Future Growth"
            ],
        },
    },
];

export const DigitalCtaContent = {
    content: (<><span>Go Beyond </span>Digital</>),
}

export const ProcessContent = {
    title: (<><span className="txtColorCenter"> Austin App Development Process </span> Structured for End-to-End Product Integrity.</>),
    content: "We built this process based on Austin realities: short product windows, a wide variety of devices, and enterprise compliance demands. Appsters blends practical research, mapped risks, and sprint-driven builds so your team sees working software fast. We benchmark local firms that emphasize end-to-end ideation, structured project phases, Agile delivery, and verified client rankings to keep our approach market-proven. As a mobile app development company in Austin, we run lean research, deliver prototype-driven approvals, and field-test on local device sets.",
}

export const ProcessList = [
    {
        title: "App Idea & Research",
        txt: "Starting with focused market validation, we map target users, measure addressable demand, and run side-by-side competitor feature audits. Our mobile app development company in Austin has engineers who evaluate platform trade-offs and estimate cost drivers, including third-party APIs, offline requirements, regulatory constraints, and third-party data residency. Deliverables include a prioritized feature backlog, a technical feasibility report, and an MVP success metric suite. ",
        icon: <Process01 />,

    },
    {
        title: "Strategic Planning & Consultation",
        txt: "We convert research into a delivery plan with clear stakeholder roles, an API contract, and a release cadence. In this stage, product owners get a roadmap with sprint scopes, acceptance criteria, and risk mitigations for data, privacy, and scale. Architects propose stack options, integration patterns, and costed runbooks for staging, canary, and rollback. Our experienced app developers in Austin produce a milestone plan with rollup estimates, test gates, and compliance checkpoints, allowing leadership to sign off on scope and budget confidently.",
        icon: <Process02 />,

    },
    {
        title: "Wireframing and Prototyping",
        txt: "To deliver high-performance Austin app solutions, we produce task-focused flows, clickable prototypes, and measurable usability tests before writing a line of code. UX teams map critical flows, offline behavior, microcopy, and accessibility states while engineers validate input/output contracts. We test prototypes on representative Austin device sets and run short usability cohorts to catch friction early. The result: a validated UI spec and an actionable dev backlog that saves iterations for later. ",
        icon: <Process03 />,

    },
    {
        title: "App Development",
        txt: "We execute in short, product-focused sprints with feature branches, unit and integration tests, and continuous integration. Our developer isolates business logic into modules, creates platform adapters, and integrates mock APIs so parallel teams move without blocking. Build pipelines include linting, security scans, size audits, and artifact signing. Unlike other mobile app companies in Austin, we instrument apps for real-user monitoring and telemetry from day one, so product owners see retention and performance signals immediately.",
        icon: <Process04 />,

    },
    {
        title: "Expert QA & Testing",
        txt: "Testing goes beyond smoke checks. We run device-matrix automation, exploratory testing, performance profiling, security static analysis, and accessibility audits. Our QA validates background sync, offline conflict resolution, and watchlist scenarios for low-connectivity areas. We stage beta builds with feature flags and crash analytics so triage teams fix priority regressions quickly. This step produces a release-quality artifact and a clear test-trace for compliance and audits, which Austin app solution buyers expect for enterprise launches.",
        icon: <Process05 />,

    },
    {
        title: "App Launch",
        txt: "We coordinate app-store submissions, signing profiles, enterprise provisioning, and staged rollouts. Our launch plan sets rollout cohorts, monitoring gates, and rollback paths. We monitor adoption funnels and crash-free session rates in real time and run immediate post-launch patches through fast CI channels when necessary. App owners get a launch dashboard and a prioritized remediation list so you control customer impact during the critical first 72 hours.",
        icon: <Process06 />,

    },
    {
        title: "Deployment",
        txt: "We deploy backend services with infrastructure-as-code, blue/green or canary releases, and database migration plans that avoid downtime. We automate secure secret rotation, automated scaling rules, and on-call playbooks tied to error budgets. We enforce observability across mobile clients and server services so incidents trigger alerts with runbook links. This deployment discipline reduces blast radius and keeps user-facing flows available under load.",
        icon: <Process07 />,

    },
    {
        title: "Maintenance & Support",
        txt: "We hand over code with documentation, run regular dependency and security updates, and deliver quarterly performance and retention reviews. Our support packages include SLA windows, scheduled feature roadmaps, crash and security patching, and A/B experiment support for retention lifts and quarterly performance reviews. Product teams in Austin count on Appsters as the best app makers in Austin, as we monitor retention funnels and recommend prioritized remediations so your app stays secure, legally compliant, and aligned.",
        icon: <Process08 />,

    },
];

export const TestimonialContent = {
    subtitle: "For Some, It’s Testimonials.",
    title: "Why Clients Love Our Services",
    content: "At Appsters, our clients’ words reflect more than completed projects — they highlight journeys of transformation, innovation, and measurable success. Each review tells a story of trust earned, challenges solved, and visions brought to life. We don’t just deliver apps; we build lasting partnerships that fuel growth and create impact. Discover why businesses across industries continue to choose Appsters as their trusted app development partner.",
}

export const TestimonialSLIDES = [
    {
        logo: <ClutchLogo />,
        text: "Partnering with the team at Appsters felt like adding a full-scale product team overnight. The developers delivered a production-ready MVP in record time, maintaining high code quality. The overall clarity in communication and sprint-based updates gave our investors confidence at every milestone. The result was a 30% faster go-to-market and zero post-launch bugs.",
        name: "– Richard Neeson, Founder & CTO",
    },
    {
        logo: <ClutchLogo />,
        text: "We had outdated legacy systems slowing down our workflows for years. Appsters rebuilt our core platform, migrated data securely, and integrated AI-powered automation via both web and app interfaces. Our teams now save hundreds of hours per quarter. Their ability to align with strict enterprise standards while still meeting deadlines impressed our IT leadership. ",
        name: "– Samantha Van Merwe, VP Operations",
    },
    {
        logo: <TrustpilotLogo />,
        text: "Appsters took our compliance-heavy fintech idea and turned it into a secure, scalable app for our American clientele. Their app development experts anticipated regulatory roadblocks before they happened and kept everything audit-ready. We saw more than half the forecasted user adoption within the first 60 days of launch. Things have been smooth.",
        name: " – Anthony M. Derek, R&D Regional Manager",
    },
    {
        logo: <GoogleLogo />,
        text: "Finding developers who understand both code and gameplay is rare. Appsters nailed both. The sandbox game Appsters delivered was stable, smooth, and optimized for multiplayer. Post-launch, we scaled servers effortlessly because of their architecture choices. Players love the experience, and our engagement rates have increased by 25%, which is a solid figure.",
        name: "– Matty, Head Of Development",
    },
    {
        logo: <GoogleLogo />,
        text: "In healthcare, security and compliance cannot be compromised; we have had issues with regulations in past development and tech companies. Appsters built our telehealth platform with HIPAA-grade security and seamless video integrations. Their experts handled edge cases we hadn’t even considered, ensuring 99.9% uptime. Their approach turned a complex idea into a platform trusted by both doctors and patients.",
        name: "– Remi Patrick Jr., CXO.",
    },
]

export const SolutionsContent = {
    subtitle: "Solutions For Success",
    title: "Empowering Businesses With Smart Solutions for Lasting Success.",
    content: "Our custom-made and ready-to-deploy solutions help businesses overcome challenges, streamline operations, and drive sustained growth. From ERP to mobile apps, we’ve built solutions that deliver results — fast.",
}

export const SolutionsList = [
    {
        title: (<>Enterprise<br />Applications</>)
    },
    {
        title: (<>Enterprise<br />Resource Planning</>)
    },
    {
        title: (<>Financial<br />Management</>)
    },
    {
        title: (<>Supply Chain<br />Management</>)
    },
    {
        title: (<>Asset<br />Management</>)
    },
    {
        title: (<>Fleet<br />Management</>)
    },
    {
        title: (<>HR<br />Software</>)
    },
    {
        title: (<>eLearning<br />Software</>)
    },
    {
        title: (<>eCommerce<br />Management</>)
    },
    {
        title: (<>Mobile<br />Apps</>)
    },
    {
        title: (<>Content <br />Management</>)
    },
    {
        title: (<>Web<br />Portals</>)
    },
]

export const EngagementContent = {
    subtitle: "Engagement Models",
    title: "Flexible Engagement Models For Any App Development Need",
    content: "Our engagement models put you in command of cost, timelines, and talent. Choose a full team, tap into hourly expertise, or bring specialists onsite. We adapt instantly so your project never loses momentum.",
}

export const EngagementDetailList = [
    "Flexibility",
    "Control Over Team",
    "Team Availability",
    "Client Involvement",
    "Best for",
]

export const EngagementList = [
    {
        logo: < DedicatedTeamModel />,
        title: "Dedicated Team",
        detail: [
            "High",
            "Full control",
            "Full-time",
            "High",
            "Long-term Projects",
        ]
    },
    {
        logo: <FixedPriceModel />,
        title: "Fixed Price",
        detail: [
            "Low",
            "Limited control",
            "As Needed",
            "Low",
            "Defined Projects",
        ]
    },
    {
        logo: < HourlyPriceModel />,
        title: "Hourly Price",
        detail: [
            "Medium",
            "Moderate control",
            "On-demand",
            "Medium",
            "Small Tasks",
        ]
    },
    {
        logo: < OnsiteTeamModel />,
        title: "Onsite Team",
        detail: [
            "High",
            "Full control",
            "Full-time Onsite",
            "High",
            "Close Collaboration",
        ]
    }
]

export const IndustriesContent = {
    subtitle: "Industries We Serve",
    title: "One Codebase. Infinite Industries. Where Every Industry Finds Its Edge. ",
    content: "Our web, app, gaming, and AI solutions are built to perform, scale, and adapt while setting industry standards and redefining what’s possible for businesses everywhere.",
}

export const IndustriesSLIDES = [
    {
        title: "Healthcare",
        icon: <Healthcare />,
        txt: "We develop HIPAA-compliant healthcare apps that bridge doctors, patients, and data. From telemedicine to AI-powered diagnostics, our solutions improve workflows, reduce wait times, and empower smarter, faster decision-making. Every feature is designed to keep patient privacy airtight while driving measurable results for hospitals, clinics, and health-tech startups.",
        url: "/healthcare-app-development-services",
    },
    {
        title: "FinTech",
        icon: <FinTech />,
        txt: "We co-create secure, compliant fintech apps that simplify payments, investments, and trading. From blockchain-backed wallets to AI fraud detection, our solutions prioritize speed, trust, and transparency. We help financial institutions and startups scale confidently, turning complex transactions into seamless user journeys with powerful analytics and risk-free automation.",
        url: "/fintech-app-development",
    },
    {
        title: "Education",
        icon: <Education />,
        txt: "Our education apps gamify learning, power virtual classrooms, and track student progress. We integrate AR/VR modules, quizzes, and real-time assessments to boost engagement. Schools, universities, and ed-tech startups leverage our platforms to personalize teaching, improve retention, and make learning as interactive and rewarding as social media scrolling.",
        url: "/education-app-development",
    },
    {
        title: "Real Estate",
        icon: <RealEstate />,
        txt: "We design real estate apps that help buyers, sellers, and agents close deals faster. AR-powered property tours, AI-driven recommendations, and secure document management streamline every step. Our platforms keep listings fresh, negotiations quick, and users delighted, turning real estate buying and selling into a guided, data-driven experience.",
        url: "/real-estate-app-development-company",
    },
    {
        title: "Automotive",
        icon: <Automotive />,
        txt: "From fleet management dashboards to car rental apps, we digitize automotive operations. IoT sensors, real-time tracking, and predictive maintenance keep vehicles safer and downtime lower. Our solutions put dealerships, logistics providers, and automakers in the driver’s seat of efficiency, customer experience, and future mobility innovation.",
        url: "/automotive-software-development",
    },
    {
        title: "Music",
        icon: <Music />,
        txt: "We create streaming apps, artist marketplaces, and licensing solutions that let music businesses scale and monetize. AI-powered recommendations, offline playback, and fan engagement features keep listeners hooked. Our process covers rights management, secure distribution, and seamless playback to hit the perfect balance between creativity, tech, and revenue.",
        url: "/music-app-development-company",
    },
    {
        title: "Social Media",
        icon: <SocialMedia />,
        txt: "We build social media platforms that are scalable, sticky, and secure. AI-driven feeds, privacy-first chat systems, and live content features drive engagement. Our architecture ensures your platform can handle viral moments without crashing, giving creators, communities, and brands a digital stage to connect and grow.",
        url: "/social-media-app-development-company",
    },
    {
        title: "Logistics",
        icon: <Logistics />,
        txt: "We power logistics apps with route optimization, GPS tracking, and real-time inventory sync. Our solutions cut costs, eliminate bottlenecks, and ensure every delivery meets its deadline. Carriers, 3PLs, and warehouses rely on us to bring transparency, speed, and automation to complex supply chains across industries.",
        url: "/logistics-software-development",
    },
    {
        title: "eCommerce",
        icon: <ECommerce />,
        txt: "We build ecommerce apps that sell more with frictionless checkouts, AI product recommendations, and mobile-first design. Our solutions handle scale effortlessly, from flash sales to global launches. Businesses get powerful dashboards, while shoppers get a personalized, smooth, and secure experience that turns carts into conversions.",
        url: "/ecommerce-app-development",
    }
]

export const FaqsContent = {
    title: "Frequently Asked Questions",
}

export const FaqsList = [
    {
        title: " What makes Appsters a leading mobile app development company in Austin?",
        txt: (<p>Appsters stands out as a mobile app development company in Austin that leaders trust for technical precision and business outcomes. Our engineers specialize in scalable architecture, data security, and enterprise integrations, delivering apps that perform reliably across industries, from fintech to healthcare, with measurable ROI and zero compromise on performance.</p>)
    },
    {
        title: "How does Appsters ensure high performance in Android app development in Austin?",
        txt: (<p>Our Android app development in Austin focuses on modular architecture, optimized APIs, and consistent load testing. Appsters engineers build applications for scalability, responsiveness, and system-level efficiency,  ensuring your Android product delivers faster performance, minimal crashes, and full compliance with Google Play standards for long-term reliability.</p>)
    },
    {
        title: "Do Appsters’ iOS teams handle enterprise-grade application development in Austin?",
        txt: (<p>Yes. As an experienced iOS app development company in Austin, Appsters builds enterprise-level apps with Swift, SwiftUI, and Objective-C, backed by CI/CD pipelines and Apple’s Human Interface Guidelines. Our developers ensure seamless performance, data encryption, and compliance.</p>)
    },
    {
        title: " Why do startups choose Appsters among app development companies in Austin?",
        txt: (<p>Startups choose Appsters because we combine engineering depth with product strategy. Unlike typical app development companies in Austin, we help founders validate their MVPs through rapid prototyping, real-time analytics, and scalable backend systems,  reducing market risk while accelerating time-to-launch without sacrificing quality or maintainability.</p>)
    },
    {
        title: "How do Appsters’ mobile app developers in Austin maintain code quality?",
        txt: (<p>Our mobile app developers in Austin follow strict QA automation, peer code reviews, and continuous integration testing. Every release goes through load, penetration, and unit testing, ensuring cleaner builds, lower maintenance costs, and long-term stability across both Android and iOS platforms for enterprise-grade performance.</p>)
    },
    {
        title: "What industries benefit most from Appsters’ mobile application development services in Austin?",
        txt: (<p>Appsters delivers mobile application development services in Austin tailored to fintech, healthcare, logistics, education, and retail. Our domain specialists align each app’s architecture with compliance, security, and integration requirements, ensuring every digital product operates efficiently within complex ecosystems and drives measurable growth for clients.   </p>)
    },
]

export const IdeaCtaContent = {
    title: (<>Let’s Change<br /> The World With Your</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s Create An Amazing<br /> Mobile App Together!</>)
}








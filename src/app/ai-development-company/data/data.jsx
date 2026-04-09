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
const TAB1_5 = "/services/tech/tab1/05.webp";
const TAB1_6 = "/services/tech/tab1/06.webp";
const TAB2_1 = "/services/tech/tab2/01.webp";
const TAB2_2 = "/services/tech/tab2/02.webp";
const TAB2_3 = "/services/tech/tab2/03.webp";
const TAB2_4 = "/services/tech/tab2/04.webp";
const TAB2_5 = "/services/tech/tab2/05.webp";
const TAB2_6 = "/services/tech/tab2/06.webp";
const TAB2_7 = "/services/tech/tab2/07.webp";
const TAB3_1 = "/services/tech/tab3/01.webp";
const TAB3_2 = "/services/tech/tab3/02.webp";
const TAB3_3 = "/services/tech/tab3/03.webp";
const TAB3_4 = "/services/tech/tab3/04.webp";
const TAB3_5 = "/services/tech/tab3/05.webp";
const TAB3_6 = "/services/tech/tab3/05.webp";
const TAB4_1 = "/services/tech/tab4/01.webp";
const TAB4_2 = "/services/tech/tab4/02.webp";
const TAB4_3 = "/services/tech/tab4/03.webp";
const TAB4_4 = "/services/tech/tab4/04.webp";
const TAB4_5 = "/services/tech/tab4/05.webp";
const TAB4_6 = "/services/tech/tab4/06.webp";
const TAB5_1 = "/services/tech/tab5/01.webp";
const TAB5_2 = "/services/tech/tab5/02.webp";
const TAB5_3 = "/services/tech/tab5/03.webp";
const TAB5_4 = "/services/tech/tab5/04.webp";
const TAB5_5 = "/services/tech/tab5/05.webp";
const TAB5_6 = "/services/tech/tab5/06.webp";
const TAB6_1 = "/services/tech/tab6/01.webp";
const TAB6_2 = "/services/tech/tab6/02.webp";
const TAB6_3 = "/services/tech/tab6/03.webp";
const TAB6_4 = "/services/tech/tab6/04.webp";
const TAB6_5 = "/services/tech/tab6/05.webp";
const TAB6_6 = "/services/tech/tab6/06.webp";

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
    subtitle: "Powerful Artificial Intelligence Apps",
    title: "AI App Development Company Turning Data Into Decisions & Disruptive Products.",
    content: "As an expanding AI app development company, we focus on outcomes, not experiments. Our AI application development services deliver production-ready apps that automate operations, sharpen decision-making, and accelerate growth. From predictive models to intelligent assistants, we create AI app solutions that plug into existing ecosystems with zero disruption. Every build is designed to scale, adapt, and keep your business ahead in competitive, data-driven markets.",
    BannerLogos: BannerLogos,
    BannerBg: BannerBg,
    fromtitle: "Let’s Discuss Your AI product Idea",
    fromtext: "Share your AI product objectives with our experts and create your custom AI product."
}

export const CuttingedgeContent = {
    title: "AI Development Services That Redefine What Apps Of Today Can Do",
    text: "Appsters delivers AI development services that give enterprises and startups a first-mover edge to innovate faster, scale smarter, and reimagine their industries.",
    subtext: "Estimate Your AI Product Project’s Cost Now!"
}

export const CuttingedgeList = [
    {
        title: (<>AI Chatbot  <br />Development</>),
        txt: "Our AI chatbot developers build conversational platforms that go beyond scripted responses. These chatbots learn context, understand sentiment, and automate engagement at scale. From customer service to internal workflows, we create systems that improve efficiency and foster smarter, always-on interactions.",
        links: "",
    },
    {
        title: (<>Generative <br />AI</>),
        txt: "We design generative AI solutions that transform content creation and personalization. From automated copywriting to media generation, our platforms accelerate innovation while maintaining brand authenticity. Each model is trained for reliability, adaptability, and enterprise use, helping teams push creative and operational boundaries.",
        links: "",
    },
    {
        title: (<>Natural Language<br /> Processing</>),
        txt: "We co-engineer artificial intelligence apps powered by natural language processing to decode human communication. From multilingual support to contextual search, our NLP solutions streamline customer experiences and drive intelligent automation. The result is smarter interactions and more intuitive enterprise platforms.",
        links: "",
    },
    {
        title: (<>Machine<br /> Learning</>),
        txt: "As a machine learning development company, we build models that learn from every data point. Whether forecasting demand, detecting anomalies, or personalizing recommendations, our ML solutions deliver measurable accuracy and scale effortlessly with evolving business needs.",
        links: "",
    },
    {
        title: (<>Robotic Process<br />Automation</>),
        txt: "Our RPA systems amalgamate AI in robotics with process intelligence to remove repetitive manual tasks. From finance to operations, we design bots that execute with speed and precision, freeing teams to focus on strategy and innovation.",
        links: "",
    },
    {
        title: (<>Predictive<br />Analytics</>),
        txt: "Through advanced artificial intelligence development services, we deliver predictive analytics solutions that convert historical data into actionable insights for the future. From risk management to behavior analysis, businesses use our tools to act proactively, minimize uncertainty, and stay ahead of industry shifts.",
        links: "",
    }
]

export const caseStudiesContent = {
    title: "An AI App Development Portfolio Built Around Peak Performance.",
    text: "Our AI app development portfolio is built around production-grade apps solving real business problems at scale. Appsters focuses on measurable outcomes, rigorous engineering, and operational readiness to deliver reliable, secure solutions. Each project includes deployment planning, monitoring, and measurable KPIs for performance.",
}

export const caseStudiesList = [
    {
        title: "ValuateAI",
        description: "ValuateAI delivers predictive analytics and generative listing tools for the commercial real estate market. Its AI models provide dynamic property valuations and project risk assessments using satellite imagery and market data. The platform automates legal document processing via NLP, ensuring compliance and quick due diligence. AR-enabled virtual tours and agentic lead qualification boost investor engagement.",
        sliderImages: [slider1],
    },
    {
        title: "Mindstream ",
        description: "Mindstream utilizes voice emotion recognition and clinical AI models to offer personalized mental wellness support. Conversational AI provides in-the-moment guidance and crisis detection, linking to emergency protocols when high-risk language is identified. Wearable integration tracks biometric feedback (like HRV and sleep) to adapt CBT and DBT-based content.",
        sliderImages: [slider2],
    },
    {
        title: "UXShift",
        description: "UXShift is a generative AI design studio for marketers, turning text prompts into fully editable, multi-layered visual assets. It uses multimodal input to refine ideas and apply brand-kit consistency instantly. The platform offers one-click resizing for all social formats and AI-powered copywriting for campaigns, ensuring seamless workflow from concept to high-quality final media.",
        sliderImages: [slider3],
    },
    {
        title: "ForeDeliver",
        description: "ForeSight is an AI-driven supply chain optimization platform, providing real-time demand forecasting and automated scenario modeling. Its machine learning algorithms identify and predict bottlenecks, minimizing production downtime and inventory waste. Integrations span ERPs and WMS systems, with dashboards surfacing predictive routing and logistics efficiency.",
        sliderImages: [slider4],
    },
    {
        title: "Agrisquare",
        description: "Agrisquare delivers precision agriculture using satellite imagery and computer vision to monitor crop health and pest risk. Its AI models predict optimal irrigation schedules and fertilizer needs, reducing resource consumption. The platform features in-app drone control, yield forecasting, and seamless integration with smart farm equipment, boosting crop output and operational ROI globally.",
        sliderImages: [slider5],
    }
];

export const AppIdeaContent = {
    title: "The Velocity of Certainty. Start Now & Scale Your Future With Appsters.",
    text: "Forget 'developers' who only talk about AI. Hire AI app developers who actually build, secure, and integrate your models, turning ideas into measurable, bottom-line results.",
}

export const WhyChooseContent = {
    title: "Top 1% AI Talent in the USA: Secure, Adaptable, & Outcome-Driven AI App Development.",
    text: "Create disruptive apps with our powerful AI Application Development in the USA. Access elite, vetted developers who deliver secure, measurable business outcomes."
}

export const WhyChooseList1 = [
    {
        Icon: <WhyChooseIcon03 />,
        title: (<>AI Engineering <br /> Advantage</>),
        description: "Appsters assembles senior AI engineers and product designers to build production-grade models and pipelines. As an AI app development agency, we focus on reproducible training, model explainability, monitoring, and efficient CI/CD. Clients hire AI designers and AI app makers here because we turn models into reliable production services.",
    },
    {
        Icon: <WhyChooseIcon01 />,
        title: (<>Robust AI <br />Security</>),
        description: "We enforce secure data handling, encryption at rest and in transit, role-based access, and privacy-preserving model design. Auditable logs, CI/CD gating, and penetration testing secure deployments and provide compliance-ready assurance when you develop an AI app with continual monitoring.",
    }
];

export const WhyChooseList2 = [
    {
        Icon: <WhyChooseIcon04 />,
        title: (<>Guaranteed <br />Performance </>),
        description: "Long-term support keeps AI systems reliable. Post-launch services include model drift detection, scheduled retraining, patch management, and performance optimization. Clients partner with our top AI development company to ensure uptime, cost control, and roadmap alignment. Appsters also provides SLA-backed on-call rotations and logging.",
    },
    {
        Icon: <WhyChooseIcon02 />,
        title: (<>Rapid <br />Development </>),
        description: "Our optimized methodology delivers maximum development efficiency. We leverage platform-specific accelerators and shared component libraries to reduce redundant coding. This focus on AI-native development leads to faster time-to-market and lower initial project costs. Appsters delivers quicker deployment velocity and budget predictability.",
    }
];

export const ProcessContent = {
    title: "AI Development Process That Turns Disruptive Ideas Into Production Outcomes & Digital Products",
    text: (<>Our AI development process turns ideas into production systems with predictability and speed. Product thinking, data engineering, modeling, MLOps, and rigorous testing form a single pipeline. Early data audits expose risk, iterative prototyping validates assumptions, and production pipelines guarantee reproducibility. Our AI-focused app development teams accelerate reliable outcomes with clear ownership and transparent delivery milestones every sprint.</>)
}

export const ProcessTabs = [
    {
        title: "Research",
        content: {
            heading: "App Idea & Research",
            description:
                <>Appsters combines market signals, user needs, and data feasibility to define a clear problem statement and success metrics. Teams conduct domain interviews, competitor analysis, and data audits to assess model viability. Early mapping of inputs, outputs, latency, and compliance constraints clarifies technical risk. Research yields a prioritized backlog, a minimum viable data pipeline plus instrumentation, and measurable KPIs to guide model selection and product scope. </>,
            imgSrc: IMG,
        },
    },
    {
        title: "Strategy",
        content: {
            heading: "Strategic Planning & Consultation",
            description:
                "Our experts convert validated ideas into a delivery roadmap with milestones, resource allocation, and cost forecasts. Architects and product leads pick the technology stack, data platform, and model classes aligned to constraints. Integration points, API contracts, compliance checkpoints, and rollback procedures are scheduled. The plan defines sprint deliverables, acceptance criteria, QA gates, and escalation paths.",
            imgSrc: IMG,

        },
    },
    {
        title: "Prototyping",
        content: {
            heading: "Wireframing & Prototyping",
            description:
                <>At this stage, we convert product strategy into clickable experiences to validate user flows and model responses early. UX leads map interactions, error states, data inputs, and explainability surfaces so models present actionable outputs. Prototypes measure latency tolerances, edge case behavior, and user heuristics to inform UI adjustments before engineers commit code. Design deliverables include component libraries, accessibility checks, and integration specifications. </>,
            imgSrc: IMG,

        },
    },
    {
        title: "App Development",
        content: {
            heading: "App Development",
            description:
                "The app development stage turns architecture into production code using iterative sprints, peer review, and automated tests. Engineers implement microservices, containerized model serving, resilient data pipelines, and scalable APIs. CI CD creates reproducible artifacts while observability, tracing, and model metrics reveal performance and drift. Release strategies include canary deployments, automated rollback, and capacity planning. Security hardening and dependency controls reduce risk.",
            imgSrc: IMG,

        },
    },
    {
        title: "Quality",
        content: {
            heading: "Expert QA & Testing",
            description:
                "This particular stage combines automated test suites with domain-specific validation to protect production quality. QA engineers run unit, integration, system, and regression tests across device matrices and simulated networks. Model validation includes accuracy, bias audits, calibration, and adversarial checks to probe robustness. Performance benchmarks measure latency and throughput at scale for AI apps.",
            imgSrc: IMG,

        },
    },
    {
        title: "App Launch",
        content: {
            heading: "App Launch",
            description:
                <>The final stage coordinates build validation, store submissions, telemetry, and go-to-market readiness to maximize early adoption. Release engineers produce signed artifacts and coordinate platform submissions while product and marketing prepare feature briefs and assets. Feature flags and staged rollouts enable rapid mitigation and safe experimentation. Monitoring captures crashes, latency, adoption, and retention while analytics feed immediate learnings to the roadmap. </>,
            imgSrc: IMG,

        },
    },
    {
        title: "Deployment ",
        content: {
            heading: "Deployment",
            description:
                "Deployment readies infrastructure and services for production load and resilience. DevOps provisions cloud resources with infrastructure as code, configures autoscaling policies, and enforces network segmentation. Blue-green and canary rollouts reduce impact during upgrades while data migration scripts safeguard integrity. Observability collects logs, traces, and metrics for fast debugging. Secrets management and key rotation protect credentials.",
            imgSrc: IMG,

        },
    },
    {
        title: "Support",
        content: {
            heading: "Maintenance & Support",
            description:
                "The maintenance and support process keeps AI apps healthy and evolving. M/S teams monitor model drift, data quality, and system health with automated alerts. Scheduled retraining and model versioning prevent performance degradation, while security patching and dependency updates minimize exposure to vulnerabilities. SLA-backed on-call rotations, performance tuning, and cloud cost optimization ensure predictable operations.",
            imgSrc: IMG,

        },
    }
];

export const TechnologiesContent = {
    title: "Powering AI Apps With Full-Stack Precision For The Disruption Of Today & Tomorrow.",
    text: (<><p>Our AI app development agency combines app engineering, research, and scalable architecture. We integrate the best frameworks, languages, and platforms to accelerate delivery across all major ecosystems. Our team builds AI apps with iOS, Android, Flutter, React Native, and Kotlin, using cross-compatible toolchains for faster iteration. Backend intelligence is powered by TensorFlow, PyTorch, OpenAI APIs, and Vertex AI, all managed through Kubernetes and container orchestration for enhanced resilience.</p>
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
        txt: "Our AI risk management system transformed manual reviews into fully automated, data-driven approvals within six months. Appsters, a leading AI app development company, built a scalable infrastructure with transparent reporting, predictive insights, and real-time anomaly detection that saved over 400 engineer hours each quarter while improving compliance and operational speed.",
        name: "Davi Alex",
        position: "CTO",
        img: Joseph,
    },
    {
        txt: "Appsters’ AI app development services powered our recommendation engine, resulting in a 28% increase in conversions. Their engineers combined behavioral analytics, real-time personalization, and adaptive machine learning models to deliver a responsive, low-latency pipeline. Great teamwork!",
        name: "Jonathan Wellington",
        position: "Product Lead",
        img: RyanJaden,
    },
    {
        txt: "Our diagnostics platform, designed by Appsters’ AI app development experts, processes medical imaging data faster and more accurately than ever. Their team handled HIPAA compliance, model retraining, and deployment precision seamlessly. We achieved near real-time insights for radiologists and reduced manual analysis by over 60%, setting new standards in medical AI.",
        name: "Dr. Richard Hanna",
        position: "Manager Operations",
        img: KayleeSlone,
    }
    ,
    {
        txt: "The Appsters AI app development company team implemented reinforcement learning algorithms that boosted player engagement by 22%. Their predictive analytics and data modeling helped us personalize experiences dynamically. Well, that’s the technical part, and the best part? Our mobile survival game has become more realistic!",
        name: "Xiu Ling",
        position: "Gaming Operations",
        img: MauryoJones,
    },
    {
        txt: "Appsters' team built an adaptive multilingual NLP engine for our learning platform. Their AI application development services have created an intelligent tutoring system that identifies knowledge gaps and adapts lessons in real-time. Engagement rose within weeks, showing how AI can transform education through contextual learning and automation",
        name: "Rashia Walters",
        position: "PM Marketing",
        img: KateBullock,
    }
]

export const RisksContent = {
    title: (<>Take No Risks <Image src={RisksIMG01} alt="Bitswits Services" width={228} height={85} /> Create An MVP & Be Confident On <Image src={RisksIMG02} alt="Bitswits Services" width={228} height={85} />  Your App!</>),
    text: "Validate Your AI Vision with MVP Development & Save Big on Time & Money!"
}

export const OffersContent = {
    title: "End-To-End AI App Development For Sharper Performance & Future-Proofing.",
    text: (<>Experience AI App Development that is engineered for the future. Our Appsters teams handle the entire lifecycle from secure, explainable model training to low-latency deployment and future-proofing with automated drift detection. Partner with us to guarantee your AI apps deliver sharper performance and measurable ROI, ensuring your investment outlives the hype.</>)
}

export const OffersTabs = [

    {
        title: "AI App Development for SMBs",
        content: {
            heading: "AI App Development for SMBs",
            description:
                "For small and medium-sized businesses, our Custom AI Application Development turns challenges into opportunities. Appsters builds intelligent tools that automate processes, personalize customer experiences, and generate actionable insights. Our certified AI app developers design solutions that evolve in response to market shifts and changing user behavior. From predictive analytics to chatbots, we deliver scalable apps that deliver results.",
        },
    },

    {
        title: "AI App Development for Enterprises ",
        content: {
            heading: "AI App Development for Enterprises ",
            description:
                "Enterprises require precision, security, and scalability. Our AI app development services focus on integrating enterprise-grade systems with AI-powered decision frameworks that streamline operations and improve business outcomes. Appsters builds high-performance infrastructures designed for deep data processing, advanced analytics, and process automation. ",
        },
    },

    {
        title: "AI for Customer Support",
        content: {
            heading: "AI for Customer Support",
            description:
                "Customer service powered by AI means speed, accuracy, and personalization. Appsters’ AI app development company integrates NLP, voice recognition, and contextual learning into mobile apps that revolutionize how users interact with brands. Our chatbots handle real-time conversations, ticket routing, and emotion detection while reducing response time by up to 70%. We design and develop AI apps that continuously improve through feedback loops.",

        },
    },
    {
        title: "AI for QA & Testing ",
        content: {
            heading: "AI for QA & Testing ",
            description:
                "Quality assurance is now intelligent. Appsters integrates AI app development solutions to detect issues before they surface. Using predictive analytics and automated test generation, our tools simulate complex user interactions and system behaviors at scale. Our AI app developers build models that monitor performance anomalies and suggest real-time fixes. From regression testing to continuous validation, we reduce QA cycles by 45%.",

        },
    },
    {
        title: "AI for Reporting & Analytics",
        content: {
            heading: "AI for Reporting & Analytics",
            description:
                "Data drives decisions, and Appsters’ AI app development services turn raw numbers into strategic intelligence. We design analytics frameworks that process both structured and unstructured data to provide predictive insights, anomaly detection, and performance visualization. Our certified AI app developers embed real-time dashboards directly into mobile apps, empowering leaders with instant, actionable insights.",

        },
    },


];

export const FuelingContent = {
    title: "Accelerate Business Growth with Our Expansive AI Knowledge",
    text: "Enhance your business growth across industries with our expansive AI and machine learning knowledge, driving success and innovation.",
    subtitle: "Maximize Business Growth with Intelligent AI Systems!",
    subtext: "Implement AI models that provide actionable insights and drive smart decisions.",
    FuelingImg: FuelingImg
}

export const FuelingList = [
    {
        title: "AI & ML",
        text: "Our AI and ML solutions create adaptive systems that evolve with user interactions. Intelligent chatbots offer real-time support, learning from each interaction. For e-commerce, ML algorithms personalize product recommendations, enhancing satisfaction and sales."
    },
    {
        title: "Natural Language Processing (NLP)",
        text: "NLP enables machines to understand human language. In finance, it drives sentiment analysis to gauge market trends. In healthcare, NLP processes patient data, enhancing diagnostics and care through automated insights."
    },
    {
        title: "Predictive Analytics",
        text: "Predictive analytics models forecast future trends based on historical data. In retail, these models anticipate inventory needs, optimizing stock levels and reducing overhead costs. For logistics, predictive analytics enhances route planning, improving efficiency and reducing delivery times."
    },
    {
        title: "Computer Vision",
        text: "Computer vision technologies enable applications to interpret and analyze visual data. In manufacturing, it aids in quality control by detecting defects in real-time. For security, it enhances surveillance systems with automated recognition and monitoring capabilities."
    },
    {
        title: "Robotic Process Automation (RPA)",
        text: "RPA streamlines repetitive tasks by automating processes, freeing up valuable human resources. In finance, it handles routine tasks like transaction processing and compliance checks, improving efficiency and accuracy. In HR, RPA simplifies onboarding and employee data management, reducing administrative overhead."
    },
    {
        title: "Big Data Integration",
        text: "Big data technologies analyze vast information to uncover insights. In marketing, it drives targeted campaigns through consumer behavior analysis. In healthcare, it supports research by analyzing patient records, improving treatment strategies."
    }
];

export const CtaEstimatedContent = {
    subtitle: "AI Application Development For Diverse Industries & Stacks.",
    title: "Build, Scale, & Lead with AI.",
    text: (<>Leverage our AI app developers who engineer reliability into every line of code. Appsters has delivered over 120 AI-driven apps with a 97% on-time launch rate and 42% faster deployment cycles. We design for scalability, compliance, and real-time performance. </>),
    CtaEstimatedImg: CtaEstimatedImg
}

export const TechStackContent = {
    title: "Our Tech Stack for AI Development Services",
    text: "We select the tech stack which best aligns with your project goals!",
}

export const TechStackTabs = [
    {
        title: "Data Processing",
        content: [
            {
                heading: "Apache Hadoop",
                img: TAB1_1,
            },
            {
                heading: "Apache Spark",
                img: TAB1_2,
            },
            {
                heading: "Kafka",
                img: TAB1_3,
            },
            {
                heading: "Airflow",
                img: TAB1_4,
            },
            {
                heading: "TensorFlow Extended",
                img: TAB1_5,
            },
            {
                heading: "Pandas",
                img: TAB1_6,
            },
            {
                heading: "NumPy",
                img: TAB1_6,
            },
        ],
    },
    {
        title: "Frameworks",
        content: [
            {
                heading: "TensorFlow",
                img: TAB2_1,
            },
            {
                heading: "PyTorch",
                img: TAB2_2,
            },
            {
                heading: "Keras",
                img: TAB2_3,
            },
            {
                heading: "Scikit-learn",
                img: TAB2_4,
            },
            {
                heading: "XGBoost",
                img: TAB2_5,
            },
            {
                heading: "LightGBM",
                img: TAB2_6,
            },
            {
                heading: "CatBoost",
                img: TAB2_7,
            }
        ],
    },
    {
        title: "Processing",
        content: [
            {
                heading: "SpaCy",
                img: TAB3_1,
            },
            {
                heading: "Natural Language Toolkit",
                img: TAB3_2,
            },
            {
                heading: "Hugging Face Transformers",
                img: TAB3_3,
            },
            {
                heading: "GPT-3",
                img: TAB3_4,
            },
            {
                heading: "BERT",
                img: TAB3_5,
            },
            {
                heading: "Gensim",
                img: TAB3_6,
            },
        ],
    },
    {
        title: "Computer Vision",
        content: [
            {
                heading: "OpenCV",
                img: TAB4_1,
            },
            {
                heading: "TensorFlow Object Detection API",
                img: TAB4_2,
            },
            {
                heading: "YOLO",
                img: TAB4_3,
            },
            {
                heading: "Detectron2",
                img: TAB4_4,
            },
            {
                heading: "Dlib",
                img: TAB4_5,
            },
            {
                heading: "FaceNet",
                img: TAB4_6,
            },
        ],
    },
    {
        title: "Cloud",
        content: [
            {
                heading: "Google Cloud AI Platform",
                img: TAB5_1,
            },
            {
                heading: "AWS SageMaker",
                img: TAB5_2,
            },
            {
                heading: "Azure Machine Learning",
                img: TAB5_3,
            },
            {
                heading: "IBM Watson",
                img: TAB5_4,
            }, {
                heading: "Google Cloud Storage",
                img: TAB5_5,
            },
            {
                heading: "Amazon S3",
                img: TAB5_6,
            }
        ],
    },
    {
        title: "DevOps & MLOps",
        content: [
            {
                heading: "Kubernetes",
                img: TAB6_1,
            },
            {
                heading: "Docker",
                img: TAB6_2,
            },
            {
                heading: "Kubeflow",
                img: TAB6_3,
            },
            {
                heading: "MLflow",
                img: TAB6_4,
            },
            {
                heading: "Jenkins",
                img: TAB6_5,
            },
            {
                heading: "GitLab CI/CD",
                img: TAB6_6,
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
    title: (<>Let’s Change<br /> The World With Your</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s Create An <br /> Amazing App Together!</>)
}

export const FaqsContent = {
    title: "Frequently Asked Questions",
}

export const FaqsList = [
    {
        title: "What makes Appsters a leading AI application development company?",
        txt: "Appsters is an AI app development company delivering end-to-end AI application development services that merge innovation with performance, ensuring scalable, secure, and future-ready digital solutions for every business."
    },
    {
        title: "How long does it take to develop an AI-powered mobile app? ",
        txt: "Our AI mobile app development company typically delivers MVPs in 3–6 months, depending on complexity, integrations, and model training needs, without compromising precision or usability."
    },
    {
        title: "Do you offer AI app maintenance and post-launch support? ",
        txt: "Yes, our AI app development services include full-cycle maintenance, updates, and optimization to keep your AI application development solutions efficient, secure, and performance-optimized."
    },
    {
        title: "Can I hire AI developers for a specific project phase only? ",
        txt: "You can hire AI developers or entire teams for ideation, model design, or deployment, as our flexible engagement models fit startups and enterprises alike."
    },
    {
        title: "What industries can benefit most from AI application development services? ",
        txt: "From fintech and healthcare to gaming and logistics, our AI application development service transforms workflows, automates intelligence, and personalizes customer experiences at scale for measurable business growth."
    },
    {
        title: " How secure are the AI apps you build? ",
        txt: "As a trusted AI app making company, we implement advanced encryption, compliance protocols, and risk assessments in every AI app development project to ensure top-tier data protection."
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





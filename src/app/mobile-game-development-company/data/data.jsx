
// Bannar Images
const BannerLogos = "/mobile-game-development-company/bannerLogo.webp";
const BannerBg = "/mobile-game-development-company/bannerIMG.webp";

// services Images
const GameBg1 = "/mobile-game-development-company/services/GameBg01.webp";
const GameBg2 = "/mobile-game-development-company/services/GameBg02.webp";
const GameBg3 = "/mobile-game-development-company/services/GameBg03.webp";
const GameBg4 = "/mobile-game-development-company/services/GameBg04.webp";
const GameBg5 = "/mobile-game-development-company/services/GameBg05.webp";
const GameBg6 = "/mobile-game-development-company/services/GameBg06.webp";
const GameBg7 = "/mobile-game-development-company/services/GameBg07.webp";

//========= Testimonial Images
const TestiImg1 = "/services/reviwes/trustpilot.webp"
const TestiImg2 = "/services/reviwes/clutch.webp"
const TestiImg3 = "/services/reviwes/google.webp"
const KayleeSlone = "/services/reviwes/KayleeSlone.webp"
const RyanJaden = "/services/reviwes/RyanJaden.webp"
const Joseph = "/services/reviwes/Joseph.webp"
const MauryoJones = "/services/reviwes/MauryoJones.webp"
const KateBullock = "/services/reviwes/KateBullock.webp"

//========= Process Images
const ProcessIMG = "/services/process/tab01.webp"

//========= WhyChoose Images
import { WhyChooseIcon01, WhyChooseIcon02, WhyChooseIcon03, WhyChooseIcon04 } from "@/src/app/app-constants"

//========= ContentSec Images
const ContentSecIMG1 = "/mobile-game-development-company/imgContent1.webp"
const ContentSecIMG2 = "/mobile-game-development-company/imgContent2.webp"

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
const TAB3_1 = "/services/tech/tab3/01.webp";
const TAB3_2 = "/services/tech/tab3/02.webp";
const TAB3_3 = "/services/tech/tab3/03.webp";
const TAB3_4 = "/services/tech/tab3/04.webp";
const TAB3_5 = "/services/tech/tab3/05.webp";
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
const TAB6_7 = "/services/tech/tab6/07.webp";

//========= Fueling Images
const FuelingImg = "/services/cuttingEdge.webp"

//========= Blogs Images
const BlogsIMG01 = "/services/blogs/post-1.webp"
const BlogsIMG02 = "/services/blogs/post-2.webp"
const BlogsIMG03 = "/services/blogs/post-3.webp"
import Link from "next/link"



export const BannerData = {
    subtitle: "Interactive & Power-Packed Mobile Games",
    title: "Mobile Game Development Company Building Games For Real-World Scale",
    content: "Every mobile title competes for seconds of attention and gigabytes of patience. Appsters builds experiences that survive both. Appsters delivers mobile game development services that keep frame rates steady, inputs crisp, and loops worth repeating. Our game apps launch fast, read device limits correctly, and pair economy rules with fair progression. We test on real networks, profile on real hardware, and size content for real storage. You get a title that survives launch traffic, supports live events, and still feels great on a mid-range phone.",
    BannerLogos: BannerLogos,
    BannerBg: BannerBg,
}

export const ProjectdiscussContent = {
    title: "Let’s Make Your Game Project a Success Story!",
    text: "BitsWits assembles top animators, expert designers, project managers, and game writers to develop your game with precision and creativity!",
}

export const ServicesContent = {
    title: "Mobile Game Development Services Focused On Play, Performance & User Value.",
    text: "We design for touch, battery, and attention span. Our Mobile Game Development Services move from prototype to live ops with device testing, balance passes, and clear acceptance criteria so production feels predictable and the game stays fun.",
}

export const ServicesList = [
    {
        title: "2D Mobile Game App Development",
        txt: (<>Our 2D mobile game developers ship titles that feel snappy on day one and day ninety. We keep draw calls low, animation timings tight, and UI readable on small screens. Asset pipelines produce crisp art at tiny sizes. Input latency stays low even on busy scenes. You get levels that load instantly, loops that reward mastery, and content drops that slot into the same clean build system.</>),
        links: "",
        Img: GameBg1
    },
    {
        title: "3D Mobile Game App Development",
        txt: (<>Great 3D mobile game apps respect GPU budgets. We plan worlds with LOD, occlusion, and streaming baked in. Shaders stay efficient, physics matches device limits, battery strain is monitored and fixed before submission. The result is a visual profile that looks premium on flagships and still holds 60 fps on mid-tier devices with crowds, particles, and UI stacked together.</>),
        links: "",
        Img: GameBg2
    },
    {
        title: "Blockchain Game App Development",
        txt: (<>Our blockchain game app development service keeps play first and ownership verifiable. Wallet flows stay simple, contracts map to on-screen actions, and trades clear fast without freezing inputs. We stage to testnets, run audits, and leave dashboards that track liquidity and failed calls. Your team sees where rewards land and how they affect retention, then tunes with proof.</>),
        links: "",
        Img: GameBg3
    },
    {
        title: "AR/VR Game Development",
        txt: "Serious AR/VR game app development starts with comfort budgets. We pick interactions that remain stable across rooms, hands, and light conditions. Foveated rendering and smart culling keep frames steady. Onboarding teaches safely and fast, and asset sizes respect headset limits. Producers get scene checklists and test routes so content teams can add chapters without breaking comfort or tracking.",
        links: "",
        Img: GameBg4
    },
    {
        title: "Web3 Game Development",
        txt: "Our web3 mobile games hide complexity and show value. Wallets connect without friction, items carry clear metadata, and governance lives behind sane menus. We log the signals that matter, not every click. Players feel progress, and operators see cohort movement, floor swings, and fraud patterns in the same view. Changes land in phases, not as risky jumps.",
        links: "",
        Img: GameBg5
    },
    {
        title: "Metaverse Game App Development",
        txt: "Real Metaverse game development means persistence that behaves. Avatars, spaces, and items share one identity layer across clients. Movement feels natural, and ownership stays legitimate. We build creator tools that respect moderation and royalties. Events run to capacity without dropping participants. Studio teams gain controls for queues, limits, and recovery, then scale worlds with confidence.",
        links: "",
        Img: GameBg6
    }
];

export const TestimonialContent = {
    title: "Client Testimonials",
    TestiImg1: TestiImg1,
    TestiImg2: TestiImg2,
    TestiImg3: TestiImg3
}

export const TestimonialSLIDES = [
    {
        txt: "We’d tried two vendors before Appsters. Both showed pretty demos; neither survived soft launch. Appsters rebuilt our netcode, added honest telemetry, and gave us a release checklist our team actually follows. Their mobile game development agency mindset felt internal, not outsourced. The difference showed on day one: fewer crashes, cleaner frame times, and a build we could scale.",
        name: " Ryan Collins,",
        position: "Technical Director",
        img: Joseph,
    },
    {
        txt: "Our puzzle title needed polish and discipline. Appsters created style guides, shader budgets, and a level tuning playbook that our designers still use. Their mobile game development services didn’t stop at code; they coached our producers on staged rollouts and rollback paths. We crossed 100K installs in 30 days and kept ratings above 4.6 during two content drops.",
        name: "Sophia Greene,",
        position: " Product Manager",
        img: RyanJaden,
    },
    {
        txt: "Deadlines slipped for months until Appsters came in. They reorganized our sprints, automated device tests, and reworked asset pipelines so art landed cleanly. Their game app architecture let us add a new mode mid-production without derailing the schedule. What impressed me most was their candor: they told us what not to build, and they were right.",
        name: "Michael Torres,",
        position: "CEO",
        img: KayleeSlone,
    }
    ,
    {
        txt: "Appsters respected craft and constraints in equal measure. They kept our visual identity intact while shaving milliseconds off heavy scenes. The engineers from this mobile game development agency sat in our art reviews, caught readability issues early, and protected frame budgets. Launch week felt calm. Our daily active users grew, and support tickets dropped to a trickle.",
        name: "Lena Brooks,",
        position: "Head of Design",
        img: MauryoJones,
    },
    {
        txt: "We were fighting load times and network spikes. Appsters split hot paths, prewarmed caches, and tuned shader variants so the game finally felt quick. Among mobile game development companies, they’re the ones who think like operators. Downtime disappeared, analytics made sense, and our team stopped firefighting long enough to plan the next chapter confidently.",
        name: "Aaron Reed,",
        position: " CTO",
        img: KateBullock,
    }
]

export const GameCtaContent = {
    title: (<><h6>Scale Up Your Ideas into Engaging
        <span>Mobile Games!</span>
    </h6></>)
}

export const ContentSecContent = {
    title: "How We Build Engaging Player Communities for Your Mobile Game App",
    text: (<>
        <p>Our approach goes beyond game development; we focus on creating a dedicated player community for your mobile game. </p>
        <p>We implement strategies such as <strong>in-game events, social features,</strong> and <strong>loyalty programs</strong> to enhance player engagement and retention. </p>
        <p>These tactics help your game attract attention and maintain player interest, creating an interactive and compelling gaming experience.</p>
    </>),
    ContentSecIMG: ContentSecIMG1
}

export const ProcessContent = {
    title: "Mobile Game Solutions Engineered For Player Retention And Live Growth",
    text: (<>Our mobile game development difference shows after launch. We wire telemetry that people actually use, build pipelines your team can run, and design loops that still feel good at level fifty. </>),
}

export const ProcessTabs = [
    {
        title: "Eggi",
        content: {
            heading: "Eggi Peggi",
            description:
                "Eggi Peggi is a precision arcade puzzler built for quick hands and short sessions. Players tap, match, and chase the board while adaptive tuning stretches challenge without cheap spikes. A lightweight engine keeps frames steady on older phones and new flagships. Onboarding takes seconds. Day-one and day-seven targets stay in sight. The build fits tight data plans, which helps hyper-casual reach and fast monetization cycles.",
            imgSrc: ProcessIMG,
        },
    },
    {
        title: "Swift",
        content: {
            heading: "Swift Beat Play",
            description:
                "Swift Beat Play blends rhythm timing with clean tactile input. Players hit beats to open new tracks and tougher charts. A custom timing core trims input and audio delay so the sync feels right on real devices. The backend scales for live playlists, head-to-head rooms, and seasonal drops. It suits long arcs of engagement and music-friendly in-app purchases that people actually use.",
            imgSrc: ProcessIMG,

        },
    },
    {
        title: "Crocodile",
        content: {
            heading: "Crocodile Dundee",
            description:
                "Crocodile Dundee is an endless runner that grows with the player. Lush 3D lanes use procedural terrain and live weather, so each run feels new. Global boards and rotating goals keep competition moving. Efficient rendering and tuned shaders protect battery and frame rate. Controls stay crisp when scenes get busy. The loop stays fair and sticky across age groups without swollen downloads.",
            imgSrc: ProcessIMG,

        },
    },
    {
        title: "Jumping",
        content: {
            heading: "Jumping Penguin",
            description:
                "Jumping Penguin is a tap-and-play adventure made for broad reach. Collision maps are tight, jump arcs read cleanly, and rewards ramp in a way that feels earned. Asset delivery stays lean, so budget phones run it well. A dynamic scoring model pairs with adaptive difficulty and bright art. The result is simple fun that travels well and keeps people replaying.",
            imgSrc: ProcessIMG,

        },
    },
    {
        title: "Adventures",
        content: {
            heading: "Silemy’s Adventures",
            description:
                "Silemy’s Adventures is a side-scrolling fantasy RPG with layered quests and timing-based combat. Players collect rare gear, tune builds, and unlock deeper story beats as skill rises. The design favors mobile sessions but still supports bosses, trading, and exploration. Visual cues carry the narrative. Progression feels meaningful, and players come back to see what the next chapter asks of them.",
            imgSrc: ProcessIMG,

        },
    },
    {
        title: "Meteor",
        content: {
            heading: "Meteor Chase",
            description:
                "Meteor Chase is a sci-fi shooter running on real-time multiplayer code. Players weave through shifting star fields, avoid meteor swarms, and coordinate against hostile fleets. GPU-aware effects hold steady frame times. Matchmaking keeps latency in check during peak hours. Power-up routes, seasonal events, and ranked ladders create a competitive loop that rewards practice and repeat runs.",
            imgSrc: ProcessIMG,

        },
    },
    {
        title: "Pokerbust",
        content: {
            heading: "Pokerbust",
            description:
                "PokerBust is a social casino built on secure, scalable tables. Hand logic resolves quickly, and anti-cheat tools protect fairness without slowing play. The economy supports tournaments, live hosts, and progressive jackpots with clear odds and pacing. Smart matchmaking seats players at the right skill level. Chat and clubs keep people around for another set, not just another hand.",
            imgSrc: ProcessIMG,

        },
    },
];

export const WhyChooseContent = {
    title: "Trusted Mobile Game Development Company in the USA For 2.5x Faster Launches.",
    text: "Businesses choose Appsters for delivery that holds up under pressure. As a leading mobile game development company in the USA, we ship playable builds quickly, maintain high stability, and provide producers with clear signals. Our roadmaps tie features to outcomes, with mobile game solutions that survive real devices, real networks, and real launch weeks."
}

export const WhyChooseList1 = [
    {
        Icon: <WhyChooseIcon03 />,
        title: (<>Scalable <br />Architecture</>),
        description: "We design for peaks, not averages. As a mobile game development agency, we separate hot paths from background jobs, set frame and memory budgets early, and size backends for traffic spikes. Build pipelines stay reproducible. Indexers, caches, and CDN rules keep loads fast. Your team gets a clear capacity model, rollback steps, and targets you can actually manage on live days.",
    },
    {
        Icon: <WhyChooseIcon01 />,
        title: (<>Creative  <br />Systems </>),
        description: "Art, animation, and UI land in lockstep with gameplay. As a game development company, we keep style guides, shader budgets, and interaction rules inside the same spec the engineers read. Short review loops catch drift before it ships. The result is a look that holds up on small screens, reads instantly in play, and still meets performance goals on mid-tier hardware.",
    }
];

export const WhyChooseList2 = [
    {
        Icon: <WhyChooseIcon04 />,
        title: (<>Operational  <br />Readiness</>),
        description: "Launch calm beats launch hype. The best mobile game makers plan for outages, device variance, and store quirks. We run test matrices on real phones, wire alerts to owners, and stage cohorts for controlled rollouts. Producers see latency, crash rate, and queue health in one view. When something wobbles, the playbook tells you who fixes it and how fast.",
    },
    {
        Icon: <WhyChooseIcon02 />,
        title: (<>Evidence-Driven</>),
        description: "Decisions need data, not guesses. When you develop a game app with Appsters, every loop, offer, and level ships with instrumentation. Dashboards show cohort movement, crash-free sessions, ARPDAU, and session length by device class. You learn what keeps players, what earns, and what to cut. This turns roadmaps into accountable plans that scale without losing identity.",
    }
];

export const OffersContent = {
    title: "Mobile Game Platforms For Power-Driven Performance Every Day, Every Second. ",
    text: "Our platform work starts with how people actually play. Through custom game application development, we tune inputs, rendering, storage, and store rules so builds feel native everywhere. We profile on real hardware, not assumptions, then lock frame budgets and loading paths. The result is reach, retention, and performance without surprise tradeoffs.",
}

export const OffersTabs = [

    {
        title: "iOS",
        content: {
            heading: "iOS",
            description:
                <>On iOS, we design for speed, battery, and review rules. We optimize Metal shaders, input latency, and cold starts, then tune haptics and Game Center. We develop mobile game app builds that feel native on iPhone and iPad, pass submissions cleanly, and keep frame budgets honest during real events, not just lab tests. Crash monitoring reports issues before players notice.</>,
        },
    },

    {
        title: "Android",
        content: {
            heading: "Android",
            description:
                "Android demands respect for chipsets, screens, and OS skins. We profile GPU limits, memory churn, and network variance, then set streaming, LOD, and shader budgets accordingly. We build 3D mobile game app experiences that stay responsive on mid-tier devices, handle variable refresh rates, and survive spotty connectivity, while store compliance, privacy flags, and signing remain tidy. ",
        },
    },

    {
        title: "Cross-Platform",
        content: {
            heading: "Cross-Platform",
            description:
                "Cross-platform only works when the state stays consistent. We share gameplay cores, abstract inputs, and sync inventories across iOS, Android, and desktop via a single ledger. Our mobile game development services maintain rewards, offers, and savings, with CI safely promoting builds. One roadmap, one analytics view, fewer surprises, and faster updates that respect platform quirks without forking code. ",
        },
    },
    {
        title: "VR/AR",
        content: {
            heading: "VR/AR",
            description:
                "AR and VR reward discipline. We profile tracking stability, interaction comfort, and foveated rendering, then place verification tasks off the critical path. Through custom game application Development, scenes load quickly, hands feel precise, and motion stays gentle. Assets stream intelligently, and headset limits guide choices so immersion holds during events, not just in polished trailers. ",
        },
    },
    {
        title: "Metaverse",
        content: {
            heading: "Metaverse",
            description:
                "Metaverse work is about persistence, identity, and moderation. We wire avatars, parcels, and inventories to open standards, test transfers between spaces, and keep royalties intact. Teams develop mobile game app experiences that travel across worlds without manual claims. Moderation tools, rate limits, and analytics keep communities healthy while creators publish safely and operators trace provenance instantly. ",
        },
    },


];

export const ContentSecLGContent = {
    title: "Tech Stack That Drives Our Mobile Game Development Agency.",
    text: (<>
        <p>As a mobile game development agency, we ship on Unity and Unreal, wire Photon or Mirror for real-time play, and run PlayFab or custom Node.js backends for live ops. Compared with most mobile game development companies, we build toolchains that cut iteration time and prevent fragile handoffs. Our mobile game development services include subgraph indexing, CI with automated device runs, and profiling that keeps game apps fast on budget phones and flagships alike.</p>

    </>),
    BGIMG: ContentSecIMG2
}

export const IdeaCtaContent = {
    title: (<>Let’s Change<br /> The World With Your</>),
    text: (<>Bring in a senior crew that understands pacing, performance, and production reality. Hire mobile game developers who pair creative instincts with measurable outcomes so the game launches cleanly, improves weekly, and keeps players coming back for the right reasons.</>),
    formtitle: (<>Get a Custom Quote for <br /> Your Mobile Game Concept!</>)
}

export const TechStackContent = {
    title: "Our Mobile Game Development Tech Stack",
    text: "We utilize the latest technologies to develop jaw-dropping games for our clients!",
}

export const TechStackTabs = [
    {
        title: "Game Engines",
        content: [
            {
                heading: "Unity",
                img: TAB1_1,
            },
            {
                heading: "Unreal Engine",
                img: TAB1_2,
            },
            {
                heading: "Godot",
                img: TAB1_3,
            },
            {
                heading: "Cocos2d-x",
                img: TAB1_4,
            },
            {
                heading: "CryEngine",
                img: TAB1_5,
            },
            {
                heading: "Buildbox",
                img: TAB1_6,
            },
            {
                heading: "Phaser",
                img: TAB1_6,
            },
            {
                heading: "Construct",
                img: TAB1_6,
            },
            {
                heading: "PlayCanvas",
                img: TAB1_6,
            },
        ],
    },
    {
        title: "Languages",
        content: [
            {
                heading: "C# ",
                img: TAB2_1,
            },
            {
                heading: "C++",
                img: TAB2_2,
            },
            {
                heading: "GDScript",
                img: TAB2_3,
            },
            {
                heading: "Lua",
                img: TAB2_4,
            },
            {
                heading: "Python",
                img: TAB2_5,
            }
        ],
    },
    {
        title: "Graphics and Animation",
        content: [
            {
                heading: "Blender",
                img: TAB3_1,
            },
            {
                heading: "Maya",
                img: TAB3_2,
            },
            {
                heading: "Adobe Photoshop",
                img: TAB3_3,
            },
            {
                heading: "Adobe Illustrator",
                img: TAB3_4,
            },
            {
                heading: "Adobe After Effects",
                img: TAB3_5,
            },
            {
                heading: "Spine",
                img: TAB3_4,
            },
            {
                heading: "Three.js",
                img: TAB3_5,
            },
        ],
    },
    {
        title: "Sound and Music",
        content: [
            {
                heading: "FMOD",
                img: TAB4_1,
            },
            {
                heading: "Wwise",
                img: TAB4_2,
            },
            {
                heading: "Audacity",
                img: TAB4_3,
            },
            {
                heading: "Logic Pro X",
                img: TAB4_4,
            },
            {
                heading: "Ableton Live",
                img: TAB4_5,
            },
            {
                heading: "V",
                img: TAB4_6,
            },
        ],
    },
    {
        title: "IDEs",
        content: [
            {
                heading: "Visual Studio",
                img: TAB5_1,
            },
            {
                heading: "Rider",
                img: TAB5_2,
            },
            {
                heading: "Xcode",
                img: TAB5_3,
            },
            {
                heading: "Android Studio",
                img: TAB5_4,
            }, {
                heading: "MonoDevelop",
                img: TAB5_5,
            },
            {
                heading: "IntelliJ IDEA",
                img: TAB5_6,
            },
        ],
    },
    {
        title: "Testing and Analytics",
        content: [
            {
                heading: "TestFlight",
                img: TAB6_1,
            },
            {
                heading: "Firebase Test Lab",
                img: TAB6_2,
            },
            {
                heading: "Appium",
                img: TAB6_3,
            },
            {
                heading: "GameAnalytics",
                img: TAB6_4,
            },
            {
                heading: "Unity Analytics",
                img: TAB6_5,
            },
            {
                heading: "Google Analytics",
                img: TAB6_6,
            },
            {
                heading: "Photon",
                img: TAB6_7,
            }
        ],
    },
];

export const FuelingContent = {
    title: "Types Of Mobile Game Apps We Develop",
    text: "As a premier mobile game development agency, we create customized game apps for all genres and game types. Here are the types of mobile games we develop:",
    subtitle: "Build the Next Big Mobile Game with Expert Developers!",
    subtext: "Deliver smooth, immersive gameplay that keeps players hooked and coming back.",
    FuelingImg: FuelingImg
}

export const FuelingList = [
    {
        title: "Casual",
        text: "We develop engaging casual and hyper-casual games that are simple yet addictive. Our team creates these games for Android, iOS, and cross-platform environments, providing endless entertainment and broad reach to capture a diverse audience of casual gamers.."
    },
    {
        title: "Educational",
        text: "Educational games developed with engaging learning components keep players interested and motivated. We create games for clients by integrating fun and education, ensuring users remain engaged while learning new skills and knowledge."
    },
    {
        title: "Strategy",
        text: "Our strategy games provide users with challenging and engaging experiences that require strategic thinking and decision-making to succeed. We develop these games using cutting-edge technologies, offering immersive gameplay that captivates players. "
    },
    {
        title: "MMOG",
        text: "We develop massively multiplayer online games (MMOGs) that leverage modern trends and advanced technical components. Players can connect, compete, and collaborate in real time, enjoying a rich and immersive gaming experience that evolves with each interaction."
    },
    {
        title: "RPG",
        text: "We create role-playing games (RPGs) with captivating storylines, colorful game worlds, and deep character development. Our RPGs engage players through immersive narratives and dynamic gameplay, allowing them to explore rich environments and evolve their characters over time."
    },
    {
        title: "Social",
        text: "Our social games foster community and interaction, allowing participants to connect and engage with others. These games create common goals and shared experiences, building a strong sense of camaraderie and enjoyment among players."
    }
];

export const FaqsContent = {
    title: "Frequently Asked Questions (FAQs)",
}

export const FaqsList = [
    {
        title: " How does Appsters keep games stable across devices?",
        txt: "Appsters tests on real phones, not emulators. As a mobile game development company, we profile frame pacing, memory, thermals, and network jitter across device tiers. "
    },
    {
        title: " What sets your Game Application Development Services apart?",
        txt: "Appsters builds around evidence, not assumptions. Our Game application development services pair quick prototypes with telemetry, then promote only features that prove fun and stable. "
    },
    {
        title: "How do you handle security in production builds",
        txt: "As a Mobile game application development company, Appsters treats security as part of design. We use keystores, receipt validation, obfuscation, and runtime checks. Payment SDKs stay verified, secrets rotate on schedule, and builds ship smarter."
    },
    {
        title: "Can we hire developers who understand live-ops?",
        txt: "Yes. When you hire mobile game developers from Appsters, you get engineers comfortable with live-ops, telemetry, and staged rollouts. We wire alerts to owners, run A/B tests, and automate content drops, so updates land and players keep progress, purchases intact."
    },
    {
        title: "How do you scale backends for multiplayer?",
        txt: "As a game development company, Appsters designs backends for concurrency. We use scaling, queues, and caches to keep latency predictable. Matchmaking, leaderboards, and chat run on services, so spikes in one area do not crash another, and maintenance remains surgical."
    },
    {
        title: "Why do studios choose Appsters for long-term success?",
        txt: "Studios pick Appsters for shipped results. Our mobile game development services combine fast prototyping, measurable goals, and steady live ops. You get budgets, builds, and a playbook for updates. "
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


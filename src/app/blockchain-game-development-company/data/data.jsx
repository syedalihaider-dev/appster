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
const TAB3_1 = "/services/tech/tab3/01.webp";
const TAB3_2 = "/services/tech/tab3/02.webp";
const TAB4_1 = "/services/tech/tab4/01.webp";
const TAB4_2 = "/services/tech/tab4/02.webp";
const TAB4_3 = "/services/tech/tab4/03.webp";
const TAB4_4 = "/services/tech/tab4/04.webp";
const TAB5_1 = "/services/tech/tab5/01.webp";
const TAB5_2 = "/services/tech/tab5/02.webp";
const TAB5_3 = "/services/tech/tab5/03.webp";
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
    subtitle: "Robust Blockchain Game Development",
    title: "Blockchain Game Development Company For Scalable Ownership Systems",
    content: "At Appsters, our Blockchain game development leverages decentralized technologies to enable secure, transparent gameplay, allowing for digital ownership and an innovative monetization model. Experience Blockchain game development services that combine audited smart contracts, performant clients, and reliable off-chain services, enabling blockchain games to run fast, verify ownership, and withstand traffic spikes. We design token rules, custody flows, and marketplaces, then rehearse drops on testnets. Telemetry tracks liquidity, retention, and fraud, allowing operators to tune rewards with evidence and plan expansions without disrupting live players.",
    BannerLogos: BannerLogos,
    BannerBg: BannerBg,
    fromtitle: "Let’s Discuss Game Idea",
    fromtext: "Share your game objectives with our experts and create your custom game."
}

export const CuttingedgeContent = {
    title: "Blockchain Game Development Services Focused On Real-World Performance",
    text: "We design systems end-to-end. Our Blockchain Game Development Services align gameplay loops with token rules, settlement paths, and operator tooling, delivering smoother launches and maintaining growth without degrading performance.",
    subtext: "Estimate Your Game Project’s Cost Now!"
}

export const CuttingedgeList = [
    {
        title: (<>Custom Blockchain <br />Game Development</>),
        txt: (<>Our Blockchain game developers start with the core loop and economy map, then bind ownership and trading to mechanics that reward real play. We document token supply, sinks, and governance before code lands. Client logic stays responsive while on-chain records secure rights. We stage to testnets, run audits, and ship dashboards for liquidity, fraud, and cohort health so roadmaps adjust with data, not guesswork.
        </>),
        links: "",
    },
    {
        title: (<>Smart Contracts <br />Integration </>),
        txt: "Contracts must match on-screen events. Our engineers pair with Blockchain game animators and designers to wire escrow, manage royalties, handle staking, and craft clear visual triggers. We use standard interfaces, role-based admin, timelocks, and proxy upgrades with audit gates. Monitoring watches reorgs, failed calls, and unusual transfer patterns so operations react quickly and players keep trust in outcomes.",
        links: "",
    },
    {
        title: (<>AR/VR in <br />Blockchain Games </>),
        txt: "Immersion only works if ownership persists. We connect AR or VR scenes to tokenized items so interactions update state reliably in Blockchain games. Unity or Unreal handles tracking and rendering. Contracts record rarity and history. Indexers refresh inventories immediately. We test comfort budgets, device heat, and session length to keep frame rates steady while assets remain verifiably scarce.",
        links: "",
    },
    {
        title: (<>Unity/Unreal  <br />Engine Game Development </>),
        txt: (<>Performance and verification must coexist. We implement Blockchain game mechanics inside Unity or Unreal with componentized code, wallet flows, and marketplace UIs that feel native. Off-chain services cache reads for speed. On-chain transactions finalize sensitive actions. Build pipelines that enforce frame budgets, memory caps, and platform checks so releases remain fast on phones, desktops, and consoles.</>),
        links: "",
    },
    {
        title: (<>Custom Wallet <br />Integration </>),
        txt: "Wallet UX decides adoption. For Blockchain mobile games, we add biometric sign-in, session keys, fee previews, and recovery flows that pass store reviews. We support self-custody and hosted options, rate-limit sensitive actions, and batch noncritical writes. Analytics report failed transactions, abandoned carts, and risky devices so the team can fix friction and protect revenue quickly.",
        links: "",
    },
    {
        title: (<>Cross-Platform  <br />Blockchain Game App</>),
        txt: "Players expect continuity across devices. We build cross-platform Blockchain games with a single asset ledger, synchronized inventories, and input-aware UIs for mobile, desktop, and web. RPC routing, indexers, and caches keep state fresh without blocking input. Releases use staged cohorts and rollback paths, giving operators clear control while maintaining parity and performance in every environment. ",
        links: "",
    },
];

export const caseStudiesContent = {
    title: "Engineered Blockchain Game Solutions That Define Real-World Scale",
    text: "Appsters ships blockchain titles that stand up to real concurrency, real markets, and real audits. We design with operator needs in mind. Contracts map cleanly to on-screen events, wallet flows pass store reviews, indexers keep state fresh, and telemetry exposes liquidity, fraud, and retention, allowing teams to steer economies with evidence. Unlike typical frameworks, our systems match on-screen actions to verifiable records, keep latency low during events, and give operators real signals.",
}

export const caseStudiesList = [
    {
        title: "Time Wardens",
        description: "Time Wardens plays like a strategy title but runs like a live economy. We set rules first, not after launch. Supply, sinks, vesting, and governance all ship with change controls and timelocks. Indexers keep claims and inventories current without freezing input. Ops watch shard velocity, cohort retention, and price elasticity, then adjust rewards in planned windows. Players feel steady progress. Operators keep fairness and pace without shocking active factions.",
        sliderImages: [slider1],
    },
    {
        title: "Slipstream ",
        description: "Slipstream is a racer where parts, skins, and licenses carry real ownership. We kept laps fast by pairing low-latency matchmaking with Layer 2 settlement. Purchases finish safely. Batched writes cut fees while preserving finality. Telemetry drives car tuning and anti-cheat. Leaderboards use replay checks, so wins stick. Organizers run big events with predictable throughput, clear payout reports, and a dispute flow that does not stall the season.",
        sliderImages: [slider2],
    },
    {
        title: "Echonomics",
        description: "EchoNomics is a resource sim that takes market signals seriously. Crafting, routes, and staking feed an elastic supply model. We wired oracles for macro events and gave treasury owners real controls. A single console shows mint, burn, and liquidity movements, so design decisions rely on facts. Contracts enforce royalties and stop duplicate states across chains and client caches. Trades stay accurate. Scarcity adjusts with evidence, not guesses.",
        sliderImages: [slider3],
    },
    {
        title: "Prism",
        description: "Prism treats reputation as part of the asset. Every unit carries match proofs, upgrades, and lineage you can verify. Buyers see more than a rarity tag; they see what that unit did. Clients cache reads for speed and send sensitive actions on the chain for trust. Tournaments ship with seeded brackets, disconnect tracking, and an escalation path moderators actually follow. Competitive integrity remains clear and reviewable.",
        sliderImages: [slider4],
    },
    {
        title: "NexVault",
        description: "NexVault is an MMO that respects device switching. One identity, one wallet, one inventory across phone, desktop, and console. RPC routing and caches keep state fresh during peaks. Updates go out in staged cohorts with rollbacks ready. Ops dashboards surface churn, queue health, suspicious trades, and shard saturation. Teams react before players notice problems. The world keeps moving even on busy weekends and content drops.",
        sliderImages: [slider5],
    }
];

export const AppIdeaContent = {
    title: "Hire Blockchain Game Developers For Audit-Ready Releases.",
    text: "Appsters architects, audit, and scale blockchain titles built for live operations. Hire Blockchain game developers from Appsters to align gameplay, tokenomics, wallets, marketplaces, and ship staged rollouts with rollback gates for stable growth. We add telemetry and uptime as one system that is ready to build, monitor, and evolve complex decentralized ecosystems.",
}

export const WhyChooseContent = {
    title: "Blockchain Game Development Company in USA Delivering 3x Faster Results ",
    text: "Studios pick Appsters for delivery that holds under traffic. As a Blockchain game development company, we align gameplay, token rules, wallets, and marketplaces, then prove the stack with audits, testnets, and telemetry so releases become seamless and growth feels predictable. We run staged rollouts with feature flags, clear rollback paths, and on-call runbooks that teams actually use. "
}

export const WhyChooseList1 = [
    {
        Icon: <WhyChooseIcon03 />,
        title: (<>Scale-first <br /> Architecture</>),
        description: "We size for peaks, not averages. Engineers split on-chain proof from off-chain speed, cache hot reads, and route RPC intelligently. As a Blockchain game development agency, we profile early, document limits, and rehearse drop events to ensure concurrency does not disrupt gameplay. Operators get clear thresholds, rollback paths, and runbooks that teams actually follow.",
    },
    {
        Icon: <WhyChooseIcon01 />,
        title: (<>Transparent <br />Operations</>),
        description: "You see what the system is doing in real time. Dashboards surface latency, failed trades, fraud patterns, floor movement, and retention. When you develop a Blockchain game app with us, reports tie symptoms to root causes, so fixes land quickly. Producers make informed calls, investors get proof, and support works from facts, not guesses.",
    }
];

export const WhyChooseList2 = [
    {
        Icon: <WhyChooseIcon04 />,
        title: (<>Cross-team <br />Delivery</>),
        description: "Designers, economists, and engineers ship in one loop. The best Blockchain game makers on our side document token supply, sinks, and governance, then sync UI, wallet flows, and marketplace UX around those rules. Staged cohorts reduce risk. Feature flags keep rollouts reversible. Teams maintain parity across platforms without burning weekends.",
    },
    {
        Icon: <WhyChooseIcon02 />,
        title: (<> Security <br />Lifecycle</>),
        description: "Security stays active from the first commit. Our Blockchain game solutions use audited libraries, role-based keys, time locks, and monitored upgrades. CI gates releases and keeps rollbacks ready. Compliance checklists cover KYC, AML, and regional data rules. Incidents trigger runbooks with clear owners so uptime and player trust remain intact.",
    }
];

export const ProcessContent = {
    title: "Blockchain Game Development Process That Ships Reliable, Operable Games",
    text: (<>Our Blockchain game development process treats gameplay, contracts, and operations as one system. As a Blockchain game development company, we plan loops, token rules, wallets, and services together, then test on devices and testnets before the mainnet. This approach turns ideas into releases you can operate confidently through our structured Blockchain game development service pipeline.</>),
}

export const ProcessTabs = [
    {
        title: "Game",
        content: {
            heading: "Game Idea & Research",
            description:
                <>We turn concepts into evidence. As a Blockchain game development firm, we validate audience fit, chain selection, and cost to serve before code. We map the core loop, size risks, and agree on measurable KPIs so you can build your Blockchain game app with a clear path to launch and growth. We document assumptions and prove them with quick prototypes. Stakeholders sign off with numbers.</>,
            imgSrc: IMG,
        },
    },
    {
        title: "Designing",
        content: {
            heading: "Designing",
            description:
                "Design defines how players learn, earn, and return. Our Blockchain game development service turns wireframes into testable flows and token rules into balanced reward paths. We keep onboarding simple, economies fair, and inventory usable, then validate with short playtests so teams commit engineering effort where it matters. Each revision reduces the friction you would otherwise pay for later. We freeze specs only after they survive device tests.",
            imgSrc: IMG,

        },
    },
    {
        title: "Concept ",
        content: {
            heading: "Concept Art",
            description:
                "Visuals set identity and readability. We hire Blockchain game designers who plan silhouettes, palettes, and readability at gameplay scale. Concept packs align with economy tiers and metadata, so art survives minting and still looks right on phones and desktop. Style guides keep later content consistent and efficient. Art choices support rarity cues and UX clarity. What looks great in a trailer must still read in combat.",
            imgSrc: IMG,

        },
    },
    {
        title: "Asset ",
        content: {
            heading: "Asset Creation",
            description:
                <>Assets must look great and mint cleanly. Our Blockchain game makers model, rig, texture, and animate within budgets that run on real devices. We embed metadata and rarity, version every file, and validate export presets so items render fast, trade reliably, and remain compatible across engines and marketplaces. We test assets where they live: in scenes, under load. Every export includes provenance and rollback points.</>,
            imgSrc: IMG,

        },
    },
    {
        title: "Game",
        content: {
            heading: "Game Development",
            description:
                "We connect responsive play with verifiable ownership. To build your Blockchain game app, we implement core loops, audited contracts, wallet flows, and marketplace systems behind scalable services. Sensitive actions commit on the chain; speed-critical paths stay off-chain. Documentation and load drills keep launch windows predictable. Engineers share the same source of truth as producers. Every feature ships behind flags with a tested rollback. ",
            imgSrc: IMG,

        },
    },
    {
        title: "Testing",
        content: {
            heading: "Testing",
            description:
                "Quality goes beyond “it runs.” As a Blockchain game development company, we test gameplay, contracts, and economic stability under device and network variations. Automated suites catch regressions; security reviews harden flows; playtests surface friction before mainnet. The goal is simple: ship builds you can trust at scale. We simulate drops, outages, and latency spikes ahead of time. Results drive fixes, not meeting slides.",
            imgSrc: IMG,

        },
    },
    {
        title: "Deployment",
        content: {
            heading: "Deployment",
            description:
                "Releases move in controlled phases. Our Blockchain game development service promotes building from testnet to mainnet with monitored contracts, coordinated store updates, and observability from day one. We set up nodes, CDNs, and liquidity so trading feels instant, then stage cohorts with rollback ready. Launch days stay calm by design. Operators see green lights in dashboards before they press go.",
            imgSrc: IMG,

        },
    },
];

export const TechnologiesContent = {
    title: "Blockchain Game Application Development Using Unity, Unreal, L2, and CI/CD",
    text: (<>
        Appsters runs on a stack built for longevity. As one of the few Blockchain game development companies operating at enterprise scale, we combine Unity, Unreal, Solidity, Node.js, and Subgraph indexing with automated CI/CD pipelines. Our Blockchain game development services include modular SDKs, custom wallet APIs, and audit-ready architecture, so studios ship stable Blockchain game apps instead of one-off experiments. We deliver reproducible builds, measurable latency, and systems that any in-house team can later maintain without vendor lock-in.
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
        txt: "Appsters did more than deliver code. Their Blockchain game development services gave us predictable release cycles, clean telemetry, and stress-tested contracts. We scaled to 80K concurrent users without a single stalled transaction or wallet error. They understand what “ready for players” actually means in production. They also left us playbooks we still use. Our SREs say the dashboards cut triage time by half. ",
        name: "Ryan Coleman,",
        position: " CTO",
        img: Joseph,
    },
    {
        txt: "We’d worked with two Blockchain game development companies before, but none handled live ops like Appsters. Their dashboards, reporting, and economic modeling cut response times in half. Updates ship without panic now. It feels like having an internal platform team that already knows our product. Feature flags and staged cohorts kept launches calm. Finance finally trusts our weekly forecasts.",
        name: "Jenna Morales,",
        position: "Product Director",
        img: RyanJaden,
    },
    {
        txt: "Appsters helped us develop a Blockchain game app that could survive real traffic. The difference was in how they think: design, infrastructure, and economics were aligned from day one. No surprises at launch, no patch-week chaos, just steady growth and happy investors. Their handover was clean and complete. Our own team now ships confidently on the same pipeline.",
        name: "Ethan Grant,",
        position: " CEO",
        img: KayleeSlone,
    }
    ,
    {
        txt: "The engineers at Appsters are real operators. Their Blockchain game development agency built our cross-platform wallet system, trained our internal QA, and left behind tooling we still use daily. Every fix came with a reason, every decision with data. That’s rare and valuable. Even our producers quote their runbooks. Compliance checks stopped being a fire drill.",
        name: " Karen Brooks, ",
        position: " Head of Production",
        img: MauryoJones,
    },
    {
        txt: "Appsters doesn’t just build; they teach. Working with one of the best Blockchain game makers meant learning how to track liquidity, reward curves, and retention with clarity. We still use their templates to model new titles. Their frameworks didn’t just ship a game; they built our discipline. Balance meetings now start with metrics. Our events feel fair and perform better.",
        name: "Russell Donnelly,",
        position: "Game Economy Lead",
        img: KateBullock,
    }
]

export const RisksContent = {
    title: (<>Captivate Your <Image src={RisksIMG01} alt="Bitswits Services" width={228} height={85} /> Audience with Our Studio’s Masterfully <Image src={RisksIMG02} alt="Bitswits Services" width={228} height={85} /> Crafted Blockchain Games!</>),
    text: "Partner with our team to create a blockchain game with exceptional ROI"
}

export const OffersContent = {
    title: "Platforms We Ship Blockchain Games On, With Native Precision",
    text: "We deliver custom Blockchain game application development across the platforms your players actually use. Every build targets native performance, wallet safety, store compliance, and predictable state sync. We design, test on real devices, and release confidently, enabling studios to build Blockchain game apps that feel fast and keep ownership verifiable.",
}

export const OffersTabs = [

    {
        title: "iOS",
        content: {
            heading: "iOS",
            description:
                "We build Swift and Metal pipelines that meet Apple review without sacrificing security. Wallet flows use vetted SDKs, receipt validation, and on-device encryption. Gameplay stays responsive while ownership commitment on-chain in the background. Our Blockchain game development services align push updates, crash analytics, and feature flags so iOS releases stay steady and measurable.",
        },
    },
    {
        title: "Android",
        content: {
            heading: "Android",
            description:
                "Android needs respectful engineering across chipsets and OS skins. We optimize rendering, storage, and network calls, then protect purchases with Play Integrity and secure keystores. When we develop Blockchain game apps built for Android, transactions settle cleanly, device heat stays under control, and inventories refresh instantly, even on mid-tier hardware and variable networks.",
        },
    },
    {
        title: "Cross Platform",
        content: {
            heading: "Cross Platform",
            description:
                "Scale demands shared logic and consistent inventories. Using Unity or Unreal, we build Blockchain game apps that keep one asset ledger across mobile, desktop, and console. Contract calls batch smartly, RPC routes stay healthy, and UI adapts per input model. State remains consistent, performance budgets hold, and your roadmap moves as one codebase.",
        },
    },
    {
        title: "AR/VR",
        content: {
            heading: "AR/VR",
            description:
                "Immersion only works when frames stay smooth. We tune XR interaction, tracking stability, and foveated rendering, then bind owned items to in-world actions. Through our Blockchain game development services, asset verification runs behind the scenes, comfort budgets stay green, and players trade and equip 3D items without stutter or broken persistence.",
        },
    },
    {
        title: "Metaverse",
        content: {
            heading: "Metaverse",
            description:
                "Interoperability must be practical. We map avatars, parcels, and items to open standards, test transfers between worlds, and wire marketplaces that respect royalties. With Custom Blockchain Game Application Development, identity, moderation, and creator tools come built in, so operators govern fairly and players carry assets across spaces without manual claims or lost provenance.",
        },
    },

];

export const FuelingContent = {
    title: "Integrating Cutting-Edge Technologies in Blockchain Game Development ",
    text: "We capitalize on pioneering technologies to make extraordinary games that help your brand escalate to higher levels. Discover how these innovations amplify user experiences & improve game functionality.",
    subtitle: "Build the Future of Gaming with Blockchain-Powered Game Development!",
    subtext: "Design engaging, decentralized games that enhance player interaction and rewards.",
    FuelingImg: FuelingImg
}

export const FuelingList = [
    {
        title: "NFTs (Non-Fungible Tokens)",
        text: "NFTs introduce a revolutionary level of ownership and uniqueness to in-game items. Each token represents a distinct asset that players can trade, sell, or collect. This innovation creates dynamic revenue streams and cultivates a thriving in-game economy. "
    },
    {
        title: "Decentralized Finance (DeFi)",
        text: "DeFi seamlessly integrates financial services within the gaming ecosystem, encouraging players to earn, stake, or lend in-game currencies. This infusion of financial strategy enriches gameplay, transforming the gaming experience into a rewarding and multifaceted adventure."
    },
    {
        title: "Cross-Chain Compatibility",
        text: "Cross-chain technology ensures seamless interoperability between different Blockchain networks. Players can effortlessly transfer assets and interact across multiple games and platforms, breaking down barriers and expanding the gaming ecosystem. "
    },
    {
        title: "AI & ML",
        text: (<>AI and ML technology play a key role in creating intelligent, adaptive game environments. Through <Link href='/ai-development-company'>AI app development</Link>, we enhance NPC behavior, making interactions more realistic and dynamic. These technologies also improve player experiences and enable predictive analytics, leading to more engaging and tailored gameplay.</>),
    },
    {
        title: "Decentralized Autonomous Organizations (DAOs)",
        text: "DAOs enable players to participate in the governance and decision-making processes of their favorite games. By utilizing Blockchain technology, DAOs ensure transparency and fairness in how games are developed and managed. "
    },
    {
        title: "Metaverse Integration ",
        text: "Metaverse technologies create expansive, interconnected virtual worlds. Players can experience immersive social interactions and economies, providing a seamless, engaging experience that transcends traditional gaming boundaries. Connect with our Blockchain game development company to launch your game. "
    }
];

export const CtaEstimatedContent = {
    subtitle: "From Prototype to Player Scale",
    title: "Secure Multi-Chain Blockchain Game Development",
    text: (<>Our Blockchain game builders combine production discipline with blockchain fluency. We architect gameplay, contracts, and infrastructure together so launches run cleanly, scale under pressure, and keep players’ trust. Every release leaves behind documentation, tooling, and monitoring that make the next update easier, faster, and safer to deploy.</>),
    CtaEstimatedImg: CtaEstimatedImg
}

export const TechStackContent = {
    title: "Our Tech Stack for Blockchain Game Development ",
    text: "As a leading Blockchain development company, we have proficiency with the latest technologies. ",
}

export const TechStackTabs = [
    {
        title: "Frontend",
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
                heading: "WebGL",
                img: TAB1_3,
            },
            {
                heading: "Three.js",
                img: TAB1_4,
            }
        ],
    },
    {
        title: "Backend ",
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
                heading: "Golang",
                img: TAB2_3,
            },
            {
                heading: "C++",
                img: TAB2_4,
            }
        ],
    },
    {
        title: "Mobile Development",
        content: [
            {
                heading: "Unity",
                img: TAB3_1,
            },
            {
                heading: "Unreal Engine",
                img: TAB3_2,
            }
        ],
    },
    {
        title: "Database Management",
        content: [
            {
                heading: "IPFS",
                img: TAB4_1,
            },
            {
                heading: "MongoDB",
                img: TAB4_2,
            },
            {
                heading: "AudaFirebase Realtime Databasecity",
                img: TAB4_3,
            },
            {
                heading: "PostgreSQL",
                img: TAB4_4,
            }
        ],
    },
    {
        title: "Cloud",
        content: [
            {
                heading: "AWS",
                img: TAB5_1,
            },
            {
                heading: "Google Cloud",
                img: TAB5_2,
            },
            {
                heading: "Microsoft Azure",
                img: TAB5_3,
            }
        ],
    },
    {
        title: "Testing & QA",
        content: [
            {
                heading: "Truffle",
                img: TAB6_1,
            },
            {
                heading: "Hardhat",
                img: TAB6_2,
            },
            {
                heading: "MythX",
                img: TAB6_3,
            },
            {
                heading: "Mocha",
                img: TAB6_4,
            }
        ],
    },
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
        txt: "We build social media platforms that are scalable, sticky, and secure. AI-driven feeds, privacy-first chat systems, and live content features drive engagement. Our architecture ensures your platform can handle viral moments without crashing, giving creators, communities, and brands a digital stage to connect and grow..",
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
    title: (<>The Market Never Waits. <br />Are You Ready to Launch?</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s Create An <br /> Amazing App Together!</>)
}

export const FaqsContent = {
    title: "Frequently Asked Questions (FAQs)",
}

export const FaqsList = [
    {
        title: " How do you size on-chain vs off-chain correctly?",
        txt: "We profile player flows, price critical actions on chain, and keep latency-sensitive logic off chain. Our Blockchain game application development services use caches, indexers, and finality checks so inventories refresh instantly while ownership remains verifiable and fees stay predictable."
    },
    {
        title: " Which chains and wallets do you support natively?",
        txt: `Ethereum, Polygon, Solana, and L2s for scale. MetaMask, WalletConnect, Coinbase Wallet, plus custom providers. As a Blockchain game application development company, we document RPC routing, rate limits, and recovery flows so sign-ins, purchases, and transfers stay reliable under peak load.`
    },
    {
        title: "How do you keep launches smooth?",
        txt: "Feature flags, canaries, and staged cohorts. Our Blockchain game development services promote builds through testnets, run audits, and gate releases on telemetry greenlights. Rollback paths are rehearsed. Operators watch latency, failed trades, and liquidity in real time to act quickly."
    },
    {
        title: "Can we extend an existing title without a rebuild?",
        txt: "Usually, as a Blockchain game development company, we inventory contracts, indexers, and SDK versions, then design upgrade or adapter layers. We protect live inventories, preserve entitlements, and phase changes through cohorts so players keep progress while systems modernize. "
    },
    {
        title: "How do you prevent economic inflation and bot abuse?",
        txt: (<>
            We cap supply, pace emissions, and add sinks tied to play. Our teams hire Blockchain game developers who implement device signals, rate limits, proof-of-play checks, and treasury controls. Designers then tune rewards against real liquidity and churn, not guesses.
        </>)
    },
    {
        title: "What post-launch support do you provide?",
        txt: (<>
            Live-ops, patches, contract versioning, and growth experiments. Appsters, among the top Blockchain game makers, monitors cohorts, ARPU, crash-free sessions, and market depth. We schedule seasonal drops, run audits, and keep compliance current so the game evolves without risking player trust.
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
    },
    {
        title: "Most Popular Mobile App Development Frameworks",
        txt: "You know how people are glued to their phones these days? Apps are like, everywhere. From booking a cab to buying movie tickets, chatting with friends, and nearly everything else in between, we just can’t do without apps.",
        cat: "Mobile App Development",
        img: BlogsIMG02,
        links: "https://www.bitswits.co/blog/mobile-app-development-frameworks",
        date: "August 13,2024"
    },
    {
        title: "Everything You Need to Know About Application Development Life Cycle",
        txt: "Frustration with clunky interfaces is a thing of the past. The seamless apps that you are using today for food delivery, banking, or even socializing are created after a well-worked-up development process.",
        cat: "Mobile App Development",
        img: BlogsIMG03,
        links: "https://www.bitswits.co/blog/application-development-life-cycle",
        date: "July 10,2024"
    }
]





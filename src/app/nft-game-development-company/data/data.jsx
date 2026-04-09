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
    subtitle: "Play-To-Earn NFT Game Development",
    title: "NFT Game Development Company Building Player-Owned Game Worlds ",
    content: "Players care about value, studios care about stability. We design NFT game development services that turn assets into utility, not noise. You get audited contracts, fast marketplaces, and clear telemetry for retention, trading volume, and fraud signals. Our teams ship NFT games that load quickly, scale under traffic, and keep ownership verifiable. At Appsters, we take a tech-first, results-driven approach to NFT app development and let the numbers speak for themselves.",
    BannerLogos: BannerLogos,
    BannerBg: BannerBg,
    fromtitle: "Let’s Discuss Game Idea",
    fromtext: "Share your game objectives with our experts and create your custom game."
}

export const CuttingedgeContent = {
    title: "NFT Game Development Services That Power Measurable Player Value",
    text: "Every service below plugs into a full NFT pipeline from design, contracts, infrastructure, telemetry, and live-ops. You get production assets, verified ownership, and tools that operators can run without guesswork.",
    subtext: "Estimate Your Game Project’s Cost Now!"
}

export const CuttingedgeList = [
    {
        title: (<>Full Cycle NFT  <br />Game Development</>),
        txt: "Our NFT game developers drive the concept to live release. We map core loops, model token supply and sinks, and implement contracts using standards like ERC-721 and ERC-1155. Engineers align on-chain settlement with off-chain gameplay so input feels instant while ownership stays verifiable. We stage to testnets, run audits, and launch with dashboards for trading, retention, and abuse detection. ",
        links: "",
    },
    {
        title: (<>2D/3D NFT  <br />Art Creation</>),
        txt: "Our NFT game animators and artists produce mint-ready assets that perform on phones and desktops. Models ship with atlas textures, LODs, and animation clips sized for real-time engines. Every asset includes validated metadata and rarity tiers. We maintain source files, export presets, and a review workflow so art, contracts, and marketplaces stay in sync without rework. ",
        links: "",
    },
    {
        title: (<>Cross-Platform Integration <br /> For NFT Games</>),
        txt: "One inventory across every device. We standardize auth, wallets, and asset sync so cross-platform NFT games behave consistently on mobile, desktop, and web. Rendering pipelines stay aligned, and state refresh is predictable after every trade. Teams avoid duplicate builds, cut maintenance, and grow reach without sacrificing performance targets on lower-end hardware.",
        links: "",
    },
    {
        title: (<>NFT Game Assets <br />Creation</>),
        txt: "We create game-ready NFT mobile games with supply caps, provenance, and upgradable attributes. Pipelines include visual tests, metadata validation, and version control that tracks every edit. Items connect to in-game effects and marketplace rules at mint time. Creators get simple publishing tools, and operators enforce royalties and scarcity without manual policing. ",
        links: "",
    },
    {
        title: (<>NFT Gaming <br />Platform Development</>),
        txt: "Launch and operate multiple NFT-driven titles from one control plane. We build a complete gaming platform for NFTs: identity layers, economy dashboards, payment gateways, and in-game analytics. We add telemetry for cohorts, ARPU, and liquidity so teams react quickly to market shifts. These systems allow studios to launch, monitor, and evolve multiple games within a shared ecosystem. Our expertise in smart contract orchestration ensures that each project runs smoothly under high concurrency and real-time trade conditions.",
        links: "",
    }
]

export const caseStudiesContent = {
    title: "Portfolio: NFT Games Engineered for Real Economies",
    text: "We build NFT titles that stand up to real traffic and real markets. Our focus is real utility, including verifiable ownership, wallet onboarding, fluid trading, and redeemable economics. Operators get clear dashboards for liquidity, fraud, and retention. The difference: production discipline from day one, not experiments that collapse under load.",
}

export const caseStudiesList = [
    {
        title: "Crypto Bash",
        description: "A competitive brawler where every fighter is an owned asset. Players mint, train, and trade characters, then earn ranked rewards tied to in-match outcomes. We built the combat loop, marketplace hooks, and on-chain settlement around standard tokens. Leaderboards use anti-cheat checks and replay validation. Operators track drop cadence, floor movement, and balance shifts in one panel.",
        sliderImages: [slider1],
    },
    {
        title: "Star Lock",
        description: "A space strategy game with player-owned planets, fleets, and resources. Ownership follows top token standards with clean metadata. We designed the resource model, creating rules and governance voting. Cross-chain bridges move assets without breaking play. The live system measures scarcity, travel times, and conflict frequency, allowing designers to tune the economy with evidence.",
        sliderImages: [slider2],
    },
    {
        title: "DriftCity",
        description: "Mobile racing with buy, upgrade, and rent mechanics for cars and skins. We implemented telemetry-based tuning, safe rentals, and quick wallet sign-ins. Inventory updates appear instantly after trades. Time-trial events run on scheduled windows to avoid crowds. The result is a fast, phone-first NFT racer that keeps performance budgets intact and ownership visible.",
        sliderImages: [slider3],
    },
    {
        title: "The Forge",
        description: "Co-op crafting focused on forging, merging, and trading weapons. Items evolve through recipes and player milestones. We wrote contracts for evolution steps, rarity rolls, and provenance. Oracles trigger time-based events. Creators publish blueprints through a review queue so drops stay high quality. Guild vaults let groups manage shared assets with clear audit trails.",
        sliderImages: [slider4],
    },
    {
        title: "TokenArena",
        description: "Short, skill-based matches with token rewards tied to performance. We built the matchmaker, payout logic, and staged releases across regions. Rewards land through claim queues to protect gas costs. Anti-farm rules cap repeats and detect bot patterns. Tournament organizers receive payout reports and dispute tools to ensure prizes remain credible at scale.",
        sliderImages: [slider5],
    }
];

export const AppIdeaContent = {
    title: "Hire NFT Game Developers Who Build Market-Proof Titles.",
    text: "Work with engineers who understand both blockchain architecture and gameplay balance. Appsters’ NFT specialists design clean economies, stable code, and post-launch support that helps your title grow without chaos.",
}

export const WhyChooseContent = {
    title: "NFT Game Development Company in the USA – Audit-Ready, 99.9% Uptime, & Scalable.",
    text: "Appsters architects and operates at scale. As an NFT game development agency, we align gameplay, tokenomics, and infrastructure, then prove them under load with audits, testnets, and telemetry so launches land clean and grow reliably. "
}

export const WhyChooseList1 = [
    {
        Icon: <WhyChooseIcon03 />,
        title: (<>Scale <br /> Engineering </>),
        description: "We make progress visible. The best NFT game makers on our team publish sprint goals, testnet milestones, and cost forecasts. You see contract diffs, audit findings, and load-test results in one place. Operator dashboards report cohorts, ARPU, and liquidity shifts. Clear signals let product owners decide quickly and keep release trains on time. This transparency removes launch surprises and keeps stakeholders aligned on evidence, not guesses.",
    },
    {
        Icon: <WhyChooseIcon01 />,
        title: (<>Transparent  <br /> Delivery</>),
        description: "We make progress visible. The best NFT game makers on our team publish sprint goals, testnet milestones, and cost forecasts. You see contract diffs, audit findings, and load-test results in one place. Operator dashboards report cohorts, ARPU, and liquidity shifts. Clear signals let product owners decide quickly and keep release trains on time. This transparency removes launch surprises and keeps stakeholders aligned on evidence, not guesses.",
    }
];

export const WhyChooseList2 = [
    {
        Icon: <WhyChooseIcon04 />,
        title: (<>Cross-Functional  <br />Build</>),
        description: "Designers, engineers, and economists ship in one loop. When you develop an NFT game app with us, every feature passes design review, security checks, and economy validation before integration. We unify wallets, identity, and marketplace UX, then stage cohorts to de-risk updates. Feedback cycles stay short, and approved changes reach players quickly. The result is less rework and consistent feature parity across platforms.",
    },
    {
        Icon: <WhyChooseIcon02 />,
        title: (<>Security <br />Lifecycle </>),
        description: "Security stays active from day one. Our NFT game solutions use audited libraries, strict key management, and monitored upgrades. We gate releases through CI with rollbacks, keep incident runbooks current, and rotate secrets on schedule. Compliance checklists cover KYC, AML, and regional data rules, so operations stay stable as the audience grows. Your team receives clear remediation steps and proof of control for audits.",
    }
];

export const ProcessContent = {
    title: "NFT Game Development Process For Performance, Ownership, and Reliability",
    text: (<>Our NFT game development process turns ideas into stable releases. As an NFT game development company, we align design, token rules, and infrastructure, then validate on testnets and real devices, so your NFT game app has predictable performance and clean operations.
    </>),
}

export const ProcessTabs = [
    {
        title: "Game Idea",
        content: {
            heading: "Game Idea & Research",
            description:
                "We start by proving the concept with data. As an NFT game development firm, we test desirability, feasibility, and viability in parallel: audience fit, chain and wallet choices, and cost-to-serve. The outcome is a scoped core loop, a realistic timeline, and a clear risk map that lets stakeholders greenlight production with confidence.",
            imgSrc: IMG,
        },
    },
    {
        title: "Designing",
        content: {
            heading: "Designing",
            description:
                "Design defines how players learn, earn, and stay. Each NFT game development service sprint turns wireframes into testable flows and token rules into balanced reward paths. We shape onboarding, inventory, marketplace, and upgrade logic so the first session feels friendly and depth reveals gradually. By the end, you hold a validated blueprint ready for engineering.",
            imgSrc: IMG,
        },
    },
    {
        title: "Concept Art",
        content: {
            heading: "Concept Art",
            description:
                "Art direction sets the tone and readability. We hire NFT game designers who design for beauty and for engine limits, ensuring silhouettes read at gameplay scale, palettes carry rarity cues, and styles compress cleanly. Concept packs coordinate with 3D, animation, and economy, so visual identity supports metadata, tiers, and long-term content plans from the start. ",
            imgSrc: IMG,
        },
    },
    {
        title: "Asset",
        content: {
            heading: "Asset Creation",
            description:
                "Assets must look great and mint cleanly. Our NFT game makers build models, rigs, textures, and animations sized for phones and desktops, with metadata that maps to ERC-721 or ERC-1155. We version every file, run compression checks, and validate rarity tags so items render fast, trade reliably, and stay future-proof across engines and marketplaces.",
            imgSrc: IMG,
        },
    },
    {
        title: "Game",
        content: {
            heading: " Game Development",
            description:
                "We connect responsive gameplay with verifiable ownership. To build your NFT game app, we implement core loops, audited contracts, wallet flows, and a marketplace system backed by a scalable backend. Client code stays lean, off-chain services handle speed, on-chain records secure rights. We document integrations and run load drills so launch windows stay predictable.",
            imgSrc: IMG,
        },
    },
    {
        title: "Testing",
        content: {
            heading: "Testing ",
            description:
                "Quality is more than “it runs.” As an NFT game development company, we test code paths, contract behavior, and economy stability under real device and network conditions. Automated suites catch regressions, security reviews harden key flows, and playtests surface friction before mainnet. The goal is simple: ship builds you can trust at scale.",
            imgSrc: IMG,
        },
    },
    {
        title: "Deployment",
        content: {
            heading: "Deployment",
            description:
                "Releases move in controlled phases. Each NFT game development service rollout promotes from testnet to mainnet with monitored contracts, coordinated store updates, and observability from day one. We configure nodes, CDNs, and liquidity so trading feels instant, then stage cohorts and keep rollback paths ready so growth never risks stability.",
            imgSrc: IMG,
        },
    },
];

export const TechnologiesContent = {
    title: "Tech Stack That Powers Every Build At Our NFT Game Development Agency ",
    text: (<><p>Appsters’ technology stack combines modern game engines, secure blockchain frameworks, and real-time analytics pipelines. Appsters ships on Unity and Unreal with Solidity, Node.js, and Layer 2 for speed and cost control. We wire telemetry, fraud checks, and CI so builds stay stable. As one of the trusted NFT game development companies, we cover wallet flows, marketplaces, and audited contracts for play-to-earn NFT games that scale, recover fast, and operate with clear, operator-grade dashboards and alerts. Our NFT game development services workflow unites creative freedom with enterprise-grade deployment pipelines designed for long-term operation and measurable growth.</p>
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
        icons: TechIcon02.src,
    },
    {
        title: "Flutter",
        icons: TechIcon03.src,
    },
    {
        title: "Kotlin",
        icons: TechIcon04.src,
    },
    {
        title: "Objective C",
        icons: TechIcon05.src,
    },
    {
        title: "ionic",
        icons: TechIcon06.src,
    },
    {
        title: "React Native",
        icons: TechIcon07.src,
    },
    {
        title: "Swift",
        icons: TechIcon08.src,
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
        txt: "We came in with a half-formed loop and a shaky economy. Appsters tightened onboarding, fixed our wallet handoffs, and gave us a dashboard that finally explained player spend. Their NFT game development services felt like product leadership, not outsourcing. Two sprints later, day-7 retention moved from 16% to 23% and support tickets dropped.",
        name: " Lauren Mitchell,",
        position: "VP Product",
        img: Joseph,
    },
    {
        txt: "I expected smart contracts; I didn’t expect this level of care around telemetry and rollbacks. Appsters staged our drop, rehearsed failover, and caught an indexing bug before mainnet. As an NFT game development agency, they speak gameplay and infrastructure in the same sentence. Launch day stayed boring in the best way.",
        name: "Andre Collins",
        position: "CTO",
        img: RyanJaden,
    },
    {
        txt: "Our artists wanted freedom; our engineers needed constraints. Appsters built an asset pipeline that respected both mint-ready art, clean metadata, and no surprises at runtime. Among NFT game development companies, they’re the first to hand us clear provenance tools and royalty reports we actually use. We finally talk about content, not file hygiene or failed mints.",
        name: "Rebecca Hayes,",
        position: "Studio Head",
        img: KayleeSlone,
    }
    ,
    {
        txt: "We run weekly events and can’t afford churn. Appsters refit our reward curves, added fraud checks, and wired alerts to the right owners. We got steadier queues and happier mods. For play-to-earn NFT games, they balance fairness with revenue like adults. Our whales stayed, mid-tier spenders grew, and forum threads calmed down.",
        name: "Jason Alvarez,",
        position: "Director of Live Ops",
        img: MauryoJones,
    },
    {
        txt: "We needed a partner who would tell us “no” when needed. Appsters cut two risky features, shipped the core loop, and left us with a runbook we actually follow. Their NFT game development services made our team faster and less dependent. The wallet experience feels invisible now, and updates land without waking the whole company.",
        name: " Naomi Foster, ",
        position: "Co-Founder",
        img: KateBullock,
    }
]

export const RisksContent = {
    title: (<>Give Players All <Image src={RisksIMG01} alt="Bitswits Services" width={228} height={85} /> The Control They Crave With Our <Image src={RisksIMG02} alt="Bitswits Services" width={228} height={85} /> In-Game NFT Assets!</>),
    text: "Enable NFT purchases and monetize gaming with BitsWits!"
}

export const OffersContent = {
    title: "Platforms We Build Enterprise-Grade NFT Games For",
    text: "Through custom NFT game application development, we target the platforms your players actually use. Our teams' tune builds for device specs, wallet UX, and store policies, then align assets, inventories, and marketplaces under one ledger. The result is consistent ownership, fast play, and a clean path to scale across ecosystems.",
}

export const OffersTabs = [

    {
        title: "iOS",
        content: {
            heading: "iOS",
            description:
                "We follow Apple’s rules without losing performance. Native Swift, Metal, and vetted wallet SDKs keep inputs responsive and purchases safe. We optimize battery use, cold start, and on-device caching so sessions feel quick and stable. Our NFT game development services also cover App Store compliance, receipt validation, and post-release monitoring for crash and spend signals.",
        },
    },
    {
        title: "Android",
        content: {
            heading: "Android",
            description:
                "Android needs careful handling across chipsets, screens, and OS versions. We use Kotlin, Play Integrity, and secure keystores for safe sign-ins and trades. We profile network calls and storage to keep frame rates steady on mid-tier devices. When you develop an NFT game app with us, we build, ship, sign, optimize, and are ready for staged rollouts.",
        },
    },
    {
        title: "Cross Platform",
        content: {
            heading: "Cross Platform",
            description:
                "Scale demands shared logic and consistent inventories. We ship Unity or Unreal with a single asset ledger, then add UI layers per device. Players move from phone to desktop with progress intact. We build NFT game apps that reuse code where it helps and retain platform specifics where they matter for input and performance.",
        },
    },
    {
        title: "AR/VR",
        content: {
            heading: "AR/VR",
            description:
                "Immersion only works if it stays smooth. We wire XR interaction, stable tracking, and foveated rendering for steady frames, then link verifiable items to in-world actions. Our NFT game development services bind collectibles, skins, and spaces to on-chain records without breaking comfort budgets. Crews get tools to publish new scenes and events safely.",
        },
    },
    {
        title: "Metaverse",
        content: {
            heading: "Metaverse",
            description:
                "Interoperability should be practical, not a promise. We map avatars, inventories, and marketplaces to open standards and trusted bridges, then test the movement of assets between worlds. As part of Custom NFT Game Application Development, we add identity, moderation, and royalties that hold up under live traffic. Operators track liquidity and governance in one view.",
        },
    },

];

export const FuelingContent = {
    title: "Our Expertise in NFT Game Development Genres",
    text: "BitsWits is one of the best NFT game development companies that leverage blockchain technology to build NFT games for a wild variety of genres. ",
    subtitle: "Build Next-Gen NFT Games that Drive Player Engagement!",
    subtext: "Create engaging, player-driven experiences with unique digital ownership rewards.",
    FuelingImg: FuelingImg
}

export const FuelingList = [
    {
        title: "NFT P2E Game",
        text: "The most popular among our projects are the P2E games. These allow players to trade integrated NFTs, and monetize their gameplay. Players can earn crypto credits as well as exclusive NFT as rewards for their performance."
    },
    {
        title: "NFT PvP Game",
        text: "We add more intrigue to the competition by introducing multiplayer combats. Players compete against each other on the basis of skill sets, skins, and special weapons which become available on the use of player-owned NFTs."
    },
    {
        title: "NFT Metaverse Game",
        text: "Our NFT game-building services extend to full-fledged NFT metaverse development. Welcome gamers to an entire virtual world of NFTs where they can trade, interact, and explore environments for a breathtaking gaming experience."
    },
    {
        title: "NFT RPG Game",
        text: "The pursuit of exclusive NFTs becomes even more interesting when you draw players to roleplay games. RPG games immerse players into thrilling missions, and storylines, making them crave completion to unlock a bundle of all-exclusive tokens. "
    },
    {
        title: "NFT Sports and Racing Game",
        text: "Watch out for car enthusiasts as NFT racing games are bound to keep them poised for hours. Players will compete in deadly racing tracks to unlock exclusive trophies, skins, new race tracks all in the shape of high-class NFTs."
    },
    {
        title: "NFT Card and Casino Game",
        text: "Our NFT game developers can even go out of their way to help you build high-level simulations of real-world casinos or Poker tables. What’s truly interesting is that players will engage in the game via the tokenization of NFTs. "
    }
];

export const CtaEstimatedContent = {
    subtitle: "Ship Faster. Scale Without Chaos. Go Forward.",
    title: "Scalable Future-Ready NFT Game Development",
    text: (<>Our NFT game builders design, develop, and deploy titles that keep users engaged and economies stable. We align gameplay, wallets, and marketplaces with audited contracts so teams track retention, grow liquidity, expand confidently, and scale operations across mobile, desktop, and cloud platforms. Every release is built to last and ready to expand.</>),
    CtaEstimatedImg: CtaEstimatedImg
}

export const TechStackContent = {
    title: "NFT Tech Stack for All Project",
    text: "Our developers hold experience with the most demanding blockchain tech stack.",
}

export const TechStackTabs = [
    {
        title: "Game Engines",
        content: [
            {
                heading: "Buildbox",
                img: TAB1_1,
            },
            {
                heading: "Unreal Engine",
                img: TAB1_2.src,
            },
            {
                heading: "Godot",
                img: TAB1_3.src,
            },
            {
                heading: "Amazon Lumberyard",
                img: TAB1_4.src,
            }
        ],
    },
    {
        title: "Programming Languages",
        content: [
            {
                heading: "Rust",
                img: TAB2_1.src,
            },
            {
                heading: "Go",
                img: TAB2_2.src,
            },
            {
                heading: "Python",
                img: TAB2_3.src,
            },
            {
                heading: "JavaScript",
                img: TAB2_4.src,
            }
        ],
    },
    {
        title: "Graphics",
        content: [
            {
                heading: "Adobe Photoshop",
                img: TAB3_1.src,
            },
            {
                heading: "Krita",
                img: TAB3_2.src,
            },
            {
                heading: "Corel Painter",
                img: TAB3_3.src,
            },
            {
                heading: "Bueno",
                img: TAB3_4.src,
            }
        ],
    },
    {
        title: "Databases",
        content: [
            {
                heading: "OpenSea",
                img: TAB4_1.src,
            },
            {
                heading: "Nifty Gateway",
                img: TAB4_2.src,
            },
            {
                heading: "Foundation",
                img: TAB4_3.src,
            },
            {
                heading: "MongoDB",
                img: TAB4_4.src,
            }
        ],
    },
    {
        title: "Frameworks & Libraries",
        content: [
            {
                heading: "Hard Hat",
                img: TAB5_1.src,
            },
            {
                heading: "Moralis NFT API",
                img: TAB5_2.src,
            },
            {
                heading: "ethers.js",
                img: TAB5_3.src,
            },
            {
                heading: "ZettaBlock",
                img: TAB5_4.src,
            }
        ],
    },
    {
        title: "Testing",
        content: [
            {
                heading: "Jenkins",
                img: TAB6_1.src,
            },
            {
                heading: "Selenium",
                img: TAB6_2.src,
            },
            {
                heading: "JIRA",
                img: TAB6_3.src,
            },
            {
                heading: "TestRail",
                img: TAB6_4.src,
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
        img: Fintech.src,
    },
    {
        icon: <HealthcareSVG />,
        title: "Healthcare",
        txt: "We develop HIPAA-compliant healthcare apps that bridge doctors, patients, and data. From telemedicine to AI-powered diagnostics, our solutions improve workflows, reduce wait times, and empower smarter, faster decision-making. Every feature is designed to keep patient privacy airtight while driving measurable results for hospitals, clinics, and health-tech startups.",
        url: "/healthcare-app-development-services",
        img: Healthcare.src,
    },
    {
        icon: <EducationSVG />,
        title: "Education",
        txt: "Our education apps gamify learning, power virtual classrooms, and track student progress. We integrate AR/VR modules, quizzes, and real-time assessments to boost engagement. Schools, universities, and ed-tech startups leverage our platforms to personalize teaching, improve retention, and make learning as interactive and rewarding as social media scrolling.",
        url: "/education-app-development",
        img: Education.src,
    },
    {
        icon: <SocialSVG />,
        title: "Social Media",
        txt: "We build social media platforms that are scalable, sticky, and secure. AI-driven feeds, privacy-first chat systems, and live content features drive engagement. Our architecture ensures your platform can handle viral moments without crashing, giving creators, communities, and brands a digital stage to connect and grow.",
        url: "/social-media-app-development-company",
        img: SocialMarketing.src,
    },
    {
        icon: <RealEstateSVG />,
        title: "Real Estate",
        txt: "We design real estate apps that help buyers, sellers, and agents close deals faster. AR-powered property tours, AI-driven recommendations, and secure document management streamline every step. Our platforms keep listings fresh, negotiations quick, and users delighted, turning real estate buying and selling into a guided, data-driven experience.",
        url: "/real-estate-app-development-company",
        img: RealEstate.src,
    },
    {
        icon: <LogisticsSVG />,
        title: "Logistics",
        txt: "We power logistics apps with route optimization, GPS tracking, and real-time inventory sync. Our solutions cut costs, eliminate bottlenecks, and ensure every delivery meets its deadline. Carriers, 3PLs, and warehouses rely on us to bring transparency, speed, and automation to complex supply chains across industries.",
        url: "/logistics-software-development",
        img: Logistics.src,
    },
    {
        icon: <MusicSVG />,
        title: "Music",
        txt: "We create streaming apps, artist marketplaces, and licensing solutions that let music businesses scale and monetize. AI-powered recommendations, offline playback, and fan engagement features keep listeners hooked. Our process covers rights management, secure distribution, and seamless playback to hit the perfect balance between creativity, tech, and revenue.",
        url: "/music-app-development-company",
        img: Music.src,
    },
];


export const IdeaCtaContent = {
    title: (<>The Market Never Waits. <br /> Are You Ready to Launch?</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s Create An <br /> Amazing App Together!</>)
}

export const FaqsContent = {
    title: "Frequently Asked Questions (FAQs)",
}

export const FaqsList = [
    {
        title: "How do you prevent token inflation and economic collapse?",
        txt: "We model supply, pace emissions, and add sinks tied to play. Treasury actions require timelocks. Rewards use oracles and cooldowns. As an NFT game development company, we track velocity, retention, and burn so that balance changes land with evidence. "
    },
    {
        title: " How do you keep gameplay responsive with on-chain ownership?",
        txt: `Client gameplay runs off-chain, and ownership commits on-chain after the action. We batch noncritical writes, retry, and refresh inventories from indexers. Our NFT game development services keep input responsive, state consistent, even when networks spike or nodes lag hard. `
    },
    {
        title: " What wallet UX patterns pass Apple and Google reviews?",
        txt: `We simplify onboarding with session keys, sign-in via providers, and fee previews. Purchases follow receipts and server validation. Recovery flows protect lost devices. As an NFT game application development company, we align UX with Apple and Google, breaking ownership guarantees.`
    },
    {
        title: "How do you run safe contract upgrades post-launch?",
        txt: `Upgrades follow proxy patterns with timelocks, audits, and change logs. We gate admin actions, rotate keys, and run staged migrations on testnets first. As one of the top NFT game makers, we prove safety, then flip traffic to contracts live. `
    },
    {
        title: " What telemetry do you wire for live-ops decisions?",
        txt: `We track cohorts, ARPU, drop outcomes, and failed trades. Events stream to a warehouse. Contract metrics watch mints and burns. Our NFT Game application development services link gameplay, economy, and uptime, so producers prioritize fixes that actually improve results quickly.`
    },
    {
        title: "  How do you keep marketplaces fast during big drops?",
        txt: `We use off-chain order books, on-chain settlement, and batched writes. Caches prewarm before events. Backpressure protects nodes. Rate limits and allowlists cut bots. Studios that hire NFT game developers from Appsters get playbooks, monitors for failures, and rollback steps.`
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
        img: BlogsIMG02.src,
        links: "https://www.bitswits.co/blog/mobile-app-development-frameworks",
        date: "August 13,2024"
    }
    , {
        title: "Everything You Need to Know About Application Development Life Cycle",
        txt: "Frustration with clunky interfaces is a thing of the past. The seamless apps that you are using today for food delivery, banking, or even socializing are created after a well-worked-up development process.",
        cat: "Mobile App Development",
        img: BlogsIMG03.src,
        links: "https://www.bitswits.co/blog/application-development-life-cycle",
        date: "July 10,2024"
    }
]





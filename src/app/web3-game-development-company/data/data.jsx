// Bannar Images
const BannerLogos = "/mobile-game-development-company/bannerLogo.webp"
const BannerBg = "/mobile-game-development-company/bannerIMG.webp"

// services Images
const GameBg1 = "/mobile-game-development-company/services/GameBg01.webp"
const GameBg2 = "/mobile-game-development-company/services/GameBg02.webp"
const GameBg3 = "/mobile-game-development-company/services/GameBg03.webp"
const GameBg4 = "/mobile-game-development-company/services/GameBg04.webp"
const GameBg5 = "/mobile-game-development-company/services/GameBg05.webp"
const GameBg6 = "/mobile-game-development-company/services/GameBg06.webp"
const GameBg7 = "/mobile-game-development-company/services/GameBg07.webp"

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
import {
  WhyChooseIcon01,
  WhyChooseIcon02,
  WhyChooseIcon03,
  WhyChooseIcon04,
} from "@/src/app/app-constants"

//========= ContentSec Images
const ContentSecIMG1 = "/mobile-game-development-company/imgContent1.webp"
const ContentSecIMG2 = "/mobile-game-development-company/imgContent2.webp"

//========= TechStack Images
const TAB1_1 = "/services/tech/tab1/01.webp"
const TAB1_2 = "/services/tech/tab1/02.webp"
const TAB1_3 = "/services/tech/tab1/03.webp"
const TAB1_4 = "/services/tech/tab1/04.webp"
const TAB1_5 = "/services/tech/tab1/05.webp"
const TAB1_6 = "/services/tech/tab1/06.webp"
const TAB2_1 = "/services/tech/tab2/01.webp"
const TAB2_2 = "/services/tech/tab2/02.webp"
const TAB2_3 = "/services/tech/tab2/03.webp"
const TAB2_4 = "/services/tech/tab2/04.webp"
const TAB2_5 = "/services/tech/tab2/05.webp"
const TAB3_1 = "/services/tech/tab3/01.webp"
const TAB3_2 = "/services/tech/tab3/02.webp"
const TAB3_3 = "/services/tech/tab3/03.webp"
const TAB3_4 = "/services/tech/tab3/04.webp"
const TAB3_5 = "/services/tech/tab3/05.webp"
const TAB4_1 = "/services/tech/tab4/01.webp"
const TAB4_2 = "/services/tech/tab4/02.webp"
const TAB4_3 = "/services/tech/tab4/03.webp"
const TAB4_4 = "/services/tech/tab4/04.webp"
const TAB4_5 = "/services/tech/tab4/05.webp"
const TAB4_6 = "/services/tech/tab4/06.webp"
const TAB5_1 = "/services/tech/tab5/01.webp"
const TAB5_2 = "/services/tech/tab5/02.webp"
const TAB5_3 = "/services/tech/tab5/03.webp"
const TAB5_4 = "/services/tech/tab5/04.webp"
const TAB5_5 = "/services/tech/tab5/05.webp"
const TAB5_6 = "/services/tech/tab5/06.webp"
const TAB6_1 = "/services/tech/tab6/01.webp"
const TAB6_2 = "/services/tech/tab6/02.webp"
const TAB6_3 = "/services/tech/tab6/03.webp"
const TAB6_4 = "/services/tech/tab6/04.webp"
const TAB6_5 = "/services/tech/tab6/05.webp"
const TAB6_6 = "/services/tech/tab6/06.webp"
const TAB6_7 = "/services/tech/tab6/07.webp"

//========= Fueling Images
const FuelingImg = "/services/cuttingEdge.webp"

//========= Blogs Images
const BlogsIMG01 = "/services/blogs/post-1.webp"
const BlogsIMG02 = "/services/blogs/post-2.webp"
const BlogsIMG03 = "/services/blogs/post-3.webp"
import Link from "next/link"

export const BannerData = {
  subtitle: "Experienced Web3 Game Developers",
  title: "A Web3 Game Development Company Creating Playable Economies.",
  content:
    "We build blockchain-native Web3 games that reward players with real ownership, predictable economies, and clear monetization paths. Our engineers design on-chain logic, secure smart contracts, and scalable off-chain services, enabling games to handle real traffic and marketplaces. Our designers focus on retention loops, balanced progression, and token sinks so that play leads to measurable revenue. Experience fused analytics and telemetry in your app gameplay to track economic health and player behavior.",
  BannerLogos: BannerLogos,
  BannerBg: BannerBg,
}

export const ProjectdiscussContent = {
  title: "Recognized for Next-Generation Web3 Game Apps.",
  text: "BitsWits assembles top animators, expert designers, project managers, and game writers to develop your game with precision and creativity!",
}

export const ServicesContent = {
  title: "Our Web3 Game Development Services Deliver Real Utility",
  text: "We deliver end-to-end systems: smart contracts, player wallets, asset pipelines, and live-ops tooling. Our services focus on secure economics and measurable player retention, and cross-chain compatibility for studios.",
}

export const ServicesList = [
  {
    title: "Full-Cycle Web3 Game Development",
    txt: "Our full-cycle teams design game rules, on-chain settlement, off-chain services, and live-ops playbooks. Appsters’ Web3 game developers define token flows, economic sinks, and anti-abuse controls before code lands. We test load, simulate markets, and run audits so launch windows do not become failure modes. We also provide operator dashboards and moderation tools. The result: economies that sustain trading while player experience stays responsive. ",
    links: "",
    Img: GameBg1,
  },
  {
    title: "Web3 Game Porting",
    txt: (
      <>
        We port titles to decentralized stacks with care: asset pipeline optimization, rewire server logic, and integrate crypto wallets or tokens natively. Our Web3 game animators rework skeletons and LODs to fit minting workflows and chain constraints. We preserve frame budgets, retool networking for eventual consistency, and validate UX on target devices. We coordinate migrations to testnets and mainnets with staged player cohorts so ported releases maintain quality while unlocking new monetization.
      </>
    ),
    links: "",
    Img: GameBg2.src,
  },
  {
    title: "Web3 Token Creation",
    txt: (
      <>
        Token design determines long-term economic health. For Web3 games, we model supply curves, emission schedules, staking, and burn mechanics to control inflation and preserve value. Smart contracts include role-based minting, timelocks, and upgrade patterns with formal tests. We simulate secondary markets, integrate price oracles for real signals, and provide governance tools so studios steer economies responsibly. We also run audits and third-party reviews.
      </>
    ),
    links: "",
    Img: GameBg3.src,
  },
  {
    title: "Integration of Wallets in Web3 Games",
    txt: "Wallet flows must preserve play momentum. We implement session management, transaction batching, and gas abstraction so mechanics for Web3 games feel native and predictable. Our team supports hosted and self-custody wallets, social sign-ins, and operator multi-sig tools for moderation. We stress-test signing and rebroadcast flows under network jitter to prevent failed purchases and lost assets.",
    links: "",
    Img: GameBg4.src,
  },
  {
    title: "Web3 Game Asset Creation",
    txt: "We produce assets optimized for minting, streaming, and constrained devices. For Web3 mobile games, our artists create low-poly variants, atlas textures, and progressive LODs that load fast and look good on phones. Each asset links to on-chain metadata, royalty rules, and lifecycle states. We provide editor tools for creators and pipelines that avoid costly re-minting while enabling dynamic content updates. ",
    links: "",
    Img: GameBg5.src,
  },
  {
    title: "NFT Marketplace for Web3 Games",
    txt: "We build marketplaces tuned for in-game traffic: off-chain order books, on-chain settlement, and indexers for fast discovery. Our NFT marketplace for web3 games supports batched listings, royalties, and escrow mechanics that reduce failed trades. We add fraud detection, rate limits, and cache invalidation so marketplaces handle drops and peak events. We also provide analytics for marketplace health. ",
    links: "",
    Img: GameBg6.src,
  }
]

export const TestimonialContent = {
  title: "Client Testimonials",
  TestiImg1: TestiImg1,
  TestiImg2: TestiImg2,
  TestiImg3: TestiImg3,
}

export const TestimonialSLIDES = [
  {
    txt: "Appsters delivered what our internal team couldn’t: a real production pipeline for our blockchain title. Their Web3 game development services gave us clarity from audit to launch, and their post-launch dashboards showed us exactly where to optimize player retention. They also trained our staff on the release process, so handoffs felt natural. We still use their playbooks for every seasonal update.",
    name: "Jade Ross,",
    position: "Co-Founder",
    img: Joseph,
  },
  {
    txt: "We’d built demos with freelancers before, but Appsters treated our project like a product. Their engineers audited every contract, re-architected our wallet flow, and helped us launch without downtime, easily the smartest Web3 game development company we’ve worked with. The team documented every change and left us with clean runbooks. Our ops team now ships patches without vendor dependence.",
    name: "Walter Lee,",
    position: "CTO",
    img: RyanJaden,
  },
  {
    txt: "Appsters was the first partner to connect creative and technical logic seamlessly. Our marketplace loads faster, and player onboarding dropped from minutes to seconds. They’re genuine Web3 game makers who think like operators. They surfaced the right metrics and removed noise. Executive reviews finally focus on outcomes we can measure week over week.",
    name: "Jesse Hernandez,",
    position: "Product Director",
    img: KayleeSlone,
  },
  {
    txt: "The Appsters team delivered an MVP in half the expected time, complete with analytics, crash reporting, and token metrics. Their Web3 game development services helped us raise a successful seed round, proof that strong engineering creates investor confidence. They stayed present during diligence and answered tough questions. Investors cited the technical groundwork as a deciding factor.",
    name: "Gabreil Mitchell,",
    position: "Blockchain Lead",
    img: MauryoJones,
  },
  {
    txt: "What stood out wasn’t just the code but the discipline. Appsters kept every milestone measurable and communicated clearly. They handled our chain migration flawlessly, making them our go-to team for ongoing Web3 game development services.  Post-migration stability has been excellent. Our support tickets dropped, and player sentiment improved within the first month. ",
    name: "Beth Dalton,",
    position: "CEO",
    img: KateBullock,
  },
]

export const GameCtaContent = {
  title: (
    <>
      <h6>
        Create a Game Beyond Limits –<span>Welcome to Web3!</span>
      </h6>
    </>
  ),
}

export const ContentSecContent = {
  title: "Reimagine Gameplay with Expert Web3 Game Application Development",
  text: (
    <>
      <p>
        Work with Web3 game builders who design for live traffic, real economies, and clear KPIs. Appsters aligns game design, smart contracts, and services so your title ships clean, runs fast, and grows with confidence. We deliver audited code, measured rollouts, and a roadmap that product and engineering can defend. Turn ideas into operational ecosystems that scale, measure, and grow, helping your next title ship stronger, faster, and with confidence.
      </p>
    </>
  ),
  ContentSecIMG: ContentSecIMG1,
}

export const ProcessContent = {
  title: "Web3 Games Built For Real-World Scale And Stability.",
  text: "Appsters ships titles that hold up under traffic spikes, live events, and marketplace churn. We design audited smart contracts, low-latency services, clean wallet onboarding, and asset pipelines that perform on real devices. Every title runs stable networks, verified ownership models, and sustainable play-to-earn systems that hold up under real market conditions, not lab simulations.",
}

export const ProcessTabs = [
  {
    title: "MetaRacers",
    content: {
      heading: "MetaRacers",
      description:
        "MetaRacers puts player-owned cars at the center of competitive racing. Each vehicle is an NFT that players upgrade, tune, and trade. Appsters built the real-time physics layer, low-latency matchmaking, and on-chain settlement for race winnings. We balanced in-game progression with token rewards so skill matters more than spend. Operators get dashboards to monitor liquidity and spot market imbalances before they affect play.",
      imgSrc: ProcessIMG,
    },
  },
  {
    title: "FroForge",
    content: {
      heading: "FroForge",
      description:
        "FroForge lets players design land, build structures, and mint ownership on-chain. Players claim parcels, create assets, and form micro-economies. Appsters implemented the asset registry, cross-chain minting options, and a content moderation workflow so creators can publish with confidence. We focused on making land mechanics transparent and auditable while keeping creation tools familiar to non-technical users, so communities grow without hitting technical friction.",
      imgSrc: ProcessIMG,
    },
  },
  {
    title: "BlitzArena",
    content: {
      heading: "BlitzArena",
      description:
        "BlitzArena blends esports-style matches with token incentives for ranked play. Players enter quick matches, earn rewards, and level up gear stored as tradable assets. Appsters engineered the match server logic, microtransaction flow, and Layer-2 settlement to cut transaction costs during peak events. Tournament organizers receive reliable payout reports and fraud detection signals so competitive integrity stays high while monetization scales.",
      imgSrc: ProcessIMG,
    },
  },
  {
    title: "DriftMonsters",
    content: {
      heading: "DriftMonsters",
      description:
        "DriftMonsters centers on vehicle ownership, rentals, and community-driven competitions. Players buy, lease, or rent cars and skins, and hosts run timed events to reward participation. Appsters implemented secure rental contracts, marketplace filters, and a lightweight replication system so ownership changes reflect quickly in-game without blocking performance. Mobile wallet onboarding and instant previewing of rented vehicles make participation smooth for casual players. ",
      imgSrc: ProcessIMG,
    },
  },
  {
    title: "Splice Hunt",
    content: {
      heading: "Splice Hunt",
      description:
        "Splice Hunt mixes AR missions with collectible progression tied to real locations. Players complete nearby objectives, claim token rewards, and unlock gear linked to on-chain metadata. Appsters focused on robust geo-fencing, token-drop validation, and privacy-safe location handling. We tuned AR overlays for low-latency rendering and built merchant-facing tools so local partners can create events that drive real-world engagement and measurable retention.",
      imgSrc: ProcessIMG,
    },
  },
  {
    title: "GuildVerse",
    content: {
      heading: "GuildVerse",
      description:
        "GuildVerse gives guilds control over treasury, rules, and shared assets through on-chain governance. Guild leaders propose content drops and vote on revenue splits. Appsters designed the guild contract model, staking mechanics, and treasury safeguards so groups can manage funds with clear audit trails. We shipped a suite of admin tools for moderators and a compact UX for members to propose and vote without leaving the game client.",
      imgSrc: ProcessIMG,
    },
  },
  {
    title: "The Quest",
    content: {
      heading: "The Quest",
      description:
        "The Quest ties item evolution to time and player actions. Artifacts change attributes when players perform specific quests or when real-world time milestones occur. Appsters integrated reliable oracles for timed triggers, implemented safe upgrade paths for on-chain assets, and provided rollback plans for event failures. Story-driven design pairs with clear on-chain proofs so collectors trace an item’s history as part of the narrative.",
      imgSrc: ProcessIMG,
    },
  },
]

export const WhyChooseContent = {
  title: "Web3 game Development Company in the USA for Decentralized & Secure Games",
  text: "We operate as a full-stack Web3 game development company that ships stable releases. Our teams design smart contracts, game services, and live economy controls that studios can run confidently under real traffic, audits, and marketplace activity.",
}

export const WhyChooseList1 = [
  {
    Icon: <WhyChooseIcon03 />,
    title: (
      <>
        Protocol-Safe  <br />
        Architecture{" "}
      </>
    ),
    description:
      "We design contract suites using proven standards, upgradeable proxies where needed, and multi-sig controls for admin actions. Services run behind rate limits, queueing, and retries. CI runs unit, property, and fuzz tests against forks. Clear dashboards track cost, latency, and contract events. As a Web3 game development company, we document migration paths, set error budgets, upgrades, and gate releases behind canaries to protect player inventories and markets. ",
  },
  {
    Icon: <WhyChooseIcon01 />,
    title: (
      <>
        Economy Design  <br />
        Ops{" "}
      </>
    ),
    description:
      "We model token supply, sinks, staking, and emission schedules in simple levers you can adjust. Balancers guard against inflation and hoarding. Markets run on off-chain order books with on-chain settlement for speed and integrity. We ship dashboards that expose liquidity, churn risk, and big-holder impact. As one of the best Web3 game makers, we align mechanics with DAU, MAU, and LTV targets and keep levers operator-controlled so growth stays measurable.",
  },
]

export const WhyChooseList2 = [
  {
    Icon: <WhyChooseIcon04 />,
    title: (
      <>
        Secure Wallet  <br />
        UX
      </>
    ),
    description:
      "We integrate hosted and self-custody wallets with session keys for smoother signing, transaction batching, and gas abstraction. Sensitive actions are confirmed on-chain and logged with tamper-evident trails. Anti-replay and nonce strategies prevent double-spends. We support ERC-721 and ERC-1155, IPFS or CDN pinning, and recovery flows. When we develop a Web3 game app, we keep sign-in, purchases, and trades predictable on mobile and desktop.",
  },
  {
    Icon: <WhyChooseIcon02 />,
    title: <>LiveOps At Scale</>,
    description:
      "We plan shardable services, regional caches, and worker pools for events and drops. Indexers refresh collections quickly, so listings stay fresh. Abuse detection flag wash trading and scripted farming. Our Web3 game solutions include versioned contracts, safe data backfills, and rollback plans so hotfixes do not harm ownership records. Teams get runbooks, on-call rotations, and clear SLOs for uptime. ",
  },
]

export const OffersContent = {
  title: "Platforms We Build Web3 Games For: Native, Cross-Play, Immersive, & Next-Generation",
  text: "We deliver custom Web3 game application development across iOS, Android, cross-platform, AR or VR, and metaverse worlds. Our engineers match gameplay needs to the right stack, wire secure wallets, and keep frame rates steady while on-chain actions stay predictable.",
}

export const OffersTabs = [
  {
    title: "iOS",
    content: {
      heading: "iOS",
      description: (
        <>
          We build iOS with Swift, Metal, and Unity where needed. Wallet flows feel native, key storage stays secure, and App Store rules are respected. We profile on target devices and track cold start, frame time, and battery. If you need to develop a Web3 game app for Apple, we keep it fast and compliant.
        </>
      ),
    },
  },

  {
    title: "Android",
    content: {
      heading: "Android",
      description:
        "Android ships on Kotlin and Unity with device diversity in mind. We tune networking, caching, and signing so slow links do not break play. Our telemetry flags ANRs and crashes early. When you need Web3 game development services for Google Play, we deliver builds that pass review and perform under load.",
    },
  },

  {
    title: "Cross Platform",
    content: {
      heading: "Cross Platform",
      description:
        "We share business logic with React Native, Flutter, or Unity and keep input, haptics, and rendering native where it matters. One codebase, platform-specific polish. Leaderboards, wallets, and marketplaces stay consistent across devices. If you must build Web3 game apps quickly, we protect quality while keeping parity.",
    },
  },
  {
    title: "AR/VR",
    content: {
      heading: "AR/VR",
      description:
        "We ship AR and VR with Unity XR or Unreal, tuned for comfort and performance. Wallet actions and rewards tie cleanly to in-world events. We validate tracking, occlusion, and latency on real hardware. As a Web3 game development company, we make immersion reliable, not fragile.",
    },
  },
  {
    title: "Metaverse",
    content: {
      heading: "Metaverse",
      description:
        "Open worlds need stable identities and portable assets. We wire Layer-2, ERC-721, or 1155, and indexers for fast discovery. State persists across sessions, and marketplaces stay liquid. Our Custom Web3 Game Application Development approach keeps items traceable, trade-ready, and governed by rules that operators can adjust without breaking play.",
    },
  }
]

export const ContentSecLGContent = {
  title: "Web3 Game Development Agency Creating Future-Ready Blockchain Ecosystems",
  text: (
    <>
      <p>
        logic, with IPFS, GraphQL, and AWS for storage and APIs. Unlike most Web3 game development companies, we design ecosystems that stay adaptable as chains evolve. Our Web3 game development services pair clean on-chain architecture with fast off-chain processing, ensuring smooth gameplay, transparent token flows, and measurable business
      </p>
      <p>
        performance across every release of our Web3 game apps. We take a tech-first, results-driven approach to Web3 game development services, shipping game systems that studios can operate confidently after launch.
      </p>
    </>
  ),
  BGIMG: ContentSecIMG2,
}

export const IdeaCtaContent = {
  title: (
    <>
      Hire Web3 Game Developers Who
      <br /> Ship Real Immersive Gameplay.
    </>
  ),
  text: (
    <>
      {" "}
      App <span>Work with engineers who understand gameplay, economy design, and blockchain constraints equally well. Appsters’ Web3 specialists architect secure, scalable systems. From smart contract audits to full live-ops support, we partner with studios and startups ready to ship real games, not just mint collectibles.</span>
    </>
  ),
  formtitle: (
    <>
      Get a Custom Quote for <br /> Your Mobile Game Concept!
    </>
  ),
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
        img: TAB1_2.src,
      },
      {
        heading: "Godot",
        img: TAB1_3.src,
      },
      {
        heading: "Cocos2d-x",
        img: TAB1_4.src,
      },
      {
        heading: "CryEngine",
        img: TAB1_5.src,
      },
      {
        heading: "Buildbox",
        img: TAB1_6.src,
      },
      {
        heading: "Phaser",
        img: TAB1_6.src,
      },
      {
        heading: "Construct",
        img: TAB1_6.src,
      },
      {
        heading: "PlayCanvas",
        img: TAB1_6.src,
      },
    ],
  },
  {
    title: "Languages",
    content: [
      {
        heading: "C# ",
        img: TAB2_1.src,
      },
      {
        heading: "C++",
        img: TAB2_2.src,
      },
      {
        heading: "GDScript",
        img: TAB2_3.src,
      },
      {
        heading: "Lua",
        img: TAB2_4.src,
      },
      {
        heading: "Python",
        img: TAB2_5.src,
      },
    ],
  },
  {
    title: "Graphics and Animation",
    content: [
      {
        heading: "Blender",
        img: TAB3_1.src,
      },
      {
        heading: "Maya",
        img: TAB3_2.src,
      },
      {
        heading: "Adobe Photoshop",
        img: TAB3_3.src,
      },
      {
        heading: "Adobe Illustrator",
        img: TAB3_4.src,
      },
      {
        heading: "Adobe After Effects",
        img: TAB3_5.src,
      },
      {
        heading: "Spine",
        img: TAB3_4.src,
      },
      {
        heading: "Three.js",
        img: TAB3_5.src,
      },
    ],
  },
  {
    title: "Sound and Music",
    content: [
      {
        heading: "FMOD",
        img: TAB4_1.src,
      },
      {
        heading: "Wwise",
        img: TAB4_2.src,
      },
      {
        heading: "Audacity",
        img: TAB4_3.src,
      },
      {
        heading: "Logic Pro X",
        img: TAB4_4.src,
      },
      {
        heading: "Ableton Live",
        img: TAB4_5.src,
      },
      {
        heading: "V",
        img: TAB4_6.src,
      },
    ],
  },
  {
    title: "IDEs",
    content: [
      {
        heading: "Visual Studio",
        img: TAB5_1.src,
      },
      {
        heading: "Rider",
        img: TAB5_2.src,
      },
      {
        heading: "Xcode",
        img: TAB5_3.src,
      },
      {
        heading: "Android Studio",
        img: TAB5_4.src,
      },
      {
        heading: "MonoDevelop",
        img: TAB5_5.src,
      },
      {
        heading: "IntelliJ IDEA",
        img: TAB5_6.src,
      },
    ],
  },
  {
    title: "Testing and Analytics",
    content: [
      {
        heading: "TestFlight",
        img: TAB6_1.src,
      },
      {
        heading: "Firebase Test Lab",
        img: TAB6_2.src,
      },
      {
        heading: "Appium",
        img: TAB6_3.src,
      },
      {
        heading: "GameAnalytics",
        img: TAB6_4.src,
      },
      {
        heading: "Unity Analytics",
        img: TAB6_5.src,
      },
      {
        heading: "Google Analytics",
        img: TAB6_6.src,
      },
      {
        heading: "Photon",
        img: TAB6_7.src,
      },
    ],
  },
]

export const FuelingContent = {
  title: "We Cover Web3 Game Development Of Any Genre",
  text: "BitsWits specializes in creating immersive, blockchain-powered games across a wide range of genres. Explore the possibilities of Web3 game development for any genre:",
  subtitle: "Build the Next Big Mobile Game with Expert Developers!",
  subtext:
    "Deliver smooth, immersive gameplay that keeps players hooked and coming back.",
  FuelingImg: FuelingImg,
}

export const FuelingList = [
  {
    title: "Arcade Games",
    text: "Classic and traditional arcade games gained a brand new personality with Web3 technology, where players can truly own items, characters, and collectibles. Our Web3 arcade games offer addictive gameplay with a layer of ownership, giving players reasons to return again and again.",
  },
  {
    title: "Action & RPG Games",
    text: "With decentralized assets, action, and role-playing games flourish in the Web3 environment, where vast landscapes and captivating narratives take on new dimensions. We create role-playing games (RPGs)  that let users level up, trade, and collect their characters and goods with real ownership.",
  },
  {
    title: "Racing Games",
    text: "With Web3 racing games that include player-owned vehicles, tracks, and upgrades, you may experience fast-paced excitement. Players may compete, trade, and even gamble assets in our blockchain-based racing experiences.",
  },
  {
    title: "Casino and Card Games",
    text: "With its clear, safe gameplay and genuine in-game object ownership, Web3 is revolutionizing online card and casino games. Our blockchain-powered casino games provide players and operators alike a first-rate experience by ensuring openness, equity, and increased confidence.",
  },
  {
    title: "Sport Games",
    text: "Web3 technology allows players to own team ownership, memorabilia, and assets during games. We create sports games that provide users the ability to manage teams, trade rare assets, and gather NFTs in a safe, decentralized setting.",
  },
  {
    title: "Adventure Games",
    text: "In the Web3 universe, where players may explore, collect, and trade valuable objects across expansive areas, adventure games come to life. Web3 tech adds layers of engagement and ownership to every adventure game making it rewardable and memorable.",
  },
]

export const FaqsContent = {
  title: "Frequently Asked Questions (FAQs)",
}

export const FaqsList = [
  {
    title: "What makes Appsters different in Web3 game application development services?",
    txt: "We fuse blockchain logic, game mechanics, and operator tooling in one roadmap. Appsters handles wallet UX, tokenomics, indexing, and live-ops. That vertical integration sets us apart among Web3 game application development services providers who often build only parts of your stack.",
  },
  {
    title: "Why should I pick Appsters as my Web3 game development company? ",
    txt: "Because we don’t hand off code and disappear, we stay through shakedown, patches, and future upgrades. We ship smart contracts, game clients, asset pipelines, and monitoring. Clients partner with us when they seek a full-stack Web3 game development company that can deliver beyond launch.",
  },
  {
    title: "When should I hire Web3 game developers from Appsters?",
    txt: "Bring us in early during design or token prototyping. Hiring web3 game developers early helps avoid rebuilt contracts, poor wallet flows, and scripting debt. Whether you already have a design, we align tech decisions with economic models and product constraints before full dev begins.",
  },
  {
    title: "Can Appsters scale an existing game into blockchain territory? ",
    txt: "Yes. We migrate game logic, port the asset registry, and integrate cross-chain capabilities without breaking player continuity. We script contract bridges carefully to preserve the legacy state. That’s why teams work with Appsters for Web3 game development services when they need safe migration and sustainable growth.",
  },
  {
    title: "What domains of games can Appsters build? ",
    txt: "The market size of Web3 gaming was valued at USD 26.38 billion in 2023. As more players and developers enter the Web3 space, the market for Web3 games is expected to expand into a multi-billion-dollar industry.",
  },
  {
    title: "How does Appsters ensure security and uptime in live Web3 games?",
    txt: "We adopt best practices: audited contracts, canary releases, fallback logic, and circuit breakers. We monitor gas consumption, chain congestion, and transaction failures in real-time. As a trusted Web3 game development company, we view your live world like critical infrastructure and engineer for resilience.",
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
    date: "August 29,2024",
  },
  {
    title: "Most Popular Mobile App Development Frameworks",
    txt: "You know how people are glued to their phones these days? Apps are like, everywhere. From booking a cab to buying movie tickets, chatting with friends, and nearly everything else in between, we just can’t do without apps.",
    cat: "Mobile App Development",
    img: BlogsIMG02.src,
    links: "https://www.bitswits.co/blog/mobile-app-development-frameworks",
    date: "August 13,2024",
  },
  {
    title:
      "Everything You Need to Know About Application Development Life Cycle",
    txt: "Frustration with clunky interfaces is a thing of the past. The seamless apps that you are using today for food delivery, banking, or even socializing are created after a well-worked-up development process.",
    cat: "Mobile App Development",
    img: BlogsIMG03.src,
    links: "https://www.bitswits.co/blog/application-development-life-cycle",
    date: "July 10,2024",
  },
]

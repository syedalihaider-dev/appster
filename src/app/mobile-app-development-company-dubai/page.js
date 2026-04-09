"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
// componets
import Bannerdubai from "../../components/Bannerdubainew";
import NewDubaiAwards from "@/src/components/NewDubaiAwards";
import FutureReady from "@/src/components/FuturereadyDubai";
import Whowearenew from "../../components/Whowearenew";
import DubaiDelivered from "@/src/components/DubaiDelivered";
import DubaiTimeline from "@/src/components/DubaiTimeline";
import DubaiClients from "@/src/components/DubaiClients";
import Delivered from "@/src/components/Delivered";
import Industries from "@/src/components/Industries";
import Houtondubai from "../../components/Houtondubai";
import DubaiBrandTrust from "@/src/components/DubaiBrandTrust";
import Expertappdubaiadvanced from "../../components/Expertappdubaiadvanced";
import Justbuilditlpdubai from "../../components/Justbuilditlpdubai";
import Brand from "../../components/Brand";
import Faqdubai from "../../components/Faqdubai";
import Latestblog from "../../components/Latestblog";
import Globalmap from "../../components/Globalmap";
//Images
import StoryLine2 from "/public/newDubaiPagev1/storyLine2.png";
import StoryLine3 from "/public/newDubaiPagev1/storyLine3.png";
import StoryLine4 from "/public/newDubaiPagev1/storyLine4.png";
import StoryLine5 from "/public/newDubaiPagev1/storyLine5.png";
import StoryLine6 from "/public/newDubaiPagev1/storyLine6.png";
import banImg1 from "@/public/dubailp/services/1.png";
import banImg2 from "@/public/dubailp/services/2.png";
import banImg3 from "@/public/dubailp/services/3.png";
import banImg4 from "@/public/dubailp/services/4.png";
import banImg5 from "@/public/dubailp/services/5.png";
import banImg6 from "@/public/dubailp/services/6.png";
import blog1 from "/public/newdubai/blog1.png";
import blog2 from "/public/newdubai/blog2.png";
import blog3 from "/public/newdubai/blog3.png";
import HeroBg from "/public/newhouston/dubai.webp";
import MapImage from "media/newdubai/map1.png";
import Link from "next/link";

export default function dubaidevelopmentcompany() {
  const [shouldRender, setShouldRender] = useState(false);
  const [isMouseMoved, setIsMouseMoved] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setShouldRender(true);
        } else {
          setShouldRender(false);
        }
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (shouldRender) {
      const handleMouseMove = () => {
        setIsMouseMoved(true);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [shouldRender]);

  // Banner Content
  const Banner = {
    title: "Mobile App Development Company in Dubai: Building Software That Drives Real Business Growth",
    desc: "Dubai teams ship fast, but they also audit, scale, and integrate across complex ecosystems. Appsters delivers mobile app services in Dubai for founders and enterprises who want software that survives real usage, handles heavy user traffic while keeping your data locked down and your interface lightning-fast. Expect clear scope, direct engineering input, and products built for Arabic and English users, regional payment rails, and UAE data responsibilities.",
    bg: HeroBg,
    alt: "Banner for Dubai based mobile app development company featuring contact information and tag line",
  };
  // award Content
  const Award = {
    title: "Awards & Recognitions",
    desc: (
      <>
        Our dedication and hardwork has consistently{" "}
        <br className="d-xl-block d-none" /> garnered acknowledgment by
        different platforms.
      </>
    ),
  };
  //=====StoryLine Fold=====//
  const accordionData = [
    {
      question: "Android App Development in Dubai",
      answer:
        "Our Android app development Dubai service is specifically structured to help you develop interactive and irresistible apps for your target consumers. App Development Dubai processes use the best practices and the latest technology to guarantee you a high-quality Android app. We integrate our expertise with your vision throughout the entire process, ensuring top performance, excellence, speed, and an optimal user experience.",
      btn: "Let’s Build Your Android App!",
      StoryLineImg: StoryLine2,
    },
    {
      question: "iOS App Development in Dubai",
      answer:
        "For iPhone audiences in Dubai, polish matters, but predictability matters more. Our iOS app development teams ship Swift code with strict lifecycle control, secure keychain usage, and privacy-aware analytics. Appsters handles iPhone app development in Dubai for clients who need Apple Pay readiness, strong authentication, and app store compliance without delays. We profile cold starts, reduce UI jank, and keep networking resilient for users moving between Wi-Fi and mobile data every release.",
      btn: "Let’s Build Your iOS App!",
      StoryLineImg: StoryLine3,
    },
    {
      question: "Flutter App Development in Dubai",
      answer:
        "Flutter is useful in Dubai when you want one codebase and a consistent brand experience across iOS and Android. Our Flutter app developers in Dubai keep the stack maintainable with clear state management, modular features, and automated tests. We also build native bridges for payments, maps, camera, and biometrics, then harden performance so scrolling stays smooth. You get faster iteration without trading away observability, security, or long-term ownership in production.",
      btn: "Let’s Build Your Flutter App!",
      StoryLineImg: StoryLine4,
    },
    {
      question: "Game App Development in Dubai",
      answer:
        "Mobile games in Dubai win on retention, performance, and fair monetization. We build Unity and native components with tuned frame timing, asset streaming, and reliable session state. Our experience in game app development in DC helps when you need live ops, A/B testing, and scalable backends for events and leaderboards. We also design anti-cheat signals, safe purchase flows, and analytics that explain why players churn.",
      btn: "Let’s Build Your Game App!",
      StoryLineImg: StoryLine5,
    },
    {
      question: "Blockchain App Development in Dubai",
      answer:
        "Dubai’s blockchain projects succeed when they tie to identity, compliance, and traceable business events. We build smart contracts with clear permission models, rigorous reviews, and monitored execution, then expose them through simple wallet UX. For web3 solutions in Dubai, Appsters integrates KYC flows, audit logs, and secure key handling, so the product is usable by everyday operators. We also design off-chain services for speed, reporting, and recoverability across partner systems.",
      btn: "Let’s Build Your Blockchain App!",
      StoryLineImg: StoryLine6,
    },
  ];
  const storyLine = {
    subtitle: <> Google Certified </>,
    title: <> Certified Mobile App Developers in Dubai for High-Stakes Builds </>,
    para: "Appsters builds production systems with documented standards, testing, and security-first defaults. If you are comparing mobile app development services in Dubai, we make tradeoffs explicit. For teams searching for app makers near me in Dubai who understand local regulations, RTL layouts, and high-uptime hosting, we bring clarity, pace, and accountability.",
    subPara:
      "Here are the mobile app development services in Dubai that we offer:",
    accordionData: accordionData,
  };
  // Who We Are Content
  const WhoWeAre = {
    title: "Portfolio Built for Active Markets",
    desc: (
      <>
        In Dubai, portfolios can look impressive and still fail in production. Our projects are judged by adoption, uptime, and how quickly teams can ship weekly changes without regressions. {" "}
        <br className="d-xl-block d-none" /> Appsters builds app solutions in Dubai with disciplined architecture, measurable performance budgets, and observability baked in, so leaders see facts, not guesses.{" "}
      </>
    ),
    para: "Here is a showcase of some of our remarkable projects:",
    subtitleOne: (
      <>
        CreekPay  <br className="d-none d-md-block d-lg-none" /> Merchant Suite
      </>
    ),
    subDescOne:
      "CreekPay was built for merchant operations that need clean reconciliation, fast settlement visibility, and clear exception handling. The product supports multi-role access (ops, finance, support), and it treats every transaction like it might be disputed later, because in the real world, it often is. We designed the backend around idempotent payment events, traceable ledger entries, and retry-safe webhooks, so a temporary partner hiccup does not create double charges or “ghost” payments.",
    subtitleTwo: (
      <>
        Yard <br className="d-none d-md-block d-lg-none" /> Flow
      </>
    ),
    subDescTwo:
      "YardFlow supports yard and dock coordination inside high-throughput logistics environments where minutes cost money. We built it to reduce the constant phone calls between gate staff, yard marshals, and warehouse teams. The app manages driver check-ins, dock scheduling, QR-based job tokens, and exception routing when schedules change. It also tracks the real bottleneck in these operations: when a job is “in progress” but nobody can see where it is stuck.",
    subtitleThree: (
      <>
        Lease <br className="d-none d-md-block d-lg-none" /> Hub
      </>
    ),
    subDescThree:
      "LeaseHub was built for property and facilities teams managing tenant experiences across multi-building portfolios. The core is simple: maintenance requests, approvals, scheduling, updates, and payments. The difference is in the edge cases. Tenants submit incomplete tickets. Contractors show up late. Photos come in huge sizes. Approvals get stuck with the wrong role. That is where most property apps quietly fail. We built LeaseHub with structured ticketing, role-based approvals, SLA timers, and a transparent activity trail. Tenants get status clarity. Operations gets control. Management gets reporting they can use in weekly reviews.",
  };
  // delivered content
  const DeliveredContent = {
    title: <>We Have Successfully Brought 150+ App Ideas to Life!</>,
    desc: "Ready to See Yours Become a Reality?",
    btntext: "Book Your Free Consultation Now!",
  };
  // timeline Content
  const timeline = {
    classSec: "dubai",
    title: (
      <>
        {" "}
        Dubai App Development  <br />Process Built for Controlled <br /> Delivery{" "}
      </>
    ),
    desc: (
      <>
        <span className="d-block">
          Our Dubai App Development Process is designed to keep scope clear, quality measurable, and releases safe. Teams trust our mobile app development company in Dubai; when timelines are tight, 
        </span>
        <br />
        <span className="d-block">
          we break work into decision checkpoints. You see prototypes, test results, and readiness before features are marked done. 
        </span>
        <br />
        <span className="mb-5 mb-sm-0 d-block">
          This is how Dubai app solutions stay stable as requirements evolve.
        </span>
      </>
    ),
    heading1: "App Idea & Research",
    para1: (
      <>
        We start by pressure-testing the idea against Dubai user behavior, competitor expectations, and the operational reality behind the app. That includes data sources, approvals, partner dependencies, and revenue mechanics. We run quick stakeholder interviews, map user journeys, and define measurable success metrics. Before design begins, we identify risk items that typically derail Dubai app solutions, then turn them into clear requirements and acceptance criteria. You get a rough cost model.
      </>
    ),
    heading2: "Strategic Planning & Consultation",
    para2:
      "Planning is where projects either become predictable or chaotic. As a mobile app development company in Dubai, we document architecture choices, data ownership, integration contracts, and security controls. We agree on what must be real-time, what can be asynchronous, and how failures are handled. This is also where we define release strategy, environments, and the testing gates that protect production. Nothing proceeds on assumptions; decisions are captured clearly.",
    heading3: "Wireframing & Prototyping",
    para3:
      "Wireframes are built to expose workflow friction, permissions, and edge cases early. We prototype the core flows, then validate them with real stakeholders, including operations and support teams. Appsters also uses clickable prototypes to test Arabic and English layouts before UI polish begins. By the time app developers near Dubai start coding, they have clear screens, states, error handling, and acceptance criteria to follow. This keeps reviews simple and fast.",
    heading4: "App Development",
    para4:
      "Development at Appsters is structured around small, testable modules, not giant merges that hide risk. We implement API contracts, state management, caching, and secure storage, with code reviews focused on maintainability. Feature flags allow controlled releases and quick rollbacks. Compared with many mobile app companies in Dubai, we spend more time on instrumentation, so you can see crashes, slow screens, and backend latency in real usage from week one.",
    heading5: "Expert QA & Testing",
    para5:
      "QA is treated as an engineering function, not a final checklist. We run unit tests, integration tests, and device validation across common Dubai usage conditions, including network switching and high-latency APIs. Security testing covers storage, transport, and authentication flows. For Dubai app solutions that handle payments or sensitive data, we add regression suites and release gates, so quality stays consistent as features grow. Bugs are triaged by impact and cause.",
  };
  // ClientContent
  const ClientContent = {
    title: (
      <>
        {" "}
        See Why Stakeholders, Entrepreneurs, & Businesses <span>Choose Our App</span> Development & Technology <br />{" "}
       Solutions in Dubai.{" "}
      </>
    ),
    desc: (
      <>
        From founders to CTOs, businesses choose Appsters because every line of code serves a clear business purpose: growth, AI adaptability, and market edge. We measure success by the impact our solutions create, and our clients agree. From startups to global enterprises, clients trust our developers to engineer digital products that deliver progressive results.
      </>
    ),
  };
  // Delivered
  const desc = [
    {
      para: (
        <>
          The cost of developing an app in Dubai typically ranges between{" "}
          <span> AED 100,000 to AED 400,000+ </span>, depending on the app’s
          complexity and functionality.
        </>
      ),
    },
    {
      para: (
        <>
          At BitsWits, a simple app development project starts with just AED
          100,000, and it varies depending on your specific app needs.
        </>
      ),
    },
    {
      para: (
        <>
          However, if your app involves complex features and intricate
          functionalities, it means more time and cost will be involved.
        </>
      ),
    },
    {
      para: (
        <>
          Moreover, we ensure that the product you acquire in the end from us is
          of the highest quality and revenue-producing.
        </>
      ),
    },
    {
      para: (
        <>
          If you want to get an estimated cost for your app development project
          in Dubai, you can make use of our app development cost calculator.
        </>
      ),
    },
  ];
  const delivered = {
    title: "How Much Does it Cost to Make an App in Dubai",
    desc: desc,
    cta: "Book A Consultation Now!",
  };
  // Houston Content
  const menus = [
    " How much does building apps in Dubai usually cost?",
    "How long do mobile app development services in Dubai take end-to-end?",
    " How do I choose between mobile app development companies in Dubai?",
    " Should I build iOS, Android, or both in Dubai?",
    "Cutting-Edge Mobile App Development Frameworks Utilized by BitsWits",
    "What do “certified apps” mean in Dubai, and what should I ask for?",
    " What should post-launch support include for apps in Dubai?",
  ];
  const sections = [
    {
      num: "01",
      title: " How much does building apps in Dubai usually cost?",
      content: `<p class='fontsfregular'>If you ask three Dubai app developers for a quote, you will get three numbers, and it is not always dishonesty. The range is wide because the scope is wide. Many Dubai cost guides cite rough bands from about AED 20,000 to 50,000 for low complexity, AED 70,000 to 150,000 for mid complexity, and AED 200,000+ for high complexity builds.</p>
            <p class='fontsfregular'>A cleaner way to budget is to separate the build cost from the ownership cost. Post-launch maintenance is often budgeted annually, and some guides frame it as a meaningful ongoing percentage, not pocket change. In Dubai, Arabic localization, payments, identity, and enterprise integrations are the usual cost multipliers, so ask for a priced feature list, not a single total.</p>`,
    },
    {
      num: "02",
      title: "How long do mobile app development services in Dubai take end-to-end?",
      content: `<p class='fontsfregular'>Most timelines land in the “weeks to several months” band, and a common planning assumption is roughly 4 to 6 months for many full builds, with complexity pushing it longer. The time is rarely spent on screens alone. It gets consumed by backend decisions, integrations, QA depth, and release readiness.</p>
      <p class='fontsfregular'>If you want a realistic schedule, ask for a stage plan with acceptance criteria per stage: discovery, UX, build, QA, release, and a short stabilization window. Dubai app developers who skip stabilization usually push that pain into “urgent hotfixes” after launch, which is slower and more expensive in real life.</p>`,
    },
    {
      num: "03",
      title: " How do I choose between mobile app development companies in Dubai?",
      content: `<p class='fontsfregular'>Treat it like due diligence, ask for proof of process. A practical checklist includes:</p>
      <p class='fontsfregular'>How they handle security and compliance</p>
      <p class='fontsfregular'>What QA looks like, including device coverage</p>
      <p class='fontsfregular'>How they manage scope change and pricing</p> ,
      <p class='fontsfregular'>What post-launch support and scaling look like</p> ,
      <p class='fontsfregular'>Then ask a tougher question: “Show me how you detect problems in production.” If the answer is vague, that is a risk. Strong teams talk about crash reporting, performance monitoring, staged rollouts, and rollback paths because those are the tools that keep apps stable when users show up.</p> `,
    },
    {
      num: "04",
      title:
        " Should I build iOS, Android, or both in Dubai?",
      content: `<p class='fontsfregular'>For consumer products, most teams plan for both, unless your target segment is clearly skewed. For an enterprise, platform choice often follows device policy and field reality. The real decision is architecture: do you need native depth, or cross-platform speed? That depends on the camera, BLE, background tasks, long sessions, and performance sensitivity.</p>
        <p class='fontsfregular'>If you are unsure, start with a short technical spike. It is a small build that proves the hard parts: login, one core workflow, one integration, analytics, and a basic release pipeline. It gives you facts before you commit budget, and it keeps mobile application development Dubai plans grounded in reality.</p>`,
    },
    {
      num: "05",
      title:
        "Are no-code apps in Dubai good enough for real businesses?",
      content: `<p class='fontsfregular'>No-code apps in Dubai can be great for internal tools, quick prototypes, and operational dashboards where speed matters more than custom performance. The ceiling shows up when you need deep integrations, heavy data workloads, or fine-grained security control. Many no-code discussions highlight scalability, security, and vendor lock-in as common constraints as usage grows.</p>
      <p class='fontsfregular'>A sensible path is hybrid. Use no-code for admin tools and back-office workflows, and build the customer-facing app as custom software when you need reliability, security, and full control. That approach avoids overbuilding early, while still keeping your core product scalable.</p>`,
    },
    {
      num: "06",
      title:
        "What do “certified apps” mean in Dubai, and what should I ask for?",
      content: `<p class='fontsfregular'>“Certified apps” is not one universal label. In practice, it usually means the build follows a known security baseline and can produce evidence: test results, remediation notes, and controls verification. OWASP MASVS is widely used as a mobile security verification standard and is a common reference point for what “secure” should cover.</p>
        <p class='fontsfregular'>In Dubai, also ask how the team aligns data handling with UAE PDPL and, if relevant, DIFC requirements. You are not asking for legal advice; you are asking whether they design for privacy, access control, encryption, audit logs, and safe retention from day one.</p>`
    },
    {
      num: "07",
      title:
        " What should post-launch support include for apps in Dubai?",
      content: `<p class='fontsfregular'>Post-launch is where quality is either protected or slowly lost. At minimum, mobile app development services in Dubai should include crash monitoring, performance tracking, dependency patching, and a release routine that does not rely on heroics. Maintenance also needs a QA loop, not just “fixing bugs when users complain.”</p>
      <p class='fontsfregular'>Ask how they run updates: staged releases, rollback readiness, and a short checklist before every push. If you want extra confidence, request a documented testing checklist that includes security and privacy validation.</p>`,
    },
  ];
  const HoustonContent = {
    menus: menus,
    sections: sections,
  };
  // Blogs Content
  const blogBox = [
    {
      img: blog1,
      title: "Leading Grocery Delivery Apps Making Waves In Saudi Arabia",
      content:
        "Remember Carrying Heavy Bags Of Groceries Under The Sizzling Saudi Sun? Those Days Are Fast Disappearing Into A Memory As The Expedient Rise Of...",
    },
    {
      img: blog2,
      title: "Detail Overview For Online Shopping App In Saudi Arabia",
      content:
        "Online Shopping Apps Have Become A Keystone Of Today’s Retail Business, Transforming The Shopping Experience With Unprecedented Ease And A Wide...",
    },
    {
      img: blog3,
      title: "How To Develop An Android App: A Complete Guide",
      content:
        "There Are Around 2.69 Million Apps For Android Smartphones. Almost Everyone Understands Android Apps, And Many Are Ready To Launch Their Own. But...",
    },
  ];
  // Global Conten
  const global = {
    address:
      "Office 1402, Jumeirah Business Center 3 - Cluster Y - Jumeirah Lake Towers - Dubai - United Arab Emirates",
    number: "(971) 55 503 1266 ",
    href: "tel:+971555031266",
    image: MapImage,
    link: "https://maps.app.goo.gl/x56GvefpZPJFMbK7A",
  };
  return (
    <>
      {isMouseMoved && shouldRender ? (
        <>
          <Bannerdubai content={Banner} />
          <NewDubaiAwards content={Award} />
          <FutureReady content={storyLine} />
          <Whowearenew content={WhoWeAre} />
          <DubaiDelivered content={DeliveredContent} />
          <DubaiTimeline content={timeline} />
          <DubaiClients content={ClientContent} />
          <Delivered content={delivered} />
          <Industries />
          <Houtondubai content={HoustonContent} />
          <DubaiBrandTrust />
          <Expertappdubaiadvanced
            expertapp="expertapp"
            title="Next Generation Mobile Technologies to Dominate the Local Market"
            appData={[
              {
                title: "AI/ML",
                description:
                  "AI and ML only matter when they move a metric. We ship on device models for classification, anomaly detection, and smart ranking, then profile latency on real phones. We use quantization, batching, and caching to keep inference fast and battery safe. For Dubai teams, we also design privacy-aware pipelines so sensitive data stays controlled while models keep learning securely.",
                imageSrc: banImg2,
              },
              {
                title: "AR/VR",
                description:
                  "AR and VR break quickly when performance is ignored. We build ARKit and ARCore experiences with calibrated tracking, stable anchors, and lightweight assets so sessions stay smooth. Training, real estate previews, and field guidance all need accurate placement and predictable frame rates. We tune rendering, reduce thermal load, and keep interactions simple for users wearing gloves in bright sun outdoors.",
                imageSrc: banImg3,
              },
              {
                title: "Cloud Computing",
                description:
                  "We utilize cloud-native builds and edge computing to ensure your data is processed as close to the user as possible. We design backends with autoscaling, sensible rate limits, and clean API contracts so traffic spikes do not panic the system. Services are observable from day one with logs, metrics, and alerts tied to business events. We also plan data residency needs, backups, and disaster recovery so Dubai operations can keep moving every day.",
                imageSrc: banImg1,
              },
              {
                title: "IoT",
                description:
                  "IoT projects fail when devices and apps speak different languages. We build secure device onboarding, then move data using MQTT, WebSockets, or BLE, depending on latency and power needs. Edge processing reduces bandwidth and keeps controls responsive. We design dashboards that show device health, not raw noise. For Dubai fleets and facilities, that means faster interventions and fewer outages immediately.",
                imageSrc: banImg6,
              },
              {
                title: "Blockchain",
                description:
                  "Blockchain is useful when you need verifiable steps across parties. We implement smart contracts with clear permissions, reviews, and tests, then wrap them in a mobile UX that normal users can trust. Key management, signing flows, and recovery paths are designed early. For Dubai use cases like identity and supply traceability, we blend on-chain proofs with fast off-chain systems.",
                imageSrc: banImg4,
              },
              {
                title: "Big Data",
                description:
                  "Aligned with the Dubai Blockchain Strategy, we build decentralized solutions that prioritize transparency. We capture events, validate schemas, and process streams into clean tables that analysts can trust. Apps send structured telemetry, not random logs. We optimize queries, cache hot metrics, and secure access by role. Dubai leaders get real-time visibility without building a fragile reporting mess for every team.",
                imageSrc: banImg5,
              },
            ]}
          />
          <Justbuilditlpdubai
            title1="Just"
            title="Build It."
            para="Design, Develop, and Grow with BitsWits."
            slide="slide1lp"
            href="tel:+971 55 503 1266"
          />
          <Brand />
          <Faqdubai
            faqsData={[
              {
                question:
                  "What is the typical cost for custom software with Appsters? ",
                answer: (
                  <>
                    Building applications for Dubai clients requires a balance of high-end performance and budget efficiency. At Appsters, we provide a clear breakdown of costs based on Dubai’s competitive developer rates. We focus on building lean, high-output applications that give your brand a technical edge in a crowded market of app development companies in Dubai without wasting capital on fluff.
                  </>
                ),
              },
              {
                question:
                  "How does Appsters ensure my app stands out in Dubai’s tech market? ",
                answer: (
                  <>
                    We don't use templates. Every build from Appsters is engineered from the ground up to be faster and more secure than the competition. By focusing on a "UX-first" approach, we ensure your app feels premium and intuitive, which is the only way to win over the tech-savvy Dubai user base.

                  </>
                ),
              },
              {
                question:
                  "What technologies does Appsters use for cross-platform builds?",
                answer: (
                  <>
                    We are big believers in Flutter and React Native for our Dubai clients. This tech allows ourmobile app developers in Dubai to build one codebase that works perfectly on both iPhone and Android. It cuts your development time in half and makes maintenance much simpler, allowing you to spend more on marketing and less on redundant coding.
                  </>
                ),
              },
              {
                question:
                  "How long does it take for Appsters to launch a New MVP? ",
                answer: (
                  <>
                    Speed is key in Dubai City. Our app developer in Dubai can usually take a concept to a live MVP in about 12 to 14 weeks. We strip away the "nice-to-haves" and focus on the core functionality that solves your user's biggest pain point, getting you into the market and collecting real data as fast as possible.
                  </>
                ),
              },
              {
                question:
                  "Does Appsters handle the App Store and Google Play submission process? ",
                answer: (
                  <>
                   Yes. Navigating the legal and technical hurdles of Apple and Google is part of ourmobile app development service in Dubai. Appsters manages the entire deployment, from setting up your developer accounts to ensuring your app passes the final review without a hitch. We take the technical headache off your plate so you can focus on your launch.
                  </>
                ),
              },
              {
                question:
                  "What post-launch support does Appsters provide for local businesses? ",
                answer: (
                  <>
                   We don't just "build and bolt." As a leading mobile app development company in Dubai, Appsters offers ongoing support contracts that cover everything from server monitoring to quarterly feature updates. We keep your app updated for the latest phone models and OS versions, ensuring that your digital asset never goes stale or becomes a security risk.

                  </>
                ),
              },
            ]}
          />
          <Latestblog blogBox={blogBox} />
          <Globalmap content={global} />
        </>
      ) : (
        <>
          <Bannerdubai content={Banner} />/
          <Whowearenew content={WhoWeAre} />
          <DubaiClients content={ClientContent} />
          <Delivered content={delivered} />
          <Industries />
          <DubaiBrandTrust />
          <Expertappdubaiadvanced
            expertapp="expertapp"
            title="Advanced Technology Solutions for Large-Scale Businesses & Enterprises"
            appData={[
              {
                title: "Big Data",
                description:
                  "Big Data technology monitors vast data sources, offering real-time strategic insights for personalized user experiences and app optimization. Our expert mobile app developers in Dubai prioritize Big Data integration to captivate and retain your customers.",
                imageSrc: banImg2,
              },
              {
                title: "Internet of Things (IoT)",
                description:
                  "Our expert developers design IoT-enabled apps for real-time data collection, automation, and user-centric functionalities that surpass expectations. Collaborating with us enhances your success chances and secures a competitive edge in the market.",
                imageSrc: banImg3,
              },
              {
                title: "Blockchain",
                description:
                  "Utilizing Blockchain technology, our mobile app developers in Dubai use Blockchain technology to ensure secure and transparent transactions, maintaining data integrity and stability. We prioritize continuous communication with clients to deliver innovative digital products built on Blockchain technology.",
                imageSrc: banImg1,
              },
              {
                title: "AR/VR",
                description:
                  "Our AR/VR apps integrate creativity and technical expertise, providing distinctive market experiences. Whether elevating customer engagement, transforming training methods, or redefining education, they precisely address your requirements for immersive solutions.",
                imageSrc: banImg6,
              },
              {
                title: "AI/ML",
                description:
                  "Explore the future with our AI/ML apps, employing advanced technologies to create intelligent solutions that adapt to user's preferences. We specialize in integrating personalized recommendations and smart automation systems to enhance your app's functionality.",
                imageSrc: banImg4,
              },
              {
                title: "Cloud Computing",
                description:
                  "Rely on our expert app development company in Dubai for scalable and secure cloud services, allowing convenient storage, management, and analysis of your data. Our skilled team ensures a smooth transition to the cloud, enabling you to focus on core business processes.",
                imageSrc: banImg5,
              },
            ]}
          />
          <Justbuilditlpdubai
            title1="Just"
            title="Build It."
            para="Design, Develop, and Grow with BitsWits."
            slide="slide1lp"
            href="tel:+971 55 503 1266"
          />
          <Brand />
          <Faqdubai
            faqsData={[
              {
                question:
                  "How can I ensure a successful app launch in the UAE?",
                answer: (
                  <>
                    To develop your app in UAE successfully, it is necessary to
                    have a strategic implementation and work with a competent
                    app development company. At BitsWits, we provide
                    unparalleled mobile app development services that perfectly
                    address your business needs. At our disposal are experienced
                    and skilled professionals who guarantee that the work is
                    done on schedule and to your satisfaction. Through our
                    multi-faceted tech solutions and round-the-clock assistance,
                    we expedite the app launch process.
                  </>
                ),
              },
              {
                question:
                  "What factors influence the cost of creating an app in Dubai?",
                answer: (
                  <>
                    The price of building an app in Dubai varies based on
                    multiple factors, such as app classification, functionality,
                    abilities, tech stack, and your schedule and budget. At
                    BitsWits, you’ll get affordable app development services,
                    but this does not detriment quality. Contact our
                    professionals now for a personalized quote for your app
                    project in the UAE.
                  </>
                ),
              },
              {
                question:
                  "How long does it take to develop a mobile application in Dubai?",
                answer: (
                  <>
                    The time necessary for creating a mobile application in
                    Dubai with BitWits is defined by factors such as features,
                    design complexity, and business requirements. On average,
                    the app development process usually takes between 3 to 12
                    months. This is to ensure we give this process a proper time
                    frame and duration. Our team of well-trained personnel
                    guarantees timely delivery while maintaining high-quality
                    standards.
                  </>
                ),
              },
              {
                question:
                  "Why should I choose BitsWits for mobile app development services in Dubai?",
                answer: (
                  <>
                    Choosing BitsWits for your mobile app development needs in
                    Dubai means partnering with a team that has over 10+ years
                    of experience in the industry. We offer innovative solutions
                    and stay updated with emerging technologies like AI/ML,
                    AR/VR, Blockchain, Cloud, and Wearable technology. And much
                    more. Our app developers in Dubai ensure high productivity
                    and efficiency, delivering top-notch mobile app development
                    services and solutions.
                  </>
                ),
              },
              {
                question:
                  "Do you provide mobile app development support and maintenance services?",
                answer: (
                  <>
                    Our services include complete post-deployment support and
                    maintenance, which ensures that your application runs at its
                    maximum efficiency. Our support team will be there for you
                    if you need to address any concerns or make any releases for
                    your mobile app in Dubai.
                  </>
                ),
              },
            ]}
          />
          <Latestblog blogBox={blogBox} />
        </>
      )}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Mobile App Development Company in Dubai - BitsWits",
            url: "https://www.bitswits.co/mobile-app-development-company-dubai",
            potentialAction: {
              "@type": "SearchAction",
              target: "{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Mobile App Development Company in Dubai - BitsWits",
            alternateName: "BitsWits",
            url: "https://www.bitswits.co/mobile-app-development-company-dubai",
            logo: "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+971555031266",
              contactType: "customer service",
              areaServed: "AE",
              availableLanguage: "en",
            },
            sameAs: [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_/",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.youtube.com/@officialBitsWits",
              "https://www.linkedin.com/company/officialBitsWits",
            ],
          }),
        }}
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Mobile App Development Company in Dubai - BitsWits",
            image:
              "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdubai.07d013c3.webp&w=1920&q=75",
            "@id": "",
            url: "https://www.bitswits.co/mobile-app-development-company-dubai",
            telephone: "+971555031266",
            priceRange: "$10000",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Office 1402, Jumeirah Business Center 3 - Cluster Y - Jumeirah Lake Towers",
              addressLocality: "Dubai",
              addressRegion: "DU",
              addressCountry: "United Arab Emirates",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 25.0782658,
              longitude: -55.1537371,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            sameAs: [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_/",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.youtube.com/@officialBitsWits",
              "https://www.linkedin.com/company/officialBitsWits",
            ],
          }),
        }}
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Mobile App Development Company in Dubai - BitsWits",
            image:
              "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdubai.07d013c3.webp&w=1920&q=75",
            description:
              "Partner with BitsWits, your reliable mobile app development company in Dubai, for exceptional app development services perfectly suited to your needs.",
            brand: {
              "@type": "Brand",
              name: "BitsWits",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "974",
            },
          }),
        }}
      />
    </>
  );
}
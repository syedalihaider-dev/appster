import {
  BannerData, AboutData, NewServiceData, NewServiceDataList, PortfolioData, PortfolioDataList, NewCtaData, ExtendedServicesContent,
  ExtendedServicesList, ProcessContent, ProcessList, NewTesti, NewTestiList, NewSolutionData, NewSolutionsList, EngagementContent, EngagementDetailList, EngagementList,
  IndustriesContent, IndustriesSLIDES, FaqsContent,
  FaqsList, NewCtaData2,
} from "@/src/app/home/data/data";
import dynamic from "next/dynamic";
const Process = dynamic(() => import("@/src/app/home/process"));
const Banner = dynamic(() => import("@/src/app/home/banner"));
const About = dynamic(() => import("@/src/app/home/about"));
const Services = dynamic(() => import("@/src/app/home/newService"));
const Portfolio = dynamic(() => import("@/src/app/home/portfolio"));
const Cta = dynamic(() => import("@/src/app/home/newCta"));
const ExtendedServices = dynamic(() => import("@/src/app/home/extendedservices"));
const Testimonial = dynamic(() => import("@/src/app/home/newTestimonial"));
const Solutions = dynamic(() => import("@/src/app/home/newSolutions"));
const Engagement = dynamic(() => import("@/src/app/home/engagement"));
const Faqs = dynamic(() => import("@/src/app/home/faqs"));
const Cta2 = dynamic(() => import("@/src/app/home/newCta2"));
const Industries = dynamic(() => import("@/src/app/home/industries"));

const OPTIONS = { loop: true, align: 'center' }

export default function Page() {
  return (
    <>
      <Banner data={BannerData} />
      <About data={AboutData} />
      <Services data={NewServiceData} list={NewServiceDataList}/>
      <Portfolio data={PortfolioData} list={PortfolioDataList}/>
      <ExtendedServices data={ExtendedServicesContent} list={ExtendedServicesList} />
      <Cta data={NewCtaData} />
      <Process data={ProcessContent} list={ProcessList} />
      <Testimonial data={NewTesti} list={NewTestiList}/>
      <Solutions data={NewSolutionData} list={NewSolutionsList} />
      <Engagement data={EngagementContent} listDetail={EngagementDetailList} list={EngagementList} />
      <Industries data={IndustriesContent} slides={IndustriesSLIDES} options={OPTIONS} />
      <Faqs data={FaqsContent} list={FaqsList} />
      <Cta2 data={NewCtaData2} />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.appsters.io/",
              },
            ],
          }),
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Expert Mobile App Development Company | Appsters",
            "url": "https://www.appsters.io/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.appsters.io/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Expert Mobile App Development Company | Appsters",
            "alternateName": "Appsters",
            "url": "https://www.appsters.io/",
            "logo": "https://www.appsters.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1920&q=75",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1 833 500-6007",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": "en",
            },
            "sameAs": [
              "https://www.facebook.com/officialAppsters",
              "https://twitter.com/Appsters_",
              "https://www.instagram.com/officialAppsters/",
              "https://www.youtube.com/@officialAppsters",
              "https://www.linkedin.com/company/officialAppsters",
            ],
          }),
        }}
      />


      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Expert Mobile App Development Company | Appsters",
            "image": "https://www.appsters.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "url": "https://www.appsters.io/",
            "description":
              "Appsters empowers SMBs and entrepreneurs with mobile app development, delivering solutions across 10+ industries to drive business success and growth.",
            "brand": {
              "@type": "Brand",
              "name": "Appsters",
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.9",
                "bestRating": "5",
              },
              "author": {
                "@type": "Organization",
                "name": "Clutch",
                "url": "https://clutch.co/profile/Appsters",
              },
            },
          }),
        }}
      />

    </>
  );
}


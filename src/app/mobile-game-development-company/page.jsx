import Blogs from "@/src/app/services/blogs";
import Faqs from "@/src/app/services/faqs";
import Fueling from "@/src/app/services/fueling";
import IdeaCta from "@/src/app/services/ideacta";

import Offers from "@/src/app/services/offers";
import Process from "@/src/app/services/process";
import TechStack from "@/src/app/services/techstack";
import Testimonial from "@/src/app/services/testimonial";
import WhyChoose from "@/src/app/services/whychoose";
import Activity from "@/src/app/mobile-game-development-company/activity";
import Banner from "@/src/app/mobile-game-development-company/banner";
import ContentSec from "@/src/app/mobile-game-development-company/contentsec";
import GameCta from "@/src/app/mobile-game-development-company/gamecta";
import ContentSecLG from "@/src/app/mobile-game-development-company/largecontent";
import Projectdiscuss from "@/src/app/mobile-game-development-company/projectdiscuss";
import Services from "@/src/app/mobile-game-development-company/services";

import {
  BannerData, ProjectdiscussContent, ServicesContent,
  ServicesList, GameCtaContent, ContentSecContent,
  ContentSecLGContent, ProcessContent,
  WhyChooseContent, WhyChooseList1,
  WhyChooseList2, ProcessTabs, TestimonialContent,
  TestimonialSLIDES, OffersContent,
  OffersTabs, FuelingContent, FuelingList,
  TechStackTabs, TechStackContent, IdeaCtaContent,
  FaqsContent, FaqsList, BlogsContent,
  BlogsList
} from "@/src/app/mobile-game-development-company/data/data";

export default function Home() {
  return (
    <>
      <Banner data={BannerData} />
      <Activity />
      <Projectdiscuss data={ProjectdiscussContent} />
      <Services data={ServicesContent} list={ServicesList} />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <GameCta data={GameCtaContent} />
      <ContentSec data={ContentSecContent} />
      <Process data={ProcessContent} tabs={ProcessTabs} />
      <WhyChoose data={WhyChooseContent} list1={WhyChooseList1} list2={WhyChooseList2} />
      <Offers bg={true} data={OffersContent} tabs={OffersTabs} />
      <ContentSecLG data={ContentSecLGContent} />
      <IdeaCta data={IdeaCtaContent} />
      {/* <TechStack data={TechStackContent} tabs={TechStackTabs} /> */}
      <Fueling data={FuelingContent} list={FuelingList} />
      <Faqs data={FaqsContent} list={FaqsList} />
      <Blogs data={BlogsContent} list={BlogsList} />

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
                "item": "https://www.Appsters.co/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Mobile Game App Development Company",
                "item": "https://www.Appsters.co/mobile-game-development-company"
              }
            ]
          })
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Mobile Game App Development Company - Appsters",
            "url": "https://www.Appsters.co/mobile-game-development-company",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mobile Game App Development Company - Appsters",
            "alternateName": "Appsters",
            "url": "https://www.Appsters.co/mobile-game-development-company",
            "logo": "https://www.Appsters.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1920&q=75",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1 833 500-6007",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": "en"
            },
            "sameAs": [
              "https://www.facebook.com/officialAppsters",
              "https://twitter.com/Appsters_/",
              "https://www.instagram.com/officialAppsters/",
              "https://www.youtube.com/@officialAppsters",
              "https://www.linkedin.com/company/officialAppsters"
            ]
          })
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mobile Game App Development Company - Appsters",
            "image": "https://www.Appsters.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "url": "https://www.Appsters.co/mobile-game-development-company",
            "telephone": "833 500-6007",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2800 Post Oak Blvd STE 4100",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": "77056",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 29.7372487,
              "longitude": -95.4618603
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/officialAppsters",
              "https://twitter.com/Appsters_/",
              "https://www.instagram.com/officialAppsters/",
              "https://www.youtube.com/@officialAppsters",
              "https://www.linkedin.com/company/officialAppsters"
            ]
          })
        }}
      />

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Mobile Game App Development Company - Appsters",
            "image": "https://www.Appsters.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "url": "https://www.Appsters.co/mobile-game-development-company",
            "description": "Appsters is a leading mobile game app development company that uses the latest technology to help users create top-ranking game apps across 30+ genres.",
            "brand": {
              "@type": "Brand",
              "name": "Appsters"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.9",
                "bestRating": "5"
              },
              "author": {
                "@type": "Organization",
                "name": "Clutch",
                "url": "https://clutch.co/profile/Appsters"
              }
            }
          })
        }}
      />


    </>
  );
}

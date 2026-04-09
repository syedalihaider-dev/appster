
import {
  BannerData, OffersContent, OffersTabs, IdeaCtaContent, IdeaCtaContent2, BlogsContent, BlogsList,
  ChoiceData, ChoiceDataList, TechnologiesContent, TechnologiesIcons, newCtaData, ComparisonData, TechStackContent , TechStackTabs, PortfolioData, ProcessContent, ProcessList,
  NewTesti, NewTestiList
} from "@/src/app/mobile-application-development-services/data/data";
import {
  NewServiceData, NewServiceDataList, PortfolioDataList , IndustriesContent, IndustriesSLIDES, FaqsContent,
  FaqsList,
} from "@/src/app/home/data/data";
import dynamic from "next/dynamic";

import Achieved from "@/src/app/services/achieved";
import Banner from "@/src/app/services/banner";
const Services = dynamic(() => import("@/src/app/home/newService"));
const Portfolio = dynamic(() => import("@/src/app/home/portfolio"));
const Choice = dynamic(() => import("@/src/app/services/choice"));
const Process = dynamic(() => import("@/src/app/home/process"));
const Testimonial = dynamic(() => import("@/src/app/home/newTestimonial"));
const Industries = dynamic(() => import("@/src/app/home/industries"));
const Faqs = dynamic(() => import("@/src/app/home/faqs"));
import NewCta from "@/src/app/services/newcta";
import Technologies from "@/src/app/services/technologies";
import Offers from "@/src/app/services/offers";
import Comparison from "@/src/app/services/comparison";
import Techstack from "@/src/app/services/techstack";
import IdeaCta from "@/src/app/services/ideacta";
import Blogs from "@/src/app/services/blogs";


export default function Home() {

  return (
    <>
      <Banner data={BannerData} />
      <Achieved />
      <Services data={NewServiceData} list={NewServiceDataList} />
      <Portfolio data={PortfolioData} list={PortfolioDataList}/>
      <IdeaCta data={IdeaCtaContent} />
      <Choice data={ChoiceData} list={ChoiceDataList}/>
      <Process data={ProcessContent} list={ProcessList} />
      <Technologies data={TechnologiesContent} list={TechnologiesIcons} />
      <Testimonial data={NewTesti} list={NewTestiList}/>
      <NewCta data={newCtaData} />
      <Offers bg={true} data={OffersContent} tabs={OffersTabs} />
      <Comparison data={ComparisonData} />
      <Techstack data={TechStackContent} tabs={TechStackTabs}/>
      <Industries data={IndustriesContent} slides={IndustriesSLIDES}/>
      <IdeaCta data={IdeaCtaContent2} />
      <Faqs data={FaqsContent} list={FaqsList} />
      <Blogs data={BlogsContent} list={BlogsList} />


      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.bitswits.co/"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "Mobile App Development Services",
              "item": "https://www.bitswits.co/mobile-application-development-services"
            }]
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
            "name": "Top Mobile App Development Services | BitsWits",
            "url": "https://www.bitswits.co/mobile-application-development-services",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "{search_term_string}",
              "query-input": "required name=search_term_string"
            }
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
            "name": "Top Mobile App Development Services | BitsWits",
            "alternateName": "BitsWits",
            "url": "https://www.bitswits.co/mobile-application-development-services",
            "logo": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1920&q=75",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1 833 500-6007",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": "en"
            },
            "sameAs": [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_/",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.youtube.com/@officialBitsWits",
              "https://www.linkedin.com/company/officialBitsWits"
            ]
          }),
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Top Mobile App Development Services | BitsWits",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "@id": "",
            "url": "https://www.bitswits.co/mobile-application-development-services",
            "telephone": "+1 833 500-6007",
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
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_/",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.youtube.com/@officialBitsWits",
              "https://www.linkedin.com/company/officialBitsWits"
            ]
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
            "name": "Top Mobile App Development Services | BitsWits",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "url": "https://www.bitswits.co/mobile-application-development-services",
            "description": "BitsWits delivers best mobile app development services with the top app developers, offering customized solutions across industries for impactful results!",
            "brand": {
              "@type": "Brand",
              "name": "BitsWits"
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
                "url": "https://clutch.co/profile/bitswits"
              }
            }
          }),
        }}
      />
    </>
  );
}


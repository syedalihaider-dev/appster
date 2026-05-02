"use client"
import React, { useEffect } from 'react'
import styles from './page.module.css'
import Banner from '../../../components/CustomApp/Banner/Banner'
import IndustrySolutions from '../../../components/CustomApp/IndustrySolutions/IndustrySolutions'
import CaseStudySlider from '../../../components/CustomApp/CaseStudySlider/CaseStudySlider'
import ServiceCardsSlider from '../../../components/CustomApp/ServiceCardsSlider/ServiceCardsSlider'
import ClientTestimonials from '../../../components/CustomApp/ClientTestimonials/ClientTestimonials'
import AwardsSection from '../../../components/CustomApp/AwardsSection/AwardsSection'
import RecognitionSection from '../../../components/CustomApp/RecognitionSection/RecognitionSection'
import ContactSection from '../../../components/CustomApp/ContactSection/ContactSection'
import FooterSection from '../../../components/CustomApp/FooterSection/FooterSection'

const Page = () => {
  useEffect(() => {
    // Import bootstrap JS client-side only if needed for interactive components
    import("bootstrap/dist/js/bootstrap.bundle.min.js").catch(err => console.log("Bootstrap JS not needed/found", err));
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --font-poppins: 'Poppins', sans-serif;
        }
        html {
          scroll-behavior: smooth;
        }
        .lp-custom-app {
          font-family: var(--font-poppins);
          background: #fff;
          color: #111;
          overflow-x: hidden;
        }
        .lp-custom-app h1, 
        .lp-custom-app h2, 
        .lp-custom-app h3, 
        .lp-custom-app h4, 
        .lp-custom-app h5, 
        .lp-custom-app h6 {
          font-family: var(--font-poppins);
        }
        section {
            position: relative;
        }
      `}</style>
      
      <main className="lp-custom-app">
        <Banner />
        <IndustrySolutions />
        <CaseStudySlider />
        <ServiceCardsSlider />
        <ClientTestimonials />
        <AwardsSection />
        <RecognitionSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  )
}

export default Page

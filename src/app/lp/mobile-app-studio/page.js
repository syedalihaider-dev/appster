"use client"
import React from 'react'
import Header from '@/src/components/MobileAppStudio/Header'
import Banner from '@/src/components/MobileAppStudio/Banner'
import LeadingPartner from '@/src/components/MobileAppStudio/LeadingPartner'
import AwardsSlider from '@/src/components/MobileAppStudio/AwardsSlider'
import Services from '@/src/components/MobileAppStudio/Services'
import Portfolio from '@/src/components/MobileAppStudio/Portfolio'
import CTA from '@/src/components/MobileAppStudio/CTA'
import Process from '@/src/components/MobileAppStudio/Process'
import ToolsMaster from '@/src/components/MobileAppStudio/ToolsMaster'
import Testimonials from '@/src/components/MobileAppStudio/Testimonials'
import Industries from '@/src/components/MobileAppStudio/Industries'
import EngagementModels from '@/src/components/MobileAppStudio/EngagementModels'
import FAQs from '@/src/components/MobileAppStudio/FAQs'
// import GlobalPresence from '@/src/components/MobileAppStudio/GlobalPresence'
import Location from '@/src/app/services/location'
import ContactForm from '@/src/components/MobileAppStudio/ContactForm'
import Footer from '@/src/components/MobileAppStudio/Footer'
import Popup from '@/src/components/MobileAppStudio/Popup'
import locStyles from "@/styles/services/location.module.scss"
import styles from './page.module.css'
import Image from 'next/image'

const Page = () => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-montserrat: 'Montserrat', sans-serif;
          --font-dmsans: 'DM Sans', sans-serif;
        }
        .lp-mobile-app-studio {
          font-family: var(--font-dmsans);
          background: #fff;
          color: #111;
        }
        .lp-mobile-app-studio h1, 
        .lp-mobile-app-studio h2, 
        .lp-mobile-app-studio h3, 
        .lp-mobile-app-studio h4, 
        .lp-mobile-app-studio h5, 
        .lp-mobile-app-studio h6 {
          font-family: var(--font-montserrat);
        }
        section {
            position: relative;
        }
      `}</style>
      
      <main className="lp-mobile-app-studio">
        <Header />
        <Banner />
        <LeadingPartner />
        <AwardsSlider />
        <Services />
        <Portfolio />
        <CTA />
        <Process />
        <div className={styles.cover}>
          <Image src="/mobile-app-studio/cover-bg.png" alt="cover" fill className={styles.coverImg}/>
            <ToolsMaster />
            <Testimonials />
        </div>
        <Industries />
        <EngagementModels />
        <FAQs />
        {/* <GlobalPresence /> */}
        <Location bg={locStyles.lpBg} />
        <ContactForm />
        <Footer />
        {/* <Popup /> */}
      </main>
    </>
  )
}

export default Page

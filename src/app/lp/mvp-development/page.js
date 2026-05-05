"use client"
import React from 'react'
import Header from '@/src/components/mvp-development/Header'
import Banner from '@/src/components/mvp-development/Banner'
import LeadingPartner from '@/src/components/mvp-development/LeadingPartner'
import AwardsSlider from '@/src/components/mvp-development/AwardsSlider'
import Services from '@/src/components/mvp-development/Services'
import Portfolio from '@/src/components/mvp-development/Portfolio'
import CTA from '@/src/components/mvp-development/CTA'
import Process from '@/src/components/mvp-development/Process'
import ToolsMaster from '@/src/components/mvp-development/ToolsMaster'
import Testimonials from '@/src/components/mvp-development/Testimonials'
import Industries from '@/src/components/mvp-development/Industries'
import EngagementModels from '@/src/components/mvp-development/EngagementModels'
import FAQs from '@/src/components/mvp-development/FAQs'
// import GlobalPresence from '@/src/components/mvp-development/GlobalPresence'
import Location from '@/src/app/services/location'
import ContactForm from '@/src/components/mvp-development/ContactForm'
import Footer from '@/src/components/mvp-development/Footer'
import Popup from '@/src/components/mvp-development/Popup'
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
        .lp-mvp-development {
          font-family: var(--font-dmsans);
          background: #fff;
          color: #111;
        }
        .lp-mvp-development h1, 
        .lp-mvp-development h2, 
        .lp-mvp-development h3, 
        .lp-mvp-development h4, 
        .lp-mvp-development h5, 
        .lp-mvp-development h6 {
          font-family: var(--font-montserrat);
        }
        section {
            position: relative;
        }
        .lp-mvp-development {
            overflow-x: hidden;
        }
      `}</style>
      
      <main className="lp-mvp-development">
        <Header />
        <Banner />
        <LeadingPartner />
        <AwardsSlider />
        <Services />
        <Portfolio />
        <CTA />
        <Process />
        <div className={styles.cover}>
          <Image src="/mvp-development/cover-bg.webp" alt="cover" fill className={styles.coverImg}/>
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

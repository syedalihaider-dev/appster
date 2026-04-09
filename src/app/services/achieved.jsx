"use client"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/achieved.module.scss"
import { ArrowIcon } from "@/src/app/app-constants"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
// Awards
import AwardsIMG01 from "media/awards/1.webp"
import AwardsIMG02 from "media/awards/2.webp"
import AwardsIMG03 from "media/awards/3.webp"
import AwardsIMG04 from "media/awards/4.webp"
import AwardsIMG05 from "media/awards/5.webp"
import AwardsIMG06 from "media/awards/6.webp"
import AwardsIMG07 from "media/awards/7.webp"
import { usePathname } from "next/navigation"

const options = { align: "start", loop: "true" }

export const Awards = [
  {
    text: "40+",
    title: "Industries Served",
    desc: "Our experience spans Saas, healthcare, finance, retail, automotive, and more, with solutions adapted to each sector’s demands for security, AI, compliance, and user adoption.",
  },
  {
    text: "3000+",
    title: "Apps and Solutions Delivered",
    desc: "Thousands of projects executed with an emphasis on speed, AI-adoption, stability, and clear ROI across both startup and enterprise environments.",
  },
  {
    text: "60+",
    title: "AI Models Deployed",
    desc: "Every model is designed for high accuracy, reliable outputs, and performance at scale for mission-critical workflows and more.",
  },
  {
    text: "50,000+",
    title: "Legacy Processes Modernized",
    desc: "Outdated processes replaced with modern, streamlined systems that cut costs and improve operational efficiency.",
  },
  {
    text: "250+",
    title: "Engineers and Designers",
    desc: "A global team skilled in native mobile app development, AI-driven ecosystems, cross-platform builds, and enterprise architecture.",
  },
  {
    text: "95%",
    title: "Client Retention",
    desc: "Long-term partnerships built on trust, consistent delivery, and continuous optimization of live applications.",
  },
]

const Achieved = () => {
  const router = usePathname()
  const [emblaRef, embla] = useEmblaCarousel(options, [Autoplay()])

  const prevButtonHandler = () => {
    if (embla) embla.scrollPrev()
  }

  const nextButtonHandler = () => {
    if (embla) embla.scrollNext()
  }
  return (
    <section className={`${styles.achievedSection} pt-100`}>
      <Container>
        <Row>
          <Col lg={6} md={12}>
            {router.startsWith("/enterprise-app-development-company") ? (
              <h2>Trusted By The Industry, Backed By Recognition & Numbers</h2>
            ) : (
              <h2>Trusted By The Industry, Backed By Recognition & Numbers.</h2>
            )}
            <p>
              Being a leading AI mobile app development company, we have been recognized for turning cutting-edge ideas into real-world impact. Our awards validate a culture of technical rigor, enterprise reliability, and AI innovation that businesses can count on at scale.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <section className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                  {Awards.map((item, index) => (
                    <div className={styles.embla__slide} key={index}>
                      <div className={styles.achievedCard} key={index}>
                        <div className={styles.achievedContent}>
                          <div className={styles.data}>
                            <h3>{item.text}</h3>
                            <span>{item.title}</span>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.embla_container}>
                <div className={styles.embla_prev} onClick={prevButtonHandler}>
                  <ArrowIcon direction="prev" />
                </div>
                <div className={styles.embla_next} onClick={nextButtonHandler}>
                  <ArrowIcon direction="next" />
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Achieved

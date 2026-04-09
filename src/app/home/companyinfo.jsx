"use client";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/companyinfo.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const IMG01 = "/home/awards/award01.webp";
const IMG02 = "/home/awards/award02.webp";
const IMG03 = "/home/awards/award03.webp";
const IMG04 = "/home/awards/award04.webp";
const IMG05 = "/home/awards/award05.webp";
const IMG06 = "/home/awards/award06.webp";
const IMG07 = "/home/awards/award07.webp";
const IMG08 = "/home/awards/award08.webp";
import Image from "next/image";
const BannerPoster = "/home/companyVideoPoster.webp";

const options = { align: "start", loop: true };

export const Awards = [
  {
    AwardsIMG: IMG01,
  },
  {
    AwardsIMG: IMG02,
  },
  {
    AwardsIMG: IMG03,
  },
  {
    AwardsIMG: IMG04,
  },
  {
    AwardsIMG: IMG05,
  },
  {
    AwardsIMG: IMG06,
  },
  {
    AwardsIMG: IMG07,
  },
  {
    AwardsIMG: IMG08,
  },
];
const CompanyInfo = ({ data }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);
  return (
    <section className={`${styles.companyInfoSection} p-100`}>
      <Container className="h-100">
        <Row className="h-100">
          <Col lg={8} md={12} className="my-auto">
            <div className="subTitle txtColor">{data?.subtitle}</div>
            <h2>{data?.title}</h2>
            <p>{data?.content}</p>
            <div className={styles.companyStats}>
              <div className={styles.statsItem}>
                <div className="txtColor">5K+</div>
                <span>Brainstorms Held (and counting)</span>
              </div>
              <div className={styles.statsItem}>
                <div className="txtColor">0%</div>
                <span>
                  Distractions — Because We Only Focus on Your Success
                </span>
              </div>
              <div className={styles.statsItem}>
                <div className="txtColor">98%</div>
                <span>Clients Recommend Us Without Being Asked</span>
              </div>
              <div className={styles.statsItem}>
                <div className="txtColor">1M+</div>
                <span>
                  Lines of Code Written With Care (and a Little Caffeine)
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <section className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                  {Awards.map((item, index) => (
                    <div className={styles.embla__slide} key={index}>
                      <div className={styles.awardsImg}>
                        <Image
                          src={item.AwardsIMG}
                          alt="Achieved Logo"
                          width={250}
                          height={250}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
      <video
        autoPlay
        muted
        loop
        preload="auto"
        aria-label="Background video"
        loading="eager"
        poster={BannerPoster}
        playsInline
        className={styles.companyVideo}
      >
        <source src="/videos/companyVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default CompanyInfo;

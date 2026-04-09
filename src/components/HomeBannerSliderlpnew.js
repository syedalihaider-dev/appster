import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import styles from "@/styles/NewBannerlpnew.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//images
const banImg1 = "/newdubai/slider/1.png";
const banImg2 = "/newdubai/slider/2.png";
const banImg3 = "/newdubai/slider/3.png";
const banImg4 = "/newdubai/slider/4.png";
const banImg5 = "/newdubai/slider/5.png";
const banImg6 = "/newdubai/slider/6.png";
const banImg7 = "/newdubai/slider/7.png";
const banImg8 = "/newdubai/slider/8.png";


export default function HomeBannerSliderlpnew(props) {
  return (
    <>
      <section className={`${styles.BannerSlider} ${styles[props.assignClass]} newtude pt-3 pb-3`}>
        <Container>
          <div className="slider">
            <div className="slideTrack">
              <div className="slide">
                <Image
                  quality={100}
                  alt="BitsWits"
                  src={banImg1}
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <div className="slide">
                <Image
                  quality={100}
                  alt="BitsWits"
                  src={banImg2}
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <div className="slide">
                <Image
                  quality={100}
                  alt="BitsWits"
                  src={banImg3}
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <div className="slide">
                <Image
                  quality={100}
                  alt="BitsWits"
                  src={banImg4}
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <div className="slide">
                <Image
                  quality={100}
                  alt="BitsWits"
                  src={banImg5}
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <div className="slide">
                <Image
                  quality={100}
                  alt="BitsWits"
                  src={banImg6}
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <div className="slide">
                <Image
                  quality={100}
                  alt="BitsWits"
                  src={banImg7}
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <div className="slide">
                <Image
                  quality={100}
                  alt="BitsWits"
                  src={banImg8}
                  width={200}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <div className="slide">
                <Image
                  quality={100}
                  alt="BitsWits"
                  src={banImg1}
                  className="img-fluid"
                />
              </div>
              <div className="slide">
                <Image
                  quality={100}
                  alt="BitsWits"
                  src={banImg2}
                  className="img-fluid"
                />
              </div>
              <div className="slide">
                <Image
                  quality={100}
                  alt="BitsWits"
                  src={banImg3}
                  className="img-fluid"
                />
              </div>
              <div className="slide">
                <Image
                  quality={100}
                  alt="BitsWits"
                  src={banImg4}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>



      <section className={styles.newtalk}>
        <Container>
          <Row className="g-1">
            <Col lg={5}>
              <h4>Business Empowering App Development Company in UAE</h4>
            </Col>
            <Col lg={7}>
              <p>With years of empowering startups and well-entrenched brands through advanced app development solutions, we caught the attention of several credible platforms worldwide (Zawya & Lovin Dubai in Dubai) while getting recognition in the mobile app development industry. Today, we're an end-to-end mobile app development solution provider with highly talented individuals that are primed to take your mobile app development project to the next level.</p>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
}

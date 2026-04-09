"use client";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/cost.module.scss";
import SmartPhone from "@/public/home/smartphone-mockup-clay-01-1.webp"
import Image from "next/image";

const CostFold = ({ data }) => {
  
  return (
    <>
      <section className={styles.costSec}>
        <Container>
            <div className={styles.costSecText}>
                <h2><span className="txtColor">Budget-Friendly Mobile App</span> Development Cost in Austin</h2>
                <p>Affordability is what makes us special. We provide enterprise-grade mobile app development services in Austin that fit your budget. Our packages cover all types of businesses, including tech startups, small businesses, and billion-dollar ventures.</p>
                <h4>Here’s a breakdown of our pricing plan</h4>
            </div>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <div className={styles.card}>
                        <div className={styles.topLabel}>
                            <span>Basic App</span>
                        </div>
                        <div className={styles.textCont}>
                            <h3>$5k - $20k</h3>
                            <p>The basic plan offers essential mobile app features like UI/UX design, basic backend integration, responsive development, and third-party API support. This development package is best for startups and small businesses.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div className={styles.card}>
                        <div className={styles.topLabel}>
                            <span>Basic App</span>
                        </div>
                        <div className={styles.textCont}>
                            <h3>$5k - $20k</h3>
                            <p>The basic plan offers essential mobile app features like UI/UX design, basic backend integration, responsive development, and third-party API support. This development package is best for startups and small businesses.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div className={styles.card}>
                        <div className={styles.topLabel}>
                            <span>Basic App</span>
                        </div>
                        <div className={styles.textCont}>
                            <h3>$5k - $20k</h3>
                            <p>The basic plan offers essential mobile app features like UI/UX design, basic backend integration, responsive development, and third-party API support. This development package is best for startups and small businesses.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div className={styles.box}>
                        <div className={styles.imgCont}>
                            <Image src={SmartPhone} />
                        </div>
                        <div className={styles.textContent}>
                            <p>Determine the Precise Cost for Your Mobile App Development Project with Our Cost Calculator</p>
                            <a href="">Get a  Free Quote <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 17L15 12L10 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 17L21 12L16 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  );
};

export default CostFold;

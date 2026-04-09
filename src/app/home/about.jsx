"use client";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/about.module.scss";
const IMG01 = "/home/awards/award01.webp";
const IMG02 = "/home/awards/award02.webp";
const IMG03 = "/home/awards/award03.webp";
const IMG04 = "/home/awards/award04.webp";
const IMG05 = "/home/awards/award05.webp";
const IMG06 = "/home/awards/award06.webp";
const IMG07 = "/home/awards/award07.webp";
const IMG08 = "/home/awards/award08.webp";
import Image from "next/image";


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
];

const About = ({ data }) => {

    return (
        <>
            <section className={styles.aboutSection}>
                <Container>
                    <div className={styles.topIcon}>
                        <ul>
                            {Awards.map((item, index) => (
                                <li key={index}>
                                    <Image
                                        src={item.AwardsIMG}
                                        alt="Achieved Logo"
                                        width={250}
                                        height={250}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.aboutSecText}>
                        <h2>{data?.title}</h2>
                        <div className={styles.aboutSecpara}>{data?.content}</div>
                    </div>
                    <Row className="gx-lg-4 gy-lg-5">
                        <Col lg={4} md={4} sm={1}>
                            <div className={styles.aboutSecBox}>
                                <div className={styles.aboutSecBoxText}>
                                    <h3 className="txtColor">40+</h3>
                                    <h4>Industries Served</h4>
                                    <p>Our experience spans Saas, healthcare, finance, retail, automotive, and more, with solutions adapted to each sector’s demands for security, AI, compliance, and user adoption.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={1}>
                            <div className={styles.aboutSecBox}>
                                <div className={styles.aboutSecBoxText}>
                                    <h3 className="txtColor">3000+</h3>
                                    <h4>Apps and Solutions Delivered</h4>
                                    <p>Thousands of projects executed with an emphasis on speed, AI-adoption, stability, and clear ROI across both startup and enterprise environments.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={1}>
                            <div className={styles.aboutSecBox}>
                                <div className={styles.aboutSecBoxText}>
                                    <h3 className="txtColor">60+</h3>
                                    <h4>AI Models Deployed</h4>
                                    <p>Every model is designed for high accuracy, reliable outputs, and performance at scale for mission-critical workflows and more.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={1}>
                            <div className={styles.aboutSecBox}>
                                <div className={styles.aboutSecBoxText}>
                                    <h3 className="txtColor">50,000+</h3>
                                    <h4>Legacy Processes Modernized</h4>
                                    <p>Outdated processes replaced with modern, streamlined systems that cut costs and improve operational efficiency.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={1}>
                            <div className={styles.aboutSecBox}>
                                <div className={styles.aboutSecBoxText}>
                                    <h3 className="txtColor">250+</h3>
                                    <h4>Engineers and Designers</h4>
                                    <p>A global team skilled in native mobile app development, AI-driven ecosystems, cross-platform builds, and enterprise architecture.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={1}>
                            <div className={styles.aboutSecBox}>
                                <div className={styles.aboutSecBoxText}>
                                    <h3 className="txtColor">95%</h3>
                                    <h4>Client Retention</h4>
                                    <p>Long-term partnerships built on trust, consistent delivery, and continuous optimization of live applications.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default About;

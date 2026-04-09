"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/about/keypoints.module.scss";
const BgImg = "/about/abtBG.webp"

const keyPointsData = [
    {
        title: "Mission", content: (<>
            <p><strong>At Appsters, we fuel innovators and industry leaders by transforming bold ideas into digital solutions that shape markets and set new standards.</strong></p>
            <p>We reimagine technology to unlock business potential, stripping away complexity and replacing it with clarity, agility, and power. Guided by entrepreneurial drive and a culture of relentless innovation, we push past limits to craft solutions that are not just functional, but transformative. Our mission: to empower visionaries with technology that defines the future.</p>
        </>)
    },
    {
        title: "Vision", content: (<>
            <p><strong>We envision a future where technology seamlessly enhances human potential and fuels limitless possibilities.</strong></p>
            <p>At Appsters, our mission is to drive the global transformation of industries by making advanced digital solutions as accessible and indispensable as everyday utilities. We’re committed to creating intelligent interfaces and experiences that are not only intuitive but transformative—empowering businesses and individuals to thrive in a smarter, more connected world.</p>
        </>)
    },
    {
        title: "Story", content: (<>
            <p><strong>At Appsters, our story began with a shared vision: to simplify technology and create apps that truly make an impact.</strong></p><p> What started as a small team of passionate developers has grown into a trusted global app development company, serving startups and enterprises alike. With creativity at our core and innovation as our compass, we build mobile solutions that empower businesses, engage users, and redefine digital possibilities. Every app we craft is a step toward shaping smarter, connected futures.</p>
        </>)
    }
];

const KeyPoints = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={`${styles.aboutSection} pb-100`} style={{ backgroundImage: `url(${BgImg})` }}>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className={styles.keypointsContainer}>
                            <div className={styles.keypointsTitle}>
                                <ul className={styles.keypointsListing}>
                                    {keyPointsData.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`${styles.listingItem} ${activeIndex === index ? styles.active : ""}`}
                                            onClick={() => setActiveIndex(index)}
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                                    {keyPointsData.map((item, index) => (
                                        <div className={`${styles.bgTxt} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                            {item.title}
                                        </div>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.keypointsContent}>
                                {keyPointsData[activeIndex].content}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default KeyPoints;

"use client"
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/about/story.module.scss";

const data = [
    {
        title: "Years of Experience",
        points: "10+",
    },
    {
        title: "Successful Projects",
        points: "1,200+",
    },
    {
        title: "Experts",
        points: "60+",
    },
    {
        title: "Global Clients",
        points: "100+",
    }
];

const Story = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`${styles.storySection} pb-100`}>
            <Container>
                <Row>
                    <Col lg={5} md={6}>
                        <div className="subTitle">Our Story</div>
                        <h2>From Shared Struggles to a Unified Vision</h2>
                        <p>Before Appsters became synonymous with digital innovation, our founders—spread across different parts of the world—faced a common challenge: the unnecessary complexity of technology. They witnessed businesses weighed down by digital tools that promised progress but delivered frustration. This shared experience sparked a mission to change the narrative—transforming complexity into clarity and building solutions that empower businesses instead of limiting them. That vision became the foundation of Appsters.</p>
                    </Col>
                    <Col lg={6} md={6} className="my-auto offset-lg-1">
                        <div className={styles.storyPoints}>
                            {data.map((item, index) => (
                                <div
                                    className={`${styles.storyItem} ${index === activeIndex ? styles.active : ""}`}
                                    key={index}
                                >
                                    {item.points}
                                    <div className={styles.storyTxt}>{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default Story;

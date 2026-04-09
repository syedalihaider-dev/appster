"use client";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/services/techstack.module.scss";
import Image from "next/image";




const TechStack = ({ data, tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={`${styles.stackSection}`}>
            <Container>
                <div className={styles.stackSecText}>
                    <h2>{data?.title}</h2>
                    <p>{data?.text}</p>
                </div>
            </Container>
            <div className={styles.tabMain}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className={styles.tabName}>
                                <ul>
                                    {tabs.map((tab, index) => (
                                        <li
                                            key={index}
                                            className={index === activeTab ? styles.active : ""}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            {tab.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.tabContent}>
                                <div className={styles.tabPane}>
                                    <ul>
                                        {tabs[activeTab].content.map((item, index) => (
                                            <li className={styles.tabtxtBox} key={index}>
                                                <h2>{item.title}</h2>
                                                <div className={styles.txtImg}>
                                                    <Image
                                                        src={item.img}
                                                        alt={item.heading}
                                                        height={80}
                                                        width={80}
                                                    />
                                                </div>
                                                <div className={styles.txtTitle}>
                                                    {item.heading}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default TechStack;

"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/faqs.module.scss";
import { PlusFaqIcon, MinusFaqIcon } from "@/src/app/app-constants";



const Faqs = ({ data, list, bg }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`${styles.faqsSection} p-100 ${bg ? styles.BlackBg : ''}`}>
            <Container>
                <div className={styles.faqSectionText}>
                    <h2>{data?.title}</h2>
                </div>
                <div className={styles.faqSectionPanel}>
                    {list.map((items, index) => (
                        <div className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""}`} key={index}>
                            <div
                                className={`${styles.faqsTitle} ${activeIndex === index ? styles.active : ""}`}
                                onClick={() => toggleFaq(index)}
                            >
                                {bg ? <span>0{index + 1}</span> : ""} {items.title} {activeIndex === index ? <MinusFaqIcon /> : <PlusFaqIcon />}
                            </div>
                            <div className={`${styles.faqscontent} ${activeIndex === index ? styles.active : ""}`}>
                                {items.txt}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section >
    );
};

export default Faqs;

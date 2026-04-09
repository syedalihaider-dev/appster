
"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/process.module.scss"
import { ServiceArrow } from "@/src/app/app-constants"
import PopUp from "@/src/app/services/popup";
import { useState } from "react";
import ButtonCommon from "@/src/components/common/button";


const Process = ({ data, list }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };
    return (
        <section className={`${styles.processSec} p-100`}>
            <Container>
                <Row>
                    <Col lg={5} sm={12} className={styles.stickyClass}>
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                        <p>{data?.content}</p>
                        <ButtonCommon txt="Talk To Our App Consultants" extraClass="processBtn" />
                    </Col>
                    <Col lg={7} sm={12}>
                        <div className={styles.processBox}>
                            {list.map((item, index) => (
                                <div className={styles.processList} key={index}>
                                    <div className={styles.processContent}>
                                        <h5>{item.title}</h5>
                                        <p>{item.txt}</p>
                                    </div>
                                    <div className={styles.processContentNewIco}>
                                        <span className={styles.processContentNewIco1}></span>
                                        <span className={styles.processContentNewIco2}></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </section>
    )
}

export default Process
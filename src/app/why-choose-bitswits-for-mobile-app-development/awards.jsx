import styles from "@/styles/why-choose/awards.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
const IMG01 = "/home/awards/award01.webp"
const IMG02 = "/home/awards/award02.webp"
const IMG03 = "/home/awards/award03.webp"
const IMG04 = "/home/awards/award04.webp"
const IMG05 = "/home/awards/award05.webp"
const IMG06 = "/home/awards/award06.webp"

import Image from "next/image"

const Awards = () => {
    return (
        <section className={styles.awardsSection}>
            <Container>
                <Row>
                    <Col className="text-center">
                        <div className="subTitle txtColor">Awards & Recognition</div>
                        <h2>Digital Marketing Awards & Recognitions</h2>
                    </Col>
                    <Col md={12}>

                        <div className={styles.awardsWapper}>
                            <div className={styles.awardsItem}>
                                <div className={styles.awardsLogo}>
                                    <Image src={IMG01} alt="Digital Agences" width={250} height={250} />
                                </div>
                                <div className={styles.awardsTxt}>Most Rewiewed Digital Agences in Huston for 2022 by <span>The Manifest</span></div>

                            </div>
                            <div className={styles.awardsItem}>
                                <div className={styles.awardsLogo}>
                                    <Image src={IMG02} alt="Digital Agences" width={250} height={250} />
                                </div>
                                <div className={styles.awardsTxt}>Most Rewiewed Digital Agences in Huston for 2022 by <span>The Manifest</span></div>

                            </div>
                            <div className={styles.awardsItem}>
                                <div className={styles.awardsLogo}>
                                    <Image src={IMG03} alt="Digital Agences" width={250} height={250} />
                                </div>
                                <div className={styles.awardsTxt}>Most Rewiewed Digital Agences in Huston for 2022 by <span>The Manifest</span></div>

                            </div>
                            <div className={styles.awardsItem}>
                                <div className={styles.awardsLogo}>
                                    <Image src={IMG04} alt="Digital Agences" width={250} height={250} />
                                </div>
                                <div className={styles.awardsTxt}>Most Rewiewed Digital Agences in Huston for 2022 by <span>The Manifest</span></div>

                            </div>
                            <div className={styles.awardsItem}>
                                <div className={styles.awardsLogo}>
                                    <Image src={IMG05} alt="Digital Agences" width={250} height={250} />
                                </div>
                                <div className={styles.awardsTxt}>Most Rewiewed Digital Agences in Huston for 2022 by <span>The Manifest</span></div>

                            </div>
                            <div className={styles.awardsItem}>
                                <div className={styles.awardsLogo}>
                                    <Image src={IMG06} alt="Digital Agences" width={250} height={250} />
                                </div>
                                <div className={styles.awardsTxt}>Most Rewiewed Digital Agences in Huston for 2022 by <span>The Manifest</span></div>

                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Awards
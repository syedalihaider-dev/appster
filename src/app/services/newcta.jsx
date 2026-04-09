import styles from "@/styles/services/newcta.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ButtonCommon from "@/src/components/common/button";
const ctaImg = "/home/choosen-mob.webp"
import Image from "next/image";


const CtaEstimated = ({ data }) => {
    return (
        <section className={styles.ctaSection}>
            <Container>
                <div className={styles.ctaSectionMain}>
                    <Row className="h-100 align-items-center">
                        <Col lg={7}>
                            <div className={styles.ctaSectionMainText}>
                                <h2>{data?.title}</h2>
                                <p>{data?.text}</p>
                                <ButtonCommon txt="Free Consultation" />
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className={styles.ctaSectionMainImg}>
                                <Image src={ctaImg} width={500} height={500} alt="BitsWits" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default CtaEstimated
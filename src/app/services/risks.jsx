import ButtonCommon from "@/src/components/common/button"

import Link from "next/link"
import styles from "@/styles/services/risks.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import { PHONE_NUMBER, EMAIL_ADDRESS } from "@/src/app/app-constants"


const Risks = ({ data }) => {
    return (
        <section className={`${styles.riskSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={12} md={12} className="my-auto text-center">
                        <div className={styles.customTitle}>
                            {data?.title}
                        </div>
                        <p>{data?.text}</p>

                        <ButtonCommon txt="Free Consultation" />
                        <div className={styles.flexBtn}>
                            <div className={styles.telNumber}>
                                <Link href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</Link>
                            </div>
                            <div className={styles.emailAddress}>
                                <Link href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Risks
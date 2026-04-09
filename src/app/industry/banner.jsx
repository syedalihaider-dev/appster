import styles from "@/styles/industry/banner.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import ButtonCommon from "@/src/components/common/button"

const Banner = ({ data }) => {
    return (
        <>
            <section className={styles.industryBanner}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7} md={7}>
                            <h1>{data?.title}</h1>
                            <p>{data?.content}</p>
                            <div className={styles.btnFlex}>
                                <ButtonCommon txt="Free Consultation" />
                            </div>
                        </Col>
                        <Col lg={5} md={7}>
                            <div className={styles.bannerImg}>
                                {data?.BannerImg}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner
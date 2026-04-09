import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/about/abtcta.module.scss";
const BgImg = "/about/bgCTA.webp"
import ButtonCommon from "@/src/components/common/button";

const AbtCta = () => {
    return (
        <section className={`${styles.abtctaSection}`} style={{ backgroundImage: `url(${BgImg})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={10} md={12} className="text-center m-auto">
                        <h2>One Call Can Change
                            <div className={styles.extraFonts}> Let’s Build the App That Builds Your Future!</div>
                        </h2>
                        <ButtonCommon txt="Lets Discuss!" />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default AbtCta
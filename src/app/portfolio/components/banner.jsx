import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/projectbanenr.module.scss"

const Banner = () => {
    return (
        <section className={`${styles.projectSection}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xl={8} lg={9} md={9} className="mx-auto mt-auto">
                        <h1>Shaping Ideas Into Digital Success — <span className="txtColor">Explore Our Portfolio</span></h1>
                        <p>At Appsters, every app we create is more than just code — it’s a catalyst for growth, innovation, and market impact. Our portfolio reflects partnerships with startups, enterprises, and industry leaders who trusted us to turn vision into reality. From sleek consumer apps to enterprise-grade solutions, each project demonstrates our commitment to innovation, user-centric design, and measurable results. Discover how our mobile solutions empower businesses to stand out and thrive in competitive digital landscapes.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
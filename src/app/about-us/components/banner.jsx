import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/portfolio/projectbanenr.module.scss";
import ButtonCommon from "@/src/components/common/button";

const Banner = () => {
  return (
    <section className={`${styles.projectSection}`}>
      <Container className="h-100">
        <Row className="h-100">
          <Col lg={7} md={10} className="mx-auto mt-auto text-center">
            <h1>
              About Us - <span className="txtColor">Appsters!</span>
            </h1>
            <p>
              At Appsters, we build digital solutions that turn complexity into clarity and innovation into impact. What began as a collaboration of global tech visionaries has grown into a trusted force in mobile and web development. Our mission is simple yet powerful: to transform business challenges into growth opportunities through next-gen technology. By designing intuitive, scalable, and future-ready applications, we empower brands to meet today’s demands while staying ahead of tomorrow’s possibilities.
            </p>
            <ButtonCommon txt="Get an Idea!" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

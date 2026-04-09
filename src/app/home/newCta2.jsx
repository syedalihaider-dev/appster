"use client";
import { Col, Container, Row} from "react-bootstrap";
import ButtonCommon from "@/src/components/common/button";
import styles from "@/styles/home/newcta2.module.scss";



const NewCta2 = ({ data }) => {
  
  return (
    <>
        <section className={styles.porfolioSection}>
            <Container>
                <div className={styles.portfolioSecMain}>
                    <Row>
                        <Col lg={6} sm={12}>
                            <div className={styles.portfolioSecMainText}>
                                <h2>{data?.title}</h2>
                                <p>{data?.content}</p>
                                <ButtonCommon txt="Reach Out To Our App Experts Today!" extraClass="newCtaBtn" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    </>
  );
};

export default NewCta2;

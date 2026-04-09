"use client";
import { Col, Container, Row} from "react-bootstrap";
import ButtonCommon from "@/src/components/common/button";
import styles from "@/styles/home/newcta3.module.scss";
import AbsImg from "@/public/home/img02.webp"
import Image from "next/image";



const NewCta3 = ({ data }) => {
  
  return (
    <>
        <section className={styles.NewCta3Section}>
            <Container>
                <Row>
                    <Col lg={6} sm={12}>
                        <div className={styles.NewCta3SecMainText}>
                            <h2>{data?.title}</h2>
                            {data?.content}
                            <ButtonCommon txt="Discuss Project Scope" extraClass="newCta3Btn" />
                        </div>
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className={styles.NewCta3SecMainImg}>
                            <Image src={AbsImg} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  );
};

export default NewCta3;

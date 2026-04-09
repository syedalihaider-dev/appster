import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/about/abtawards.module.scss";
// Awards Images
const Award1 = "/about/awards/award1.png"
const Award2 = "/about/awards/award2.png"
const Award3 = "/about/awards/award3.png"
const Award4 = "/about/awards/award4.png"
const Award5 = "/about/awards/award5.png"
const Award6 = "/about/awards/award6.png"
const Award7 = "/about/awards/award7.png"
const Award8 = "/about/awards/award8.png"
const Award9 = "/about/awards/award9.png"
const Award10 = "/about/awards/award10.png"
const Award11 = "/about/awards/award11.png"
import Image from "next/image";

export const data = [
    {
        AwardsIMG: Award1
    },
    {
        AwardsIMG: Award2
    },
    {
        AwardsIMG: Award3
    },
    {
        AwardsIMG: Award4
    },
    {
        AwardsIMG: Award5
    },
    {
        AwardsIMG: Award6
    },
    {
        AwardsIMG: Award7
    },
    {
        AwardsIMG: Award8
    },
    {
        AwardsIMG: Award9
    },
    {
        AwardsIMG: Award10
    },
    {
        AwardsIMG: Award11
    },
]


const Awards = () => {
    return (
        <section className={`${styles.abtAwardSection} pb-100`}>
            <Container>
                <Row>
                    <Col lg={12} md={12} className="m-auto text-center">
                        <div className={styles.aboutContainer}>
                            <div className={styles.aboutTxt}>
                                <div className="subTitle">Awards</div>
                                <h2>Awards & Recognitions</h2>
                                <p>Celebrated by industry leaders, our awards reflect Appsters’ unwavering pursuit of innovation, excellence, and impact in software development.</p>
                            </div>
                            <div className={styles.aboutAwards}>
                                {data.map((item, index) => (
                                    <div className={styles.AwardsItem} key={index}>
                                        <Image src={item.AwardsIMG} alt="Appsters Awards" fill />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Awards
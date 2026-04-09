import styles from "@/styles/services/banner.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Image from "next/image"
const MobileAppIco = "/home/mobile-app.png"
import ButtonCommon from "@/src/components/common/button"
import ContactFrom from "@/src/components/common/contactfrom"
import Popup from "@/src/app/home/components/popup";

const Banner = ({ data }) => {
    return (
        <>
            <section className={`${styles.bannerSection} pt-140`} style={{ backgroundImage: `url(${data.BanngBg})` }}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={7} md={7} className="my-auto">
                            <div className={styles.subTitle}>{data.subtitle}</div>
                            <h1>{data.title}</h1>
                            <p>{data.content}</p>
                            <div className={styles.btnFlex}>
                                <ButtonCommon txt="Build Your Dream App Today" extraClass="processBtn" />
                            </div>
                        </Col>
                        <Col lg={5} md={5} className="my-auto">
                            <div className={styles.img}>
                                <Image src={MobileAppIco} width={500} height={500} alt="BitsWits" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner
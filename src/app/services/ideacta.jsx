import ContactFrom from '@/src/components/common/contactfrom'
import styles from '@/styles/services/ideacta.module.scss'
const ideCtaImg = "/home/level-up-woman.jpg"
import { Col, Container, Row } from "react-bootstrap"
import Image from 'next/image'
import clsx from "clsx";


const IdeaCta = ({ data }) => {
    return (
        <section className={`${styles.appideaSection} p-50`} id="Contact">
            <Container className='h-100'>
                <Row className='h-100 align-items-end'>
                    <Col lg={4} md={4} className="m-0 p-0">
                        <div className={styles.ideaBox}>
                            <Image src={ideCtaImg} width={400} height={500} alt="BitsWits" />
                        </div>
                    </Col>
                    <Col lg={8} md={8} className='p-0'>
                        <div className={clsx(styles.boxItem, "m-0")}>
                            <h2>{data?.title}</h2>
                            <p>{data?.text}</p>
                            <ContactFrom appidea={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default IdeaCta
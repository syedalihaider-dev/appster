import React from 'react'
import Image from 'next/image';
import { usePathname } from "next/navigation"
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Capabilities.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
// Image paths as strings
const team1 = '/newHomePageImages/1.png'
const team2 = '/newHomePageImages/2.png'
const team3 = '/newHomePageImages/3.png'
const team4 = '/newHomePageImages/4.png'
const team5 = '/newHomePageImages/5.png'
const team6 = '/newHomePageImages/6.png'
const close = '/newHomePageImages/close.png'


const Capabilities = () => {

    const router = usePathname();
    var awardslogo = {
        dots: true,
        arrows: true,
        loop: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                }
            }
        ]

    };


    return (
        <>
            <section className={router == '/mobile-application-duplicate' ? styles.home1 : styles.home}>
                <Container className='qtech'>
                    <Row className={styles.posttext}>
                        <Col xl={12}>
                            <div className={styles.build}>
                                <h2>Our App Development Process</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className={styles.connsct}>
                            <Row className={` mt-5 mb-5`}>
                                <Col lg={2}><div className={styles.line1}></div></Col>
                                <Col lg={2}><div className={styles.line2}></div></Col>
                                <Col lg={2}><div className={styles.line3}></div></Col>
                                <Col lg={2}><div className={styles.line4}></div></Col>
                                <Col lg={2}><div className={styles.line5}></div></Col>
                                <Col lg={2}><div className={styles.line6}></div></Col>
                            </Row>
                        </div>
                        <Slider {...awardslogo} className={` ${styles.nextalign1} prohome mt-4 mb-4`}>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}></div>
                                        <div className={styles.deter}>
                                            <h3>Ideation and Conceptualization</h3>
                                            <p>In this initial phase, we brainstorm and shape your app idea into a well-defined concept.</p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Conduct Market Research
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Define App Goals and Objectives
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Create User Personas
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} alt='BitsWits' src={team1} className={` ${styles.imgpon} img-fluid`} width={600} height={600} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}></div>
                                        <div className={styles.deter}>
                                            <h3>Planning and Strategy</h3>
                                            <p>We outline the project plan, budget, and overall strategy to ensure a successful app development journey.</p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Develop a Project Roadmap
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Set a Budget and Timeline
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Define the Technology Stack
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} alt='BitsWits' src={team2} className={` ${styles.imgpon} img-fluid`} width={600} height={600} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}></div>
                                        <div className={styles.deter}>
                                            <h3>Design and Wireframing</h3>
                                            <p>This stage involves creating the visual and structural design of your app.</p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Create Prototypes
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Design User Interfaces
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Ensure User Experience Optimization
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} alt='BitsWits' src={team3} className={` ${styles.imgpon} img-fluid`} width={600} height={600} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}></div>
                                        <div className={styles.deter}>
                                            <h3>Development and Coding</h3>
                                            <p>Our development team turns your app's design into a functional, interactive application.</p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Write Clean and Efficient Code
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Implement Features and Functionality
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Conduct Regular Code Reviews
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} alt='BitsWits' src={team4} className={` ${styles.imgpon} img-fluid`} width={600} height={600} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}></div>
                                        <div className={styles.deter}>
                                            <h3>Testing and Quality Assurance</h3>
                                            <p>Rigorous testing is carried out to identify and fix bugs, ensuring a smooth user experience.</p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Perform Functional Testing
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Conduct User Acceptance Testing
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Optimize Performance and Security
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} alt='BitsWits' src={team5} className={` ${styles.imgpon} img-fluid`} width={600} height={600} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}></div>
                                        <div className={styles.deter}>
                                            <h3>Launch and Deployment</h3>
                                            <p>We prepare your app for its official launch and make it available to users.</p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Prepare for App Store Submission
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Develop a Marketing and Launch Plan
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' width={40} height={40} />
                                                Monitor Post-Launch Performance
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} alt='BitsWits' src={team6} className={` ${styles.imgpon} img-fluid`} width={600} height={600} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Capabilities
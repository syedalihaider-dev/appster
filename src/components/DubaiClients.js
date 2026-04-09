import React from 'react'
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import styles from "@/styles/DubaiClients.module.css"
// Images
import ClientOne from "/public/newDubaiPagev1/client1.png"
import ClientTwo from "/public/newDubaiPagev1/client2.png"
import ClientThree from "/public/newDubaiPagev1/client3.png"
import Star from "/public/newDubaiPagev1/star.png"
import ClientIcon from "/public/newdubai/client-icon.png"

const DubaiClients = ({ content }) => {
    const { title, desc } = content
    var dubaiClients = {
        infinite: false,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <>
            <section className={styles.clientSec}>
                <div className='container'>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <h2>{title}</h2>
                                <p className='fontsfregular mb-5 mb-lg-4 pb-lg-5'>{desc}</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className={styles.trustPilot}>
                                <div className='image'>
                                    <Image src={ClientOne} alt='Trustpilot Badge' loading='lazy' sizes="100vw" width={161} height={40} />
                                </div>
                                <div>
                                    <div className='txt d-flex align-items-center'>
                                        <p className='mb-0 me-2'>4.9 / <span>5.0</span></p>
                                        <div className='d-flex align-items-center'>
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                        </div>
                                    </div>
                                    <p className={`${styles.clientsPara} fontsfregular`}>based on 20+ clients</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className={`${styles.trustPilot} mt-5 mt-md-0`}>
                                <div className='image'>
                                    <Image src={ClientTwo} alt='Clutch Badge' loading='lazy' sizes="100vw" width={161} height={40} />
                                </div>
                                <div>
                                    <div className='txt d-flex align-items-center'>
                                        <p className='mb-0 me-2'>4.9 / <span>5.0</span></p>
                                        <div className='d-flex align-items-center'>
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                        </div>
                                    </div>
                                    <p className={`${styles.clientsPara} fontsfregular`}>based on 40+ clients</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} lg={4}>
                            <div className={`${styles.trustPilot} mt-5 mt-lg-0`}>
                                <div className='image'>
                                    <Image src={ClientThree} alt='Bark Badge' loading='lazy' sizes="100vw" width={161} height={40} />
                                </div>
                                <div>
                                    <div className='txt d-flex align-items-center'>
                                        <p className='mb-0 me-2'>5.0 / <span>5.0</span></p>
                                        <div className='d-flex align-items-center'>
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                        </div>
                                    </div>
                                    <p className={`${styles.clientsPara} fontsfregular`}>based on 66+ clients</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <Slider {...dubaiClients} className='dubaiClientSlider pt-5 mt-3'>
                                <div>
                                    <div className={`card ${styles.card}`}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name d-flex flex-column'>
                                                <p>Marcus Thorne, </p>
                                                <span>CTO </span>
                                            </div>
                                            <div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <Image src={ClientIcon} alt='Bitswits' loading='lazy' sizes="100vw" className={`icon ${styles.icon}`} width={19} height={22} />
                                                    <p className='mb-0'>4.9. / 5.0</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                </div>
                                            </div>

                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                Our previous vendor left us with a broken codebase, but Appsters reverse-engineered the mess and deployed a stable build in three weeks. Their app development services in Chicago saved our Series A funding round. They don't just code; they understand the intense pressure of a fintech launch. I finally sleep at night knowing our architecture can handle the transaction volume.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={`card ${styles.card}`}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name d-flex flex-column'>
                                                <p>Elena Rodriguez, </p>
                                                <span> VP of Product</span>
                                            </div>
                                            <div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <Image src={ClientIcon} alt='Bitswits' loading='lazy' sizes="100vw" className={`icon ${styles.icon}`} width={19} height={22} />
                                                    <p className='mb-0'>4.9. / 5.0</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                I needed a partner who could speak the language of HIPAA compliance without slowing down innovation. Appsters delivered a patient portal that is secure yet incredibly fast. Other app development companies in Chicago gave me generic timelines, but this team mapped out every sprint with military precision. The user feedback on the interface has been overwhelmingly positive since day one.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={`card ${styles.card}`}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name d-flex flex-column'>
                                                <p> David Kaczmarek,</p>
                                                <span>Director of Operations</span>
                                            </div>
                                            <div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <Image src={ClientIcon} alt='Bitswits' loading='lazy' sizes="100vw" className={`icon ${styles.icon}`} width={19} height={22} />
                                                    <p className='mb-0'>4.9. / 5.0</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                We manage complex logistics for cold-chain shipping, so we couldn't afford a buggy MVP. Appsters built a real-time tracking solution that works perfectly even in low-connectivity zones. Their grasp of mobile app development services in Chicago is unmatched when it comes to integrating IoT data with legacy ERP systems. They helped us cut operational waste by 18% in the first quarter.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={`card ${styles.card}`}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name d-flex flex-column'>
                                                <p>Sarah Jenkins,</p>
                                                <span> Founder & CEO </span>
                                            </div>
                                            <div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <Image src={ClientIcon} alt='Bitswits' loading='lazy' sizes="100vw" className={`icon ${styles.icon}`} width={19} height={22} />
                                                    <p className='mb-0'>4.9. / 5.0</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                </div>
                                            </div>

                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                Real estate tech is crowded, so we needed a standout AR feature to win the market. Appsters optimized the rendering engine to run smoothly on older devices, which was a huge technical hurdle. They define what premium mobile app development in Chicago should look like. No jargon, just straight execution and a product that actually helps our agents close deals faster.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={`card ${styles.card}`}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name d-flex flex-column'>
                                                <p>James O’Connell,</p>
                                                <span>Head of Digital Innovation</span>
                                            </div>
                                            <div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <Image src={ClientIcon} alt='Bitswits' loading='lazy' sizes="100vw" className={`icon ${styles.icon}`} width={19} height={22} />
                                                    <p className='mb-0'>4.9. / 5.0</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                Retail demands speed and stability, especially during the holiday rush. Appsters re-architected our mobile checkout flow, reducing cart abandonment by 12%. I appreciate that they pushed back on bad ideas instead of just saying yes. That level of honesty is rare in app development agencies in Chicago. They are true technical partners who care about the bottom line.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={`card ${styles.card}`}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name d-flex flex-column'>
                                                <p>Sarah Johnson</p>
                                                <span>Marketing Director</span>
                                                <span>E-Commerce Solutions Co.</span>
                                            </div>
                                            <div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <Image src={ClientIcon} alt='Bitswits' loading='lazy' sizes="100vw" className={`icon ${styles.icon}`} width={19} height={22} />
                                                    <p className='mb-0'>4.9. / 5.0</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                BitsWits truly understands their clients' needs. Their tailored approach and attention to detail resulted in an app that surpassed our expectations. Highly recommend their services for anyone looking for top-tier app development.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default DubaiClients

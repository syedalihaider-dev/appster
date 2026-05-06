import React from 'react'
import Image from 'next/image'
import styles from './LeadingPartner.module.css'

const LeadingPartner = () => {
    return (
        <section id='leadingPartner' className={styles.leadingPartner}>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-5'>
                        <div className={styles.imageBox}>
                            <Image
                                src="/mvp-development/mobile-apps-cover.webp"
                                alt="Mobile App Portfolio"
                                width={600}
                                height={600}
                                className={styles.mainImg}
                            />
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <div className={styles.contentBox}>
                            <h2 className={styles.title}>
                                Built for <span className={styles.highlight}>Founders
                                    <Image src="/mvp-development/dark-highlight-bling.webp" alt="bling" width={50} height={50} className={styles.bling} />
                                    <Image src="/mvp-development/dark-spring-vector.webp" alt="spring" width={136} height={11} className={styles.spring} />
                                </span> <br /> Who Want to Launch Fast
                            </h2>
                            <p className={styles.desc}>
                                You need a reliable team to build your MVP end-to-end, We help you move from idea → product → real users, without unnecessary delays.
                            </p>
                            <a href="#contact" className={styles.discoverBtn}>get Started</a>
                            <div className={styles.statsRow}>
                                <div className={styles.statItem}>
                                    <h4>4.8k</h4>
                                    <p>Apps & Solutions</p>
                                </div>
                                <div className={styles.statItem}>
                                    <h4>500k+</h4>
                                    <p>Subscriptions</p>
                                </div>
                                <div className={styles.statItem}>
                                    <h4>14</h4>
                                    <p>Industry-First Awards</p>
                                </div>
                                <div className={styles.statItem}>
                                    <h4>95%</h4>
                                    <p>Client Retention</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeadingPartner

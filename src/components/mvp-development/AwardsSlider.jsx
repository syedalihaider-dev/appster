import React from 'react'
import Image from 'next/image'
import styles from './AwardsSlider.module.css'

const AwardsSlider = () => {
    const awards = [
        "/mvp-development/awards-img-01.webp",
        "/mvp-development/awards-img-02.webp",
        "/mvp-development/awards-img-03.webp",
        "/mvp-development/awards-img-004.webp",
        "/mvp-development/awards-img-05.webp",
        "/mvp-development/awards-img-01.webp",
        "/mvp-development/awards-img-02.webp",
        "/mvp-development/awards-img-03.webp",
        "/mvp-development/awards-img-004.webp",
        "/mvp-development/awards-img-05.webp",
    ]

    return (
        <section className={styles.awardsSection}>
            <div className={styles.headingBox}>
                <Image src="/mvp-development/heading-line.webp" alt="line" width={134} height={2} className={styles.lineLeft} />
                <h2 className={styles.title}>SOME OF OUR AWARDS</h2>
                <Image src="/mvp-development/heading-line.webp" alt="line" width={134} height={2} className={styles.lineRight} />
            </div>

            <div className={styles.sliderContainer}>
                <div className={styles.sliderTrack}>
                    {awards.map((src, index) => (
                        <div key={index} className={styles.awardItem}>
                            <div className={styles.imgWrapper}>
                                <Image src={src} alt={`Award ${index}`} width={224} height={224} />
                            </div>
                        </div>
                    ))}
                    {awards.map((src, index) => (
                        <div key={`dup-${index}`} className={styles.awardItem}>
                            <div className={styles.imgWrapper}>
                                <Image src={src} alt={`Award ${index}`} width={224} height={224} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AwardsSlider

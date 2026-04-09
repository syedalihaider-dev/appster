import React from 'react'
import Image from 'next/image'
import styles from './Portfolio.module.css'

const Portfolio = () => {
    const portfolioItems = [
        {
            id: 1,
            brand: "Bloom Money",
            title: "Switch Poker",
            desc: "Switch Poker is a mobile game app that allows users to play poker with each other and compete in different rounds until a winner has been decided.",
            img: "/mobile-app-studio/showcase/4.png",
            stats: [
                { value: "4.8k", label: "Job Completed" },
                { value: "12+", label: "Industry Experience" },
                { value: "2.5k+", label: "World wide clients" },
                { value: "120+", label: "Won Awards" }
            ]
        },
        {
            id: 2,
            brand: "Alfan",
            title: "The Platform For Content Creators",
            desc: "Alfan helps content creators manage their workflow and scale their business with intuitive tools.",
            img: "/mobile-app-studio/showcase/3.png",
            stats: [
                { value: "4.8k", label: "Job Completed" },
                { value: "12+", label: "Industry Experience" },
                { value: "2.5k+", label: "World wide clients" },
                { value: "120+", label: "Won Awards" }
            ]
        },
        {
            id: 3,
            brand: "Fastgo",
            title: "Fastgo’s Scooter Rental App To Drive Adoption",
            desc: "A seamless platform for scooter rentals, making urban mobility faster and more accessible for everyone.",
            img: "/mobile-app-studio/showcase/2.png",
            stats: [
                { value: "4.8k", label: "Job Completed" },
                { value: "12+", label: "Industry Experience" },
                { value: "2.5k+", label: "World wide clients" },
                { value: "120+", label: "Won Awards" }
            ]
        },
        {
            id: 4,
            brand: "Alfan",
            title: "The Platform For Content Creators",
            desc: "Alfan helps content creators manage their workflow and scale their business with intuitive tools.",
            img: "/mobile-app-studio/showcase/1.png",
            stats: [
                { value: "4.8k", label: "Job Completed" },
                { value: "12+", label: "Industry Experience" },
                { value: "2.5k+", label: "World wide clients" },
                { value: "120+", label: "Won Awards" }
            ]
        }
    ]

    return (
        <section id='portfolio' className={styles.portfolioSection}>
            <div className="container">
                <div className={styles.headingBox}>
                    <h2 className={styles.title}>
                        A Portfolio That Powers <span className={styles.highlight}>Performance
                            <Image src="/mobile-app-studio/spring-vector.png" alt="spring" width={300} height={20} className={styles.spring} />
                        </span>
                    </h2>
                    <p className={styles.desc}>
                        Experience our showcase of apps and digital products that have helped brands
                        and businesses pierce through the charts and rank at the top in their specific
                        categories.
                    </p>
                </div>

                <div className={styles.portfolioGrid}>
                    {portfolioItems.map((item) => (
                        <div key={item.id} className={styles.portfolioItem}>
                            <Image src={item.img} alt={item.title} fill className={styles.bgImg} />
                            <div className={styles.overlay}>
                                <div className={styles.mainContent}>
                                    <p className={styles.itemBrand}>{item.brand}</p>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                </div>
                                <div className={styles.hoverContent}>
                                    <p className={styles.itemDesc}>{item.desc}</p>
                                    <div className={styles.statsGrid}>
                                        {item.stats.map((stat, idx) => (
                                            <div key={idx} className={styles.stat}>
                                                <h4>{stat.value}</h4>
                                                <p>{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <a href="#contact" className={styles.ctaBtn}>START YOUR PROJECT</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio

"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Banner.module.css'
import { useRouter } from 'next/navigation'

const Banner = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedBudget, setSelectedBudget] = useState("");
    const [ipData, setIpData] = useState({
        ip: "Loading...",
        city: "",
        region: "",
        country: ""
    });

    useEffect(() => {
        const fetchIpData = async () => {
            try {
                // Try First Provider
                const response = await fetch("https://ipapi.co/json/");
                if (!response.ok) throw new Error("Primary IP API failed");
                const data = await response.json();
                setIpData({
                    ip: data.ip || "Unknown",
                    city: data.city || "",
                    region: data.region || "",
                    country: data.country_name || ""
                });
            } catch (error) {
                console.error("Primary IP API failed, trying fallback...", error);
                try {
                    // Try Second Provider (Fallback)
                    const response = await fetch("https://ipwho.is/");
                    const data = await response.json();
                    if (data.success) {
                        setIpData({
                            ip: data.ip || "Unknown",
                            city: data.city || "",
                            region: data.region || "",
                            country: data.country || ""
                        });
                    } else {
                        throw new Error("Fallback IP API failed");
                    }
                } catch (fallbackError) {
                    console.error("All IP APIs failed:", fallbackError);
                    setIpData({ ip: "Unknown", city: "", region: "", country: "" });
                }
            }
        };
        fetchIpData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            budget: selectedBudget,
            message: formData.get("message"),
            IP: ipData.ip,
            city: ipData.city,
            region: ipData.region,
            country: ipData.country,
            pageUrl: window.location.href
        };

        try {
            const response = await fetch("/api/lp-mobile-app-studio", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                router.push("/lp/mobile-app-studio/thank-you");
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id='banner' className={styles.banner}>
            <Image src="/mobile-app-studio/banner.png" alt="banner-bg" priority fill className={styles.bannerBg} />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className={styles.content}>
                            <h1 className={styles.title}>
                                Apps &
                                <span className={styles.highlightBling}> Digital
                                    <Image src="/mobile-app-studio/highlight-bling.png" alt="spring vector" width={57} height={55} className={styles.highlightBlingAfter} />
                                </span> Ecosystems That Scale With Your <span className={styles.specialist}>Growth.
                                    <Image src="/mobile-app-studio/spring-vector.png" alt="underline" width={423} height={22} className={styles.springVector} />
                                </span>
                            </h1>
                            <p className={styles.desc}>
                                Engineered for results. Obsessed over by users. Architected for the AI era.
                                Appsters builds the mobile apps and digital ecosystems that dominate today’s
                                market and define tomorrow’s.
                            </p>
                            <a href="#contact" className={styles.ctaBtn}>Get Started</a>

                            <div className={styles.awards}>
                                <Image src="/mobile-app-studio/clutch-awards.png" alt="clutch" width={100} height={109} />
                                <Image src="/mobile-app-studio/appfutura-award.png" alt="appfutura" width={123} height={105} />
                                <Image src="/mobile-app-studio/goodfirms-award.png" alt="goodfirms" width={119} height={103} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className={styles.formCard}>
                            <div className={styles.star}>
                                <Image src="/mobile-app-studio/star.png" alt="star" width={67} height={74} className={styles.starImg} />
                            </div>
                            <h3>Let’s turn ideas into impact.</h3>
                            <p>Talk to our experts for a free consultation.</p>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.inputGroup}>
                                    <input type="text" name="name" placeholder="Full Name*" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <input type="email" name="email" placeholder="Email Address*" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <input type="tel" name="phone" placeholder="Phone Number*" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <select 
                                        name="budget" 
                                        className={styles.selectInput} 
                                        required 
                                        value={selectedBudget}
                                        onChange={(e) => setSelectedBudget(e.target.value)}
                                    >
                                        <option value="" disabled>Estimated Budget / Scope</option>
                                        <option value="$3,000 to $5,000">$3,000 to $5,000</option>
                                        <option value="$5,000 to $10,000">$5,000 to $10,000</option>
                                        <option value="$10,000 to $25,000">$10,000 to $25,000</option>
                                        <option value="$25,000 to $50,000">$25,000 to $50,000</option>
                                    </select>
                                </div>
                                <div className={styles.inputGroup}>
                                    <textarea name="message" placeholder="Tell us about your Requirements*" rows="4" required></textarea>
                                </div>
                                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                    {isSubmitting ? "SENDING..." : "SUBMIT NOW"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className={styles.trustedBox}>
                    <div className={styles.headingBox}>
                        <Image src="/mobile-app-studio/heading-line.png" alt="line" width={134} height={2} className={styles.lineLeft} />
                        <h2 className={styles.headingBoxTitle}>TRUSTED BY INDUSTRY</h2>
                        <Image src="/mobile-app-studio/heading-line.png" alt="line" width={134} height={2} className={styles.lineRight} />
                    </div>
                    <div className={styles.logoRow}>
                        <div className={styles.logoItem}><Image src="/mobile-app-studio/industry-icon-01.png" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/mobile-app-studio/industry-icon-02.png" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/mobile-app-studio/industry-icon-03.png" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/mobile-app-studio/industry-icon-04.png" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/mobile-app-studio/industry-icon-05.png" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/mobile-app-studio/industry-icon-01.png" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/mobile-app-studio/industry-icon-02.png" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/mobile-app-studio/industry-icon-03.png" alt="logo" width={120} height={40} /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner

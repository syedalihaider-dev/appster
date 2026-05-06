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
            const response = await fetch("/api/lp-mvp-development", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                router.push("/lp/mvp-development/thank-you");
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
            <Image src="/mvp-development/banner.webp" alt="banner-bg" priority fill className={styles.bannerBg} />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className={styles.content}>
                            <h1 className={styles.title}>
                                Launch a
                                <span className={styles.highlightBling}> Scalable
                                    <Image src="/mvp-development/highlight-bling.webp" alt="spring vector" width={57} height={55} className={styles.highlightBlingAfter} />
                                </span> MVP Without <span className={styles.specialist}>Wasting Time.
                                    <Image src="/mvp-development/spring-vector.webp" alt="underline" width={423} height={22} className={styles.springVector} />
                                </span>
                            </h1>
                            <p className={styles.desc}>
                                Turn your idea into a fully functional MVP with a team focused on speed, scalability, and real user validation.
                            </p>
                            <a href="#contact" className={styles.ctaBtn}>Book Free MVP Consultation</a>

                            <div className={styles.awards}>
                                <Image src="/mvp-development/clutch-awards.webp" alt="clutch" width={100} height={109} />
                                <Image src="/mvp-development/appfutura-award.webp" alt="appfutura" width={123} height={105} />
                                <Image src="/mvp-development/goodfirms-award.webp" alt="goodfirms" width={119} height={103} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className={styles.formCard}>
                            <div className={styles.star}>
                                <Image src="/mvp-development/star.webp" alt="star" width={67} height={74} className={styles.starImg} />
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
                        <Image src="/mvp-development/heading-line.webp" alt="line" width={134} height={2} className={styles.lineLeft} />
                        <h2 className={styles.headingBoxTitle}>TRUSTED BY INDUSTRY</h2>
                        <Image src="/mvp-development/heading-line.webp" alt="line" width={134} height={2} className={styles.lineRight} />
                    </div>
                    <div className={styles.logoRow}>
                        <div className={styles.logoItem}><Image src="/mvp-development/industry-icon-01.webp" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/mvp-development/industry-icon-02.webp" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/mvp-development/industry-icon-03.webp" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/mvp-development/industry-icon-04.webp" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/mvp-development/industry-icon-05.webp" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/mvp-development/industry-icon-01.webp" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/mvp-development/industry-icon-02.webp" alt="logo" width={120} height={40} /></div>
                        <div className={styles.logoItem}><Image src="/mvp-development/industry-icon-03.webp" alt="logo" width={120} height={40} /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner

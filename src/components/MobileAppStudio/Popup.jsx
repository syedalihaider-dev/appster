"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Popup.module.css';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const Popup = () => {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [ipData, setIpData] = useState({
        ip: "Loading...",
        city: "",
        region: "",
        country: ""
    });

    useEffect(() => {
        // Auto-play popup after 5 seconds
        const timer = setTimeout(() => {
            setShow(true);
        }, 5000);

        // Fetch IP data
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

        // Listen for internal clicks on any element with .popupBtn
        const handlePopupTrigger = (e) => {
            if (e.target.closest('.popupBtn')) {
                e.preventDefault();
                setShow(true);
            }
        };

        document.addEventListener('click', handlePopupTrigger);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('click', handlePopupTrigger);
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
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
                setShow(false);
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

    if (!show) return null;

    return (
        <div className={styles.popupOverlay} onClick={() => setShow(false)}>
            <div className={styles.popupContainer} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={() => setShow(false)}>
                    <IoCloseCircleOutline />
                </button>

                <div className="row g-0 h-100">
                    <div className={`col-md-6 col-lg-6 ${styles.leftCol}`}>
                        <div className={styles.contentBox}>
                            <h2 className={styles.title}>
                                From Idea To Launch We Build <span className={styles.highlight}>
                                    Digital Products
                                    <Image src="/mobile-app-studio/spring-vector.png" alt="line" width={250} height={15} className={styles.spring} />
                                </span> That Scale
                            </h2>
                            <p className={styles.description}>
                                Whether you need product strategy, UI/UX design, mobile app development, web platforms, or MVP execution, we bring the right expertise to every stage of your product journey.
                            </p>
                            <ul className={styles.featureList}>
                                <li>Strategy</li>
                                <li>Design</li>
                                <li>Development</li>
                                <li>Growth</li>
                            </ul>

                            <div className={styles.clutchBox}>
                                <Image src="/mobile-app-studio/popup/clutch-star.png" alt="clutch" width={269} height={89} className={styles.clutchImg} />
                            </div>

                            <div className={styles.partnerLogos}>
                                <Image src="/mobile-app-studio/popup/featherDev.png" alt="featherDev" width={151} height={37} />
                                <Image src="/mobile-app-studio/popup/spherule.png" alt="spherule" width={126} height={37} />
                                <Image src="/mobile-app-studio/popup/globalBank.png" alt="globalBank" width={151} height={37} />
                                <Image src="/mobile-app-studio/popup/boltshift.png" alt="boltshift" width={130} height={37} />
                            </div>
                        </div>
                    </div>

                    <div className={`col-md-6 col-lg-6 ${styles.rightCol}`}>
                        <form className={styles.formBox} onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <label>Full Name*</label>
                                <input type="text" name="name" placeholder="Please share your first and last Name ..." required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Email Address*</label>
                                <input type="email" name="email" placeholder="yourid@domain.com" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Phone Number*</label>
                                <input type="tel" name="phone" placeholder="+1 000 000 0000" required />
                            </div>
                            <div className={`${styles.inputGroup} ${styles.textareaGroup}`}>
                                <label>Tell us about your Requirements*</label>
                                <textarea name="message" placeholder="Type your query" required></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                {isSubmitting ? "SENDING..." : "SUBMIT NOW"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;

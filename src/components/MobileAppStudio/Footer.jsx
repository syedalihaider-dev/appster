import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className={styles.footerSection}>
            <Container>
                <div className={styles.footerContent}>
                    {/* Badges Section */}
                    <div className={styles.badgesWrapper}>
                        <div className={styles.badgeBox}>
                            <Image src="/mobile-app-studio/clutch-badge.png" alt="clutch" width={163} height={59} />
                        </div>
                        <div className={styles.badgeBox}>
                            <Image src="/mobile-app-studio/good-firms-badge.png" alt="goodfirms" width={186} height={59} />
                        </div>
                        <div className={styles.badgeBox}>
                            <Image src="/mobile-app-studio/trustpilot-badge.png" alt="trustpilot" width={165} height={59} />
                        </div>
                        <div className={styles.badgeBox}>
                            <Image src="/mobile-app-studio/design-rush-badge.png" alt="designrush" width={212} height={59} />
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className={styles.socialWrapper}>
                        <a href="https://www.facebook.com/officialappsters/" target="_blank" className={styles.socialIcon}><FaFacebookF /></a>
                        <a href="https://www.linkedin.com/company/officialAppsters?_l=en_US" target="_blank" className={styles.socialIcon}><FaLinkedinIn /></a>
                        <a href="https://x.com/Appsters_/" target="_blank" className={styles.socialIcon}><FaXTwitter /></a>
                        <a href="https://www.instagram.com/officialAppsters/" target="_blank" className={styles.socialIcon}><FaInstagram /></a>
                    </div>

                    {/* Right Info Section */}
                    <div className={styles.rightInfo}>
                        <div className={styles.legalLinks}>
                            {/* <a href="/user-agreement">User Agreement</a> */}
                            {/* <span> | </span> */}
                            <a href="/term-and-condition">Terms of Use</a>
                            <span> | </span>
                            <a href="/privacy-policy">Privacy Policy</a>
                        </div>
                        <p className={styles.copy}>Appsters.io © 2026 All rights reserved.</p>
                    </div>

                    {/* Final Logo */}
                    <div className={styles.logoWrapper}>
                        <Image src="/mobile-app-studio/ft-logo.png" alt="logo" width={66} height={66} />
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;

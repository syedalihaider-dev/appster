import Image from 'next/image';
import React from 'react';
import styles from './FooterSection.module.css';

const FooterSection = () => {
  return (
    <footer className={styles.footerSection}>
      <div className="container">
        <div className={styles.topLogo}>
          <Image
            src="/custom-app/review-main.webp"
            alt="Main Review"
            width={180}
            height={52}
          />
        </div>

        <div className={styles.bottomLogos}>
          <Image
            src="/custom-app/f-1.webp"
            alt="Footer Logo 1"
            width={150}
            height={50}
          />
          <Image
            src="/custom-app/f-2.webp"
            alt="Footer Logo 2"
            width={150}
            height={50}
          />
          <Image
            src="/custom-app/f-4.webp"
            alt="Footer Logo 3"
            width={150}
            height={50}
          />
          <Image
            src="/custom-app/f-5.webp"
            alt="Footer Logo 4"
            width={150}
            height={50}
          />
        </div>

        <div className={styles.divider}></div>

        <p className={styles.copyright}>
          Copyright © 2026 Appsters | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

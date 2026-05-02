import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5 col-md-4 col-lg-3">
            <Link href="/" className={styles.logo}>
              <Image
                src="/custom-app/logo.webp"
                alt="Appsters Logo"
                width={256}
                height={59}
                className="img-fluid"
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>
          <div className="col-7 col-md-8 col-lg-9 d-flex justify-content-end align-items-center gap-3 gap-lg-4">
            <a href="#contactSection" className={`${styles.quoteBtn} d-none d-md-block text-decoration-none`}>
              Request a Quote
            </a>
            <div className={styles.flags}>
              <Image src="/custom-app/flag-us.webp" alt="US Flag" width={64} height={64} />
              <Image src="/custom-app/flag-uk.webp" alt="UK Flag" width={64} height={64} />
              <Image src="/custom-app/flag-uae.webp" alt="UAE Flag" width={64} height={64} />
              <Image src="/custom-app/flag-aus.webp" alt="Aus Flag" width={64} height={35} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

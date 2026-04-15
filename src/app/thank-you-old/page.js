
"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { Container, Row, Col } from "react-bootstrap";
// CSS
import styles from "@/styles/Newhomeanner.module.css";


export default function ThankYou() {

  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    const delay = 10000;
    const timeoutId = setTimeout(() => {
      setPageLoaded(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {pageLoaded &&
        <>
          {/* <!-- Event snippet for Website lead conversion page --> */}
          <Script id="gtag-conversion-new">
            {`gtag('event', 'conversion', {'send_to': 'AW-16476280714/MD9mCJjo2ZkcEIqvwLA9'});`}
          </Script>
        </>
      }

      <main>
        <section className={styles.thankYou}>
          <Container>
            <Row className={styles.bannnerproject}>
              <Col lg={8} className="mx-auto">
                <div className={styles.banerTxt}>
                  <h1 className="font65 white fontf font-bold line60">
                    <span className="grdiant font-bold">Thank You</span>
                  </h1>
                  <p className="white fontf font16 font-medium line30">
                    Welcome to the community, your personalized experience
                    awaits!
                  </p>
                  <div className={`${styles.bttnsto} justify-content-center`}>
                    <Link className={styles.bttns2} href="/">
                      Back To Home
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

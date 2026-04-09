import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import styles from "@/styles/DubaiBrandTrust.module.css";
// Swiper
import "swiper/css";
// Images
const BrandOne = "/newdubai/single-brands.png";
const BrandTwo = "/newdubai/single-brands1.png";

const DubaiBrandTrust = ({ padding, rtl }) => {
  return (
    <>
      <section
        className={`${styles.brandTrustSec} ${padding ? styles.paddingTop : ""
          }`}
      >
        <div className={`${styles.overFlow} container`}>
          <Row>
            <Col lg={12}>
              <div className={styles.txt}>
                <p>{rtl ? "مشهور عالميًا" : "Trusted by the Top Brands"}</p>
              </div>
              <div className={styles.brands}>
                <div>
                  <Image
                    src={BrandOne}
                    alt='This image shows about the companies that are our partners'
                    loading='lazy'
                    width={1000}
                    height={100}
                    className='w-100 h-auto'
                  />
                  <Image
                    src={BrandTwo}
                    alt='This image shows about the companies that are our partners'
                    loading='lazy'
                    width={1000}
                    height={100}
                    className='w-100 h-auto'
                  />
                  <Image
                    src={BrandOne}
                    alt='This image shows about the companies that are our partners'
                    loading='lazy'
                    width={1000}
                    height={100}
                    className='w-100 h-auto'
                  />
                  <Image
                    src={BrandTwo}
                    alt='This image shows about the companies that are our partners'
                    loading='lazy'
                    width={1000}
                    height={100}
                    className='w-100 h-auto'
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default DubaiBrandTrust;

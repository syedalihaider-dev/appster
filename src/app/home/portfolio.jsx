"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container} from "react-bootstrap";
import { Navigation } from 'swiper/modules';
import ButtonCommon from "@/src/components/common/button";
import Portfolio1 from "media/home/portfolio-1.webp"
import Portfolio1Ico from "media/home/portfolio-1ico.webp"
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "@/styles/home/portfolio.module.scss";
import Link from 'next/link';
import Image from 'next/image';



const Portfolio = ({ data, list }) => {
  
  return (
    <>
        <section className={styles.porfolioSection}>
            <Container>
                <div className={styles.portfolioSectionText}>
                    <div className={styles.portfolioSectionFlex}>
                        <h2>{data?.title}</h2>
                        <ButtonCommon txt="View All Projects"/>
                    </div>
                    <p>{data?.content}</p>
                </div>
                <Swiper
                    speed={1000}
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                    }}
                    className="serviceSlider">
                        {list.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.portfolioSliderBox}>
                                    <div className={styles.portfolioSliderBoxImage}>
                                        <Image src={Portfolio1} className="img-fluid"></Image>
                                    </div>
                                    <div className={styles.portfolioSliderTextBox}>
                                        <h4 className="txtColor">{item.title}</h4>
                                        <p>{item.content}</p>
                                        <div className={styles.portfolioSliderTextBoxFlex}>
                                            <div className={styles.portfolioSliderTextBoxFlexText}>
                                                
                                            </div>
                                            <div className={styles.portfolioSliderTextBoxFlexBtn}>
                                                <Link href="javacript:;"><i class="fa-solid fa-arrow-right-long"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </Container>
        </section>
    </>
  );
};

export default Portfolio;

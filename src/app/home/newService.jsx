"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container} from "react-bootstrap";
import { Navigation } from 'swiper/modules';
import ButtonCommon from "@/src/components/common/button";
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "@/styles/home/service.module.scss";
import Link from 'next/link';



const NewService = ({ data, list }) => {
  
  return (
    <>
        <section className={styles.newServiceSection}>
            <Container>
                <div className={styles.newServiceSecText}>
                    <h2>{data?.title}</h2>
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
                                <div className={styles.newServiceBox}>
                                    <div className={styles.newServiceBoxIcon}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.newServiceBoxText}>
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                    <div className={styles.newServiceBoxBtn}>
                                        <Link href="javacript:;"><i class="fa-solid fa-arrow-right-long"></i></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
                <div className={styles.newServiceSecBtn}>
                    <ButtonCommon txt="Schedule a Call" />
                </div>
            </Container>
        </section>
    </>
  );
};

export default NewService;

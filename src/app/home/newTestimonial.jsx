
"use client"
import { Col, Container, Row } from "react-bootstrap"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Author1 from '@/public/home/author-1.webp'
import { StarIcon2 } from "@/src/app/app-constants"
import 'swiper/css';
import 'swiper/css/pagination';
import styles from "@/styles/home/newTesti.module.scss"
import Image from "next/image";


const NewTestimonial = ({ data , list}) => {
    return (
        <section className={styles.newTestiSec}>
            <Container>
                <div className={styles.newTestiSecText}>
                    <h2>{data?.title}</h2>
                    <p>{data?.content}</p>
                </div>
                <div className={styles.newTestiSecBox}>
                    <Swiper
                        speed={1000}
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="newTestiSlider">
                            {list.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Row>
                                        <Col md={3}>
                                            <div className={styles.newTestiSliderAuthor}>
                                                <Image src={Author1}></Image>
                                                <h3>{item.Author}</h3>
                                            </div>
                                        </Col>
                                        <Col md={9}>
                                            <div className={styles.newTestiSliderText}>
                                                <p>“{item.content}”</p>
                                                <StarIcon2 />
                                            </div>
                                        </Col>
                                    </Row>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}

export default NewTestimonial
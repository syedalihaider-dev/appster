
"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/newSolution.module.scss"
import ButtonCommon from "@/src/components/common/button"


const NewSolution = ({ data, list }) => {
    return (
        <>
            <section className={styles.newTestiSec}>
                <Container>
                    <div className={styles.newTestiSecText}>
                        <h2>{data?.title}</h2>
                    </div>
                        <ul>
                       {list.map((item, index) => (
                            <li key={index}>
                                <div className={styles.flipBox}>
                                    <div className={styles.flipBoxInner}>
                                        <div className={styles.flipBoxFront}>
                                            <div className={styles.imgCont}>
                                                {item?.icon}
                                            </div>
                                            <div className={styles.textContent}>
                                                <h3>{item?.title}</h3>
                                            </div>
                                        </div>
                                        <div className={styles.flipBoxBack}>
                                            <p>{item?.content}</p> 
                                        </div> 
                                    </div> 
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.newTestiSecBtn}>
                        <ButtonCommon txt="Schedule a Call"/>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default NewSolution
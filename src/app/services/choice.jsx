import styles from "@/styles/services/choice.module.scss"
import { Container, Row, Col } from 'react-bootstrap'
import Image from "next/image"

const Choice = ({ data , list}) => {
    return (
        <>
            <section className={styles.choiceSection}>
                <Container>
                    <div className={styles.choiceSecText}>
                        <h2>{data?.title}</h2>
                        <p>{data?.content}</p>
                    </div>
                    <div className={styles.choiceSecBoxes}>
                        <Row className="justify-content-between">
                            {list.map((items, index) => (
                                <Col lg={6} sm={12} key={index}>
                                    <div className={styles.choiceSecBox}>
                                    <p>{items.txt}</p>
                                    <h3>{items.title}</h3>
                                    <div className={styles.choiceSecBoxIcon}>
                                        {items.Icon1}
                                    </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Choice
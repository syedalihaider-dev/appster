import { Col, Container, Row } from "react-bootstrap";
import { CheckList } from "@/src/app/app-constants";
import styles from "@/styles/contact/contact.module.scss"
import ContactFrom from "@/src/components/common/contactfrom";

export default function Page() {
    return (
        <section className={styles.contactBanner}>
            <Container>
                <Row>
                    <Col lg={5} md={6}>
                        <h1 className="subTitle">Let’s Build Something You’ll Love</h1>
                        <h2>We are the best in delivering perfect, seamless & innovative mobile app solutions according to your business needs.</h2>
                        <ul className={styles.greenBullet}>
                            <li><CheckList />Enterprise-Grade Scalability – Apps built to grow with your business.</li>
                            <li><CheckList />Advanced Security Compliance – Protecting data with industry-best standards.</li>
                            <li><CheckList />Intuitive UX & Seamless Design – Engaging, user-centered mobile experiences.</li>
                            <li><CheckList />Tailored Development Solutions – Custom apps aligned with unique goals.</li>
                            <li><CheckList />Next-Gen Technology Stack – Powered by AI, IoT, AR/VR & cloud.</li>
                            <li><CheckList />Cost-Optimized Delivery – Premium quality within your budget.</li>
                            <li><CheckList />End-to-End Support – Ongoing updates, monitoring & maintenance. Budget Friendly.</li>
                        </ul>
                    </Col>
                    <Col lg={6} md={6} className="offset-lg-1">
                        <div className={styles.contactForm}>
                            <div className={`${styles.contactHeading} subTitle`}>Let’s Discuss Your App Idea</div>
                            <ContactFrom contactpage={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
}


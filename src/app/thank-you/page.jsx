import { Container, Row, Col } from "react-bootstrap"
import { ArrowIcon } from "@/src/app/app-constants"
import Link from "next/link"
import styles from "@/styles/components/thanks.module.scss"
import CaseStudy from "@/src/app/home/casestudy"
import Awards from "@/src/app/about-us/components/awards"
import { CaseStudyContent } from "../home/data/data"
import Script from "next/script"
import { GoogleAnalytics } from '@next/third-parties/google'

const Page = () => {

    return (
        <>
            {/* Event snippet for Website lead conversion page */}
            <Script
                id="gtag-conversion-new"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('event', 'conversion', {'send_to': 'AW-16476280714/MD9mCJjo2ZkcEIqvwLA9'});
                    `,
                }}
            />

            <section className={`${styles.bannerThanks} `}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={8} className="mx-auto mt-auto text-center">
                            <h1 className={styles.thanksTitle}>THANK YOU!</h1>
                            <p>Our team is reviewing your details and will get back to you shortly. If you want to explore more about what we do or just want to know a bit more, feel free to take a look around!</p>
                            <div className="catButton" >
                                <Link href="/"><span>Back To Home</span> <ArrowIcon /></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <CaseStudy data={CaseStudyContent} />
            <Awards />
        </>
    )
}

export default Page

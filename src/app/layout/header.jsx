"use client"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import { MainLogo, WhiteLogo } from "@/src/app/app-constants"
import Navigation from "@/src/app/layout/navigation"
import styles from "@/styles/layout/header.module.scss"
import { useState, useEffect } from "react"

const Header = ({ isDarkHeader, isLightHeader }) => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <section className={`${styles.headerSection} ${scrolled ? styles.active : ''}`} >
      <Container className="h-100" >
        <Row className="h-100">
          <Col md={2} lg={2} xl={3} xs={6} sm={6} className="m-auto">
            <div className={styles.headerLogo}>
              <Link href="/"  >
                {!scrolled ? (
                  isLightHeader ? <MainLogo /> :  <WhiteLogo />
                ) : (
                  <WhiteLogo />
                )}
              </Link>
            </div>
            <div className={styles.headermobileLogo}>
              <Link href="/" >
                <WhiteLogo />
              </Link>
            </div>
          </Col>
          <Col md={10} lg={10} xl={9} xs={6} sm={6} className="m-auto">
            <Navigation scrolled={scrolled} isLightHeader={isLightHeader} isDarkHeader={isDarkHeader} />
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Header

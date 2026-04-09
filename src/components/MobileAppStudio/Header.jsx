import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { PHONE_NUMBER } from '@/src/app/app-constants'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerInner}>
          {/* Logo Column */}
          <div className={styles.logoCol}>
            <Link href="/lp/mobile-app-studio" className={styles.logo}>
              <Image
                src="/mobile-app-studio/logo.png"
                alt="Logo"
                width={82}
                height={82}
              />
            </Link>
          </div>

          {/* Nav Column (Desktop only) */}
          <div className={`${styles.navCol} d-none d-lg-block`}>
            <nav className={styles.nav}>
              <Link href="#banner">Home</Link>
              <Link href="#leadingPartner">About us</Link>
              <Link href="#services">Services</Link>
              <Link href="#industries">Industries</Link>
              <Link href="#portfolio">Portfolio</Link>
              <Link href="#testimonials">Testimonials</Link>
            </nav>
          </div>

          {/* Desktop Right Section (Always right side in Desktop) */}
          {/* Mobile Center/Right sections */}

          <div className={styles.mobileParts}>
            <a href={`tel:${PHONE_NUMBER}`} className={styles.phoneBtn}>
              <Image src="/mobile-app-studio/call-calling.png" alt="call" width={20} height={20} className="me-2" />
              <span className="d-lg-inline">{PHONE_NUMBER}</span>
            </a>

            <a href="#contact" className={`${styles.workBtn} d-none d-lg-block`}>Get Started</a>

            <button className={`${styles.toggleBtn} d-lg-none`} onClick={toggleMenu}>
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <div className={styles.menuOverlay} onClick={toggleMenu}></div>
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <Link href="/lp/mobile-app-studio" className={styles.logo}>
              <Image
                src="/mobile-app-studio/logo.png"
                alt="Logo"
                width={70}
                height={70}
              />
            </Link>
            <button className={styles.closeMenu} onClick={toggleMenu}><FaTimes /></button>
          </div>

          <div className={styles.mobileContent}>
            <Link href="#" onClick={toggleMenu}>Home</Link>
            <Link href="#" onClick={toggleMenu}>About us</Link>
            <Link href="#" onClick={toggleMenu}>Services</Link>
            <Link href="#" onClick={toggleMenu}>Industries</Link>
            <Link href="#" onClick={toggleMenu}>Portfolio</Link>
            <Link href="#" onClick={toggleMenu}>Blog</Link>
            <div className={styles.mobFooter}>
              <a href="#contact" className={styles.workBtnMob} onClick={toggleMenu}>WORK WITH US</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

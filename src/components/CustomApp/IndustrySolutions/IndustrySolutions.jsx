import React from 'react';
import Image from 'next/image';
import styles from './IndustrySolutions.module.css';

const servicesLeft = [
  {
    id: 1,
    icon: "/custom-app/serv-icon-1.webp",
    title: "Fintech Solution Development",
    desc: "Delivering cutting-edge, secure, and scalable fintech solution development tailored for modern financial services and digital banking."
  },
  {
    id: 2,
    icon: "/custom-app/serv-icon-2.webp",
    title: "Live Sports & Fitness App Development",
    desc: "Providing the best sports app for iPhone & android for all sports enthusiasts out there."
  },
  {
    id: 3,
    icon: "/custom-app/serv-icon-3.webp",
    title: "Grocery Mobile App Solutions",
    desc: "On-demand app for grocery delivery from the nearest supermarket, grocery store."
  }
];

const servicesRight = [
  {
    id: 4,
    icon: "/custom-app/serv-icon-4.webp",
    title: "Healthcare Mobile Apps Development",
    desc: "Our hospital management solutions provide professionals & patients a robust."
  },
  {
    id: 5,
    icon: "/custom-app/serv-icon-5.webp",
    title: "Restaurant Solution Development",
    desc: "Crafting seamless and intelligent restaurant solution development for modern dining experiences."
  },
  {
    id: 6,
    icon: "/custom-app/serv-icon-6.webp",
    title: "Real Estate Mobile App Development",
    desc: "We help to grow your business with our tech-savvy real estate mobile app company."
  }
];

const IndustrySolutions = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className={styles.mainTitle}>Industry-Specific Mobile App Development Solutions</h2>
            <div className={styles.headingLine}></div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-12 col-lg-4">
            {servicesLeft.map((service) => (
              <div key={service.id} className={styles.serviceItemLeft}>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                  <a href="#contactSection" className={`${styles.quoteBtn} text-decoration-none`}>
                    <span className={styles.circle}></span>
                    REQUEST A QUOTE
                  </a>
                </div>
                <div className={styles.serviceIcon}>
                  <Image src={service.icon} width={70} height={70} alt={service.title} />
                </div>
              </div>
            ))}
          </div>

          <div className="col-12 col-lg-4 text-center my-5 my-lg-0">
            <div className={styles.phoneWrapper}>
              <Image
                src="/custom-app/mobile-screen.webp"
                width={320}
                height={640}
                alt="Mobile App Dashboard"
                className={`img-fluid ${styles.phoneImg}`}
              />
              <div className={styles.shadowWrapper}>
                <Image
                  src="/custom-app/mobile-shadow.webp"
                  width={280}
                  height={40}
                  alt="Shadow"
                  className={styles.shadowImg}
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            {servicesRight.map((service) => (
              <div key={service.id} className={styles.serviceItemRight}>
                <div className={styles.serviceIcon}>
                  <Image src={service.icon} width={70} height={70} alt={service.title} />
                </div>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                  <a href="#contactSection" className={`${styles.quoteBtn} text-decoration-none`}>
                    <span className={styles.circle}></span>
                    REQUEST A QUOTE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;

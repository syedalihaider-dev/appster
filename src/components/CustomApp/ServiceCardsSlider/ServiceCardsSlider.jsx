import React from 'react';
import Image from 'next/image';
import styles from './ServiceCardsSlider.module.css';

const services = [
  { id: 1, title: "Application\nDevelopment", icon: "/custom-app/serv-icon-1.webp" },
  { id: 2, title: "E-commerce\nDevelopment", icon: "/custom-app/serv-icon-2.webp" },
  { id: 3, title: "Game\nDevelopment", icon: "/custom-app/serv-icon-3.webp" },
  { id: 4, title: "Web\nDevelopment", icon: "/custom-app/serv-icon-4.webp" },
  { id: 5, title: "MVP\nDevelopment", icon: "/custom-app/serv-icon-5.webp" },
  { id: 6, title: "Startup &\nEnterprises", icon: "/custom-app/serv-icon-6.webp" },
];

const ServiceCardsSlider = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          Shopify Web Developers Provides Custom-Built Pioneer Digital Mobile<br className="d-none d-lg-block" />
          App Development Solutions<br className="d-none d-lg-block" />
          That Aim To Acquire Customers' Loyalty & Trust.
        </h2>

        <div className={styles.sliderWrapper}>
          <div className={styles.cardsContainer}>
            {services.map((service) => (
              <div key={service.id} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Image src={service.icon} alt={service.title.replace('\n', ' ')} width={70} height={70} />
                </div>
                <h3 className={styles.cardTitle}>
                  {service.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i !== service.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSlider;

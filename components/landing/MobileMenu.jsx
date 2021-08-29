import React, { useState } from "react";
import styles from "../../styles/mobilemenu.module.css";
import Image from "next/image";

const MobileMenu = () => {
    const [show, setShow] = useState(false)
  return (
    <div className={styles.mobile}>
      <div className={styles.middle}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: '-2px' }} onClick={() => setShow(!show)}>
          <h4 style={{ marginRight: "5px" }}>Why Konfigg</h4>
          <Image height="15" width="13" src="/images/icon.svg" alt="arrow" />
        </div>
        {
            show && (
                <div style={{paddingLeft: '15px'}}>
                <h4>For Marketing</h4>
                <h4>For SEO</h4>
                <h4>Reduce dev costs</h4>
                <h4>For Special Customers</h4>
                <h1>Browse Categories</h1>
                <h4>Angular</h4>
                <h4>React</h4>
                <h4>Gatsby</h4>
                <h4>Next</h4>
                <h4>Vue</h4>
                <h4>Nuxt</h4>
              </div>
            )
        }
       
        <h4>Pricing</h4>
        <h4>Request a Demo</h4>
      </div>
      <div>
        <h1>The Company</h1>
        <h4>About Us</h4>
        <h4>{`What's new?`}</h4>
        <h4>Blog</h4>
      </div>
      <div>
        <h1>Why Konfigg</h1>
        <h4>Konfigg for SEO</h4>
        <h4>Reduce dev costs</h4>
        <h4>Special Events</h4>
        <h4>Special customers</h4>
      </div>
      <div>
        <h1>Tech Stack</h1>
        <h4>Konfigg for Angular</h4>
        <h4>Konfigg for React</h4>
        <h4>Konfigg for Gatsby</h4>
        <h4>Konfigg for Next</h4>
        <h4>Konfigg for Vue</h4>
        <h4>Konfigg for Nuxt</h4>
      </div>
      <div>
        <h1>Features</h1>
        <h4>Landing page</h4>
        <h4>Page duplication</h4>
        <h4>Auto Publish</h4>
      </div>
      <div className={styles.icons}>
        <div>
          <Image height="20" width="20" alt="fb" src="/images/fb.svg" />
        </div>
        <div>
          <Image
            height="20"
            width="20"
            alt="twitter"
            src="/images/twitter.svg"
          />
        </div>
      </div>
      <div className={styles.date}>
        <h4 style={{ flex: 1 }}>English (US) | &#8364; (EUR)</h4>
        <h4>© 2021 Konfigg, Inc.</h4>
        <h4 style={{ textDecoration: "underline" }}>Terms of Use</h4>
        <h4 style={{ textDecoration: "underline" }}>Privacy</h4>
      </div>
    </div>
  );
};

export default MobileMenu;

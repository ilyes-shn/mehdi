import React from "react";
import Image from "next/image";
import styles from '../../styles/footer.module.css'

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
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
            <Image height="20" width="20" alt='fb' src="/images/fb.svg" />
          </div>
          <div>
            <Image height="20" width="20" alt='twitter' src="/images/twitter.svg" />
          </div>
        </div>
      </div>
      <div className={styles.date}>
          <h4 style={{flex: 1}}>English (US)   |   &#8364; (EUR)</h4>
          <h4>© 2021 Konfigg, Inc.</h4>
          <h4 style={{textDecoration: 'underline'}}>Terms of Use</h4>
          <h4 style={{textDecoration: 'underline'}}>Privacy</h4>
      </div>
    </div>
  );
};

export default Footer;

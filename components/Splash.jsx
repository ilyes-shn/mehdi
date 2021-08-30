import React from "react";
import Image from "next/image";
import styles from '../styles/splash.module.css'

const Splash = () => {
  return (
    <div className={styles.splash}>
      <Image height="50" width="50" alt="konfigg logo" src="/favicon.svg" />
      <h1>Konfigg</h1>
    </div>
  );
};

export default Splash;

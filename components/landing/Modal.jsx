import React from "react";
import styles from "../../styles/modal.module.css";

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.left}>
        <h1>For Marketing</h1>
        <h4>With everyone in one place. meeting are fast-paced and.</h4>
        <h1>For SEO</h1>
        <h4>With everyone in one place. meeting are fast-paced and.</h4>
        <h1>Reduce dev costs</h1>
        <h4>With everyone in one place. meeting are fast-paced and.</h4>
        <h1>For Special Customers</h1>
        <h4>With everyone in one place. meeting are fast-paced and.</h4>
      </div>
      <div className={styles.right}>
          <h1>Browse Categories</h1>
          <h4>Angular</h4>
          <h4>React</h4>
          <h4>Gatsby</h4>
          <h4>Next</h4>
          <h4>Vue</h4>
          <h4>Nuxt</h4>
      </div>
    </div>
  );
};

export default Modal;

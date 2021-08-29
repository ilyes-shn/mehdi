import React from "react";
import styles from '../../styles/designers.module.css'

const Designers = () => {
  return (
    <div className={styles.designers}>
      <div className={styles.first}>
        <div>
          <h1 style={{background: '#C3E6CD', color: '#24663B'}}>Designers</h1>
          <h4>We’re the first multi-purpose design kit solutions for businesses. We help you bridge gaps between your layouts, templates and developers to empower all involved.</h4>
        </div>
        <div>
          <h1 style={{background: '#FDD4CD', color: '#AE1800'}}>Designers</h1>
          <h4>We’re the first multi-purpose design kit solutions for businesses. We help you bridge gaps between your layouts, templates and developers to empower all involved.</h4>
        </div>
      </div>
      <div className={styles.second}>
        <div>
          <h1 style={{background: '#CBE2F9', color: '#0B5CAD'}}>Designers</h1>
          <h4>We’re the first multi-purpose design kit solutions for businesses. We help you bridge gaps between your layouts, templates and developers to empower all involved.</h4>
        </div>
        <div>
          <h1 style={{background: '#F5D9A8', color: '#8F4700'}}>Designers</h1>
          <h4>We’re the first multi-purpose design kit solutions for businesses. We help you bridge gaps between your layouts, templates and developers to empower all involved.</h4>
        </div>
      </div>
    </div>
  );
};

export default Designers;

import React from "react";
import styles from "../../styles/onegrid.module.css";

const OneGrid = () => {
  return (
    <div className={styles.onegrid}>
      <h1>Start for free. Pay as you grow. Switch at any time.</h1>
      <h4>
        No matter how many team members you have - our pricing is simple,
        transparent and adapts to the size of your company.
      </h4>
      <div className={styles.switch}>
          <button>Bill Monthly</button>
          <button>Bill Yearly <span>-20%</span></button>
      </div>
    </div>
  );
};

export default OneGrid;

import React, { useState } from "react";
import styles from "../../styles/onegrid.module.css";

const OneGrid = () => {
  const [month, setMonth] = useState(false)
  const [year, setYear] = useState(true)
   return (
    <div className={styles.onegrid}>
      <h1>Start for free. Pay as you grow. Switch at any time.</h1>
      <h4>
        No matter how many team members you have - our pricing is simple,
        transparent and adapts to the size of your company.
      </h4>
      <div className={styles.switch}>
          <button style={{ border: month ? '1px solid #7027DD' : 'none'}} onClick={() => {setMonth(true); setYear(false)}}>Bill Monthly</button>
          <button style={{ border: year ? '1px solid #7027DD' : 'none'}} onClick={() => {setYear(true);setMonth(false)}}>Bill Yearly <span style={{color: '#7027DD'}}>-20%</span></button>
      </div>
    </div>
  );
};

export default OneGrid;

import React from "react";
import Card from "./Card";
import styles from '../../styles/cardsgrid.module.css'

const CardsGrid = () => {
  return (
    <div className={styles.cards}>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default CardsGrid;

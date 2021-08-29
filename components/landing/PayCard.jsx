import React from "react";
import styles from "../../styles/paycard.module.css";
import SignUpBtn from '../SignUpBtn';

const PayCard = () => {
  return (
    <div className={styles.pay}>
      <h1>Starter</h1>
      <h4>
        Advanced features and support for building pilot projects or small
        sites.
      </h4>
      <h2>Free to get started</h2>
      <h4>Automated builds from Git</h4>
      <h4>Deploy to global Edge network</h4>
      <h4>Live site previews with a collaboration UI for team members</h4>
      <h4>Instant rollbacks to any version</h4>
      <h4>Deploy static assets & dynamic serverless functions</h4>
    <SignUpBtn />
    </div>
  );
};

export default PayCard;

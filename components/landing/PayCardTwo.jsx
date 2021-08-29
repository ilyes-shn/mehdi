import React from "react";
import styles from "../../styles/paycard.module.css";
import SignUpBtn from '../SignUpBtn';

const PayCard = () => {
  return (
    <div className={styles.pay}>
      <h1>Pro</h1>
      <h4>
        Advanced features and support for building pilot projects or small
        sites.
      </h4>
      <h2>&#8364;350.00 / month</h2>
      <h4>Starter features, plus:</h4>
      <h4>Background Functions</h4>
      <h4>Password-protected sites</h4>
      <h4>Audit logs with 7-day history</h4>
      <h4>4× bandwidth & 3× build minutes</h4>
      <h4>Shared environment variables</h4>
      <h4>Slack & email notifications</h4>
      <h4>Email support</h4>
    <SignUpBtn />
    </div>
  );
};

export default PayCard;

import React from "react";
import styles from "../../styles/paycard.module.css";
import SignUpBtn from '../SignUpBtn';

const PayCard = () => {
  return (
    <div className={styles.pay}>
      <h1>Business</h1>
      <h4>
        Advanced features and support for building pilot projects or small
        sites.
      </h4>
      <h2>&#8364;350.00 / month</h2>
      <h4>Pro features, plus:</h4>
      <h4>SAML single sign-on</h4>
      <h4>Role-based access control</h4>
      <h4>Audit logs with full history</h4>
      <h4>Unlimited Forms, Identity, & Functions</h4>
      <h4>Unlimited Analytics for all sites</h4>
      <h4>Prioritize time-sensitive builds</h4>
      <h4>Billing administrator role</h4>
      <h4>Self-hosted GitHub/GitLab</h4>
      
    <SignUpBtn />
    </div>
  );
};

export default PayCard;

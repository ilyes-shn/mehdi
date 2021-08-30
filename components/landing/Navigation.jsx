import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/navigation.module.css";
import SignUpBtn from "../SignUpBtn";
import Modal from "./Modal";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [enter, setEnter] = useState(false)

  
  function close() {
    if(enter) {
      setOpen(true)
    } else { 
      setTimeout(() => {
        setOpen(false)
      }, 2000)
       }
  }

  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <Image height="35" width="35" src="/images/4535.svg" alt="Konfigg" />
        <h2>Konfigg</h2>
        <Image
          height="16"
          width="65"
          src="/images/177.svg"
          alt="we are hiring"
        />
      </div>
      <div className={styles.middle}>
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={close}>
          <h4>Why Konfigg</h4>
          <Image height="15" width="13" src="/images/icon.svg" alt="arrow" />
        </div>
        <a href="#">Pricing</a>
        <a href="#">Request a Demo</a>
      </div>
      <div className={styles.right}>
        <button className={styles.login}>Login</button>
        <SignUpBtn />
      </div>
      {open && (
        <div onMouseEnter={() => {setEnter(true); setOpen(true)}} onMouseLeave={() => {setEnter(false); setOpen(false)}}>
          <Modal />
        </div>
      )}
      <div className={styles.close}>

      {open ? (
        <div onClick={() => setOpen(false)}>
          <Image height="30" width="30" src="/images/close.svg" />
        </div>
      ) : (
        <div onClick={() => setOpen(true)}>
          <Image height="30" width="30" src="/images/open.svg" />
        </div>
      )}
      </div>
      {open && <MobileMenu />}
    </div>
  );
};

export default Navigation;

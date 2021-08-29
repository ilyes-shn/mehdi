import React from "react";
import CardsGrid from "../components/landing/CardsGrid";
import OneGrid from "../components/landing/OneGrid";
import OneGridPay from "../components/landing/OneGridPay";
import TwoGrid from "../components/landing/TwoGrid";
import TwoGridImg from "../components/landing/TwoGridImg";
import TwoGridImgSec from "../components/landing/TwoGridImgSecond";
import TwoGridImgRev from "../components/landing/TwoGridImgReverse";
import Payment from "../components/landing/Payment";
import Designers from "../components/landing/Designers";
import Options from "../components/landing/Options";
import Banner from "../components/landing/Banner";
import Footer from "../components/landing/Footer";
import Navigation from "../components/landing/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <TwoGrid />
      <OneGrid />
      <CardsGrid />
      <TwoGridImg />
      <TwoGridImgRev />
      <TwoGridImgSec />
      <OneGridPay />
      <Payment />
      <OneGrid />
      <Designers />
      <OneGrid />
      <Options />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;

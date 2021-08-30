import React from "react";
import CardsGrid from "../components/landing/CardsGrid";
import OneGrid from "../components/landing/OneGrid";
import TwoGridNew from "../components/landing/TwoGridNew";
import TwoGridImg from "../components/landing/TwoGridImg";
import TwoGridImgSec from "../components/landing/TwoGridImgSecond";
import TwoGridImgRev from "../components/landing/TwoGridImgReverse";
import Designers from "../components/landing/Designers";
import Options from "../components/landing/Options";
import Banner from "../components/landing/Banner";
import Footer from "../components/landing/Footer";
import Navigation from "../components/landing/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <TwoGridNew />
      <OneGrid />
      <CardsGrid />
      <TwoGridImg />
      <TwoGridImgRev />
      <TwoGridImgSec />
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

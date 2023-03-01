import React from "react";
import HeadingBar from "../CommonComponent/HeadingBar/HeadingBar";
import Navbar from  "../CommonComponent/Navbar/Nav";
import Header from "../CommonComponent/Header/Header.js";
import OurFeatures from "./OurFeatures/OurFeatures.js";
import OurClientSay from "./OurClientSay/OurClientSay.js";
import AboutEcomerce from "./AboutEcomerce/AboutEcomerce.js";
import FooterSubcomponents from "../CommonComponent/Footer/FooterSubcomponents/FooterSubcomponents";

const AboutUs = () => {
  return (
    <>
      <HeadingBar />
      <Navbar/>
      <Header name="About Us" />
      <AboutEcomerce />
      <OurFeatures />
      <OurClientSay />
      <FooterSubcomponents/>    
      
      
    </>
  );
};
export default AboutUs;

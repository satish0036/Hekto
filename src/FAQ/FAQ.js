import React from "react";
import HeadingBar from "../CommonComponent/HeadingBar/HeadingBar.js";
import Navbar from "../CommonComponent/Navbar/Nav.js";
import Header from "../CommonComponent/Header/Header.js";
import GenerelInformation from "./GenerelInformation/GenerelInformation.js";
import FooterSubcomponents from "../CommonComponent/Footer/FooterSubcomponents/FooterSubcomponents";
import Sponcer from "../CommonComponent/Sponcer/Sponcer.js";
const FAQ = () => {
  return (
    <>
      <HeadingBar/>
      <Navbar/>
      <Header name="FAQ" />
      <GenerelInformation />
      <Sponcer />
      <FooterSubcomponents />
      
    </>
  );
};
export default FAQ;

import React from "react";
import HeadingBar from "../CommonComponent/HeadingBar/HeadingBar.js";
import Navbar from "../CommonComponent/Navbar/Nav.js";
import Header from "../CommonComponent/Header/Header.js";
import InformationAboutus from "./InformationAboutus/InformationAboutus.js";
import FooterSubcomponents from "../CommonComponent/Footer/FooterSubcomponents/FooterSubcomponents.js";
const ContactUs = () => {
  return (
    <>

      <HeadingBar/>
      <Navbar/>
      <Header name="Contact Us" />
      <InformationAboutus />
      <FooterSubcomponents />
    </>
  );
};
export default ContactUs;

import React from "react";
import HeadingBar from "../CommonComponent/HeadingBar/HeadingBar.js";
import Navbar from "../CommonComponent/Navbar/Nav.js";
import Header from "../CommonComponent/Header/Header.js";
import NotFound from "./NotFound.js";
import Sponcer from "../CommonComponent/Sponcer/Sponcer.js";
import FooterSubcomponents from "../CommonComponent/Footer/FooterSubcomponents/FooterSubcomponents.js";
const NotFound404 = () => {
  return (
    <>
      
      <HeadingBar />  
      <Navbar/>
      <Header name="404 Not Found" />      
      <NotFound />   
      <Sponcer/>       
      <FooterSubcomponents />
         
    </>
  );
};
export default NotFound404;

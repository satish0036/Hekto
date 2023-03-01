import React from "react";
import HeadingBar from "../CommonComponent/HeadingBar/HeadingBar.js";
import Navbar from "../CommonComponent/Navbar/Nav.js";
import Header from "../CommonComponent/Header/Header.js";
import Login from "./Login/Login.js";
import Sponcer from "../CommonComponent/Sponcer/Sponcer.js";
import FooterSubcomponents from "../CommonComponent/Footer/FooterSubcomponents/FooterSubcomponents";
const MyAccount = () => {
  return (
    <>
      <HeadingBar />
      <Navbar/>
      <Header name="My Account" />
      <Login />      
      <Sponcer />
      <FooterSubcomponents />         
    </>
  );  
};
export default MyAccount;

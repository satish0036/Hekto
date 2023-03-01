import React from "react";
import HeadingBar from "../CommonComponent/HeadingBar/HeadingBar.js";
import Navbar from "../CommonComponent/Navbar/Nav.js";
import Header from "../CommonComponent/Header/Header.js";
import OrderCompletedPage from "./OrderCompleted/OrderCompletedPage.js";
import Sponcer from "../CommonComponent/Sponcer/Sponcer.js";
import FooterSubcomponents from "../CommonComponent/Footer/FooterSubcomponents/FooterSubcomponents";
const OrderCompleted = () => {
  return (
    <div>
      <HeadingBar/>
      <Navbar/>
      <Header name="Order Completed"/>
      <OrderCompletedPage/>
      <Sponcer />
      <FooterSubcomponents />
     
    </div>
  );
};

export default OrderCompleted;

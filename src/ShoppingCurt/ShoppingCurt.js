import React from "react";
import HeadingBar from "../CommonComponent/HeadingBar/HeadingBar.js";
import Navbar from "../CommonComponent/Navbar/Nav.js";
import Header from "../CommonComponent/Header/Header.js";
import Products from "./Products/Products.js";
import CartTotals from "./CartTotals/CartTotals.js";
import FooterSubcomponents from "../CommonComponent/Footer/FooterSubcomponents/FooterSubcomponents";
const ShoppingCurt = () => {
  return (
    <div>
      <HeadingBar />
      <Navbar/>
      <Header name="Shopping Curt"/>
      <Products />     
      <CartTotals />
      <FooterSubcomponents/>
    </div>
  );
};

export default ShoppingCurt;

import React from "react";
import HeadingBar from "../CommonComponent/HeadingBar/HeadingBar.js";
import Navbar from "../CommonComponent/Navbar/Nav.js";
import Header from "../CommonComponent/Header/Header.js";
import ShippingAddress from "./ShippingAddress/ShippingAddress/ShippingAddress.js";
import ProductInCart from "./ShippingAddress/ProductInCart/ProductInCart.js";
import Checkout from "./ShippingAddress/Checkout/Checkout.js";
import FooterSubcomponents from "../CommonComponent/Footer/FooterSubcomponents/FooterSubcomponents";
const HektoDemo=()=>{
  return (
    <>
      <HeadingBar />
      <Navbar />
      <Header name="HektoDemo" />
      <ShippingAddress/>
      <ProductInCart/>
      <Checkout/>
      <FooterSubcomponents/>
    </>
  );
};
export default HektoDemo;

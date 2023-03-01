import React from "react";
import HeadingBar from "../CommonComponent/HeadingBar/HeadingBar.js";
import Navbar from "../CommonComponent/Navbar/Nav.js";
import Header from "../CommonComponent/Header/Header.js";
import EcommerceFashionItem from "./EcommerceFashionItem/EcommerceFashionItem.js";
import Sponcer from "../CommonComponent/Sponcer/Sponcer.js";
import Filter from "../CommonComponent/Filter/Filter.js";
import FooterSubcomponents from "../CommonComponent/Footer/FooterSubcomponents/FooterSubcomponents";

const ShopGridDefault = () => {
  return (
    <>
      
      <HeadingBar />
      <Navbar/>
      <Header name="Shop Grid Default" />
      <Filter />
      <EcommerceFashionItem />
      <Sponcer />      
      <FooterSubcomponents />
    </>
  );
};
export default ShopGridDefault;

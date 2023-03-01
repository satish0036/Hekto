import React from "react";
import HeadingBar from "../CommonComponent/HeadingBar/HeadingBar.js";
import Navbar from "../CommonComponent/Navbar/Nav.js";
import Header from "../CommonComponent/Header/Header.js";
import ShopListItem from "./ShopListItem/ShopListItem.js";
import Filter from "../CommonComponent/Filter/Filter.js";
import Sponcer from "../CommonComponent/Sponcer/Sponcer.js";
import FooterSubcomponents from "../CommonComponent/Footer/FooterSubcomponents/FooterSubcomponents";
const ShopList = () => {
  return (
    <>
      <HeadingBar />
      <Navbar/>
      <Header name="Shop List" />
      <Filter />
      <ShopListItem />
      <Sponcer />     
      <FooterSubcomponents />
      
    </>
  );
};
export default ShopList;

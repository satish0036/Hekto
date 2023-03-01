import React from "react";
import HeadingBar from "../CommonComponent/HeadingBar/HeadingBar.js";
import Navbar from "../CommonComponent/Navbar/Nav.js";
import Header from "../CommonComponent/Header/Header.js";
// import ShopLeftSidebarFilter from "./ShopLeftSidebarFilter/ShopLeftSidebarFilter";
import ShopLeftSlidebarItem from "./ShopLeftSidebarItem/ShopLeftSidebarItem.js";
import FooterSubcomponents from "../CommonComponent/Footer/FooterSubcomponents/FooterSubcomponents";
import Sponcer from "../CommonComponent/Sponcer/Sponcer.js";
import Filter from "../CommonComponent/Filter/Filter.js";
const ShopLeftSidebar = () => {
  return (
    <div>
      <HeadingBar/>
      <Navbar/>
      <Header name="Shop Left Sidebar"/>
      {/* <ShopLeftSidebarFilter/>  */}
      <Filter />
      <ShopLeftSlidebarItem />
      <Sponcer />
      <FooterSubcomponents />
    </div>
  );
};

export default ShopLeftSidebar;

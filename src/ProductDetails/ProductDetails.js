import React from "react";
import HeadingBar from "../CommonComponent/HeadingBar/HeadingBar.js";
import Navbar from "../CommonComponent/Navbar/Nav.js";
import Header from "../CommonComponent/Header/Header.js";
import Rectangle132 from "./Rectangle132/Rectangle132.js";
import Rectangle140 from "./Rectangle140/Rectangle140.js";
import RelatedProducts from "./RelatedProducts/RelatedProducts.js";

import Sponcer from "../CommonComponent/Sponcer/Sponcer.js";
import FooterSubcomponents from "../CommonComponent/Footer/FooterSubcomponents/FooterSubcomponents";
const ProductDetails = () => {
  return (
    <>
      <HeadingBar />
      <Navbar />
      <Header name="Product Details" />
      <Rectangle132 />
      <Rectangle140 />
      <RelatedProducts />
      <Sponcer />
      <FooterSubcomponents />
    </>
  );
};
export default ProductDetails;

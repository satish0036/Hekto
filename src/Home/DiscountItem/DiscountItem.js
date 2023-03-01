import React from "react";
import "./DiscountItem.css";
// import DiscountItemNav from "./DiscountItemNav.js";
// import WoodChair from "./WoodChair";
const DiscountItem = () => {
  return (
    <>
      <div className="DiscountItem_layout">
        <div className="discount_item">Discount Item</div>

        {/* navbar */}
        <div className="DiscountItem_nav">
          <div className="DiscountItem_nav_name1">Wood Chair</div>
          <div className="DiscountItem_nav_name1">Plastic Chair</div>
          <div className="DiscountItem_nav_name1">Sofa Colletion</div>
        </div>
        {/* cart */}
        <div className="DiscountItem_cart">
          <div className="DiscountItem_cart_left">
            <div className="discount_item4_text1">20% Discount Of All Products</div>
            <div className="discount_item4_text2">Eams Sofa Compact</div>
            <div className="discount_item4_text3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          feugiat habitasse nec, bibendum condimentum.
            </div>
            <div className="discount_item4_text4_check">
              <div className="discount_item4_text4">&#10004;  Material expose like metals</div>
              <div className="discount_item4_text5">&#10004;  Clear lines and geomatric figures</div>
            </div>
            <div className="discount_item4_text4_check2">
              <div className="discount_item4_text6"> &#10004; Simple neutral colours.</div>
              <div className="discount_item4_text7"> &#10004; Material expose like metals</div>
            </div>
            <button className="discount_item4_text8_shop">Shop Now</button>

            
          </div>
          <div className="DiscountItem_cart_right">
            <img
              className="discount_item4_img1"
              src="./Image/Home/DiscountItem/tortuga.png"
              alt="g"
            />
            <img
              className="discount_item4_ellipse"
              src="./Image/Home/DiscountItem/Ellipse64.png"
              alt="g"
            />
            
           
          </div>
        </div>
       
        {/* <div className="discount_item4">
          <img
            className="discount_item4_ellipse"
            src="./Image/Home/DiscountItem/Ellipse64.png"
            alt="g"
          />
          <img
            className="discount_item4_img1"
            src="./Image/Home/DiscountItem/tortuga.png"
            alt="g"
          />
          <div className="discount_item4_text1">20% Discount Of All Products</div>
          <div className="discount_item4_text2">Eams Sofa Compact</div>
          <div className="discount_item4_text3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          feugiat habitasse nec, bibendum condimentum.
          </div>
          <div className="discount_item4_text4">Material expose like metals</div>
          <div className="discount_item4_text5">Simple neutral colours.</div>
          <div className="discount_item4_text6">
          Clear lines and geomatric figures
          </div>
          <div className="discount_item4_text7">Material expose like metals</div>
          <div className="discount_item4_text8">
            <div className="discount_item4_text8_shop">Shop Now</div>
          </div>

          <img
            className="discount_item4_vector1"
            src="./Image/Home/DiscountItem/Vector.png"
            alt="g"
          />
          <img
            className="discount_item4_vector2"
            src="./Image/Home/DiscountItem/Vector.png"
            alt="g"
          />
          <img
            className="discount_item4_vector3"
            src="./Image/Home/DiscountItem/Vector.png"
            alt="g"
          />
          <img
            className="discount_item4_vector4"
            src="./Image/Home/DiscountItem/Vector.png"
            alt="g"
          />
        </div> */}
      </div>
    </>
  );
};
export default DiscountItem;

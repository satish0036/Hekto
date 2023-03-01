import React from "react";
import "./ShopLeftSidebarCards.css";
import { Rating } from "react-simple-star-rating";
const ShopLeftSidebarCards = (props) => {
  return (
    
    <div className="ShopLeftSidebarCards">
      <img
        className="ShopLeftSidebar_product_img"
        src={props.pimg}
        alt="g"
      />
      <img
        className="ShopLeftSidebar_ellipse1"
        src={props.ellipse1}
        alt="g"
      />
      <img
        className="ShopLeftSidebar_ellipse2"
        src={props.ellipse2}
        alt="g"
      />
      <img
        className="ShopLeftSidebar_ellipse3"
        src={props.ellipse3}
        alt="g"
      />
       
      <Rating className="ShopLeftSidebar_rating_star1" size={17}/>
       
      <img
        className="ShopLeftSidebar_shop_icon"
        src={props.shopIcon}
        alt="g"
      />
      <div className="ShopLeftSidebar_text1">{props.name}</div>
      <div className="ShopLeftSidebar_text2">{props.disPrice}</div>
      <div className="ShopLeftSidebar_text3">{props.actulPrice}</div>
      <div className="ShopLeftSidebar_text4">{props.text}</div>
    </div>
    
  );
};

export default ShopLeftSidebarCards;

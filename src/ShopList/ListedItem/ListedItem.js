import React from "react";
import "./ListedItem.css";
import { Rating } from "react-simple-star-rating";
const ListedItem = (props) => {
  return (
    <div>
      <div>
        <div className="ShopListItem1">
          <img
            className="ShopListItem1_product_img11"
            src={props.pimg}
            alt="g"
          />
          <img
            className="ShopListItem1_img1"
            src={props.ellipse1}
            alt="g"
          />
          <img
            className="ShopListItem1_img2"
            src={props.ellipse2}
            alt="g"
          />
          <img
            className="ShopListItem1_img3"
            src={props.ellipse3}
            alt="g"
          />
        
          <div  className="ShopListItem1_rating_star"> <Rating   /></div>
       
          <img
            className="ShopListItem1_shop_icon"
            src={props.shopIcon}
            alt="g"
          />
          <div className="ShopListItem1_text1">{props.name}</div>
          <div className="ShopListItem1_text2">{props.disPrice}</div>
          <div className="ShopListItem1_text3">{props.actulPrice}</div>
          <div className="ShopListItem1_text4">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default ListedItem;

import React from "react";
import "./ShopexOfferCards.css";
const ShopexOfferCards = (props) => {
  return (
    <div>
      <div className="what_shopex_offer">
        <img
          className="Offer_icon"
          src={props.image}
          alt="g"
        />
        <div className="Offer1_delivery_time">
          {props.name}
        </div>
        <div className="Offer_desc">
          {props.about}
        </div>
      </div>
    </div>
  );
};

export default ShopexOfferCards;

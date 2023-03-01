import React from "react";
import "./TopCategoriesCards.css";
const TopCategoriesCards = (props) => {
  return (
    <div>
      <div className="top_categories_products1">
        <div className="top_categories_img_box">
          <img
            className="top_categories_products1_circle"
            src={props.circleimg1}
            alt="g"
          />
          <img
            className="top_categories_products_img"
            src={props.productimg1}
            alt="g"
          />
        </div>
        <div className="top_categories_text_box">
          <div className="top_categories_products_name">{props.name}</div>
          <div className="top_categories_products_price">{props.actulPrice}</div>
        </div>
        {/* <div className="top_categories_products1_box">
          
          <div className="top_categories_products1_view_shop">
            <div className="shop"></div>
          </div>
        </div>
       */}
      </div>
    </div>
  );
};

export default TopCategoriesCards;

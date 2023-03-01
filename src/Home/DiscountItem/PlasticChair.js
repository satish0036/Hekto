import React from "react";
import "./PlasticChair.css";
const PlasticChair = () => {
  return (
    <div>
      <div className="discount_item1">
        <div className="discount_item1_text1">23% off in all products</div>
        <div className="discount_item1_text2">Shop Now</div>
        <img
          className="discount_item1_img"
          src="./Image/Home/DiscountItem/image1162.png"
          alt="g"
        />
      </div>
      <div className="discount_item2">
        <div className="discount_item1_text1">23% off in all products</div>
        <div className="discount_item1_text2">Shop Now</div>
        <img
          className="discount_item2_img"
          src="./Image/Home/DiscountItem/image1161.png"
          alt="g"
        />
      </div>
      <div className="discount_item3">
        <div className="discount_item3_box1">
          <div className="rectangle">
            <img
              className="discount_item3_img1"
              src="./Image/Home/DiscountItem/image30.png"
              alt="g"
            />
          </div>

          <div className="discount_item3_text1">Executive Seat chair</div>
          <div className="discount_item3_price1">$23</div>
        </div>

        <div className="discount_item3_box2">
          <div className="rectangle">
            {" "}
            <img
              className="discount_item3_img1"
              src="./Image/Home/DiscountItem/image19.png"
              alt="g"
            />
          </div>

          <div className="discount_item3_text1">Executive Seat chair</div>
          <div className="discount_item3_price1">$23</div>
        </div>

        <div className="discount_item3_box3">
          <div className="rectangle">
            {" "}
            <img
              className="discount_item3_img1"
              src="./Image/Home/DiscountItem/image28.png"
              alt="g"
            />
          </div>
          <div className="discount_item3_text1">Executive Seat chair</div>
          <div className="discount_item3_price1">$23</div>
        </div>
      </div>
    </div>
  );
};

export default PlasticChair;

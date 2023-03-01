import React from "react";
import "./OrderCompletedPage.css";
const OrderCompletedPage = () => {
  return (
    <>
      <div className="OrderCompletedPage_layout">
        <div className="CompletedPage_layout2">
          <img className="OrderCompletedPage_img2" src="./Image/OrderCompleted/OrderCompletedPage/Vector16.png" alt="g" />
          <img className="OrderCompletedPage_img3" src="./Image/OrderCompleted/OrderCompletedPage/Vector15.png" alt="g" />
          <div className='OrderCompletedPage_text1'>Your Order Is Completed! </div>
          <div className='OrderCompletedPage_text2'>Thank you for your order! Your order is being processed and will be completed within 3-6
                hours. You will receive an email confirmation when your order is completed.
          </div>
          <button className='OrderCompletedPage_box1'>Continue Shopping </button>
          {/* <div className='OrderCompletedPage_text3'>Continue Shopping </div> */}
          <div className='OrderCompletedPage_left_border'/>
          <div className='OrderCompletedPage_bottom_border'/>
          <img className="OrderCompletedPage_img1" src="./Image/OrderCompleted/OrderCompletedPage/clock1.png" alt="g" />
          <img className="OrderCompletedPage_img4" src="./Image/OrderCompleted/OrderCompletedPage/Group(2).png" alt="g" />
        </div>
      </div>
    </>
  );
};

export default OrderCompletedPage;

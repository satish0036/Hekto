import React from "react";
import "./Checkout.css";
const Checkout = () => {
  return (
    <div>
      <div className='Checkout_box11'>
        <div className="SubtotalsPrice1">
          <div className='Checkout_box1_text11'>Subtotals:</div>
          <div className='Checkout_box1_text21'>£219.00</div>
        </div>       
        <div className='Checkout_box1_line11'/>

        <div className="TotalPrice1">
          <div className='Checkout_box1_text31'>Totals:</div>
          <div className='Checkout_box1_text41'>£325.0</div>
        </div>       
        <div className='Checkout_box1_line21'/>
     
        <div className="checkbox_line1">
          <input type="checkbox"  className="Checkout_box1_check1"/>
          <div className='Checkout_box1_text51'>Shipping & taxes calculated at checkout</div>
        </div>
        <button className='Checkout_box21'>Proceed To Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;

import React from "react";
import "./CartTotals.css";
const CartTotals = () => {
  return (
    <div>
      <div className="CartTotalsLayout">
        <div className='CartTotals_text1'>Cart Totals</div>
        <div className='CartTotals_box1'>
          <div className="SubtotalsPrice">
            <div className='CartTotals_box1_text1'>Subtotals:</div>
            <div className='CartTotals_box1_text2'>£219.00</div>
          </div>       
          <div className='CartTotals_box1_line1'/>

          <div className="TotalPrice">
            <div className='CartTotals_box1_text3'>Totals:</div>
            <div className='CartTotals_box1_text4'>£325.0</div>
          </div>       
          <div className='CartTotals_box1_line2'/>
     
          <div className="checkbox_line">
            <input type="checkbox"  className="CartTotals_box1_check"/>
            <div className='CartTotals_box1_text5'>Shipping & taxes calculated at checkout</div>
          </div>
          <button className='CartTotals_Proceed'>Proceed To Checkout</button>
        </div>
      </div>



      <div className="CalculateShoppingLayout">
        <div className='CartTotals_text2'>Calculate Shopping</div>
        <div className='CartTotals_box2'>
          <input className='CartTotals_box2_text1'placeholder="Countary" />
          <div className='CartTotals_box2_line1' />
          <input className='CartTotals_box2_text2' placeholder="City "/>
          <div className='CartTotals_box2_line2' />
          <input className='CartTotals_box2_text3'placeholder="Postal Code" />
          <div className='CartTotals_box2_line3' />
          <button className='CartTotals_box2_rec'>Calculate Shiping</button>
          {/* <div className='CartTotals_box2_text4'>Calculate Shiping</div> */}
        </div>
      </div>

    </div>
  );
};

export default CartTotals;

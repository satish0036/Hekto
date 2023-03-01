import React from "react";
import "./ShippingAddress.css";

const ShippingAddress = () => {
  return (
    <>
      <div className="ShippingAddress_layout">
        <div className='ShippingAddress_text1'>Hekto Demo</div>
        <div className='ShippingAddress_text2'>Cart/ Information/ Shipping/ Payment</div>
        <div className='ShippingAddress_box1'>
          <div className="ContactInformation">
            <div className='ShippingAddress_box1_text1'>Contact Information</div>
            <button className='ShippingAddress_box1_text2'>Already have an account? Log in</button>
          </div>
          <input className='ShippingAddress_box1_text3' placeholder="Email or mobile phone number"/>
          <hr className='ShippingAddress_box1_line1'/>
          <div className="checkbox_Line">
            <input type="checkbox" className="ShippingAddress_box1_check"/>      
            <div className='ShippingAddress_box1_text4'>Keep me up to date on news and excluive offers</div>
          </div>
          <div className='ShippingAddress_box1_text5'>Shipping address</div>
          <div className="FirstLastName">
            <div className="FName">
              <input type="text" className='ShippingAddress_box1_text6'placeholder="First name (optional)"/>              
              <hr className='ShippingAddress_box1_line2'/>     
            </div>
            <div className="LName">
              <input className='ShippingAddress_box1_text7' placeholder="Last name"/>
              <hr className='ShippingAddress_box1_line3'/>
            </div>
          </div>
          <input className='ShippingAddress_box1_text8'placeholder="Address"/>
          <hr className='ShippingAddress_box1_line4'/>
          <input className='ShippingAddress_box1_text9' placeholder="Appaetnentment,suit,e.t.c (optinal)" />
          <hr className='ShippingAddress_box1_line5'/>
          <input className='ShippingAddress_box1_text10' placeholder="City"/>
          <hr className='ShippingAddress_box1_line6'/>
          <div className="FirstLastName">
            <div className="FName">
              <input type="text" className='ShippingAddress_box1_text6'placeholder="Country (optional)"/>              
              <hr className='ShippingAddress_box1_line2'/>     
            </div>
            
            <div className="LName">
              <input className='ShippingAddress_box1_text7' placeholder="Postal Code"/>
              <hr className='ShippingAddress_box1_line3'/>
              
            </div>
           
           
          </div>
          <div ><button className='ShippingAddress_box234'>Continue Shipping</button></div>
         
        </div>
      </div>
    </>

  );
};

export default ShippingAddress;

import React from "react";
import "./HektoContactInfo.css";
const HektoContactInfo = () => {
  return (
    <div>
      <div className="footer_hekto">Hekto</div>
      <input type="text"className="footer_rectangle_box1" placeholder="Enter Email Address"  />
      <button  className="footer_rectangle_box3">Sign Up</button>     
      <div className="footer_hekto_text1">Contact Info</div>
      <div className="footer_hekto_text2">
            17 Princess Road, London, Greater London NW1 8JR, UK
      </div>
    </div>
  );
};

export default HektoContactInfo;

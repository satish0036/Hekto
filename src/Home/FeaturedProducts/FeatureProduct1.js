import React from "react";
import "./FeatureProduct1.css";

const FeatureProduct1 = (props) => {
  
  console.log(props);
  return (
    <div className="featureproduct1">
      <div className="featureproduct1_background">
        <img
          className="featureproduct1_img1"
          src={props.pimg}
          alt="g"
        />
      </div>
      <div className="featureproduct1_name">{props.name}</div>
      <div className="featureproduct1_color">
        <div className="color_p" />
        <div className="color_q" />
        <div className="color_r"  />
      </div>
      <div className="featureproduct1_code">{props.productCode}</div>
      <div className="featureproduct1_price">{props.actulPrice}</div>
     
    </div>
  );
};
export default FeatureProduct1;

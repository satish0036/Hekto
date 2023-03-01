import React from "react";
import "./CustomerCare.css";
const CustomerCare = (props) => {
  return (
    <div>

      <div className="home_footer_CustomerCare_title">{props.title}</div>
      {props.contents.map((content) => (<div className="home_footer_CustomerCare_content" key="2"><div >{content}</div></div>))}


    </div>
  );
};

export default CustomerCare;

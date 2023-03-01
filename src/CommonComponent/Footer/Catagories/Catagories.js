import React from "react";
import "./Catagories.css";
const Catagories = (props) => {
  return (
    <div>
      <div className="home_footer_catagories_title">{props.title}</div>
      {props.contents.map((content) => (<div className="home_footer_catagories_content" key="1"><div >{content}</div></div>))}
    </div>
  );
};

export default Catagories;

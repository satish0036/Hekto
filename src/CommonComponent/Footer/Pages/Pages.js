import React from "react";
import "./Pages.css";
const Pages = (props) => {
  return (
    <div>
      <div className="home_footer_page_title">{props.title}</div>
      {props.contents.map((content) => (<div className="home_footer_page_content" key="3"><div >{content}</div></div>))}
    </div>
  );
};
export default Pages;

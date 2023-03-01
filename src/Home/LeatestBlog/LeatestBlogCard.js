import React from "react";
import "./LeatestBlogCard.css";
import LeatestBlog from "./LeatestBlog.js";
function LeatestBlogCard() {
  const data=["1","2","3"];
  return (
    <div className="LeatestBlogCard_layout">
      <div className="LeatestBlogCard_name">Leatest Blog</div>
      <div className="LeatestBlogCard">
        {
          data.map((datas)=> <LeatestBlog data={datas} key={datas} />)
        }
      </div>
    </div>
  );
}

export default LeatestBlogCard;

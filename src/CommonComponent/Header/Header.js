import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <div className="Rectangle115_text1">
        
        <div className="Rectangle115_text2">
          <div className="Rectangle115_page_name">{props.name}</div>
          <div className="Rectangle115_text3">
            <div className="Rectangle115_home">Home.</div>
            <div className="Rectangle115_home" >Pages.</div>
            <div className="Rectangle115_page_name2" >{props.name}</div> 
          </div>
        </div>
      
      </div>
    </>
  );
};
export default Header;

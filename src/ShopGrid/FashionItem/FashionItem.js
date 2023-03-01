import React from "react";
import "./FashionItem.css";
const FashionItem = (props) => {

  return (
    <div >
      


      <div className="FashionItem">
        <div className='box'>
          <img
            className="FashionItem_img"
            src={props.img}
            alt="g"
          />
        </div>
        <div className='FashionItem_name'>{props.name}</div>
        <div className="FashionItem_icon" >
          <img
            src={props.icon}
            alt="g"
          />
        </div>
        <div className="FashionItemsP">
          <div className='FashionItem_updatedprice'>{props.updatedprice}</div>
          <div className='FashionItem_price'>{props.price}</div>
        </div>
        {/* <div className='FashionItem_name'>{props.name}</div>
        <img
          className="FashionItem_icon"
          src={props.icon}
          alt="g"
        />
        <div className='FashionItem_updatedprice'>{props.updatedprice}</div>
        <div className='FashionItem_price'>{props.price}</div>
        <img
          className="FashionItem_img"
          src={props.img}
          alt="g"
        /> */}
        
      </div>      
    </div>
  );
};

export default FashionItem;

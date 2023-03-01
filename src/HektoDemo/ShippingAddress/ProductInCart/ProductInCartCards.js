import React from "react";
import "./ProductInCartCards.css";
const ProductInCartCards = (props) => {
  return (
    <div>
      <div className="ProductInCartCards_layout">
        <img
          className="ProductInCart1_img1"
          src={props.pimg}
          alt="g"
        />
        <div className='ProductInCart1_text1'>{props.name}</div>
        <div className='ProductInCart1_text2'>Color :</div>
        <div className='ProductInCart1_text3'>{props.color}</div>
        <div className='ProductInCart1_text4'>Size :</div>
        <div className='ProductInCart1_text5'>{props.size}</div>
        <div className='ProductInCart1_text6'>{props.actulPrice}</div>
        {/* <div className='ProductInCart1_line1'/> */}


      </div>
    </div>
  );
};

export default ProductInCartCards;

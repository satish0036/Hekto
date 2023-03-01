import React from "react";
import "./ProductsCarts.css";
const ProductsCarts = (props) => {
  return (
    <>
      <div className="ProductsCarts_layout">
        <img
          className="Products1_img1"
          src={props.pimg}
          alt="g"
        />
        <img
          className="Products1_img2"
          src={props.crossImg}
          alt="g"
        />
        <img
          className="Products1_img3"
          src={props.counterImg}
          alt="g"
        />
        <div className='Products1_text1'>{props.name}</div>
        <div className='Products1_text2'>Color:</div>
        <div className='Products1_text3'>{props.color}</div>
        <div className='Products1_text4'>Size:</div>
        <div className='Products1_text5'>{props.size}</div>
        <div className='Products1_text6'>{props.actulPrice}</div>
        <div className='Products1_text7'>{props.totalPrice}</div>
        <div className='Products1_line1' />
      </div>
    </>
  );
};

export default ProductsCarts;

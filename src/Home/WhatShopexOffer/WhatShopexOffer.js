import React from "react";
import "./WhatShopexOffer.css";
import ShopexOfferCards from "./ShopexOfferCards";
import { useState ,useEffect } from "react";
const WhatShopexOffer = () => {
 
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch("AllData/WhatShopexOffer.json"
      ,{
        headers : { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
    )
      .then(function(response){
        console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(()=>{
    getData();
  },[]);
  return (
    <>
      <div className="WhatShopexOffer_layout">
        <div className="what_shopex_offer_heading">What Shopex Offer!</div>
        <div className="Offer_products">
          {data.map((datas)=><ShopexOfferCards name={datas.name} image={datas.productimg} about={datas.about} key={datas} />)}
        </div>
      </div>
    </>
  );
};
export default WhatShopexOffer;

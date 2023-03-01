import React from "react";
import "./EcommerceFashionItem.css";
import FashionItem from "../FashionItem/FashionItem.js";

import { useEffect ,useState } from "react";

const EcommerceFashionItem = () => {

  const [data,setData]=useState([]);
  const getData=()=>{
    fetch("AllData/ShopGrid.json"
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
      <div className="EcommerceFashionItem_layout">
        <div className="EcommerceFashionItem">
          {data.map((data) => (
            <FashionItem name={data.name} price={data.actulPrice} updatedprice={data.disPrice} icon={data.shopIcon} img={data.productimg1} key={data.id+7} />))}
        </div>
      </div>
    </>
  );
};
export default EcommerceFashionItem;

import React, {useEffect,useState} from "react";
import "./ProductInCart.css";
import ProductInCartCards from "./ProductInCartCards.js";

const ProductInCart = () => {
 
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch("AllData/HektoDemo.json"
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
    <div>
      <div className="ProductInCart_layout">
        {
          data.map((data)=> <ProductInCartCards pimg={data.productimg1} name={data.name} color={data.color} size={data.size} 
            actulPrice={data.actulPrice} key={data}/> )
        }
      </div>
    </div>
  );
};

export default ProductInCart;

import React ,{useState,useEffect} from "react";
import "./ShopListItem.css";
import ListedItem from "../ListedItem/ListedItem.js";


const ShopListItem = () => {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch("AllData/ShoplistItem.json"
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
      <div className="ShopListItem_layout">
        <div className="ShopListItem">
          {data.map((data) => (<ListedItem pimg={data.productimg1} ellipse1={data.ellipse1} ellipse2={data.ellipse2} 
            ellipse3={data.ellipse3} colouredStar={data.colouredStar} star={data.star} shopIcon={data.shopIcon} name={data.name}
            disPrice={data.disPrice} actulPrice={data.actulPrice} text={data.text} key={data.id} />))}

        </div>
      </div>
    
     
      
    </>
  );
};
export default ShopListItem;

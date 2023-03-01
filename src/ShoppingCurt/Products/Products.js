import React ,{useState , useEffect} from "react";
import "./Products.css";
import ProductsCarts from "./ProductsCarts.js";
const Products = () => {
  // const datas=["1","2","3","4","5","6","7"];
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch("AllData/ShoppingCurt.json"
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
      <div className="Products_layout">
        <div className="PPQT">
          <div className='Products_text1'>Product</div>
          <div></div>
          <div className='Products_text2'>Price</div>
          <div className='Products_text3'>Quantity</div>
          <div className='Products_text4'>Total</div>
        </div>
        <div className="AllProducts">
          {
            data.map((data)=> <ProductsCarts pimg={data.productimg1} crossImg={data.crossImg} counterImg={data.counterImg} 
              name ={data.name} color={data.color} size={data.size} actulPrice={data.actulPrice} totalPrice={data.totalPrice} key={data.id} />)
          }
        </div>

      
        <button className='Products_rec1'>Update Curt</button>

        <button className='Products_rec2'>Clear Curt</button>

      </div>
    </>
  );
};

export default Products;

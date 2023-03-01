import React, {useState ,useEffect} from "react";
import "./FeaturedProducts.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../styles.css";

import FeatureProduct1 from "./FeatureProduct1.js";


const FeaturedProducts = () => {
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    }
  };
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch("AllData/FeaturedProducts.json"
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
  console.log(data);
  return (
    <>
      <div className="FeaturedProduct_layout">
        <div className="fp">Featured Products</div>
        <div className="caro118"> 
          <Carousel responsive={responsive}  showDots={true} arrows={false}>

         
            {data.map((data) => (<FeatureProduct1 pimg={data.productimg1} shopIcon={data.shopIcon} name={data.name}
              disPrice={data.disPrice} actulPrice={data.actulPrice} text={data.text} productCode={data.productCode} key={data.id} />))}          
          </Carousel>
        </div>
      </div>
     
      
    </>
  );
};
export default FeaturedProducts;

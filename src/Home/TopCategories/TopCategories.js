import React ,{useEffect,useState}from "react";
import "./TopCategories.css";
import TopCategoriesCards from "./TopCategoriesCards.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopCategories = () => {
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
  // const num=["1","2","3","4"];
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch("AllData/TopCategories.json"
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
      <div className="top_categories">
        <div className="top_categories_heading">Top Categories</div>
        <div className="top_categories_layout">
          <Carousel responsive={responsive}  showDots={true} arrows={false}>
            {data.map((data)=>(<TopCategoriesCards name={data.name} circleimg1={data.circleimg1} productimg1={data.productimg1} 
              actulPrice={data.actulPrice} key={data.id}/>))}
          </Carousel>
        </div>
      </div>
    
    </>
  );
};
export default TopCategories;

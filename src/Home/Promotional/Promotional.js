import React from "react";
import "./Promotional.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import PromotionPage1 from "./PromotionPage1.js";



const Promotional = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div className="pro">
      <Carousel responsive={responsive}  showDots={true} arrows={false} key="4">
        <PromotionPage1 />
        <PromotionPage1 />
        
      </Carousel> 
 
    </div>
  );
};
export default Promotional;

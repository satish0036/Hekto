// import "./styles.css";
import HeadingBar from "../CommonComponent/HeadingBar/HeadingBar.js";
import Navbar from "../CommonComponent/Navbar/Nav.js";
import Promotional from "./Promotional/Promotional.js";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts.js";
import LeatestProducts from "./LeatestProducts/LeatestProducts.js";
import WhatShopexOffe from "./WhatShopexOffer/WhatShopexOffer.js";
import UniqueFeature from "./UniqueFeature/UniqueFeature.js";
import TrendingProducts from "./TrendingProducts/TrendingProducts.js";
import DiscountItem from "./DiscountItem/DiscountItem.js";
import TopCategories from "./TopCategories/TopCategories.js";
import UpdateBySubscribe from "./UpdateBySubscribe/UpdateBySubscribe.js";
import Sponsor from "../CommonComponent/Sponcer/Sponcer.js";
import LeatestBlogCard from "./LeatestBlog/LeatestBlogCard.js";
import FooterSubcomponents from "../CommonComponent/Footer/FooterSubcomponents/FooterSubcomponents.js";
export default function Home() {
  return (
    <div className="App">
      <HeadingBar />
      
      <Navbar />
    
     
      <Promotional />
      <FeaturedProducts />
      <LeatestProducts />
      <WhatShopexOffe />
      <UniqueFeature />
      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
      <UpdateBySubscribe />      
      <Sponsor />     
      <LeatestBlogCard />
      <FooterSubcomponents />
      
    </div>
  );
}

import React ,{useState,useEffect} from "react";
import "./ShopLeftSlidebarItem.css";
import ShopLeftSidebarCards from "../ShopLeftSidebarCards/ShopLeftSidebarCards.js";
import { Rating } from "react-simple-star-rating";
import {Search} from "react-feather";



const ShopLeftSlidebarItem = () => {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch("AllData/ShopLeftSlidebarItem.json"
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
      <div className="ShopLeftSlidebarItem_layout">
        <div className="filt">
          <div className="ShopLeftSidebarFilter_Product_Brand">Product Brand</div>
          <div className="ShopLeftSidebarFilter_Product_Brand_line1"/>
          <input className="ShopLeftSidebarFilter_Product_Brand_box1" type="checkbox" />
          {/* <img className="ShopLeftSidebarFilter_Product_Brand_box1" src="./Image/ShopLeftSidebar/ShopLeftSidebarFilter/uil_check(3).png")} alt="g" /> */}
          <div className="ShopLeftSidebarFilter_Product_Brand_name1">Coaster Furniture</div>
          <input className="ShopLeftSidebarFilter_Product_Brand_box2" type="checkbox" />
          <div className="ShopLeftSidebarFilter_Product_Brand_name2">Fusion Dot High Fashion</div>
          <input className="ShopLeftSidebarFilter_Product_Brand_box3" type="checkbox" />
          <div className="ShopLeftSidebarFilter_Product_Brand_name3">Unique Furnitture Restor</div>
          <input className="ShopLeftSidebarFilter_Product_Brand_box4" type="checkbox" />
          <div className="ShopLeftSidebarFilter_Product_Brand_name4">Dream Furnitture Flipping</div>
          <input className="ShopLeftSidebarFilter_Product_Brand_box5" type="checkbox" />
          <div className="ShopLeftSidebarFilter_Product_Brand_name5">Young Repurposed</div>
          <input className="ShopLeftSidebarFilter_Product_Brand_box6" type="checkbox" />
          <div className="ShopLeftSidebarFilter_Product_Brand_name6">Green DIY furniture</div>


          <div className="ShopLeftSidebarFilter_Discount_Offer">Discount Offer</div>
          <div className="ShopLeftSidebarFilter_Discount_Offer_line1"/>
          <input className="ShopLeftSidebarFilter_Discount_Offer_box1" type="checkbox" />
          <div className="ShopLeftSidebarFilter_Discount_Offer_name1">20% Cashback</div>
          <input className="ShopLeftSidebarFilter_Discount_Offer_box2" type="checkbox" />
          <div className="ShopLeftSidebarFilter_Discount_Offer_name2">5% Cashback Offer</div>
          <input className="ShopLeftSidebarFilter_Discount_Offer_box3" type="checkbox" />
          <div className="ShopLeftSidebarFilter_Discount_Offer_name3">25% Discount Offer</div>

          <div className="ShopLeftSidebarFilter_Categories">Categories</div>
          <div className="ShopLeftSidebarFilter_Categories_line1"/>
          <input className="ShopLeftSidebarFilter_Categories_box1" type="checkbox"  />
          <div className="ShopLeftSidebarFilter_Categories_name1">Prestashop</div>
          <input className="ShopLeftSidebarFilter_Categories_box2" type="checkbox" />
          <div className="ShopLeftSidebarFilter_Categories_name2">Magento</div>
          <input className="ShopLeftSidebarFilter_Categories_box3" type="checkbox" />
          <div className="ShopLeftSidebarFilter_Categories_name3">Bigcommerce</div>
          <input className="ShopLeftSidebarFilter_Categories_box4" type="checkbox"  />
          <div className="ShopLeftSidebarFilter_Categories_name4">osCommerce</div>
          <input className="ShopLeftSidebarFilter_Categories_box5" type="checkbox"  />
          <div className="ShopLeftSidebarFilter_Categories_name5">3dcart</div>
          <input className="ShopLeftSidebarFilter_Categories_box6" type="checkbox"  />
          <div className="ShopLeftSidebarFilter_Categories_name6">Bags</div>
          <input className="ShopLeftSidebarFilter_Categories_box7" type="checkbox"  />
          <div className="ShopLeftSidebarFilter_Categories_name7">Accessories</div>
          <input className="ShopLeftSidebarFilter_Categories_box8" type="checkbox"  />
          <div className="ShopLeftSidebarFilter_Categories_name8">Jewellery</div>
          <input className="ShopLeftSidebarFilter_Categories_box9" type="checkbox"  />
          <div className="ShopLeftSidebarFilter_Categories_name9">Watches</div>


          <div className="ShopLeftSidebarFilter_Price_Filter">Price Filter</div>
          <div className="ShopLeftSidebarFilter_Price_Filter_line1"/>
          <input className="ShopLeftSidebarFilter_Price_Filter_box1"  type="checkbox" />
          <div className="ShopLeftSidebarFilter_Price_Filter_name1">$0.00 - $150.00</div>
          <input className="ShopLeftSidebarFilter_Price_Filter_box2"  type="checkbox" />
          <div className="ShopLeftSidebarFilter_Price_Filter_name2">$150.00 - $350.00</div>
          <input className="ShopLeftSidebarFilter_Price_Filter_box3"  type="checkbox" />
          <div className="ShopLeftSidebarFilter_Price_Filter_name3">$150.00 - $504.00</div>
          <input className="ShopLeftSidebarFilter_Price_Filter_box4"  type="checkbox" />
          <div className="ShopLeftSidebarFilter_Price_Filter_name4">$450.00 +</div>

     
          <input type="text"className="ShopLeftSidebarFilter_Price_search_box" placeholder="$10.00 - 20000$"/>
          <div className="ShopLeftSidebarFilter_Price_search_box_icon"><Search/></div>


          <div className="ShopLeftSidebarFilter_FilterByColor">Filter By Color</div>
          <div className="ShopLeftSidebarFilter_FilterByColor_line1"/>
          <img className="ShopLeftSidebarFilter_FilterByColor_box1" src="./Image/ShopLeftSidebar/ShopLeftSidebarFilter/Ellipse71.png" alt="g" />
          <div className="ShopLeftSidebarFilter_FilterByColor_name1">Blue</div>
          <img className="ShopLeftSidebarFilter_FilterByColor_box2" src="./Image/ShopLeftSidebar/ShopLeftSidebarFilter/Ellipse72.png" alt="g" />
          <div className="ShopLeftSidebarFilter_FilterByColor_name2">Orange</div>
          <img className="ShopLeftSidebarFilter_FilterByColor_box3" src="./Image/ShopLeftSidebar/ShopLeftSidebarFilter/Ellipse73.png" alt="g" />
          <div className="ShopLeftSidebarFilter_FilterByColor_name3">Brown</div>
          <img className="ShopLeftSidebarFilter_FilterByColor_box4" src="./Image/ShopLeftSidebar/ShopLeftSidebarFilter/Ellipse74.png" alt="g" />
          <div className="ShopLeftSidebarFilter_FilterByColor_name4">Green</div>
          <img className="ShopLeftSidebarFilter_FilterByColor_box5" src="./Image/ShopLeftSidebar/ShopLeftSidebarFilter/Ellipse75.png" alt="g" />
          <div className="ShopLeftSidebarFilter_FilterByColor_name5">Purpal</div>
          <img className="ShopLeftSidebarFilter_FilterByColor_box6" src="./Image/ShopLeftSidebar/ShopLeftSidebarFilter/Ellipse76.png" alt="g" />
          <div className="ShopLeftSidebarFilter_FilterByColor_name6">Sky</div>


          <div className="ShopLeftSidebarFilter_FilterBy_Rating_Item">Rating Item</div>
          <div className="ShopLeftSidebarFilter_FilterBy_Rating_Item_line1"/>
          <input type= "Checkbox" className="ShopLeftSidebarFilter_FilterBy_RatingItem_box1" />
          <Rating className="ShopLeftSidebarFilter_FilterBy_RatingItem_line1_star1" size ={14}/>     
          <div className="ShopLeftSidebarFilter_FilterBy_Rating_Item_line1_price">(2341)</div>


          <input type= "Checkbox" className="ShopLeftSidebarFilter_FilterBy_RatingItem_box2" />
          <Rating className='ShopLeftSideBarCard1RatingStar2_1' size ={14} ratingValue={2}/>  
          <div className="ShopLeftSidebarFilter_FilterBy_Rating_Item_line2_price">(2341)</div>


          <input type="Checkbox" className="ShopLeftSidebarFilter_FilterBy_RatingItem_box3"/>
          <Rating  className='ShopLeftSideBarCard1RatingStar3_1'size ={14} />
          <div className="ShopLeftSidebarFilter_FilterBy_Rating_Item_line3_price">(2341)</div>


          <input type="Checkbox" className="ShopLeftSidebarFilter_FilterBy_RatingItem_box4"/>
          <Rating className='ShopLeftSideBarCard1RatingStar4_1' size ={14}/>
          <div className="ShopLeftSidebarFilter_FilterBy_Rating_Item_line4_price">(2341)</div>
        </div>

        <div className="ShopLeftSlidebarItem">
          {data.map((data) => (<ShopLeftSidebarCards pimg={data.productimg1} ellipse1={data.ellipse1} ellipse2={data.ellipse2} 
            ellipse3={data.ellipse3} shopIcon={data.shopIcon} name={data.name}
            disPrice={data.disPrice} actulPrice={data.actulPrice} text={data.text} key={data.id} />))}

        </div>
       
        
      </div>
    </>
  );
};
export default ShopLeftSlidebarItem;

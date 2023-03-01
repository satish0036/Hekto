import React from "react";
import "./DiscountItemNav.css";
// import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import {Link} from "react-router-dom";
// import WoodChair from "./WoodChair";
// import PlasticChair from "./PlasticChair";
// import SofaCollection from "./SofaCollection";
const DiscountItemNav = () => {
  return (
    <>
      <div className="discount_item_nav">
        <Link to="/" >
          <a className="discount_item_nav_wood_chair">Wood Chair</a>
        </Link>
        <Link to="/" >
          <a className="discount_item_nav_plastic_chair">Plastic Chair</a>
        </Link>
        <Link to="/" >
          <a className="discount_item_nav_sofa_collection">Sofa Collection</a>
        </Link>

        {/* <Router>
          <Routes>
            <Route path="/WoodChair" element={<WoodChair />} />
            <Route path="/PlasticChair" element={<PlasticChair />} />
            <Route path="/SofaCollection" element={<SofaCollection />} />
          </Routes>
     
        </Router> */}
       
       
      </div>
    </>
  );
};
export default DiscountItemNav;

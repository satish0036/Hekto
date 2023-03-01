import React from "react";
import Home from "./Home/Home.js";
import ShopGridDefault from "./ShopGrid/ShopGridDefault.js";
import ShopList from "./ShopList/ShopList.js";
import ProductDetails from "./ProductDetails/ProductDetails.js";
import FAQ from "./FAQ/FAQ.js";
import NotFound404 from "./NotFound404/NotFound404.js";
import ContactUs from "./ContactUs/ContactUs.js";
import AboutUs from "./AboutUs/AboutUs.js";
import SingleBlog from "./BlogPage/SingleBlog.js";
import BlogPage from "./BlogPage/BlogPage.js";
import MyAccount from "./MyAccount/MyAccount.js";
import HektoDemo from "./HektoDemo/HektoDemo.js";
import OrderCompleted from "./OrderCompleted/OrderCompleted.js";
import ShoppingCurt from "./ShoppingCurt/ShoppingCurt.js";
import ShopLeftSidebar from "./ShopLeftSidebar/ShopLeftSidebar.js";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  return (
    <>

      <Router>
        {/* <Link to="">Home</Link>
        <Link to="/ShopGridDefault">ShopGridDefault</Link>
        <Link to="/ShopList">ShopList</Link>
        <Link to="/ShopLeftSidebar">ShopLeftSidebar</Link>
        <Link to="/ProductDetails">ProductDetails</Link>
        <Link to="/FAQ">FAQ</Link>
        <Link to="/NotFound404">NotFound404</Link>
        <Link to="/ContactUs">ContactUs</Link>
        <Link to="/AboutUs">AboutUs</Link>
        <Link to="/SingleBlog">SingleBlog</Link>
        <Link to="/BlogPage">BlogPage</Link>
        <Link to="/ShoppingCurt">ShoppingCurt</Link>
        <Link to="/OrderCompleted">OrderCompleted</Link>
        <Link to="/HektoDemo">HektoDemo</Link>
        <Link to="/MyAccount">MyAccount</Link> */}
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route path="/ShopGridDefault" element={<ShopGridDefault />} />
          <Route path ="/ShopList" element ={<ShopList/>}/>
          <Route path="/ShopLeftSidebar" element={<ShopLeftSidebar/>}/>
          <Route path ="/ProductDetails" element ={<ProductDetails/>}/>
          <Route path ="/FAQ" element ={<FAQ/>}/>
          <Route path ="/NotFound404" element ={<NotFound404/>}/>
          <Route path ="/ContactUs" element ={<ContactUs/>}/>
          <Route path ="/AboutUs" element ={<AboutUs/>}/>
          <Route path ="/SingleBlog" element ={<SingleBlog/>}/>
          <Route path ="/BlogPage" element ={<BlogPage/>}/>
          <Route path="/ShoppingCurt" element={<ShoppingCurt />} />
          <Route path="/OrderCompleted" element={<OrderCompleted />} />
          <Route path="/HektoDemo" element={<HektoDemo />} />
          <Route path="/MyAccount" element={<MyAccount />} />
        </Routes>
     
      </Router>
     
     
   


    </>
  );
};
export default App;


  






  
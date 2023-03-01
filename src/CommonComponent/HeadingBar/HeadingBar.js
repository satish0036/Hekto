import React from "react";
import "./HeadingBar.css";
import { Mail } from "react-feather";
import { PhoneCall } from "react-feather";
import {User,Heart,ShoppingCart} from "react-feather";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {Link} from "react-router-dom";


const HeadingBar = () => {
  return (
    <div className="heading_layout1">
      <div className="heading_layout_box1">
        <div className="heading_layout_box1_gap">
          <Mail size={17} />
          <div className="heading_mail1">satish0036ku@gmail.com</div>
        </div>
        <div className="heading_layout_box1_gap">
          <PhoneCall size={17} />
          <div className="heading_call1">(+91)9801500214</div>
        </div>
      </div>


      <div className="heading_layout_box1">
        <div className="heading_layout_box2_gap">
          <DropdownButton  className="bg-white1" title="English" >
            <Dropdown.Item  className="font_size" href="#/action-1" >Hindi</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Bhojpuri</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Matheali</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="heading_layout_box2_gap">
          <div className="heading_usd1"> 
            <DropdownButton  className="bg-white1" title="USD">
              <Dropdown.Item href="#/action-1" >Rup</Dropdown.Item>
              <Dropdown.Item href="#/action-2">TAKA</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Inr</Dropdown.Item>
            </DropdownButton>
          </div>
          
        </div>
        <div className="heading_layout_box2_gap">
          <Link to="/FAQ">
            <div className="heading_login1">Login</div>
          </Link>
          <User size={17} />
        </div>
        <div className="heading_layout_box2_gap">
          <Link to="/NotFound404">
            <div className="heading_wishlist1">Wishlist</div>
          </Link>
          <Heart size={17} />
        </div>
        <div className="heading_layout_box2_gap">
          <Link to="/NotFound404" style={{ "color": "none"}}>
            <ShoppingCart size={19} />
          </Link>
        </div>
          
      </div>
      
    </div>
    
  );
};
export default HeadingBar;





import React from "react";
import "./InformationAboutus.css";

const InformationAboutus = () => {
  return (
    <>
      <div className="InformationAboutus_layout ">
        <div className="layout1"> 
             
          <div className="InformationAboutus_text1">Information About us</div>
          <div className="InformationAboutus_text2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
        ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
        amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
        quis bibendum quam.
          </div>
          <img
            className="InformationAboutus_img1"
            src="./Image/ContactUs/InformationAboutUs/Ellipse41.png"
            alt="g"
          />
          <img
            className="InformationAboutus_img2"
            src="./Image/ContactUs/InformationAboutUs/Ellipse42.png"
            alt="g"
          />
          <img
            className="InformationAboutus_img3"
            src="./Image/ContactUs/InformationAboutUs/Ellipse43.png"
            alt="g"
          />
          <div className="GetInTouch_box1" />
          <div className="GetInTouch_box2" />
          <div className="GetInTouch_box3" />
          <div className="GetInTouch_box4" />
          <div className="GetInTouch_box5" />

          <div className="GetInTouch_text1">Get In Touch</div>
          <div className="GetInTouch_text2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
        ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
        bibendum quam.
          </div>
          <input type="text" className="GetInTouch_box1" placeholder="Your Name*" />
          <input type="email" className="GetInTouch_box2" placeholder="Your E-mail"/>
          <input type="text" className="GetInTouch_box3" placeholder="Subject*"/>
          <textarea type="text" className="GetInTouch_box4" placeholder="Type Your Messege*"/>
          <button className="GetInTouch_box5" >Send Mail</button>

          {/* ************************Contact Way******************** */}
        </div>
        <div className="layout2">
          <div className="ContactWay" >Contact Way</div>
          <img
            className="ContactWay_img1"
            src="./Image/ContactUs/ContactWay/Ellipse44.png"
            alt="g"
          />
          <img
            className="ContactWay_img2"
            src="./Image/ContactUs/ContactWay/Ellipse45.png"
            alt="g"
          />
          <img
            className="ContactWay_img3"
            src="./Image/ContactUs/ContactWay/Ellipse46.png"
            alt="g"
          />
          <img
            className="ContactWay_img4"
            src="./Image/ContactUs/ContactWay/Ellipse47.png"
            alt="g"
          />
          <img
            className="ContactWay_img5"
            src="./Image/ContactUs/ContactWay/Group124.png"
            alt="g"
          />

          <div className="ContactWay_text1">
        Tel: 877-67-88-99 <br />
        E-Mail: shop@store.com
          </div>
          <div className="ContactWay_text2">
            {" "}
        Support Forum <br />
        For over 24hr
          </div>
          <div className="ContactWay_text3">
        20 Margaret st, London <br />
        Great britain, 3NM98-LK
          </div>
          <div className="ContactWay_text4">
        Free standard shipping
            <br />
        on all orders.
          </div>
        </div>
      </div>
    </>
  );
};
export default InformationAboutus;

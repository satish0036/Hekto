import React from "react";
import "./FooterSubcomponents.css";
// import HektoContactInfo from "../HektoContactInfo/HektoContactInfo.js";
// import Catagories from "../Catagories/Catagories.js";
// import CustomerCare from "../CustomerCare/CustomerCare.js";
// import Pages from "../Pages/Pages.js";
// import RightsSocialIcon from "../RightsSocialIcon/RightsSocialIcon.js";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdb-react-ui-kit";
import { MDBNavbar, MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.css";
const FooterSubcomponents = () => {
  return (
    <>
      <MDBFooter
        bgColor="#EEEFFB"
        className="text-center text-lg-start text-muted"
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5 pt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className=" hekto fw-bold mb-9">
                  <MDBIcon icon="gem" className="me-0" />
                  Hekto
                </h6>
                <MDBNavbar light>
                  <MDBContainer fluid>
                    <MDBInputGroup tag="form" className="d-flex w-auto mb-0  ">
                      <input
                        className="form-control"
                        placeholder="Enter Email Address"
                        aria-label="Search"
                        type="Search"
                      />
                      <MDBBtn className="footer_ser" outline>
                        Sign Up
                      </MDBBtn>
                    </MDBInputGroup>
                  </MDBContainer>
                </MDBNavbar>
                <p>Contact Info</p>
                <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="Catagories fw-bold mb-4">Catagories</h6>
                <p>
                  <a href="#!" className="Catagories_color ">
                    Laptops & Computers
                  </a>
                </p>
                <p>
                  <a href="#!" className="Catagories_color ">
                    Cameras & Photography
                  </a>
                </p>
                <p>
                  <a href="#!" className="Catagories_color ">
                    Smart Phones & Tablets
                  </a>
                </p>
                <p>
                  <a href="#!" className="Catagories_color ">
                    Video Games & Consoles
                  </a>
                </p>
                <p>
                  <a href="#!" className="Catagories_color ">
                    Waterproof Headphones
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="Catagories  fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="Catagories_color ">
                    My Account
                  </a>
                </p>
                <p>
                  <a href="#!" className="Catagories_color ">
                    Discount
                  </a>
                </p>
                <p>
                  <a href="#!" className="Catagories_color ">
                    Returns
                  </a>
                </p>
                <p>
                  <a href="#!" className="Catagories_color ">
                    Orders History
                  </a>
                </p>
                <p>
                  <a href="#!" className="Catagories_color ">
                    Order Tracking
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="Catagories fw-bold mb-4">Pages</h6>
                <p>
                  <a href="#!" className="Catagories_color ">
                    Blog
                  </a>
                </p>
                <p>
                  <a href="#!" className="Catagories_color ">
                    Browse the Shop
                  </a>
                </p>
                <p>
                  <a href="#!" className="Catagories_color ">
                    Category
                  </a>
                </p>
                <p>
                  <a href="#!" className="Catagories_color ">
                    Pre-Built Pages
                  </a>
                </p>
                <p>
                  <a href="#!" className="Catagories_color ">
                    Visual Composer Elements
                  </a>
                </p>
                <p>
                  <a href="#!" className="Catagories_color ">
                    WooCommerce Pages
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="ppp text-center p-4"
          style={{ backgroundColor: "#E7E4F8" }}
        >
          ©Webecy - All Rights Reserved
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default FooterSubcomponents;

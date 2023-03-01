import React from "react";
import {Link as LinkContainer} from "react-router-dom";
import {Search} from "react-feather";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Nav.css";
const Nav1 = () => {
  return (
    <div className="nav_layout1100">
    
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="none" expand={expand} className="mb-3">
          <Container >
            <LinkContainer to="/" style={{"text-decoration": "none"}}>
              <Navbar.Brand href="Home" >Hekto</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Hekto
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              
                <Nav className="justify-content-start flex-grow-1 pe-3 ml-2">
                  <NavDropdown
                    title="Home"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <LinkContainer to="/NotFound404" style={{"text-decoration": "none"}}>
                      <NavDropdown.Item href="#action3">Home1</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/NotFound404" style={{"text-decoration": "none"}}> <NavDropdown.Item href="#action4">Home2</NavDropdown.Item></LinkContainer>
                  
                 
                  </NavDropdown>
                
                  <LinkContainer to="/ShopLeftSidebar" style={{"text-decoration": "none"}}><Nav.Link href="SingleBlog">Pages</Nav.Link></LinkContainer>
                
                  <LinkContainer  to="/ShopGridDefault" style={{"text-decoration": "none"}}><Nav.Link href="GridDefault">Product</Nav.Link></LinkContainer>
                
                  <LinkContainer to="/BlogPage" style={{"text-decoration": "none"}}><Nav.Link href="BlogPage">Blog</Nav.Link></LinkContainer>
                
                  <LinkContainer to="/ShopList" style={{"text-decoration": "none"}}><Nav.Link href="HectoDemo">Shop</Nav.Link></LinkContainer>
                  <LinkContainer to="/ContactUs" style={{"text-decoration": "none"}}><Nav.Link href="ContactUs">Contact</Nav.Link></LinkContainer>
                
                
                </Nav>
                <Form className="SrchBxcmp">
                  <Form.Control
                    type="search"
                    placeholder=""
                    className="SrchBx"
                    aria-label="Search"
                  />
                  <Button className='srchBtn'  variant="success"><Search /></Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
  
    </div>
  );
};
export default Nav1;

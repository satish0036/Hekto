import React from "react";
import HeadingBar from "../CommonComponent/HeadingBar/HeadingBar";
import Navbar from  "../CommonComponent/Navbar/Nav";
import Header from "../CommonComponent/Header/Header.js";
import CurrentPages from "./SingleBlogComponents/CurrentPages/CurrentPages.js";
import Sponcer from "../CommonComponent/Sponcer/Sponcer.js";
import FooterSubcomponents from "../CommonComponent/Footer/FooterSubcomponents/FooterSubcomponents.js";
const SingleBlog = () => {
  return (
    <>
      <HeadingBar />
      <Navbar />
      <Header name="Single Blog" />
     
      <CurrentPages />  
      <Sponcer />   
      <FooterSubcomponents/>
    </>
  );
};
export default SingleBlog;

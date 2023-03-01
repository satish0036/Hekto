import React from "react";
import HeadingBar from "../CommonComponent/HeadingBar/HeadingBar";
import Navbar from  "../CommonComponent/Navbar/Nav";
import Header from "../CommonComponent/Header/Header.js";
import BlogPageHome from "./BlogPageComponents/BlogPageHome/BlogPageHome.js";
import Sponcer from "../CommonComponent/Sponcer/Sponcer.js";
import FooterSubcomponents from "../CommonComponent/Footer/FooterSubcomponents/FooterSubcomponents.js";
const BlogPage = () => {
  return (
    <>
      <HeadingBar />
      <Navbar/>
      <Header name="Blog Page" />
      <BlogPageHome />
      <Sponcer />
      <FooterSubcomponents/>
    </>
  );
};
export default BlogPage;

import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="Login_layout" >
        <div className="Login_box1" >
          <div className="Login_text1">Login</div>
          <div className="Login_text2">
        Please login using account detail bellow.
          </div>      
          <input className="Login_box2"placeholder="Email Address"/>      
          <input className="Login_box3"placeholder="Password"/>
          <button className="Login_text5" >Forgot your password?</button>
          <button className="Login_box4">Sign In</button>
          <button className="Login_text7">Don’t have an Account?Create account</button>
        </div>
      </div>
    </>
  );
};
export default Login;

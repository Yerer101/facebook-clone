import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="loginInput">
      <input placeholder="Email or Phone Number" />
      <input placeholder="Password" />
      <button className="login-btn">Log In</button>
    </div>
  );
};

export default LoginPage;

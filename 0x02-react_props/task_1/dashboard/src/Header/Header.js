import React from "react";
import Logo from "../assets/holberton-logo.jpg";
import "./Header.css";

function Header(props) {
  return (
    <div className="App-header">
      <img src={Logo} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;

import React from 'react';
import Logo from "../assets/holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={Logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>&ensp;
        <input type="email" id="email" name="email" />&ensp;
        <label htmlFor="password">Password: </label>&ensp;
        <input type="password" id="password" name="password" />&ensp;
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default App;

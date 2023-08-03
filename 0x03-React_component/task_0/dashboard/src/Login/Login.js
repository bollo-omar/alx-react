import React from "react";
import "./Login.css";

function Login(props) {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email: </label>&ensp;
      <input type="email" id="email" name="email" />
      &ensp;
      <label htmlFor="password">Password: </label>&ensp;
      <input type="password" id="password" name="password" />
      &ensp;
      <button>OK</button>
    </div>
  );
}

export default Login;

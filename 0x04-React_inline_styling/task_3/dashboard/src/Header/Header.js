import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "10px",
    marginBottom : "solid thick red",
  },

  img: {
    width: "250px",
    height: "250px",
  },
  h1:{
    textAlign : "center",
  }
});

function Header() {
  return (
    <div className={css(styles["App-header"])}>
      <img src={logo} alt="Holberton" className={css(styles.img)} />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;

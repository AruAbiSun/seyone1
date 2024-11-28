/* eslint-disable react/prop-types */

//import React from 'react';
import { useState } from "react";
import seyone from "../../assets/seyone.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={seyone} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          About us
        </a>
        <a
          href="#app-download"
          onClick={() => {
            setMenu("moble-app");
          }}
          className={menu === "moble-app" ? "active" : ""}
        >
          ADR & ODR Services
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact-us");
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;

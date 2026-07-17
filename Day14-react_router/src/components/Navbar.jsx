import React from "react";
import "./../index.css";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div id="navbar">
      <div>logo</div>
      <div id="nav-buttons">
        <NavLink to={"/"}>
          <p>Home</p>
        </NavLink>
        <NavLink to={"/contact"}>
          <p>Contact</p>
        </NavLink>
        <NavLink to={"/about"}>
          <p>About</p>
        </NavLink>
      </div>
      <div>login</div>
    </div>
  );
};

export default Navbar;

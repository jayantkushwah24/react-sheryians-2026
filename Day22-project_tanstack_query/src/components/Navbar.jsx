import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between",padding:"2rem",backgroundColor:"lightblue" }}>
      <div>logo</div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <NavLink to={"/main/home"}>Home</NavLink>
        <NavLink to={"/main/shop"}>Shop</NavLink>
        <NavLink to={"/main/about"}>About</NavLink>
      </div>
      <button>logout</button>
    </div>
  );
};

export default Navbar;

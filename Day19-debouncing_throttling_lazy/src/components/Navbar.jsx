import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap:"5rem",
        fontSize: "1.5rem",
        margin:"2rem 0"
      }}
    >
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/user"}>User</NavLink>
    </div>
  );
};

export default Navbar;

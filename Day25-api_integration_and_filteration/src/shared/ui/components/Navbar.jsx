import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "skyblue",
        padding: "1rem 3rem",
      }}
    >
      <div>logo</div>
      <div style={{ display: "flex", gap: "3rem" }}>
        <NavLink
          style={{
            textDecoration: "none",
            color: "black",
            backgroundColor: "white",
          }}
          to={"/main/home"}
        >
          Home
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "black",
            backgroundColor: "white",
          }}
          to={"/main/product"}
        >
          Shop
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "black",
            backgroundColor: "white",
          }}
          to={"/main/about"}
        >
          About
        </NavLink>
      </div>
      <div style={{ display: "flex", gap: "3rem" }}>
        <NavLink
          style={{
            textDecoration: "none",
            color: "black",
            backgroundColor: "white",
          }}
          to={"/main/cart"}
        >
          Cart
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "black",
            backgroundColor: "white",
          }}
          to={"/main/orders"}
        >
          Orders
        </NavLink>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;

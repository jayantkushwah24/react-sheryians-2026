import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/main")}>Home</button>
      <button onClick={() => navigate("/main/about")}>About</button>
      <button onClick={() => navigate("/main/services")}>Services</button>
    </div>
  );
};

export default Navbar;

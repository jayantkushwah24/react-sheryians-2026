import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <div className="flex justify-center gap-20 border p-4 my-4 text-white bg-gray-300">
      <button className="bg-gray-600 text-white p-2 rounded cursor-pointer" onClick={() => navigate("/main/home")}>Home</button>
      <button className="bg-gray-600 text-white p-2 rounded cursor-pointer" onClick={() => navigate("/main/about")}>About</button>
      <button className="bg-gray-600 text-white p-2 rounded cursor-pointer" onClick={() => navigate("/main/services")}>Services</button>
    </div>
  );
}; 

export default Navbar;

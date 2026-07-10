import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="flex justify-between p-4 bg-blue-300">
      <div className="logo p-2">Logo</div>
      <div className="nav-btn flex gap-6 p-2">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button
        onClick={() => setToggle(prev => !prev)}
        className="create bg-blue-950 text-white cursor-pointer p-2 rounded-xl"
      >
        Create User
      </button>
    </div>
  );
};

export default Navbar;

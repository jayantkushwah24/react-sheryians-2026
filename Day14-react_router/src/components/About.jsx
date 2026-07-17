import React from "react";
import { Outlet, useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => navigate("/about/my-details")}>Show Details</button>
      <Outlet />
    </div>
  );
};

export default About;

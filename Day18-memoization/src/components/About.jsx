import React from "react";

const About = React.memo(() => {
  console.log("about rendering");

  return (
    <div>
      <h1>about</h1>
    </div>
  );
});

export default About;

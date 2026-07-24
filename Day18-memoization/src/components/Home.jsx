import React from "react";

const Home = () => {
  console.log("home rendering");

  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default React.memo(Home);

import React from "react";

const Services = ({ greet }) => {
  console.log("services rendering");

  return (
    <div>
      <h1>services</h1>
    </div>
  );
};

export default React.memo(Services);

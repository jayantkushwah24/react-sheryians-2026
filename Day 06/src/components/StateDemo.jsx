import React, { useState } from "react";

const StateDemo = () => {
  let [user, setUser] = useState({ name: "jayant" });
  let clickHandler = () => {
    setUser({ name: "kushwah" });
  };
  return (
    <div>
      <h1>Hello</h1>
      <h2>User is - {user.name}</h2>
      <button onClick={clickHandler}>change name</button>
      <br />
      <hr />
    </div>
  );
};

export default StateDemo;

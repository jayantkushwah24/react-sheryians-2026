import React, { useState } from "react";
import Contact from "./Contact";

const App = () => {
  let [count, setCount] = useState(0);

  return (
    <>
      <div>Count : {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Contact email="jk@email.com" phone="8723502345" />
    </>
  );
};

export default App;

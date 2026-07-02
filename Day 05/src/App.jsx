import { useState } from "react";
import RenderProducts from "./RenderProducts.jsx";

const App = () => {
  let [count, setCount] = useState(0);

  return (
    <div className="">
      <RenderProducts />

      {/* <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button> */}
    </div>
  );
};

export default App;

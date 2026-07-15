import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Home = () => {
  console.log("home redering");

  const { count, setCount } = useContext(MyStore);

  return (
    <div>
      <h1>Home</h1>
      {/* <h1 className="text-2xl">Count: {count}</h1>
      <button
        className="border bg-blue-300 p-2 rounded-2xl"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button> */}
    </div>
  );
};

export default Home;

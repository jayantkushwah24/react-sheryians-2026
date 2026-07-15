import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { useContext, useEffect, useState } from "react";
import { ContextProvider, MyStore } from "./context/MyContext";

const App = () => {
  console.log("app redering");

  const { count, setCount } = useContext(MyStore);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log("render only once");
  }, []);

  useEffect(() => {
    console.log("render only when count will change");
  }, [count]);

  return (
    <div>
      <h1 className="text-2xl">Count: {count}</h1>
      <button
        className="border bg-blue-300 p-2 rounded-2xl"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {/* <ContextProvider>
        <Home />
      </ContextProvider> */}

      <Home />

      <h1 onClick={() => setToggle((prev) => !prev)}>
        Toggle between contact and about
      </h1>
      {toggle ? <Contact /> : <About />}
    </div>
  );
};

export default App;

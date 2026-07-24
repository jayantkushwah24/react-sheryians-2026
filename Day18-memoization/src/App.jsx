import React, { useCallback, useMemo, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";

const App = () => {
  console.log("app rendering");

  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "jayant", id: 6 });

  // const greet = () => console.log("hello");
  // it save the reference of the function
  const greet = useCallback(() => {
    console.log("hello");
  }, []);

  // const expensiveCalc = () => {
  //   console.log("doing expensive calculations");
  //   let sum = 0;
  //   for (let index = 0; index < 1000000000; index++) {
  //     sum += index;
  //   }
  //   return sum;
  // };
  const expensiveCalc = useMemo(() => {
    console.log("useMemo save the value returned from the function");
    let sum = 0;
    for (let index = 0; index < 1000000000; index++) {
      sum += index;
    }
    return sum;
  }, []);

  return (
    <div>
      <div id="navbar">
        <Home />
        <About />
        <Contact user={user} />
        <Services greet={greet} />
      </div>

      <hr />
      <h1>Sum: {expensiveCalc}</h1>

      <hr />
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment+</button>
      <hr />
      <h1>Name: {user.name}</h1>
      <button onClick={() => setUser({ ...user, name: "mahi" })}>
        change user
      </button>
      <hr />
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import MyDetails from "./components/MyDetails";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="my-details" element={<MyDetails />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

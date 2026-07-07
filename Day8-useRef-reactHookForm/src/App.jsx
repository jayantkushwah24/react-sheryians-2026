import React from "react";
import Form from "./components/Form";
import ReactHookForm from "./components/ReactHookForm";

const App = () => {
  console.log("app rendering");
  return (
    <div>
      {/* <Form /> */}
      <ReactHookForm />
    </div>
  );
};

export default App;

import { add } from "./add.js";

const root = document.querySelector("#root");

const div = React.createElement(
  "div",
  { className: "container" },
  "i am div in react",
);

const div2 = React.createElement(
  "div",
  { className: "container2" },
  React.createElement(
    "h1",
    { className: "heading" },
    React.createElement("span", {}, "i am span inside h1"),
  ),
);

const reactRoot = ReactDOM.createRoot(root);
// reactRoot.render(div);
// reactRoot.render(div2);

// To display both, wrap them in a single parent element or a Fragment
reactRoot.render(React.createElement(React.Fragment, {}, div, div2));

const result = add(34, 65);
console.log(result);

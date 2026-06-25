import About from "./About";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <About name="Jayant kushwah" age={26} city="indore">
        <h1>i am child inside about</h1>
      </About>
    </>
  );
}

export default App;

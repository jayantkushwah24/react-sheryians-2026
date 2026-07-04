import StateDemo from "./components/StateDemo";
import BruteforceForm from "./components/BruteforceForm";
import BetterApproach from "./components/BetterApproach";

const App = () => {
  return (
    <div>
      <StateDemo />
      <BruteforceForm />
      <BetterApproach />
    </div>
  );
};

export default App;

/**
 * 1. useState => (1) state maintain krne ke liye (2) own component ko rerender krne ke liye
 * (3) state update krne ke liye, (4) interactivity provide krta hain...
 *
 * 2. useState me setFunction me return nahi karna padhta..
 *
 * 3. setFunc me agar same value bhejte hai toh re-render nahi hota
 *
 * 4. Yes, primitives used in useState are inherently immutable because all primitive data
 * types in JavaScript are unchangeable by default.To update the state, you pass a completely
 * new value to the setter function...
 *
 * 5. Objects/Arrays: They are mutable and compared by reference. If you mutate an object property
 * directly (e.g., user.name = "Alice"), its memory reference stays the same. React will not notice
 * the change and will fail to trigger a re-render. Therefore, you must treat objects as immutable
 * by copying them (e.g., using the spread operator ...
 */

import { createContext, useState } from "react";

export const MyStore = createContext();

export function ContextProvider({ children }) {
  console.log("context rendering");
  
  const [count, setCount] = useState(0);
  
  return (
    <MyStore.Provider value={{ count, setCount }}>{children}</MyStore.Provider>
  );
}

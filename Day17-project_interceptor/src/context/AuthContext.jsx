import { createContext, useState } from "react";

export const Auth = createContext();

export function AuthProvider({ children }) {
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registered_user")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("logged_in_user")) || null,
  );

  return (
    <Auth.Provider
      value={{
        registeredUser,
        setRegisteredUser,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
}

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || [],
  );
  const [updatedUser, setUpdatedUser] = useState(null);
  const [toggle, setToggle] = useState(true);

  function deleteUser(id) {
    let result = user.filter((u) => u.id !== id);
    localStorage.setItem("user", JSON.stringify(result));
    setUser(result);
  }

  return (
    <div>
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex m-2">
          <UserCard
            user={user}
            setUpdatedUser={setUpdatedUser}
            setToggle={setToggle}
            deleteUser={deleteUser}
          />
        </div>
      ) : (
        <div
          id="back"
          onClick={(e) => {
            if (e.target.getAttribute("id")) {
              setToggle((prev) => !prev);
            }
          }}
          className="flex justify-center items-center h-screen"
        >
          <Form
            user={user}
            setUser={setUser}
            setToggle={setToggle}
            updatedUser={updatedUser}
            setUpdatedUser={setUpdatedUser}
          />
        </div>
      )}
    </div>
  );
};

export default App;

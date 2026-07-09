import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [user, setUser] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  console.log(user);

  function deleteUser(idx) {
    setUser(user.filter((u, index) => index !== idx));
  }

  return (
    <div>
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex m-2">
          {user.map((u, index) => {
            return (
              <UserCard
                key={index}
                index={index}
                name={u.name}
                email={u.email}
                contact={u.contact}
                imageURL={u.imageURL}
                deleteUser={deleteUser}
                setToggle={setToggle}
                setEditIndex={setEditIndex}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <Form
            setUser={setUser}
            setToggle={setToggle}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
          />
        </div>
      )}
    </div>
  );
};

export default App;

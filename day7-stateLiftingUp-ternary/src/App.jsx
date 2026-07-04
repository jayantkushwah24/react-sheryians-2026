import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, setToggle] = useState(true);
  let [users, setUsers] = useState([]);

  return (
    <div className="bg-gray-200 h-fit">
      {/* {toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} />} */}
      <Register setToggle={setToggle} setUsers={setUsers} />
      <div className="flex gap-6 py-10 px-2">
        {users.map((user) => {
          return (
            <div className="flex">
              <UserCard
                imageUrl={user.image}
                name={user.name}
                email={user.email}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

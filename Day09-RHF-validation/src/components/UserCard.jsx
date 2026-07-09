import React from "react";

const UserCard = ({
  index,
  name,
  email,
  contact,
  imageURL,
  deleteUser,
  setToggle,
  setEditIndex,
}) => {
  return (
    <div className="border p-2 m-2 rounded-xl w-[18vw] h-[45vh] flex flex-col justify-between">
      <div className="overflow-hidden max-h-1/2 flex justify-center items-center">
        <img src={imageURL} alt="" className="rounded-xl w-1/2 " />
      </div>
      <div className="detail flex flex-col">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Contact: {contact}</p>
      </div>
      <div className="actions flex justify-between">
        <button
          onClick={() => {
            setToggle((prev) => !prev);
            setEditIndex(index);
          }}
          className="bg-blue-600 text-white p-2 rounded-xl cursor-pointer"
        >
          Update
        </button>
        <button
          onClick={() => {
            deleteUser(index);
          }}
          className="bg-red-600 text-white p-2 rounded-xl cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;

import React from "react";

const UserCard = ({ imageUrl, name, email }) => {
  return (
    <div className="border h-fit w-fit p-4 rounded-2xl">
      <img
        src={imageUrl}
        alt="img"
        className="h-80 object-contain bg-center rounded-2xl"
      />
      <h1>Name : {name}</h1>
      <h3>Email : {email} </h3>
      <button className="bg-red-500 w-full text-white p-2 rounded-2xl m-2">
        Delete
      </button>
    </div>
  );
};

export default UserCard;

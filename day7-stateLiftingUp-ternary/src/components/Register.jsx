import React, { useState } from "react";

const Register = ({ setToggle, setUsers }) => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  let handleFormSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, formData]);
    setFormData({
      name: "",
      email: "",
      password: "",
      image: "",
    });
  };

  return (
    <div className="bg-white px-6 py-12 rounded-2xl z-10 w-1/4">
      <h1 className="font-bold text-2xl text-center">Register</h1>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleFormSubmit}
      >
        <input
          name="name"
          value={formData.name}
          className="border border-gray-500 p-2 rounded m-2 w-full"
          type="text"
          placeholder="Full name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          value={formData.email}
          className="border border-gray-500 p-2 rounded m-2 w-full"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          value={formData.password}
          className="border border-gray-500 p-2 rounded m-2 w-full"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          name="image"
          value={formData.image}
          className="border border-gray-500 p-2 rounded m-2 w-full"
          type="url"
          placeholder="image url"
          onChange={handleChange}
          required
        />
        <button
          className="bg-blue-800 text-white w-full p-2 rounded m-2"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-900 hover:cursor-pointer"
        >
          Login here
        </span>{" "}
      </p>
    </div>
  );
};

export default Register;

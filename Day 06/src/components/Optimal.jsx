import React, { useState } from "react";

const Optimal = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    let [name, value] = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>
        Better approach - only one useState, useState me object containing
        name,email,password ka use
      </h1>
      <label htmlFor="name">Name : </label>
      <input
        name="name"
        type="text"
        placeholder="name"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email : </label>
      <input
        name="email"
        type="email"
        placeholder="email"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="password">Password : </label>
      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChange}
      />

      <h1>Name : {form.name} </h1>
      <h1>Email : {form.email} </h1>
      <h1>Password : {form.password} </h1>
      <hr />
    </div>
  );
};

export default Optimal;

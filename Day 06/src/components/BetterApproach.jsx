import React, { useState } from "react";

const BetterApproach = () => {
  const [formData, setFormData] = useState({});
  return (
    <div>
      <h1>
        Better approach - only one useState, useState me object containing
        name,email,password ka use
      </h1>
      <label htmlFor="name">Name : </label>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <br />
      <label htmlFor="email">Email : </label>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <br />
      <label htmlFor="password">Password : </label>
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <h1>Name : {form.name} </h1>
      <h1>Email : {form.email} </h1>
      <h1>Password : {form.password} </h1>
      <hr />
    </div>
  );
};

export default BetterApproach;

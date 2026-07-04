import React, { useState } from "react";

const BruteforceForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Brute Force - jinte inputs utne useState</h1>
      <label htmlFor="name">Name : </label>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <label htmlFor="email">Email : </label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label htmlFor="password">Password : </label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />

      <h1>Name : {name} </h1>
      <h1>Email : {email} </h1>
      <h1>Password : {password} </h1>
      <hr />
    </div>
  );
};

export default BruteforceForm;

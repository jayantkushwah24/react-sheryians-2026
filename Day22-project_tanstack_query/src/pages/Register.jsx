import React from "react";
import { useForm } from "react-hook-form";
import { Navigate, NavLink } from "react-router";

const Register = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleFormSubmit(data) {
    localStorage.setItem("registeredUser", JSON.stringify(data));
    reset();
    <Navigate to={"/"} />;
    alert("user registered successfully!");
  }

  return (
    <div>
      <h1>register</h1>
      <form onSubmit={handleSubmit((data) => handleFormSubmit(data))}>
        <input {...register("full name")} type="text" placeholder="full name" />
        <input {...register("email")} type="email" placeholder="email" />
        <input
          {...register("password", {
            minLength: 8,
          })}
          type="password"
          placeholder="password"
        />
        <button>submit</button>
        <div>
          Already have an account? <NavLink to={"/"}>Login here</NavLink>{" "}
        </div>
      </form>
    </div>
  );
};

export default Register;

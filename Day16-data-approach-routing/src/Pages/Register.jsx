import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { registeredUser, setRegisteredUser } = useContext(Auth);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (formData) => {
    let user = registeredUser.find((u) => u.email === formData.email);
    if (user) {
      toast.error("User already exists");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Your password and confirmation password do not match");
      return;
    }
    let updatedArray = [
      ...registeredUser,
      { ...formData, id: new Date().toISOString() },
    ];
    setRegisteredUser(updatedArray);
    localStorage.setItem("registered_user", JSON.stringify(updatedArray));
    navigate("/");
    toast.success("account created successfully");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <form
          onSubmit={handleSubmit((data) => handleFormSubmit(data))}
          className="space-y-4"
        >
          <input
            {...register("name")}
            required
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            {...register("email")}
            required
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            {...register("password")}
            required
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            {...register("confirmPassword")}
            required
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-5 text-gray-600">
          Already have an account?
          <span
            onClick={() => navigate("/")}
            className="text-blue-600 cursor-pointer ml-1 hover:underline"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;

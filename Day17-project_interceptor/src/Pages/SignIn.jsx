import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const SignIn = () => {
  const { registeredUser, loggedInUser, setLoggedInUser } = useContext(Auth);

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
      if (formData.password === user.password) {
        toast.success("Login successfull");
        navigate("/main/home");
        setLoggedInUser(formData);
        localStorage.setItem("logged_in_user", JSON.stringify(formData));
      } else {
        toast.error("Wrong password");
      }
    } else {
      toast.error("User do not exist");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

        <form
          onSubmit={handleSubmit((data) => handleFormSubmit(data))}
          className="space-y-4"
        >
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

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-5 text-gray-600">
          Don't have an account?
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 cursor-pointer ml-1 hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

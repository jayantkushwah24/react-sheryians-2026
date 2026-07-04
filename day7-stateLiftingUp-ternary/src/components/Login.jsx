import React from "react";

const Login = ({ setToggle }) => {
  return (
    <div className="bg-white px-6 py-12 rounded-2xl">
      <h1 className="font-bold text-2xl text-center">Login</h1>
      <form className="flex flex-col items-center justify-center">
        <input
          className="border border-gray-500 p-2 rounded m-2 w-full"
          type="text"
          placeholder="Email"
        />
        <input
          className="border border-gray-500 p-2 rounded m-2 w-full"
          type="password"
          placeholder="Password"
        />
        <button
          className="bg-blue-800 text-white w-full p-2 rounded m-2"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p>
        Didn't have an account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-900 hover:cursor-pointer"
        >
          Register here
        </span>{" "}
      </p>
    </div>
  );
};

export default Login;

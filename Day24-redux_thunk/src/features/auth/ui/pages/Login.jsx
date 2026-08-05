import React from "react";
import useAuthHook from "../../hook/useAuthHook";

const Login = () => {
  const { register, handleSubmit, loginForm } = useAuthHook();

  return (
    <div>
      <form onSubmit={handleSubmit((data) => loginForm(data))}>
        <input {...register("username")} type="username" placeholder="email" />
        <input
          {...register("password")}
          type="password"
          placeholder="password"
        />
        <button type="sumbit">Login</button>
      </form>
    </div>
  );
};

export default Login;

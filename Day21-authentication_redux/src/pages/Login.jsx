import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";

const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  function handleFormSubmit(data) {
    const user = JSON.parse(localStorage.getItem("registeredUser"));
    if (user.email === data.email) {
      if (user.password === data.password) {
        localStorage.setItem("loggedInUser", JSON.stringify(data));
        dispatch(addUser(data));
        reset();
        alert("login successfull");
      } else {
        alert("wrong password");
      }
    } else {
      alert("user do not exists");
    }
  }
  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleSubmit((data) => handleFormSubmit(data))}>
        <input {...register("email")} type="email" placeholder="email" />
        <input
          {...register("password")}
          type="password"
          placeholder="password"
        />
        <button>login</button>
        <div>
          Don't have an account?{" "}
          <NavLink to={"/register"}>Register here</NavLink>{" "}
        </div>
      </form>
    </div>
  );
};

export default Login;

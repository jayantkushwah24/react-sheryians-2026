import React from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { loginUserApi } from "../api/AuthApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";

const useAuthHook = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  async function loginForm(credentials) {
    try {
      const response = await loginUserApi(credentials);
      localStorage.setItem("accessToken", response.accessToken);
      dispatch(addUser(response));
      alert("login successfully");
    } catch (error) {
      console.error(error);
    }
  }

  function registerForm(data) {}

  return {
    register,
    reset,
    handleSubmit,
    errors,
    loginForm,
    registerForm,
  };
};

export default useAuthHook;

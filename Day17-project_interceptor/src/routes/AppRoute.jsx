import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <SignIn />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "/main/about",
              element: <About />,
            },
            {
              path: "services",
              element: <Services />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;

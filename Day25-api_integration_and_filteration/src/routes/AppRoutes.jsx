import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../app/layout/AuthLayout";
import PublicProtected from "./protected/PublicProtected";
import Login from "../features/auth/ui/pages/Login";
import Register from "../features/auth/ui/pages/Register";
import MainProtected from "./protected/MainProtected";
import MainLayout from "../app/layout/MainLayout";
import HomePage from "../shared/ui/pages/HomePage";
import CartPage from "../features/cart/ui/pages/CartPage";
import OrderPage from "../features/order/ui/pages/OrderPage";
import ProductPage from "../features/products/ui/pages/ProductPage";
// import { hydrateUser } from "../features/auth/api/AuthApi";
import { useDispatch } from "react-redux";
// import { addUser } from "../features/auth/state/authSlice";
import { hydrateUserAction } from "../features/auth/state/AuthAction";
import AboutPage from "../shared/ui/pages/AboutPage";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      try {
        dispatch(hydrateUserAction());
      } catch (error) {
        console.log("error in hydration..", error);
      }
    })();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
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
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "home",
              element: <HomePage />,
            },
            {
              path: "product",
              element: <ProductPage />,
            },
            {
              path: "cart",
              element: <CartPage />,
            },
            {
              path: "orders",
              element: <OrderPage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;

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
import { hydrateUser } from "../features/auth/api/AuthApi";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/authSlice";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await hydrateUser();
        dispatch(addUser(response));
      } catch (error) {
        console.error(error);
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
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;

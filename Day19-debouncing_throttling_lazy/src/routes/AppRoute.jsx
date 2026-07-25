import React, { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "../components/Home";
import MainLayout from "../layout/MainLayout";
const About = lazy(() => import("../components/About"));
const User = lazy(() => import("../components/User"));

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "user",
          element: <User />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<h1>Loading application...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRoute;

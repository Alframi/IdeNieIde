import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const Test = React.lazy(() => import("../pages/Test"));
const Home = React.lazy(() => import("../pages/Home"));
const Categories = React.lazy(() => import("../pages/ModalCategories"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/test", element: <Test /> },
      { path: "/home", element: <Home /> },
      { path: "/categories", element: <Categories /> },
    ],
  },
]);

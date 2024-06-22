import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const Test = React.lazy(() => import("../pages/Test"));
const Register = React.lazy(() => import("../pages/Register"));
const Categories = React.lazy(() => import("../pages/CategoriesPage"));
const Home = React.lazy(() => import("../pages/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/test", element: <Test /> },
      { path: "/rejestracja", element: <Register /> },
      { path: "/home", element: <Home /> },
      { path: "/kategorie", element: <Categories /> },
    ],
  },
]);

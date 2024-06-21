import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const Test = React.lazy(() => import("../pages/Test"));
const Register = React.lazy(() => import("../pages/Register"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/test", element: <Test /> },
      { path: "/rejestracja", element: <Register /> },
    ],
  },
]);

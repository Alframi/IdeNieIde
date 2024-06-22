import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing/Routings";
import "./index.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {" "}
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);

import "./App.css";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        {" "}
        <Outlet />{" "}
      </Suspense>{" "}
    </>
  );
}
export default App;

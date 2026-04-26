import { useState } from "react";
import "./App.css";
import User from "./getUser/User.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./adduser/AddUser.jsx";
import Update from "./updateuser/Update.jsx";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;

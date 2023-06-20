import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login/index.jsx";
import Home from "./pages/Home/index.jsx";
import Book from "./pages/Book/index.jsx";
import CreditArea from "./pages/CreditArea/index.jsx";
import Register from "./pages/Register/index.jsx";
import EditBook from "./pages/EditBook/index.jsx";
import NewBook from "./pages/NewBook/index.jsx";
import Profile from "./pages/Profile/index.jsx";
import Ranking from "./pages/Ranking/index.jsx";
import Begin from "./pages/Begin";
import FavoritosProvider from "./components/contextos/Favoritos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Begin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/book/:id",
    element: <Book />,
  },
  {
    path: "/editBook/:id",
    element: <EditBook />,
  },
  {
    path: "/creditArea",
    element: <CreditArea />,
  },
  {
    path: "/newBook",
    element: <NewBook />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/ranking",
    element: <Ranking />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritosProvider>
      <RouterProvider router={router} />
    </FavoritosProvider>
  </React.StrictMode>
);

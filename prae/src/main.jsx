import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FavoritosProvider from "./components/contextos/Favoritos";
import { AuthProvider } from "./components/contextos/AuthContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FavoritosProvider>
          <App />
        </FavoritosProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

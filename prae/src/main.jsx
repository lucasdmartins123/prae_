import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./components/contextos/AuthContext";
import App from "./App";
import { BooksProvider } from "./components/contextos/BooksContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BooksProvider>
          <App />
        </BooksProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

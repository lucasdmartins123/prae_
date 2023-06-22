import { createContext, useEffect, useState } from "react";
import { api } from "../../Axios/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function handleLogin(userData) {
    try {
      const data = await api.post("/api/login", userData);
      console.log(data);
      const token = JSON.stringify(data.token);
      localStorage.setItem("token", token);
      api.defaults.headers.Authorization = `Bearer ${data.token}`;
      setAuthenticated(true);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRegister(userData) {
    try {
      const data = await api.post("/register", userData);
      console.log(data);
      const token = JSON.stringify(data.token);
      localStorage.setItem("token", token);
      api.defaults.headers.Authorization = `Bearer ${data.token}`;
      setAuthenticated(true);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    navigate("/");
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleRegister,
        handleLogout,
        authenticated,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

import { createContext, useEffect, useState } from "react";
import { api } from "../../Axios/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [rankingList, setRankingList] = useState([]);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function handleLogin(userData) {
    try {
      const { data } = await api.post("/login", userData);
      const token = JSON.stringify(data.token);
      const user = {
        name: data.nome,
        email: data.email,
        id: data.id,
        points: data.pontuacao,
        credits: data.creditos,
        ranking: data.classificacao,
        admin: data.is_admin,
        teste: data.teste,
      };
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setAuthenticated(true);
      setUserData(user);
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("email inexistente ou senha invalida");
    }
  }

  async function handleRegister(userData) {
    try {
      console.log(userData);
      await api.post("/cadastro", userData);
      alert("cadastrado com sucesso");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");

    navigate("/");
  }

  async function LoadRanking(user) {
    try {
      const data = await api.get("/ranking", user);
      setRankingList(data.content);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (token) {
      setAuthenticated(true);
      setUserData(user);
      LoadRanking(user);
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
        userData,
        LoadRanking,
        rankingList,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

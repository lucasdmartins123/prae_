import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../Axios/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [booksList, setBookList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);
  const [bookDetails, setBookDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [dbLoading, setDbLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [trades, setTrades] = useState([]);
  const [rankingList, setRankingList] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { userData } = useContext(AuthContext);
  const headers = {
    headers: { Authorization: `Bearer ${JSON.parse(token)}` },
  };
  async function loadBooks() {
    try {
      const { data } = await api.get("livros", headers);
      setBookList(data.content);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function loadBookDetails(bookId) {
    try {
      const { data } = await api.get(`livros/${bookId}`, headers);

      setBookDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function bookRegister(bookData) {
    setDbLoading(true);
    try {
      await api.post("livros", bookData, headers);
      loadBooks();
      alert("livro adicionado");
    } catch (error) {
      console.log(error);
    } finally {
      setDbLoading(false);
    }
  }

  async function bookEdit(bookData) {
    try {
      await api.put(`livros`, bookData, headers);
      loadBooks();
      alert("livro atualizado");
    } catch (error) {
      console.log(error);
    }
  }

  async function bookDelete(id) {
    try {
      await api.delete(`livros/${id}`, headers);
      loadBooks();
      alert("livro excluido");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  async function bookAddFavorites(bookId) {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userId = userData.id;
    const favoriteData = { usuarioId: userId, livroId: bookId };
    try {
      await api.post(`/usuarios/${userId}/favoritos`, favoriteData, headers);
      bookLoadFavorites();
    } catch (error) {
      console.log(error);
    }
  }

  async function bookLoadFavorites() {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userId = userData.id;
    try {
      const data = await api.get(`/usuarios/${userId}/favoritos`, headers);
      setFavoritesList(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function bookDelFavorites(bookId) {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userId = userData.id;

    try {
      await api.delete(`/usuarios/${userId}/favoritos/${bookId}`, headers);

      bookLoadFavorites();
    } catch (error) {
      console.log(error);
    }
  }

  async function addTrade(userEmail, bookEntradaId, bookSaidaId = null) {
    const tradeData = {
      emailUsuario: userEmail,
      livroEntradaId: bookEntradaId,
      livroSaidaId: bookSaidaId,
    };
    try {
      await api.post(`/trocas`, tradeData, headers);
      loadTrades();
      alert("Troca adicionada com sucesso");
    } catch (error) {
      alert("Usuario nao cadastrado");
    }
  }

  async function loadTrades() {
    try {
      const data = await api.get(`/trocas`, headers);
      setTrades(data.data.content);
    } catch (error) {
      console.log(error);
    }
  }

  async function LoadRanking() {
    try {
      const { data } = await api.get("/ranking", headers);
      setRankingList(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (token) {
      loadBooks();
      LoadRanking();
    }
  }, [userData]);
  return (
    <BooksContext.Provider
      value={{
        booksList,
        loading,
        bookDetails,
        loadBookDetails,
        bookRegister,
        bookEdit,
        bookDelete,
        bookAddFavorites,
        favoritesList,
        search,
        setSearch,
        bookLoadFavorites,
        bookDelFavorites,
        addTrade,
        loadTrades,
        trades,
        LoadRanking,
        rankingList,
        dbLoading,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export { BooksContext, BooksProvider };

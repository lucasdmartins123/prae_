import Login from "./pages/Login/index.jsx";
import Home from "./pages/Home/index.jsx";
import Book from "./pages/Book/index.jsx";
import CreditArea from "./pages/CreditArea/index.jsx";
import Register from "./pages/Register/index.jsx";
import EditBook from "./pages/EditBook/index.jsx";
import NewBook from "./pages/NewBook/index.jsx";
import Profile from "./pages/Profile/index.jsx";
import Ranking from "./pages/Ranking/index.jsx";
import Begin from "./pages/Begin/index.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/contextos/AuthContext.jsx";
import SearchResult from "./pages/SearchResult/index.jsx";
import NaoEncontrada from "./pages/NaoEncontrada/index.jsx";
import NewTrade from "./pages/NewTrade/index.jsx";
import TradeHistory from "./pages/TradeHistory/index.jsx";
import AboutUs from "./pages/AboutUs/index.jsx";

function App() {
  const { authenticated, loading } = useContext(AuthContext);
  if (loading) {
    return <h1>Carregando...</h1>;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={!authenticated ? <Begin /> : <Navigate to="/home" />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/home"
        element={authenticated ? <Home /> : <Navigate to="/" />}
      />
      <Route
        path="/book/:id"
        element={authenticated ? <Book /> : <Navigate to="/" />}
      />
      <Route
        path="/profile"
        element={authenticated ? <Profile /> : <Navigate to="/" />}
      />
      <Route
        path="/search"
        element={authenticated ? <SearchResult /> : <Navigate to="/" />}
      />
      <Route
        path="/aboutUs"
        element={authenticated ? <AboutUs /> : <Navigate to="/" />}
      />
      <Route
        path="/editBook/:id"
        element={authenticated ? <EditBook /> : <Navigate to="/" />}
      />
      <Route
        path="/creditArea"
        element={authenticated ? <CreditArea /> : <Navigate to="/" />}
      />
      <Route
        path="/newTrade"
        element={authenticated ? <NewTrade /> : <Navigate to="/" />}
      />
      <Route
        path="/tradeHistory"
        element={authenticated ? <TradeHistory /> : <Navigate to="/" />}
      />
      <Route
        path="/newBook"
        element={authenticated ? <NewBook /> : <Navigate to="/" />}
      />
      <Route
        path="/ranking"
        element={authenticated ? <Ranking /> : <Navigate to="/" />}
      />
      <Route
        path="*"
        element={authenticated ? <NaoEncontrada /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;

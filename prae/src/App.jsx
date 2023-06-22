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

function App() {
  const { authenticated, loading } = useContext(AuthContext);
  if (loading) {
    return <h1>Carregando...</h1>;
  }
  return (
    <Routes>
      <Route path="/" element={<Begin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {authenticated && (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/profile" element={<Profile />} />
          {/* admin */}
          <Route path="/editBook/:id" element={<EditBook />} />
          <Route path="/creditArea" element={<CreditArea />} />
          <Route path="/newBook" element={<NewBook />} />
          <Route path="/ranking" element={<Ranking />} />
        </>
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

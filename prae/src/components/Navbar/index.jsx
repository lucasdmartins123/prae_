import "./index.css";
import logo from "../../assets/Logo-Livro-Fora-da-Estante.jpg";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BsFilter } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BooksContext } from "../contextos/BooksContext";

export default function Navbar() {
  const { search, setSearch } = useContext(BooksContext);
  const navigate = useNavigate();
  function handleSearch() {
    navigate("/search");
  }
  return (
    <div className="cabecalho">
      <div className="logo-area">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="logo-text">
          <Link className="logo-text" to="/home">
            PRAE
          </Link>
        </div>
      </div>
      <div className="text">
        <Link className="text" to="/aboutUs">
          Sobre nós
        </Link>
      </div>
      <div className="action-area">
        <div className="search-input">
          <IconContext.Provider value={{ size: "1em", className: "icon" }}>
            <div className="search-input-lupa" onClick={handleSearch}>
              <BsSearch />
            </div>
          </IconContext.Provider>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Insira o nome do livro aqui"
          />
        </div>

        <IconContext.Provider value={{ size: "1.5em", color: "black" }}>
          <div>
            <Link to="/profile">
              <CgProfile />
            </Link>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

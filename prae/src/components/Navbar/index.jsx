import "./index.css";
import logo from "../../assets/Logo-Livro-Fora-da-Estante.jpg";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BsFilter } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
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
      <div className="action-area">
        <div className="search-input">
          <IconContext.Provider value={{ size: "1em", className: "icon" }}>
            <div>
              <BsSearch />
            </div>
          </IconContext.Provider>
          <input type="text" placeholder="Insira o nome do livro aqui" />
        </div>

        <IconContext.Provider value={{ size: "1.5em", color: "black" }}>
          <div>
            <Link to="/profile">
              <CgProfile />
            </Link>
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.5em" }}>
          <div>
            <BsFilter />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

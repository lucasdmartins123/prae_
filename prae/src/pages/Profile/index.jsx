import "./index.css";
import Navbar from "../../components/Navbar";
import teste from "../../assets/teste.jpg";
import booksData from "../../mock.js";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useState, useRef, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import usersData from "../../mockUser.js";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../components/contextos/AuthContext";

export default function Profile() {
  const [books, setBooks] = useState(booksData);
  const [users, setUsers] = useState(usersData);
  const [user, setUser] = useState({});
  const { id } = useParams();
  const bookListRefEnd = useRef(null);

  const { handleLogout } = useContext(AuthContext);

  const scrollLeft = (bookList) => {
    if (bookList.current) {
      bookList.current.scrollLeft -= 200; // Valor do scroll para a esquerda (ajuste conforme necessário)
    }
  };

  const scrollRight = (bookList) => {
    if (bookList.current) {
      bookList.current.scrollLeft += 200; // Valor do scroll para a direita (ajuste conforme necessário)
    }
  };

  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile__content">
          <div className="profile__content_picture">
            <img src={teste} alt="foto" />
            <h3>Alterar foto</h3>
          </div>
          <div className="profile__content__infos">
            <h3>Nome completo: Yuri Morais</h3>
            <h3>Email: yurimorais@hotmail.com</h3>
            <div className="profile__content__infos__password">
              <h3>Senha: *********</h3>
              <p>Alterar senha</p>
            </div>
            <h3>Crédtios: 2</h3>
            <h3>Ranking: 29</h3>
          </div>
          <div className="profile__content__out" onClick={handleLogout}>
            <h3>Sair da conta</h3>
            <IconContext.Provider value={{ size: "2em" }}>
              <div>
                <FiLogOut />
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className="profile__middle">
          <Link to="/creditArea">
            <h3>Acessar área de Créditos</h3>
          </Link>
          <Link to="/newBook">
            <h3>Acessar cadastro de livros</h3>
          </Link>
        </div>
        <div className="content-middle">
          <h2 className="content-middle-text">Minha lista de interesse:</h2>
          <div className="content-middle-book">
            <button
              className="arrow-btn arrow-left"
              onClick={() => scrollLeft(bookListRefEnd)}
            >
              <IconContext.Provider
                value={{ size: "2.5em", className: "arrow" }}
              >
                <div>
                  <BsFillArrowLeftCircleFill />
                </div>
              </IconContext.Provider>
            </button>

            <div className="cards-wrapper" ref={bookListRefEnd}>
              {books.map((book, index) => (
                <div key={index} className="card">
                  <Link to={`/book/${book.id}`}>
                    <img src={book.imagem} alt="livro teste" />
                  </Link>
                  <p className="arrow-text">{book.nome}</p>
                </div>
              ))}
            </div>
            <button
              className="arrow-btn arrow-right"
              onClick={() => scrollRight(bookListRefEnd)}
            >
              <IconContext.Provider
                value={{ size: "2.5em", className: "arrow" }}
              >
                <div>
                  <BsFillArrowRightCircleFill />
                </div>
              </IconContext.Provider>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

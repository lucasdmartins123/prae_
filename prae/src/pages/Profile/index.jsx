import "./index.css";
import livro from "../../assets/livrogenerico.jpg";
import Navbar from "../../components/Navbar";
import avatar from "../../assets/avatar.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useState, useRef, useEffect, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../components/contextos/AuthContext";
import { BooksContext } from "../../components/contextos/BooksContext";

export default function Profile() {
  const { booksList, favoritesList, bookLoadFavorites } =
    useContext(BooksContext);
  const { id } = useParams();
  const bookListRefEnd = useRef(null);
  const { handleLogout, userData } = useContext(AuthContext);

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
  let favorites = useMemo(() => {
    const fav = [];
    for (let i = 0; i < favoritesList.length; i++) {
      const verify = booksList.filter((book) => book.id == favoritesList[i]);

      if (verify.length > 0) {
        fav.push(verify[0]);
      }
    }

    return fav;
  }, [favoritesList]);

  useEffect(() => {
    bookLoadFavorites();
  }, []);
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile__content">
          <div className="profile__content_picture">
            <img src={avatar} alt="foto" />
          </div>
          <div className="profile__content__infos">
            <h3>Nome completo: {userData?.name}</h3>
            <h3>Email: {userData?.email}</h3>
            <div className="profile__content__infos__password">
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
          <Link to="/newTrade">
            <h3>Acessar área de trocas</h3>
          </Link>
          <Link to="/tradeHistory">
            <h3>Acessar histórico de trocas</h3>
          </Link>
        </div>
        <div className="content-favorites">
          <h2 className="content-favorites-text">Minha lista de interesse:</h2>
          <div className="content-favorites-book">
            <button
              className="arrow-favorites-btn arrow-favorites-left"
              onClick={() => scrollLeft(bookListRefEnd)}
            >
              <IconContext.Provider
                value={{ size: "2.5em", className: "arrow-favorites" }}
              >
                <BsFillArrowLeftCircleFill />
              </IconContext.Provider>
            </button>

            <div className="cards-wrapper" ref={bookListRefEnd}>
              {favorites.map((book, index) => (
                <div key={index} className="card">
                  <Link to={`/book/${book.id}`}>
                    <img src={livro} alt="livro teste" />
                  </Link>
                  <p className="book-text">{book.titulo}</p>
                </div>
              ))}
            </div>
            <button
              className="arrow-favorites-btn arrow-favorites-right"
              onClick={() => scrollRight(bookListRefEnd)}
            >
              <IconContext.Provider
                value={{ size: "2.5em", className: "arrow-favorites" }}
              >
                <BsFillArrowRightCircleFill />
              </IconContext.Provider>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

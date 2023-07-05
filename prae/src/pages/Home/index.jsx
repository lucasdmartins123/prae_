import "./index.css";
import livro from "../../assets/livrogenerico.jpg";
import ranking from "../../assets/ranking.gif";
import Navbar from "../../components/Navbar";
import { useState, useRef, useContext, useEffect, useMemo } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BooksContext } from "../../components/contextos/BooksContext";
import Tags from "../../components/Tags";
import { AuthContext } from "../../components/contextos/AuthContext";
import Footer from "../../components/Footer";

export default function Home() {
  const [filter, setFilter] = useState([]);
  const [empty, setEmpty] = useState(false);
  const bookListRefMiddle = useRef(null);
  const { booksList, favoritesList, bookLoadFavorites } =
    useContext(BooksContext);
  const { userData } = useContext(AuthContext);

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

  function handleFilter(category) {
    if (category === "ALL") {
      setEmpty(false);
      setFilter([]);
    } else {
      const selected = booksList.filter((book) => book.genero === category);
      if (selected.length > 0) {
        setEmpty(false);
        setFilter(selected);
      } else {
        setEmpty(true);
      }
    }
  }

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
      <div className="home__container">
        <div className="content-top">
          <div className="content-text">
            <h1>Olá {userData?.name}</h1>
            <p>Veja aqui os livros disponíveis para reservas</p>
          </div>
          {userData.admin ? (
            <div className="content-ranking">
              <img src={ranking} alt="ranking" />
              <Link className="h2" to="/ranking">
                <h2>Acessar ranking</h2>
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="content-middle">
          <h2 className="">Minha lista de interesse:</h2>
          <div className="content-middle-book">
            <button
              className="arrow-btn arrow-left"
              onClick={() => scrollLeft(bookListRefMiddle)}
            >
              <IconContext.Provider
                value={{ size: "2.5em", className: "arrow" }}
              >
                <BsFillArrowLeftCircleFill />
              </IconContext.Provider>
            </button>

            <div className="cards-wrapper" ref={bookListRefMiddle}>
              {favorites.map((book, index) => (
                <div key={index} className="card">
                  <Link to={`/book/${book.id}`}>
                    <img src={livro} alt="livro teste" />
                  </Link>
                  <p> {book.titulo}</p>
                </div>
              ))}

              <button
                className="arrow-btn arrow-right"
                onClick={() => scrollRight(bookListRefMiddle)}
              >
                <IconContext.Provider
                  value={{ size: "2.5em", className: "arrow" }}
                >
                  <BsFillArrowRightCircleFill />
                </IconContext.Provider>
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <Tags handleFilter={handleFilter} />
          <h2 className="content-end-text">Livros disponíveis:</h2>
          <div className="container_end">
            {empty === true ? (
              <p>Nenhum livro dessa categoria</p>
            ) : filter.length > 0 ? (
              filter.map((book, index) => (
                <div key={index} className="card_end">
                  <Link to={`/book/${book.id}`}>
                    <img src={livro} alt="livro teste" />
                  </Link>
                  <p> {book.titulo}</p>
                </div>
              ))
            ) : (
              booksList.map((book, index) => (
                <div key={index} className="card_end">
                  <Link to={`/book/${book.id}`}>
                    <img src={livro} alt="livro teste" />
                  </Link>
                  <p>{book.titulo}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

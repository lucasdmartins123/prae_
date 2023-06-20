import "./index.css";
import ranking from "../../assets/ranking.gif";
import Navbar from "../../components/Navbar";
import { useState, useEffect, useRef } from "react";
import booksData from "../../mock.js";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

export default function Home() {
  const [name, setName] = useState("Yuri");
  const [books, setBooks] = useState(booksData);
  const bookListRefMiddle = useRef(null);
  const bookListRefEnd = useRef(null);

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

  useEffect(() => {
    console.log(bookListRefMiddle);
  });

  return (
    <>
      <Navbar />
      <div className="home__container">
        <div className="content-top">
          <div className="content-text">
            <h1>Olá {name}</h1>
            <p>Veja aqui os livros disponíveis para reservas</p>
          </div>
          <div className="content-ranking">
            <img src={ranking} alt="ranking" />
            <Link className="h2" to="/ranking">
              <h2>Acessar ranking</h2>
            </Link>
          </div>
        </div>
        <div className="content-middle">
          <h2 className="content-middle-text">Livros disponíveis:</h2>
          <div className="content-middle-book">
            <button
              className="arrow-btn arrow-left"
              onClick={() => scrollLeft(bookListRefMiddle)}
            >
              <IconContext.Provider
                value={{ size: "2.5em", className: "arrow" }}
              >
                <div>
                  <BsFillArrowLeftCircleFill />
                </div>
              </IconContext.Provider>
            </button>

            <div className="cards-wrapper" ref={bookListRefMiddle}>
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
              onClick={() => scrollRight(bookListRefMiddle)}
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
        <div className="content-end">
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
                  <img src={book.imagem} alt="livro teste" />
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

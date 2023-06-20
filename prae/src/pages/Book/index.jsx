import "./index.css";
import Navbar from "../../components/Navbar";
import booksData from "../../mock.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Book() {
  const [books, setBooks] = useState(booksData);
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setBook(searchBook());
  }, []);

  function searchBook() {
    return books.find((book) => book.id === id);
  }

  return (
    <>
      <Navbar />
      <div className="book__page">
        <div className="book__page__img">
          <img src={book.imagem} alt="livro" />
          <Link to={`/editBook/${book.id}`}>
            <h3>Editar livro</h3>
          </Link>
        </div>
        <div className="book__page__info">
          <h2>Titulo: {book.nome} </h2>
          <h2>Autor: {book.autor}</h2>
          <h2>Gênero: {book.categoria}</h2>
          <p>
            Adicionar a lista de interesse <input type="checkbox" />
          </p>
          <button className="book__page__btn"> Reservar </button>
        </div>
      </div>
      ;
    </>
  );
}

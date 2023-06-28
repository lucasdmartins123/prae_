import "./index.css";
import Navbar from "../../components/Navbar";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BooksContext } from "../../components/contextos/BooksContext";

export default function Book() {
  const { id } = useParams();
  const { loadBookDetails, bookDetails, bookAddFavorites } =
    useContext(BooksContext);

  function handleAddToFavorites() {
    bookAddFavorites(id);
  }

  useEffect(() => {
    loadBookDetails(id);
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="book__page">
        <div className="book__page__img">
          <img src="/Garota-exemplar.jpg" alt="livro" />
          <Link to={`/editBook/${bookDetails.id}`}>
            <h3>Editar livro</h3>
          </Link>
        </div>
        <div className="book__page__info">
          <h2>Título: {bookDetails.titulo} </h2>
          <h2>Autor: {bookDetails.autor}</h2>
          <h2>Gênero: {bookDetails.genero}</h2>
          <button onClick={handleAddToFavorites} className="book__page__btn">
            Adicionar a lista de interesse
          </button>
        </div>
      </div>
    </>
  );
}

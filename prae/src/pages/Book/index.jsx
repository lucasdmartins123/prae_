import "./index.css";
import Navbar from "../../components/Navbar";
import livro from "../../assets/livrogenerico.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BooksContext } from "../../components/contextos/BooksContext";

export default function Book() {
  const { id } = useParams();
  const {
    loadBookDetails,
    bookDetails,
    bookAddFavorites,
    favoritesList,
    bookDelFavorites,
    bookLoadFavorites,
  } = useContext(BooksContext);

  const [isFavorite, setIsFavorite] = useState(false);

  function handleAddToFavorites() {
    if (isFavorite) return;
    bookAddFavorites(id);
    alert("livro adicionado dos favoritos");
  }

  function handleDelToFavorites() {
    bookDelFavorites(id);
    alert("livro removido dos favoritos");
  }
  useEffect(() => {
    const favorite = favoritesList.filter((book) => book == id);
    if (favorite.length > 0) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [id, favoritesList]);

  useEffect(() => {
    loadBookDetails(id);
  }, [id]);

  useEffect(() => {
    bookLoadFavorites();
  }, []);
  return (
    <>
      <Navbar />
      <div className="book__page">
        <div className="book__page__img">
          <img src={livro} alt="livro" />
          <Link to={`/editBook/${bookDetails.id}`}>
            <h3>Editar livro</h3>
          </Link>
        </div>
        <div className="book__page__info">
          <h2>Título: {bookDetails.titulo} </h2>
          <h2>Autor: {bookDetails.autor}</h2>
          <h2>Gênero: {bookDetails.genero}</h2>
          {isFavorite ? (
            <button onClick={handleDelToFavorites} className="book__page__btn">
              Remover da lista de interesse
            </button>
          ) : (
            <button onClick={handleAddToFavorites} className="book__page__btn">
              Adicionar a lista de interesse
            </button>
          )}
        </div>
      </div>
    </>
  );
}

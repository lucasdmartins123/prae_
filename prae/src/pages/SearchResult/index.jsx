import React, { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../components/contextos/BooksContext";
import "./index.css";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const SearchResult = () => {
  const { search, booksList } = useContext(BooksContext);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const bookFilter = booksList.filter((book) =>
      book.titulo.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(bookFilter);
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="search__container">
        <h1>Esses foram os livros encontrados da busca:</h1>
        <div className="search">
          {searchResult.map((result, index) => (
            <div className="search__book" key={index}>
              <Link to={`/book/${result.id}`}>
                <img src="/Garota-exemplar.jpg" alt="livro teste" />
              </Link>
              <p>{result.titulo}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResult;

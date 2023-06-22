import "./index.css";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import booksData from "../../mock.js";
import { useParams } from "react-router-dom";

export default function EditBook() {
  const [books, setBooks] = useState(booksData);
  const [book, setBook] = useState({});
  const { id } = useParams();
  const [quantidade, setQuantidade] = useState("");

  useEffect(() => {
    setBook(searchBook());
  }, []);

  function searchBook() {
    return books.find((book) => book.id === id);
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="newbook__container">
          <div className="edit__book__frame">
            <img src={book.imagem} alt="livro" />
            <button className="image__btn"> Alterar o arquivo </button>
          </div>
          <div className="wrap">
            <form className="login-form">
              <span className="login-form-title"> Editar Livros </span>
              <div className="wrap-input">
                <input
                  className={book.nome !== "" ? "has-val input" : "input"}
                  type="titulo"
                  value={book.nome}
                  onChange={(e) => setBook(e.target.value)}
                />
                <span
                  className="focus-input"
                  data-placeholder="Insira o título:"
                ></span>
              </div>

              <div className="wrap-input">
                <input
                  className={book.autor !== "" ? "has-val input" : "input"}
                  type="autor"
                  value={book.autor}
                  onChange={(e) => setBook(e.target.value)}
                />
                <span
                  className="focus-input"
                  data-placeholder="Insira o autor:"
                ></span>
              </div>

              <div className="number__input">
                <span>Genero: </span>
                <select
                  className={book.categoria !== "" ? "has-val input" : "input"}
                  value={book.categoria}
                  onChange={(e) => setBook(e.target.value)}
                />
                <span className="focus-input"></span>
              </div>

              <div className="number__input">
                <span>Quantidade: </span>
                <select
                  className={book.quantidade !== "" ? "has-val input" : "input"}
                  value={book.quantidade}
                  onChange={(e) => setQuantidade(e.target.value)}
                />
                <span className="focus-input"></span>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn"> Enviar </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

import "./index.css";
import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import { BooksContext } from "../../components/contextos/BooksContext";

export default function EditBook() {
  const { bookDetails, loadBookDetails, bookDelete, bookEdit } =
    useContext(BooksContext);
  const { id } = useParams();
  const [titulo, setTitulo] = useState(bookDetails.titulo || "");
  const [autor, setAutor] = useState(bookDetails.autor || "");
  const [genero, setGenero] = useState(bookDetails.genero || "");
  const [quantidade, setQuantidade] = useState(bookDetails.quantidade || "");

  function handleSubmit(e) {
    e.preventDefault();
    if (!titulo) {
      setTitulo(bookDetails.titulo);
    }
    // if (!autor) {
    //   setAutor(bookDetails.autor);
    // }
    // if (!genero) {
    //   setGenero(bookDetails.genero);
    // }
    // if (!quantidade) {
    //   setQuantidade(bookDetails.quantidade);
    // }
    const bookUpdate = {
      id,
      titulo,
      // autor, genero, quantidade;
    };
    bookEdit(bookUpdate);
  }

  function handleDelete() {
    bookDelete(id);
  }

  useEffect(() => {
    if (bookDetails.titulo) {
      setTitulo(bookDetails.titulo);
      setAutor(bookDetails.autor);
      setGenero(bookDetails.genero);
      setQuantidade(bookDetails.quantidade);
    }
  }, [bookDetails]);

  useEffect(() => {
    loadBookDetails(id);
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="newbook__container">
          <div className="edit__book__frame">
            <img src="/Garota-exemplar.jpg" alt="livro" />
          </div>
          <div className="wrap">
            <form className="edit-form" onSubmit={handleSubmit}>
              <span className="edit-form-title"> Editar Livro </span>
              <div className="wrap-input">
                <input
                  className={
                    bookDetails.titulo !== "" ? "has-val input" : "input"
                  }
                  type="text"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
                <span
                  className="focus-input"
                  data-placeholder=" Título:"
                ></span>
              </div>

              <div className="wrap-input">
                <input
                  className={
                    bookDetails.autor !== "" ? "has-val input" : "input"
                  }
                  type="text"
                  value={autor}
                  onChange={(e) => setAutor(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Autor:"></span>
              </div>

              <div className="number__input">
                <span>Gênero: </span>
                <select
                  className={
                    bookDetails.genero !== "" ? "has-val input" : "input"
                  }
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                >
                  <option value="ROMANCE">Romance</option>
                  <option value="COMEDIA">Comedia</option>
                  <option value="DRAMA">Drama</option>
                </select>
              </div>

              <div className="quantidade__input">
                <span>Quantidade: </span>
                <input
                  className={
                    bookDetails.quantidade !== "" ? "has-val input" : "input"
                  }
                  value={quantidade}
                  onChange={(e) => setQuantidade(e.target.value)}
                />
              </div>

              <div className="container-edit-form-btn">
                <button type="submit" className="edit-form-btn">
                  Atualizar
                </button>
              </div>
            </form>
            <button className="edit-form-btn" onClick={handleDelete}>
              Excluir
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

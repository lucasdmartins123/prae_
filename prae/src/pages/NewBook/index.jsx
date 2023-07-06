import "./index.css";
import { useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import { BooksContext } from "../../components/contextos/BooksContext";
import Footer from "../../components/Footer";

export default function NewBook() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const { bookRegister, dbLoading } = useContext(BooksContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!titulo || !autor || !genero || !quantidade || genero === "select") {
      alert("preencha todos os campos");
    }
    const newBook = {
      titulo,
      autor,
      genero,
      quantidade,
    };
    bookRegister(newBook);
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="newbook__container">
          <div className="image">
            <form className="image__text">
              <h3>Solte a imagem aqui</h3>
              <h3>ou</h3>
              <button className="image__btn"> selecione o arquivo </button>
            </form>
          </div>
          <div className="wrap">
            <form className="login-form" onSubmit={handleSubmit}>
              <span className="login-form-title"> Cadastro de Livros </span>
              <div className="newbook__wrap__input">
                <input
                  className={titulo !== "" ? "has-val input" : "input"}
                  type="titulo"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
                <span
                  className="focus-input"
                  data-placeholder="Insira o título:"
                ></span>
              </div>

              <div className="newbook__wrap__input">
                <input
                  className={autor !== "" ? "has-val input" : "input"}
                  type="autor"
                  value={autor}
                  onChange={(e) => setAutor(e.target.value)}
                />
                <span
                  className="focus-input"
                  data-placeholder="Insira o autor:"
                ></span>
              </div>

              <div className="number__input">
                <span>Genero: </span>
                <select
                  className={genero !== "" ? "has-val input" : "input"}
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                >
                  <option value="select">Selecionar</option>
                  <option value="ROMANCE">Romance</option>
                  <option value="COMEDIA">Comedia</option>
                  <option value="CIENCIA">Ciencia</option>
                  <option value="DRAMA">Drama</option>
                  <option value="AVENTURA">Aventura</option>
                  <option value="ACAO">Ação</option>
                  <option value="TERROR">Terror</option>
                  <option value="SUSPENSE">Suspense</option>
                </select>
              </div>

              <div className="quantidade__input">
                <span>Quantidade: </span>
                <input
                  className={quantidade !== "" ? "has-val input" : "input"}
                  value={quantidade}
                  onChange={(e) => setQuantidade(e.target.value)}
                />
              </div>

              <div className="container-login-form-btn">
                <button type="submit" className="login-form-btn">
                  {dbLoading ? "carregando..." : "Enviar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

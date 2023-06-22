import "./index.css";
import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function NewBook() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [quantidade, setQuantidade] = useState("");
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
            <form className="login-form">
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
                />
                <span className="focus-input"></span>
              </div>

              <div className="number__input">
                <span>Quantidade: </span>
                <select
                  className={quantidade !== "" ? "has-val input" : "input"}
                  value={quantidade}
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

import "./index.css";
import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function NewTrade() {
  const [email, setEmail] = useState("");
  const [idBookNew, setIdBookNew] = useState("");
  const [idBookOld, setIdBookOld] = useState("");

  return (
    <>
      <Navbar />
      <div className="credit-area__container">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Adicionar troca </span>
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Digite o email do usuario:"
              ></span>
            </div>

            <div className="wrap-input">
              <input
                className={idBookNew !== "" ? "has-val input" : "input"}
                type="text"
                value={idBookNew}
                onChange={(e) => setIdBookNew(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Insira o id do livro de entrada:"
              ></span>
            </div>

            <div className="wrap-input">
              <input
                className={idBookOld !== "" ? "has-val input" : "input"}
                type="text"
                value={idBookOld}
                onChange={(e) => setIdBookOld(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Insira o id do livro de saida:"
              ></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn"> Enviar </button>
            </div>
          </form>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

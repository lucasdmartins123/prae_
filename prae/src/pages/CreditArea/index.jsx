import "./index.css";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CreditArea() {
  const [email, setEmail] = useState("");
  const [credits, setCredits] = useState("");

  return (
    <>
      <Navbar />
      <div className="credit-area__container">
        {/* <div className="credit-area"> */}
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Área de Créditos </span>
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
                className={credits !== "" ? "has-val input" : "input"}
                type="credits"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Insira os Créditos:"
              ></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn"> Enviar </button>
            </div>
          </form>
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
}

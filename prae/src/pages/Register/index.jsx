import { useState } from "react";

import { Link } from "react-router-dom";
import gmail from "../../assets/gmail_logo.jpg";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Cadastro </span>
            <div className="wrap-input">
              <input
                className={name !== "" ? "has-val input" : "input"}
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Nome Completo:"
              ></span>
            </div>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email:"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha:"></span>
            </div>

            <div className="container-login-form-btn">
              <Link className="login-form-btn" to="/home">
                <button className="login-form-btn"> Login </button>
              </Link>
            </div>

            <div className="text-center">
              <span className="txt1">Ja possui conta?</span>
              <Link className="txt2" to="/login">
                Acessar a conta
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

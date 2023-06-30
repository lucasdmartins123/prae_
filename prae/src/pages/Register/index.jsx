import { useContext, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/contextos/AuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const { handleRegister } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !name || password !== confirmPassword) {
      return;
    }
    handleRegister({ nome: name, email, senha: password });
  }

  return (
    <div className="container">
      <div className="container-register">
        <div className="wrap-register">
          <form className="register-form" onSubmit={handleSubmit}>
            <span className="register-form-title"> Cadastro </span>
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

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Confirme a senha:"
              ></span>
            </div>

            <div className="container-register-form-btn">
              <button type="submit" className="register-form-btn">
                Cadastre-se
              </button>
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

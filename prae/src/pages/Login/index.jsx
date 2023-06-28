import "./index.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/contextos/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { handleLogin } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !senha) {
      return alert("email ou senha invalida");
    }
    handleLogin({ email, senha });
  }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="login-form-title"> Login </span>
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email:"></span>
            </div>

            <div className="wrap-input-senha">
              <input
                className={senha !== "" ? "has-val input" : "input"}
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha:"></span>
            </div>

            <p className="forgot-password">Esqueceu a senha?</p>

            <div className="container-login-form-btn">
              <button type={"submit"} className="login-form-btn">
                Login
              </button>
            </div>

            <div className="text-center">
              <span className="txt1">Nao possui conta?</span>
              <Link className="txt2" to="/register">
                Criar conta
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

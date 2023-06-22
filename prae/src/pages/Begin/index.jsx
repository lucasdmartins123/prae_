import { Link } from "react-router-dom";
import "./index.css";

export default function Begin() {
  return (
    <div className="container">
      <div className="container-begin">
        <div className="wrap-begin">
          <form className="inicio-begin-form">
            <span className="incio-form-title">
              Bem-Vindo a Biblioteca PRAE
            </span>
            <span className="txt1-inicio">
              Encontre aqui todos os livros que você procura e mais.
            </span>
            <div className="container-inicio-begin-form-btn">
              <Link className="inicio-begin-form-btn" to="/login">
                <button className="inicio-begin-form-btn">Acessar conta</button>
              </Link>
            </div>
            <div className="container-inicio-begin-form-btn">
              <Link className="inicio-begin-form-btn" to="/register">
                <button className="inicio-begin-form-btn">
                  Criar nova conta
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

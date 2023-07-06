import "./index.css";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="text">
        <Link className="text" to="/aboutUs">
          Sobre a PRAE
        </Link>
      </div>
      Desenvolvido por Lucas Martins e Yuri Morais
    </footer>
  );
}

import Navbar from "../../components/Navbar";
import "./index.css";

export default function NaoEncontrada() {
  return (
    <>
      <Navbar />
      <div className="conteudoContainer">
        <span className="texto404">404</span>
        <h1 className="titulo">Ops! Página não encontrada.</h1>
        <p className="paragrafo">
          Tem certeza que era isso que estava procurando?
        </p>
        <p className="paragrafo">Volte ou recarregue a pagina</p>
      </div>
    </>
  );
}

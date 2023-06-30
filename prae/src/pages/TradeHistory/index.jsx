import "./index.css";
import Navbar from "../../components/Navbar";
import usersTrade from "../../mockTrade.js";
import { useState } from "react";

export default function TradeHistory() {
  const [users, setUsers] = useState(usersTrade);
  return (
    <>
      <Navbar />
      <div className="trade__container">
        <h2>Histórico de trocas:</h2>
        <div className="trade__infos">
          {usersTrade.map((user, index) => (
            <div key={index} className="trade__card">
              <p>Data: {user.data}</p>
              <p>Nome: {user.nomeCompleto}</p>
              <p>Titulo livro de entrada: {user.TituloLivroEntrada}</p>
              <p>Titulo livro de saída: {user.TituloLivroSaida}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

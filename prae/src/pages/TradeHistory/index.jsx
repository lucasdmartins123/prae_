import "./index.css";
import Navbar from "../../components/Navbar";
import usersTrade from "../../mockTrade.js";
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { BooksContext } from "../../components/contextos/BooksContext";

export default function TradeHistory() {
  const [users, setUsers] = useState(usersTrade);

  const { loadTrades, trades } = useContext(BooksContext);
  useEffect(() => {
    loadTrades();
  }, []);
  console.log(trades);
  return (
    <>
      <Navbar />
      <div className="trade__container">
        <h2>Histórico de trocas:</h2>
        <div className="trade__infos">
          {trades.map((trade, index) => (
            <div key={index} className="trade__card">
              <p>Nome: {trade.nomeUsuario}</p>
              <p>Titulo livro de entrada: {trade.livroEntrada}</p>
              <p>Titulo livro de saída: {trade.livroSaida}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

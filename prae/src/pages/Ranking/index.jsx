import "./index.css";
import Navbar from "../../components/Navbar";
import usersData from "../../mockUser.js";
import { useContext, useState } from "react";
import Footer from "../../components/Footer";

import { BooksContext } from "../../components/contextos/BooksContext";

export default function Ranking() {
  const [users, setUsers] = useState(usersData);
  const { rankingList } = useContext(BooksContext);
  console.log(rankingList);
  rankingList.sort((a, b) => b.pontuacao - a.pontuacao);
  return (
    <>
      <Navbar />

      <div className="ranking__content">
        <h2>Ranking de Usuários:</h2>
        <div className="user__ranking">
          {rankingList.map((user, index) => (
            <div key={index} className="ranking">
              <p>Posição: {user.posicao}</p>
              <p>Email: {user.email}</p>
              <p>Nome: {user.nome}</p>
              <p>Trocas: {user.pontuacao}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

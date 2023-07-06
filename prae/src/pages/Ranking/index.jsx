import "./index.css";
import Navbar from "../../components/Navbar";
import usersData from "../../mockUser.js";
import { useContext, useState } from "react";
import Footer from "../../components/Footer";
import { AuthContext } from "../../components/contextos/AuthContext";

export default function Ranking() {
  const [users, setUsers] = useState(usersData);
  const { rankingList } = useContext(AuthContext);
  console.log(rankingList);
  return (
    <>
      <Navbar />

      <div className="ranking__content">
        <h2>Ranking de Usuários:</h2>
        <div className="user__ranking">
          {rankingList.map((user) => (
            <div className="ranking">
              <p>Posição: {user.posicao}</p>
              <p>Email: {user.email}</p>
              <p>Nome: {user.nome}</p>
              <p>Pontos: {user.pontuacao}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

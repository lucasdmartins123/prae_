import "./index.css";
import Navbar from "../../components/Navbar";
import usersData from "../../mockUser.js";
import { useState } from "react";

export default function Ranking() {
  const [users, setUsers] = useState(usersData);
  return (
    <>
      <Navbar />
      <div className="ranking__content">
        <h2>Ranking de Usuários:</h2>
        <div className="user__ranking">
          {usersData.map((user, index) => (
            <div key={index} className="ranking">
              <p>Posição: {user.id}</p>
              <p>Nome: {user.nomeCompleto}</p>
              <p>Livros devolvidos: {user.livrosDevolvidos}</p>
              <p>Pontos: {user.pontos}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

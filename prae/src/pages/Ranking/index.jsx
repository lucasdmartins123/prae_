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
          {users.map((user, index) => (
            <div key={index} className="ranking">
              <p className="user__ranking__text">Posição: {user.id}</p>
              <p className="user__ranking__text">Nome: {user.nomeCompleto}</p>
              <p className="user__ranking__text">
                Livros devolvidos: {user.livrosDevolvidos}
              </p>
              <p className="user__ranking__text">Pontos: {user.pontos}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

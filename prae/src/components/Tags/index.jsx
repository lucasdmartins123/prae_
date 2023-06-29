import React from "react";
import "./index.css";

export default function Tags({ handleFilter }) {
  return (
    <div className="tags">
      <p>Filtrar por categoria:</p>
      <ul className="tags__lista">
        <li onClick={() => handleFilter("ALL")}>Todos</li>
        <li onClick={() => handleFilter("ROMANCE")}>Romance</li>
        <li onClick={() => handleFilter("COMEDIA")}>Comedia</li>
        <li onClick={() => handleFilter("CIENCIA")}>Ciencia</li>
        <li onClick={() => handleFilter("DRAMA")}>Drama</li>
        <li onClick={() => handleFilter("AVENTURA")}>Aventura</li>
        <li onClick={() => handleFilter("ACAO")}>Ação</li>
        <li onClick={() => handleFilter("TERROR")}>Terror</li>
        <li onClick={() => handleFilter("SUSPENSE")}>Suspense</li>
      </ul>
    </div>
  );
}

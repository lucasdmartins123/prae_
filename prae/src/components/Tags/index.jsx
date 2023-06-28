import React from "react";
import "./index.css";

export default function Tags({ handleFilter }) {
  return (
    <div className="tags">
      <p>Filtre por tags:</p>
      <ul className="tags__lista">
        <li onClick={() => handleFilter("ALL")}>Todos</li>
        <li onClick={() => handleFilter("ROMANCE")}>Romance</li>
        <li onClick={() => handleFilter("COMEDIA")}>Comedia</li>
        <li onClick={() => handleFilter("CIENCIA")}>Ciencia</li>
      </ul>
    </div>
  );
}

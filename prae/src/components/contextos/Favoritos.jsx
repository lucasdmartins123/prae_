import { createContext, useState } from "react";
import { api } from "../../Axios/api";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);
  async function addFavorite(userId, bookId) {
    try {
      const favorite = { idLivro: bookId, idUsuario: userId };
      const data = await api.post("/listainteresse", favorite);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FavoritosContext.Provider value={{ favorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

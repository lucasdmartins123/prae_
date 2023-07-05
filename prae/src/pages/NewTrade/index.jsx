import "./index.css";
import { useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BooksContext } from "../../components/contextos/BooksContext";
import { BsSearch } from "react-icons/bs";

export default function NewTrade() {
  const [email, setEmail] = useState("");
  const [titleBookNew, setTitleBookNew] = useState("");
  const [titleBookOld, setTitleBookOld] = useState("");
  const [listBookNew, setListBookNew] = useState([]);
  const [listBookOld, setListBookOld] = useState([]);
  const [idBookNew, setIdBookNew] = useState("");
  const [idBookOld, setIdBookOld] = useState("");
  const { booksList, addTrade } = useContext(BooksContext);

  function searchBook(type) {
    if (type === "entry") {
      const books = booksList.filter((book) =>
        book.titulo.toLowerCase().includes(titleBookOld.toLowerCase())
      );
      setListBookOld(books);
    } else {
      const books = booksList.filter((book) =>
        book.titulo.toLowerCase().includes(titleBookNew.toLowerCase())
      );
      setListBookNew(books);
    }
  }

  function handleSelectBook(type, bookId, bookTitle) {
    if (type === "entry") {
      setIdBookOld(bookId);
      setTitleBookOld(bookTitle);
      setListBookOld([]);
    } else {
      setIdBookNew(bookId);
      setTitleBookNew(bookTitle);
      setListBookNew([]);
    }
  }

  function handleIncludeTrade(e) {
    e.preventDefault();
    if (!email) {
      return alert("preencha o email do usuario");
    }
    if (!idBookOld) {
      return alert("preencha o livro de entrada");
    }
    addTrade(email, idBookOld, idBookNew);
    setEmail("");
    setIdBookOld("");
    setTitleBookOld("");
    setIdBookNew("");
    setTitleBookNew("");
  }

  return (
    <>
      <Navbar />
      <div className="credit-area__container">
        <div className="wrap-addTrade">
          <form className="login-form" onSubmit={handleIncludeTrade}>
            <span className="login-form-title"> Adicionar troca </span>
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Digite o email do usuario:"
              ></span>
            </div>

            <div className="wrap-input search__trade__container">
              <input
                className={titleBookOld !== "" ? "has-val input" : "input"}
                type="text"
                value={titleBookOld}
                onChange={(e) => setTitleBookOld(e.target.value)}
                placeholder="Busque o nome do livro de entrada"
              />
              <BsSearch
                onClick={() => searchBook("entry")}
                className="search__icon"
                size={25}
              />

              {listBookOld.length > 0 && (
                <div className="searchResult">
                  {listBookOld.map((book) => (
                    <p
                      onClick={() =>
                        handleSelectBook("entry", book.id, book.titulo)
                      }
                    >
                      {book.id} | {book.titulo}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="wrap-input search__trade__container">
              <input
                className={titleBookNew !== "" ? "has-val input" : "input"}
                type="text"
                value={titleBookNew}
                onChange={(e) => setTitleBookNew(e.target.value)}
                placeholder="Busque o nome do livro de saida"
              />
              <BsSearch
                onClick={() => searchBook("exit")}
                className="search__icon"
                size={25}
              />

              {listBookNew.length > 0 && (
                <div className="searchResult">
                  {listBookNew.map((book) => (
                    <p
                      onClick={() =>
                        handleSelectBook("exit", book.id, book.titulo)
                      }
                    >
                      {book.id} | {book.titulo}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="container-login-form-btn">
              <button type="submit" className="login-form-btn">
                Enviar
              </button>
            </div>
          </form>
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
}

import { useEffect, useState } from "react";
import { CardList } from "../components/cardsList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    requestFilmCards();
    setIsLoading(false);
  }, []);
  const requestFilmCards = () => {
    setIsLoading(true);
    try {
      fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix&`)
        .then((responce) => responce.json())
        .then((data) => setCards(data["Search"]));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = (data, type = "all") => {
    try {
      fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${data}${
          type !== "all" ? `&type=${type}` : ""
        }`
      )
        .then((responce) => responce.json())
        .then((data) => setCards(data["Search"]));
      setIsLoading(false);
    } catch (error) {
      toast(`${error.message}`);
    }
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <main className="container content">
          <Search handleSearch={handleSearch} />
          <CardList cards={cards} />
          <ToastContainer />
        </main>
      )}
    </>
  );
}

export { Main };

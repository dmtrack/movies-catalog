import { useEffect, useState } from "react";
import { CardList } from "../components/cardsList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Filter } from "../components/Filter";

function Main() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const [type, setType] = useState("");

  useEffect(() => {
    requestFilmCards();
    setIsLoading(false);
  }, []);
  useEffect(() => {
    requestFilmCards();
    setIsLoading(false);
  }, [type]);

  const requestFilmCards = async () => {
    try {
      await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=aae382ab&s=matrix&type=${type}`
      )
        .then((responce) => responce.json())
        .then((data) => setCards(data["Search"]));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = async (data) => {
    try {
      await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=aae382ab&s=${data}&type=${type}`
      )
        .then((responce) => responce.json())
        .then((data) => setCards(data["Search"]));
    } catch (error) {
      toast(`${error.message}`);
    }
  };

  const handleFilter = async (event) => {
    setType(event.target.value);

    try {
      await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=aae382ab&s=matrix&type=${event.target.value}`
      )
        .then((responce) => responce.json())
        .then((data) => setCards(data["Search"]));
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
          <Filter handleFilter={handleFilter} type={type} />
          <CardList cards={cards} isLoading={isLoading} />
          <ToastContainer />
        </main>
      )}
    </>
  );
}

export { Main };

import { useEffect, useState } from "react";
import { CardList } from "../components/cardsList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

function Main() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    requestFilmCards();
    setIsLoading(false);
  }, []);

  const requestFilmCards = async () => {
    try {
      await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=aae382ab&s=matrix&"
      )
        .then((responce) => responce.json())
        .then((data) => setCards(data["Search"]));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = async (data) => {
    await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=aae382ab&s=${data}`)
      .then((responce) => responce.json())
      .then((data) => setCards(data["Search"]));
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <main className="container content">
          <Search handleSearch={handleSearch} />
          <CardList
            cards={cards}
            isLoading={isLoading}
            handleSearch={handleSearch}
          />
        </main>
      )}
    </>
  );
}

export { Main };

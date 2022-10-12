import { useEffect, useState } from "react";
import { CardList } from "../components/cardsList";

function Main() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const requestFilmCards = async () => {
    try {
      const data = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=aae382ab&s=matrix&"
      )
        .then((responce) => responce.json())
        .then((data) => setCards(data["Search"]));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    requestFilmCards();
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <main className="container content">
          <CardList cards={cards} isLoading={isLoading} />
        </main>
      )}
    </>
  );
}

export { Main };

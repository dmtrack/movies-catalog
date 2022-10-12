import { useEffect, useState } from "react";

function Main() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const requestFilmCards = async () => {
    const data = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=aae382ab&s=matrix"
    )
      .then((responce) => responce.json())
      .then((data) => setCards(data));
    console.log(cards);
    setIsLoading(false);
    return data;
  };

  useEffect(() => {
    setCards(requestFilmCards());
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <main className="container content"></main>
      )}
    </>
  );
}

export { Main };

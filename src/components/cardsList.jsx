import { Card } from "./Card";

const CardList = ({ cards, isLoading }) => {
  console.log(cards);
  return (
    <>
      <div className="row">
        {!isLoading ? (
          cards.map((card) => <Card props={card} key={card.imdbID} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export { CardList };

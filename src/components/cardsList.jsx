import { Card } from "./Card";

const CardList = ({ cards, isLoading, handleSearch }) => {
  return (
    <>
      <div className="movies">
        {!isLoading && cards.length === 0 && <p>Film is not found</p>}
        {!isLoading && cards.length > 0 ? (
          cards.map((card) => <Card props={card} key={card.imdbID} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export { CardList };

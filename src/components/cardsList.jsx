import { Card } from "./Card";

const CardList = ({ cards = [] }) => {
  return (
    <>
      <div className="movies">
        {cards.length ? (
          cards.map((card) => <Card props={card} key={card.imdbID} />)
        ) : (
          <p className="flow-text">Nothing found</p>
        )}
      </div>
    </>
  );
};

export { CardList };

const Card = ({ props }) => {
  const { Poster: poster, Title: title, Year: year, Type: type } = props;
  return (
    <>
      <div className="card-movie">
        <div className="card-image waves-effect waves-block waves-light">
          {poster === "N/A" ? (
            <img
              className="activator"
              src={`https://via.placeholder.com/300x400?text=${title}`}
              alt="poster"
            />
          ) : (
            <img className="activator" src={poster} />
          )}
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {title}
          </span>

          {/*<p>*/}
          {/*  <a href="#">This is a link</a>*/}
          {/*</p>*/}
          <p style={{ justifyContent: "space-between", display: "flex" }}>
            <span>{year}</span>
            <span>{type}</span>
          </p>
        </div>
      </div>
    </>
  );
};
export { Card };

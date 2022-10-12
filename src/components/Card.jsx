const Card = ({ props }) => {
  const {
    Poster: poster,
    Title: title,
    imdbID: id,
    Year: year,
    Type: type,
  } = props;
  return (
    <>
      <div className="col s4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={poster} />
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
      </div>
    </>
  );
};
export { Card };

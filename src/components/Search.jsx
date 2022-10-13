import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Search({ handleSearch }) {
  const [data, setData] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (event) => {
    if (event.key === "Enter") {
      handleSearch(data, type);
    }
  };
  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    handleSearch(data, event.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          onKeyDown={handleKey}
          placeholder="Type here"
          value={data}
          type="search"
          className="validate"
          onChange={(event) => {
            setData(event.target.value);
          }}
        />
        <button
          className="btn search-btn"
          onClick={() => handleSearch(data, type)}
        >
          Search
        </button>
      </div>
      <form className="filter-comp">
        <label>
          <input
            type="radio"
            name="type"
            value="all"
            onChange={(event) => handleFilter(event)}
            data-type="all"
            checked={type === "all"}
          />
          <span>all</span>
        </label>

        <label>
          <input
            type="radio"
            name="type"
            value="movie"
            onChange={(event) => handleFilter(event)}
            data-type="movie"
            checked={type === "movie"}
          />
          <span>movies</span>
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="series"
            onChange={(event) => handleFilter(event)}
            data-type="series"
            checked={type === "series"}
          />
          <span>series</span>
        </label>
      </form>
    </div>
  );
}
export { Search };

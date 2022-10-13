import { useState } from "react";

const Filter = ({ handleFilter, type }) => {
  return (
    <>
      <form className="filter-comp">
        <label>
          <input
            type="radio"
            name="filter"
            checked={type === ""}
            value=""
            onChange={(event) => handleFilter(event)}
          />
          <span>all</span>
        </label>

        <label>
          <input
            type="radio"
            name="filter"
            value="movie"
            checked={type === "movie"}
            onChange={(event) => handleFilter(event)}
          />
          <span>movies</span>
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="series"
            checked={type === "series"}
            onChange={(event) => handleFilter(event)}
          />
          <span>series</span>
        </label>
      </form>
    </>
  );
};
export { Filter };

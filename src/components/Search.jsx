import { useState } from "react";

function Search({ handleSearch }) {
  const [data, setData] = useState("");

  return (
    <div className="row">
      <div className="col s9">
        <div className="input-field">
          <input
            placeholder="Search"
            value={data}
            type="search"
            className="validate"
            onChange={(event) => {
              setData(event.target.value);
            }}
          />
          <div className="col s12"></div>
          <button onClick={() => handleSearch(data)}>Search</button>
        </div>
      </div>
    </div>
  );
}
export { Search };

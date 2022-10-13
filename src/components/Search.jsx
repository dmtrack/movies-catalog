import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Search({ handleSearch }) {
  const [data, setData] = useState("");
  const handleKey = (event) => {
    if (event.key === "Enter") {
      handleSearch(data);
    }
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
        <button className="btn search-btn" onClick={() => handleSearch(data)}>
          Search
        </button>
      </div>
    </div>
  );
}
export { Search };

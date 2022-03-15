import React, { useState } from "react";
import { searchBooks } from "../Redux/actions/books";
import { useDispatch } from "react-redux";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchBooks(query)).then((data) => {
      setBooks(data);
    });
  };

  const inputStyles = { border: "dotted 1px #ff385c", borderRadius: "5px" };

  return (
    <>
      <form className="flex w-full justify-center" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="mr-6 mt-6 p-5 border-slate-400 shadow-md w-full md:w-2/3"
          style={inputStyles}
        ></input>
        <button
          type="submit"
          className="px-5 mt-6"
          style={{ backgroundColor: "#1D1A31", borderRadius: "5px" }}
        >
          <p style={{ color: "#FFF" }}>search</p>
        </button>
      </form>
    </>
  );
};

export default Searchbar;

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

  return (
    <>
      <form className="flex w-full justify-center" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="mr-6 mt-6 p-2 border-slate-400 shadow-md w-full md:w-2/3"
        ></input>
        <button type="submit"> search</button>
      </form>
    </>
  );
};

export default Searchbar;

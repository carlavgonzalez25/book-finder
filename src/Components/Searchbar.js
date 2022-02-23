import React, { useEffect, useState } from "react";
import { searchBooks } from "../Redux/actions/books";
import { useDispatch } from "react-redux";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchBooks(query)).then((data) => {
      console.log(data);
      setBooks(data);
    });
  };

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="mr-2"
        ></input>
        <button type="submit"> search</button>
      </form>
      {!!books.length &&
        books.map((e, i) => (
          <p key={e.volumeInfo.title + i}>{e.volumeInfo.title}</p>
        ))}
    </>
  );
};

export default Searchbar;

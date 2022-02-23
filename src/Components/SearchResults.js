import React from "react";
import BookCard from "./BookCard";
import { shallowEqual, useSelector } from "react-redux";

const SearchResults = () => {
  const books = useSelector(({ books }) => books.books, shallowEqual);

  return (
    <div className="flex flex-wrap">
      {!!books.length && books.map((book) => <BookCard book={book} />)}
    </div>
  );
};

export default SearchResults;

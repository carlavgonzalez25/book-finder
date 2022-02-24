import React from "react";
import BookCard from "./BookCard";
import { shallowEqual, useSelector } from "react-redux";

const SearchResults = () => {
  const books = useSelector(({ books }) => books.books, shallowEqual);

  return (
    <div className="flex flex-wrap  justify-between ">
      {!!books.length &&
        books.map((book, i) => <BookCard key={i} book={book} />)}
    </div>
  );
};

export default SearchResults;

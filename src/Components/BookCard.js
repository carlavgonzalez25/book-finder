import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="flex rounded-sm m-4 shadow-lg bg-white w-1/3 ">
      <div>
        <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="book preview" />
      </div>
      <div>
        <h3>{book.volumeInfo.title}</h3>
        <p>{/* book.volumeInfo.description */}</p>
      </div>
    </div>
  );
};

export default BookCard;

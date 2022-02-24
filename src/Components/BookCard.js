import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { volumeInfo: info } = book;

  const url = info?.imageLinks?.thumbnail;
  const id = book.id;

  return (
    <div className="flex rounded-sm my-4 md:my-8 shadow-lg bg-white md:w-5/12 w-full max-h-[200px] ">
      <div className={`w-1/3  flex justify-center content-center`}>
        {<img src={url} alt="book preview" />}
      </div>
      <div className="w-2/3 p-2 md:p-5 overflow-hidden">
        <h3 className="font-semibold text-lg mb-2 	">{info.title}</h3>
        <p>{info.subtitle}</p>
        {!info &&
          info?.authors.map((author, i) => <p key={author + i}>{author}</p>)}
        <Link to={`/${id}`}>Go to</Link>
      </div>
    </div>
  );
};

export default BookCard;

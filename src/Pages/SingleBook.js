import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { searchBook } from "../Redux/actions";

const SingleBook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    dispatch(searchBook(id)).then((data) => setBook(data));
  }, [dispatch, id]);

  const src = book?.volumeInfo?.imageLinks?.medium;

  return (
    !!book && (
      <div className="h-9/10 p-3 md:p-8 mx-5 md:mx-11 flex ">
        <div className="flex w-full">
          <div className="w-1/5">
            <img src={src} alt={`${book?.volumeInfo?.title} book cover`}></img>
          </div>
          <div className="w-4/5">{book?.volumeInfo?.title}</div>
        </div>
      </div>
    )
  );
};

export default SingleBook;

import axios from "axios";
import { SEARCH_BOOKS, SET_ERROR, SET_LOADING } from "../types";

let apiKey;

if (process.env.NODE_ENV !== "production") {
  apiKey = process.env.REACT_APP_API_KEY;
} else {
  //TODO: crear env cuando deployemos
  apiKey = process.env.API_KEY;
}

export const searchBooks = (payload) => (dispatch) => {
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${payload}&key=${apiKey}`
    )
    .then((res) => res.data)
    .then((data) => {
      dispatch({ type: SEARCH_BOOKS, payload: data.items });
      return data.items;
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: SET_ERROR, payload: true });
    });
};

export const setLoading = () => (dispatch) => dispatch({ type: SET_LOADING });

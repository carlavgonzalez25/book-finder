import { SEARCH_BOOKS, SET_ERROR, SET_LOADING, SEARCH_BOOK } from "../types";

const initialState = {
  loading: false,
  books: [],
  error: false,
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BOOKS:
      return { ...state, books: action.payload, loading: false };
    case SEARCH_BOOK:
      return { ...state, book: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

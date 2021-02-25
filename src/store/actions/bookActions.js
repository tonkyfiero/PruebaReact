import * as types from "../actionTypes";

export const getBooks = async (dispatch, id) => {
  toggleIsLoadingBook(dispatch);
  console.log('in bookActions.js [getBooks]')
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const payload = await response.json();
  console.log({ payload })
  setTimeout(() => {
    dispatch({ type: types.GET_BOOKS, payload });
    toggleIsLoadingBook(dispatch);
  }, 100);
};

export const toggleIsLoadingBook = dispatch => {
  dispatch({ type: types.TOGGLE_IS_LOADING_BOOK })
};

export const setBookAutoload = dispatch => {
  dispatch({ type: types.SET_BOOK_AUTOLOAD });
};

export const incrementCurrentBookId = dispatch => {
  dispatch({ type: types.INCREMENT_CURRENT_BOOK_ID });
};

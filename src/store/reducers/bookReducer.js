import * as types from "./../actionTypes";

/*
const initialState = {
  fetchedBooks: null
};
*/

const bookReducer = (state, action) => {
  switch (action.type) {
    case types.GET_BOOKS: {
      return { ...state, fetchedBooks: action.payload };
    }

    case types.TOGGLE_IS_LOADING_BOOK: {
      return { ...state, isLoadingBook: !state.isLoadingBook }
    }

    default:
      return state;
  }
};

export default bookReducer;

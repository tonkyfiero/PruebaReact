import * as types from "./../actionTypes";

const mainReducer = (state, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return { ...state, users: action.payload };
    case types.GET_BOOKS: {
      return { ...state, fetchedBooks: action.payload };
    }
    case types.SET_USERS_AUTOLOAD:
      return {
        ...state,
        ...(state.autoLoad.users = !state.autoLoad.users)
      };
    case types.SET_BOOK_AUTOLOAD:
      return {
        ...state,
        ...(state.autoLoad.books = !state.autoLoad.books)
      };
    case types.INCREMENT_CURRENT_BOOK_ID: {
      let newId = state.currentBookId === 10 ? 1 : state.currentBookId + 1;
      return { ...state, currentBookId: newId };
    }
    default:
      return state;
  }
};

export default mainReducer;

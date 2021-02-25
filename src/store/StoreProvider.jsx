import React, { useReducer } from "react";
//import rootReducer from "./reducers/rootReducer";
import mainReducer from "./reducers/mainReducer.js";

const initialState = {
  fetchedBooks: [],
  users: [],
  currentBookId: 1,
  isLoadingBook: false,
  autoLoad: {
    books: true,
    users: true
  }
};

export const ApiContext = React.createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <ApiContext.Provider value={{ state, dispatch }}>
      {children}
    </ApiContext.Provider>
  );
};

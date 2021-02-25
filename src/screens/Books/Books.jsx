import React, { useContext, useEffect } from "react";
import { ApiContext } from "../../store/StoreProvider";
import {
  getBooks,
  setBookAutoload,
  incrementCurrentBookId
} from "../../store/actions/bookActions";

const Books = () => {
  const { state, dispatch } = useContext(ApiContext);

  const handleGetBook = _ => {
    incrementCurrentBookId(dispatch);
    getBooks(dispatch, state.currentBookId);
  };

  const handleSetBookAutoload = _ => {
    setBookAutoload(dispatch);
  };

  useEffect(() => {
    console.log({ currentBookId: state.currentBookId, msg: "In useEffect about to getBooks(dispatch, state.currentBookId)"})
    getBooks(dispatch, state.currentBookId);
  }, [dispatch, state.currentBookId]);

  useEffect(() => {
    if (state.autoLoad.books) {
      console.log({ msg: "Books have been rendered" /* state */ });
      incrementCurrentBookId(dispatch);
    }
  }, [dispatch, state.autoLoad.books]);

  console.log({ from: "from [src/screens/Books/Books.jsx]", state });

  return (
    <div>
      <br />
      <button onClick={handleGetBook}>Get Book</button>
      <button
        style={{
          backgroundColor: state.autoLoad.books ? "red" : "green",
          color: "white"
        }}
        onClick={handleSetBookAutoload}
      >
        {state.autoLoad.books ? "Disable" : "Enable"} Book Autoload
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Books;

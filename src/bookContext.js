import React, { useReducer } from "react";

const bookContext = React.createContext();

function bookReducer(state, action) {
  switch (action.type) {
    case "ADD_NEW_ENTRY": {
      console.log(action);
      return {
        ...state,
        bookList: [...state.bookList, action.payload]
      };
    }
    default:
      throw new Error();
  }
}

const initialState = {
  bookList: []
};

const StateProvider = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  return (
    <bookContext.Provider value={{ state, dispatch }}>
      {children}
    </bookContext.Provider>
  );
};

export { bookContext, StateProvider, initialState };

import React, { useReducer } from "react";

import { style } from "./style";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_NEW_ENTRY": {
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

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const PhoneBookForm = () => {
    const onSubmit = e => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const newEntry = {};
      for (var [key, value] of formData.entries()) {
        newEntry[key] = value;
      }

      newEntry.id = Math.random()
        .toString(16)
        .slice(2);

      dispatch({ type: "ADD_NEW_ENTRY", payload: newEntry });
    };

    return (
      <form onSubmit={onSubmit} style={style.form.container}>
        <label>First name:</label>
        <br />

        <input
          style={style.form.inputs}
          className="userFirstname"
          name="userFirstname"
          defaultValue="Coder"
          type="text"
        />

        <br />

        <label>Last name:</label>

        <br />

        <input
          style={style.form.inputs}
          className="userLastname"
          defaultValue="Byte"
          name="userLastname"
          type="text"
        />

        <br />

        <label>Phone:</label>

        <br />

        <input
          style={style.form.inputs}
          className="userPhone"
          defaultValue="8885559999"
          name="userPhone"
          type="text"
        />

        <br />

        <input
          style={style.form.submitBtn}
          className="submitButton"
          type="submit"
          value="Add User"
        />
      </form>
    );
  };

  const InformationTable = () => {
    return (
      <table style={style.table} className="informationTable">
        <thead>
          <tr>
            <th style={style.tableCell}>First name</th>

            <th style={style.tableCell}>Last name</th>

            <th style={style.tableCell}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {state.bookList.map(user => (
            <tr key={user.id}>
              <td>{user.userFirstname}</td>
              <td>{user.userLastname}</td>
              <td>{user.userPhone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <section>
      <PhoneBookForm />
      <InformationTable />
    </section>
  );
}

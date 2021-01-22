import React, { useContext } from "react";
import { bookContext } from "../bookContext";
import { style } from "../style";

export const PhoneBookForm = () => {
  const { dispatch } = useContext(bookContext);
  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newEntry = {};
    for (var [key, value] of formData.entries()) {
      newEntry[key] = value;
    }

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

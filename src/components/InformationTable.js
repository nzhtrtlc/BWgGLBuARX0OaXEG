import React, { useContext } from "react";
import { bookContext } from "../bookContext";
import { style } from "../style";

const sortByLastName = arr => {
  return arr.sort((a, b) => {
    if (a.userLastname < b.userLastname) {
      return -1;
    }
    if (a.userLastname > b.userLastname) {
      return 1;
    }
    return 0;
  });
};

export const InformationTable = () => {
  const { state } = useContext(bookContext);
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
        {sortByLastName(state.bookList).map(user => (
          <tr>
            <td>{user.userFirstname}</td>
            <td>{user.userLastname}</td>
            <td>{user.userPhone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

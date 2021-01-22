import React from "react";
import { PhoneBookForm } from "./components/PhoneBookForm";
import { InformationTable } from "./components/InformationTable";
import { StateProvider, initialState } from "./bookContext";

export default function App() {
  return (
    <section>
      <StateProvider initialState={initialState}>
        <PhoneBookForm />
        <InformationTable />
      </StateProvider>
    </section>
  );
}

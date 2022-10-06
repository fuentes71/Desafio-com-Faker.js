import React from "react";
import "./App.css";
import Filter from "./Components/Filter";
import FilterName from "./Components/FilterName";
import FilterIndex from "./Components/FilterIndex";
import FilterFirstName from "./Components/FilterFirstName";
import ReturnFirstName from "./Components/ReturnFirstName";
import ReturnFullName from "./Components/ReturnFullName";

const App = () => {
  return (
    <div className="App">
      <Filter />
      <FilterName />
      <FilterIndex />
      <FilterFirstName />
      <ReturnFullName />
      <ReturnFirstName />
    </div>
  );
};

export default App;

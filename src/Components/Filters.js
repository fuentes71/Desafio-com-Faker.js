import React from "react";
import Filter from "./Challenges/Filter";
import FilterName from "./Challenges/FilterName";
import FilterIndex from "./Challenges/FilterIndex";
// import FilterFirstName from "./Challenges/FilterFirstName";
const Filters = () => {
  return (
    <>
      <Filter />
      <FilterName />
      <FilterIndex />
      {/* <FilterFirstName /> */}
    </>
  );
};

export default Filters;

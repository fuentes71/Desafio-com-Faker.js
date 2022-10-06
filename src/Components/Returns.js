import React from "react";
import ReturnFirstName from "./Challenges/ReturnFirstName";
import ReturnFullName from "./Challenges/ReturnFullName";
import ReturnFilterName from "./Challenges/ReturnFilterName";
import ReturnMajor from "./Challenges/ReturnMajor";
import SalesAmount from "./Challenges/SalesAmount";
import Sales from "./Challenges/sales";
import AddCostumer from "./Challenges/AddCustomer";
const Returns = () => {
  return (
    <>
      <ReturnFullName />
      <ReturnFirstName />
      <ReturnFilterName />
      <ReturnMajor />
      <SalesAmount />
      <Sales />
      <AddCostumer />
    </>
  );
};

export default Returns;

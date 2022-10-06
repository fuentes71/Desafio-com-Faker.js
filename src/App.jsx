import React from "react";
import "./App.css";
import Filters from "./Components/Filters";

import Returns from "./Components/Returns";

const App = () => {
  return (
    <div className="App">
      <Filters />
      <Returns />
    </div>
  );
};

export default App;

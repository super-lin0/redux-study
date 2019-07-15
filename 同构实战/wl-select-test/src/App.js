import React from "react";
import "./App.css";

import Select from "wl-select";

function App() {
  const handleSchoolChange = university => {
    console.log(university);
  };
  return (
    <div className="app">
      <Select onChange={handleSchoolChange} />
    </div>
  );
}

export default App;

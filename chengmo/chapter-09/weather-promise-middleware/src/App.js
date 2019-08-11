import React from "react";
import "./App.css";

import { view as Weather } from "./weather";
import { view as CitySelector } from "./city_selector";

function App() {
  return (
    <div className="App">
      <CitySelector />
      <Weather />
    </div>
  );
}

export default App;

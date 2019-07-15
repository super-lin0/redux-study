import React from "react";

import ScollPos from "./components/scollPos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScollPos>{position => <h1>{position}</h1>}</ScollPos>
      <div className="spacer" />
    </div>
  );
}

export default App;

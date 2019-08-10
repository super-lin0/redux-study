import React from "react";
import "./App.css";
// import { BComp } from "./components";

import CountDown from "./function_as_child/CountDown";

function App() {
  return (
    <div className="App">
      <CountDown startCount={10}>
        {count => <div>{count > 0 ? count : "周末快乐！"}</div>}
      </CountDown>
    </div>
  );
}

export default App;

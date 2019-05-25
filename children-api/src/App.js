import React from "react";
import "./App.css";
import SlideShow from "./SlideShow";

function App() {
  return (
    <div className="App">
      <SlideShow>
        <img src="http://placekitten.com/300/200" alt="Cat Pic" />
        <img src="http://placekitten.com/300/201" alt="Cat Pic" />
        <img src="http://placekitten.com/300/202" alt="Cat Pic" />
      </SlideShow>
    </div>
  );
}

export default App;

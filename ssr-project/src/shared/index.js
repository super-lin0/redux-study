import React, { Component } from "react";
import { logo } from "./logo.svg";
import "./index.css";

class App extends Component {
  onClick = () => {
    alert("click event trigged");
  };
  render() {
    return (
      <div className="App">
        <div classname="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React in the server</h2>
        </div>
        <p className="App-intro">Isn't this cool? Yes, it's</p>
        <button onClick={this.onClick}>请点击这里</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import BadModal from "./badModal";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="left">
          <h1>Hello left</h1>
        </div>
        <div className="right">
          <h1>Hello right</h1>
          <div>
            <BadModal>
              <h1>Modal title</h1>
              <p>Modal content</p>
            </BadModal>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

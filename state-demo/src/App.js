import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    count: 0
  };
  componentDidMount() {
    document.getElementById("btn-raw").addEventListener("click", this.onClick);
  }

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <div>
          {this.state.count}
          <button id="btn-raw">Increment Raw</button>
        </div>
      </div>
    );
  }
}

export default App;

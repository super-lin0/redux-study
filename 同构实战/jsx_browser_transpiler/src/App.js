import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    err: "/* add your jsx here */",
    input: "",
    output: ""
  };
  update = e => {
    const code = e.target.value;
    try {
      this.setState({
        output: window.Babel.transform(code, { presets: ["es2015", "react"] })
          .code,
        err: ""
      });
    } catch (error) {
      this.setState({ err: error.message });
    }
  };
  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea onChange={this.update} defaultValue={this.state.input} />
          <pre>{this.state.output}</pre>
        </div>
      </div>
    );
  }
}

export default App;

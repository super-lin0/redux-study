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

    // 让setState连续更新的方法
    // 方法一：函数式用法
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));

    // 方法二：把setState更新之后的逻辑封装到一个函数中，并作为第二个参数传给setState
    // this.setState(updater, [callback])
    this.setState({ count: this.state.count + 1 }, () => {
      this.setState({ count: this.state.count + 1 }, () => {
        this.setState({ count: this.state.count + 1 });
      });
    });
  };
  // 扩充state
  setStateAsync = state => {
    return new Promise(resolve => this.setState(state, resolve));
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

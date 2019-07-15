import React, { Component } from "react";
const withMouse = WrappedComponent => {
  return class extends Component {
    state = { x: 0, y: 0 };

    handleMouseMove = event => {
      this.setState({ x: event.clientX, y: event.clientY });
    };
    render() {
      return (
        <div onMouseMove={this.handleMouseMove}>
          <WrappedComponent {...this.props} mouse={this.state} />
        </div>
      );
    }
  };
};

class App extends Component {
  render() {
    const { x, y } = this.props.mouse;
    return (
      <div>
        <h1>The mouse position is ({(x, y)})</h1>
      </div>
    );
  }
}

const wrappedApp = withMouse(App);

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Provider from "react-redux";
import store from "./index";

class modal extends Component {
  componentDidMount() {
    this.modalTarget = document.getElementById("div");
    this.modalTarget.className = "modal";
    document.body.appendChild(this.modalTarget);
    this.renderModal();
  }

  componentWillUpdate() {
    this.renderModal();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  renderModal() {
    ReactDOM.render(
      <Provider store={store}>
        <div>{this.props.children}</div>
      </Provider>,
      this.modalTarget
    );
  }
  render() {
    return <noscript />;
  }
}

export default modal;

/**
 * React 16
 */
// render() {
//   return ReactDOM.createPortal(this.props.children, this.modalTarget)
// }

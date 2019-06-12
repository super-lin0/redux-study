import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {
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
    ReactDOM.render(<div>{this.props.children}</div>, this.modalTarget);
  }
  render() {
    return <noscript />;
  }
}

export default Modal;

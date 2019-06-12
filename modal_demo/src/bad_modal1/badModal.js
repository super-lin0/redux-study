import React, { Component } from "react";

class BadModal extends Component {
  render() {
    return (
      <div>
        <div className="modal">{this.props.children}</div>
      </div>
    );
  }
}

export default BadModal;

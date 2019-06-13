import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";

var WlSelect = function (_Component) {
  _inherits(WlSelect, _Component);

  function WlSelect() {
    _classCallCheck(this, WlSelect);

    return _possibleConstructorReturn(this, (WlSelect.__proto__ || Object.getPrototypeOf(WlSelect)).apply(this, arguments));
  }

  _createClass(WlSelect, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Hello Select"
        )
      );
    }
  }]);

  return WlSelect;
}(Component);

export default WlSelect;
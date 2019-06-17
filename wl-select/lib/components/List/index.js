"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("wl-select/assets/list.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var List = function List(_ref) {
  var opts = _ref.opts;

  return _react2["default"].createElement(
    "div",
    { className: "select-country" },
    _react2["default"].createElement(
      "ul",
      { className: "select-city" },
      opts
    )
  );
};

exports["default"] = List;
module.exports = exports['default'];
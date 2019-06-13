"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WlSelect = function (_Component) {
  (0, _inherits3["default"])(WlSelect, _Component);

  function WlSelect() {
    (0, _classCallCheck3["default"])(this, WlSelect);
    return (0, _possibleConstructorReturn3["default"])(this, (WlSelect.__proto__ || Object.getPrototypeOf(WlSelect)).apply(this, arguments));
  }

  (0, _createClass3["default"])(WlSelect, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "h1",
          null,
          "Hello Select"
        )
      );
    }
  }]);
  return WlSelect;
}(_react.Component);

exports["default"] = WlSelect;
module.exports = exports['default'];
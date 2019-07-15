"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("../components/List/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Country = function Country(_ref) {
  var onClick = _ref.onClick,
      countries = _ref.countries;

  var countryOpts = countries && countries.map(function (item, index) {
    return _react2["default"].createElement(
      "li",
      { key: item, onClick: onClick, id: index },
      item
    );
  });

  return _react2["default"].createElement(_index2["default"], { opts: countryOpts });
};

exports["default"] = Country;
module.exports = exports['default'];
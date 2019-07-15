"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("../components/List/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Province = function Province(_ref) {
  var onClick = _ref.onClick,
      countryIndex = _ref.countryIndex,
      provinces = _ref.provinces;

  var country = provinces && countryIndex && provinces[countryIndex] || [];
  var provs = country["provs"] || [];
  var sortedCountryList = provs.sort(function (a, b) {
    return a["n"].localeCompare(b["n"]);
  });

  var provOpts = sortedCountryList.map(function (item, index) {
    return _react2["default"].createElement(
      "li",
      { key: index, onClick: onClick, id: index },
      item["n"]
    );
  });

  return _react2["default"].createElement(_index2["default"], { opts: provOpts });
};

exports["default"] = Province;
module.exports = exports['default'];
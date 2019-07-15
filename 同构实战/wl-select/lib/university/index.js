"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("../components/List/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var University = function University(_ref) {
  var onClick = _ref.onClick,
      countryIndex = _ref.countryIndex,
      provIndex = _ref.provIndex,
      allUnivList = _ref.allUnivList;

  var country = allUnivList && countryIndex && allUnivList[countryIndex] || [];
  var provList = country["provs"] || [];
  var univList = provList[provIndex] && provList[provIndex]["u"] || [];

  var univOpts = univList.map(function (item, index) {
    return _react2["default"].createElement(
      "li",
      { key: index, onClick: onClick, id: item["n"] },
      item["n"]
    );
  });

  return _react2["default"].createElement(_index2["default"], { opts: univOpts });
};

exports["default"] = University;
module.exports = exports['default'];
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import { COUNTRYLIST } from "./data";

var Country = function (_Component) {
  _inherits(Country, _Component);

  function Country() {
    _classCallCheck(this, Country);

    return _possibleConstructorReturn(this, (Country.__proto__ || Object.getPrototypeOf(Country)).apply(this, arguments));
  }

  _createClass(Country, [{
    key: "render",
    value: function render() {
      var countryOpts = COUNTRYLIST && COUNTRYLIST.map(function (item) {
        return React.createElement(
          "li",
          null,
          item
        );
      });

      return React.createElement(
        "div",
        null,
        countryOpts
      );
    }
  }]);

  return Country;
}(Component);

export default Country;
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import Select from "react-select";

import CountryList from "./country";

var options = [{ value: "chocolate", label: "Chocolate" }, { value: "strawberry", label: "Strawberry" }, { value: "vanilla", label: "Vanilla" }];

var WlSelect = function (_Component) {
  _inherits(WlSelect, _Component);

  function WlSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WlSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WlSelect.__proto__ || Object.getPrototypeOf(WlSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedOption: null
    }, _this.handleChange = function (selectedOption) {
      _this.setState({ selectedOption: selectedOption });
      console.log("Option selected:", selectedOption);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WlSelect, [{
    key: "render",
    value: function render() {
      var selectedOption = this.state.selectedOption;


      return React.createElement(
        "div",
        null,
        React.createElement(CountryList, null),
        React.createElement(Select, {
          value: selectedOption,
          onChange: this.handleChange,
          options: options
        })
      );
    }
  }]);

  return WlSelect;
}(Component);

export default WlSelect;
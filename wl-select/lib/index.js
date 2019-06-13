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

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _country = require("./country");

var _country2 = _interopRequireDefault(_country);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var options = [{ value: "chocolate", label: "Chocolate" }, { value: "strawberry", label: "Strawberry" }, { value: "vanilla", label: "Vanilla" }];

var WlSelect = function (_Component) {
  (0, _inherits3["default"])(WlSelect, _Component);

  function WlSelect() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3["default"])(this, WlSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3["default"])(this, (_ref = WlSelect.__proto__ || Object.getPrototypeOf(WlSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedOption: null
    }, _this.handleChange = function (selectedOption) {
      _this.setState({ selectedOption: selectedOption });
      console.log("Option selected:", selectedOption);
    }, _temp), (0, _possibleConstructorReturn3["default"])(_this, _ret);
  }

  (0, _createClass3["default"])(WlSelect, [{
    key: "render",
    value: function render() {
      var selectedOption = this.state.selectedOption;


      return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(_country2["default"], null),
        _react2["default"].createElement(_reactSelect2["default"], {
          value: selectedOption,
          onChange: this.handleChange,
          options: options
        })
      );
    }
  }]);
  return WlSelect;
}(_react.Component);

exports["default"] = WlSelect;
module.exports = exports['default'];
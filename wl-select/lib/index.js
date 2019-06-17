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

var _data = require("./data");

var _index = require("./country/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./province/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("./university/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = require("./components/List/index");

var _index8 = _interopRequireDefault(_index7);

require("wl-select/assets/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WlSelect = function (_Component) {
  (0, _inherits3["default"])(WlSelect, _Component);

  function WlSelect(props) {
    (0, _classCallCheck3["default"])(this, WlSelect);

    var _this = (0, _possibleConstructorReturn3["default"])(this, (WlSelect.__proto__ || Object.getPrototypeOf(WlSelect)).call(this, props));

    _this.state = {
      selectCountryIndex: "",
      selectProvIndex: "",
      selectSchoolText: "",
      searchText: "",
      searchArr: []
    };

    _this.countryClick = function (e) {
      if (e.target && e.target.nodeName === "LI") {
        _this.search = false;
        var selectCountryIndex = e.target.id;
        console.log(selectCountryIndex);
        _this.setState({
          selectCountryIndex: selectCountryIndex,
          selectProvIndex: "",
          selectSchoolText: "",
          searchText: ""
        });
      }
      e.preventDefault();
    };

    _this.provClick = function (e) {
      if (e.target && e.target.nodeName === "LI") {
        _this.search = false;
        var selectProvIndex = e.target.id;
        _this.setState({ selectProvIndex: selectProvIndex, selectSchoolText: "", searchText: "" });
      }
      e.preventDefault();
    };

    _this.univClick = function (e) {
      if (e.target && e.target.nodeName === "LI") {
        var selectSchoolText = e.target.id;
        _this.setState({ selectSchoolText: selectSchoolText });
        _this.props.onChange(selectSchoolText);
      }
      e.preventDefault();
    };

    _this.searchHandle = function (e) {
      e.preventDefault();
      _this.search = true;
      _this.searching = true;

      var searchVal = e.target.value;
      _this.setState({
        searchText: searchVal,
        selectCountryIndex: "",
        selectSchoolText: ""
      });

      var timeOut = void 0;
      clearTimeout(timeOut);
      timeOut = setTimeout(function () {
        return _this.searchSchool(searchVal);
      }, 1000);
    };

    _this.searchSchool = function (keyword) {
      var schoolArr = [];

      _data.allUnivList.forEach(function (country) {
        country.provs.forEach(function (province) {
          province.u.forEach(function (schoolName) {
            schoolArr.push(schoolName.n);
          });
        });
      });

      var searchArr = schoolArr.filter(function (matchName) {
        if (matchName) {
          matchName = matchName.toLowerCase();
        }
        keyword = keyword.replace(/\s+/, " ").toLowerCase();
        if (matchName.indexOf(keyword) !== -1) {
          return matchName;
        }
        return false;
      }) || [];

      if (searchArr.length > 0) {
        _this.setState({ searchArr: searchArr });
      }
      if (!keyword) {
        _this.setState({ searchArr: [] });
      }
      _this.searching = false;
    };

    _this.userInputHandle = function (e) {
      e.preventDefault();
      var selectSchoolText = e.target.value;
      _this.setState({ selectSchoolText: selectSchoolText });
      _this.props.onChange(selectSchoolText);
    };

    _this.search = false;
    _this.searching = false;
    return _this;
  }

  (0, _createClass3["default"])(WlSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          selectCountryIndex = _state.selectCountryIndex,
          selectProvIndex = _state.selectProvIndex,
          selectSchoolText = _state.selectSchoolText,
          searchText = _state.searchText,
          searchArr = _state.searchArr;


      var isUserInput = Number(selectCountryIndex) === 15 || Number(selectCountryIndex) === 14;

      var isUserSelect = !isUserInput && selectCountryIndex !== "";

      var searchUniOpts = [];

      if (searchArr.length > 0) {
        searchUniOpts = searchArr.map(function (item, index) {
          return _react2["default"].createElement(
            "li",
            { key: index, onClick: _this2.univClick, id: item },
            item
          );
        });
      }

      return _react2["default"].createElement(
        "div",
        { className: "root" },
        _react2["default"].createElement(
          "div",
          { className: "search-val" },
          _react2["default"].createElement(
            "ul",
            null,
            _react2["default"].createElement(
              "li",
              null,
              "\u5FEB\u901F\u641C\u7D22\uFF1A",
              _react2["default"].createElement("input", { className: "search-input", onChange: this.searchHandle })
            )
          )
        ),
        _react2["default"].createElement(_index2["default"], { countries: _data.COUNTRYLIST, onClick: this.countryClick }),
        isUserSelect && selectCountryIndex && _react2["default"].createElement(_index4["default"], {
          provinces: _data.allUnivList,
          countryIndex: selectCountryIndex,
          onClick: this.provClick
        }),
        this.searching && !!searchText ? "Search..." : isUserSelect && selectCountryIndex && _react2["default"].createElement(_index6["default"], {
          allUnivList: _data.allUnivList,
          countryIndex: selectCountryIndex,
          provIndex: selectProvIndex,
          onClick: this.univClick
        }),
        this.search && (searchUniOpts.length > 0 ? _react2["default"].createElement(_index8["default"], { opts: searchUniOpts }) : "No result"),
        isUserInput && _react2["default"].createElement(
          "div",
          { className: "search-val" },
          _react2["default"].createElement(
            "ul",
            null,
            _react2["default"].createElement(
              "li",
              null,
              "\u8F93\u5165\uFF1A",
              _react2["default"].createElement("input", { className: "user-input", onChange: this.userInputHandle })
            )
          )
        ),
        selectSchoolText && _react2["default"].createElement(
          "div",
          { className: "sel-school" },
          "\u5DF2\u9009\u62E9\uFF1A",
          selectSchoolText
        )
      );
    }
  }]);
  return WlSelect;
}(_react.Component);

exports["default"] = WlSelect;
module.exports = exports['default'];
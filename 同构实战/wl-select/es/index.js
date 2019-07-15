import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import { COUNTRYLIST, allUnivList } from "./data";

import CountryList from "./country/index.js";
import ProvList from "./province/index.js";
import UniversityList from "./university/index.js";
import List from "./components/List/index";

import "wl-select/assets/index.css";

var WlSelect = function (_Component) {
  _inherits(WlSelect, _Component);

  function WlSelect(props) {
    _classCallCheck(this, WlSelect);

    var _this = _possibleConstructorReturn(this, (WlSelect.__proto__ || Object.getPrototypeOf(WlSelect)).call(this, props));

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

      allUnivList.forEach(function (country) {
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

  _createClass(WlSelect, [{
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
          return React.createElement(
            "li",
            { key: index, onClick: _this2.univClick, id: item },
            item
          );
        });
      }

      return React.createElement(
        "div",
        { className: "root" },
        React.createElement(
          "div",
          { className: "search-val" },
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              "\u5FEB\u901F\u641C\u7D22\uFF1A",
              React.createElement("input", { className: "search-input", onChange: this.searchHandle })
            )
          )
        ),
        React.createElement(CountryList, { countries: COUNTRYLIST, onClick: this.countryClick }),
        isUserSelect && selectCountryIndex && React.createElement(ProvList, {
          provinces: allUnivList,
          countryIndex: selectCountryIndex,
          onClick: this.provClick
        }),
        this.searching && !!searchText ? "Search..." : isUserSelect && selectCountryIndex && React.createElement(UniversityList, {
          allUnivList: allUnivList,
          countryIndex: selectCountryIndex,
          provIndex: selectProvIndex,
          onClick: this.univClick
        }),
        this.search && (searchUniOpts.length > 0 ? React.createElement(List, { opts: searchUniOpts }) : "No result"),
        isUserInput && React.createElement(
          "div",
          { className: "search-val" },
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              "\u8F93\u5165\uFF1A",
              React.createElement("input", { className: "user-input", onChange: this.userInputHandle })
            )
          )
        ),
        selectSchoolText && React.createElement(
          "div",
          { className: "sel-school" },
          "\u5DF2\u9009\u62E9\uFF1A",
          selectSchoolText
        )
      );
    }
  }]);

  return WlSelect;
}(Component);

export default WlSelect;
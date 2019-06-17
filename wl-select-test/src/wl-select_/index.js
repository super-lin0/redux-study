import React, { Component } from "react";
import { COUNTRYLIST, allUnivList } from "./data";

import CountryList from "./country/index.js.js";
import ProvList from "./province/index.js.js";
import UniversityList from "./university/index.js.js";
import List from "./components/List/index";

import "./index.css";

class WlSelect extends Component {
  constructor(props) {
    super(props);
    this.search = false;
    this.searching = false;
  }

  state = {
    selectCountryIndex: "",
    selectProvIndex: "",
    selectSchoolText: "",
    searchText: "",
    searchArr: []
  };

  countryClick = e => {
    if (e.target && e.target.nodeName === "LI") {
      this.search = false;
      const selectCountryIndex = e.target.id;
      console.log(selectCountryIndex);
      this.setState({
        selectCountryIndex,
        selectProvIndex: "",
        selectSchoolText: "",
        searchText: ""
      });
    }
    e.preventDefault();
  };

  provClick = e => {
    if (e.target && e.target.nodeName === "LI") {
      this.search = false;
      const selectProvIndex = e.target.id;
      this.setState({ selectProvIndex, selectSchoolText: "", searchText: "" });
    }
    e.preventDefault();
  };

  univClick = e => {
    if (e.target && e.target.nodeName === "LI") {
      const selectSchoolText = e.target.id;
      this.setState({ selectSchoolText });
      this.props.onChange(selectSchoolText);
    }
    e.preventDefault();
  };

  searchHandle = e => {
    e.preventDefault();
    this.search = true;
    this.searching = true;

    const searchVal = e.target.value;
    this.setState({ searchText: searchVal, selectCountryIndex: "" });

    let timeOut;
    clearTimeout(timeOut);
    timeOut = setTimeout(() => this.searchSchool(searchVal), 1000);
  };

  searchSchool = keyword => {
    const schoolArr = [];

    allUnivList.forEach(country => {
      country.provs.forEach(province => {
        province.u.forEach(schoolName => {
          schoolArr.push(schoolName.n);
        });
      });
    });

    const searchArr =
      schoolArr.filter(matchName => {
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
      this.setState({ searchArr: searchArr });
    }
    if (!keyword) {
      this.setState({ searchArr: [] });
    }
    this.searching = false;
  };

  userInputHandle = e => {
    e.preventDefault();
    const selectSchoolText = e.target.value;
    this.setState({ selectSchoolText });
    this.props.onChange(selectSchoolText);
  };

  render() {
    const {
      selectCountryIndex,
      selectProvIndex,
      selectSchoolText,
      searchText,
      searchArr
    } = this.state;

    const isUserInput =
      Number(selectCountryIndex) === 15 || Number(selectCountryIndex) === 14;

    const isUserSelect = !isUserInput && selectCountryIndex !== "";

    let searchUniOpts = [];

    if (searchArr.length > 0) {
      searchUniOpts = searchArr.map((item, index) => (
        <li key={index} onClick={this.univClick} id={item}>
          {item}
        </li>
      ));
    }

    return (
      <div className="root">
        <div className="search-val">
          <ul>
            <li>
              快速搜索：
              <input className="search-input" onChange={this.searchHandle} />
            </li>
          </ul>
        </div>
        <CountryList countries={COUNTRYLIST} onClick={this.countryClick} />
        {isUserSelect && selectCountryIndex && (
          <ProvList
            provinces={allUnivList}
            countryIndex={selectCountryIndex}
            onClick={this.provClick}
          />
        )}
        {this.searching && !!searchText
          ? "Search..."
          : isUserSelect &&
            selectCountryIndex && (
              <UniversityList
                allUnivList={allUnivList}
                countryIndex={selectCountryIndex}
                provIndex={selectProvIndex}
                onClick={this.univClick}
              />
            )}
        {this.search &&
          (searchUniOpts.length > 0 ? (
            <List opts={searchUniOpts} />
          ) : (
            "No result"
          ))}
        {isUserInput && (
          <div className="search-val">
            <ul>
              <li>
                输入：
                <input className="user-input" onChange={this.userInputHandle} />
              </li>
            </ul>
          </div>
        )}
        {selectSchoolText && (
          <div className="sel-school">已选择：{selectSchoolText}</div>
        )}
      </div>
    );
  }
}

export default WlSelect;

import React, { Component } from "react";
import { COUNTRYLIST, allUnivList } from "./data";

import CountryList from "./country/index.js";
import ProvList from "./province/index.js";
import UniversityList from "./university/index.js";

import "./index.css";

class WlSelect extends Component {
  state = {
    selectCountryIndex: "",
    selectProvIndex: "",
    selectSchoolText: ""
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  countryClick = e => {
    if (e.target && e.target.nodeName === "LI") {
      const selectCountryIndex = e.target.id;
      this.setState({ selectCountryIndex });
    }
  };
  provClick = e => {
    if (e.target && e.target.nodeName === "LI") {
      const selectProvIndex = e.target.id;
      this.setState({ selectProvIndex });
    }
  };
  univClick = e => {
    if (e.target && e.target.nodeName === "LI") {
      const selectSchoolText = e.target.id;
      this.setState({ selectSchoolText });
      this.props.onChange(selectSchoolText);
    }
  };
  render() {
    const {
      selectCountryIndex,
      selectProvIndex,
      selectSchoolText
    } = this.state;

    return (
      <div className="root">
        <CountryList countries={COUNTRYLIST} onClick={this.countryClick} />
        <ProvList
          provinces={allUnivList}
          countryIndex={selectCountryIndex}
          onClick={this.provClick}
        />
        <UniversityList
          allUnivList={allUnivList}
          countryIndex={selectCountryIndex}
          provIndex={selectProvIndex}
          onClick={this.univClick}
        />
        {selectSchoolText ? <span>已选择：{selectSchoolText}</span> : ""}
      </div>
    );
  }
}

export default WlSelect;

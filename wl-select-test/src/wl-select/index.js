import React, { Component } from "react";
import Select from "react-select";
import { COUNTRYLIST, allUnivList } from "./data";

import CountryList from "./country/index.js";
import ProvList from "./province/index.js";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class WlSelect extends Component {
  state = {
    selectedOption: null,
    selectCountryIndex: 0
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
  render() {
    const { selectedOption, selectCountryIndex } = this.state;

    return (
      <div>
        <CountryList countries={COUNTRYLIST} onClick={this.countryClick} />
        <ProvList provinces={allUnivList} countryIndex={selectCountryIndex} />
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

export default WlSelect;

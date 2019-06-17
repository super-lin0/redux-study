import React, { Component } from "react";
import { COUNTRYLIST, allUnivList } from "./data";

import CountryList from "./country/index.js";
import ProvList from "./province/index.js";

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
      </div>
    );
  }
}

export default WlSelect;

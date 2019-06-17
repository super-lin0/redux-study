import React, { Component } from "react";
import { COUNTRYLIST, allUnivList } from "./data";

import CountryList from "./country/index.js";
import ProvList from "./province/index.js";
import UniversityList from "./university/index.js";

class WlSelect extends Component {
  state = {
    selectCountryIndex: 0,
    selectProvIndex: 0
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
  render() {
    const { selectCountryIndex, selectProvIndex } = this.state;

    return (
      <div>
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
      </div>
    );
  }
}

export default WlSelect;

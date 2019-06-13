import React, { Component } from "react";
import { COUNTRYLIST } from "../data";
import "./index.css";

class Country extends Component {
  render() {
    const countryOpts =
      COUNTRYLIST && COUNTRYLIST.map(item => <li key={item}>{item}</li>);

    return (
      <div className="select-country">
        <ul className="select-city">{countryOpts}</ul>
      </div>
    );
  }
}

export default Country;

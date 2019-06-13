import React, { Component } from "react";
import { COUNTRYLIST } from "./data";

class Country extends Component {
  render() {
    const countryOpts = COUNTRYLIST && COUNTRYLIST.map(item => <li>{item}</li>);

    return <div>{countryOpts}</div>;
  }
}

export default Country;

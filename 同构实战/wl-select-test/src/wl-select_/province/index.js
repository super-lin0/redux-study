import React from "react";
import List from "../components/List/index.js.js";

const Province = ({ onClick, countryIndex, provinces }) => {
  const country = (provinces && countryIndex && provinces[countryIndex]) || [];
  const provs = country["provs"] || [];
  const sortedCountryList = provs.sort((a, b) => a["n"].localeCompare(b["n"]));

  const provOpts = sortedCountryList.map((item, index) => (
    <li key={index} onClick={onClick} id={index}>
      {item["n"]}
    </li>
  ));

  return <List opts={provOpts} />;
};

export default Province;

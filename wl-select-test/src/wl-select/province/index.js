import React from "react";
import "./index.css";

const Province = ({ onClick, countryIndex, provinces }) => {
  const country = (provinces && countryIndex && provinces[countryIndex]) || [];
  const provs = country["provs"] || [];
  const sortedCountryList = provs.sort((a, b) => a["n"].localeCompare(b["n"]));

  const provOpts = sortedCountryList.map((item, index) => (
    <li key={item} onClick={onClick} id={index}>
      {item["n"]}
    </li>
  ));

  return (
    <div className="select-country">
      <ul className="select-city">{provOpts}</ul>
    </div>
  );
};

export default Province;

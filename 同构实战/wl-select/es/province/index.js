import React from "react";
import List from "../components/List/index.js";

var Province = function Province(_ref) {
  var onClick = _ref.onClick,
      countryIndex = _ref.countryIndex,
      provinces = _ref.provinces;

  var country = provinces && countryIndex && provinces[countryIndex] || [];
  var provs = country["provs"] || [];
  var sortedCountryList = provs.sort(function (a, b) {
    return a["n"].localeCompare(b["n"]);
  });

  var provOpts = sortedCountryList.map(function (item, index) {
    return React.createElement(
      "li",
      { key: index, onClick: onClick, id: index },
      item["n"]
    );
  });

  return React.createElement(List, { opts: provOpts });
};

export default Province;
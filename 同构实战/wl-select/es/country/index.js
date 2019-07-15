import React from "react";

import List from "../components/List/index.js";

var Country = function Country(_ref) {
  var onClick = _ref.onClick,
      countries = _ref.countries;

  var countryOpts = countries && countries.map(function (item, index) {
    return React.createElement(
      "li",
      { key: item, onClick: onClick, id: index },
      item
    );
  });

  return React.createElement(List, { opts: countryOpts });
};

export default Country;
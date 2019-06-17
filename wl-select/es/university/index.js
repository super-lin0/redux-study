import React from "react";

import List from "../components/List/index";

var University = function University(_ref) {
  var onClick = _ref.onClick,
      countryIndex = _ref.countryIndex,
      provIndex = _ref.provIndex,
      allUnivList = _ref.allUnivList;

  var country = allUnivList && countryIndex && allUnivList[countryIndex] || [];
  var provList = country["provs"] || [];
  var univList = provList[provIndex] && provList[provIndex]["u"] || [];

  var univOpts = univList.map(function (item, index) {
    return React.createElement(
      "li",
      { key: index, onClick: onClick, id: item["n"] },
      item["n"]
    );
  });

  return React.createElement(List, { opts: univOpts });
};

export default University;
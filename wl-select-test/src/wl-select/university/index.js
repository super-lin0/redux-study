import React from "react";

import List from "../components/List/index";

const Province = ({ onClick, countryIndex, provIndex, allUnivList }) => {
  const country =
    (allUnivList && countryIndex && allUnivList[countryIndex]) || [];
  const provList = country["provs"] || [];
  const univList = (provList[provIndex] && provList[provIndex]["u"]) || [];

  const univOpts = univList.map((item, index) => (
    <li key={index} onClick={onClick} id={item["n"]}>
      {item["n"]}
    </li>
  ));

  return <List opts={univOpts} />;
};

export default Province;

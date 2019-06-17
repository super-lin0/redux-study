import React from "react";
import "./index.css";

const Province = ({ onClick, countryIndex, provIndex, allUnivList }) => {
  const country =
    (allUnivList && countryIndex && allUnivList[countryIndex]) || [];
  const provList = country["provs"] || [];
  const univList = (provList[provIndex] && provList[provIndex]["u"]) || [];

  const univOpts = univList.map((item, index) => (
    <li key={index} onClick={onClick} id={index}>
      {item["n"]}
    </li>
  ));

  return (
    <div className="select-country">
      <ul className="select-city">{univOpts}</ul>
    </div>
  );
};

export default Province;

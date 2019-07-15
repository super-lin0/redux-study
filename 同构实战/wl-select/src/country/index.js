import React from "react";

import List from "../components/List/index.js";

const Country = ({ onClick, countries }) => {
  const countryOpts =
    countries &&
    countries.map((item, index) => (
      <li key={item} onClick={onClick} id={index}>
        {item}
      </li>
    ));

  return <List opts={countryOpts} />;
};

export default Country;

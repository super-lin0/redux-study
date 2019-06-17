import React from "react";
import "./index.css";

const Country = ({ onClick, countries }) => {
  const countryOpts =
    countries &&
    countries.map((item, index) => (
      <li key={item} onClick={onClick} id={index}>
        {item}
      </li>
    ));

  return (
    <div className="select-country">
      <ul className="select-city">{countryOpts}</ul>
    </div>
  );
};

export default Country;

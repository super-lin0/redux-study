import React from "react";

const Picker = ({ value, onChange, options }) => (
  <span>
    <h1>{value}</h1>
    <select onChange={e => onChange(e.target.value)} value={value}>
      {options.map(item => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  </span>
);

export default Picker;

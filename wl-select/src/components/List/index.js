import React from "react";
import "wl-select/assets/list.css";

const List = ({ opts }) => {
  return (
    <div className="select-country">
      <ul className="select-city">{opts}</ul>
    </div>
  );
};

export default List;

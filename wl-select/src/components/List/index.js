import React from "react";
import "./index.less";

const List = ({ opts }) => {
  return (
    <div className="select-country">
      <ul className="select-city">{opts}</ul>
    </div>
  );
};

export default List;

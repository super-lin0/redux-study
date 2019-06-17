import React from "react";
import "wl-select/assets/list.css";

var List = function List(_ref) {
  var opts = _ref.opts;

  return React.createElement(
    "div",
    { className: "select-country" },
    React.createElement(
      "ul",
      { className: "select-city" },
      opts
    )
  );
};

export default List;
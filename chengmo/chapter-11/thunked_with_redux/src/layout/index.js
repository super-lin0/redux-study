import React, { Component } from "react";
import { Link } from "react-router-dom";

const liStyle = {
  flodt: "left",
  display: "inline-block",
  margin: "10px 20px"
};

class Layout extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li style={liStyle}>
              <Link to="/home">Home</Link>
            </li>
            <li style={liStyle}>
              <Link to="/about">About</Link>
            </li>
            <li style={liStyle}>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Layout;

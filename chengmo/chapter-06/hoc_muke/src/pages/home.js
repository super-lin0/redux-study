import React, { Component } from "react";
import tabbar from "../components";

@tabbar
class Home extends Component {
  render() {
    return (
      <div>
        <img className="bg" src="./imgs/home_bj.jpg" alt="" />
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import tabbar from "../components";

@tabbar
class User extends Component {
  render() {
    return (
      <div>
        <img className="bg" src="./imgs/user_bg.jpg" alt="" />
      </div>
    );
  }
}

export default User;

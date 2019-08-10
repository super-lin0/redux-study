import React, { Component } from "react";
import tabbar from "../components";

@tabbar
class Category extends Component {
  render() {
    return (
      <div>
        <img className="bg" src="./imgs/category_bg.jpg" alt="" />
      </div>
    );
  }
}

export default Category;

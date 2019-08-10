import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

const tabbarArr = [
  {
    key: 1,
    url: "icon-home",
    text: "首页",
    path: "/home"
  },
  {
    key: 2,
    url: "icon-fenleishousuo",
    text: "分类",
    path: "/category"
  },
  {
    key: 3,
    url: "icon-cart",
    text: "购物车",
    path: "/cart"
  },
  {
    key: 4,
    url: "icon-mine-red",
    text: "我的",
    path: "/user"
  }
];

class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  render() {
    const route = window.location.href;
    return (
      <div className="tabbar">
        <div className="tabbar-content">
          {tabbarArr.map(({ url, key, text, path }) => (
            <Link
              key={key}
              to={path}
              className={
                "tabbar-item" + (route.indexOf(path) > -1 ? " active" : "")
              }
            >
              <div className={`iconfont ${url}`} />
              <div>{text}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Tabbar;

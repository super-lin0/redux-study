import React, { Component } from "react";
import tabbar from "../components";

@tabbar
class Cart extends Component {
  render() {
    return (
      <div>
        <img className="bg" src="./imgs/cart.jpg" alt="" />
      </div>
    );
  }
}

export default Cart;

import React from "react";
import Cart1 from "./shoppingcart/Cart1";
import Main from "./shoppingcart/Main";
import Sidebar from "./shoppingcart/Sidebar";
import products from "../data.json";

function Carty() {
  return (
    <div className="wrapper flex space-between">
      <Sidebar products={products} />
      <Main products={products} />
      <Cart1 />
    </div>
  );
}

export default Carty;

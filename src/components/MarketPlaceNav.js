import React, { useState } from "react";
import logo from "../image/logo1.svg";
import { Nav, NavLink, NavMenu, Bars } from "./NavbarElements";
import { BsCart2 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
export default function MarketplaceNav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <header>
      <div className="logo">
        <img src={logo} alt={logo.svg} />
      </div>
      <div>
        <h3>Marketplace</h3>
      </div>
      <Nav>
        <div className="hamburger">
          <Bars
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          />
        </div>
        <NavMenu
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <NavLink to="/">Home</NavLink>

          <NavLink to="/orders">Orders</NavLink>

          <NavLink to="/">
            <button className="btn btn-success">Login</button>
          </NavLink>
          <NavLink to="/orders">
            {" "}
            <BsCart2 />
          </NavLink>
          <NavLink to="/orders">
            {" "}
            <BsPerson />
          </NavLink>
        </NavMenu>
      </Nav>
    </header>
  );
}

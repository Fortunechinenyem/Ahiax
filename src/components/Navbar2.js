import React, { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiSearch } from "react-icons/bi";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./NavbarElements";
import logo from "../image/logo1.svg";

const Navbar2 = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <header>
      <div className="search ">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
      <div className="logo">
        <img src={logo} alt={logo.svg} />
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
          <NavDropdown title="Services" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Platform</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Brands</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Partner</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Sales & Network</NavDropdown.Item>
          </NavDropdown>

          <NavLink to="/marketplace">Marketplace</NavLink>
          <NavBtn>
            <NavLink to="/">
              <button className="btn btn-success">Login</button>
            </NavLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </header>
  );
};

export default Navbar2;

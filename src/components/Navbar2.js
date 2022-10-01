import React, { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiSearch } from "react-icons/bi";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./NavbarElements";
import logo from "../image/logo1.svg";
import { Link } from "react-router-dom";

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
          <NavDropdown
            title="Services"
            id="nav-dropdown"
            className="nav__list2"
          >
            <NavDropdown.Item eventKey="4.1">
              <Link to="/publishers" className="nav__link">
                Publishers
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">
              <Link to="/brands" className="nav__link">
                Brands
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">
              <Link to="/partner" className="nav__link">
                Partner
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">
              <Link to="/salesnetwork" className="nav__link">
                Sales-Network
              </Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavLink to="/marketplace">Marketplace</NavLink>
          <NavBtn></NavBtn>
        </NavMenu>
      </Nav>
      <button className="btn btn-success">
        <Link to="/login">Login</Link>
      </button>
    </header>
  );
};

export default Navbar2;

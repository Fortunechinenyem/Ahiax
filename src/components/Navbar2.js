import React from "react";
import styled from "styled-components";
import { NavLink as Link, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../image/logo1.svg";
import NavCartButton from "./productcart/NavCartButton";
const Nav = styled("nav")`
  padding: 1.5rem 0;
  background-color: #268f7d;
`;
const LinksWrapper = styled("ul")`
  background-color: #fff;
  padding: 0 5rem;
`;
const SearchNavWrapper = styled("div")``;
const ButtonWrapper = styled("div")` display: flex;justify-content: flex-end;
 @media screen and (max-width: 1024px) { justify-content: flex-start; margin-top: 0.5rem;  }`;
const SearchForm = styled("form")`
  margin-right: 5rem;
`;
const SearchInput = styled("input")`
  border-radius: 0px;
  outline: none;
  border: none;
`;
const Button = styled("button")`
  padding: 0.3rem 1.3rem;
  border: none;
`;
const LogoWrapper = styled("div")`
  margin-right: 5rem;
`;
const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoWrapper className="logo" onClick={() => navigate("/")}>
      <img src={logo} alt={logo.svg} />
    </LogoWrapper>
  );
};
const NavbarToggler = () => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};
const SearchBar = () => {
  return (
    <SearchForm className="form-inline my-2 my-lg-0">
      <SearchInput
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </SearchForm>
  );
};
const NavLinks = () => {
  return (
    <LinksWrapper className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home <span className="sr-only">(current)</span>
        </Link>
      </li>

      <NavDropdown title="Services" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">
          <Link to="/platform" className="nav-link">
            Platform
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          <Link to="/publishers" className="nav-link">
            Publishers
          </Link>
        </NavDropdown.Item>

        <NavDropdown.Item eventKey="4.3">
          <Link to="/brands" className="nav-link">
            Brands
          </Link>
        </NavDropdown.Item>

        <NavDropdown.Item eventKey="4.4">
          <Link to="/partner" className="nav-link">
            Partner Marketing
          </Link>
        </NavDropdown.Item>

        <NavDropdown.Item eventKey="4.5">
          <Link to="/salesnetwork" className="nav-link">
            Sales-Network
          </Link>
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Marketplace" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">
          <Link to="/marketplace" className="nav-link"></Link>
        </NavDropdown.Item>

        <NavDropdown.Item eventKey="4.1">
          <Link to="/fashion" className="nav-link">
            Fashion
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          <Link to="/homegarden" className="nav-link">
            Home and Garden
          </Link>
        </NavDropdown.Item>

        <NavDropdown.Item eventKey="4.3">
          <Link to="/mobilecomputing" className="nav-link">
            Mobile and Computing
          </Link>
        </NavDropdown.Item>

        <NavDropdown.Item eventKey="4.4">
          <Link to="/healthbeauty" className="nav-link">
            Health and Beauty
          </Link>
        </NavDropdown.Item>

        <NavDropdown.Item eventKey="4.5">
          <Link to="/realestate" className="nav-link">
            Real Estate
          </Link>
        </NavDropdown.Item>
      </NavDropdown>
    </LinksWrapper>
  );
};
const LoginButton = () => {
  return (
    <Button>
      <Link to="/login" className="nav-link">
        Login
      </Link>
    </Button>
  );
};
const NavBar = () => {
  return (
    <Nav className="navbar navbar-expand-lg px-3">
      <Logo />
      <NavbarToggler />
      <SearchNavWrapper
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <SearchBar />
        <NavLinks />
        <ButtonWrapper>
          <LoginButton className="m-2" />
          <NavCartButton className="m-2" />
        </ButtonWrapper>
      </SearchNavWrapper>
    </Nav>
  );
};
export default NavBar;

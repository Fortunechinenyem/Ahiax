import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/ba.png";

const BrandHero = () => {
  return (
    <section className="container ">
      <div className="d-flex row g-5 mx-auto ">
        <img
          src={logo}
          alt={BrandHero.png}
          className="col-md "
          height=""
          style={{ objectFit: "cover" }}
        />
        <div className="col-md text-center">
          <h1>​Acquire customers and build your business in one place </h1>
          <p>We've set our standards high for you and keep them there.</p>
          <Link to="/platform" className="btn btn-secondary mt-4 ">
            Grow your Sales
          </Link>
        </div>
      </div>
    </section>
  );
};
export default BrandHero;

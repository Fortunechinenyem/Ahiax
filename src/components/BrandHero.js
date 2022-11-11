import React from "react";
import { Link } from "react-router-dom";

const BrandHero = () => {
  return (
    <section className="brandhero ">
      <div className="">
        <div className="herotext">
          <h1>​Acquire customers and build your business in one place </h1>
          <p>We've set our standards high for you and keep them there.</p>
        </div>
        <Link to="/platform" className="btn btn-light mt-4">
          Grow your Sales
        </Link>
      </div>
    </section>
  );
};
export default BrandHero;

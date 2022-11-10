import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero ">
      <div className="">
        <div className="herotext">
          <h1>One Platform, Limitless Potential! </h1>
          <Link to="/platform" className="btn btn-light mt-4">
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;

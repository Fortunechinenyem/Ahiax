import React from "react";
import { Link } from "react-router-dom";

const AffiliateHero = () => {
  return (
    <section className="affiliatehero ">
      <div className="">
        <div className="herotext">
          <h1>The Power of 'Affiliate' </h1>
          <p>
            Affiliate marketing is a performance-driven channel that enables a
            rich ecosystem of partnerships to reach, influence, and convert
            shoppers worldwide at every part of their purchase journey, both
            online and offline. ElanX is the place where partnerships and
            technology converge to create valuable shopping experiences that
            result in scalable, profitable growth.
          </p>
          <Link to="/affiliateform" className="btn btn-light mt-4">
            Become An Affiliate
          </Link>
        </div>
      </div>
    </section>
  );
};
export default AffiliateHero;

import React from "react";

import logo from "../image/afa.PNG";

const AffiliateHero = () => {
  return (
    <section className="container ">
      <div className="d-flex row g-5 mx-auto ">
        <img
          src={logo}
          alt={AffiliateHero.png}
          className="col-md "
          height=""
          style={{ objectFit: "cover" }}
        />
        <div className="col-md text-center">
          <h1>​The Power  of 'Affiliate'</h1>
          <p>
            ​Affiliate marketing is a performance-driven channel that enables a
            rich ecosystem of partnerships to reach, influence, and convert
            shoppers worldwide at every part of their purchase journey, both
            online and offline. ElanX is the place where partnerships and
            technology converge to create valuable shopping experiences that
            result in scalable, profitable growth.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AffiliateHero;

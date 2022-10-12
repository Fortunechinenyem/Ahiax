import React from "react";
import logo from "../image/brandhero.PNG";
const BrandHero = () => {
  return (
    <section className="mt-3 mb-3">
      <div className="d-flex">
        <div className="py-5 w-50">
          <h1>Profitably Acquuire Customers At Scale, With Zero Risk</h1>
          <p>We've set our standards high for you and keep them there.</p>
        </div>
        <div className="w-50">
          <img src={logo} alt={BrandHero.jpg} />
        </div>
      </div>
    </section>
  );
};
export default BrandHero;

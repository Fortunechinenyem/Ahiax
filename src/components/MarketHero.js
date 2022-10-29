import React from "react";
import logo from "../image/markethero.PNG";
const MarketHero = () => {
  return (
    <section className="mt-3 mb-3  text-black ">
      <div className="d-flex">
        <div className="py-5 w-50">
          <h1>Extra 30% off Mobile Accessories</h1>
          <p>Limited Time Offer</p>
          <button className="btn btn-success">Get 30% Off</button>
        </div>
        <div className="w-50">
          <img src={logo} alt={MarketHero.jpg} />
        </div>
      </div>
    </section>
  );
};
export default MarketHero;

import React from "react";
import logo from "../image/p1.jpg";
const Hero = () => {
  return (
    <section className="mt-3 mb-3  text-black ">
      <div className="d-flex col-sm-12">
        <div className="py-5 w-50 ">
          <h1>
            Driven by the Passion to build a sales legacy for African businesses
            and Aficans
          </h1>
        </div>
        <div className="w-50 ">
          <img src={logo} alt={Hero.jpg} />
        </div>
      </div>
    </section>
  );
};
export default Hero;

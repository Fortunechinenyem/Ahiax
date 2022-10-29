import React from "react";
import logo from "../image/p1.jpg";
const Hero = () => {
  return (
    <section className="mt-3 mb-5  text-black ">
      <div className="d-flex container row mx-auto">
        <div className="py-5 w-50 ">
          <h1>
            Driven by the Passion to build a sales legacy for African businesses
            and Aficans
          </h1>
        </div>
        <div className="w-50 ">
          <img
            src={logo}
            alt={Hero.jpg}
            height="300px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;

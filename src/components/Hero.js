import React from "react";
import logo from "../image/homeh (1).png";
const Hero = () => {
  return (
    <section className="mt-3 mb-5  text-black ">
      <div className="w-75 mx-auto">
        <div className=" ">
          <img
            src={logo}
            alt={Hero.jpg}
            height=""
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;

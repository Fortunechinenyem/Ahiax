import React from "react";
import logo from "../image/platformhero.PNG";

const PlatformHero = () => {
  return (
    <section className=" text-center container">
      <div className="d-flex row g-5 mx-auto ">
        <img
          src={logo}
          alt={PlatformHero.PNG}
          className="col-md "
          height=""
          style={{ objectFit: "cover" }}
        />

        <h1 className="herotext col-md">
          Our Approach is to Push Industries and Partners Forward
        </h1>
      </div>
    </section>
  );
};
export default PlatformHero;

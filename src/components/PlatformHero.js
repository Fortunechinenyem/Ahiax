import React from "react";
import logo from "../image/platformhero.PNG";
const PlatformHero = () => {
  return (
    <section className="mt-3 mb-3">
      <div className="d-flex">
        <div className="w-50">
          <img src={logo} alt={PlatformHero.jpg} />
        </div>
        <div className=" text-black w-50 ">
          <h3 className="text-center mt-5">
            Our Approach is to Push Industries and Partners Forward.
          </h3>
          <p>
            Whether you're looking to start, scale, or expand your business
            reach or maybe create wealth as a sales consultant, publisher or
            influencer, Ahiax can help. Join sellers and thousands of affiliates
            who are finding success on the Ahiax platform.
          </p>
        </div>
      </div>
    </section>
  );
};
export default PlatformHero;

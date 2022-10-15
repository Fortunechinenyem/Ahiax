import React from "react";
import logo from "../image/partnerhero.PNG";
const PartnerHero = () => {
  return (
    <section className="mt-3 mb-3">
      <div className="d-flex">
        <div className="w-75">
          <img src={logo} alt={PartnerHero.jpg} />
        </div>
        <div className=" text-black ">
          <h3 className="text-center mt-5 py-5">
            Earn More Per Click With Ahiax
          </h3>
          <p>
            Take advantage of our various performance marketing plans to drive
            more quality leads and sales.{" "}
          </p>
          <div className="text-center  mb-3">
            <button className="btn btn-success ">See Packages</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PartnerHero;

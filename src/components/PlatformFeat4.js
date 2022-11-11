import React from "react";
import logo from "../image/pa.png";

const PlatformFeat4 = () => {
  return (
    <section className="mt-3 mb-3 platformfeat4">
      <div className="text-center">
        <h1 className="text-center mb-5">
          ​Unparalleled industry expertise and top notch strategic partners.
        </h1>
      </div>

      <div className="d-flex container row g-5 mx-auto ">
        <div className="col-md-4 ">
          <div>
            <h4>Brands</h4>
            <p>
              ​Acquire customers at scale, with zero risk. For brands looking
              for a 360 sales platform with a mix of a sales network, and
              experienced performance marketing.
            </p>
          </div>
          <div>
            <h4>Media Partners</h4>
            <p>
              ​As a publisher and   influencer. you can earn more from your
              traffic by promoting brands people love.
            </p>
          </div>
        </div>
        <div className="col-md-4 ">
          <img src={logo} alt={PlatformFeat4.jpg} />
        </div>
        <div className="col-md-4 ">
          <div>
            <h4>Sales Network</h4>
            <p>
              For everybody who wants to be their own "boss"! Anyone can create
              wealth by joining our Sales Network ​
            </p>
          </div>
          <div>
            <h4>Partner Marketing</h4>
            <p>
              ​Our Partner Marketing Network that creates, activate and manage
              performance-based partnerships between Brands and Marketing
              Partners. We focus on win-win relationships that are profitable,
              long-term and sustainable for everyone involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PlatformFeat4;

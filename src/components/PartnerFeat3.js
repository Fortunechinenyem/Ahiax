import React from "react";
import Data from "../components/Data";

const MarketFeatures1 = (props) => {
  const { id, img, title, desc, amount } = props;
  return (
    <section>
      <div key={id} className="card d-flex">
        <div className="card-body1 text-center">
          <img src={img} className="card-img" alt="" />
          <h3 className="card-title text-black mt-3">{title}</h3>
          <h5 className="card-title text-black">{amount}</h5>
          <p className="card-text text-black">{desc}</p>
          <div className="mt-3 mb-3">
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnerFeat3 = () => {
  return (
    <section className="mt-5">
      <h2 className="text-center mb-5">How to Join</h2>
      <div className="container card1 row g-3 w-75 mx-auto">
        {Data.partnerfeat3.map((marketfeaturesItem) => {
          return (
            <div className="col-sm-12 col-md-4 mb-3 mt-3">
              <MarketFeatures1 {...marketfeaturesItem}></MarketFeatures1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PartnerFeat3;

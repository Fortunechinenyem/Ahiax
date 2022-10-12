import React from "react";
import Data from "../components/Data";

const MarketFeatures1 = (props) => {
  const { id, img, title, desc } = props;
  return (
    <section>
      <div key={id} className="card d-flex">
        <div className="card-body1 text-center">
          <img src={img} className="card-img" alt="" />
          <h5 className="card-title text-black">{title}</h5>
          <p className="card-text text-black">{desc}</p>
        </div>
      </div>
    </section>
  );
};

const SalesFeat2 = () => {
  return (
    <section className="mt-5">
      <h2 className="text-center mb-5">How to Join</h2>
      <div className="container card1 row g-3 w-75 mx-auto">
        {Data.salesfeat2.map((marketfeaturesItem) => {
          return (
            <div className="col-sm-6 col-md-4 mb-3 mt-3">
              <MarketFeatures1 {...marketfeaturesItem}></MarketFeatures1>
            </div>
          );
        })}
      </div>
      <div className="text-center mb-3">
        <button className="btn btn-success mt-5">Get Started</button>
      </div>
    </section>
  );
};

export default SalesFeat2;

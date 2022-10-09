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

const MarketFeat3 = () => {
  return (
    <section className="mt-5">
      <div className="text-center section__title section__title--services">
        <h1>Health And Beauty</h1>
      </div>
      <div className="container card1 row g-3 w-75 mx-auto">
        {Data.marketfeat3.map((marketfeaturesItem) => {
          return (
            <div className="col-sm-6 col-md-3 mb-3 mt-3">
              <MarketFeatures1 {...marketfeaturesItem}></MarketFeatures1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MarketFeat3;
import React from "react";
import Data from "../components/Data";

const MarketFeatures1 = (props) => {
  const { id, img, title, desc } = props;
  return (
    <section>
      <div key={id} className=" mb-3 text-black">
        <div class="row g-5">
          <div class="col-md-4">
            <img src={img} class="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="">
              <h5 className="">{title}</h5>
              <p className="">{desc}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3 mb-3">
        <button>Learn More</button>
      </div>
    </section>
  );
};

const BrandFeat3 = () => {
  return (
    <section className="mt-5">
      <div className="text-center section__title section__title--services mb-5">
        <h1>Meet your Ahiax Sales Partners.</h1>
      </div>
      <div className="container card1 row g-3 w-75 mx-auto">
        {Data.brandfeat3.map((marketfeaturesItem) => {
          return (
            <div className=" mb-3 mt-3">
              <MarketFeatures1 {...marketfeaturesItem}></MarketFeatures1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BrandFeat3;

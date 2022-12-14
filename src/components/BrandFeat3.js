import React from "react";
import Data from "../components/Data";

const MarketFeatures1 = (props) => {
  const { id, img, title, desc } = props;
  return (
    <section>
      <div key={id} className=" mb-3 text-black">
        <div class="row g-5">
          <div class="col-md">
            <img
              src={img}
              class="mx-auto"
              alt="..."
              height="350px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md text-center">
            <div className="">
              <h5 className="">{title}</h5>
              <p className="">{desc}</p>
            </div>
            <div className=" mt-3 mb-3">
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
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
      <div className="container  row g-3 w-75 mx-auto">
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

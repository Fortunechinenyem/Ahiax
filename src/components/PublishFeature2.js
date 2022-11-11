import React from "react";
import Data from "../components/Data";

const MarketFeatures1 = (props) => {
  const { id, img, title, desc } = props;
  return (
    <section className="d-flex container row ">
      <div key={id} className="card d-flex  mx-auto">
        <div className="card-body1 text-center ">
          <img
            src={img}
            className="card-img"
            alt=""
            height="150px"
            style={{ objectFit: "cover" }}
          />
          <h5 className="card-title text-black">{title}</h5>
          <p className="card-text text-black">{desc}</p>
        </div>
      </div>
    </section>
  );
};

const PublishFeat2 = () => {
  return (
    <section className="mt-5 ">
      <div className="container card1 row g-3 w-75 mx-auto">
        {Data.publishfeat.map((marketfeaturesItem) => {
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

export default PublishFeat2;

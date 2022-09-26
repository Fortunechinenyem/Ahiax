import React from "react";
import Data from "../components/Data";

const HomeFeatures1 = (props) => {
  const { id, title, text } = props;
  return (
    <div key={id} className="card d-flex">
      <div className="card-body">
        <h5 className="card-title text-white">{title}</h5>
        <p className="card-text text-white">{text}</p>
      </div>
    </div>
  );
};

const HomeFeatures = () => {
  return (
    <section className="mt-5">
      <div className="container card1 row g-3 w-75 mx-auto">
        {Data.homefeatures.map((homefeaturesItem) => {
          return (
            <div className="col-sm-12 col-md-4 mb-3 mt-3">
              <HomeFeatures1 {...homefeaturesItem}></HomeFeatures1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeFeatures;

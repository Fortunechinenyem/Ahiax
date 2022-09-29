import React from "react";
import Data from "../components/Data";

const HomeFeatures1 = (props) => {
  const { id, img, title, desc } = props;
  return (
    <div key={id} className="card d-flex">
      <div className="card-body2 text-center">
        <img src={img} className="card-img" alt="" />
        <h5 className="card-title text-black">{title}</h5>
        <p className="card-text text-black">{desc}</p>
        <button className="btn btn-success mb-2">Sign Up</button>
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

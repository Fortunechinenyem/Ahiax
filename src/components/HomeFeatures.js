import React from "react";
import Data from "../components/Data";

const HomeFeatures1 = (props) => {
  const { id, img, title, desc } = props;
  return (
    <div key={id} className=" d-flex homefeatures">
      <div className="col-md-4 ">
        {" "}
        <img src={img} className="" alt="" />
      </div>

      <div className=" text-center col-md-8 ">
        <h5 className="text-black">{title}</h5>
        <p className=" text-black">{desc}</p>
        <button className="btn btn-success mb-2">Sign Up</button>
      </div>
    </div>
  );
};

const HomeFeatures = () => {
  return (
    <section className="mt-5">
      <div className="container row g-3 w-75 mx-auto">
        {Data.homefeatures.map((homefeaturesItem) => {
          return (
            <div className="mb-3 mt-3">
              <HomeFeatures1 {...homefeaturesItem}></HomeFeatures1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeFeatures;

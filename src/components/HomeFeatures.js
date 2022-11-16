import React from "react";
import Data from "../components/Data";

const HomeFeatures1 = (props) => {
  const { id, img, title, desc, text } = props;
  return (
    <div key={id} className=" homefeatures">
      <div className="text-center">
        <div className="">
          {" "}
          <img
            src={img}
            className="mx-auto"
            alt=""
            height="200px"
            style={{ objectFit: "cover" }}
          />
          <div className=" text-center ">
            <h5 className="text-black">{title}</h5>
            <p className=" text-black">{desc}</p>
            <p>{text}</p>
            <button className="btn btn-secondary mb-2">Sign Up</button>
          </div>
        </div>
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

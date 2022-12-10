import React from "react";
import Data from "../components/Data";
import { Link } from "react-router-dom";

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
            height="300px"
            style={{ objectFit: "cover" }}
          />
          <div className=" text-center ">
            <h5 className="text-black mt-3">{title}</h5>
            <p className=" text-black">{desc}</p>
            <p>{text}</p>
            <Link to="/platform" className="btn btn-secondary mt-4">
              Sign Up
            </Link>
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

import React from "react";
import logo from "../image/d.PNG";

const PlatformFeat7 = () => {
  return (
    <section className="mt-5 mb-3 container row mx-auto">
      <div className=" text-center">
        <div className="">
          <h2 className="text-center "> Join Our Community</h2>
          <p> For Inspiration, collaboration and great results</p>
          <div className="w-75 mx-auto mt-3 mb-3 ">
            <img src={logo} alt={PlatformFeat7.jpg} className="mx-auto" />
          </div>
          <div className="text-center mb-5">
            <button className="btn btn-secondary mt-3 m-2">Join</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PlatformFeat7;

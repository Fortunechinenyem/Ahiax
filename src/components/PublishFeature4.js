import React from "react";
import Publishimage from "../image/pic56.PNG";

const PublishFeat4 = () => {
  return (
    <>
      <section className="mt-3 mb-3 publishfeat3 text-white">
        <div className=" w-75 mx-auto g-3  ">
          <div className="  ">
            <div className="d-flex publishfeat4">
              <div className="  benefits2">
                <h2 className="benefits">The Benefits</h2>
              </div>
              <div>
                <img src={Publishimage} alt="PublishFeat4.PNG" />
              </div>
              <div className=" text-center">
                <h4 className="">
                  Your Traffic has never been so proffitable!
                </h4>
                <p className="">We Provide all you need</p>
                <div>
                  <h3>01. Build Wealth</h3>
                  <h3>02. No Surprises</h3>
                  <h3>03. FrictionlessPayments</h3>
                  <h3>04. Grow Your Network</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PublishFeat4;

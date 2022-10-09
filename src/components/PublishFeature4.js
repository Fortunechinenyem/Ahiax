import React from "react";
import Publishimage from "../image/pichero.PNG";

const PublishFeat4 = () => {
  return (
    <>
      <section className="mt-3 mb-3 ">
        <div className="publishfeat3 w-75 mx-auto g-3 card-body1 ">
          <div className="card  ">
            <div className="d-flex card-body2 benefits2">
              <h2 className="benefits">The Benefits</h2>
              <img src={Publishimage} alt="PublishFeat4.PNG" />
            </div>

            <div className="card-body2 text-center">
              <h2 className="">Your Traffic has never been so proffitable!</h2>
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
      </section>
    </>
  );
};
export default PublishFeat4;

import React from "react";
import Button from "react-bootstrap/Button";

const BrandFeat1 = () => {
  return (
    <article className=" ">
      <div className="text-center mt-3 mb-3 w-100 mx-auto ">
        <div className="">
          <h3 className="mt-3 mb-5">Connect with your target audience</h3>

          <div className="d-flex  ">
            <div className="w-50">
              <p>
                We provide our advertisers' devoted representatives with vast
                experience and authority to monitor and maximize your campaigns.
                Whether you're looking to start, scale, or expand your business
                reach, ElanX can help. Our affiliate sales ecosystem will bring
                your brand in partnership with our Sales Network, Publishers and
                Influencers, and our bespoke performance marketing strategy all
                aimed at experiencing intelligent growth at scale.
              </p>
            </div>

            <div className=" w-50 ">
              <div className="col-sm-12 col-md-3 col-lg-3  bg-dark text-white">
                <h3>Access to Thousands of Affiliates</h3>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 bg-dark text-white">
                <h3>Sell Your Product or Services Without Caps</h3>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 bg-dark text-white">
                <h3>Automated Affiliate Payments ​</h3>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 bg-dark text-white">
                <h3>Personalized Account Management ​</h3>
              </div>
            </div>
          </div>

          <div className="w-25 mx-auto mt-3 mb-3">
            <Button variant="success">Grow Your Brand Sales</Button>
          </div>
        </div>
      </div>
    </article>
  );
};
export default BrandFeat1;

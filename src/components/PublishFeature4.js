import React from "react";
import Publishimage from "../image/puh.PNG";
import logo from "../image/pug.png";

const PublishFeat4 = () => {
  return (
    <>
      <section className="mt-3 mb-3 text-black ">
        <div className="d-flex container row  mx-auto mb-5 ">
          <div className="col-md text-center">
            <h2>Who Could be an Affiliate?</h2>
            <p>Discover who publishers and influencers are</p>
            <div className="w-75 mx-auto mt-3 mb-3 ">
              <img src={logo} alt={PublishFeat4.png} className="mx-auto" />
            </div>
          </div>
          <div className="d-flex col-md-8  container row ">
            <div className=" col-sm-12 text-center bg-light text-black">
              <h5 className=" ">Influencers</h5>
              <p className="">You are a trusted Source</p>
              <p>Let's partner to make more sense of your web traffic.</p>
              <ul>
                <li>Blogs, Websites</li>
                <li>Podcasts</li>
                <li>Traditional Media (TV, Radio, OOH)</li>
              </ul>
              <button className="btn btn-success mb-3">Sign Up</button>
            </div>
            <div className="col-sm-12 text-center bg-success text-white">
              <h5 className=" ">Influencers</h5>
              <p className=" ">
                You've done well to build a following online. Now let's elevate
                your status!
              </p>
              <ul>
                <li>Content Creators</li>
                <li>Content Syndicators</li>
                <li>Marketers</li>
                <li> OR anyone with influence online</li>
              </ul>
              <button className="btn btn-light mb-3">Sign Up</button>
            </div>
          </div>
        </div>

        <div className="text-center w-75 mx-auto  ">
          <div className=" text-center mt-3 mb-5">
            <h1 className="benefits pf3">The Benefits</h1>
          </div>

          <div className=" ">
            <div className=" mb-3 mx-auto">
              <img
                src={Publishimage}
                alt="PublishFeat4.PNG"
                height="200px"
                style={{ objectFit: "cover" }}
                className="mb-3 mx-auto"
              />
            </div>
            <div className=" text-center">
              <h3 className="pf3">
                ​Your traffic has never been so profitable. We provide all you
                need.
              </h3>

              <div>
                <h5>01. Build Wealth</h5>
                <h5>02. No Surprises</h5>
                <h5>03. FrictionlessPayments</h5>
                <h5>04. Grow Your Network</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PublishFeat4;

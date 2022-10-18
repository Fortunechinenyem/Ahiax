import React from "react";
import Publishimage from "../image/pic56.PNG";

const PublishFeat4 = () => {
  return (
    <>
      <section className="mt-3 mb-3 publishfeat3 text-white ">
        <div className="d-flex publishfeat33  mx-auto mb-5 ">
          <div className="col-md text-center">
            <h2>Who Could be an Affiliate?</h2>
            <p>
              This is a Price List paragraph. It's an ideal place to introduce
              the types of paid services or plans available, and underline any
              important or unique features for your visitors.
            </p>
          </div>
          <div className="d-flex col-md-8 publishfeat33 container row ">
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
            <h2 className="benefits">The Benefits</h2>
          </div>

          <div className=" ">
            <div className=" mb-3 mx-auto">
              <img src={Publishimage} alt="PublishFeat4.PNG" />
            </div>
            <div className=" text-center">
              <h4 className="">Your Traffic has never been so profitable!</h4>
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

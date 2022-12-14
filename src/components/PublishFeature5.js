import React from "react";
import logo from "../image/pui.PNG";
const PublishFeat5 = () => {
  return (
    <section className="mt-5 mb-3">
      <div className="text-center">
        <h1 className="text-center section__title section__title--services">
          How It Works
        </h1>
        <button className="btn btn-secondary mt-3 mb-3">
          Become an Affiliate Partner
        </button>
      </div>

      <div className="d-flex container row g-5 mx-auto ">
        <div className="col-md-4 ">
          <div>
            <h4>01. Get Started</h4>
            <p>
              Single Access With One Sign-Up. Access a range of options to walk
              you through from your first sign-up to creating, optimizing, and
              managing your first campaign.
            </p>
          </div>
          <div>
            <h4>03. Affiliate Tracking</h4>
            <p>
              Our platform tracks every single user action through your unique
              links generated by our system and with a click shared across your
              marketing channels.
            </p>
          </div>
        </div>
        <div className="col-md-4 ">
          <img src={logo} alt={PublishFeat5.jpg} className="mx-auto" />
        </div>
        <div className="col-md-4 ">
          <div>
            <h4>02. Creative Library</h4>
            <p>
              Access assets like videos and images for our campaigns to use in
              your marketing campaigns and share directly to your websites,
              channels, or social media pages.
            </p>
          </div>
          <div>
            <h4>04. Easy Payments</h4>
            <p>
              Our dashboard gives you a real-time view of your audience
              engagements, sales, and commission payouts. You get a chance to
              choose your payment cycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PublishFeat5;

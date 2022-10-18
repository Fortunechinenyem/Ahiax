import React from "react";
import logo from "../image/pic55.PNG";
const PublishHero = () => {
  return (
    <section className="mt-3 mb-3 ">
      <div className="d-flex row container mx-auto">
        <div className="py-5 w-50">
          <div className="text-center">
            <h1>Earn 10X More From Traffic</h1>
          </div>

          <div className="text-center">
            <button className="btn btn-success mt-5">
              Become an Affiliate Partner
            </button>
          </div>
        </div>
        <div className="w-50">
          <img src={logo} alt={PublishHero.jpg} />
        </div>
      </div>
    </section>
  );
};
export default PublishHero;

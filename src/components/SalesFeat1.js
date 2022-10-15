import React from "react";
import logo from "../image/p6.jpg";
const SalesFeat1 = () => {
  return (
    <section className="mt-3 mb-3 ">
      <div className="d-flex salesfeat1 ">
        <div className="w-50">
          <img src={logo} alt={SalesFeat1.jpg} />
        </div>
        <div className="py-5 w-50 text-center">
          <h2>The Ahiax Sales Network</h2>
          <p>
            You get the exclusive priviledge of being in a community of like
            minded people with same goals.
          </p>
          <button className="btn btn-success mt-5">Sign Up</button>
        </div>
      </div>
    </section>
  );
};
export default SalesFeat1;

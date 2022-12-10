import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/p (27).jpg";

const PartnerHero = () => {
  return (
    <section className="container ">
      <div className="d-flex row g-5 mx-auto mt-2 ">
        <img
          src={logo}
          alt={PartnerHero.png}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
        <div className="col-md text-center">
          <h1>Earn More Per Click With Ahiax​</h1>
          <p>
            Take advantage of our various performance marketing plans to drive
            more quality leads and sales.
          </p>
          <Link to="/platform" className="btn btn-secondary mt-4 ">
            See Packages
          </Link>
        </div>
      </div>
    </section>
  );
};
export default PartnerHero;

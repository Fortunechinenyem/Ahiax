import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/partnera.png";

const PartnerHero = () => {
  return (
    <section className="container ">
      <div className="d-flex row g-5 mx-auto ">
        <img
          src={logo}
          alt={PartnerHero.png}
          className="col-md "
          height=""
          style={{ objectFit: "cover" }}
        />
        <div className="col-md text-center">
          <h1>Earn More Per Click With Ahiax​</h1>
          <p>
            Take advantage of our various performance marketing plans to drive
            more quality leads and sales.
          </p>
          <Link to="/platform" className="btn btn-success mt-4 ">
            See Packages
          </Link>
        </div>
      </div>
    </section>
  );
};
export default PartnerHero;

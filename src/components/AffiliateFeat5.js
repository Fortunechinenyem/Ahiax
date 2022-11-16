import React from "react";
import logo1 from "../image/afac.PNG";
import logo2 from "../image/afad.PNG";
import logo3 from "../image/afae.png";

const AffiliateFeat5 = () => {
  return (
    <section>
      <div className="d-flex container row mx-auto text-center mt-5 mb-5">
        <div className="col-md-4">
          <img
            src={logo1}
            alt={AffiliateFeat5.png}
            className="col-md "
            height="200px"
            style={{ objectFit: "cover" }}
          />
          <h5 className="bg-secondary text-white">Computer or Smartphone ​</h5>
        </div>
        <div className="col-md-4">
          <img
            src={logo2}
            alt={AffiliateFeat5.png}
            className="col-md "
            height="200px"
            style={{ objectFit: "cover" }}
          />
          <h5 className="bg-secondary text-white">Internet Connection ​</h5>
        </div>
        <div className="col-md-4">
          <img
            src={logo3}
            alt={AffiliateFeat5.png}
            className="col-md "
            height="200px"
            style={{ objectFit: "cover" }}
          />
          <h5 className="bg-secondary text-white">
            Sign Up for your AhiaX Account ​
          </h5>
        </div>
      </div>
    </section>
  );
};
export default AffiliateFeat5;

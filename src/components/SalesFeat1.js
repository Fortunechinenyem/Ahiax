import React from "react";
import logo from "../image/p6.jpg";
const SalesFeat1 = () => {
  return (
    <section className="mt-3 mb-3 ">
      <div className="d-flex container row mx-auto  ">
        <div className="">
          <img
            src={logo}
            alt={SalesFeat1.jpg}
            height="200px"
            style={{ objectFit: "cover" }}
            className="mx-auto"
          />
        </div>
        <div className="text-center">
          <h2>The Ahiax Sales Network</h2>
          <p>
            ​The ElanX Sales Network is the offline sales channel of ElanX. It
            is a community of salesmen and women leveraging their network of
            friends, colleagues, family, and just about anyone within their
            circle and community. Take advantage of our ever-increasing
            categories and earn commissions for every order placed by yourself
            or your sales contact (using your unique ID). With the ElanX Sales
            Network, you are empowered to own and run sales as your own business
            and of course be your own boss!
          </p>
          <button className="btn btn-success mt-5">Sign Up</button>
        </div>
      </div>
    </section>
  );
};
export default SalesFeat1;

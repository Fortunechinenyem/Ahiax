import React from "react";
import logo from "../image/saleshero.PNG";
const SalesHero = () => {
  return (
    <section className="mt-3 mb-3">
      <div className="d-flex">
        <div className="py-5 w-50">
          <h1>Ready to be Your own Boss?</h1>
          <p>
            Earn Big Commissions Leveraging Your Network and Traffic. It's Quite
            Easy Too.{" "}
          </p>
        </div>
        <div className="w-50">
          <img src={logo} alt={SalesHero.jpg} />
        </div>
      </div>
    </section>
  );
};
export default SalesHero;

import React from "react";
import Button from "react-bootstrap/Button";

import logo from "../image/img1.PNG";

const SmallerMarketHero = () => {
  return (
    <>
      <div className=" d-flex smallermarkerhero col-sm-12 col-md-12 mt-3 mb-3 g-3">
        <div className="">
          <img src={logo} alt={SmallerMarketHero.jpg} />
        </div>
        <div>
          <h1>50% off Orders</h1>
          <p>
            This is your Banner paragraph. Use this space to write short,
            engaging text that will inspire your visitors to take action.
          </p>

          <Button variant="dark" className="m-2">
            Go to Sale
          </Button>
          <Button variant="dark">Shop Collection</Button>
        </div>
      </div>
    </>
  );
};
export default SmallerMarketHero;

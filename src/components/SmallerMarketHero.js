import React from "react";
import Button from "react-bootstrap/Button";

const SmallerMarketHero = () => {
  return (
    <>
      <div className=" smallermarkerhero mt-3 mb-3 g-3">
        <div className="">
          <div className="herotext">
            <div>
              <h1>50% off Orders</h1>
              <p className="text-center">
                This is your Banner paragraph. Use this space to write short,
                engaging text that will inspire your visitors to take action.
              </p>

              <Button variant="light" className="m-2 ">
                Go to Sale
              </Button>
              <Button variant="light">Shop Collection</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SmallerMarketHero;

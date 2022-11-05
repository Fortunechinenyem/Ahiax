import React from "react";
import logo from "../image/platformh.png";
const PlatformHero = () => {
  return (
    <section className="mt-3 mb-3">
      <div className="text-center">
        <div className="w-75 mx-auto text-center">
          <img
            src={logo}
            alt={PlatformHero.png}
            height=""
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};
export default PlatformHero;

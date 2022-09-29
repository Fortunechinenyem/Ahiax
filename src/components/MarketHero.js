import React from "react";
import background from "../image/image6.jpg";
const MarketHero = () => {
  return (
    <section className="mt-3 markethero">
      <div
        className="hero"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "400px",
        }}
      ></div>
    </section>
  );
};
export default MarketHero;

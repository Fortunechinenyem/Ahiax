import React from "react";
import background from "../image/pichero.PNG";
const Hero = () => {
  return (
    <section className="mt-3">
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
      >
        <div className="herotext">
          <h1>
            Driven by the Passion to build a sales legacy for African businesses
            and Aficans
          </h1>
        </div>
      </div>
    </section>
  );
};
export default Hero;

import React from "react";
import background from "../image/image2.jpg";
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
        <div className="py-4">
          <h1>Sales Platform</h1>
          <h1>with Litmitless </h1>
          <h1> Potential</h1>
        </div>
      </div>
    </section>
  );
};
export default Hero;

import React from "react";
import background from "../image/image2.jpg";
const Hero = () => {
  return (
    <section className="mt-3">
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "400px",
        }}
      >
        <h1>AHIAX</h1>
      </div>
    </section>
  );
};
export default Hero;

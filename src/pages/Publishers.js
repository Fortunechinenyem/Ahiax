import React from "react";

import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import PublishFeat1 from "../components/PublishFeature1";
import PublishFeat2 from "../components/PublishFeature2";
import PublishFeat3 from "../components/PublishFeature3";
import PublishHero from "../components/PublishHero";

const Publishers = () => {
  return (
    <>
      <Navbar2 />
      <PublishHero />
      <PublishFeat1 />
      <PublishFeat2 />
      <PublishFeat3 />
      <Footer />
    </>
  );
};
export default Publishers;

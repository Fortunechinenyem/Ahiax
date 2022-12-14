import React from "react";

import Footer from "../components/Footer";
import PlatformFeat7 from "../components/PlatformFeat7";

import PublishFeat1 from "../components/PublishFeature1";
import PublishFeat2 from "../components/PublishFeature2";
import PublishFeat3 from "../components/PublishFeature3";
import PublishFeat4 from "../components/PublishFeature4";
import PublishFeat5 from "../components/PublishFeature5";
import PublishHero from "../components/PublishHero";

const Publishers = () => {
  return (
    <>
      <PublishHero />
      <PublishFeat1 />
      <PublishFeat2 />
      <PublishFeat3 />
      <PublishFeat4 />
      <PublishFeat5 />
      <PlatformFeat7 />
      <Footer />
    </>
  );
};
export default Publishers;

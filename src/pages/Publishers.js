import React from "react";

import Footer from "../components/Footer";

import PublishFeat1 from "../components/PublishFeature1";
import PublishFeat2 from "../components/PublishFeature2";
import PublishFeat3 from "../components/PublishFeature3";
import PublishFeat4 from "../components/PublishFeature4";
import PublishHero from "../components/PublishHero";

const Publishers = () => {
  return (
    <>
      <PublishHero />
      <PublishFeat1 />
      <PublishFeat2 />
      <PublishFeat3 />
      <PublishFeat4 />
      <Footer />
    </>
  );
};
export default Publishers;

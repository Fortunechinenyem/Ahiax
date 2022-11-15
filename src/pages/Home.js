import React from "react";
import Community from "../components/Community";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import HomeFeatures from "../components/HomeFeatures";
import PlatformFeat7 from "../components/PlatformFeat7";

import SmallerHero from "../components/SmallerHero";
import SmallHero from "../components/SmallHero";

const Home = () => {
  return (
    <>
      <Hero />
      <SmallHero />
      <HomeFeatures />
      <Community />
      <SmallerHero />
      <PlatformFeat7 />
      <Footer />
    </>
  );
};
export default Home;

import React from "react";
import Community from "../components/Community";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import HomeFeatures from "../components/HomeFeatures";

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
      <Footer />
    </>
  );
};
export default Home;

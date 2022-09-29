import React from "react";
import Community from "../components/Community";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import HomeFeatures from "../components/HomeFeatures";

import Navbar2 from "../components/Navbar2";
import SmallerHero from "../components/SmallerHero";
import SmallHero from "../components/SmallHero";

const Home = () => {
  return (
    <>
      <Navbar2 />

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
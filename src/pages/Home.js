import React from "react";
import Community from "../components/Community";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeFeatures from "../components/HomeFeatures";

import Navbar2 from "../components/Navbar2";

const Home = () => {
  return (
    <>
      <Navbar2 />

      <Hero />
      <HomeFeatures />
      <Community />
      <Footer />
    </>
  );
};
export default Home;

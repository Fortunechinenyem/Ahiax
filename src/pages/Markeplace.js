import React from "react";
import Footer from "../components/Footer";
import MarketFeatures from "../components/MarketFeatures";
import MarketHero from "../components/MarketHero";
import Navbar1 from "../components/Navbar1";
import Navbar3 from "../components/Navbar3";

const Marketplace = () => {
  return (
    <>
      <Navbar3 />
      <Navbar1 />
      <MarketHero />
      <MarketFeatures />
      <Footer />
    </>
  );
};
export default Marketplace;

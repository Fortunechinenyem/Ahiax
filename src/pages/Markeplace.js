import React from "react";
import Footer from "../components/Footer";
import MarketFeat1 from "../components/MarketFeat1";
import MarketFeat10 from "../components/MarketFeat10";
import MarketFeat2 from "../components/MarketFeat2";
import MarketFeat3 from "../components/MarketFeat3";
import MarketFeat4 from "../components/MarketFeat4";
import MarketFeat5 from "../components/MarketFeat5";
import MarketFeat6 from "../components/MarketFeat6";
import MarketFeat7 from "../components/MarketFeat7";
import MarketFeat8 from "../components/MarketFeat8";
import MarketFeat9 from "../components/MarketFeat9";
import MarketFeatures from "../components/MarketFeatures";
import MarketHero from "../components/MarketHero";
import Navbar1 from "../components/Navbar1";
import Navbar3 from "../components/Navbar3";
import SmallerMarketHero from "../components/SmallerMarketHero";
import SmallMarketHero from "../components/SmallMarketHero";

const Marketplace = () => {
  return (
    <>
      <Navbar3 />
      <Navbar1 />
      <MarketHero />
      <MarketFeat1 />
      <SmallMarketHero />
      <MarketFeatures />
      <MarketFeat2 />
      <MarketFeat3 />
      <MarketFeat4 />
      <MarketFeat5 />
      <MarketFeat6 />
      <MarketFeat7 />
      <MarketFeat8 />
      <MarketFeat9 />
      <MarketFeat10 />

      <SmallerMarketHero />
      <Footer />
    </>
  );
};
export default Marketplace;

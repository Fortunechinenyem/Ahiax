import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Marketplace from "./pages/Marketplace";
import Brands from "./pages/Brands";
import SalesNetwork from "./pages/SalesNetwork";
import Affiliate from "./pages/Affiliate";
import Login from "./pages/Login";
import Publishers from "./pages/Publishers";
import NavBar from "./components/Navbar2";
import Partner from "./pages/Partner";
import Platform from "./pages/Platform";
import MobileComputing from "./pages/MobileComputing";
import Fashion from "./pages/Fashion";
import HealthBeauty from "./pages/HealthBeauty";
import RealEstate from "./pages/RealEstate";
import HomeGarden from "./pages/HomeGarden";

function App() {
  return (
    <article>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/salesnetwork" element={<SalesNetwork />} />
        <Route path="/affiliate" element={<Affiliate />} />

        <Route path="/platform" element={<Platform />} />
        <Route path="/publishers" element={<Publishers />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/mobilecomputing" element={<MobileComputing />} />
        <Route path="/healthbeauty" element={<HealthBeauty />} />
        <Route path="/realestate" element={<RealEstate />} />
        <Route path="/homegarden" element={<HomeGarden />} />
      </Routes>
    </article>
  );
}

export default App;

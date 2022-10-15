import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Marketplace from "./pages/Markeplace";
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
      </Routes>
    </article>
  );
}

export default App;

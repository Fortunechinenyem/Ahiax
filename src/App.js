import "./index.css";
import { Route, Routes } from "react-router-dom";
// import NavBar from "./Components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Marketplace from "./pages/Markeplace";
import Brands from "./pages/Brands";
import SalesNetwork from "./pages/SalesNetwork";
import Affiliate from "./pages/Affiliate";
import Login from "./pages/Login";
import Publishers from "./pages/Publishers";
import NavBar from "./components/Navbar2";

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
        <Route path="/publishers" element={<Publishers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </article>
  );
}

export default App;

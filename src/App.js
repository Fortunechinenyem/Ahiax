import "./index.css";
import { Route, Routes } from "react-router-dom";
// import NavBar from "./Components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Marketplace from "./pages/Markeplace";

function App() {
  return (
    <article>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </article>
  );
}

export default App;

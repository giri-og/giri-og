import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MainPage from "./MainPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} /> {/* optional 404 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

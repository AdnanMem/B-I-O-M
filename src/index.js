import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Homepage/Home";
import BiomDispenser from "./Components/BiomDispenser/BiomDispenser";
import BiomVessels from "./Components/BiomVessels/BiomVessels";
import Testimonials from "./Components/Testimonials/Testimonials";
import BiomWipes from "./Components/BiomWipes/BiomWipes";
import Video from "./Components/Video/Video";
import Footer from "./Components/Footer/Footer";
import WhereAndWhen from "./Components/WhereAndWhen/WhereAndWhen";
import Instagram from "./Components/Instagram/Instagram";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <BiomDispenser />
    <WhereAndWhen />
    <BiomVessels />
    <Testimonials />
    <BiomWipes />
    <Video />
    <Instagram />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";

import Hero from "../Components/Hero";
import About from "../Components/About";
import Projects from "../Components/Projects";
import CTA from "../Components/CTA";
import Resume from "../Components/Resume";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Home = () => {
   
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="bg-gray-50 text-gray-800 scroll-smooth">
      <Hero/>
      <About />
      <Projects />
      <CTA />
      <Resume />
    </div>
  );
};

export default Home;

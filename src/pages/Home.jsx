import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Work from "../sections/Work";
import Marquee from "../sections/Marquee";
import CTA from "../components/CTA";

const App = () => {
  return (
    <>
      <Hero
        name={"Vladimir Brooklyn"}
        title={"Marketer, Web Developer"}
        accent={"Designer"}
      />
      <About />
      <Services />
      <Work />
      <Marquee />
      <CTA />
    </>
  );
};

export default App;

import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Gallery />
      <Reviews />
    </div>
  );
};

export default LandingPage;

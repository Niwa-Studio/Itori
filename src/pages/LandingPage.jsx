import React from "react";
import Hero from "../components/LandingPage/Hero";
import Featured from "../components/LandingPage/Featured";
import Gallery from "../components/LandingPage/Gallery";
import Reviews from "../components/LandingPage/Reviews";

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

import React from "react";
import image from "../assets/images/homepage-coffee-pic.jpg";

const Hero = () => {
  return (
    <div className="mx-auto mb-40 mt-16 flex gap-16 lg:container">
      <div className="h-[624px] w-3/5">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex basis-[40%] flex-col gap-10">
        <div>
          <h1 className="text-7xl font-semibold">Itori</h1>
          <h2 className="text-3xl italic">“Where Every Sip Tells a Story”</h2>
        </div>
        <div className="h-[2px] bg-black"></div>
        <p>
          Welcome to Itori, where every cup of coffee tells a story. Immerse
          yourself in the rich aromas and cozy ambiance of our shop, your new
          favorite spot to relax and unwind.
        </p>
        <button className="bg-shapes-tertiary self-center rounded-full px-12 py-4 text-white">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Hero;

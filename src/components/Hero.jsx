import React from "react";
import image from "../assets/images/homepage-coffee-pic.jpg";

const Hero = () => {
  return (
    <div className="mt-16 flex gap-16">
      <div className="h-[624px] w-3/5">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="basis-[40%]">
        <div className="flex w-10/12 flex-col gap-10">
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
          <button className="self-center rounded-full bg-shapes-tertiary px-12 py-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

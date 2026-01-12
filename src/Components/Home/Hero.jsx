import React from "react";

const Hero = () => {
  return (
    <div className="hero-bg relative h-screen flex justify-center items-center">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-[64px] league-gothic font-bold mb-4.5">Optimal Performance Coach</h1>
        <p className="text-center text-xl montserrat mb-8">
          Experience the one-of-a-kind AI mental performance and wellness coach
          at your fingertips.
        </p>

        <div className="flex gap-4">
          <button className="button manrope ">Start Subscription</button>
          <button className="button-2 manrope">
            Chat with OP Coach Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

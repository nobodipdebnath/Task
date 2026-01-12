import React from "react";

const Cat = () => {
  return (
    <div className="hero-bg relative h-[50vh] flex justify-center items-center">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white">
        <button className="button-2 flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-primary1 hover:bg-black"></div>
          <span>CAT Section</span>
        </button>
        <h1 className="text-[36px]  max-w-2xl montserrat  font-bold mt-12">
          Ready to improve your mental performance?
        </h1>
        <div className="flex gap-4 mt-10">
          <button className="button manrope ">Start Subscription</button>
        </div>
      </div>
    </div>
  );
};

export default Cat;

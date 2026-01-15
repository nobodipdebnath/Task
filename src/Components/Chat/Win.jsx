import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.png";

const Win = () => {
  return (
    <div className="chat md:px-[100px] pb-[120px]">
      <h1 className="text-white text-center text-[96px] league-gothic">
        Journal
      </h1>
      <div className="flex items-center justify-end gap-2 mt-[10%]">
        <p className="text-lg text-[#FAFAFD]">Personal Win</p>
        <img
          className="h-12 w-12 object-cover rounded-full"
          src={user}
          alt=""
        />
      </div>
      <div className="flex items-center gap-3 mt-11">
        <img className="h-15 w-14" src={logo} alt="" />
        <p className="text-[#FAFAFD] text-lg">
          Wins are easy to overlook. Let’s dive into your success.
        </p>
      </div>
      <h1 className="text-start  text-base mt-11 py-5 px-8  bg-primary1 text-[#2D2D2D] rounded-xl">
        I’ve developed more consistency in my daily routines, which has improved
        my focus and energy. This small win is helping me stay grounded and
        motivated in personal growth.
      </h1>
      <div className="mt-[85px] relative">
        <input
          className="w-full py-6 px-7 bg-[#2D2A2B] border border-[#2D2A2B] rounded-[10px] placeholder:text-[#FAFAFD] placeholder:text-xl placeholder:font-medium outline-none text-white placeholder:montserrat"
          placeholder="Message ..."
          type="text"
        />
        <div className="flex items-center gap-2 absolute top-4 right-4">
          <button className="py-3 px-3.5 cursor-pointer  bg-primary1 rounded-lg text-black">
            <FaArrowUp></FaArrowUp>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Win;

import React from 'react';
import logo from "../../assets/images/logo.png";
import { FaArrowUp } from 'react-icons/fa6';

const MindsetChat = () => {
    return (
    <div className="chat px-[100px] pb-[120px]">
      <div className="flex items-center gap-3 mt-[30%]">
        <img className="h-15 w-14" src={logo} alt="" />
        <p className="text-[#FAFAFD] text-lg">
          What challenging circumstances are you currently facing that you need to accept?
        </p>
      </div>
      <h1 className="text-start  text-base mt-11 py-5 px-8  bg-primary1 text-[#2D2D2D] rounded-xl">
        Accepting that career, relationships, or health may not unfold as planned teaches resilience. Life’s uncertainties remind us to focus on what we can control—our mindset and actions—rather than outcomes. Embracing unpredictability helps reduce stress, foster growth, and find strength in adapting to challenges with patience and hope.
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

export default MindsetChat;
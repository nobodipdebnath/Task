import React from 'react';
import { FaArrowUp } from "react-icons/fa6";
import { IoAttach } from "react-icons/io5";
import logo from '../../assets/images/logo.png'

const InternalChat = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const message = e.target.value;
    console.log('message', message)

  }
    return (
    <div className="chat md:px-[100px] pb-[120px]">
      <div className='md:w-[630px] w-full flex items-center mx-auto justify-center'>
        <span className='py-6 w-full border border-primary1 rounded-xl bg-[#2D2D2D] text-primary1 text-center'>1. Identification</span>
      </div>

      <div>
        <div className="flex items-center gap-3 mt-14">
            <img className="h-15 w-14" src={logo} alt="" />
            <p className="text-[#FAFAFD] text-lg">How overwhelming is it right now?</p>
        </div>

        <h1 className="text-start py-4.5 px-8 text-lg text-[#2D2D2D] bg-primary1 rounded-xl mt-3.5">The challenge feels moderately overwhelming right now. It doesn’t completely consume me, but it often weighs on my mind and distracts me from staying fully present in my priorities.</h1>
      </div>
      <div>
        <div className="flex items-center gap-3 mt-6">
            <img className="h-15 w-14" src={logo} alt="" />
            <p className="text-[#FAFAFD] text-lg">Which areas of life are most affected? (Work, relationships, health, self-esteem)</p>
        </div>

        <h1 className="text-start py-4.5 px-8 text-lg text-[#2D2D2D] bg-primary1 rounded-xl mt-3.5">Internal blocks include self-doubt, overthinking, and fear of failure. External blocks include workload pressure, lack of clear structure, and expectations from others that add to the overall weight.</h1>
      </div>
      <div>
        <div className="flex items-center gap-3 mt-6">
            <img className="h-15 w-14" src={logo} alt="" />
            <p className="text-[#FAFAFD] text-lg">When did it begin? Has it changed over time?</p>
        </div>

        <h1 className="text-start py-4.5 px-8 text-lg text-[#2D2D2D] bg-primary1 rounded-xl mt-3.5">It began a few months ago and has gradually shifted. At first, it felt subtle and manageable, but over time it has become more noticeable and harder to ignore.</h1>
      </div>
      <div>
        <div className="flex items-center gap-3 mt-6">
            <img className="h-15 w-14" src={logo} alt="" />
            <p className="text-[#FAFAFD] text-lg">What internal/external blocks are feeding it?</p>
        </div>

        <h1 className="text-start py-4.5 px-8 text-lg text-[#2D2D2D] bg-primary1 rounded-xl mt-3.5">Internal blocks include self-doubt, overthinking, and fear of failure. External blocks include workload pressure, lack of clear structure, and expectations from others that add to the overall weight.</h1>
      </div>

      <div className='md:w-[630px] w-full mt-24 flex items-center mx-auto justify-center'>
        <span className='py-6 w-full border border-primary1 rounded-xl bg-[#2D2D2D] text-primary1 text-center'>2. Exploration</span>
      </div>
      <div>
        <div className="flex items-center gap-3 mt-14">
            <img className="h-15 w-14" src={logo} alt="" />
            <p className="text-[#FAFAFD] text-lg">What challenging circumstances are you currently facing that you need to accept?</p>
        </div>

        <h1 className="text-start py-4.5 px-8 text-lg text-[#2D2D2D] bg-primary1 rounded-xl mt-3.5">Accepting that career, relationships, or health may not unfold as planned teaches resilience. Life’s uncertainties remind us to focus on what we can control—our mindset and actions—rather than outcomes. Embracing unpredictability helps reduce stress, foster growth, and find strength in adapting to challenges with patience and hope.</h1>
      </div>
      <div className='md:w-[630px] w-full mt-24 flex items-center mx-auto justify-center'>
        <span className='py-6 w-full border border-primary1 rounded-xl bg-[#2D2D2D] text-primary1 text-center'>3. Reframing</span>
      </div>
      <div>
        <div className="flex items-center gap-3 mt-14">
            <img className="h-15 w-14" src={logo} alt="" />
            <p className="text-[#FAFAFD] text-lg">What challenging circumstances are you currently facing that you need to accept?</p>
        </div>

        <h1 className="text-start py-4.5 px-8 text-lg text-[#2D2D2D] bg-primary1 rounded-xl mt-3.5">Accepting that career, relationships, or health may not unfold as planned teaches resilience. Life’s uncertainties remind us to focus on what we can control—our mindset and actions—rather than outcomes. Embracing unpredictability helps reduce stress, foster growth, and find strength in adapting to challenges with patience and hope.</h1>
      </div>
      <div className='md:w-[630px] w-full mt-24 flex items-center mx-auto justify-center'>
        <span className='py-6 w-full border border-primary1 rounded-xl bg-[#2D2D2D] text-primary1 text-center'>4. Action Planning</span>
      </div>
      <div>
        <div className="flex items-center gap-3 mt-14">
            <img className="h-15 w-14" src={logo} alt="" />
            <p className="text-[#FAFAFD] text-lg">What challenging circumstances are you currently facing that you need to accept?</p>
        </div>

        <h1 className="text-start py-4.5 px-8 text-lg text-[#2D2D2D] bg-primary1 rounded-xl mt-3.5">Accepting that career, relationships, or health may not unfold as planned teaches resilience. Life’s uncertainties remind us to focus on what we can control—our mindset and actions—rather than outcomes. Embracing unpredictability helps reduce stress, foster growth, and find strength in adapting to challenges with patience and hope.</h1>
      </div>
      <div className='md:w-[630px] w-full mt-24 flex items-center mx-auto justify-center'>
        <span className='py-6 w-full border border-primary1 rounded-xl bg-[#2D2D2D] text-primary1 text-center'>5. Reflection & Adaptation</span>
      </div>
      <div>
        <div className="flex items-center gap-3 mt-14">
            <img className="h-15 w-14" src={logo} alt="" />
            <p className="text-[#FAFAFD] text-lg">What challenging circumstances are you currently facing that you need to accept?</p>
        </div>

        <h1 className="text-start py-4.5 px-8 text-lg text-[#2D2D2D] bg-primary1 rounded-xl mt-3.5">Accepting that career, relationships, or health may not unfold as planned teaches resilience. Life’s uncertainties remind us to focus on what we can control—our mindset and actions—rather than outcomes. Embracing unpredictability helps reduce stress, foster growth, and find strength in adapting to challenges with patience and hope.</h1>
      </div>
      

      <div onSubmit={handelSubmit} className="mt-12.5 fixed lg:right-[11%] xl:right-[11vw] right-4 w-[92%] md:w-auto lg:left-[28%] xl:left-[27vw] bottom-15">
        <input
          className="w-full py-6 px-7 bg-[#2D2A2B] border border-[#2D2A2B] rounded-[10px] placeholder:text-[#FAFAFD] placeholder:text-xl placeholder:font-medium outline-none text-white placeholder:montserrat"
          placeholder="Message ..."
          type="text"
        />
        <div className="flex items-center gap-2 absolute top-4 right-4">
          <button  className="py-3 px-3.5 cursor-pointer  bg-primary1 rounded-lg text-black">
            <FaArrowUp></FaArrowUp>
          </button>
        </div>
      </div>
    </div>
    );
};

export default InternalChat;
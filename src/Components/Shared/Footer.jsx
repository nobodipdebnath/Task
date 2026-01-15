import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#2D2A2B] inter ">
      <div className="flex gap-10 lg:gap-[100px] flex-col md:flex-row mx-6 md:mx-0 md:px-[150px] pt-15">
        <div className="max-w-md">
          <h2 className="text-2xl font-semibold text-white">
            Optimal Performance
          </h2>
          <p className="mt-4.5 text-[#FAFAFD] text-sm ">
            Optimal Performance delivers evidence-based, expert-driven
            strategies that empower high performers and organizations to achieve
            performance and wellness results, while providing a trusted platform
            for qualified professionals to share their expertise and scale their
            impact.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <img className="cursor-pointer" src={facebook} alt="" />
            <img className="cursor-pointer" src={instagram} alt="" />
            <img className="cursor-pointer" src={linkedin} alt="" />
            <img className="cursor-pointer" src={twitter} alt="" />
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-white">Quick Links</h4>
          <ul className="flex flex-col gap-5.5 mt-4.5">
            <li className="flex items-center text-base font-medium gap-2.5 text-[#FAFAFD] hover:underline cursor-pointer">
              <FaAngleRight></FaAngleRight>
              <span>Home</span>
            </li>
            <li className="flex items-center text-base font-medium gap-2.5 text-[#FAFAFD] hover:underline cursor-pointer">
              <FaAngleRight></FaAngleRight>
              <span>About</span>
            </li>
            <li className="flex items-center text-base font-medium gap-2.5 text-[#FAFAFD] hover:underline cursor-pointer">
              <FaAngleRight></FaAngleRight>
              <span>Contact</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-white">Legal</h4>
          <ul className="flex flex-col gap-5.5 mt-4.5">
            <li className="flex items-center text-base font-medium gap-2.5 text-[#FAFAFD] hover:underline cursor-pointer">
              Privacy
            </li>
            <li className="flex items-center text-base font-medium gap-2.5 text-[#FAFAFD] hover:underline cursor-pointer">
              Policy
            </li>
            <li className="flex items-center text-base font-medium gap-2.5 text-[#FAFAFD] hover:underline cursor-pointer">
              Trams
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-white">Social Icons</h4>
          <ul className="flex flex-col gap-5.5 mt-4.5">
            <li className="flex items-center text-base font-medium gap-2.5 text-[#FAFAFD] hover:underline cursor-pointer">
              <FaAngleRight></FaAngleRight>
              <span>Instagram</span>
            </li>
            <li className="flex items-center text-base font-medium gap-2.5 text-[#FAFAFD] hover:underline cursor-pointer">
              <FaAngleRight></FaAngleRight>
              <span>Facebook</span>
            </li>
            <li className="flex items-center text-base font-medium gap-2.5 text-[#FAFAFD] hover:underline cursor-pointer">
              <FaAngleRight></FaAngleRight>
              <span>Linkedin</span>
            </li>
            <li className="flex items-center text-base font-medium gap-2.5 text-[#FAFAFD] hover:underline cursor-pointer">
              <FaAngleRight></FaAngleRight>
              <span>Twitter (X)</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white my-4"></div>
      <div className="flex items-center justify-between lg:mx-[200px] mx-4 md:mx-0 text-[#FAFAFD] text-base pb-4.5">
        <p className="hidden md:block">Copyright 2025 FENYX FEMME</p>
        <p>Inc Terms of Service</p>
        <p>Privacy</p>
        <p>Legal</p>
      </div>
    </div>
  );
};

export default Footer;

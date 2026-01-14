import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { FiPlusCircle } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import user from "../assets/images/user.png";
import { FaBrain, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBookJournalWhills } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";

const ChatLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-black py-10 grid grid-cols-5  feature">
      <div className="col-span-1">
        <div className="px-7 h-full border-r-1  border-primary1 w-[250px]">
          <Link to='/' className="text-[50px] text-center font-bold text-white pb-2 border-b border-primary1">
            OP Ai
          </Link>
          <div className="flex flex-col gap-1 mt-4">
            <NavLink to='/chat'>
              <li className="flex items-center gap-2 text-white  p-2.5 w-full hover:bg-[#2D2A2B] rounded-sm">
                <FiPlusCircle></FiPlusCircle>
                <span>Start new chat</span>
              </li>
            </NavLink>
            <NavLink to='/chat/ai-chat'>
              <li className="flex items-center gap-2 text-white p-2.5 w-full hover:bg-[#2D2A2B] rounded-sm">
                <BiMessageDetail></BiMessageDetail>
                <span>AI Chat</span>
              </li>
            </NavLink>
          </div>
          <div className="mt-[360px]">
            <NavLink>
              <li className="text-white flex items-center gap-2 list-none pl-0  p-2.5 w-full border-b border-primary1">
                <FaBrain></FaBrain>
                <span>Mindset Mantra</span>
              </li>
            </NavLink>
            <NavLink to='/chat/journal'>
              <li className="text-white list-none pl-0 flex items-center gap-2  p-2.5 w-full border-b border-primary1">
                <FaBookJournalWhills></FaBookJournalWhills>
                <span>Journal</span>
              </li>
            </NavLink>
            <NavLink>
              <li className="text-white flex items-center gap-2 list-none pl-0  p-2.5 w-full">
                <FaGraduationCap></FaGraduationCap>
                <span> Internal Challenge</span>
              </li>
            </NavLink>
          </div>
          <div className={" mt-8 pt-2.5 border-t border-primary1"}>
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex justify-between items-center text-left font-medium montserrat text-white text-2xl"
            >
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={user}
                alt=""
              />
              <h1 className="text-lg font-bold text-[#FAFAFD]">alex_fowler</h1>
              {open ? (
                <FaChevronUp className="text-2xl cursor-pointer text-white" />
              ) : (
                <FaChevronDown className="text-2xl cursor-pointer text-white" />
              )}
            </button>

            {open && (
              <>
                {/* Open Modal Button */}
                <label
                  htmlFor="my_modal_6"
                  className="p-2.5 w-full bg-[#2D2A2B] rounded-lg text-white font-bold text-lg cursor-pointer mt-2 block text-center"
                >
                  Log Out
                </label>

                <input
                  type="checkbox"
                  id="my_modal_6"
                  className="modal-toggle"
                />
                <div className="modal backdrop-blur-[1px]" role="dialog">
                  <div className="modal-box bg-[#111111] px-20 py-[170px]">
                    <h3 className="text-[#FAFAFD] font-semibold text-center text-[32px]">Logout Confirmation</h3>
                    <p className="text-center text-[#FAFAFD] font-medium text-xl mt-9">Are you sure you want to do logout?</p>

                    <div className="mt-10 flex  items-center gap-4 w-full">
                      <label htmlFor="my_modal_6" className="bg-[#FFFFFF80] text-center p-2.5 rounded-lg font-semibold text-[#FAFAFDB2] w-full cursor-pointer">
                        Cancel
                      </label>
                      <button className="bg-[#C5BB95] cursor-pointer p-2.5 rounded-lg font-semibold text-[#2D2D2D] w-full">Confirm</button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="col-span-4 pr-10">
        <div className="flex justify-end w-full text-[#FAFAFD]">
            <NavLink to='/chat/setting'>
              <h2><IoSettingsOutline className="text-3xl cursor-pointer"></IoSettingsOutline></h2>
            </NavLink>
        </div>
        <div className="">
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;

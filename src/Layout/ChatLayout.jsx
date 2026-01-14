import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { FiPlusCircle } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import user from "../assets/images/user.png";
import { FaBrain, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBookJournalWhills } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { LuLayers3 } from "react-icons/lu";

const ChatLayout = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  console.log("Location", location.pathname);

  const hidePaths = [
    "/chat/journal",
    "/chat/journalHistory",
    "/chat/challenge",
    "/chat/win",
    "/chat/professionalChallenge",
    "/chat/professionalWin",
  ];
  const mindsetPath = ["/chat/mindsetMantra", "/chat/mindsetChat"];
  const internalChallenge = ["/chat/internalChallenge", "/chat/internalChat"];
  const newChat = ["/chat", "/chat/ai-chat"];
  const settingPath = ["/chat/setting"];

  return (
    <div className="min-h-screen  feature">
      <div className="">
        {hidePaths.includes(location?.pathname) && (
          <>
            <div className="fixed flex items-center left-10 top-0  h-screen w-[250px] z-50">
              <div className="px-7 h-full flex flex-col">
                <Link
                  to="/"
                  className="text-[50px] text-center font-bold text-white pb-2 border-b border-primary1 mt-10"
                >
                  OP Ai
                </Link>

                <div className="flex flex-col gap-1 mt-4">
                  <NavLink to="/chat/journal">
                    <li className="flex items-center gap-2 text-white p-2.5 w-full bg-[#2D2A2B] rounded-sm">
                      <FaBookJournalWhills />
                      <span>Journal</span>
                    </li>
                  </NavLink>
                  <NavLink to="/chat/journalHistory">
                    <li className="flex items-center gap-2 text-white p-2.5 w-full bg-[#2D2A2B] rounded-sm">
                      <LuLayers3 />
                      <span>Journal History</span>
                    </li>
                  </NavLink>
                </div>

                <div className="flex-grow"></div>

                <div className="mb-4">
                  <NavLink to="/chat/ai-chat">
                    <li className="text-white flex items-center gap-2 list-none pl-0 p-2.5 w-full border-b border-primary1">
                      <BiMessageDetail />
                      <span>AI Chat</span>
                    </li>
                  </NavLink>
                  <NavLink to="/chat/mindsetMantra">
                    <li className="text-white flex items-center gap-2 list-none pl-0 p-2.5 w-full border-b border-primary1">
                      <FaBrain />
                      <span>Mindset Mantra</span>
                    </li>
                  </NavLink>

                  <NavLink to="/chat/internalChallenge">
                    <li className="text-white flex items-center gap-2 list-none pl-0 p-2.5 w-full">
                      <FaGraduationCap />
                      <span>Internal Challenge</span>
                    </li>
                  </NavLink>
                </div>

                <div className="pt-2.5 border-t border-primary1 pb-10">
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex justify-between items-center text-left font-medium montserrat text-white text-2xl"
                  >
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={user}
                      alt=""
                    />
                    <h1 className="text-lg font-bold text-[#FAFAFD]">
                      alex_fowler
                    </h1>
                    {open ? (
                      <FaChevronUp className="text-2xl cursor-pointer text-white" />
                    ) : (
                      <FaChevronDown className="text-2xl cursor-pointer text-white" />
                    )}
                  </button>

                  {open && (
                    <>
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
                          <h3 className="text-[#FAFAFD] font-semibold text-center text-[32px]">
                            Logout Confirmation
                          </h3>
                          <p className="text-center text-[#FAFAFD] font-medium text-xl mt-9">
                            Are you sure you want to do logout?
                          </p>

                          <div className="mt-10 flex items-center gap-4 w-full">
                            <label
                              htmlFor="my_modal_6"
                              className="bg-[#FFFFFF80] text-center p-2.5 rounded-lg font-semibold text-[#FAFAFDB2] w-full cursor-pointer"
                            >
                              Cancel
                            </label>
                            <button className="bg-[#C5BB95] cursor-pointer p-2.5 rounded-lg font-semibold text-[#2D2D2D] w-full">
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="h-[90vh] w-[1px] bg-primary1"></div>
            </div>
          </>
        )}

        {mindsetPath.includes(location?.pathname) && (
          <>
            <div className="fixed flex items-center left-10 top-0  h-screen w-[250px] z-50">
              <div className="px-7 h-full flex flex-col">
                <Link
                  to="/"
                  className="text-[50px] text-center font-bold text-white pb-2 border-b border-primary1 mt-10"
                >
                  OP Ai
                </Link>

                <div className="flex flex-col gap-1 mt-4">
                  <NavLink to="/chat/mindsetMantra">
                    <li className="flex items-center gap-2 text-white p-2.5 w-full bg-[#2D2A2B] rounded-sm">
                      <FaBrain />
                      <span>Mindset Mantra</span>
                    </li>
                  </NavLink>
                </div>

                <div className="flex-grow"></div>

                <div className="mb-4">
                  <NavLink to="/chat/ai-chat">
                    <li className="text-white flex items-center gap-2 list-none pl-0 p-2.5 w-full border-b border-primary1">
                      <BiMessageDetail />
                      <span>AI Chat</span>
                    </li>
                  </NavLink>
                  <NavLink to="/chat/journal">
                    <li className="text-white list-none pl-0 flex items-center gap-2 p-2.5 w-full border-b border-primary1">
                      <FaBookJournalWhills />
                      <span>Journal</span>
                    </li>
                  </NavLink>
                  <NavLink to="/chat/internalChallenge">
                    <li className="text-white flex items-center gap-2 list-none pl-0 p-2.5 w-full">
                      <FaGraduationCap />
                      <span>Internal Challenge</span>
                    </li>
                  </NavLink>
                </div>

                <div className="pt-2.5 border-t border-primary1 pb-10">
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex justify-between items-center text-left font-medium montserrat text-white text-2xl"
                  >
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={user}
                      alt=""
                    />
                    <h1 className="text-lg font-bold text-[#FAFAFD]">
                      alex_fowler
                    </h1>
                    {open ? (
                      <FaChevronUp className="text-2xl cursor-pointer text-white" />
                    ) : (
                      <FaChevronDown className="text-2xl cursor-pointer text-white" />
                    )}
                  </button>

                  {open && (
                    <>
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
                          <h3 className="text-[#FAFAFD] font-semibold text-center text-[32px]">
                            Logout Confirmation
                          </h3>
                          <p className="text-center text-[#FAFAFD] font-medium text-xl mt-9">
                            Are you sure you want to do logout?
                          </p>

                          <div className="mt-10 flex items-center gap-4 w-full">
                            <label
                              htmlFor="my_modal_6"
                              className="bg-[#FFFFFF80] text-center p-2.5 rounded-lg font-semibold text-[#FAFAFDB2] w-full cursor-pointer"
                            >
                              Cancel
                            </label>
                            <button className="bg-[#C5BB95] cursor-pointer p-2.5 rounded-lg font-semibold text-[#2D2D2D] w-full">
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="h-[90vh] w-[1px] bg-primary1"></div>
            </div>
          </>
        )}

        {internalChallenge.includes(location?.pathname) && (
          <>
            <div className="fixed flex items-center left-10 top-0  h-screen w-[250px] z-50">
              <div className="px-7 h-full flex flex-col">
                <Link
                  to="/"
                  className="text-[50px] text-center font-bold text-white pb-2 border-b border-primary1 mt-10"
                >
                  OP Ai
                </Link>

                <div className="flex flex-col gap-1 mt-4">
                  <NavLink to="/chat/internalChallenge">
                    <li className="flex items-center gap-2 text-white p-2.5 w-full bg-[#2D2A2B] rounded-sm">
                      <FaBrain />
                      <span>Internal Challenge</span>
                    </li>
                  </NavLink>
                </div>

                <div className="flex-grow"></div>

                <div className="mb-4">
                  <NavLink to="/chat/ai-chat">
                    <li className="text-white flex items-center gap-2 list-none pl-0 p-2.5 w-full border-b border-primary1">
                      <BiMessageDetail />
                      <span>AI Chat</span>
                    </li>
                  </NavLink>
                  <NavLink to="/chat/journal">
                    <li className="text-white list-none pl-0 flex items-center gap-2 p-2.5 w-full border-b border-primary1">
                      <FaBookJournalWhills />
                      <span>Journal</span>
                    </li>
                  </NavLink>
                  <NavLink to="/chat/mindsetMantra">
                    <li className="text-white flex items-center gap-2 list-none pl-0 p-2.5 w-full">
                      <FaGraduationCap />
                      <span>Mindset Mantra</span>
                    </li>
                  </NavLink>
                </div>

                <div className="pt-2.5 border-t border-primary1 pb-10">
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex justify-between items-center text-left font-medium montserrat text-white text-2xl"
                  >
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={user}
                      alt=""
                    />
                    <h1 className="text-lg font-bold text-[#FAFAFD]">
                      alex_fowler
                    </h1>
                    {open ? (
                      <FaChevronUp className="text-2xl cursor-pointer text-white" />
                    ) : (
                      <FaChevronDown className="text-2xl cursor-pointer text-white" />
                    )}
                  </button>

                  {open && (
                    <>
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
                          <h3 className="text-[#FAFAFD] font-semibold text-center text-[32px]">
                            Logout Confirmation
                          </h3>
                          <p className="text-center text-[#FAFAFD] font-medium text-xl mt-9">
                            Are you sure you want to do logout?
                          </p>

                          <div className="mt-10 flex items-center gap-4 w-full">
                            <label
                              htmlFor="my_modal_6"
                              className="bg-[#FFFFFF80] text-center p-2.5 rounded-lg font-semibold text-[#FAFAFDB2] w-full cursor-pointer"
                            >
                              Cancel
                            </label>
                            <button className="bg-[#C5BB95] cursor-pointer p-2.5 rounded-lg font-semibold text-[#2D2D2D] w-full">
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="h-[90vh] w-[1px] bg-primary1"></div>
            </div>
          </>
        )}

        {newChat.includes(location?.pathname) && (
          <>
            <div className="fixed flex items-center left-10 top-0  h-screen w-[250px] z-50">
              <div className="px-7 h-full flex flex-col">
                <Link
                  to="/"
                  className="text-[50px] text-center font-bold text-white pb-2 border-b border-primary1 mt-10"
                >
                  OP Ai
                </Link>

                <div className="flex flex-col gap-1 mt-4">
                  <NavLink to="/chat" className={({ isActive }) => `rounded-sm ${isActive ? "bg-[#2D2A2B] text-white" : "text-white"}`}>
                    <li className="flex items-center rounded-sm gap-2 text-white p-2.5 w-full hover:bg-[#2D2A2B] ">
                      <FiPlusCircle />
                      <span>Start new chat</span>
                    </li>
                  </NavLink>
                  <NavLink to="/chat/ai-chat" className={({ isActive }) => `rounded-sm ${isActive ? "bg-[#2D2A2B] text-white" : "text-white"}`}>
                    <li className="flex items-center gap-2 text-white p-2.5 w-full hover:bg-[#2D2A2B] rounded-sm">
                      <BiMessageDetail />
                      <span>AI Chat</span>
                    </li>
                  </NavLink>
                </div>

                <div className="flex-grow"></div>

                <div className="mb-4">
                  <NavLink to="/chat/mindsetMantra">
                    <li className="text-white flex items-center gap-2 list-none pl-0 p-2.5 w-full border-b border-primary1">
                      <FaBrain />
                      <span>Mindset Mantra</span>
                    </li>
                  </NavLink>
                  <NavLink to="/chat/journal">
                    <li className="text-white list-none pl-0 flex items-center gap-2 p-2.5 w-full border-b border-primary1">
                      <FaBookJournalWhills />
                      <span>Journal</span>
                    </li>
                  </NavLink>
                  <NavLink to="/chat/internalChallenge">
                    <li className="text-white flex items-center gap-2 list-none pl-0 p-2.5 w-full">
                      <FaGraduationCap />
                      <span>Internal Challenge</span>
                    </li>
                  </NavLink>
                </div>

                <div className="pt-2.5 border-t border-primary1 pb-10">
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex justify-between items-center text-left font-medium montserrat text-white text-2xl"
                  >
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={user}
                      alt=""
                    />
                    <h1 className="text-lg font-bold text-[#FAFAFD]">
                      alex_fowler
                    </h1>
                    {open ? (
                      <FaChevronUp className="text-2xl cursor-pointer text-white" />
                    ) : (
                      <FaChevronDown className="text-2xl cursor-pointer text-white" />
                    )}
                  </button>

                  {open && (
                    <>
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
                          <h3 className="text-[#FAFAFD] font-semibold text-center text-[32px]">
                            Logout Confirmation
                          </h3>
                          <p className="text-center text-[#FAFAFD] font-medium text-xl mt-9">
                            Are you sure you want to do logout?
                          </p>

                          <div className="mt-10 flex items-center gap-4 w-full">
                            <label
                              htmlFor="my_modal_6"
                              className="bg-[#FFFFFF80] text-center p-2.5 rounded-lg font-semibold text-[#FAFAFDB2] w-full cursor-pointer"
                            >
                              Cancel
                            </label>
                            <button className="bg-[#C5BB95] cursor-pointer p-2.5 rounded-lg font-semibold text-[#2D2D2D] w-full">
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="h-[90vh] w-[1px] bg-primary1"></div>
            </div>
          </>
        )}
        {settingPath.includes(location?.pathname) && (
          <>
            <div className="fixed flex items-center left-10 top-0  h-screen w-[250px] z-50">
              <div className="px-7 h-full flex flex-col">
                <Link
                  to="/"
                  className="text-[50px] text-center font-bold text-white pb-2 border-b border-primary1 mt-10"
                >
                  OP Ai
                </Link>

                <div className="flex flex-col gap-1 mt-4">
                  <NavLink to="/chat">
                    <li className="flex items-center gap-2 text-white p-2.5 w-full hover:bg-[#2D2A2B] rounded-sm">
                      <FiPlusCircle />
                      <span>Start new chat</span>
                    </li>
                  </NavLink>
                  <NavLink to="/chat/ai-chat">
                    <li className="flex items-center gap-2 text-white p-2.5 w-full hover:bg-[#2D2A2B] rounded-sm">
                      <BiMessageDetail />
                      <span>AI Chat</span>
                    </li>
                  </NavLink>
                </div>

                <div className="flex-grow"></div>

                <div className="mb-4">
                  <NavLink to="/chat/mindsetMantra">
                    <li className="text-white flex items-center gap-2 list-none pl-0 p-2.5 w-full border-b border-primary1">
                      <FaBrain />
                      <span>Mindset Mantra</span>
                    </li>
                  </NavLink>
                  <NavLink to="/chat/journal">
                    <li className="text-white list-none pl-0 flex items-center gap-2 p-2.5 w-full border-b border-primary1">
                      <FaBookJournalWhills />
                      <span>Journal</span>
                    </li>
                  </NavLink>
                  <NavLink to="/chat/internalChallenge">
                    <li className="text-white flex items-center gap-2 list-none pl-0 p-2.5 w-full">
                      <FaGraduationCap />
                      <span>Internal Challenge</span>
                    </li>
                  </NavLink>
                  <NavLink to="/chat">
                    <li className="text-white flex justify-end items-center gap-2 list-none pl-0 p-2.5 w-full">
                      <span>View all</span>
                    </li>
                  </NavLink>
                  
                </div>

                <div className="flex-grow"></div>

                <div className="pt-2.5 border-t border-primary1 pb-10">
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex justify-between items-center text-left font-medium montserrat text-white text-2xl"
                  >
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={user}
                      alt=""
                    />
                    <h1 className="text-lg font-bold text-[#FAFAFD]">
                      alex_fowler
                    </h1>
                    {open ? (
                      <FaChevronUp className="text-2xl cursor-pointer text-white" />
                    ) : (
                      <FaChevronDown className="text-2xl cursor-pointer text-white" />
                    )}
                  </button>

                  {open && (
                    <>
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
                          <h3 className="text-[#FAFAFD] font-semibold text-center text-[32px]">
                            Logout Confirmation
                          </h3>
                          <p className="text-center text-[#FAFAFD] font-medium text-xl mt-9">
                            Are you sure you want to do logout?
                          </p>

                          <div className="mt-10 flex items-center gap-4 w-full">
                            <label
                              htmlFor="my_modal_6"
                              className="bg-[#FFFFFF80] text-center p-2.5 rounded-lg font-semibold text-[#FAFAFDB2] w-full cursor-pointer"
                            >
                              Cancel
                            </label>
                            <button className="bg-[#C5BB95] cursor-pointer p-2.5 rounded-lg font-semibold text-[#2D2D2D] w-full">
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* <div className="h-[90vh] w-[1px] bg-primary1"></div> */}
            </div>
          </>
        )}
      </div>
      <div className="ml-[250px] min-h-screen">
        <div className="max-w-[1190px] mx-auto py-10 px-10">
          <div className="flex justify-end w-full fixed  right-20 text-[#FAFAFD] mb-6">
            {location?.pathname !== "/chat/journalHistory" && (
              <NavLink
                to="/chat/setting"
                className={({ isActive }) =>
                  `p-3 rounded-full ${
                    isActive ? "bg-primary1 text-black" : "text-white"
                  }`
                }
              >
                <h2>
                  <IoSettingsOutline className="text-3xl cursor-pointer" />
                </h2>
              </NavLink>
            )}
          </div>

          <div className="overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;

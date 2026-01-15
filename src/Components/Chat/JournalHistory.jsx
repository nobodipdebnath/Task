import React, { useState } from 'react';
import { FaChevronDown,} from 'react-icons/fa6';
import { MdDelete } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router';

const JournalHistory = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("All Categories");
    const navigate = useNavigate();

    const categories = [
        "All Categories",
        "AI",
        "Design",
        "Development",
        "Marketing",
    ];
    const history = [
        {
            id: 1,
            entryId: '#JE-001',
            description: 'Type your Goals...........',
            createdDate: '',
            action: ""
        },
        {
            id: 2,
            entryId: '#JE-002',
            description: 'Project Ideas for Website Redesign',
            createdDate: 'Aug 19, 2023',
            action: <MdDelete></MdDelete>
        },
        {
            id: 3,
            entryId: '#JE-003',
            description: 'Weekly Goals and Priorities',
            createdDate: 'Aug 15, 2023',
            action: <MdDelete></MdDelete>
        },
        {
            id: 4,
            entryId: '#JE-004',
            description: 'Meeting Notes with Marketing Team',
            createdDate: 'Aug 12, 2023',
            action: <MdDelete></MdDelete>
        },
        {
            id: 5,
            entryId: '#JE-005',
            description: 'Personal Reflections on Recent Changes',
            createdDate: 'Aug 10, 2023',
            action: <MdDelete></MdDelete>
        },
        {
            id: 6,
            entryId: '#JE-006',
            description: 'Book Notes: "Atomic Habits',
            createdDate: 'Aug 08, 2023',
            action: <MdDelete></MdDelete>
        },
        {
            id: 7,
            entryId: '#JE-007',
            description: 'Monthly Review: July 2023',
            createdDate: 'Aug 05, 2023',
            action: <MdDelete></MdDelete>
        },
        {
            id: 8,
            entryId: '#JE-008',
            description: 'Travel Plans for September Vacation',
            createdDate: 'Aug 02, 2023',
            action: <MdDelete></MdDelete>
        },
    ];

    return (
        <div>
            <div className='flex mt-10 md:mt-0 items-center justify-between'>
                <div onClick={() => navigate(-1)} className='py-2 px-4 bg-[#2D2A2B] cursor-pointer'>
                    <FaArrowLeft className='text-[#FAFAFD] text-xl'></FaArrowLeft>
                </div>
                <h1 className='text-[#FAFAFD] league-gothic text-4xl md:text-[64px]'>Journal Entries Management</h1>
                <div>
                </div>
            </div>
            <div className='flex items-center justify-between mt-12.5'>
                <h2 className='text-[#FAFAFD] font-medium lg:text-xl text-sm px-4 py-3 md:py-1 bg-[#2D2A2B] rounded-md'>Your Journal Entries</h2>
                <div className="relative inline-block w-[220px]">
                    <button
                        onClick={() => setOpen(!open)}
                        className="w-full flex items-center justify-between bg-[#2B2929] text-white px-6 py-2 rounded-md"
                    >
                        <span className=" text-base">{selected}</span>
                        <FaChevronDown
                        className={`text-sm transition-transform ${
                            open ? "rotate-180" : ""
                        }`}
                        />
                    </button>

                    {open && (
                        <ul className="absolute left-0 mt-2 w-full bg-[#2B2929] rounded-xl shadow-lg overflow-hidden z-50">
                        {categories.map((item, index) => (
                            <li
                            key={index}
                            onClick={() => {
                                setSelected(item);
                                setOpen(false);
                            }}
                            className="px-6 py-3 text-white hover:bg-[#3A3737] cursor-pointer"
                            >
                            {item}
                            </li>
                        ))}
                        </ul>
                    )}
                </div>
            </div>
            <hr className='text-primary1 my-5'/>
            <div className='py-4 bg-[#2D2A2B] text-[#FAFAFD] text-sm md:text-xl font-medium montserrat flex items-center md:justify-between gap-6 md:gap-0 rounded-md px-6'>
                <div className='flex items-center gap-13'>
                    <h3 >Entry ID</h3>
                    <h4>Description</h4>
                </div>
                <div className='flex items-center gap-13'>
                    <p>Created Date</p>
                    <p>Actions</p>
                </div>
            </div>
            <div className='flex flex-col gap-2.5 mt-10'>
                {
                    history.map(item => {
                        return(
                            <div className='py-4 bg-[#2D2A2B] text-[#FAFAFD] montserrat flex items-center justify-between rounded-md px-6' key={item.id}>
                                <div className='flex items-center gap-13'>
                                    <h3 className='font-semibold'>{item.entryId}</h3>
                                    <h4>{item.description}</h4>
                                </div>
                                <div className='flex items-center gap-13'>
                                    <p className='font-semibold'>{item.createdDate}</p>
                                    <p className='text-2xl text-red-500 cursor-pointer'>{item.action}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='grid md:grid-cols-3 mt-13.5 gap-10'>
                <div className='col-span-1'>
                    <h2 className='text-lg text-[#FAFAFD] font-semibold'>Categories</h2>
                    <div className='mt-5 flex flex-col gap-2.5'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span className='h-4 w-4 bg-[#FAFAFD] rounded-full'></span>
                                <p className='text-xl font-semibold text-[#FAFAFD]'>Personal Win</p>
                            </div>
                            <p className='text-base text-[#FAFAFD]'>10</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span className='h-4 w-4 bg-[#2D2A2B] rounded-full'></span>
                                <p className='text-xl font-semibold text-[#FAFAFD]'>Personal Challenge</p>
                            </div>
                            <p className='text-base text-[#FAFAFD]'>8</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span className='h-4 w-4 bg-primary1 rounded-full'></span>
                                <p className='text-xl font-semibold text-[#FAFAFD]'>Professional Win</p>
                            </div>
                            <p className='text-base text-[#FAFAFD]'>4</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span className='h-4 w-4 bg-[#8E7D3F] rounded-full'></span>
                                <p className='text-xl font-semibold text-[#FAFAFD]'>Professional Challenge</p>
                            </div>
                            <p className='text-base text-[#FAFAFD]'>2</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <h2 className='text-lg text-[#FAFAFD] font-semibold'>Statistics</h2>
                    <div className='mt-5 flex flex-col gap-4'>
                        <div className="w-full max-w-3xl bg-[#2B2929] rounded-lg px-6 py-4">
                            <div className="flex justify-between items-center text-white mb-3">
                                <h2 className="text-lg font-medium">Total Entries</h2>
                                <span className="text-lg font-medium">24</span>
                            </div>

                            <div className="w-full h-3 bg-[#ffffff] rounded-full overflow-hidden">
                                <div
                                className="h-full bg-[#9C8C4A] rounded-full transition-all duration-500"
                                style={{ width: `100%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="w-full max-w-3xl bg-[#2B2929] rounded-lg px-6 py-4">
                            <div className="flex justify-between items-center text-white mb-3">
                                <h2 className="text-lg font-medium">This Month</h2>
                                <span className="text-lg font-medium">8</span>
                            </div>

                            <div className="w-full h-3 bg-[#ffffff] rounded-full overflow-hidden">
                                <div
                                className="h-full bg-[#9C8C4A] rounded-full transition-all duration-500"
                                style={{ width: `70%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="w-full max-w-3xl bg-[#2B2929] rounded-lg px-6 py-4">
                            <div className="flex justify-between items-center text-white mb-3">
                                <h2 className="text-lg font-medium">Last Week</h2>
                                <span className="text-lg font-medium">8</span>
                            </div>

                            <div className="w-full h-3 bg-[#ffffff] rounded-full overflow-hidden">
                                <div
                                className="h-full bg-[#9C8C4A] rounded-full transition-all duration-500"
                                style={{ width: `55%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JournalHistory;
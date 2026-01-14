import React from 'react';
import { MdDelete } from "react-icons/md";

const JournalHistory = () => {
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
    ]
    return (
        <div>
            <div className='py-4 bg-[#2D2A2B] text-[#FAFAFD] text-xl font-medium montserrat flex items-center justify-between rounded-md px-6'>
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
            
        </div>
    );
};

export default JournalHistory;
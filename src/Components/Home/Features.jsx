import React from 'react';
import message from '../../assets/images/message.png'
import voice from '../../assets/images/voicce.png'
import video from '../../assets/images/video.png'
import tv from '../../assets/images/TV.png'
import tik from '../../assets/images/TIK.png'

const Features = () => {
    const cards = [
        {
            id: 1,
            title: 'Smart AI Chat Support',
            description: 'Engage in dynamic conversations with our AI coach, receiving tailored advice and guidance.',
            image: message
        },
        {
            id: 2,
            title: 'Text & Voice Interaction',
            description: 'Interact seamlessly through text or voice, powered by advanced 11Labs technology.',
            image: voice
        },
        {
            id: 3,
            title: 'Suggests Videos & Blogs',
            description: 'Receive curated video and blog suggestions aligned with your goals and interests..',
            image: video
        },
        {
            id: 4,
            title: ' Performance and Mental Wellbeing Coaching',
            description: 'Gain valuable insights into your performance, with personalized feedback and progress tracking.',
            image: tv
        },
        {
            id: 5,
            title: 'OP Mental Performance Tools',
            description: 'Rest assured with our HIPAA-compliant architecture, ensuring your data s privacy and security.',
            image: tik
        },

    ]
    return (
        <div className='feature pt-12.5'>
            <div className='flex items-center text-white flex-col justify-center '>
                <button className='button-2 flex items-center gap-3'>
                    <div className='h-3 w-3 rounded-full bg-primary1 hover:bg-black'></div>
                    <span>Features</span>
                </button>
                <p className="text-center text-xl montserrat mt-12.5">Explore the capabilities of our AI coach chatbot, designed to enhance your personal and professional growth.</p>
                <h2 className="text-[64px] league-gothic font-bold mt-6">Core Features</h2>
                <p className="text-center text-xl montserrat mt-6">Our AI coach chatbot offers a range of features to support your growth journey.</p>
            </div>
            <div className='py-25 mx-4 md:mx-[250px]'>
                <div className='grid lg:grid-cols-3 justify-center gap-10 lg:gap-6'>
                    {
                        cards?.slice(0, 3).map(card => {
                            return(
                                <div className='px-6 pb-6 pt-12 bg-primary1 justify-center items-center rounded-xl relative flex flex-col ' key={card.id}>
                                    <h3 className='text-lg font-bold text-black mb-1'>{card.title}</h3>
                                    <p className='text-center inter text-sm text-[#2D2A2B]'>{card.description}</p>
                                    <div>
                                        <img className='p-4 absolute -top-7 left-[42%] right-[45%] border bg-[#8E7D3F] border-white rounded-xl' src={card.image} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex mt-15 flex-col md:flex-row mx-[12%] justify-center gap-10 lg:gap-6'>
                    {
                        cards?.slice(3, 5).map(card => {
                            return(
                                <div className='px-6 pb-6 pt-12 bg-primary1 justify-center items-center rounded-xl relative flex flex-col md:w-full ' key={card.id}>
                                    <h3 className='text-lg font-bold text-center text-black mb-1'>{card.title}</h3>
                                    <p className='text-center inter text-sm text-[#2D2A2B]'>{card.description}</p>
                                    <div>
                                        <img className='p-4 absolute -top-7 right-[43%] border bg-[#8E7D3F] border-white rounded-xl' src={card.image} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Features;
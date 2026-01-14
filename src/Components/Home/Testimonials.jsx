import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import user from '../../assets/images/user.png'
import user2 from '../../assets/images/user2.png'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "The program's foundation in exercise science and its commitment to individualized training plans are truly impressive. It's a comprehensive approach that I wholeheartedly endorse.",
      name: "Mickael grants",
      title: "CEO of Apples to Oranges",
      image: user,
      rating: 5
    },
    {
      id: 2,
      text: "The program's foundation in exercise science and its commitment to individualized training plans are truly impressive. It's a comprehensive approach that I wholeheartedly endorse.",
      name: "Mickael grants",
      title: "CEO of Apples to Oranges",
      image: user2,
      rating: 5
    },
    {
      id: 3,
      text: "The program's foundation in exercise science and its commitment to individualized training plans are truly impressive. It's a comprehensive approach that I wholeheartedly endorse.",
      name: "Mickael grants",
      title: "CEO of Apples to Oranges",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5
    },
    {
      id: 4,
      text: "Outstanding program with exceptional results. The personalized approach makes all the difference in achieving fitness goals.",
      name: "Sarah Johnson",
      title: "Fitness Enthusiast",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5
    },
    {
      id: 5,
      text: "I've tried many fitness programs, but this one stands out. The science-backed methodology and individual attention are unmatched.",
      name: "David Chen",
      title: "Personal Trainer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      rating: 5
    }
  ];

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className='pt-[50px] bg-black pb-16'>
      <div className='flex items-center justify-center mb-25'>
        <button className='button-2 text-white flex items-center gap-3'>
          <div className='h-3 w-3 rounded-full bg-primary1 hover:bg-black'></div>
          <span>Testimonials / Expert Backing</span>
        </button>
      </div>

      <div className=" px-4">
        <div className="grid mx-[8%] grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-r from-[#181F23] to-[#21323A] rounded-xl p-7 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              <p className="text-[#FAFAFD] text-base leading-relaxed font-medium mb-6">
                {testimonial.text}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[#8E7D3F] font-medium text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#8E7D3F] text-xs">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                
                <div className="flex py-1.5 px-2.5 bg-[#8E7D3F] rounded-full border border-[#181F23] gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary1 text-primary1"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border-2 border-primary1 cursor-pointer  flex items-center justify-center text-[#8E7D3F] transition-all duration-500 hover:bg-white/15 "
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-primary1 cursor-pointer flex items-center justify-center text-[#8E7D3F] transition-all duration-500 hover:bg-white/15"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
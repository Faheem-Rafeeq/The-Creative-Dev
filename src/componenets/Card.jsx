import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-black text-white border border-white p-5 sm:p-6 md:p-7 w-full sm:w-[350px] md:w-[380px] lg:w-[400px] h-auto min-h-[380px] sm:min-h-[400px] md:h-[430px] flex flex-col justify-between shadow-md transition-transform hover:scale-[1.02] sm:hover:scale-105">
      
      {/* Icon and Title Container */}
      <div className='mt-4 sm:mt-6 md:mt-7'>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-5'>
          <img 
            src={image} 
            alt="icon" 
            className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mb-3 sm:mb-4" 
          />
          
          {/* Title */}
          <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold leading-tight mb-3 sm:mb-4">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/80 mb-4 sm:mb-4 mt-4 sm:mt-5 md:mt-6">
          {description}
        </p>
      </div>

      {/* Read More */}
      <div className="mb-4 sm:mb-5 md:mb-7">
        <h2 className="uppercase text-xs sm:text-sm font-semibold flex items-center gap-1 hover:underline cursor-pointer">
          Read More <GoArrowUpRight />
        </h2>
      </div>
    </div>
  );
};

export default Card;
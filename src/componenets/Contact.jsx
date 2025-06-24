import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-black via-[#4a0000] to-[#ff4500] flex items-center px-4 sm:px-8">
      <div className="max-w-3xl mt-[30px] ">
        {/* Headings */}
        <div className="space-y-2 mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase">
            Ready to Dominate The
          </h1>
          <h1 className="text-3xl uppercase sm:text-4xl md:text-5xl font-bold text-white">
            Digital Landscape?
          </h1>
          <h2 className="text-3xl font-bold sm:text-2xl text-white mt-10 ">
            Let's create a winning strategy together
          </h2>
        </div>

        {/* Description */}
        <p className="text-white text-base sm:text-lg mb-8 max-w-2xl mt-12">
          The Creative Dudes offers expert digital marketing services including SEO, social media ads,
          Google Ads, email marketing, eCommerce strategy, and more to grow your business and boost
          online presence.
        </p>

        {/* CTA Button - square with no hover effects */}
        <div className="flex items-center gap-2 bg-white text-black font-medium px-5 py-3 w-full sm:w-[200px] h-[50px] uppercase">
          GET STARTED <GoArrowUpRight className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
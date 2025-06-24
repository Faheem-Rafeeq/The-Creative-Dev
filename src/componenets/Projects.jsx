import React from 'react';
import shopify from '../assets/shopify.png';
import google from '../assets/google.png';
import amazon from '../assets/amazon.png';
import commerce from '../assets/commerce.png';
import cloud from '../assets/cloud.png';
import add from '../assets/add.png';
import meta from '../assets/meta.png';

const Projects = () => {
  const techImages = [commerce, shopify, google, meta, cloud, add, amazon];

  return (
    <div className="w-full bg-white py-8 md:py-16 mt-20 gap-5 px-4 sm:px-8 lg:px-16 min-h-[70vh]">
      {/* Heading */}
      <div className="mb-8 md:mb-12 text-center md:text-left">
        <h2 className="text-sm sm:text-lg text-black uppercase tracking-widest font-semibold">
          Our Projects
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mt-4 sm:mt-6 md:mt-10 uppercase">
          Technologies We Work On
        </h1>
      </div>

      {/* Tech Icons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {techImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="tech-logo"
            className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
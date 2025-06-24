import React from 'react';
import image from '../assets/image.jpg';
import arrow from '../assets/arrow.png';
import { GoArrowUpRight } from 'react-icons/go';

const About = () => {
  const heading = 'About Company Your Partners in Digital Transformation'.toUpperCase();

  const paragraph =
    "Welcome to The Creative Dudes, your trusted digital marketing partner in the World! We specialize in empowering brands to stand out in the digital landscape through innovative strategies and data-driven solutions. Whether you're a startup aiming to make your mark or an established business looking to amplify your reach, The Creative Dudes combines creativity, technology, and expertise to drive measurable success.";

  const features = [
    'Results driven digital marketing',
    'Creative brand strategy',
    'Social media mastery',
    'Web design & development',
    'Data driven analytics',
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full bg-white min-h-[700px] px-4 md:px-6 lg:px-10 py-10 lg:py-0">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pr-6 order-2 lg:order-1">
        <h1 className="text-xl md:text-2xl font-bold text-black mb-2">ABOUT COMPANY</h1>
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">{heading}</h1>
        <p className="text-black font-medium leading-relaxed mb-6 text-base md:text-lg">
          {paragraph}
        </p>

        <div className="space-y-2 mb-6">
          {features.map((item, index) => (
            <h3
              key={index}
              className="text-black font-bold text-lg md:text-xl uppercase"
            >
              • {item}
            </h3>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center lg:justify-start items-center gap-2 bg-black text-white font-medium px-5 py-2 rounded cursor-pointer hover:bg-gray-800 transition w-full md:w-[200px] h-[50px] md:h-[60px] uppercase mt-6">
          More About us <GoArrowUpRight className="text-xl" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 mt-0 lg:mt-[100px] relative flex justify-center items-center order-1 lg:order-2 mb-10 lg:mb-0">
        {/* Arrow Box */}
        <div className="h-[100px] w-[100px] md:h-[120px] md:w-[120px] lg:h-[150px] lg:w-[150px] bg-black absolute top-0 right-0 lg:right-10 flex justify-center items-center z-10">
          <img
            className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]"
            src={arrow}
            alt="Arrow"
          />
        </div>

        {/* Profile Image */}
        <img
          className="rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-cover"
          src={image}
          alt="About Creative Dudes"
        />
      </div>
    </div>
  );
};

export default About;
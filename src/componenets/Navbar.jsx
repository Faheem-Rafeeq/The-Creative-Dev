import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black w-full h-[90px] flex items-center justify-between px-4 md:px-10 relative">
      {/* Logo */}
      <div>
        <img
          className="w-[150px] md:w-[190px] h-[40px] md:h-[50px] mt-[7px]"
          src="https://thecreativedudes.com/wp-content/uploads/2024/11/CD-logo-scaled-e1745344347565.png"
          alt="Creative Dudes Logo"
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:block">
        <ul className="flex flex-row space-x-4 lg:space-x-6">
          <li className="text-white font-bold cursor-pointer font-sans text-lg lg:text-xl hover:text-gray-300 transition">HOME</li>
          <li className="text-white font-bold cursor-pointer font-sans text-lg lg:text-xl hover:text-gray-300 transition flex items-center">
            ABOUT US <span className='ml-1'><IoIosArrowDown /></span>
          </li>
          <li className="text-white font-bold cursor-pointer font-sans text-lg lg:text-xl hover:text-gray-300 transition flex items-center">
            WHAT WE DO<span className='ml-1'><IoIosArrowDown/></span>
          </li>
          <li className="text-white font-bold cursor-pointer font-sans text-lg lg:text-xl hover:text-gray-300 transition">OUR WORK</li>
          <li className="text-white font-bold cursor-pointer font-sans text-lg lg:text-xl hover:text-gray-300 transition">CONTACT</li>
        </ul>
      </div>

      {/* Button - Desktop */}
      <div className="hidden md:block">
        <div className="gap-1 flex bg-white text-black font-medium px-4 lg:px-5 py-2 cursor-pointer hover:bg-gray-200 transition items-center">
          Let's Talk <span className='text-xl'><GoArrowUpRight/></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[90px] left-0 w-full bg-black z-50 py-4 px-4">
          <ul className="flex flex-col space-y-4">
            <li className="text-white font-bold cursor-pointer font-sans text-xl hover:text-gray-300 transition py-2">HOME</li>
            <li className="text-white font-bold cursor-pointer font-sans text-xl hover:text-gray-300 transition py-2 flex items-center justify-between">
              ABOUT US <span><IoIosArrowDown /></span>
            </li>
            <li className="text-white font-bold cursor-pointer font-sans text-xl hover:text-gray-300 transition py-2 flex items-center justify-between">
              WHAT WE DO<span><IoIosArrowDown/></span>
            </li>
            <li className="text-white font-bold cursor-pointer font-sans text-xl hover:text-gray-300 transition py-2">OUR WORK</li>
            <li className="text-white font-bold cursor-pointer font-sans text-xl hover:text-gray-300 transition py-2">CONTACT</li>
            <li className="pt-4">
              <div className="gap-1 flex bg-white text-black font-medium px-5 py-3 cursor-pointer hover:bg-gray-200 transition justify-center items-center">
                Let's Talk <span className='text-xl'><GoArrowUpRight/></span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
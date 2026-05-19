import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" className=" w-[200px]" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
          <a href="#Contact" className="cursor-pointer hover:text-gray-400">
            Contact
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Signup
        </button>

        <img
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt=""
          onClick={() => setShowMobileMenu(true)}
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full bg-white z-50 transition-transform duration-300 ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={assets.cross_icon}
            className="w-6"
            alt=""
            onClick={() => setShowMobileMenu(false)}
          />
        </div>

        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            href="#Header"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            href="#About"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            href="#Projects"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonails"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonails
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

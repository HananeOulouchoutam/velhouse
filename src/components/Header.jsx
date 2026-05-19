import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      id="Header"
      className="min-h-screen bg-cover bg-center flex items-center w-full mb-8 overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      <Navbar />
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 container text-center mx-auto py-4 px-6  md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-5xl sm:text-6xl md:text-[72px] inline-block max-w-3xl font-semibold pt-20">
          Unlock the door to your dream home today.
        </h2>
        <div className="space-x-6 mt-16">
          <a
            href="#Projects"
            className="border border-white px-8 py-3 rounded transition duration-300 hover:bg-white hover:text-black hover:scale-105"
          >
            Projects
          </a>

          <a
            href="#Contact"
            className="bg-orange-500 px-8 py-3 rounded text-white transition duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;

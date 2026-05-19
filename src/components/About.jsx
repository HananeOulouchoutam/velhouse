import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="About"
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 ">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Where property expertise meets your personal vision
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">15+</p>
              <p>Years of Market Experience</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">250+</p>
              <p>Projects Successfully Delivered</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">35M+</p>
              <p>Sq. Ft. Developed</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">40+</p>
              <p>Active Developments</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            We are committed to delivering exceptional real estate solutions
            that combine innovation, quality, and trust. Over the years, we have
            built a strong reputation for creating spaces that inspire living,
            working, and investing. Our mission is to turn every project into a
            lasting value for our clients and communities.
          </p>
          <button className="bg-orange-600 text-white px-8 py-2 rounded transition duration-300 hover:bg-orange-700 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

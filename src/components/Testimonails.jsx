import React from "react";
import { testimonialsData, assets } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonails = () => {
  return (
    <motion.div
    initial={{opacity:0 , x:100}}
      transition ={{duration : 1}}
      whileInView={{opacity:1 , x:0}}
      viewport={{once:true}}
      id="Testimonials"
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real experiences from clients who found more than a house — they found a home.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[280px] border shadow-lg rounded px-6 py-10 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            <div className="flex justify-center items-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating || 0 }, (_, index) => (
                <img
                  key={index}
                  src={assets.star_icon}
                  alt="star"
                  className="w-4 h-4"
                />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonails;

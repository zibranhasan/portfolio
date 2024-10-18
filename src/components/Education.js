import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants"; // Ensure you have this variant defined
import { NavLink } from "react-router-dom";

const Education = () => {
  return (
    <section id="education" className="py-4">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Education
        </motion.h2>
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Degree 1 */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="p-6 rounded-lg shadow-lg mb-4 lg:mb-0 flex-1"
          >
            <motion.h3
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-2xl font-semibold mb-2 text-white"
            >
              Bachelor's in Computer and Communication Engineering
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-lg mb-2 text-gray-300"
            >
              International Islamic University Chittagong
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-gray-400"
            >
              Core coursework includes advanced computer science principles and
              communication systems. Emphasis on both software and hardware
              aspects of modern technology.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mt-4"
            >
              <NavLink to="/edu-details">
                <span className="text-blue-400 hover:underline cursor-pointer">
                  View Details
                </span>
              </NavLink>
            </motion.div>
          </motion.div>
          {/* Add more degree sections here if needed */}
        </div>
      </div>
    </section>
  );
};

export default Education;

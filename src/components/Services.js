import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { NavLink } from "react-router-dom";

// Project categories based on skills
const services = [
  { name: "E-commerce Website" },
  { name: "Portfolio Website" },
  { name: "Content Management System" },
  { name: "Task Management App" },
  { name: "Social Media App" },
  { name: "Blog Website" },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text section */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-8 lg:mb-0"
          >
            <h2 className="text-accent text-4xl font-bold mb-6">What I Do</h2>
            <h3 className="text-white text-2xl max-w-[455px] mb-8">
              I am a freelance MERN Stack Developer.
            </h3>
            <NavLink to="/all-work" className="navlink text-accent">
              <span className="text-gradient text-lg underline underline-offset-4">
                See my work
              </span>
            </NavLink>
          </motion.div>

          {/* categories section */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  className="border-b border-gray-700 pb-4 flex items-center"
                  key={index}
                >
                  <h4 className="text-lg font-semibold text-gradient">
                    {service.name}
                  </h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

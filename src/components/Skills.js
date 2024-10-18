import React from "react";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="section" id="skills" ref={ref}>
      <motion.div
        className="container mx-auto"
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeIn("right", 0.3)}
      >
        <div className="flex flex-col gap-y-12 lg:flex-row lg:gap-x-16 items-center">
          {/* Heading */}
          <div className="flex-1 mb-12 lg:mb-0">
            <motion.h2
              className="text-accent text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              My Technical Skills
            </motion.h2>
            <motion.h3
              className="text-white text-2xl mb-8"
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >
              Expertise in modern web development technologies
            </motion.h3>
          </div>

          {/* Skills List */}
          <div className="flex-1 space-y-8">
            {/* Programming Languages */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <h4 className="text-xl font-semibold mb-3 text-gradient">
                Programming Languages
              </h4>
              <p className="text-lg text-gray-300">JavaScript, TypeScript</p>
            </motion.div>

            {/* Front-end Development */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h4 className="text-xl font-semibold mb-3 text-gradient">
                Front-end Development
              </h4>
              <p className="text-lg text-gray-300">
                React.js, Next.js, Redux, Tailwind CSS, Ant Design
              </p>
            </motion.div>

            {/* Back-end Development */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.9 }}
              className="mb-6"
            >
              <h4 className="text-xl font-semibold mb-3 text-gradient">
                Back-end Development
              </h4>
              <p className="text-lg text-gray-300">Mongoose, Prisma</p>
            </motion.div>

            {/* Databases */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
              className="mb-6"
            >
              <h4 className="text-xl font-semibold mb-3 text-gradient">
                Databases
              </h4>
              <p className="text-lg text-gray-300">MongoDB, PostgreSQL</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

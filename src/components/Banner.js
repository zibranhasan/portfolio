import React from "react";
// images
import Image from "../assets/PXL_20240325_115443631.PORTRAIT.jpg";
//icons
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="mb-2 flex-1 text-center font-secondary lg:text-left">
            {/* Name */}
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              ZIBRAN<span className="text-gradient"> HASAN</span>
            </motion.h1>

            {/* Animated Text */}
            <motion.div
  variants={fadeIn("up", 0.3)}
  initial="hidden"
  whileInView={"show"}
  viewport={{
    once: false,
    amount: 0.7,
  }}
  // Responsive height and typography
  className="mb-6 text-[28px] sm:text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] h-[50px] sm:h-[60px] lg:h-[70px] flex items-center"
>

  <TypeAnimation
    sequence={["Full-Stack Developer", 2000]}
    speed={50}
    className="text-accent"
    wrapper="span"
    repeat={Infinity}
  />
</motion.div>


            {/* Description */}
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed text-gray-300"
            >
              I am a full-stack developer specializing in creating MERN Stack
              projects. Currently, I'm focused on building an online freelance
              experience to gain more expertise.
            </motion.p>

            {/* Portfolio Link */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a
                href="#"
                className="text-gradient btn-link text-lg font-semibold border-b-2 border-transparent hover:border-white transition duration-300"
              >
                My Portfolio
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="flex text-[24px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.facebook.com/zibranhasan.sourav.9/"
                className="hover:text-blue-500 transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/zibranhasan"
                className="hover:text-gray-400 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/zibran-hasan-64aa43276/"
                className="hover:text-blue-300 transition duration-300"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="rounded-lg lg:flex flex-1 max-w-[220px] lg:max-w-[350px] mx-auto shadow-lg shadow-gray-800  border-gray-700 hover:border-white transition duration-300 m-4"
          >
            <img src={Image} alt="Zibran Hasan" className="rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//img
import carWash from "../assets/carWashSystem.png";
import Electric from "../assets/ElectrciGadgetsMan.png";
import LostandfoundItem from "../assets/lostAndFoundItem.png";

const Work = () => {
  return (
    <section className="section pt-15" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={carWash}
                alt="Car Wash Management System"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                <span className="text-gradient"> Full Stack Project</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50 mb-2">
                <span className="text-1xl text-white font-bold mb-2">
                  Car Wash Management System
                </span>
              </div>
              {/* link */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <div className="flex gap-4 mb-2">
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://car-wash-booking-system-livid.vercel.app/"
                  >
                    Live Link
                  </a>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://github.com/zibranhasan/Car-wash-booking-system-frontend"
                  >
                    Client Link
                  </a>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://github.com/zibranhasan/Car-Wash-Booking-System_backend"
                  >
                    Server Link
                  </a>
                </div>
                {/* Credentials section */}
                <div className="mt-13">
                  {" "}
                  {/* Adjusted margin for more space */}
                  <p className="text-sm">
                    <span className="font-semibold">User:</span>
                    <span className="text-blue-400"> user@gmail.com</span> |
                    <span className="font-semibold"> Pass:</span> 123456
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-semibold">Admin:</span>
                    <span className="text-blue-400"> admin@gmail.com</span> |
                    <span className="font-semibold"> Pass:</span> 123456
                  </p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mb-8"
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Electric}
                alt="Electric Gadgets Management System"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                <span className="text-gradient">Full Stack Project</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50 mb-5">
                <span className="text-1xl text-white font-bold ">
                  Electric Gadgets Management System
                </span>
              </div>
              {/* link */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50 mt-2">
                <div className="flex gap-4 mt-5">
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://assignment-6-gilt-nine.vercel.app/"
                  >
                    Live Link
                  </a>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://github.com/zibranhasan/Electric-gadgets-management-system-frontend"
                  >
                    Client Link
                  </a>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://github.com/zibranhasan/Electric-gadgets-management-system-backend"
                  >
                    Server Link
                  </a>
                </div>
                {/* Credentials section */}
                <div className="mt-14">
                  <p className="text-sm">
                    <span className="font-semibold">User:</span>
                    <span className="text-blue-400"> user@gmail.com</span> |
                    <span className="font-semibold"> Pass:</span> 123456
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-semibold">Manager:</span>
                    <span className="text-blue-400"> manager@gmail.com</span> |
                    <span className="font-semibold"> Pass:</span> 123456
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={LostandfoundItem}
                alt="Lost and Found Item System"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                <span className="text-gradient">Full Stack Project</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50 mb-2">
                <span className="text-1xl text-white font-bold">
                  Lost and Found Item System
                </span>
              </div>
              {/* link */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <div className="flex gap-4 mb-2">
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://lost-and-found-item-frontend.vercel.app/"
                  >
                    Live Link
                  </a>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://github.com/zibranhasan/lost-and-found-item-backend"
                  >
                    Server Link
                  </a>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://github.com/zibranhasan/Lost-And-Found-Items-Frontend_Nextjs_RTK-Query_antd"
                  >
                    Client Link
                  </a>
                </div>
                {/* Credentials section */}
                <div className="mt-13">
                  <p className="text-sm">
                    <span className="font-semibold">User:</span>
                    <span className="text-blue-400"> user@gmail.com</span> |
                    <span className="font-semibold"> Pass:</span> 123456
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-semibold">Admin:</span>
                    <span className="text-blue-400"> admin@gmail.com</span> |
                    <span className="font-semibold"> Pass:</span> 123456
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;

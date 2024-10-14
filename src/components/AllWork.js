import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// images
import Img1 from "../assets/portfolio_img1.png"; // Make sure this path is correct
import Img2 from "../assets/portfolio_img2.png"; // Make sure this path is correct
import Img3 from "../assets/portfolio_img3.png";
import carWash from "../assets/carWashSystem.png";
import Electric from "../assets/ElectrciGadgetsMan.png";
import LostandfoundItem from "../assets/lostAndFoundItem.png";

const AllWork = () => {
  const projects = [
    {
      img: Img1,
      pretitle: "MERN Stack Project",
      title: "AirBnB Clone",
      liveLink: "https://airbnb-524ef.web.app/",
      clientLink:
        "https://github.com/zibranhasan/Airbnb_clone/tree/main/client",
      serverLink:
        "https://github.com/zibranhasan/Airbnb_clone/tree/main/server",
    },
    {
      img: Img2,
      pretitle: "MERN Stack Project",
      title: "E-commerce",
      liveLink: "https://ema-john-simple-139a1.web.app/",
      clientLink: "https://github.com/zibranhasan/ema-john-simple-client",
      serverLink: "https://github.com/zibranhasan/ema-john-simple-server",
    },
    {
      img: Img3,
      pretitle: "Front End Project",
      title: "Smart Home E-commerce",
      liveLink: "https://mellow-queijadas-791825.netlify.app/",
      clientLink: "https://github.com/zibranhasan/smart-home-complete.git",
    },
    {
      img: carWash,
      pretitle: "Full Stack Project",
      title: "Car Wash Management System",
      liveLink: "https://car-wash-booking-system-livid.vercel.app/",
      clientLink:
        "https://github.com/zibranhasan/Car-wash-booking-system-frontend",
      serverLink:
        "https://github.com/zibranhasan/Car-Wash-Booking-System_backend",
      credentials: [
        { role: "User", email: "user@gmail.com", pass: "123456" },
        { role: "Admin", email: "admin@gmail.com", pass: "123456" },
      ],
    },
    {
      img: Electric,
      pretitle: "Full Stack Project",
      title: "Electric Gadgets Management System",
      liveLink: "https://assignment-6-gilt-nine.vercel.app/",
      clientLink:
        "https://github.com/zibranhasan/Electric-gadgets-management-system-frontend",
      serverLink:
        "https://github.com/zibranhasan/Electric-gadgets-management-system-backend",
      credentials: [
        { role: "User", email: "user@gmail.com", pass: "123456" },
        { role: "Manager", email: "manager@gmail.com", pass: "123456" },
      ],
    },
    {
      img: LostandfoundItem,
      pretitle: "Full Stack Project",
      title: "Lost and Found Item System",
      liveLink: "https://lost-and-found-item-frontend.vercel.app/",
      clientLink:
        "https://github.com/zibranhasan/Lost-And-Found-Items-Frontend_Nextjs_RTK-Query_antd",
      serverLink: "https://github.com/zibranhasan/lost-and-found-item-backend",
      credentials: [
        { role: "User", email: "user@gmail.com", pass: "123456" },
        { role: "Admin", email: "admin@gmail.com", pass: "123456" },
      ],
    },
  ];

  return (
    <section className="section pt-15" id="work">
      <div className="container mx-auto">
        {projects.map((project, index) => (
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={project.img}
              alt={project.title}
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">{project.pretitle}</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3xl text-white">{project.title}</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
              <div className="flex gap-4">
                <a
                  className="text-blue-400 hover:underline"
                  href={project.liveLink}
                >
                  Live Link
                </a>
                <a
                  className="text-blue-400 hover:underline"
                  href={project.clientLink}
                >
                  Client Link
                </a>
                {project.serverLink && (
                  <a
                    className="text-blue-400 hover:underline"
                    href={project.serverLink}
                  >
                    Server Link
                  </a>
                )}
              </div>
              {project.credentials && (
                <div className="mt-4">
                  {project.credentials.map((cred, i) => (
                    <p className="text-sm" key={i}>
                      <span className="font-semibold">{cred.role}:</span>
                      <span className="text-blue-400"> {cred.email}</span> |
                      <span className="font-semibold"> Pass:</span> {cred.pass}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllWork;

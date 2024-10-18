import React from "react";
// images
import Image1 from "../assets/certificate.jpg";
import Image2 from "../assets/project.jpg";

const EduDetails = () => {
  const educationData = {
    degree: "Bachelor of Computer and Communication Engineering",
    institution: "International Islamic University Chittagong",
    duration: "2021 - Present",
    description:
      "Focused on core computer science and communication courses, including robotics, software development, and machine learning.",
  };

  const coreSubjects = {
    computerScience: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Artificial Intelligence",
      "Software Engineering",
    ],
    communication: [
      "Digital Communication",
      "Wireless Networks",
      "Signal Processing",
      "Microcontroller Systems",
      "IoT Systems",
    ],
  };

  const certifications = [
    {
      title: "Inter-Semester Programming Contest 2022",
      description:
        "Participated in the Inter-Semester Programming Contest 2022, where I tackled various programming challenges using C language. Solved numerous problems and received a certificate of attendance.",
      image: Image1, // Image path
    },
  ];

  const projects = [
    {
      title:
        "Remote Control WiFi Car using Arduino NodeMCU ESP8266 IoT with Bluetooth Communication",
      description:
        "Designed and built a remote control WiFi car that assists handicapped individuals and children with reading. Developed as part of a robotics course project at International Islamic University Chittagong.",
      image: Image2, // Image path
    },
  ];

  return (
    <div className="container mx-auto py-14 px-6">
      {/* Education Section */}
      <h1 className="text-5xl font-bold mb-10 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
        Education Details
      </h1>
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-2xl transition-all transform hover:scale-105">
        <h2 className="text-3xl font-semibold mb-2">{educationData.degree}</h2>
        <h3 className="text-xl font-medium mb-2">
          {educationData.institution}
        </h3>
        <p className="text-sm text-gray-400 mb-4">{educationData.duration}</p>
        <p className="text-base leading-relaxed">{educationData.description}</p>
      </div>

      {/* Core Subjects */}
      <div className="mt-14">
        <h2 className="text-5xl font-bold mb-10 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
          Core Subjects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Computer Science Core */}
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-2xl transition-all transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">
              Computer Science Core
            </h3>
            <ul className="list-disc list-inside text-base text-gray-400 space-y-2">
              {coreSubjects.computerScience.map((subject, index) => (
                <li key={index} className="hover:text-gray-200">
                  {subject}
                </li>
              ))}
            </ul>
          </div>
          {/* Communication Core */}
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-2xl transition-all transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Communication Core</h3>
            <ul className="list-disc list-inside text-base text-gray-400 space-y-2">
              {coreSubjects.communication.map((subject, index) => (
                <li key={index} className="hover:text-gray-200">
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications and Projects side by side */}
      <div className="mt-14">
        <h2 className="text-5xl font-bold mb-10 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
          Certifications & Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Certifications */}
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-2xl transition-all transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2">
              {certifications[0].title}
            </h3>
            <p className="text-base leading-relaxed">
              {certifications[0].description}
            </p>
            {certifications[0].image && (
              <img
                src={certifications[0].image}
                alt={certifications[0].title}
                className="mt-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
            )}
          </div>

          {/* Projects */}
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-2xl transition-all transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2">{projects[0].title}</h3>
            <p className="text-base leading-relaxed">
              {projects[0].description}
            </p>
            {projects[0].image && (
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="mt-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduDetails;

"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  video: string;
  iconLists: string[];
  link: string;
}

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="py-20">
      <h1 className="heading">
        A couple of most <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-80 w-[70vw] cursor-pointer"
            key={item.id}
            onClick={() => setSelectedProject(item)}
          >
            <PinContainer title="projects" href="">
              <div className="relative flex items-center justify-center sm:w-80 w-[70vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    View Demo
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black-200 bg-opacity-100 z-50 p-4">
          <div className="bg-white dark:bg-black-100 p-6 rounded-lg w-full max-w-5xl shadow-lg relative flex flex-col lg:flex-row gap-6">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✖
            </button>

            {/* Video Section */}
            <div className="w-full lg:w-1/2">
              <video controls className="w-full h-[380px] rounded-lg">
                <source src={selectedProject.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Text Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-500 mb-4">{selectedProject.des}</p>

              {/* Tech Stack Icons */}
              <div className="flex items-center gap-3 flex-wrap">
                {selectedProject.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center"
                  >
                    <img src={icon} alt="tech icon" className="p-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;

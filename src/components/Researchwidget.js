import React from "react";
import "tailwindcss/tailwind.css";

const Researchwidget = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
        <div className="flex relative w-52 h-32 sm:w-64 sm:h-36 border-[3px] border-gray-300 border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <img
            src={require("../public/images/bioinformatics.png").default}
            layout="fill"
            objectFit="cover"
            priority="true"
            position="relative"
            alt=""
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source
              src="../public/videos/bioinformatics.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="flex relative w-52 h-32 sm:w-64 sm:h-36 border-[3px] border-gray-300 border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <img
            src={require("../public/images/computational-biology.png").default}
            layout="fill"
            objectFit="cover"
            alt=""
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="../public/videos/dna.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex relative w-52 h-32 sm:w-64 sm:h-36 border-[3px] border-gray-300 border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <img
            src={
              require("../public/images/computational-material-science.png")
                .default
            }
            layout="fill"
            objectFit="cover"
            alt=""
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="../public/videos/atomstwo.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex relative w-52 h-32 sm:w-64 sm:h-36 border-[3px] border-gray-300 border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <img
            src={
              require("../public/images/machine-learning-for-science.png")
                .default
            }
            layout="fill"
            objectFit="cover"
            alt=""
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="../public/videos/ml.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
        <div className="flex relative w-52 h-32 sm:w-64 sm:h-36 border-[3px] border-gray-300 border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <img
            src={require("../public/images/nanoscience.png").default}
            layout="fill"
            objectFit="cover"
            alt=""
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="../public/videos/atoms.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex relative w-52 h-32 sm:w-64 sm:h-36 border-[3px] border-gray-300 border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <img
            src={require("../public/images/particle-physics.png").default}
            layout="fill"
            objectFit="cover"
            alt=""
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="../public/videos/atoms.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex relative w-52 h-32 sm:w-64 sm:h-36 border-[3px] border-gray-300 border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <img
            src={require("../public/images/Systems_Biology.png").default}
            layout="fill"
            objectFit="cover"
            alt=""
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="../public/videos/biology.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex relative w-52 h-32 sm:w-64 sm:h-36 border-[3px] border-gray-300 border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <img
            src={require("../public/images/theoritical-chemistry.png").default}
            layout="fill"
            objectFit="cover"
            alt=""
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source
              src={"../public/videos/bioinformaticstwo.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    </div>
  );
};

export default Researchwidget;

import React from "react";
import tw from "tailwind-styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const People = () => {
  return (
    <div>
      <Navbar transparent />
      <Header style={{ minHeight: "75vh" }}>
        <HeaderImage
          style={{
            backgroundImage: "url('https://i.gifer.com/QVGh.gif')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </HeaderImage>

        {/* Projects edit here */}
      </Header>

      <section className="relative py-16 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-44">
            <div className="px-6">
              <div className="text-center mt-8">
                <h3 className="text-3xl font-semibold leading-normal text-gray-800 mb-2">
                  <section className="pt-20 pb-48">
                    <div className="container mx-auto px-4">
                      <div className="flex flex-wrap justify-center text-center mb-24">
                        <div className="w-full lg:w-6/12 px-4">
                          <h2 className="text-4xl font-semibold">PEOPLE</h2>
                          <p className="text-lg leading-relaxed m-4 text-gray-600">
                            Our lab members
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                          <div className="px-6">
                            <img
                              alt="..."
                              src={
                                require("../public/images/devapriya.jpeg")
                                  .default
                              }
                              className="shadow-lg rounded-full max-w-full mx-auto"
                              style={{ maxWidth: "120px" }}
                            />
                            <div className="pt-6 text-center">
                              <h5 className="text-xl font-bold">
                                U. Deva Priyakumar, PhD
                              </h5>
                              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                Professor, CCNSB, IIIT-Hyderabad
                              </p>
                              <div className="mt-6">
                                <button
                                  className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                  type="button"
                                >
                                  <i className="fab fa-twitter"></i>
                                </button>
                                <button
                                  className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                  type="button"
                                >
                                  <i className="fab fa-facebook-f"></i>
                                </button>
                                <button
                                  className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                  type="button"
                                >
                                  <i className="fab fa-dribbble"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                          <div className="px-6">
                            <img
                              alt="..."
                              src={
                                require("../public/images/shampa.jpg").default
                              }
                              className="shadow-lg rounded-full max-w-full mx-auto"
                              style={{ maxWidth: "120px" }}
                            />
                            <div className="pt-6 text-center">
                              <h5 className="text-xl font-bold">
                                Shampa Raghunathan, PhD
                              </h5>
                              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                Senior Scientist
                              </p>
                              <div className="mt-6">
                                <button
                                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                  type="button"
                                >
                                  <i className="fab fa-google"></i>
                                </button>
                                <button
                                  className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                  type="button"
                                >
                                  <i className="fab fa-facebook-f"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                          <div className="px-6">
                            <img
                              alt="..."
                              src={
                                require("../public/images/tanashree.jpg")
                                  .default
                              }
                              className="shadow-lg rounded-full max-w-full mx-auto"
                              style={{ maxWidth: "120px" }}
                            />
                            <div className="pt-6 text-center">
                              <h5 className="text-xl font-bold">
                                Tanashree Jaganade
                              </h5>
                              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                PhD Student
                              </p>
                              <div className="mt-6">
                                <button
                                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                  type="button"
                                >
                                  <i className="fab fa-google"></i>
                                </button>
                                <button
                                  className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                  type="button"
                                >
                                  <i className="fab fa-twitter"></i>
                                </button>
                                <button
                                  className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                  type="button"
                                >
                                  <i className="fab fa-instagram"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                          <div className="px-6">
                            <img
                              alt="..."
                              src={
                                require("../public/images/shruti.jpg").default
                              }
                              className="shadow-lg rounded-full max-w-full mx-auto"
                              style={{ maxWidth: "120px" }}
                            />
                            <div className="pt-6 text-center">
                              <h5 className="text-xl font-bold">
                                Shruti Jeurkar
                              </h5>
                              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                PhD Student
                              </p>
                              <div className="mt-6">
                                <button
                                  className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                  type="button"
                                >
                                  <i className="fab fa-dribbble"></i>
                                </button>
                                <button
                                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                  type="button"
                                >
                                  <i className="fab fa-google"></i>
                                </button>
                                <button
                                  className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                  type="button"
                                >
                                  <i className="fab fa-twitter"></i>
                                </button>
                                <button
                                  className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                  type="button"
                                >
                                  <i className="fab fa-instagram"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default People;

const Header = tw.div`
    relative pt-16 pb-62 flex content-center items-center justify-center
    `;

const HeaderImage = tw.div`
    absolute top-0 w-full h-full bg-center bg-cover
    `;

const HeaderText = tw.div`
    container relative mx-auto
    `;

const HeaderText_one = tw.div`
    items-center flex flex-wrap
    `;

const HeaderText_two = tw.div`
    w-full lg:w-6/12 px-4 ml-auto mr-auto text-center
    `;

const HeaderTextMain = tw.div`
    text-white font-semibold text-5xl
    `;

const HeaderTextMain_child = tw.p`
    mt-4 text-lg text-gray-300
    `;

const Aboutus = tw.h1`
    w-full lg:w-6/12 px-4 ml-auto mr-auto text-center mb-4 font-semibold text-2xl
    
    `;

const AboutusText = tw.p`
    text-lg leading-relaxed m-4 text-gray-600
    `;

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Researchwidget from "./components/Researchwidget";
import "tailwindcss/tailwind.css";
import { Timeline } from "react-twitter-widgets";
import tw from "tailwind-styled-components";

const Home = () => {
  return (
    <div className="App">
      <Navbar transparent />
      <main>
        <Header style={{ minHeight: "75vh" }}>
          <HeaderImage
            style={{
              backgroundImage:
                "url('https://scitechdaily.com/images/DNA-Genetics.gif')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </HeaderImage>

          <HeaderText>
            <HeaderText_one>
              <HeaderText_two>
                <div className="pr-12">
                  <HeaderTextMain>BIIT</HeaderTextMain>
                  <HeaderTextMain_child>
                    Center for Computational Natural Sciences and Bioinformatics
                    International Institute of Information Technology,
                    Hyderabad.
                  </HeaderTextMain_child>
                </div>
              </HeaderText_two>
            </HeaderText_one>
          </HeaderText>

          {/* SliderEffect */}

          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          {/* SliderEffect */}
        </Header>

        <section className="pb-20 -mt-24">
          <Researchwidget />

          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center mt-32 mb-2">
              <Aboutus>About Us</Aboutus>
              <AboutusText>
                Welcome to the Center for Computational Natural Sciences and
                Bioinformatics – Our mission is to develop novel technologies
                using machine learning for chemistry, biology and protein
                structures. <br />
                <br />
                Our center is located within the rich ecosystem of the Vidhya
                Bhavan, Gachibowli, IIIT Hyderabad . We have an
                interdisciplinary research environment where engineers,
                biologists, chemists, physicists, pharmacists, material
                scientists, and clinicians work together to solve challenges in
                holistic and creative approaches. We love exciting and hard
                problems that will have an impact on people's lives.
              </AboutusText>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          {/* SliderEffect */}

          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          {/* SliderEffect */}
        </section>

        <section className=" pb-28 -mt-28">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">News</h2>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 items-center">
                <Timeline
                  dataSource={{
                    sourceType: "url",
                    url: "https://twitter.com/iiit_hyderabad",
                  }}
                  options={{ width: "400", height: "600" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">Join Us</h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Vivamus magna justo, lacinia eget consectetur sed,
                  convallis at tellus. Donec rutrum congue leo eget malesuada.
                  Sed porttitor lectus nibh.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center"></div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
const HeaderImage = tw.div`
absolute top-0 w-full h-full bg-center bg-cover
`;

const Header = tw.div`
relative pt-16 pb-32 flex content-center items-center justify-center
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

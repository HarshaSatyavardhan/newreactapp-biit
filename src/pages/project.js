import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div>
      <Navbar transparent />
      <Header style={{ minHeight: "75vh" }}>
        <HeaderImage
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/practicaldev/image/fetch/s--aY8jKbxD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/gfuvtuiovsav5i6313fs.gif')",
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
                  Projects
                </h3>
              </div>
              {/* Start here */}
              <div className="mt-10 py-5 border-t border-gray-300">
                <div className="flex flex-wrap justify-center">
                  <div className="flex flex-row w-full lg:w-9/12 px-4">
                    <p className="flex mb-1 text-lg leading-relaxed text-gray-800 justify-items-center hover:opacity-75 transition">
                      <p flex flex-col>
                        <Link to="/projects/Firstproject">
                          Information Learning Atomic Interactions through
                          Solvation Free Energy Prediction Using Graph Neural
                          Network.
                        </Link>
                        <p className="italic text-sm p-2">
                          Journal of Chemical Information and Modeling, 2021
                        </p>
                        <p className="italic text-sm p-2">
                          Yashaswi Pathak, Sarvesh Mehta, U Deva Priyakumar.
                        </p>
                      </p>
                    </p>
                  </div>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Google Scholar"
                      role="img"
                      viewBox="0 0 512 512"
                      className="w-6 h-6"
                      onClick={(e) => e.preventDefault()}
                    >
                      <rect width="512" height="512" rx="15%" fill="#4285f4" />
                      <path
                        fill="#fff"
                        d="M213 111l-107 94h69c5 45 41 64 78 67-7 18-4 27 7 39-43 1-103 26-103 67 4 45 63 54 92 54 38 1 81-19 90-54 4-35-10-54-31-71-23-18-28-28-21-40 15-17 35-27 39-51 2-17-2-28-6-43l45-38-1 16c-3 2-5 6-5 9v103c2 13 22 11 23 0V160c0-3-2-7-5-8v-25l16-16zm58 141c-61 10-87-87-38-99 56-11 83 86 38 99zm-5 73c60 13 61 63 10 78-44 9-82-4-81-30 0-25 35-48 71-48z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* End Here */}

              {/* Start here */}
              <div className="mt-5 py-5 border-t border-gray-300">
                <div className="flex flex-wrap justify-center">
                  <div className="flex flex-row w-full lg:w-9/12 px-4">
                    <p className="flex mb-1 text-lg leading-relaxed text-gray-800 justify-items-center hover:opacity-75 transition">
                      <p flex flex-col>
                        <Link to="/projects/SecondProject">
                          Second Project here
                        </Link>
                        <p className="italic text-sm p-2">YYYYYYYY, 2019</p>
                        <p className="italic text-sm p-2">YYY,YYY,YYYYY.</p>
                      </p>
                    </p>
                  </div>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Google Scholar"
                      role="img"
                      viewBox="0 0 512 512"
                      className="w-6 h-6"
                      onClick={(e) => e.preventDefault()}
                    >
                      <rect width="512" height="512" rx="15%" fill="#4285f4" />
                      <path
                        fill="#fff"
                        d="M213 111l-107 94h69c5 45 41 64 78 67-7 18-4 27 7 39-43 1-103 26-103 67 4 45 63 54 92 54 38 1 81-19 90-54 4-35-10-54-31-71-23-18-28-28-21-40 15-17 35-27 39-51 2-17-2-28-6-43l45-38-1 16c-3 2-5 6-5 9v103c2 13 22 11 23 0V160c0-3-2-7-5-8v-25l16-16zm58 141c-61 10-87-87-38-99 56-11 83 86 38 99zm-5 73c60 13 61 63 10 78-44 9-82-4-81-30 0-25 35-48 71-48z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* End Here */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Project;

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

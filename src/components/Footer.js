import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
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
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Center for Computational <br /> Natural Sciences and
              Bioinformatics
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6">
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <div className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                      <Link to="/">Home</Link>
                    </div>
                  </li>
                  <li>
                    <div className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                      <Link to="#">Publications</Link>
                    </div>
                  </li>
                  <li>
                    <div className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                      <Link to="/pages/people">People</Link>
                    </div>
                  </li>
                  <li>
                    <div className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                      <Link to="/pages/project">Projects</Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <span className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                      <a href="https://www.google.com/maps/place/Gayam+Motor+Works+(GMW)/@17.445296,78.349932,16z/data=!4m5!3m4!1s0x0:0xaf84b89b331c332a!8m2!3d17.4458249!4d78.3489187?hl=en">
                        A3-308 CCNSB,
                        <br />
                        IIIT Campus,
                        <br />
                        Gachibowli
                        <br />
                        Hyderabad 500 032,
                        <br />
                        India
                      </a>
                    </span>{" "}
                  </li>
                  <li>
                    <a href="mailto:deva@iiit.ac.in">
                      <span className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">
                        deva[at]iiit[dot]ac[dot]in
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © 2021 CCNSB | All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

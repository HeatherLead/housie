import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className=" bg-[#ecddb8] p-4 flex justify-between items-center  ">
        <div className="flex-shrink-0 ml-5">
          <Link
            to="/"
            className=" text-green-600 font-bold text-3xl underline-offset-4 underline hover:underline-offset-8 transition-all duration-200 "
          >
            Housie
          </Link>
        </div>
        <nav className=" md:p-2 p-4 w-fit text-right rounded-xl md:rounded-[40px] bg-white bg-opacity-15 backdrop-filter backdrop-blur-md shadow-sm">
          <div className="container mx-auto  flex  justify-between items-center w-fit">
            <div className="hidden md:flex space-x-10">
              <Link to="/about" className="text-white p-2 px-4 rounded-3xl ">
                About
              </Link>
              <Link to="/contact" className="text-white p-2 px-4 rounded-3xl ">
                Contact
              </Link>
              <Link
                to="/work"
                className="hover:text-white hover:bg-transparent hover:border-[.01px] border-white p-2 px-4 rounded-3xl bg-white text-black"
              >
                get Started!
              </Link>
            </div>

            <div className="md:hidden text-end">
              <button
                className="text-white focus:outline-none w-fit"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden">
              <div className="flex flex-col space-y-4 mt-4">
                <Link to="/about" className="text-white">
                  About
                </Link>
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
                <Link to="/work" className="text-white">
                  get started!
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/work" element={<GetStarted />} />
      </Routes>
    </>
  );
};

export default App;
//https://procreate-assets-cdn.procreate.art/img/pro-5-gen-landscape.1f03e19.png

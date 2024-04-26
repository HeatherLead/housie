import React, { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { GiBullseye } from "react-icons/gi";
import ipad from "./assets/abc.png";
import a from "./assets/pro-5-gen-landscape.ba0d72d.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-[#ecddb8] p-4 flex justify-between items-center  ">
      <div className="flex-shrink-0 ml-5">
        <a
          href="#"
          className=" text-green-600 font-bold text-3xl underline-offset-4 underline hover:underline-offset-8 transition-all duration-200 "
        >
          Housie
        </a>
      </div>
      <nav className=" md:p-2 p-4 w-fit text-right rounded-xl md:rounded-[40px] bg-white bg-opacity-15 backdrop-filter backdrop-blur-md shadow-sm">
        <div className="container mx-auto  flex  justify-between items-center w-fit">
          <div className="hidden md:flex space-x-10">
            <a
              href="#"
              className="text-white p-2 px-4 rounded-3xl hover:bg-white hover:text-black"
            >
              Products
            </a>
            <a
              href="#"
              className="text-white p-2 px-4 rounded-3xl hover:bg-white hover:text-black"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-white hover:bg-transparent hover:border-[.01px] border-white p-2 px-4 rounded-3xl bg-white text-black"
            >
              get Started!
            </a>
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
              <a href="#" className="text-white">
                Products
              </a>
              <a href="#" className="text-white">
                Services
              </a>
              <a href="#" className="text-white">
                get started!
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

function App() {
  const progressRef = useRef(null);
  const textRef = useRef(null);

  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    if (progressRef.current && textRef.current && isModelLoaded) {
      gsap.to(
        progressRef.current,
        {
          height: "1%",
          top: "70%",
          ease: "power3.inOut",
        },
        ">"
      );

      gsap.to(
        textRef.current,
        {
          y: 150,
          ease: "elastic.inOut",
          duration: 2,
        },
        ">"
      );
      gsap.to(progressRef.current, {
        transformOrigin: "center",
        scaleX: 0,
        duration: 2,
        ease: "power3.inOut",
      });
    }
  }, [isModelLoaded]);

  return (
    <>
      <Navbar />
      <div className=" flex justify-evenly items-center h-screen flex-wrap-reverse ">
        <div className="w-full h-full relative  ">
          <Spline
            scene="https://prod.spline.design/eB8jZ9MagKP18VYT/scene.splinecode"
            onLoad={() => setIsModelLoaded(true)}
          />
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <h1 ref={textRef} className=" text-white text-9xl">
              Housie
            </h1>
            <p className=" italic text-center text-white text-xl  translate-y-40">
              Design your house before it's build!
            </p>
          </div>
          <div
            ref={progressRef}
            className=" h-screen w-screen absolute top-0 scale-x-100 bg-[#f9e2a7] origin-center overflow-x-hidden  "
          ></div>
        </div>
      </div>
      {/* <div className=" w-screen h-screen flex  items-center ">
        <div className=" pl-28 w-[45%] self-center">
          <h1 className=" text-[#f7235b] text-3xl pb-10 flex gap-5">
            <GiBullseye />
            Concept-{">"}Reality
          </h1>
          <h1 className=" text-7xl text-white tracking-[.1em]  ">Crafting </h1>
          <h1 className=" text-7xl text-white tracking-wider">
            <span className=" font-bold tracking-[.3em]">Dreams </span>
            into Spaces.
          </h1>
        </div>
        <div className=" w-full  h-[70%]">
          <Spline scene="https://prod.spline.design/F0az6xuITohtcZjl/scene.splinecode" />
        </div>
      </div>
      <div className=" w-screen relative h-screen flex  items-center ">
        <img className=" bg-[#ecddb8]" src={ipad} alt="" />
        <div className=" text-[#f7235b] relative text-3xl pb-10 flex gap-5">
          <p className=" absolute animate-spin">↻</p>
          <h1 className=" ml-10">Performance</h1>
        </div>
      </div>
      <img src={a} alt="" /> */}
    </>
  );
}

export default App;
//https://procreate-assets-cdn.procreate.art/img/pro-5-gen-landscape.1f03e19.png

import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { GiBullseye } from "react-icons/gi";
import tablet from "../assets/tablet.mp4";
import box from "../assets/box.png";
import house from "../assets/back.png";
import Footer from "../components/Footer";

const Home = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <a data-scroll href="#scroll"></a>
      <div
        id="scroll"
        className=" flex justify-evenly items-center h-screen flex-wrap-reverse "
      >
        <div className="w-full h-full ">
          <Spline
            scene="https://prod.spline.design/eB8jZ9MagKP18VYT/scene.splinecode"
            className=" relative z-10"
          />
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <h1 className="hed text-white text-[400px]">Housie</h1>
          </div>
        </div>
      </div>
      <div className=" w-screen h-screen flex justify-around items-center ">
        <div className=" w-[45%] self-center">
          <h1 className=" text-[#f7235b] text-3xl pb-10 flex gap-5">
            <GiBullseye />
            Concept {"     >     "} Reality
          </h1>
          <h1 className=" text-7xl text-white tracking-[.1em]  ">Crafting </h1>
          <span className=" text-7xl text-white  font-bold tracking-[.3em]">
            Dreams{" "}
          </span>
          <h1 className=" text-7xl text-white tracking-wider">into Spaces.</h1>
        </div>
        <div className="  h-[50%]">
          <img className=" w-full h-full" src={house} alt="" />
        </div>
      </div>
      <div className=" w-screen relative  flex flex-col-reverse justify-evenly items-center ">
        <video
          className=" bg-[#ecddb8] w-[60%] rounded-[40px] shadow-2xl shadow-black m-4 mb-20 "
          src={tablet}
          autoPlay="true"
          loop="true"
          controls={hover}
          onMouseEnter={() => {
            setHover(!hover);
          }}
          onMouseLeave={() => {
            setHover(!hover);
          }}
        ></video>
        <div className=" flex justify-center flex-col items-center mb-20  ">
          <div className=" text-[#f7235b] relative text-2xl pb-10 w-[60%]  flex gap-5">
            <img
              src="https://procreate-assets-cdn.procreate.art/img/performing.28c91e2.png"
              alt=""
              className=" animate-spin w-8"
              loading="lazy"
            />

            <h1 className=" font-bold">PERFORMING</h1>
          </div>
          <h1 className=" text-white text-5xl tracking-wider font-extrabold w-[60%]">
            Experience seamless performance that elevates your journey
          </h1>
        </div>
      </div>

      <div className=" mb-20">
        <h1 className=" text-white text-7xl font-extrabold ml-40 mt-20 mb-5">
          Still not sure ?
        </h1>
        <div className="  flex justify-center items-center">
          <img
            loading="lazy"
            src={box}
            className=" w-[60%] rounded-[40px]"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
